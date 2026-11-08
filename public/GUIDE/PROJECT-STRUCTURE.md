# PROJECT-STRUCTURE.md — Struktur Direktori & Tanggung Jawab Modul

Struktur direktori **UJIKOM** dirancang modular, terpisah berdasarkan tanggung jawab fungsional masing-masing:

```
src/
├── components/                     # Komponen UI Global & Layout Reusable
│   ├── header.tsx                  # Header bar dengan branding institusi & menu desktop
│   ├── bottom-navigation.tsx       # Bottom bar navigasi untuk viewport perangkat seluler
│   ├── footer.tsx                  # Footer akademik dengan informasi hak cipta & silabus
│   ├── layout.tsx                  # Layout shell pembungkus (Header + Main + Footer + BottomNav)
│   ├── modal.tsx                   # Modal dialog generik yang aksesibel & bebas ketergantungan halaman
│   └── splashscreen.tsx            # Tampilan pembuka institusi 5 detik dengan opsi "Lewati"
│
├── pages/                          # Halaman Utama & Tampilan Modul
│   ├── home/                       # Modul Beranda (Dashboard Akademik)
│   │   └── container.tsx           # Ringkasan pilar, quick stats, panduan, dan tombol aksi
│   │
│   ├── materi/                     # Modul Pembelajaran & Silabus Resmi
│   │   ├── container.tsx           # Hub materi: katalog 4 pilar & mesin pencari instan 46 topik
│   │   ├── ringkasan.tsx           # Gambaran umum, petunjuk belajar, & daftar pokok bahasan
│   │   ├── materi.tsx              # Pembaca topik mendalam dengan penekanan "Fokus Ujian"
│   │   ├── referensi.tsx           # Daftar pustaka rujukan buku resmi & catatan bibliografi
│   │   ├── utils.ts                # Utilitas querying materi, filter pencarian, dan kalkulasi topik
│   │   ├── data-materi-operasional.ts # 15 Pokok Bahasan Manajemen Operasional (Bab 1 PDF)
│   │   ├── data-materi-keuangan.ts    # 14 Pokok Bahasan Manajemen Keuangan (Bab 2 PDF)
│   │   ├── data-materi-pemasaran.ts   # 9 Pokok Bahasan Manajemen Pemasaran (Bab 3 PDF)
│   │   └── data-materi-sdm.ts         # 8 Pokok Bahasan Manajemen Sumber Daya Manusia (Bab 4 PDF)
│   │
│   └── test/                       # Modul Simulasi Ujian Komprehensif
│       ├── container.tsx           # Hub ujian: pilihan mode tertulis/lisan & riwayat pengerjaan
│       ├── session-metode.tsx      # Sesi ujian aktif (timer mundur, navigasi soal, progress)
│       ├── modal-pengaturan.tsx    # Modal kustomisasi ujian (bidang, jumlah soal, durasi, acak)
│       ├── section-soal.tsx        # Renderer kartu soal (nomor, teks soal, skenario kasus, badge)
│       ├── section-jawaban.tsx     # Renderer masukan jawaban (pilihan ganda / catatan & rubrik lisan)
│       ├── hasil.tsx               # Hub hasil ujian dengan tab nilai, waktu, dan pembahasan
│       ├── hasil-nilai.tsx         # Kartu skor, status kelulusan, dan breakdown per 4 pilar
│       ├── hasil-waktu.tsx         # Diagnostik waktu pengerjaan dan efisiensi per butir soal
│       ├── hasil-review.tsx        # Evaluasi butir soal, kunci jawaban, dan pembahasan rujukan
│       ├── hasil-review-template.ts # Template predikat nilai dan rekomendasi tindak lanjut akademik
│       ├── utils.ts                # Logika penghitungan skor, klasifikasi grade (A/B+/B/C/TL), dan evaluasi
│       └── utils.test.ts           # Unit test Node.js untuk logika murni scoring & grading
│
├── hooks/                          # Kumpulan Custom React Hooks
│   ├── useLocalStorage.ts          # Hook sinkronisasi state dengan LocalStorage
│   └── useExamSession.ts           # Hook kontrol sesi ujian aktif, interval timer, dan auto-submit
│
├── contexts/                       # React Context Providers
│   └── AppContext.tsx              # Context status offline/online & tracking topik yang selesai dipelajari
│
├── stores/                         # Global State Managers (Zustand)
│   ├── useAppStore.ts              # State splashscreen, tab navigasi aktif, dan filter pencarian
│   └── useExamStore.ts             # State konfigurasi ujian, session timer, bank soal, dan history
│
├── services/                       # Lapisan Layanan Data & Persistensi
│   ├── storageService.ts           # Abstraksi sinkronisasi LocalStorage & IndexedDB offline
│   └── ...                         # Layanan tambahan untuk fase berikutnya
│
├── types/                          # Definisi Tipe & Interface TypeScript
│   ├── materi.ts                   # Tipe BidangMateri, PokokBahasanItem, ReferensiBuku
│   ├── exam.ts                     # Tipe ExamQuestion, ExamConfig, ExamResult, UserExamResponse
│   └── common.ts                   # Tipe navigasi, dialog modal, dan antarmuka umum
│
├── data/                           # Sumber Data Terpadu & Bank Soal
│   ├── sampleQuestions.ts          # Bank soal pilihan ganda, kasus, dan tanya jawab lisan komprehensif
│   └── index.ts                    # Central export untuk data materi dan soal
│
├── utils/                          # Fungsi Pembantu Umum
│   ├── formatters.ts               # Pemformat durasi, persentase skor, dan tanggal Bahasa Indonesia
│   ├── helpers.ts                  # ID generator unik, shuffle array, dan clamp number
│   └── storage.ts                  # Safe LocalStorage wrapper dengan penanganan JSON error
│
├── styles/                         # Pengaturan Desain & Tema
│   └── theme.ts                    # Token warna institusional STIE Wikara (Navy, Gold, Teal, Rose, Violet)
│
├── routes/                         # Konfigurasi Routing Aplikasi
│   └── index.tsx                   # React Router DOM mapping seluruh rute halaman & splashscreen logic
│
├── App.tsx                         # Entry point komponen React
├── main.tsx                        # Entry point eksekusi DOM React 19
└── index.css                       # Global Tailwind CSS & font declarations
```
