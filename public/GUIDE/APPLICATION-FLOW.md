# APPLICATION-FLOW.md — Alur Navigasi, Siklus Hidup, & Transisi State

Dokumen ini mendefinisikan alur navigasi dari awal aplikasi dibuka hingga penyelesaian simulasi ujian komprehensif.

---

## 1. Siklus Hidup Awal (App Launch & Splashscreen)

```
[Pengguna Membuka Aplikasi]
            │
            ▼
Apakah `hasSeenSplash` bernilai TRUE di SessionStorage?
(atau terdapat query `?autostart=1` / `?skip_splash=1`?)
   ├── TIDAK ──► [Tampilkan Splashscreen (5 Detik)]
   │                │
   │                ├── Timer habis (5 detik) atau tombol "Lewati" ditekan
   │                ▼
   │             [Simpan `ujikom_splash_seen = true` di SessionStorage]
   │                ▼
   └── YA   ───► [Render Root Application Router]
```

> **Aturan Kritis**: Splashscreen hanya muncul satu kali per sesi browser. Berpindah halaman tidak akan memicu splashscreen muncul kembali.

---

## 2. Alur Navigasi Rute Aplikasi

```
                   ┌───────────────┐
                   │     HOME      │  Path: `/`
                   └───────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                                     ▼
┌───────────────┐                     ┌───────────────┐
│ KATALOG MATERI│ Path: `/materi`     │   HUB UJIAN   │ Path: `/test`
└───────┬───────┘                     └───────┬───────┘
        │                                     │
        ├─► `/materi/:bidangId`               ├─► [Buka Modal Pengaturan]
        │   (Ringkasan, Silabus)              │   Mode: Tertulis / Lisan
        │                                     │   Bidang, Jumlah Soal, Durasi
        ├─► `/materi/:bidangId/isi`           │
        │   (Pembacaan 46 Pokok Bahasan)      ▼
        │                              ┌───────────────┐
        └─► `/materi/referensi`        │  SESI UJIAN   │ Path: `/test/sesi`
            (Daftar Pustaka Buku)      └───────┬───────┘
                                              │
                                              │ * Timer berjalan mundur
                                              │ * Navigasi antar-soal
                                              │ * Simpan respon jawaban
                                              │ * Tombol Selesaikan Ujian
                                              ▼
                                       ┌───────────────┐
                                       │  HASIL UJIAN  │ Path: `/test/hasil`
                                       └───────────────┘
                                              │
                                              ├─► Tab Skor & Nilai (A, B+, B, C, TL)
                                              ├─► Tab Analisis Waktu
                                              └─► Tab Review Kunci & Pembahasan
```

---

## 3. Alur Sesi Ujian (State Transitions)

1. **Konfigurasi (`startNewExam`)**:
   - Pengguna memilih Mode (`tertulis` / `lisan`), Bidang (`semua` / bidang spesifik), Jumlah Soal (5–20), Durasi (10–45 menit), dan opsi pengacakan.
   - Sistem memfilter bank soal yang relevan, mengacak urutan jika opsi aktif, dan menginisialisasi timer dalam detik.

2. **Pengerjaan Sesi (`SessionMetode`)**:
   - `useExamSession` menjalankan interval detik (`decrementTimer`).
   - Apabila sisa waktu mencapai 0 detik, sistem secara otomatis mengevaluasi dan mengumpulkan ujian (`submitExam`).
   - Pengguna dapat berpindah soal secara sekuensial (Sebelumnya / Selanjutnya) atau melompat langsung melalui **Daftar Soal (Grid Palette)**.
   - Pilihan jawaban tersimpan secara reaktif dalam state store.

3. **Pengumpulan & Evaluasi (`evaluateExamSession`)**:
   - Menghitung persentase skor total: `(correctAnswers / totalQuestions) * 100`.
   - Mengelompokkan capaian per pilar: Operasional, Keuangan, Pemasaran, dan SDM.
   - Menentukan Grade akademik berdasarkan standar STIE Wikara:
     - 85 – 100: Grade A (Sangat Memuaskan)
     - 78 – 84: Grade B+ (Sangat Baik)
     - 70 – 77: Grade B (Baik / Standar Kelulusan)
     - 60 – 69: Grade C (Cukup / Penguatan Diperlukan)
     - < 60: Grade TL (Tidak Lulus / Wajib Remedial)
   - Status kelulusan (`passed: boolean`) ditentukan berdasarkan ambang skor `>= 70`.
   - Hasil disimpan ke dalam `LocalStorage` dan `IndexedDB` melalui `storageService`.

4. **Review & Umpan Balik (`Hasil`)**:
   - Pengguna disajikan visualisasi skor, evaluasi efisiensi waktu, serta pembahasan per butir soal beserta rujukan halaman buku panduan.
   - Terdapat tautan langsung untuk kembali memperdalam topik modul yang belum dikuasai.
