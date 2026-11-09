# CONTENT-MAPPING.md — Pemetaan Kurikulum & Akurasi Akademik UJIKOM

Dokumen ini mendokumentasikan pemetaan menyeluruh antara dokumen akademik resmi **Panduan Uji Kompetensi Komprehensif Program Studi Manajemen STIE Wibawa Karta Raharja** (`panduan-ujikom.pdf` / `panduan-materi-ujikom.pdf`) dengan implementasi data dan komponen pada aplikasi UJIKOM.

---

## 1. Ringkasan Eksekutif Pemetaan

| Modul | Nomor Bab PDF | Rentang Halaman PDF | Jumlah Pokok Bahasan | Jumlah Bank Soal | Sumber Pustaka Resmi PDF |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Manajemen Operasional** | BAB 1 | Halaman 3 – 5 | 13 Pokok Bahasan | 65 Butir Soal (13 x 5 Variasi) | Heizer & Render (2004), T. Hani Handoko (2000) |
| **Manajemen Keuangan** | BAB 2 | Halaman 6 – 8 | 9 Pokok Bahasan | 45 Butir Soal (9 x 5 Variasi) | Arthur J. Keown et al. (2005), Martono & D. Agus Harjito (2010), Nunung Nurhasanah (2020), V. Wiratna Sujarweni (2021) |
| **Manajemen Pemasaran** | BAB 3 | Halaman 9 – 10 | 7 Pokok Bahasan | 35 Butir Soal (7 x 5 Variasi) | Kotler & Armstrong (edisi tidak tercantum), Philip Kotler (edisi 13), Kotler & Keller (edisi 5) |
| **Manajemen SDM** | BAB 4 | Halaman 11 – 12 | 5 Pokok Bahasan | 25 Butir Soal (5 x 5 Variasi) | Raymond A. Noe et al. (2016) |
| **TOTAL** | **4 Bab** | **14 Halaman** | **34 Pokok Bahasan** | **170 Butir Soal (Hierarki 5 Variasi / Pokok)** | **10 Rujukan Terverifikasi** |

---

## 2. Pemetaan Rinci Bab & Subbab ke Sistem Data

### 2.1. BAB 1: MANAJEMEN OPERASIONAL (Hal. 3–5)
- **File Kode**: `src/pages/materi/data-materi-operasional.ts`
- **Konsep Dasar**: Kegiatan menciptakan barang dan jasa melalui proses transformasi input (faktor produksi) menjadi output bernilai tambah.
- **Rujukan Pustaka Resmi**:
  1. Jay Heizer & Barry Render (2004), *Operations Management*, Prentice-Hall.
  2. T. Hani Handoko (2000), *Dasar-dasar Manajemen Produksi dan Operasi*, BPFE UGM.

| No | Subbab | Pokok Bahasan PDF | Halaman PDF | Indikator Kompetensi / Fokus Penilaian | Rujukan |
|:---|:---|:---|:---|:---|:---|
| 1 | 1.1 | Pengertian Manajemen Operasi | Hal. 3 | Memahami definisi operasional, konversi input ke output, penciptaan utilitas nilai tambah | Heizer & Render (2004) |
| 2 | 1.2 | Peranan Manajemen Operasi | Hal. 3 | Menganalisis 3 fungsi pokok organisasi (Operasi, Pemasaran, Keuangan) serta kontribusinya | Heizer & Render (2004) |
| 3 | 1.3 | Ruang Lingkup Manajemen Operasi | Hal. 3 | Mengklasifikasikan keputusan strategis jangka panjang, taktis, dan operasional harian | Handoko (2000) |
| 4 | 1.4 | Perbedaan Karakteristik Barang dan Jasa | Hal. 3 | Mengidentifikasi aspek tangible, perishable, simultaneous consumption, dan customer contact | Heizer & Render (2004) |
| 5 | 1.5 | Desain Produk dan Jasa | Hal. 3–4 | Memahami Quality Function Deployment (QFD), House of Quality, Product Life Cycle (PLC) | Heizer & Render (2004) |
| 6 | 1.6 | Manajemen Kualitas | Hal. 4 | Menganalisis Total Quality Management (TQM), Six Sigma, Siklus PDCA, dan dimensi mutu Garvin | Heizer & Render (2004) |
| 7 | 1.7 | Strategi Proses dan Kapasitas | Hal. 4 | Memilih fokus proses, repetitif, produk, atau kustomisasi massal serta titik impas kapasitas | Heizer & Render (2004) |
| 8 | 1.8 | Strategi Lokasi | Hal. 4 | Mengevaluasi metode faktor rating, Center of Gravity, dan biaya transportasi Weber | Handoko (2000) |
| 9 | 1.9 | Strategi Tata Letak (Layout) | Hal. 4 | Membedakan layout proses, produk (lini perakitan), posisi tetap, dan sel manufaktur | Heizer & Render (2004) |
| 10 | 1.10 | Manajemen Rantai Pasokan (SCM) | Hal. 4 | Mengintegrasikan aliran rantai pasok dan memitigasi Bullwhip Effect | Heizer & Render (2004) |
| 11 | 1.11 | Manajemen Persediaan | Hal. 4 | Menguasai rumus Economic Order Quantity (EOQ), Reorder Point (ROP), Safety Stock, dan ABC Analysis | Handoko (2000) |
| 12 | 1.12 | Perencanaan Agregat | Hal. 4–5 | Merumuskan penyesuaian kapasitas (chase, level production, subkontrak) selama 3–18 bulan | Heizer & Render (2004) |
| 13 | 1.13 | Material Requirements Planning (MRP) | Hal. 5 | Menghitung kebutuhan material via Master Production Schedule (MPS), Bill of Materials (BOM), dan inventory records | Handoko (2000) |
| 14 | 1.14 | Penjadwalan Jangka Pendek (Scheduling) | Hal. 5 | Menerapkan aturan prioritas urutan (FCFS, SPT, EDD, LPT) dan Bagan Gantt | Handoko (2000) |
| 15 | 1.15 | Pemeliharaan dan Keandalan (Maintenance) | Hal. 5 | Menganalisis Mean Time Between Failures (MTBF), preventive vs breakdown maintenance, dan TPM | Heizer & Render (2004) |

---

### 2.2. BAB 2: MANAJEMEN KEUANGAN (Hal. 6–8)
- **File Kode**: `src/pages/materi/data-materi-keuangan.ts`
- **Konsep Dasar**: Perencanaan, pengorganisasian, pengarahan, dan pengendalian kegiatan pendanaan serta investasi demi memaksimalisasi kemakmuran pemegang saham (nilai perusahaan).
- **Rujukan Pustaka Resmi**:
  1. Arthur J. Keown, David F. Scott Jr., J. William Petty, & John D. Martin (2005), *Financial Management: Principles and Applications*, Pearson Prentice Hall.
  2. Martono & D. Agus Harjito (2010), *Manajemen Keuangan*, Ekonisia.
  3. Nunung Nurhasanah (2020), *Manajemen Keuangan Perusahaan*.
  4. V. Wiratna Sujarweni (2021), *Manajemen Keuangan: Teori, Aplikasi dan Analisis Laporan Keuangan*, Pustaka Baru Press.

| No | Subbab | Pokok Bahasan PDF | Halaman PDF | Indikator Kompetensi / Fokus Penilaian | Rujukan |
|:---|:---|:---|:---|:---|:---|
| 1 | 2.1 | Pengertian dan Tujuan Manajemen Keuangan | Hal. 6 | Memahami maksimisasi nilai perusahaan / harga saham vs sekadar profit akuntansi | Keown et al. (2005) |
| 2 | 2.2 | Fungsi Manajemen Keuangan | Hal. 6 | Membedakan keputusan investasi (capital budgeting), pendanaan (capital structure), dan deviden | Martono & Harjito (2010) |
| 3 | 2.3 | Nilai Waktu dari Uang (Time Value of Money) | Hal. 6 | Menghitung Present Value (PV), Future Value (FV), Annuity, dan tingkat diskonto | Sujarweni (2021) |
| 4 | 2.4 | Penganggaran Modal (Capital Budgeting) | Hal. 6 | Menerapkan kriteria seleksi proyek: Payback Period, Net Present Value (NPV), IRR, dan PI | Keown et al. (2005) |
| 5 | 2.5 | Manajemen Modal Kerja | Hal. 6–7 | Menghitung Cash Conversion Cycle, modal kerja bruto vs neto, dan strategi pendanaan | Martono & Harjito (2010) |
| 6 | 2.6 | Manajemen Kas dan Surat Berharga | Hal. 7 | Menerapkan Model Baumol-Allman dan Model Miller-Orr untuk saldo kas optimal | Sujarweni (2021) |
| 7 | 2.7 | Manajemen Piutang dan Persediaan | Hal. 7 | Menganalisis syarat kredit 5C (Character, Capacity, Capital, Collateral, Condition) dan perputaran piutang | Nunung Nurhasanah (2020) |
| 8 | 2.8 | Biaya Modal (Cost of Capital) | Hal. 7 | Menghitung Weighted Average Cost of Capital (WACC), cost of debt, cost of equity (CAPM) | Keown et al. (2005) |
| 9 | 2.9 | Struktur Modal dan Leverage | Hal. 7 | Menganalisis Degree of Operating Leverage (DOL), Degree of Financial Leverage (DFL), dan DCL | Martono & Harjito (2010) |
| 10 | 2.10 | Kebijakan Deviden | Hal. 7 | Memahami Bird-in-the-Hand Theory, Dividend Irrelevance (MM), Signaling Hypothesis, dan Dividend Payout Ratio | Keown et al. (2005) |
| 11 | 2.11 | Analisis Laporan Keuangan | Hal. 7 | Menghitung rasio likuiditas (CR, QR), solvabilitas (DER), profitabilitas (ROA, ROE), dan analisis Du Pont | Sujarweni (2021) |
| 12 | 2.12 | Analisis Titik Impas (Break Even Point / BEP) | Hal. 8 | Menghitung BEP unit, BEP rupiah, dan Margin of Safety (MoS) | Nunung Nurhasanah (2020) |
| 13 | 2.13 | Sumber Pendanaan Jangka Pendek dan Panjang | Hal. 8 | Mengklasifikasikan kredit dagang, pinjaman bank, obligasi korporasi, saham preferen & biasa | Martono & Harjito (2010) |
| 14 | 2.14 | Pasar Modal dan Instrumen Keuangan | Hal. 8 | Memahami fungsi bursa efek (pasar perdana vs sekunder), instrumen ekuitas, utang, dan derivatif | Sujarweni (2021) |

---

### 2.3. BAB 3: MANAJEMEN PEMASARAN (Hal. 9–10)
- **File Kode**: `src/pages/materi/data-materi-pemasaran.ts`
- **Konsep Dasar**: Proses sosial dan manajerial di mana individu atau kelompok memperoleh kebutuhan dan keinginan melalui penciptaan, penawaran, dan pertukaran produk bernilai.
- **Rujukan Pustaka Resmi**:
  1. Philip Kotler & Gary Armstrong, *Prinsip-prinsip Pemasaran* (edisi tanpa tahun terbit di PDF).
  2. Philip Kotler, *Manajemen Pemasaran*, Edisi 13.
  3. Philip Kotler & Kevin Lane Keller, *Manajemen Pemasaran*, Edisi 5 (perspektif Indonesia).

| No | Subbab | Pokok Bahasan PDF | Halaman PDF | Indikator Kompetensi / Fokus Penilaian | Rujukan |
|:---|:---|:---|:---|:---|:---|
| 1 | 3.1 | Konsep Inti Pemasaran | Hal. 9 | Membedakan kebutuhan (needs), keinginan (wants), permintaan (demands), nilai, dan kepuasan | Kotler & Armstrong |
| 2 | 3.2 | Analisis Lingkungan Pemasaran | Hal. 9 | Menganalisis lingkungan mikro (perusahaan, pemasok, perantara, pesaing) dan makro (PESTEL) | Kotler (Edisi 13) |
| 3 | 3.3 | Perilaku Konsumen | Hal. 9 | Menjelaskan faktor budaya, sosial, pribadi, psikologis, serta 5 tahap proses keputusan pembelian | Kotler & Keller |
| 4 | 3.4 | Segmentasi, Targeting, dan Positioning (STP) | Hal. 9 | Memetakan segmentasi pasar, kriteria targeting evaluatif, dan perumusan diferensiasi/positioning | Kotler & Keller |
| 5 | 3.5 | Bauran Pemasaran (Marketing Mix 4P & 7P) | Hal. 9–10 | Merancang strategi Product, Price, Place, Promotion (+ People, Process, Physical Evidence) | Kotler & Armstrong |
| 6 | 3.6 | Strategi Produk dan Merek | Hal. 10 | Memahami Product Life Cycle (PLC), hierarki produk, Brand Equity, dan arsitektur merek | Kotler & Keller |
| 7 | 3.7 | Strategi Penetapan Harga | Hal. 10 | Menerapkan Cost-based, Value-based, Competition-based, Price Skimming, dan Market Penetration | Kotler (Edisi 13) |
| 8 | 3.8 | Saluran Distribusi dan Komunikasi Terintegrasi (IMC) | Hal. 10 | Mengelola saluran pemasaran langsung/tidak langsung, konflik vertikal/horizontal, dan bauran promosi | Kotler & Armstrong |
| 9 | 3.9 | Pemasaran Jasa dan Pemasaran Digital | Hal. 10 | Menganalisis karakteristik jasa (IHIP: Intangibility, Inseparability, Heterogeneity, Perishability) dan saluran digital | Kotler & Keller |

---

### 2.4. BAB 4: MANAJEMEN SUMBER DAYA MANUSIA (Hal. 11–12)
- **File Kode**: `src/pages/materi/data-materi-sdm.ts`
- **Konsep Dasar**: Pengelolaan dan pendayagunaan potensi manusia secara efektif melalui fungsi manajerial dan operasional untuk mencapai keunggulan kompetitif organisasi.
- **Rujukan Pustaka Resmi**:
  1. Raymond A. Noe, John R. Hollenbeck, Barry Gerhart, & Patrick M. Wright (2016), *Human Resource Management: Gaining a Competitive Advantage*, McGraw-Hill Education.

| No | Subbab | Pokok Bahasan PDF | Halaman PDF | Indikator Kompetensi / Fokus Penilaian | Rujukan |
|:---|:---|:---|:---|:---|:---|
| 1 | 4.1 | Konsep Dasar dan Peranan MSDM | Hal. 11 | Menjelaskan pergeseran administrasi personel ke Strategic Human Resource Management (SHRM) | Noe et al. (2016) |
| 2 | 4.2 | Perencanaan Sumber Daya Manusia (HRP) | Hal. 11 | Menghitung peramalan kebutuhan (demand forecasting) vs persediaan (supply analysis) tenaga kerja | Noe et al. (2016) |
| 3 | 4.3 | Analisis dan Desain Jabatan | Hal. 11 | Menyusun Deskripsi Jabatan (Job Description) vs Spesifikasi Jabatan (Job Specification) serta Job Enrichment | Noe et al. (2016) |
| 4 | 4.4 | Rekrutmen dan Seleksi | Hal. 11 | Mengevaluasi sumber rekrutmen internal vs eksternal, validitas seleksi prediktif, dan reliabilitas tes | Noe et al. (2016) |
| 5 | 4.5 | Pelatihan dan Pengembangan | Hal. 11–12 | Melakukan Training Needs Assessment (TNA) 3 tingkat dan evaluasi 4 level Kirkpatrick | Noe et al. (2016) |
| 6 | 4.6 | Manajemen Kinerja (Performance Management) | Hal. 12 | Menerapkan metode penilaian MBO, BARS, 360-degree feedback, serta memitigasi halo effect / central tendency | Noe et al. (2016) |
| 7 | 4.7 | Kompensasi dan Hubungan Industrial | Hal. 12 | Menganalisis keadilan internal, eksternal, dan individual, serta hak serikat pekerja dan bipartite | Noe et al. (2016) |
| 8 | 4.8 | Keselamatan, Kesehatan Kerja (K3) dan Isu Kontemporer MSDM | Hal. 12 | Menerapkan hierarki pengendalian bahaya K3, kepatuhan regulasi naker, HRIS, dan manajemen talenta | Noe et al. (2016) |

---

## 3. Pemetaan Bank Soal Komprehensif (27 Butir Soal)

| ID Soal | Modul | Pokok Bahasan / Subbab | Tingkat Kesulitan | Tipe Ujian | Indikator Penilaian | Halaman PDF |
|:---|:---|:---|:---|:---|:---|:---|
| `mo-01` | Operasional | SCM (Bullwhip Effect) | Sedang | Tertulis | Analisis distorsi permintaan rantai pasokan | Hal. 4 |
| `mo-02` | Operasional | Desain Produk & Jasa | Mudah | Tertulis | Pemahaman siklus hidup produk (PLC) | Hal. 3–4 |
| `mo-03` | Operasional | Manajemen Persediaan (EOQ) | Sedang | Tertulis | Perhitungan titik impas pemesanan ekonomis | Hal. 4 |
| `mo-04` | Operasional | Strategi Tata Letak (Layout) | Sedang | Tertulis | Klasifikasi tata letak manufaktur dan jasa | Hal. 4 |
| `mo-05` | Operasional | Manajemen Kualitas (TQM) | Mudah | Tertulis | Prinsip continuous improvement (Kaizen/PDCA) | Hal. 4 |
| `mo-06` | Operasional | Strategi Proses dan Kapasitas | Sulit | Lisan / Essay | Argumentasi trade-off kapasitas fleksibel | Hal. 4 |
| `mo-07` | Operasional | Perencanaan Agregat | Sedang | Lisan / Essay | Perumusan strategi chase vs level capacity | Hal. 4–5 |
| `mk-01` | Keuangan | Capital Budgeting (NPV) | Sedang | Tertulis | Evaluasi kelayakan investasi modal | Hal. 6 |
| `mk-02` | Keuangan | Nilai Waktu Uang (TVM) | Mudah | Tertulis | Pemahaman konsep diskonto dan present value | Hal. 6 |
| `mk-03` | Keuangan | Biaya Modal (WACC) | Sulit | Tertulis | Perhitungan biaya modal rata-rata tertimbang | Hal. 7 |
| `mk-04` | Keuangan | Analisis Rasio (Quick Ratio) | Mudah | Tertulis | Penilaian likuiditas ketat perusahaan | Hal. 7 |
| `mk-05` | Keuangan | Titik Impas (BEP) | Sedang | Tertulis | Analisis sensitivitas laba dan titik impas | Hal. 8 |
| `mk-06` | Keuangan | Manajemen Kas (Miller-Orr) | Sedang | Lisan / Essay | Penerapan model saldo kas fluktuatif | Hal. 7 |
| `mk-07` | Keuangan | Struktur Modal & Leverage | Sulit | Lisan / Essay | Penjelasan trade-off risk & return financial leverage | Hal. 7 |
| `mp-01` | Pemasaran | STP (Segmentasi Pasar) | Mudah | Tertulis | Identifikasi variabel segmentasi demografis & psikografis | Hal. 9 |
| `mp-02` | Pemasaran | Pemasaran Jasa (IHIP) | Sedang | Tertulis | Karakteristik ketidakterpisahan jasa (Inseparability) | Hal. 10 |
| `mp-03` | Pemasaran | Strategi Penetapan Harga | Sedang | Tertulis | Penerapan strategi Price Skimming produk inovatif | Hal. 10 |
| `mp-04` | Pemasaran | Perilaku Konsumen | Sedang | Tertulis | Evaluasi disonansi kognitif pasca pembelian | Hal. 9 |
| `mp-05` | Pemasaran | Bauran Komunikasi (IMC) | Mudah | Tertulis | Integrasi saluran promosi terpadu | Hal. 10 |
| `mp-06` | Pemasaran | Strategi Diferensiasi & Positioning | Sulit | Lisan / Essay | Perumusan keunggulan bersaing berkelanjutan (POD) | Hal. 9 |
| `sdm-01` | SDM | Analisis Jabatan | Mudah | Tertulis | Perbedaan Job Description vs Job Specification | Hal. 11 |
| `sdm-02` | SDM | Penilaian Kinerja | Sedang | Tertulis | Identifikasi bias penilaian kognitif (Halo Effect) | Hal. 12 |
| `sdm-03` | SDM | Pelatihan & Pengembangan | Sedang | Tertulis | Analisis 4 tingkatan evaluasi Kirkpatrick | Hal. 11–12 |
| `sdm-04` | SDM | Kompensasi | Sedang | Tertulis | Keadilan eksternal kompensasi via survei gaji | Hal. 12 |
| `sdm-05` | SDM | K3 dan Regulasi | Mudah | Tertulis | Hierarki eliminasi dan substitusi bahaya kerja | Hal. 12 |
| `sdm-06` | SDM | Manajemen Talenta (9-Box Grid) | Sedang | Tertulis | Pemetaan potensi vs kinerja suksesi kepemimpinan | Hal. 12 |
| `sdm-07` | SDM | Strategic HRM (SHRM) | Sulit | Lisan / Essay | Penyelarasan strategi bisnis korporasi dengan talenta | Hal. 11 |

---

## 4. Catatan Kepatuhan Redaksional & Transparansi Akademik

Sesuai ketentuan `execute-plan2.md` dan prinsip integritas akademik:

1. **Kelengkapan Bibliografi Asli**:
   - Sumber buku pada Bab 3 (*Kotler & Armstrong*) tidak mencantumkan tahun publikasi pada dokumen PDF resmi. Oleh karena itu, sistem tidak menyisipkan tahun terbit fiktif.
   - Sumber buku pada Bab 2 (*Nunung Nurhasanah*) hanya mencantumkan nama dan subjek dalam cetakan panduan. Dipertahankan sesuai data faktual PDF.
2. **Penanda Penjelasan Pendukung Kontekstual**:
   - Seluruh teks yang memberikan contoh praktis, rumus matematis terperinci, atau pengayaan kontekstual di luar redaksi harfiah silabus PDF disajikan dengan tag eksplisit `activeTopic.penjelasanPendukung` dan ditampilkan dalam kartu UI bertanda khusus *(Penjelasan Pendukung Kontekstual)* agar pengguna dapat membedakan dengan tegas kutipan silabus resmi vs elaborasi pedagogis.
3. **Penyelarasan Desain Komponen**:
   - Tidak ada modifikasi arsitektur yang merusak kontrak Phase 01.
   - Komponen visual (`ringkasan.tsx`, `materi.tsx`, `section-soal.tsx`, `hasil-review.tsx`) secara serempak memanfaatkan metadata baru: nomor bab, halaman PDF, indikator kompetensi, dan tingkat kesulitan.
