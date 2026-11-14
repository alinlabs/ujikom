# PHASE 04 — EXAM ENGINE, ANSWER MANAGEMENT & LOCAL STORAGE

Lanjutkan proyek UJIKOM dari PHASE 01, 02, dan 03.

Bertindaklah sebagai Senior Fullstack Logic Engineer dan Assessment System Developer.

Fokus pada sistem ujian, pengelolaan state, penyimpanan jawaban, penghitungan nilai, dan evaluasi otomatis.

## A. PENGATURAN UJIAN

Ketika user memilih Mulai Uji Test, tampilkan penjelasan singkat mengenai sistem ujian.

Selanjutnya tampilkan modal atau bottom sheet pengaturan ujian.

Pengaturan meliputi:

1. Durasi ujian.
2. Tipe soal: Teks atau Voice.
3. Jumlah soal per materi: minimum 10 dan maksimum 15.
4. Tipe jawaban:
   - Pilihan ganda ABCD.
   - Manual input.
   - Esai.
   - Voice input.

Validasi seluruh pengaturan sebelum sesi dimulai.

Pastikan tipe soal dan tipe jawaban merupakan dua konfigurasi berbeda.

Voice sebagai penyajian pertanyaan tidak berarti jawaban harus selalu menggunakan suara.

## B. SISTEM SESI UJIAN

Setiap pertanyaan harus tampil sebagai satu slide.

Jangan menampilkan semua pertanyaan dalam satu halaman panjang.

Pada sesi ujian terdapat:

HEADER:
- Judul ujian.
- Timer countdown.

MAIN CONTENT:
- Nomor pertanyaan.
- Pertanyaan.
- Pilihan jawaban atau area input.
- Kontrol audio jika menggunakan Voice.

BOTTOM NAVIGATION:
- Back.
- Next.
- Area jawaban sesuai metode yang dipilih.

Pastikan perpindahan soal tidak menghapus jawaban sebelumnya.

Jawaban harus tersimpan secara otomatis setiap kali user melakukan perubahan.

## C. SISTEM TEXT TO SPEECH

Ketika mode soal Voice dipilih:

- Pertanyaan tetap ditampilkan dalam bentuk teks.
- Browser membacakan pertanyaan menggunakan Text-to-Speech.
- Sediakan kontrol Play, Pause, dan Replay jika didukung.
- Jangan membacakan ulang pertanyaan tanpa alasan.
- Pertimbangkan penghentian suara ketika user berpindah soal.

Gunakan Web Speech API atau library yang relevan.

Pastikan terdapat fallback ketika browser tidak mendukung fitur suara.

## D. SISTEM SPEECH TO TEXT

Untuk jawaban Voice:

- Sediakan tombol mulai merekam.
- Sediakan indikator status perekaman.
- Ubah ucapan menjadi teks jika Speech Recognition didukung.
- Tampilkan hasil transkripsi.
- Izinkan user mengedit hasil transkripsi sebelum disimpan.

Jika browser tidak mendukung Speech Recognition, berikan fallback berupa input teks.

Jangan mengklaim bahwa audio telah berhasil direkam jika browser tidak memberikan izin atau dukungan.

## E. SISTEM TIMER

Buat timer countdown berdasarkan durasi yang dipilih.

Timer harus:

- Berjalan konsisten.
- Tidak ter-reset saat berpindah pertanyaan.
- Tetap akurat ketika tab tidak aktif.
- Memiliki penanganan ketika browser mengalami refresh.
- Mengakhiri ujian secara otomatis ketika waktu habis.

Gunakan timestamp dan perhitungan waktu yang tepat, bukan hanya mengurangi angka setiap satu detik tanpa validasi waktu aktual.

## F. LOCAL-FIRST STORAGE

Semua data hasil ujian harus tersimpan secara lokal.

Gunakan:

- LocalStorage untuk konfigurasi dan data ringan.
- IndexedDB untuk data sesi, jawaban, dan riwayat yang lebih besar jika diperlukan.

Data yang disimpan mencakup:

- Identitas sesi.
- Waktu mulai.
- Waktu selesai.
- Durasi.
- Konfigurasi ujian.
- Daftar soal.
- Jawaban setiap soal.
- Waktu pengerjaan setiap soal.
- Status soal.
- Hasil penilaian.
- Hasil review.

Gunakan sistem versioning untuk struktur data.

Buat mekanisme autosave dan recovery sesi jika browser mengalami refresh atau tertutup secara tidak sengaja.

Jangan mengandalkan penyimpanan state React saja.

Jangan menggunakan backend eksternal untuk menyimpan data pribadi user pada tahap ini.

## G. SISTEM PENILAIAN

Buat sistem penilaian berdasarkan tipe soal.

### Pilihan ganda

Periksa jawaban terhadap kunci jawaban.

### Manual input dan esai

Gunakan rubric atau indikator penilaian yang terdefinisi.

Sistem dapat memberikan evaluasi otomatis berdasarkan kecocokan konsep, poin penting, dan indikator jawaban.

Namun jangan memberikan nilai pasti seolah-olah merupakan penilaian akademik mutlak apabila jawaban membutuhkan interpretasi manusia.

Tampilkan status evaluasi dan tingkat keyakinan penilaian apabila diperlukan.

### Voice

Evaluasi hasil transkripsi dengan mekanisme penilaian yang sama dengan manual input atau esai.

Jangan menganggap suara sebagai bukti jawaban benar tanpa melakukan evaluasi terhadap isi jawabannya.

## H. SISTEM HASIL

Setelah seluruh empat modul selesai atau waktu habis, tampilkan halaman hasil.

Hasil mencakup:

1. Nilai keseluruhan.
2. Nilai masing-masing modul.
3. Grafik line chart durasi per soal.
4. Total durasi ujian.
5. Jumlah jawaban benar.
6. Jumlah jawaban salah.
7. Jumlah jawaban kosong.
8. Hasil evaluasi.
9. Review setiap pertanyaan.
10. Jawaban user dan pembahasan yang benar.

Buat evaluasi berdasarkan materi dan indikator penilaian.

Jangan memberikan kesimpulan yang tidak didukung oleh jawaban user.

## I. SISTEM CETAK

Sediakan fitur cetak hasil ujian.

Gunakan print stylesheet yang menghasilkan laporan rapi.

Laporan mencakup identitas sesi, nilai, grafik atau ringkasan waktu, evaluasi, dan review jawaban.

Pastikan elemen navigasi, tombol, dan kontrol UI tidak ikut tercetak.

Sediakan opsi ekspor PDF melalui fitur browser print jika sesuai.

## J. ARSITEKTUR LOGIKA

Pisahkan:

- Exam engine.
- Timer service.
- Answer service.
- Scoring engine.
- Review generator.
- Local storage service.
- Speech service.
- Result calculator.

Jangan meletakkan seluruh logika dalam satu komponen React.

Gunakan TypeScript untuk seluruh model data dan fungsi perhitungan.

## K. OUTPUT

Implementasikan semua fungsi tersebut dan uji setiap jenis jawaban.

Pastikan data tidak hilang saat berpindah soal, refresh, atau berpindah halaman.

Pastikan penghitungan nilai dan waktu dapat diverifikasi.

Jangan lanjutkan ke PHASE 05 secara otomatis.

Berikan laporan implementasi, skema penyimpanan, dan hasil pengujian fungsi.