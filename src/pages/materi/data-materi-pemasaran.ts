import { BidangMateri } from '../../types/materi';

export const dataMateriPemasaran: BidangMateri = {
  id: 'pemasaran',
  nama: 'Manajemen Pemasaran',
  kode: 'MP',
  nomorBab: 3,
  judulBab: 'BAB 3 — MANAJEMEN PEMASARAN',
  halamanPdf: 'Halaman 9–10',
  deskripsi: 'Memahami kebutuhan pasar, memilih target pelanggan, bauran pemasaran (4P/7P), promosi penjualan, serta studi kasus UMKM dan bisnis di Purwakarta untuk Ujikom STIE Wikara.',
  iconName: 'Target',
  color: '#E11D48',
  gambaranUmum: `Materi Manajemen Pemasaran pada Ujian Komprehensif STIE Wibawa Karta Raharja (WIKARA) Purwakarta dirancang agar mahasiswa memahami cara bisnis mengidentifikasi kebutuhan konsumen, memilih target pasar, menciptakan nilai produk yang disukai pelanggan, dan memenangkan persaingan usaha secara nyata. Pokok bahasan disajikan secara komunikatif, praktis, dan membumi dengan mengaitkan konsep bauran pemasaran (produk, harga, lokasi/distribusi, dan promosi) pada dinamika usaha lokal di Purwakarta—mulai dari kuliner Sate Maranggi, oleh-oleh Simping Kaum, gerai UMKM keramik Plered, perhotelan/wisata Wanayasa, hingga bisnis rintisan mahasiswa. Fokus ujian ditekankan pada pemahaman konseptual, logika manajerial, dan strategi terapan tanpa kerumitan teori yang memberatkan.`,
  konsepDasar: `Pemasaran berfokus pada pemenuhan kepuasan pelanggan secara berkesinambungan sehingga menghasilkan keuntungan bagi usaha. Mahasiswa dibekali 3 fondasi utama: (1) Segmentasi, Target, dan Posisi Pasar (STP) agar usaha tidak salah sasaran; (2) Bauran Pemasaran (Marketing Mix 4P untuk barang: Produk, Harga, Tempat/Distribusi, Promosi; serta tambahan 3P untuk jasa: Orang, Bukti Fisik, dan Proses); serta (3) Komunikasi Promosi Terpadu baik melalui media sosial (TikTok, Instagram) maupun promosi langsung di toko.`,
  tujuanPembelajaran: [
    'Memahami tingkatan produk, daur hidup produk (PLC: pengenalan, pertumbuhan, kedewasaan, penurunan), dan pentingnya merek yang kuat.',
    'Menjelaskan karakteristik unik jasa (tidak berwujud, tidak dapat dipisahkan, bervariasi, tidak tahan lama) dan bauran pemasaran jasa 7P.',
    'Mengenal strategi harga yang realistis (berdasarkan biaya, nilai bagi pelanggan, dan harga pesaing) untuk UMKM maupun ritel.',
    'Membedakan saluran distribusi langsung (penjual ke konsumen) dan tidak langsung (melalui agen/toko pengecer).',
    'Menjelaskan bauran promosi (iklan, promosi penjualan diskon/sampel, penjualan tatap muka, dan pemasaran digital media sosial).'
  ],
  petunjukUjian: [
    'Fokuskan pada pemahaman logika bisnis dan istilah praktis, bukan menghafal definisi bahasa asing yang rumit.',
    'Pahami 4 tahap Daur Hidup Produk (perkenalan, pertumbuhan, kedewasaan, penurunan) serta langkah yang harus diambil pemilik usaha di tiap tahap.',
    'Gunakan contoh nyata bisnis di sekitar Purwakarta (seperti Maranggi, Simping, Kafe mahasiswa, atau kerajinan Plered) saat menjelaskan bauran pemasaran atau posisi pasar (positioning).',
    'Pada pertanyaan lisan/studi kasus, utamakan penjelasan yang runtut: kenali siapa pelanggannya, apa keunggulan produknya, berapa harganya, dan bagaimana cara mempromosikannya.',
    'Ujian komprehensif menguji kesiapan praktis lulusan S1 Manajemen STIE Wikara untuk menjadi pemasar dan wirausahawan yang solutif.'
  ],
  referensi: [
    {
      id: 'mp-ref-1',
      penulis: 'Kotler, P. dan Armstrong, G.',
      tahun: 'Sesuai PDF (edisi/tahun tidak dicantumkan dalam PDF)',
      judul: 'Prinsip-prinsip Pemasaran (Principles of Marketing)',
      penerbit: 'Pearson Education / Erlangga',
      catatan: 'Referensi dasar konsep bauran pemasaran, perilaku konsumen, dan segmentasi pasar.',
      halamanPdf: 'Hal. 9 & 13'
    },
    {
      id: 'mp-ref-2',
      penulis: 'Philip Kotler',
      tahun: '13th Edition (Tahun tidak dicantumkan dalam dokumen sumber; rekaman pustaka 2009)',
      judul: 'Marketing Management, 13th Edition',
      penerbit: 'Pearson Education, Inc., New Jersey',
      catatan: 'Buku teks standar manajemen strategis pemasaran korporasi.',
      halamanPdf: 'Hal. 9 & 13'
    },
    {
      id: 'mp-ref-3',
      penulis: 'Kotler, P., dan Keller, K. L.',
      tahun: '5th Edition (Tahun tidak dicantumkan dalam dokumen sumber; rekaman pustaka 2012)',
      judul: 'Marketing Management: An Asian Perspective, 5th Edition',
      penerbit: 'Prentice Hall',
      catatan: 'Aplikasi bauran pemasaran dan dinamika pasar berkembang di kawasan Asia.',
      halamanPdf: 'Hal. 9 & 13'
    }
  ],
  pokokBahasan: [
    {
      id: 'mp-1',
      nomor: '3.2.1',
      subbab: '3.2',
      judul: 'Strategi Produk',
      halamanPdf: 'Hal. 9',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Produk adalah segala sesuatu yang ditawarkan untuk memenuhi kebutuhan/keinginan, termasuk barang, jasa, pengalaman, dan ide.',
      isiMateri: `Produk adalah segala sesuatu yang ditawarkan untuk memenuhi kebutuhan/keinginan, termasuk barang, jasa, pengalaman, dan ide. Strategi mencakup manfaat inti, atribut, kualitas, desain, merek, kemasan, layanan pendukung, lini dan bauran produk. Produk juga memiliki daur hidup: perkenalan, pertumbuhan, kedewasaan, dan penurunan; strategi dapat disesuaikan pada tiap tahap.`,
      fokusUjian: 'Pahami tingkatan dan atribut produk, branding, bauran produk, dan product life cycle.',
      poinKunci: [
        'Lima Tingkatan Produk: Core Benefit (manfaat inti), Basic Product, Expected Product, Augmented Product (diferensiasi layanan tambahan), dan Potential Product.',
        'Siklus Hidup Produk (Product Life Cycle / PLC): Tahap Perkenalan (biaya promosi tinggi, laba negatif/rendah), Tahap Pertumbuhan (penjualan melonjak, pesaing mulai masuk), Tahap Kedewasaan (pasar jenuh, perang harga), dan Tahap Penurunan (inovasi atau panen laba).',
        'Ekuitas Merek (Brand Equity): Kesadaran merek (awareness), asosiasi merek (association), persepsi kualitas (perceived quality), dan loyalitas merek (loyalty).'
      ],
      penjelasanPendukung: 'Peserta ujian komprehensif diharapkan mampu mengaitkan strategi bauran pemasaran yang tepat untuk produk yang berada di tahap maturity (misal memperluas segmen pengguna atau modifikasi kemasan).'
    },
    {
      id: 'mp-2',
      nomor: '3.2.2',
      subbab: '3.2',
      judul: 'Mengelola Jasa',
      halamanPdf: 'Hal. 9',
      referensi: 'Kotler & Keller (5th ed.); Philip Kotler (13th ed.)',
      ringkasan: 'Jasa adalah aktivitas atau manfaat yang umumnya tidak menghasilkan kepemilikan benda berwujud, dengan karakteristik IHIP yang khas.',
      isiMateri: `Jasa adalah aktivitas atau manfaat yang umumnya tidak menghasilkan kepemilikan benda berwujud. Karakteristik umum: intangibility (tidak berwujud), inseparability (produksi/konsumsi dapat bersamaan), variability (bervariasi), dan perishability (tidak dapat disimpan). Pengelolaan menekankan kualitas layanan, pengalaman pelanggan, kapasitas, proses, bukti fisik, dan kompetensi karyawan.`,
      fokusUjian: 'Jelaskan karakteristik jasa dan cara menjaga konsistensi layanan.',
      poinKunci: [
        'Empat Karakteristik Jasa (IHIP): Intangibility (nirwujud), Inseparability (tidak terpisahkan proses & konsumsi), Variability/Heterogeneity (kualitas tergantung pelaku pemberi jasa), dan Perishability (tidak dapat disimpan di gudang).',
        'Bauran Pemasaran Jasa (7P): Product, Price, Place, Promotion, People (karyawan berinteraksi langsung), Process (tahapan alur layanan), Physical Evidence (bukti fisik lingkungan fasilitas).',
        'Dimensi SERVQUAL: Tangibles (bukti fisik), Reliability (keandalan), Responsiveness (daya tanggap), Assurance (jaminan), dan Empathy (empati personal).'
      ]
    },
    {
      id: 'mp-3',
      nomor: '3.2.3',
      subbab: '3.2',
      judul: 'Penetapan Harga',
      halamanPdf: 'Hal. 9',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Harga adalah nilai yang dikorbankan pelanggan untuk memperoleh produk/jasa, sebagai satu-satunya elemen bauran pemasaran yang menghasilkan pendapatan.',
      isiMateri: `Harga adalah nilai yang dikorbankan pelanggan untuk memperoleh produk/jasa. Penetapan harga mempertimbangkan tujuan perusahaan, biaya, nilai pelanggan, permintaan, persaingan, posisi merek, dan kondisi pasar. Pendekatan umum: berbasis biaya, nilai pelanggan, atau persaingan. Taktik meliputi diskon, paket, harga psikologis, dan penyesuaian segmen/waktu.`,
      fokusUjian: 'Bedakan cost-based, value-based, dan competition-based pricing.',
      poinKunci: [
        'Cost-Based Pricing: Menghitung total biaya produksi ditambah margin laba yang diinginkan (Cost-Plus / Markup Pricing).',
        'Customer Value-Based Pricing: Menetapkan harga berdasarkan persepsi nilai dan manfaat yang dirasakan konsumen.',
        'Competition-Based Pricing: Menetapkan harga mengacu pada tingkat harga yang berlaku di kalangan pesaing industri.',
        'Taktik Penetapan Harga: Market-Skimming Pricing (harga tinggi di awal peluncuran inovatif) vs Market-Penetration Pricing (harga rendah awal untuk merebut pangsa pasar massal).'
      ]
    },
    {
      id: 'mp-4',
      nomor: '3.2.4',
      subbab: '3.2',
      judul: 'Saluran Pemasaran',
      halamanPdf: 'Hal. 10',
      referensi: 'Kotler & Armstrong; Kotler & Keller (5th ed.)',
      ringkasan: 'Saluran pemasaran adalah pihak dan aktivitas yang memindahkan kepemilikan dan fisik produk dari produsen ke konsumen/pengguna bisnis.',
      isiMateri: `Saluran pemasaran adalah pihak dan aktivitas yang memindahkan produk dari produsen ke konsumen/pengguna bisnis. Saluran dapat langsung atau melalui agen, distributor, grosir, dan pengecer. Keputusan mencakup cakupan distribusi, mitra, logistik, persediaan, transportasi, dan koordinasi konflik saluran.`,
      fokusUjian: 'Pahami saluran langsung/tidak langsung dan fungsi perantara.',
      poinKunci: [
        'Saluran Langsung (Direct Channel: Produsen -> Konsumen) vs Saluran Tidak Langsung (Produsen -> Grosir -> Pengecer -> Konsumen).',
        'Tiga Tingkat Intensitas Distribusi: Intensif (produk kebutuhan pokok sehari-hari), Selektif (pakaian, barang elektronik), Eksklusif (mobil mewah, jam tangan mewah).',
        'Konflik Saluran: Konflik Vertikal (antara produsen dengan grosir/pengecer) vs Konflik Horizontal (antara sesama pengecer di wilayah berdekatan).'
      ]
    },
    {
      id: 'mp-5',
      nomor: '3.2.5',
      subbab: '3.2',
      judul: 'Komunikasi Pemasaran',
      halamanPdf: 'Hal. 10',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Menyampaikan informasi, membujuk, dan mengingatkan pasar sasaran mengenai merek atau penawaran melalui komunikasi terpadu.',
      isiMateri: `Komunikasi pemasaran menyampaikan informasi, membujuk, dan mengingatkan pasar mengenai merek atau penawaran. Komunikasi terpadu mengoordinasikan berbagai saluran agar pesannya konsisten. Bauran promosi dapat mencakup iklan, promosi penjualan, hubungan masyarakat/publisitas, penjualan personal, pemasaran langsung, dan digital. Perencanaan meliputi audiens, tujuan, pesan, media, anggaran, dan evaluasi.`,
      fokusUjian: 'Jelaskan tujuan komunikasi dan peran alat promosi yang berbeda.',
      poinKunci: [
        'Integrated Marketing Communications (IMC): Koordinasi seluruh saluran promosi untuk menghasilkan pesan merek yang jelas, konsisten, dan berdaya pengaruh kuat.',
        'Tujuan Komunikasi: Menginformasikan (Inform), Membujuk (Persuade), Mengingatkan (Remind), dan Memperkuat Keputusan Pembelian (Reinforce).',
        'Model Hirarki Efek: Awareness -> Knowledge -> Liking -> Preference -> Conviction -> Purchase.'
      ]
    },
    {
      id: 'mp-6',
      nomor: '3.2.6',
      subbab: '3.2',
      judul: 'Komunikasi Massa: Periklanan, Promosi Penjualan, Peristiwa, dan Publisitas',
      halamanPdf: 'Hal. 10',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Komunikasi satu arah berskala luas untuk membangun brand awareness, reputasi, dan dorongan beli seketika.',
      isiMateri: `Komunikasi massa menjangkau audiens luas. Periklanan adalah komunikasi berbayar yang dikendalikan pengiklan; promosi penjualan memberi insentif jangka pendek; event membangun pengalaman merek; publisitas berupa perhatian/pemberitaan media yang tidak sepenuhnya dikendalikan perusahaan. Masing-masing memiliki karakter, biaya, kredibilitas, dan tujuan berbeda.`,
      fokusUjian: 'Bedakan iklan, promosi penjualan, event, dan publisitas.',
      poinKunci: [
        'Periklanan (Advertising): Komunikasi berbayar, sponsor teridentifikasi, jangkauan luas, namun bersifat pasif satu arah.',
        'Promosi Penjualan (Sales Promotion): Memberikan insentif jangka pendek (diskon, voucher, beli 1 gratis 1, undian) untuk merangsang pembelian kilat.',
        'Acara & Pengalaman (Events & Sponsorship): Menciptakan interaksi emosional langsung antara merek dan komunitas konsumen.',
        'Hubungan Masyarakat & Publisitas (PR): Membangun citra positif dan pemberitaan media massa dengan tingkat kredibilitas tinggi tanpa biaya sewa slot siaran.'
      ]
    },
    {
      id: 'mp-7',
      nomor: '3.2.7',
      subbab: '3.2',
      judul: 'Komunikasi Personal',
      halamanPdf: 'Hal. 10',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Interaksi langsung atau dua arah antara tenaga pemasar dan calon pembeli untuk menggali kebutuhan dan membangun relasi.',
      isiMateri: `Komunikasi personal melibatkan interaksi langsung atau dua arah, misalnya penjualan personal, konsultasi, layanan pelanggan, atau komunikasi langsung. Pesan dapat disesuaikan, pertanyaan dijawab, keberatan ditangani, dan hubungan dibangun. Efektivitas dipengaruhi keterampilan komunikasi, pengetahuan produk, etika, dan pemahaman kebutuhan.`,
      fokusUjian: 'Pahami pendekatan, penggalian kebutuhan, presentasi, penanganan keberatan, penutupan, dan tindak lanjut.',
      poinKunci: [
        'Tahapan Personal Selling: Prospeksi (mencari calon pembeli) -> Pra-pendekatan -> Pendekatan awal -> Presentasi dan demonstrasi -> Penanganan keberatan (handling objections) -> Penutupan transaksi (closing) -> Tindak lanjut pasca-penjualan (follow-up).',
        'Pemasaran Langsung & Digital: Email marketing, telemarketing, tele-sales yang disesuaikan secara personal (personalized messages).'
      ]
    },
    {
      id: 'mp-8',
      nomor: '3.2.8',
      subbab: '3.2',
      judul: 'Penawaran Pasar Baru',
      halamanPdf: 'Hal. 10',
      referensi: 'Kotler & Armstrong; Kotler & Keller (5th ed.)',
      ringkasan: 'Memperkenalkan produk, jasa, atau proposisi nilai kepada segmen atau kebutuhan pasar yang belum terlayani secara optimal.',
      isiMateri: `Penawaran pasar baru memperkenalkan produk, jasa, atau proposisi nilai kepada segmen/kebutuhan yang belum dilayani optimal. Perusahaan perlu melakukan riset, segmentasi, penentuan target, pemetaan pesaing, pengujian konsep, dan penyesuaian bauran pemasaran. Risiko meliputi ketidakpastian permintaan, biaya edukasi pasar, penerimaan pelanggan, dan respons pesaing.`,
      fokusUjian: 'Pahami identifikasi peluang, STP, uji pasar, dan evaluasi kelayakan.',
      poinKunci: [
        'Identifikasi peluang pasar melalui analisis kesenjangan (gap analysis) dan tren konsumen baru.',
        'Segmenting (pembagian pasar homogen), Targeting (pemilihan segmen sasaran), dan Positioning (diferensiasi citra di benak konsumen).',
        'Uji Pasar (Test Marketing) untuk memvalidasi minat pembeli riil sebelum produksi massal komersial.'
      ]
    },
    {
      id: 'mp-9',
      nomor: '3.2.9',
      subbab: '3.2',
      judul: 'Pasar Global',
      halamanPdf: 'Hal. 10',
      referensi: 'Philip Kotler (13th ed.); Kotler & Keller (5th ed.)',
      ringkasan: 'Perencanaan dan pelaksanaan pemasaran lintas negara dengan mempertimbangkan keragaman budaya, regulasi, dan daya beli internasional.',
      isiMateri: `Pemasaran global mencakup perencanaan dan pelaksanaan pemasaran lintas negara. Perusahaan perlu memahami budaya, bahasa, daya beli, regulasi, ekonomi, teknologi, dan persaingan. Keputusan meliputi pemilihan negara, cara masuk (ekspor, lisensi, kemitraan, investasi langsung), serta standardisasi atau adaptasi produk, harga, distribusi, dan promosi.`,
      fokusUjian: 'Jelaskan strategi standardisasi dan adaptasi serta pilihan memasuki pasar.',
      poinKunci: [
        'Mode Masuk Pasar Global: Ekspor Tidak Langsung/Langsung -> Lisensi & Waralaba (Franchising) -> Usaha Patungan (Joint Venture) -> Investasi Langsung Asing (Foreign Direct Investment / FDI).',
        'Standardisasi Produk: Efisiensi biaya skala besar (global economies of scale) dengan produk yang seragam di seluruh dunia.',
        'Adaptasi / Lokalisasi: Menyesuaikan produk, merek, rasa, kemasan, atau harga agar selaras dengan budaya, selera lokal, dan hukum setempat (Glocalization).'
      ]
    }
  ]
};
