/**
 * Types for Materi Ujian Komprehensif
 * Based on Panduan Lengkap Ujian Komprehensif Program Studi S1 Manajemen
 * Sesuai Spesifikasi PHASE 02 — CONTENT IMPLEMENTATION & PDF ACCURACY
 */

export type BidangId = 'operasional' | 'keuangan' | 'pemasaran' | 'sdm';

export interface PokokBahasanItem {
  id: string;
  nomor: string;              // e.g. "1.2.1"
  subbab: string;             // e.g. "1.2"
  judul: string;
  ringkasan: string;
  isiMateri: string;          // Penjelasan komprehensif mengacu pada isi PDF
  fokusUjian: string;         // Fokus pertanyaan penguji ujian komprehensif
  poinKunci: string[];        // Poin penting materi
  penjelasanPendukung?: string; // Ditandai sebagai penjelasan pendukung kontekstual (bukan kutipan langsung)
  contohPenerapan?: string;   // Contoh kasus pada organisasi/perusahaan
  rumusAtauMetode?: string[]; // Rumus, tabel, atau metode kuantitatif
  halamanPdf?: string;        // Nomor halaman PDF sumber (e.g. "Hal. 3")
  referensi?: string;         // Rujukan pustaka spesifik subbab
}

export interface ReferensiBuku {
  id: string;
  penulis: string;
  tahun: string;
  judul: string;
  penerbit: string;
  catatan?: string;
  halamanPdf?: string;        // Halaman pada dokumen PDF (e.g. "Hal. 3", "Hal. 13")
}

export interface BidangMateri {
  id: BidangId;
  nama: string;
  kode: string;
  nomorBab: number;           // 1, 2, 3, 4
  judulBab: string;           // e.g. "BAB 1 — MANAJEMEN OPERASIONAL"
  halamanPdf: string;         // e.g. "Hal. 3–5"
  deskripsi: string;
  iconName: string;
  color: string;
  gambaranUmum: string;       // Subbab 1.1.1 / 2.1.1 / 3.1.1 / 4.1.1
  konsepDasar: string;        // Penjelasan konsep dasar modul
  tujuanPembelajaran: string[];// Tujuan pembelajaran dan penguasaan materi
  pokokBahasan: PokokBahasanItem[]; // Daftar subpokok pembahasan
  referensi: ReferensiBuku[];  // Sumber referensi resmi dari PDF
  petunjukUjian: string[];    // Petunjuk khusus bagi peserta ujian
}
