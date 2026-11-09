# UJIKOM — Platform Panduan & Simulasi Ujian Komprehensif

**UJIKOM (Uji Kompetensi Komprehensif)** adalah platform web interaktif untuk mahasiswa tingkat akhir Program Studi S1 Manajemen **STIE Wibawa Karta Raharja**. Aplikasi ini dirancang sebagai panduan belajar komprehensif sekaligus mesin simulasi ujian yang mendukung dua mode asesmen: **Ujian Tertulis** (pilihan ganda, perhitungan rumus, dan analisis kasus) serta **Ujian Lisan / Sidang** (simulasi tanya jawab interaktif dengan rubrik penilaian dewan penguji).

---

## 🏛️ Latar Belakang & Landasan Akademik

Aplikasi ini berakar langsung pada silabus resmi **Buku Panduan Lengkap Ujian Komprehensif Program Studi Manajemen STIE Wibawa Karta Raharja**, yang mencakup **4 Pilar Utama Keilmuan Manajemen Terpadu**:

1. **Manajemen Operasional (MO)** — 15 Pokok Pembahasan (Rancang bangun proses transformasi, kapasitas, kualitas TQM/SPC, EOQ, MRP, rantai pasok, dan pemeliharaan mesin).
2. **Manajemen Keuangan (MK)** — 14 Pokok Pembahasan (Keputusan investasi NPV/IRR/PI, pendanaan & WACC, anuitas TVM, analisis laporan keuangan, BEP, leverage, dan kebijakan dividen).
3. **Manajemen Pemasaran (MP)** — 9 Pokok Pembahasan (Strategi produk PLC, manajemen jasa 7P, penetapan harga, distribusi, komunikasi pemasaran terpadu IMC, personal selling, dan pasar global).
4. **Manajemen Sumber Daya Manusia (MSDM)** — 8 Pokok Pembahasan (Transformasi administrasi ke MSDM strategis, rekrutmen & seleksi, penilaian kinerja KPI/BARS/360, kompensasi 3 keadilan, K3, HRIS, audit SDM, dan talent management).

---

## 🚀 Fitur Utama Phase 01 (Foundation & Architecture)

- **Sistem Navigasi & Routing Terstruktur**: Navigasi responsif untuk desktop dan perangkat seluler (Bottom Navigation).
- **Splashscreen Akademik**: Tampilan pengantar institusional 5 detik dengan opsi "Lewati" yang tidak mengganggu alur navigasi berikutnya.
- **Katalog & Pembaca Modul Materi**: Akses terstruktur ke 46 topik resmi dengan penekanan pada **Fokus Pertanyaan Penguji**, rumus kuantitatif, dan contoh kasus nyata.
- **Pencarian Real-Time**: Pencarian cepat berbasis kata kunci di seluruh 46 pokok bahasan.
- **Simulasi Ujian Komprehensif Dua Mode**:
  - **Ujian Tertulis**: Pilihan ganda dengan timer mundur, navigasi palet soal, dan penilaian otomatis.
  - **Ujian Lisan**: Latihan artikulasi argumentasi dengan panduan kriteria penguji, ekspektasi jawaban, kata kunci wajib, dan evaluasi mandiri.
- **Diagnostik Hasil Ujian**:
  - Skor total & konversi predikat akademik (A, B+, B, C, TL).
  - Evaluasi kelulusan berbasis passing grade standar (70).
  - Analisis penguasaan materi per bidang studi.
  - Analisis utilisasi waktu dan kecepatan pengerjaan per soal.
  - Review kunci jawaban dan pembahasan komprehensif dengan rujukan bibliografi.
- **Penyimpanan Lokal Multi-Layer**: Sinkronisasi LocalStorage dan fondasi IndexedDB untuk performa offline cepat.

---

## 🛠️ Technology Stack

- **Framework**: React 19 dengan TypeScript
- **Build Tool**: Vite 8
- **Routing**: React Router DOM (v7)
- **State Management**: Zustand & Context API
- **Styling**: Tailwind CSS 4 dengan Tipografi Plus Jakarta Sans
- **Icons**: Lucide React
- **Storage**: LocalStorage & IndexedDB (StorageService abstraction)
- **Unit Testing**: Node.js Test Runner (`node:test`, `node:assert/strict`) via `tsx`

---

## 💻 Cara Menjalankan Aplikasi

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Development
```bash
npm run dev
```
Aplikasi akan aktif di `http://localhost:3000`.

### 3. Menjalankan Unit Test Logika
```bash
npx --yes tsx --test src/pages/test/utils.test.ts
```

### 4. Build untuk Produksi
```bash
npm run build
```

---

## 📁 Dokumentasi Arsitektur Lengkap

Silakan baca dokumen arsitektur teknis terkait:
- [SYSTEM-INSTRUCTIONS.md](./SYSTEM-INSTRUCTIONS.md) — Aturan teknis dan pedoman coding engine.
- [PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md) — Struktur folder, file, dan pembagian tanggung jawab modul.
- [APPLICATION-FLOW.md](./APPLICATION-FLOW.md) — Alur lifecycle aplikasi, state transition, dan rute navigasi.
- [DEVELOPMENT-ROADMAP.md](./DEVELOPMENT-ROADMAP.md) — Roadmap pengembangan dari Phase 01 hingga Phase berikutnya.
- [DATA-ARCHITECTURE.md](./DATA-ARCHITECTURE.md) — Struktur data materi, bank soal, dan persistensi storage.
