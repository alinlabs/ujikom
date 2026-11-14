# SYSTEM-INSTRUCTIONS.md — Pedoman Teknis & Kode Etik Arsitektur

Dokumen ini menjadi acuan baku bagi seluruh pengembang dalam memelihara dan mengembangkan kode sumber **UJIKOM (Uji Kompetensi Komprehensif)**.

---

## 1. Prinsip Utama Desain Perangkat Lunak

1. **Separation of Concerns (SoC)**:
   - Data materi dan data soal dilarang keras dicampur ke dalam komponen tampilan (JSX).
   - Seluruh data wajib berada di direktori `src/data/` atau `src/pages/materi/data-materi-*.ts`.
   - Logika murni (penghitungan skor, klasifikasi grade, pemformatan waktu) wajib didecoupling ke modul utilitas agar dapat diuji secara independen tanpa bergantung pada DOM.

2. **Konsistensi TypeScript & Larangan Penggunaan `any`**:
   - Seluruh model data wajib memiliki interface atau type alias yang eksplisit di direktori `src/types/`.
   - Hindari penggunaan type assertion yang tidak aman (`as any`).
   - Tipe props untuk setiap komponen harus didefinisikan secara transparan.

3. **Komponen Global Reusable (Zero Page Leakage)**:
   - Komponen dalam `src/components/` (`header.tsx`, `bottom-navigation.tsx`, `footer.tsx`, `modal.tsx`, `layout.tsx`) tidak boleh memiliki logika khusus yang hanya bekerja untuk satu halaman tertentu.
   - Komponen global menerima event handler dan konfigurasi melalui props atau global store publik.

4. **Kepatuhan Terhadap Panduan Akademik Resmi**:
   - Konten materi, pokok bahasan, dan fokus ujian wajib mempertahankan akurasi silabus STIE Wibawa Karta Raharja.
   - Informasi bibliografi yang tidak lengkap tidak boleh ditambah secara spekulatif (mengikuti catatan resmi panduan PDF).

---

## 2. Standar State Management & Storage

1. **Zustand untuk UI Global & Sesi Aktif**:
   - `useAppStore`: Menyimpan status global aplikasi seperti `hasSeenSplash`, `activeNavTab`, dan filter pencarian.
   - `useExamStore`: Mengelola konfigurasi ujian, state timer saat ujian berlangsung, bank soal aktif, dan riwayat hasil ujian.

2. **StorageService Multi-Tier**:
   - Tier 1: LocalStorage untuk pembacaan instan sinkron saat rendering awal.
   - Tier 2: IndexedDB untuk penyimpanan dokumen ujian offline yang lebih besar dan tahan lama.
   - Gunakan prefix penyimpanan `ujikom_app_` untuk menghindari tabrakan namespace.

---

## 3. Konvensi Penamaan & Struktur File

- File komponen React menggunakan format kebab-case atau camelCase: `section-soal.tsx`, `modal-pengaturan.tsx`, `layout.tsx`.
- Tipe data dan interface dalam PascalCase: `ExamQuestion`, `BidangMateri`, `UserExamResponse`.
- Fungsi pembantu dalam camelCase: `calculateScore`, `formatDurationSeconds`.
- Ekstensi file wajib `.tsx` untuk komponen React dan `.ts` untuk modul TypeScript murni.

---

## 4. Quality Gate & Pengujian (Ultra Mode Ready)

Sebelum melakukan commit atau rilis:
1. Jalankan unit test logika:
   ```bash
   npx --yes tsx --test src/pages/test/utils.test.ts
   ```
2. Pastikan build TypeScript lolos tanpa error:
   ```bash
   npm run build
   ```
3. Lakukan verifikasi visual browser headless untuk memastikan tidak ada layout overflow, visual clipping, atau dead button click.
