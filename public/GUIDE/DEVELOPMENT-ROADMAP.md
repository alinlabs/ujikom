# DEVELOPMENT-ROADMAP.md — Peta Jalan Pengembangan UJIKOM

Dokumen ini memetakan tahapan rilis pengembangan sistem UJIKOM dari fondasi arsitektur hingga fitur lanjutan.

---

## 🟢 PHASE 01 — Foundation & System Architecture (TAHAP SAAT INI)

Fokus utama adalah menyiapkan fondasi modular, arsitektur data, routing, dan kerangka kerja sistem:

- [x] Struktur direktori modular terpisah (`src/components/`, `src/pages/`, `src/stores/`, `src/services/`, dll.).
- [x] Dokumentasi arsitektur komprehensif (README, System Instructions, Structure, Flow, Roadmap, Data Architecture).
- [x] Konfigurasi routing lengkap (Splashscreen, Home, Modul Materi, Referensi, Pengaturan Ujian, Sesi Ujian, Hasil Ujian).
- [x] Splashscreen akademik institusi 5 detik dengan skip button dan session persistence.
- [x] Data silabus resmi 4 pilar manajemen (46 pokok bahasan) dari buku panduan STIE Wibawa Karta Raharja.
- [x] Kerangka komponen global (Header, Footer, BottomNavigation, Modal, Layout).
- [x] Mesin evaluasi ujian (Scoring, Grading A/B+/B/C/TL, passing threshold 70, time tracking).
- [x] Unit test murni menggunakan `node:test` untuk logika scoring dan silabus.
- [x] Fondasi persistensi multi-tier (LocalStorage sync buffer + IndexedDB offline store).

---

## 🟡 PHASE 02 — Content Enrichment & Interactive Question Engine

Pengembangan konten dan pendalaman bank soal:

- [ ] Ekspansi bank soal komprehensif menjadi 100+ soal pilihan ganda berbobot.
- [ ] Penambahan modul studi kasus kuantitatif terpandu (Latihan interaktif rumus EOQ, Kapasitas, NPV, BEP, dan Rasio Keuangan dengan kalkulator pendamping).
- [ ] Pengayaan rubrik ujian lisan dengan simulasi skenario pertanyaan mendadak dari dewan penguji.
- [ ] Penambahan fitur Bookmark Topik dan Catatan Pribadi Mahasiswa pada setiap pokok bahasan.

---

## 🟠 PHASE 03 — Advanced Analytics & Visual Dashboard

Visualisasi dan analitik hasil belajar mahasiswa:

- [ ] Integrasi diagram visualisasi radar/bar (Recharts) untuk memetakan kekuatan dan kelemahan antarpilar (Operasional vs Keuangan vs Pemasaran vs SDM).
- [ ] Fitur ekspor Lembar Hasil Simulasi Ujian (PDF Report Card) untuk bahan bimbingan dengan dosen wali.
- [ ] Histori tren peningkatan nilai berkala mahasiswa dari waktu ke waktu.
- [ ] Rekomendasi pintar modul belajar berbasis topik soal yang sering salah dijawab.

---

## 🔵 PHASE 04 — Audio Rehearsal & Comprehensive Oral Simulation

Peningkatan simulasi sidang lisan:

- [ ] Fitur perekaman suara langsung (Voice Recording) saat mahasiswa latihan menjawab pertanyaan lisan.
- [ ] Pemutaran ulang audio untuk evaluasi mandiri artikulasi bicara dan intonasi.
- [ ] Timer per pertanyaan simulasi sidang lisan (misal 3 menit per jawaban studi kasus).
- [ ] Mode "Sidang Komprehensif Penuh" dengan 4 sesi penguji berturut-turut.
