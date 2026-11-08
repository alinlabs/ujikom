import { BidangMateri } from '../../types/materi';

export const dataMateriKeuangan: BidangMateri = {
  id: 'keuangan',
  nama: 'Manajemen Keuangan',
  kode: 'MK',
  nomorBab: 2,
  judulBab: 'BAB 2 — MANAJEMEN KEUANGAN',
  halamanPdf: 'Halaman 6–8',
  deskripsi: 'Panduan praktis pengelolaan, pencarian sumber modal, dan penggunaan dana usaha secara sehat guna memajukan nilai usaha di STIE Wibawa Karta Raharja Purwakarta.',
  iconName: 'DollarSign',
  color: '#2563EB',
  gambaranUmum: `Manajemen Keuangan di STIE Wibawa Karta Raharja (WIKARA) Purwakarta mempelajari bagaimana pemilik usaha atau manajer mengelola uang masuk dan uang keluar. Pembahasan difokuskan pada pemahaman logika dasar: bagaimana mencari modal usaha (dari tabungan sendiri atau pinjaman bank), bagaimana mengalokasikan modal untuk membeli perlengkapan usaha, cara menjaga kelancaran pembayaran utang jangka pendek (likuiditas), serta cara menghitung titik impas (Break Even Point / BEP) agar usaha di Purwakarta tidak mengalami kerugian.`,
  konsepDasar: `Tujuan utama pengelolaan keuangan adalah menjaga kesehatan usaha dan memaksimalkan nilai bisnis dalam jangka panjang. Pengusaha dan mahasiswa diajak memahami tiga keputusan pokok: Keputusan Investasi (membeli alat/barang dagang), Keputusan Pendanaan (memilih sumber modal), dan Kebijakan Pembagian Keuntungan.`,
  tujuanPembelajaran: [
    'Memahami 3 keputusan pokok manajer keuangan (Investasi, Pendanaan, dan Pengelolaan Laba).',
    'Mengetahui konsep dasar nilai waktu dari uang (Time Value of Money) dan pengaruh inflasi.',
    'Mampu membaca laporan keuangan sederhana dan memahami arti rasio kelancaran kas (likuiditas).',
    'Menjelaskan manfaat analisis titik impas (Break Even Point / BEP) untuk menentukan target penjualan minimal usaha.'
  ],
  petunjukUjian: [
    'Fokus pada pengertian dasar, manfaat, dan arti dari setiap angka keuangan tanpa perlu cemas dengan rumus berbelit-belit.',
    'Pahami apa arti untung, rugi, titik balik modal (Break Even), serta mengapa arus kas lancar sangat penting bagi keberlangsungan usaha di Purwakarta.',
    'Gunakan contoh nyata seperti pengelolaan uang kas kedai kopi, toko kelontong, atau usaha oleh-oleh Simping di Purwakarta.'
  ],
  referensi: [
    {
      id: 'mk-ref-1',
      penulis: 'Keown, Arthur J., John D. Martin, J. William Petty, David F. Scott Jr.',
      tahun: '2005',
      judul: 'Financial Management: Principles and Applications (10th ed.)',
      penerbit: 'Prentice Hall International Inc.',
      catatan: 'Buku teks standar internasional untuk konsep time value of money, capital budgeting, WACC, dan kebijakan dividen.',
      halamanPdf: 'Hal. 6 & 13'
    },
    {
      id: 'mk-ref-2',
      penulis: 'Martono dan D. Agus Harjito',
      tahun: '2010',
      judul: 'Manajemen Keuangan',
      penerbit: 'Ekonisia (Tahun mengikuti dokumen sumber; detail edisi perlu dikonfirmasi)',
      catatan: 'Referensi komprehensif pendanaan, struktur modal, dan analisis leverage.',
      halamanPdf: 'Hal. 6 & 13'
    },
    {
      id: 'mk-ref-3',
      penulis: 'Nunung Nurhasanah',
      tahun: '2020',
      judul: 'Manajemen Keuangan',
      penerbit: 'Bahan Ajar / Diktat (Penerbit tidak dicantumkan dalam dokumen sumber)',
      catatan: 'Bahan acuan materi perkuliahan program studi.',
      halamanPdf: 'Hal. 6 & 13'
    },
    {
      id: 'mk-ref-4',
      penulis: 'Sujarweni, V. Wiratna',
      tahun: '2021',
      judul: 'Manajemen Keuangan: Teori, Aplikasi dan Hasil Penelitian',
      penerbit: 'Pustaka Baru Press',
      catatan: 'Aplikasi riset dan studi kasus analisis laporan keuangan dan BEP di Indonesia.',
      halamanPdf: 'Hal. 6 & 13'
    }
  ],
  pokokBahasan: [
    {
      id: 'mk-1',
      nomor: '2.2.1',
      subbab: '2.2',
      judul: 'Konsep Dasar Manajemen Keuangan',
      halamanPdf: 'Hal. 6',
      referensi: 'Keown et al. (2005); Martono & Harjito (2010)',
      ringkasan: 'Manajemen keuangan merencanakan, memperoleh, menggunakan, dan mengendalikan dana. Tiga keputusan pokoknya adalah investasi, pendanaan, dan dividen.',
      isiMateri: `Manajemen keuangan merencanakan, memperoleh, menggunakan, dan mengendalikan dana. Tiga keputusan pokoknya adalah investasi (aset/proyek yang dipilih), pendanaan (sumber dana), dan dividen (laba dibagikan atau ditahan). Tujuan umumnya meningkatkan nilai perusahaan dengan mempertimbangkan risiko, likuiditas, dan keberlanjutan.`,
      fokusUjian: 'Jelaskan hubungan keputusan investasi, pendanaan, dan dividen.',
      poinKunci: [
        'Tiga pilar keputusan: Keputusan Investasi (alokasi aset), Keputusan Pendanaan (struktur modal optimal), dan Kebijakan Dividen (retensi laba vs pembagian tunai).',
        'Tujuan akhir: Memaksimalkan nilai perusahaan (firm value) dan kemakmuran pemegang saham, bukan semata-mata laba akuntansi jangka pendek.',
        'Keseimbangan antara likuiditas (kelancaran operasional) dan profitabilitas (kemampuan menghasilkan laba).'
      ],
      penjelasanPendukung: 'Dewan penguji sering menguji pemahaman mahasiswa tentang bagaimana keputusan pendanaan (misal menambah utang) dapat memengaruhi risiko kebangkrutan sekaligus penghematan pajak bunga (tax shield).'
    },
    {
      id: 'mk-2',
      nomor: '2.2.2',
      subbab: '2.2',
      judul: 'Nilai Waktu dari Uang dan Anuitas (Annuity)',
      halamanPdf: 'Hal. 6',
      referensi: 'Keown et al. (2005)',
      ringkasan: 'Nilai waktu uang menyatakan uang saat ini umumnya lebih bernilai daripada nominal sama di masa depan karena dapat diinvestasikan serta dipengaruhi risiko dan inflasi.',
      isiMateri: `Nilai waktu uang menyatakan uang saat ini umumnya lebih bernilai daripada nominal sama di masa depan karena dapat diinvestasikan serta dipengaruhi risiko dan inflasi. Future value menghitung pertumbuhan dana; present value mendiskontokan arus kas masa depan. Anuitas adalah pembayaran/penerimaan berjumlah sama pada interval teratur; dapat berupa anuitas biasa (akhir periode) atau jatuh di muka (awal periode).`,
      fokusUjian: 'Kenali PV, FV, tingkat bunga, periode, compounding, discounting, dan jenis anuitas.',
      poinKunci: [
        'Future Value (FV) menghitung nilai akumulasi dengan bunga majemuk: FV = PV × (1 + i)^n.',
        'Present Value (PV) mendiskontokan arus kas masa depan ke nilai kini: PV = FV / (1 + i)^n.',
        'Anuitas Biasa (Ordinary Annuity): Pembayaran dilakukan di setiap akhir periode.',
        'Anuitas Jatuh di Muka (Annuity Due): Pembayaran dilakukan di setiap awal periode.'
      ],
      rumusAtauMetode: [
        'FV = PV(1 + r)^n',
        'PV = FV / (1 + r)^n',
        'PV Anuitas Biasa = PMT × [(1 - (1 + r)^-n) / r]',
        'PV Anuitas Jatuh di Muka = PV Anuitas Biasa × (1 + r)'
      ]
    },
    {
      id: 'mk-3',
      nomor: '2.2.3',
      subbab: '2.2',
      judul: 'Konsep Penilaian Surat Berharga',
      halamanPdf: 'Hal. 7',
      referensi: 'Keown et al. (2005); Martono & Harjito (2010)',
      ringkasan: 'Penilaian surat berharga memperkirakan nilai wajar instrumen berdasarkan arus kas yang diharapkan dan tingkat pengembalian yang disyaratkan.',
      isiMateri: `Penilaian surat berharga memperkirakan nilai wajar instrumen berdasarkan arus kas yang diharapkan dan tingkat pengembalian yang disyaratkan. Obligasi dinilai dari nilai kini kupon dan pokok saat jatuh tempo. Saham dapat dianalisis dari dividen, pertumbuhan, dan risiko. Harga pasar dapat berbeda dari nilai intrinsik akibat suku bunga, risiko, prospek emiten, dan sentimen.`,
      fokusUjian: 'Bedakan obligasi dan saham serta hubungan tingkat diskonto dengan nilai sekarang.',
      poinKunci: [
        'Valuasi Obligasi: PV Pembayaran Kupon Berkala + PV Nilai Pari/Nominal saat Jatuh Tempo.',
        'Hubungan suku bunga pasar dan harga obligasi: Jika suku bunga pasar naik, harga obligasi turun (diskon); jika turun, harga naik (premium).',
        'Valuasi Saham Biasa: Dividend Discount Model (Gordon Growth Model: P0 = D1 / (k - g)).',
        'Nilai Intrinsik vs Harga Pasar: Jika Nilai Intrinsik > Harga Pasar, saham dianggap undervalued (layak beli).'
      ],
      rumusAtauMetode: [
        'P0 = ∑ [Ct / (1 + kd)^t] + [M / (1 + kd)^n]',
        'P0 (Gordon Model) = D1 / (ke - g)'
      ]
    },
    {
      id: 'mk-4',
      nomor: '2.2.4',
      subbab: '2.2',
      judul: 'Analisis Laporan Keuangan',
      halamanPdf: 'Hal. 7',
      referensi: 'Sujarweni (2021); Keown et al. (2005)',
      ringkasan: 'Menilai kondisi dan kinerja melalui laporan posisi keuangan, laba rugi, arus kas, dan perubahan ekuitas untuk mengukur likuiditas, solvabilitas, aktivitas, dan profitabilitas.',
      isiMateri: `Analisis laporan keuangan menilai kondisi dan kinerja melalui laporan posisi keuangan, laba rugi, arus kas, dan perubahan ekuitas. Analisis dapat mengukur likuiditas, solvabilitas, aktivitas, profitabilitas, dan kemampuan menghasilkan kas. Hasilnya dibandingkan dengan periode lalu, anggaran, pesaing, atau standar industri.`,
      fokusUjian: 'Kenali fungsi setiap laporan dan kelompok rasio; interpretasikan hasil, bukan hanya menghitung.',
      poinKunci: [
        'Rasio Likuiditas: Current Ratio = Aset Lancar / Liabilitas Lancar; Quick Ratio = (Aset Lancar - Persediaan) / Liabilitas Lancar.',
        'Rasio Solvabilitas/Leverage: Debt to Asset Ratio (DAR) = Total Utang / Total Aset; Debt to Equity Ratio (DER) = Total Utang / Total Ekuitas.',
        'Rasio Aktivitas: Inventory Turnover, Total Asset Turnover, Day Sales Outstanding (DSO).',
        'Rasio Profitabilitas: Gross Profit Margin, Net Profit Margin (NPM), Return on Assets (ROA), Return on Equity (ROE).'
      ],
      rumusAtauMetode: [
        'Current Ratio = Aset Lancar / Kewajiban Lancar',
        'DER = Total Liabilitas / Total Ekuitas',
        'ROA = Laba Bersih / Total Aset',
        'ROE = Laba Bersih / Total Ekuitas'
      ]
    },
    {
      id: 'mk-5',
      nomor: '2.2.5',
      subbab: '2.2',
      judul: 'Analisis Common Size dan Analisis Indeks',
      halamanPdf: 'Hal. 7',
      referensi: 'Sujarweni (2021); Keown et al. (2005)',
      ringkasan: 'Common size mengubah pos laporan menjadi persentase dari angka dasar, sedangkan analisis indeks membandingkan pos beberapa periode terhadap tahun dasar.',
      isiMateri: `Common size mengubah pos laporan menjadi persentase dari angka dasar, misalnya pos laba rugi terhadap penjualan atau pos neraca terhadap total aset. Analisis indeks/tren membandingkan pos beberapa periode dengan periode dasar (umumnya indeks 100). Keduanya menunjukkan struktur dan perubahan keuangan, dengan tetap memperhatikan perubahan kebijakan akuntansi dan kondisi usaha.`,
      fokusUjian: 'Pahami basis persentase common size dan cara menentukan indeks terhadap tahun dasar.',
      poinKunci: [
        'Common Size Neraca: Setiap pos aset/kewajiban dinyatakan sebagai % dari Total Aset (100%).',
        'Common Size Laba Rugi: Setiap pos pendapatan/beban dinyatakan sebagai % dari Penjualan Bersih (100%).',
        'Analisis Tren/Indeks: Tahun dasar ditetapkan 100, tahun berikutnya dihitung = (Nilai Tahun Berjalan / Nilai Tahun Dasar) × 100.',
        'Fungsi: Membandingkan struktur keuangan antar-perusahaan berbeda ukuran secara proporsional.'
      ]
    },
    {
      id: 'mk-6',
      nomor: '2.2.6',
      subbab: '2.2',
      judul: 'Manajemen Modal Kerja',
      halamanPdf: 'Hal. 7',
      referensi: 'Keown et al. (2005); Martono & Harjito (2010)',
      ringkasan: 'Modal kerja berkaitan dengan aset lancar dan kewajiban lancar yang menopang operasi harian agar likuid tanpa menahan aset lancar berlebihan.',
      isiMateri: `Modal kerja berkaitan dengan aset lancar dan kewajiban lancar yang menopang operasi harian. Pengelolaan meliputi kas, piutang, persediaan, dan utang usaha agar perusahaan likuid tanpa menahan aset lancar berlebihan. Modal kerja bersih umumnya aset lancar dikurangi kewajiban lancar. Kebijakan harus menyeimbangkan risiko likuiditas dan profitabilitas.`,
      fokusUjian: 'Pahami modal kerja bersih, siklus konversi kas, dan pengelolaan kas/piutang/persediaan.',
      poinKunci: [
        'Modal Kerja Bersih (Net Working Capital / NWC) = Aset Lancar - Kewajiban Lancar.',
        'Siklus Konversi Kas (Cash Conversion Cycle / CCC) = Hari Rata-Rata Persediaan (ICP) + Hari Pengumpulan Piutang (RCP) - Hari Pembayaran Utang (PDP).',
        'Pendekatan pendanaan modal kerja: Konservatif (dana jangka panjang mendanai seluruh aset), Agresif (utang jangka pendek mendanai aset tetap temporer), dan Moderat/Maturity Matching.'
      ],
      rumusAtauMetode: [
        'NWC = Aset Lancar - Liabilitas Lancar',
        'CCC = ICP + RCP - PDP'
      ]
    },
    {
      id: 'mk-7',
      nomor: '2.2.7',
      subbab: '2.2',
      judul: 'Metode Penilaian Investasi',
      halamanPdf: 'Hal. 7',
      referensi: 'Keown et al. (2005)',
      ringkasan: 'Penilaian investasi menentukan kelayakan proyek berdasarkan arus kas, waktu, risiko, dan tingkat pengembalian yang disyaratkan.',
      isiMateri: `Penilaian investasi menentukan kelayakan proyek berdasarkan arus kas, waktu, risiko, dan tingkat pengembalian. Metode umum: Payback Period, Net Present Value (NPV), Internal Rate of Return (IRR), dan Profitability Index (PI). NPV adalah selisih nilai kini arus kas masuk dan investasi awal; NPV positif umumnya menunjukkan proyek menambah nilai pada tingkat diskonto yang dipakai.`,
      fokusUjian: 'Pahami perhitungan dan interpretasi NPV, IRR, payback, dan PI.',
      poinKunci: [
        'Payback Period: Periode pengembalian investasi awal (kelemahan: mengabaikan nilai waktu uang dan arus kas setelah payback).',
        'Net Present Value (NPV): PV Arus Kas Masuk - Investasi Awal. Kriteria: Terima jika NPV > 0.',
        'Internal Rate of Return (IRR): Tingkat diskonto yang menyebabkan NPV persis sama dengan nol. Kriteria: Terima jika IRR > Biaya Modal (k).',
        'Profitability Index (PI): PV Arus Kas Masuk / Investasi Awal. Kriteria: Terima jika PI > 1,0.'
      ],
      rumusAtauMetode: [
        'NPV = ∑ [CFt / (1 + k)^t] - I0',
        'PI = PV Inflow / Initial Outlay',
        'Payback Period = Investasi Awal / Arus Kas Bersih Tahunan'
      ]
    },
    {
      id: 'mk-8',
      nomor: '2.2.8',
      subbab: '2.2',
      judul: 'Capital Rationing',
      halamanPdf: 'Hal. 7',
      referensi: 'Keown et al. (2005)',
      ringkasan: 'Capital rationing terjadi ketika plafon dana investasi terbatas sehingga tidak semua proyek layak ber-NPV positif dapat dibiayai sekaligus.',
      isiMateri: `Capital rationing terjadi ketika dana terbatas sehingga tidak semua proyek layak dapat dibiayai. Perusahaan memilih kombinasi proyek yang memberi manfaat terbaik dalam batas anggaran, dengan mempertimbangkan risiko, keterkaitkan proyek, dan strategi. PI dapat membantu pemeringkatan pada kondisi tertentu, tetapi keputusan harus melihat portofolio keseluruhan.`,
      fokusUjian: 'Terangkan mengapa proyek layak tetap perlu diprioritaskan ketika anggaran terbatas.',
      poinKunci: [
        'Penyebab: Pembatasan eksternal pasar modal (hard rationing) atau pembatasan internal plafon manajemen (soft rationing).',
        'Metode pemeringkatan: Menggunakan Profitability Index (PI) untuk memaksimalkan total NPV per rupiah investasi dalam batas anggaran yang tersedia.',
        'Pertimbangan proyek saling meniadakan (mutually exclusive) vs proyek independen.'
      ]
    },
    {
      id: 'mk-9',
      nomor: '2.2.9',
      subbab: '2.2',
      judul: 'Biaya Modal (Cost of Capital)',
      halamanPdf: 'Hal. 7',
      referensi: 'Keown et al. (2005); Martono & Harjito (2010)',
      ringkasan: 'Biaya modal adalah tingkat pengembalian minimum yang disyaratkan penyedia dana untuk menjaga nilai pasar perusahaan tidak turun.',
      isiMateri: `Biaya modal adalah tingkat pengembalian minimum yang disyaratkan penyedia dana. Sumbernya dapat berupa utang, saham preferen, dan ekuitas. WACC menggabungkan biaya setiap sumber berdasarkan proporsi struktur modal, dengan penyesuaian pajak untuk biaya utang sesuai pendekatan yang digunakan. Biaya modal sering menjadi tingkat diskonto proyek dengan risiko sebanding.`,
      fokusUjian: 'Pahami biaya utang setelah pajak, biaya ekuitas, bobot struktur modal, dan WACC.',
      poinKunci: [
        'Biaya Utang Setelah Pajak = kd × (1 - T), karena beban bunga pinjaman dapat dikurangkan dari pajak (tax shield).',
        'Biaya Saham Biasa/Ekuitas (ke): Dihitung dengan CAPM: ke = Rf + β(Rm - Rf) atau Gordon Model: ke = (D1 / P0) + g.',
        'Weighted Average Cost of Capital (WACC) = (wd × kd × (1 - T)) + (wp × kp) + (we × ke).',
        'WACC berperan sebagai hurdle rate (tingkat pembatas) dalam capital budgeting.'
      ],
      rumusAtauMetode: [
        'kd(setelah pajak) = kd(1 - T)',
        'CAPM: ke = Rf + β(Rm - Rf)',
        'WACC = [wd · kd(1 - T)] + [wp · kp] + [we · ke]'
      ]
    },
    {
      id: 'mk-10',
      nomor: '2.2.10',
      subbab: '2.2',
      judul: 'Sumber Dana Jangka Menengah dan Jangka Panjang',
      halamanPdf: 'Hal. 8',
      referensi: 'Keown et al. (2005); Martono & Harjito (2010)',
      ringkasan: 'Sumber pendanaan untuk membiayai aktiva tetap dan pertumbuhan usaha.',
      isiMateri: `Sumber dana menengah dapat berupa pinjaman berjangka dan leasing; sumber jangka panjang dapat berupa obligasi, pinjaman jangka panjang, saham, atau laba ditahan. Pemilihan mempertimbangkan biaya, tenor, fleksibilitas, jaminan, risiko gagal bayar, dampak kepemilikan, dan kecocokan umur pendanaan dengan aset/proyek.`,
      fokusUjian: 'Bandingkan utang dan ekuitas serta kesesuaian tenor dengan kebutuhan.',
      poinKunci: [
        'Pendanaan Jangka Menengah: Term Loan (pinjaman berjangka bank 1-5 tahun) dan Sewa Guna Usaha (Leasing: Financial vs Operating Lease).',
        'Pendanaan Jangka Panjang: Penerbitan Obligasi (utang berkupon), Saham Preferen, Saham Biasa Baru, dan Laba Ditahan (Retained Earnings).',
        'Prinsip Keselarasan Maturitas (Maturity Matching): Aktiva tetap jangka panjang harus didanai oleh instrumen jangka panjang guna menghindari risiko likuiditas pelunasan kilat.'
      ]
    },
    {
      id: 'mk-11',
      nomor: '2.2.11',
      subbab: '2.2',
      judul: 'Kebijakan Dividen',
      halamanPdf: 'Hal. 8',
      referensi: 'Keown et al. (2005); Martono & Harjito (2010)',
      ringkasan: 'Menentukan bagian laba bersih yang dibagikan kepada pemegang saham dan bagian yang ditahan untuk pertumbuhan ekspansi.',
      isiMateri: `Kebijakan dividen menentukan bagian laba yang dibagikan kepada pemegang saham dan bagian yang ditahan untuk pertumbuhan. Pilihannya dapat berupa dividen stabil, rasio pembayaran tertentu, atau kebijakan residual setelah kebutuhan investasi dipenuhi. Faktor penentu meliputi arus kas, peluang investasi, kebutuhan dana, ketentuan hukum, ekspektasi investor, dan stabilitas laba.`,
      fokusUjian: 'Jelaskan trade-off dividen dan laba ditahan serta faktor yang memengaruhinya.',
      poinKunci: [
        'Trade-off: Dividen kas memberi kepastian pendapatan bagi investor saat ini, namun mengurangi modal internal (laba ditahan) untuk mendanai proyek baru ber-NPV positif.',
        'Teori Dividen: Miller-Modigliani (Dividend Irrelevance), Bird-in-the-Hand Theory, Tax Preference Theory.',
        'Bentuk Kebijakan: Kebijakan Dividen Stabil (konstan), Rasio Pembayaran Konstan (Constant Payout Ratio), Kebijakan Dividen Residual.'
      ]
    },
    {
      id: 'mk-12',
      nomor: '2.2.12',
      subbab: '2.2',
      judul: 'Analisis Peluang Pokok (Break Even)',
      halamanPdf: 'Hal. 8',
      referensi: 'Sujarweni (2021); Keown et al. (2005)',
      ringkasan: 'Break-Even Point (BEP) adalah tingkat penjualan ketika total pendapatan persis sama dengan total biaya sehingga laba operasi bernilai nol.',
      isiMateri: `Break-Even Point (BEP) adalah tingkat penjualan ketika total pendapatan sama dengan total biaya sehingga laba operasi nol. Analisis membedakan biaya tetap dan variabel serta menggunakan margin kontribusi (harga jual dikurangi biaya variabel per unit). BEP dapat dinyatakan dalam unit atau rupiah dan membantu perencanaan target penjualan serta evaluasi risiko operasi.`,
      fokusUjian: 'Pahami biaya tetap/variabel, contribution margin, rumus BEP, dan margin of safety.',
      poinKunci: [
        'Biaya Tetap (Fixed Cost / FC): Biaya yang tidak berubah terhadap volume output (sewa gedung, depresiasi).',
        'Biaya Variabel (Variable Cost / VC): Biaya yang berfluktuasi proporsional terhadap volume produksi (bahan baku langsung).',
        'Margin Kontribusi (Contribution Margin) = Harga Jual (P) - Biaya Variabel per Unit (V).',
        'BEP (Unit) = Total Biaya Tetap / (P - V).',
        'BEP (Rupiah) = Total Biaya Tetap / [1 - (V / P)].',
        'Margin of Safety (MOS): Batas penurunan penjualan sebelum perusahaan menderita kerugian = (Penjualan Terencana - BEP) / Penjualan Terencana.'
      ],
      rumusAtauMetode: [
        'BEP (unit) = FC / (P - VC)',
        'BEP (Rp) = FC / (1 - (VC / P))',
        'Margin of Safety = (Actual Sales - BEP Sales) / Actual Sales'
      ]
    },
    {
      id: 'mk-13',
      nomor: '2.2.13',
      subbab: '2.2',
      judul: 'Analisis Leverage',
      halamanPdf: 'Hal. 8',
      referensi: 'Martono & Harjito (2010); Keown et al. (2005)',
      ringkasan: 'Menggambarkan penggunaan biaya tetap untuk memperbesar dampak perubahan penjualan terhadap laba operasi atau laba bersih.',
      isiMateri: `Leverage menggambarkan penggunaan biaya tetap untuk memperbesar dampak perubahan penjualan terhadap laba atau penggunaan utang untuk membiayai aset. Operating leverage terkait biaya operasi tetap; financial leverage terkait beban pendanaan tetap seperti bunga; combined leverage mencakup keduanya. Leverage dapat meningkatkan potensi pengembalian sekaligus memperbesar risiko.`,
      fokusUjian: 'Bedakan operating, financial, dan combined leverage serta hubungan risiko dan imbal hasil.',
      poinKunci: [
        'Degree of Operating Leverage (DOL): Mengukur elastisitas EBIT terhadap perubahan volume penjualan = (Q × (P - V)) / [Q(P - V) - FC].',
        'Degree of Financial Leverage (DFL): Mengukur elastisitas EPS terhadap perubahan EBIT = EBIT / [EBIT - Bunga Pinjaman].',
        'Degree of Combined Leverage (DCL) = DOL × DFL = Mengukur sensitivitas EPS terhadap perubahan penjualan.',
        'Trade-off: Tingkat leverage tinggi memperbesar pengembalian saat kondisi ekonomi ekspansif, namun memperbesar risiko kebangkrutan saat penjualan lesu.'
      ],
      rumusAtauMetode: [
        'DOL = % Perubahan EBIT / % Perubahan Penjualan',
        'DFL = % Perubahan EPS / % Perubahan EBIT',
        'DCL = DOL × DFL'
      ]
    },
    {
      id: 'mk-14',
      nomor: '2.2.14',
      subbab: '2.2',
      judul: 'Analisis Sumber dan Penggunaan Dana',
      halamanPdf: 'Hal. 8',
      referensi: 'Sujarweni (2021); Keown et al. (2005)',
      ringkasan: 'Menelaah asal perolehan dana dan alokasi penggunaannya dalam suatu periode akuntansi.',
      isiMateri: `Analisis ini menelaah asal dana dan penggunaannya dalam periode tertentu. Sumber dapat berasal dari kenaikan kewajiban/ekuitas atau penurunan aset tertentu; penggunaan dapat berupa kenaikan aset atau penurunan kewajiban/ekuitas. Analisis membantu menilai perubahan struktur keuangan dan kesesuaian penggunaan dana dengan aktivitas perusahaan.`,
      fokusUjian: 'Identifikasi transaksi sebagai sumber atau penggunaan dana dan jelaskan dampaknya.',
      poinKunci: [
        'Sumber Dana: Kenaikan Liabilitas (utang bertambah), Kenaikan Ekuitas (penerbitan saham baru), Penurunan Aset selain kas (penjualan mesin/penagihan piutang), Laba Bersih Operasional, dan Beban Non-Kas (Depresiasi).',
        'Penggunaan Dana: Penurunan Liabilitas (pelunasan utang), Penurunan Ekuitas (pembagian dividen tunai / buyback saham), Kenaikan Aset (pembelian mesin baru / kenaikan persediaan), dan Kerugian Operasi.',
        'Analisis Arus Kas: Kas dari Aktivitas Operasi, Aktivitas Investasi, dan Aktivitas Pendanaan.'
      ]
    }
  ]
};
