import { test, describe } from 'node:test';
import assert from 'node:assert';
import { operasionalQuestions } from './bank-soal/operasional';
import { pemasaranQuestions } from './bank-soal/pemasaran';
import { keuanganQuestions } from './bank-soal/keuangan';
import { sdmQuestions } from './bank-soal/sdm';
import {
  convertToPhoneticSpeech,
  getQuestionSpeechText,
  getMateriTopicSpeechText,
  getBidangRingkasanSpeechText,
  getBidangReferensiSpeechText,
  getGlobalReferensiSpeechText,
  buildMateriSlideSpeechSegments,
} from '../../utils/phonetic';
import { allBidangMateri } from '../materi/utils';
import {
  speechService,
  DEFAULT_MATERI_SPEECH_SETTINGS,
} from '../../services/speechService';
import {
  parseAndEvaluateBilingualAnswer,
  evaluateExamSession,
} from './utils';
import { ExamConfig } from '../../types/exam';

describe('Bank Soal & Transkripsi Fonetis TTS', () => {
  test('seluruh 170 soal di semua bidang memiliki transkripFonetis lengkap', () => {
    const all = [
      ...pemasaranQuestions,
      ...sdmQuestions,
      ...keuanganQuestions,
      ...operasionalQuestions,
    ];

    assert.strictEqual(all.length, 170);
    all.forEach((q) => {
      assert.ok(q.transkripFonetis, `Soal ${q.id} harus memiliki transkripFonetis`);
      assert.ok(q.transkripFonetis.length > 10, `Transkrip ${q.id} harus memiliki isi memadai`);
    });
  });

  test('seluruh data materi tidak mengandung simbol em-dash (—)', () => {
    allBidangMateri.forEach((bidang) => {
      assert.ok(!bidang.judulBab.includes('—'), `${bidang.id} judulBab tidak boleh mengandung —`);
      assert.ok(!bidang.gambaranUmum.includes('—'), `${bidang.id} gambaranUmum tidak boleh mengandung —`);
      assert.ok(!bidang.konsepDasar.includes('—'), `${bidang.id} konsepDasar tidak boleh mengandung —`);
      bidang.pokokBahasan.forEach((topic) => {
        assert.ok(!topic.fokusUjian.includes('—'), `${topic.id} fokusUjian tidak boleh mengandung —`);
        assert.ok(!topic.ringkasan.includes('—'), `${topic.id} ringkasan tidak boleh mengandung —`);
        assert.ok(!topic.isiMateri.includes('—'), `${topic.id} isiMateri tidak boleh mengandung —`);
      });
    });
  });

  test('soal 3P pemasaran (soal-mp-02-4) memiliki transkrip fonetis persis sesuai spesifikasi user', () => {
    const q3P = pemasaranQuestions.find((q) => q.id === 'soal-mp-02-4');
    assert.ok(q3P, 'Soal 3P pemasaran harus ditemukan');
    assert.strictEqual(
      q3P.transkripFonetis,
      'Apa tujuan penambahan Tri Pi, yaitu Pipelt atau Orang, Proses atau Proses, dan Fisikel Efidens atau Bukti Fisik, pada bauran pemasaran jasa melengkapi For Pi tradisional?'
    );
  });

  test('convertToPhoneticSpeech mengonversi kurung bilingual dan istilah bahasa Inggris dengan benar', () => {
    const sample = 'Apa tujuan penambahan 3P (People / Orang, Process / Proses, Physical Evidence / Bukti Fisik) pada bauran pemasaran jasa melengkapi 4P tradisional?';
    const converted = convertToPhoneticSpeech(sample);
    assert.strictEqual(
      converted,
      'Apa tujuan penambahan Tri Pi, yaitu Pipelt atau Orang, Proses atau Proses, dan Fisikel Efidens atau Bukti Fisik, pada bauran pemasaran jasa melengkapi For Pi tradisional?'
    );
  });

  test('getQuestionSpeechText mengembalikan transkripFonetis jika tersedia', () => {
    const q = pemasaranQuestions.find((item) => item.id === 'soal-mp-02-4')!;
    const speech = getQuestionSpeechText(q);
    assert.strictEqual(speech, q.transkripFonetis);
  });

  test('seluruh 4 modul materi dan 34 slide pokok bahasan memiliki segmen fonetis berintonasi mulai dari Fokus Jawaban hingga Contoh Kasus', () => {
    assert.strictEqual(allBidangMateri.length, 4);
    let totalSlides = 0;

    assert.ok(!/\banda\b/i.test(getGlobalReferensiSpeechText()), 'getGlobalReferensiSpeechText tidak boleh memakai kata kaku Anda');

    allBidangMateri.forEach((bidang) => {
      assert.ok(bidang.ringkasanFonetis && bidang.ringkasanFonetis.length > 30, `Bidang ${bidang.id} harus memiliki ringkasanFonetis`);
      assert.ok(!/\banda\b/i.test(bidang.ringkasanFonetis), `Bidang ${bidang.id} ringkasanFonetis tidak boleh memakai kata kaku Anda`);
      assert.ok(!bidang.petunjukUjian.some((p) => /\banda\b/i.test(p)), `Bidang ${bidang.id} petunjukUjian tidak boleh memakai kata kaku Anda`);
      assert.ok(bidang.referensiFonetis && bidang.referensiFonetis.length > 30, `Bidang ${bidang.id} harus memiliki referensiFonetis`);
      assert.ok(!/\banda\b/i.test(bidang.referensiFonetis), `Bidang ${bidang.id} referensiFonetis tidak boleh memakai kata kaku Anda`);
      assert.ok(getBidangRingkasanSpeechText(bidang).length > 30);
      assert.ok(getBidangReferensiSpeechText(bidang).length > 30);

      bidang.pokokBahasan.forEach((topic) => {
        totalSlides++;
        assert.ok(topic.fokusUjian && topic.fokusUjian.startsWith('Fokuskan '), `Topik ${topic.id} fokusUjian harus berfokus pada sudut pandang mahasiswa ("Fokuskan ...")`);
        assert.ok(!/\b(penguji|dosen|mahasiswa|anda)\b/i.test(topic.fokusUjian), `Topik ${topic.id} fokusUjian harus memakai diksi ramah tanpa penguji/dosen/mahasiswa/Anda`);
        assert.ok(topic.transkripFonetis, `Topik ${topic.id} harus memiliki transkripFonetis`);
        assert.ok(!/\banda\b/i.test(topic.transkripFonetis), `Topik ${topic.id} transkripFonetis tidak boleh memakai kata kaku Anda`);
        assert.ok(topic.transkripFonetis.length > 50, `Topik ${topic.id} harus memiliki penjelasan fonetis memadai`);

        assert.ok(!('poinKunci' in topic), `Topik ${topic.id} tidak boleh lagi menyimpan poinKunci`);
        assert.ok(!('contohPenerapan' in topic), `Topik ${topic.id} tidak boleh lagi menyimpan contohPenerapan`);

        const segments = buildMateriSlideSpeechSegments(topic);
        const combined = segments.map((s) => s.text).join(' ');
        const idxFokus = combined.indexOf('fokus jawabannya');
        assert.ok(!/\banda\b/i.test(combined), `Topik ${topic.id} segmen TTS tidak boleh memakai kata kaku Anda`);
        assert.ok(!combined.includes('uraian materinya'), `Topik ${topic.id} langsung membacakan deskripsi materi tanpa pengantar judul Uraian Materi`);
        assert.ok(!combined.includes('pokok pembahasannya'), `Topik ${topic.id} halaman detail tidak membacakan Pokok Pembahasan`);
        assert.ok(idxFokus !== -1, `Topik ${topic.id} harus memuat pengantar fokus jawaban`);
        assert.ok(!combined.includes('Rujukan pustaka'), `Topik ${topic.id} tidak boleh membacakan Rujukan pustaka`);
        if (topic.penjelasanPendukung) {
          const idxPendukung = combined.indexOf('penjelasan pendukung beserta contoh kasusnya');
          assert.ok(idxPendukung > idxFokus, `Topik ${topic.id} harus memuat penjelasan pendukung beserta contoh kasusnya setelah fokus jawaban`);
        }
        assert.ok(!/[\/\(\)=—–:]|->|\bvs\b|%|\d/.test(combined), `Topik ${topic.id} tidak boleh menyisakan angka digit, titik dua, atau simbol kaku pada segmen fonetis`);
        assert.ok(getMateriTopicSpeechText(topic).length > 50);
      });
    });

    assert.strictEqual(totalSlides, 34);

    // Pastikan penjelasan berpola "2. Proses Pengolahan (Transformasi): Kegiatan mengubah..." dibaca natural dengan "merupakan"
    const mo1 = allBidangMateri[0].pokokBahasan[0];
    const mo1Speech = getMateriTopicSpeechText(mo1);
    assert.ok(
      mo1Speech.includes('Kedua, Proses Pengolahan, atau Transformasi merupakan kegiatan mengubah'),
      'Titik dua pada definisi istilah materi harus dibaca dengan penghubung alami seperti merupakan/adalah'
    );
  });

  test('pengaturan default audio materi dan seleksi gender suara aman digunakan tanpa error', () => {
    assert.strictEqual(DEFAULT_MATERI_SPEECH_SETTINGS.gender, 'female');
    assert.strictEqual(DEFAULT_MATERI_SPEECH_SETTINGS.rate, 1.0);
    assert.strictEqual(DEFAULT_MATERI_SPEECH_SETTINGS.pitch, 1.0);
    assert.strictEqual(DEFAULT_MATERI_SPEECH_SETTINGS.volume, 1.0);
    assert.strictEqual(DEFAULT_MATERI_SPEECH_SETTINGS.autoPlayNext, true);

    const femaleInfo = speechService.getVoiceForGender('female');
    const maleInfo = speechService.getVoiceForGender('male');
    assert.strictEqual(typeof femaleInfo.isExactGenderMatch, 'boolean');
    assert.strictEqual(typeof maleInfo.isExactGenderMatch, 'boolean');
  });

  test('evaluasi keyword voice & input mendukung bahasa Indonesia saja, sinonim, kredit parsial non-nol, serta nol untuk jawaban acak', () => {
    const qLevels = pemasaranQuestions.find((q) => q.id === 'soal-mp-01-2')!;
    const fullIndo = parseAndEvaluateBilingualAnswer(
      'Tiga tingkatan produk yaitu manfaat inti, produk aktual, dan produk tambahan.',
      qLevels
    );
    assert.strictEqual(fullIndo.matchedKeywords.length, 3);
    assert.ok(fullIndo.matchPercentage >= 80, `Expected >= 80, got ${fullIndo.matchPercentage}`);
    assert.strictEqual(fullIndo.isCorrect, true);

    // Jawaban sedikit sesuai tidak harus jadi 0
    const qOperasional = operasionalQuestions.find((q) => q.id === 'soal-mo-01-1')!;
    const slightMatch = parseAndEvaluateBilingualAnswer('barang jadi', qOperasional);
    assert.ok(slightMatch.matchPercentage > 0, 'Sedikit kesesuaian keyword tidak boleh 0%');
    assert.ok(slightMatch.scoreEarned > 0, 'Skor parsial harus lebih besar dari 0');

    // Sinonim & ejaan STT (mis. "efisiensi ongkos" untuk "hemat biaya")
    const qTujuanMO = operasionalQuestions.find((q) => q.id === 'soal-mo-01-4')!;
    const synonymMatch = parseAndEvaluateBilingualAnswer(
      'supaya produksi lancar efisiensi ongkos dan kualitas bagus',
      qTujuanMO
    );
    assert.ok(synonymMatch.matchedKeywords.length >= 2, 'Sinonim STT harus cocok dengan kata kunci utama');
    assert.ok(synonymMatch.matchPercentage >= 65, `Expected >= 65, got ${synonymMatch.matchPercentage}`);

    // Jawaban tidak nyambung sama sekali -> 0
    const unrelated = parseAndEvaluateBilingualAnswer('cuaca mendung hari minggu pagi', qOperasional);
    assert.strictEqual(unrelated.matchPercentage, 0);
    assert.strictEqual(unrelated.scoreEarned, 0);
  });

  test('evaluateExamSession mengevaluasi ketiga mode (pilihan_ganda, tertulis, lisan) secara akurat', () => {
    const sampleQs = [operasionalQuestions[0], pemasaranQuestions[1]];

    const pgConfig: ExamConfig = {
      mode: 'pilihan_ganda',
      selectedBidang: 'semua',
      totalQuestions: 2,
      durationMinutes: 10,
      randomize: false,
      questionDeliveryMode: 'text',
      answerType: 'pilihan_ganda',
    };
    const pgResult = evaluateExamSession(
      sampleQs,
      {
        [sampleQs[0].id]: { questionId: sampleQs[0].id, userAnswer: sampleQs[0].kunciJawaban, timeSpentSeconds: 5 },
        [sampleQs[1].id]: { questionId: sampleQs[1].id, userAnswer: 'D', timeSpentSeconds: 5 },
      },
      pgConfig,
      10
    );
    assert.strictEqual(pgResult.score, 50);
    assert.strictEqual(pgResult.correctAnswers, 1);

    const voiceConfig: ExamConfig = {
      ...pgConfig,
      mode: 'lisan',
      questionDeliveryMode: 'voice',
      answerType: 'voice_input',
    };
    const voiceResult = evaluateExamSession(
      sampleQs,
      {
        [sampleQs[0].id]: {
          questionId: sampleQs[0].id,
          userNotesOrAudio: 'mengolah bahan mentah menjadi barang jadi atau jasa yang bermutu baik',
          timeSpentSeconds: 12,
        },
        [sampleQs[1].id]: {
          questionId: sampleQs[1].id,
          userNotesOrAudio: 'manfaat inti saja',
          timeSpentSeconds: 8,
        },
      },
      voiceConfig,
      20
    );
    assert.ok(voiceResult.responses[0].matchPercentage! >= 85);
    assert.ok(voiceResult.responses[1].scoreEarned! > 0, 'Jawaban lisan parsial tetap mendapat nilai');
    assert.ok(voiceResult.score > 50);
  });
});
