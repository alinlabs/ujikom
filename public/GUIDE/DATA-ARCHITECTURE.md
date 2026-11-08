# DATA-ARCHITECTURE.md — Arsitektur Data, Schema, & Persistensi

Dokumen ini mendeskripsikan struktur entitas data, model relasi, serta strategi persistensi offline pada aplikasi **UJIKOM**.

---

## 1. Diagram Relasi Entitas (ERD Konseptual)

```
┌─────────────────────────────────┐
│          BidangMateri           │
├─────────────────────────────────┤
│ id: BidangId ('operasional'|...)│
│ nama: string                    │
│ kode: string ('MO'|'MK'|...)    │
│ deskripsi: string               │
│ gambaranUmum: string            │
│ petunjukUjian: string[]         │
└──────────────┬──────────────────┘
               │ 1
               │
               │ M
┌──────────────▼──────────────────┐       ┌─────────────────────────────────┐
│        PokokBahasanItem         │       │          ReferensiBuku          │
├─────────────────────────────────┤       ├─────────────────────────────────┤
│ id: string                      │       │ id: string                      │
│ nomor: string ('1.2.1')         │       │ penulis: string                 │
│ judul: string                   │       │ tahun: string                   │
│ ringkasan: string               │       │ judul: string                   │
│ fokusUjian: string              │       │ penerbit: string                │
│ poinKunci: string[]             │       │ catatan?: string                │
│ rumusAtauMetode?: string[]      │       └─────────────────────────────────┘
│ contohPenerapan?: string        │
└──────────────┬──────────────────┘
               │ 1
               │
               │ M
┌──────────────▼──────────────────┐
│          ExamQuestion           │
├─────────────────────────────────┤
│ id: string                      │
│ bidangId: BidangId              │
│ topikId: string                 │
│ type: QuestionType              │
│ pertanyaan: string              │
│ skenarioKasus?: string          │
│ options?: QuestionOption[]      │
│ kunciJawaban?: 'A'|'B'|'C'|'D'|'E'│
│ rubrikPenilaianLisan?: object   │
│ pembahasan: string              │
│ referensiBuku: string           │
└──────────────┬──────────────────┘
               │
               │ M
┌──────────────▼──────────────────┐       ┌─────────────────────────────────┐
│        UserExamResponse         │       │           ExamResult            │
├─────────────────────────────────┤       ├─────────────────────────────────┤
│ questionId: string              │       │ id: string                      │
│ userAnswer?: 'A'|'B'|'C'|'D'|'E'│◄──────┤ timestamp: number               │
│ userNotesOrAudio?: string       │       │ config: ExamConfig              │
│ selfAssessedScore?: number      │       │ totalQuestions: number          │
│ isCorrect?: boolean             │       │ correctAnswers: number          │
│ timeSpentSeconds: number        │       │ score: number (0-100)           │
└─────────────────────────────────┘       │ grade: 'A'|'B+'|'B'|'C'|'TL'    │
                                          │ passed: boolean                 │
                                          │ totalTimeSeconds: number        │
                                          │ breakdownPerBidang: object      │
                                          └─────────────────────────────────┘
```

---

## 2. Struktur Model TypeScript

### A. Model Materi (`src/types/materi.ts`)
- `BidangMateri`: Merepresentasikan 4 mata kuliah utama dalam ujian komprehensif.
- `PokokBahasanItem`: Butir topik spesifik dengan nomor, judul, ringkasan pengantar, fokus ujian penguji, serta poin-poin kunci.
- `ReferensiBuku`: Rujukan bibliografi terverifikasi sesuai panduan STIE Wikara.

### B. Model Ujian & Evaluasi (`src/types/exam.ts`)
- `ExamMode`: `'tertulis' | 'lisan'`.
- `QuestionType`: `'pilihan_ganda' | 'studi_kasus' | 'tanya_jawab_lisan'`.
- `ExamConfig`: Konfigurasi sesi (mode, bidang, jumlah soal, batas waktu, pengacakan).
- `ExamResult`: Hasil evaluasi terperinci dengan skor akhir, grade kelulusan, dan penguasaan per bidang.

---

## 3. Strategi Persistensi Data (Multi-Tier Storage)

Aplikasi mengimplementasikan `StorageService` (`src/services/storageService.ts`) dengan pendekatan bertingkat:

1. **SessionStorage**:
   - Menyimpan flag `ujikom_splash_seen: 'true'`.
   - Menjamin splashscreen hanya muncul satu kali saat aplikasi pertama kali dibuka oleh pengguna dalam satu sesi tab.

2. **LocalStorage (`safeLocalStorage`)**:
   - Menyimpan buffer cepat riwayat hasil ujian (`ujikom_app_exam_history`).
   - Menyimpan daftar topik yang sudah dipelajari (`ujikom_app_completed_topics`).
   - Dilengkapi fungsi penanganan error jika kuota browser penuh atau format JSON tidak valid.

3. **IndexedDB (`ujikom_indexeddb`, Version 1)**:
   - Object Store `exam_results`: Menyimpan arsip riwayat pengerjaan ujian komprehensif lengkap tanpa batas kuota 5MB LocalStorage.
   - Object Store `study_progress`: Menyimpan log aktivitas belajar mahasiswa secara asinkron.
   - Fallback otomatis ke LocalStorage jika IndexedDB diblokir oleh mode penyamaran (private browsing) tertentu.
