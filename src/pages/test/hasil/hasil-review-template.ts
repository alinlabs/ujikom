export interface ResultFeedbackTemplate {
  title: string;
  summary: string;
  recommendations: string[];
}

export const getResultFeedbackTemplate = (
  score: number,
  passed: boolean
): ResultFeedbackTemplate => {
  if (score >= 85) {
    return {
      title: 'Performa Unggul (Grade A) — Kesiapan Cumlaude',
      summary:
        'Selamat! Hasil evaluasi menunjukkan penguasaan materi komprehensif yang sangat mendalam pada seluruh pilar keilmuan Manajemen S1. Anda siap menghadapi sidang komprehensif resmi.',
      recommendations: [
        'Pertahankan irama belajar dan penguasaan istilah teknis bahasa Inggris.',
        'Bantu teman seangkatan dalam diskusi kelompok (study group) untuk memperkuat artikulasi lisan.',
        'Pelajari kasus-kasus bisnis terkini untuk memperkaya contoh kasus saat tanya-jawab sidang.',
      ],
    };
  }

  if (score >= 70) {
    return {
      title: 'Lulus Standar Kelulusan (Grade B / B+)',
      summary:
        'Anda telah memenuhi kriteria passing grade kelulusan Ujian Komprehensif (Nilai ≥ 70). Beberapa topik kuantitatif membutuhkan sedikit penyempurnaan.',
      recommendations: [
        'Review kembali rumus-rumus kuantitatif (EOQ, ROP, NPV, WACC, BEP) yang sempat keliru.',
        'Perbanyak simulasi ujian lisan untuk melatih kecepatan artikulasi poin penting.',
        'Baca kembali ringkasan ringkas pada modul bidang yang skornya di bawah 80%.',
      ],
    };
  }

  return {
    title: 'Belum Memenuhi Standar Kelulusan (Remedial Wajib)',
    summary:
      'Skor Anda belum mencapai batas minimum kelulusan (Nilai 70). Jangan berkecil hati, gunakan hasil analisis ini untuk pendalaman materi terfokus.',
    recommendations: [
      'Buka modul materi keempat pilar utama di menu Katalog Pembelajaran.',
      'Fokus pada pokok bahasan yang indikator penguasaannya masih di bawah 60%.',
      'Manfaatkan fitur simulasi latihan soal per bidang sebelum mengambil ujian komprehensif terpadu kembali.',
    ],
  };
};
