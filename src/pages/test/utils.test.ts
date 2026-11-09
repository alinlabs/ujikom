import { test, describe } from 'node:test';
import assert from 'node:assert';
import { operasionalQuestions } from './bank-soal/operasional';
import { pemasaranQuestions } from './bank-soal/pemasaran';
import { keuanganQuestions } from './bank-soal/keuangan';
import { sdmQuestions } from './bank-soal/sdm';
import { convertToPhoneticSpeech, getQuestionSpeechText } from '../../utils/phonetic';

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
});
