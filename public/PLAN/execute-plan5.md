# PHASE 05 — FULL SYSTEM AUDIT, TESTING & VERCEL DEPLOYMENT

Lanjutkan proyek UJIKOM dari seluruh tahap sebelumnya.

Bertindaklah sebagai Senior QA Engineer, Software Auditor, Performance Engineer, dan Deployment Specialist.

Pada tahap ini, jangan fokus menambahkan fitur baru sebelum seluruh fitur yang sudah dibuat dinyatakan berjalan dengan baik.

## A. FULL SOURCE CODE AUDIT

Lakukan pemeriksaan menyeluruh:

- Struktur direktori.
- Konsistensi TypeScript.
- Import dan export.
- Routing.
- Dependency.
- Komponen global.
- State management.
- Local storage.
- IndexedDB.
- Exam engine.
- Timer.
- Scoring.
- Speech API.
- Responsive design.

Periksa file yang tidak digunakan, duplikasi fungsi, dead code, dan ketidakkonsistenan implementasi.

## B. BUG TESTING

Periksa kemungkinan:

1. Splashscreen tidak berpindah halaman.
2. Routing gagal.
3. Modal tidak dapat ditutup.
4. Bottom navigation tidak konsisten.
5. Jawaban hilang ketika berpindah soal.
6. Timer berhenti atau tidak akurat.
7. Timer tidak berakhir ketika waktunya habis.
8. Hasil ujian salah dihitung.
9. Grafik tidak sesuai data.
10. LocalStorage gagal menyimpan.
11. IndexedDB gagal membaca data.
12. Refresh menghapus sesi.
13. Voice tidak berjalan.
14. Speech Recognition tidak tersedia.
15. Print layout berantakan.
16. Tampilan mobile mengalami overflow.
17. Komponen tidak tampil pada ukuran tablet.

Perbaiki seluruh bug yang ditemukan.

## C. FUNCTIONAL TESTING

Buat pengujian untuk:

- Navigasi seluruh halaman.
- Empat modul materi.
- Ringkasan.
- Materi.
- Referensi.
- Seluruh konfigurasi ujian.
- ABCD.
- Manual input.
- Esai.
- Voice.
- Text-to-Speech.
- Speech-to-Text.
- Timer.
- Autosave.
- Recovery.
- Scoring.
- Review.
- Chart.
- Print.

Gunakan Vitest dan React Testing Library jika sesuai.

Gunakan Playwright untuk end-to-end testing jika lingkungan mendukung.

## D. PENILAIAN DAN VALIDASI

Lakukan pengujian perhitungan dengan data simulasi yang memiliki hasil yang sudah diketahui.

Pastikan:

- Jumlah soal sesuai konfigurasi.
- Tidak ada soal duplikat dalam satu sesi kecuali memang diizinkan.
- Nilai keseluruhan sesuai bobot.
- Nilai per modul benar.
- Waktu pengerjaan benar.
- Jawaban kosong teridentifikasi.
- Review sesuai dengan soal dan jawaban.
- Tidak ada kesalahan pembulatan yang tidak konsisten.

## E. RESPONSIVE AUDIT

Uji minimal pada viewport berikut:

- Mobile: 375 × 812.
- Mobile: 390 × 844.
- Tablet: 768 × 1024.
- Laptop: 1366 × 768.
- Desktop: 1920 × 1080.

Pastikan:

- Tidak ada horizontal overflow.
- Tidak ada elemen tertutup navigasi.
- Teks dapat dibaca.
- Tombol mudah disentuh.
- Bottom navigation tidak menutupi konten.
- Modal dapat digunakan.
- Sesi ujian tetap nyaman pada layar kecil.

## F. PERFORMANCE & SECURITY

Periksa:

- Ukuran bundle.
- Lazy loading.
- Code splitting.
- Render yang tidak diperlukan.
- Error handling.
- Validasi data lokal.
- Penggunaan dependency.
- Potensi kebocoran data.
- Penggunaan browser API.
- Penanganan data yang rusak.

Pastikan tidak ada API key atau secret yang tertanam di source code.

Jangan mengklaim bahwa data lokal telah dienkripsi jika implementasinya belum menggunakan mekanisme enkripsi yang benar.

## G. VERCEL DEPLOYMENT

Persiapkan aplikasi agar dapat di-deploy di Vercel.

Periksa:

- Build production.
- TypeScript compilation.
- Environment variables.
- SPA routing fallback.
- Asset paths.
- Base URL.
- Vercel configuration jika diperlukan.
- Compatibility dengan browser modern.

Pastikan seluruh route dapat diakses ketika halaman di-refresh langsung.

Buat konfigurasi vercel.json jika diperlukan.

Pastikan npm run build berjalan tanpa error.

## H. DOKUMENTASI AKHIR

Perbarui:

- README.md.
- SYSTEM-INSTRUCTIONS.md.
- PROJECT-STRUCTURE.md.
- APPLICATION-FLOW.md.
- DATA-ARCHITECTURE.md.
- DEVELOPMENT-ROADMAP.md.

Tambahkan DEPLOYMENT.md yang menjelaskan cara deployment ke Vercel.

Tambahkan TESTING-REPORT.md yang menjelaskan:

- Fitur yang sudah diuji.
- Hasil pengujian.
- Bug yang ditemukan.
- Perbaikan yang dilakukan.
- Bug yang masih tersisa.
- Batasan browser.
- Status kesiapan deployment.

## I. FINAL ACCEPTANCE CRITERIA

Aplikasi baru dapat dinyatakan siap apabila:

1. Seluruh halaman dapat diakses.
2. Seluruh materi tampil dengan benar.
3. Seluruh konfigurasi ujian berjalan.
4. Semua jenis jawaban dapat digunakan atau memiliki fallback yang jelas.
5. Timer berjalan akurat.
6. Jawaban tersimpan secara lokal.
7. Hasil ujian dapat dihitung.
8. Review dapat ditampilkan.
9. Hasil dapat dicetak.
10. Tampilan responsif.
11. Build production berhasil.
12. Tidak terdapat error kritis.

Jangan menyembunyikan bug dengan menghilangkan fitur.

Jangan mengubah atau menghapus konten akademik yang telah divalidasi dari PDF.

Jika ada fitur yang tidak dapat berjalan karena keterbatasan browser atau environment, jelaskan secara transparan dan sediakan alternatif yang masuk akal.

## J. FINAL REPORT

Setelah semua pemeriksaan selesai, berikan laporan akhir dengan status:

- PASS: Berhasil diuji.
- WARNING: Berjalan dengan keterbatasan.
- FAILED: Belum berhasil.

Berikan juga instruksi deployment ke Vercel dari repository Git.

Jangan mengklaim deployment berhasil jika belum benar-benar dilakukan.

Prioritaskan stabilitas, akurasi, dan konsistensi seluruh aplikasi.