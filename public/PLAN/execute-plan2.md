# PHASE 02 — CONTENT IMPLEMENTATION & PDF ACCURACY

Lanjutkan pengembangan proyek UJIKOM dari hasil PHASE 01.

Pada tahap ini, bertindaklah sebagai Academic Content Analyst, Instructional Designer, dan Senior React Developer.

Saya akan melampirkan dokumen:

**panduan-materi-ujikom.pdf**

Dokumen tersebut merupakan SUMBER REFERENSI UTAMA dan SUMBER KEBENARAN untuk seluruh konten akademik aplikasi.

## A. ATURAN UTAMA SUMBER MATERI

Baca dan analisis keseluruhan PDF terlebih dahulu sebelum mengembangkan konten.

Jangan hanya membaca halaman awal atau mengambil beberapa bagian saja.

Lakukan:

1. Identifikasi seluruh bab dan subbab.
2. Identifikasi pokok pembahasan.
3. Identifikasi definisi dan konsep.
4. Identifikasi teori, metode, dan prinsip.
5. Identifikasi rumus, tabel, serta perhitungan jika ada.
6. Identifikasi referensi dan sumber pustaka.
7. Petakan hubungan antara materi dan kemungkinan kompetensi yang diuji.

Jangan mengarang materi yang tidak ada dalam PDF.

Jika ada penjelasan tambahan yang diperlukan untuk memperjelas konsep, berikan penjelasan yang tetap sesuai konteks dan tandai sebagai penjelasan pendukung, bukan kutipan langsung dari PDF.

Jangan mengubah makna teori atau menghilangkan pokok pembahasan.

## B. PEMBAGIAN MODUL

Seluruh materi harus dipetakan ke dalam empat modul:

1. Keuangan.
2. Operasional.
3. SDM.
4. Pemasaran.

Pertahankan pembagian sesuai struktur dan isi dokumen. Jangan memindahkan materi secara sembarangan.

## C. STRUKTUR KONTEN

Setiap modul memiliki tiga bagian utama:

### 1. Ringkasan

Berisi gambaran umum modul, tujuan pembelajaran, pokok pembahasan, dan konsep penting.

### 2. Materi

Susun materi dengan struktur hierarkis:

BAB — JUDUL BAB

1.1 RINGKASAN

1.1.1 Gambaran Umum

Penjelasan materi secara sistematis, jelas, dan sesuai dokumen.

1.1.2 Konsep Dasar

Penjelasan konsep utama.

1.1.3 Pokok Pembahasan

Penjelasan setiap subpokok pembahasan.

Gunakan struktur tersebut sesuai kebutuhan setiap bab, bukan sebagai template kosong yang dipaksakan.

### 3. Referensi

Tampilkan referensi yang benar-benar berasal dari PDF.

Jika tersedia nomor halaman, cantumkan nomor halaman sumber.

Jangan membuat referensi atau daftar pustaka fiktif.

## D. SISTEM DATA MATERI

Gunakan data terpisah dari komponen UI.

Pertahankan file:

- data-materi-keuangan.ts
- data-materi-operasional.ts
- data-materi-sdm.ts
- data-materi-pemasaran.ts

Gunakan interface dan type TypeScript yang konsisten.

Data setidaknya mendukung:

- ID modul.
- Nama modul.
- Judul bab.
- Nomor bab.
- Subbab.
- Judul pembahasan.
- Isi materi.
- Poin penting.
- Referensi.
- Nomor halaman PDF apabila tersedia.

## E. SISTEM SOAL UJIAN

Berdasarkan materi dalam PDF, buat bank soal untuk empat modul.

Soal harus menguji pemahaman konseptual, penerapan teori, analisis kasus, serta kemampuan menjelaskan materi.

Variasikan tipe pertanyaan:

- Pemahaman konsep.
- Definisi dan teori.
- Analisis.
- Studi kasus.
- Penerapan.
- Perhitungan jika relevan.
- Pertanyaan argumentatif untuk ujian lisan.

Setiap soal harus mempunyai:

- ID unik.
- Modul.
- Materi terkait.
- Pertanyaan.
- Tipe soal.
- Pilihan jawaban jika diperlukan.
- Kunci jawaban.
- Pembahasan.
- Indikator penilaian.
- Tingkat kesulitan.
- Referensi sumber.

Jangan membuat soal yang tidak memiliki dasar materi.

Jangan menggunakan satu pola pertanyaan berulang-ulang.

## F. KUALITAS AKADEMIK

Pastikan:

- Tidak ada materi yang bertentangan dengan PDF.
- Tidak ada pengulangan materi yang tidak diperlukan.
- Tidak ada pertanyaan ambigu.
- Kunci jawaban sesuai konsep.
- Pembahasan menjelaskan alasan jawaban.
- Soal memiliki tingkat kesulitan bervariasi.
- Bahasa Indonesia baku dan mudah dipahami.

## G. OUTPUT

Implementasikan seluruh materi ke dalam aplikasi.

Pastikan seluruh modul memiliki konten nyata, bukan placeholder atau lorem ipsum.

Lakukan validasi kesesuaian materi terhadap PDF.

Buat dokumentasi CONTENT-MAPPING.md yang menjelaskan pemetaan bab, subbab, dan referensi PDF ke dalam aplikasi.

Jangan mengubah arsitektur dasar yang telah dibuat pada PHASE 01 tanpa alasan teknis yang kuat.

Jangan melanjutkan ke PHASE 03 secara otomatis.

Berikan laporan materi yang sudah berhasil diimplementasikan dan materi yang masih belum dapat dipastikan dari PDF.