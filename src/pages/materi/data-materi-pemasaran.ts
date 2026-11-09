import { BidangMateri } from '../../types/materi';

export const dataMateriPemasaran: BidangMateri = {
  id: 'pemasaran',
  nama: 'Manajemen Pemasaran',
  kode: 'MP',
  nomorBab: 3,
  judulBab: 'BAB 3 — MANAJEMEN PEMASARAN',
  halamanPdf: 'Halaman 9–10',
  deskripsi: 'Panduan belajar praktis seputar cara mengenali kebutuhan pembeli, bauran pemasaran (4P/7P), promosi penjualan, dan strategi memenangkan persaingan usaha untuk Ujian Komprehensif STIE Wibawa Karta Raharja Purwakarta.',
  iconName: 'Target',
  color: '#E11D48',
  gambaranUmum: `Manajemen Pemasaran di STIE Wibawa Karta Raharja (WIKARA) Purwakarta mempelajari bagaimana sebuah usaha mengenali apa yang diinginkan oleh pembeli, menciptakan produk atau jasa yang disukai, menetapkan harga yang pas, mendistribusikannya ke tempat yang mudah dijangkau, serta mempromosikannya agar laku di pasaran. Pokok bahasan disajikan secara bersahabat dan praktis: memahami bauran pemasaran (Marketing Mix 4P untuk barang: Produk, Harga, Tempat, Promosi; serta tambahan 3P untuk jasa: Orang, Proses, Bukti Fisik), memahami tahapan usia suatu produk, hingga cara memanfaatkan promosi langsung maupun media sosial untuk meningkatkan penjualan.`,
  konsepDasar: `Pemasaran bukan sekadar menjual barang atau merayu orang untuk membeli, melainkan seni memahami kebutuhan konsumen dan memberikan kepuasan kepada mereka sehingga terjalin hubungan langganan jangka panjang. Tiga langkah utamanya adalah: (1) Membagi pasar (Segmentasi: siapa saja kelompok pembelinya?), (2) Memilih sasaran (Targeting: kelompok mana yang mau difokuskan?), dan (3) Menentukan citra di benak pembeli (Positioning: apa keunikan produk kita yang membuatnya beda dari pesaing?).`,
  tujuanPembelajaran: [
    'Memahami daur hidup produk (dari masa perkenalan, pertumbuhan ramai, masa jenuh/dewasa, hingga penurunan).',
    'Mengetahui 4 ciri khusus layanan jasa (tidak berwujud fisik, tidak bisa disimpan, mutu beragam, dan dinikmati langsung saat dilayani).',
    'Menjelaskan cara menentukan harga jual yang masuk akal dan strategi harga awal bagi produk baru.',
    'Membedakan cara menjual langsung ke pembeli vs melalui perantara toko/agen (saluran distribusi).',
    'Mengetahui berbagai cara promosi: memasang iklan, memberi diskon belanja, dan memanfaatkan media sosial.'
  ],
  petunjukUjian: [
    'Pemasaran paling mudah dipahami dengan membayangkan diri Anda sebagai pembeli atau pemilik usaha toko.',
    'Hindari menghafal definisi bahasa Inggris yang berbelit-belit. Gunakan bahasa Indonesia yang santai namun berbobot akademik.',
    'Bila ditanya soal bauran pemasaran (4P), sebutkan secara runtut: Produknya apa, berapa Harganya, di mana Tempat jualnya, dan bagaimana cara Promosinya.',
    'Beri contoh usaha sehari-hari yang nyata, seperti kedai kopi, penjual pakaian online, toko kelontong, atau usaha kuliner lokal.'
  ],
  referensi: [
    {
      id: 'mp-ref-1',
      penulis: 'Kotler, P. dan Armstrong, G.',
      tahun: '2008 / Sesuai Panduan',
      judul: 'Prinsip-prinsip Pemasaran (Principles of Marketing)',
      penerbit: 'Pearson Education / Erlangga',
      catatan: 'Buku rujukan dasar untuk konsep bauran pemasaran 4P, segmentasi pasar, dan perilaku pembeli.',
      halamanPdf: 'Hal. 9 & 13'
    },
    {
      id: 'mp-ref-2',
      penulis: 'Philip Kotler',
      tahun: '13th Edition (2009)',
      judul: 'Marketing Management, 13th Edition',
      penerbit: 'Pearson Education, Inc., New Jersey',
      catatan: 'Buku rujukan utama strategi pemasaran dan daur hidup produk.',
      halamanPdf: 'Hal. 9 & 13'
    },
    {
      id: 'mp-ref-3',
      penulis: 'Kotler, P., dan Keller, K. L.',
      tahun: '5th Asian Edition (2012)',
      judul: 'Marketing Management: An Asian Perspective',
      penerbit: 'Prentice Hall',
      catatan: 'Buku rujukan pemasaran jasa 7P dan dinamika pasar berkembang di Asia.',
      halamanPdf: 'Hal. 9 & 13'
    }
  ],
  pokokBahasan: [
    {
      id: 'mp-1',
      nomor: '3.2.1',
      subbab: '3.2',
      judul: 'Strategi Produk dan Daur Hidup Produk',
      halamanPdf: 'Hal. 9',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Mengembangkan produk yang sesuai dengan keinginan pembeli dan menyesuaikan strategi pada setiap tahap usia produk.',
      isiMateri: `Produk adalah segala sesuatu yang ditawarkan kepada pembeli untuk memenuhi kebutuhan atau keinginan mereka, bisa berupa barang fisik, layanan jasa, maupun pengalaman.

Komponen Penting Produk:
- Kualitas dan Rasa/Fungsi: Produk harus berfungsi baik dan tidak mengecewakan.
- Merek (Brand): Nama atau logo pengenal agar pembeli mudah mengingat dan membedakan produk kita dari produk orang lain.
- Kemasan (Packaging): Bukan hanya pembungkus pelindung, tetapi juga alat penarik perhatian di rak toko yang memuat informasi izin dan tanggal kedaluwarsa.

Empat Tahap Daur Hidup Produk (Product Life Cycle):
1. Tahap Perkenalan (Introduction): Produk baru pertama kali masuk pasar. Penjualan masih sedikit, biaya promosi besar untuk memperkenalkan nama produk, keuntungan masih minim atau merugi.
2. Tahap Pertumbuhan (Growth): Produk mulai disukai banyak orang, penjualan melonjak cepat, keuntungan mulai terasa, namun pesaing mulai bermunculan meniru.
3. Tahap Kedewasaan / Kejenuhan (Maturity): Penjualan mencapai titik puncak tertinggi lalu melambat karena hampir semua orang sudah tahu. Persaingan harga sangat sengit; usaha harus rajin berinovasi rasa, kemasan baru, atau varian baru agar tidak ditinggalkan.
4. Tahap Penurunan (Decline): Penjualan anjlok terus karena selera masyarakat sudah berganti atau muncul teknologi/produk baru yang lebih bagus. Usaha harus memutuskan apakah mengganti produk lama dengan produk baru.`,
      fokusUjian: 'Penguji sangat sering menanyakan 4 tahap daur hidup produk (perkenalan, pertumbuhan, kedewasaan, penurunan) dan apa yang harus dilakukan pengusaha di tiap tahap.',
      poinKunci: [
        'Daur hidup produk: Perkenalan -> Pertumbuhan -> Kedewasaan -> Penurunan.',
        'Tahap perkenalan butuh promosi gencar agar calon pembeli sadar akan produk.',
        'Tahap kedewasaan menuntut inovasi varian atau kemasan agar tidak kalah dalam persaingan harga.'
      ],
      contohPenerapan: 'Minuman teh kemasan botol di tahap kedewasaan sering mengeluarkan varian rasa baru (rasa apel, lemon, madu) dan ukuran kemasan mini agar pembeli tidak bosan.'
    },
    {
      id: 'mp-2',
      nomor: '3.2.2',
      subbab: '3.2',
      judul: 'Mengelola Jasa',
      halamanPdf: 'Hal. 9',
      referensi: 'Kotler & Keller (5th ed.); Philip Kotler (13th ed.)',
      ringkasan: 'Menjual layanan non-fisik dengan memahami empat sifat khas jasa dan bauran pemasaran jasa 7P.',
      isiMateri: `Jasa adalah kegiatan atau manfaat yang ditawarkan oleh satu pihak kepada pihak lain yang pada dasarnya tidak berwujud benda fisik dan tidak menghasilkan kepemilikan atas barang tertentu (misalnya: potong rambut di salon, kamar hotel, servis motor di bengkel, dan dokter gigi).

Empat Ciri Khas Layanan Jasa yang Wajib Dipahami:
1. Tidak Berwujud Fisik (Intangible): Jasa tidak bisa dilihat, diraba, atau dicicipi sebelum dibeli. Pembeli baru merasakan kualitasnya saat layanan diberikan.
2. Tidak Dapat Dipisahkan (Inseparable): Proses pembuatan layanan berlangsung bersamaan saat dinikmati konsumen. Karyawan dan pelanggan berinteraksi langsung.
3. Kualitas Beragam (Variable): Mutu layanan bisa berbeda-beda tergantung siapa staf yang melayani, suasana hatinya, dan kapan waktu pelayanannya. Oleh karena itu, pemilik usaha butuh Standar Operasional (SOP) dan pelatihan karyawan.
4. Tidak Tahan Lama / Tidak Bisa Disimpan (Perishable): Jasa tidak bisa disimpan di gudang untuk dijual besok. Contoh: kursi kereta api atau kamar hotel yang kosong pada hari ini akan hangus begitu saja dan tidak bisa diakumulasi ke akhir pekan.

Bauran Pemasaran Jasa (7P):
Selain 4P barang biasa (Produk, Harga, Tempat, Promosi), usaha jasa memerlukan 3P tambahan:
5. Orang (People): Karyawan yang melayani harus ramah, terampil, dan rapi penampilannya.
6. Proses (Process): Alur pelayanan dari saat tamu datang hingga selesai harus cepat, jelas, dan tidak membingungkan.
7. Bukti Fisik (Physical Evidence): Kebersihan ruangan, kenyamanan tempat duduk, wangi ruangan, dan seragam pegawai yang meyakinkan konsumen.`,
      fokusUjian: 'Jelaskan 4 sifat utama jasa (tidak berwujud, tidak bisa disimpan, beragam, tidak terpisahkan) dan mengapa bukti fisik (ruangan bersih/wangi) sangat penting bagi usaha jasa.',
      poinKunci: [
        'Jasa tidak berwujud fisik dan tidak dapat disimpan di gudang.',
        'Pelayanan jasa dinikmati langsung saat interaksi karyawan dan pelanggan berlangsung.',
        'Bauran jasa 7P menambahkan People (karyawan ramah), Process (alur lancar), dan Physical Evidence (ruangan bersih/nyaman).'
      ]
    },
    {
      id: 'mp-3',
      nomor: '3.2.3',
      subbab: '3.2',
      judul: 'Penetapan Harga',
      halamanPdf: 'Hal. 9',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Menentukan harga jual yang tepat agar menutupi modal, bersaing di pasar, dan dianggap pantas oleh pembeli.',
      isiMateri: `Harga adalah sejumlah uang yang harus dibayarkan oleh pembeli untuk mendapatkan sebuah produk atau layanan. Harga adalah satu-satunya unsur dalam bauran pemasaran yang langsung mendatangkan pemasukan uang (unsur lainnya mengeluarkan biaya).

Tiga Cara Dasar Menentukan Harga:
1. Berdasarkan Biaya (Cost-Based): Menghitung seluruh biaya modal pembuatan produk (bahan baku, upah kerja, sewa tempat) lalu ditambahkan persentase keuntungan yang diinginkan. Contoh: modal membuat seporsi nasi goreng Rp10.000, ingin untung Rp5.000, maka dijual Rp15.000.
2. Berdasarkan Harga Pesaing (Competitor-Based): Melihat berapa harga yang dipasang oleh toko-toko sebelah, lalu memasang harga yang mirip agar tidak kalah bersaing.
3. Berdasarkan Nilai bagi Pembeli (Value-Based): Menetapkan harga berdasarkan seberapa besar manfaat dan gengsi produk tersebut di mata konsumen (misalnya segelas kopi di kafe nyaman ber-AC bisa dijual Rp35.000 karena konsumen membeli suasana kerja dan WiFi cepat).

Dua Strategi Harga untuk Produk Baru:
- Harga Murah Penetrasi Pasar (Penetration Pricing): Memasang harga awal yang terjangkau agar banyak orang penasaran untuk mencoba dan produk cepat menguasai pasar.
- Harga Mahal Memerah Pasar (Price Skimming): Memasang harga awal setinggi mungkin bagi kalangan berada yang ingin menjadi orang pertama pembeli barang mewah atau canggih (contoh: HP seri terbaru), lalu harganya diturunkan bertahap kemudian hari.`,
      fokusUjian: 'Bedakan strategi harga murah penetrasi pasar dengan strategi harga mahal memerah pasar, dan jelaskan tiga cara menetapkan harga jual.',
      poinKunci: [
        'Harga adalah satu-satunya elemen bauran pemasaran yang menghasilkan pendapatan uang.',
        'Harga penetrasi memasang harga murah terjangkau agar produk cepat dikenal dan banyak pembeli.',
        'Harga memerah pasar memasang harga tinggi di awal untuk menyasar pembeli berkantong tebal.'
      ]
    },
    {
      id: 'mp-4',
      nomor: '3.2.4',
      subbab: '3.2',
      judul: 'Saluran Distribusi (Tempat / Place)',
      halamanPdf: 'Hal. 10',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Memilih jalur pengiriman barang dari tempat pembuatan hingga sampai ke tangan pembeli dengan mudah dan tepat waktu.',
      isiMateri: `Saluran distribusi adalah jalur yang dilalui oleh barang dari produsen (pembuat) sampai ke tangan konsumen akhir (pemakai).

Dua Bentuk Saluran Distribusi Utama:
1. Saluran Langsung (Direct Channel):
Produsen menjual langsung kepada pembeli tanpa perantara.
Contoh: Membuka warung makan sendiri, berjualan lewat media sosial sendiri, atau memiliki gerai resmi di depan rumah.
Keuntungan: Untung tidak terpotong perantara dan bisa mendengar langsung saran pembeli.
Kelemahan: Jangkauan pembeli terbatas hanya pada orang yang bisa dihubungi langsung.

2. Saluran Tidak Langsung (Indirect Channel):
Produsen menitipkan barangnya melalui perantara dagang:
Produsen -> Agen Besar / Distributor -> Toko Grosir -> Toko Pengecer / Warung -> Konsumen.
Contoh: Pabrik mi instan atau pabrik sabun mandi menitipkan barangnya ke toko-toko kelontong di seluruh pelosok desa.
Keuntungan: Barang bisa tersebar luas ke mana-mana dan laku dalam jumlah sangat besar.
Kelemahan: Produsen harus berbagi keuntungan dengan para agen dan toko perantara.`,
      fokusUjian: 'Jelaskan perbedaan saluran distribusi langsung (tanpa perantara) vs tidak langsung (lewat toko/agen) beserta keuntungan dan kekurangannya.',
      poinKunci: [
        'Saluran langsung menjual langsung ke pembeli (margin untung utuh tapi jangkauan terbatas).',
        'Saluran tidak langsung memanfaatkan toko/agen perantara (jangkauan luas tapi harus bagi keuntungan).',
        'Tujuan distribusi adalah memastikan produk tersedia di tempat yang mudah dijangkau saat konsumen membutuhkan.'
      ]
    },
    {
      id: 'mp-5',
      nomor: '3.2.5',
      subbab: '3.2',
      judul: 'Komunikasi Pemasaran dan Periklanan',
      halamanPdf: 'Hal. 10',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Menyampaikan pesan kepada masyarakat agar mereka mengenal keunggulan produk dan tertarik untuk membeli.',
      isiMateri: `Komunikasi pemasaran adalah cara perusahaan berbicara dan memperkenalkan barang dagangannya kepada masyarakat.

Tiga Tujuan Utama Komunikasi:
1. Memberi Tahu (Informing): Mengabarkan bahwa produk kita ada, apa kegunaannya, dan di mana bisa dibeli.
2. Membujuk (Persuading): Meyakinkan pembeli bahwa produk kita lebih enak, lebih awet, atau lebih hemat dibanding produk lain.
3. Mengingatkan (Reminding): Mengingatkan kembali pelanggan lama agar tidak lupa untuk membeli lagi.

Periklanan (Advertising):
Penyampaian pesan promosi berbayar yang disiarkan kepada khalayak ramai tanpa tatap muka langsung, misalnya melalui:
- Papan baliho dan spanduk di tepi jalan raya.
- Iklan radio, televisi, atau koran lokal.
- Iklan bersponsor di internet dan media sosial (Instagram Ads, TikTok Ads, YouTube Ads).`,
      fokusUjian: 'Sebutkan 3 tujuan dasar komunikasi promosi (memberi tahu, membujuk, dan mengingatkan pelanggan).',
      poinKunci: [
        'Komunikasi pemasaran bertujuan memberi tahu, membujuk, dan mengingatkan konsumen.',
        'Iklan adalah sarana promosi berbayar untuk menjangkau banyak orang secara luas.'
      ]
    },
    {
      id: 'mp-6',
      nomor: '3.2.6',
      subbab: '3.2',
      judul: 'Promosi Penjualan (Sales Promotion)',
      halamanPdf: 'Hal. 10',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Memberikan imbalan atau potongan harga jangka pendek agar pembeli segera melakukan pembelian saat itu juga.',
      isiMateri: `Promosi penjualan adalah berbagai bentuk rangsangan jangka pendek yang sengaja dibuat untuk menggoda orang agar segera berbelanja hari itu juga tanpa menunda-nunda.

Bentuk-Bentuk Promosi Penjualan yang Sering Digunakan:
1. Potongan Harga (Diskon): Misalnya diskon 20% khusus belanja hari Jumat.
2. Beli Satu Gratis Satu (Buy 1 Get 1): Mengajak pembeli membawa pulang barang lebih banyak.
3. Contoh Gratis (Sample): Membagikan cicipan makanan kecil di depan toko agar orang yang lewat tertarik mencicipi dan akhirnya membeli satu kotak penuh.
4. Kupon atau Voucer Belanja: Potongan harga bagi pembeli yang membawa lembaran kupon atau kode promo aplikasi.
5. Hadiah Langsung: Memberikan suvenir cangkir atau gantungan kunci jika belanja di atas nominal tertentu.

Kelebihan dan Kelemahan:
- Kelebihan: Penjualan toko langsung melonjak ramai seketika.
- Kelemahan: Jika diskon dilakukan terus-menerus setiap hari tanpa henti, pembeli akan terbiasa dan tidak mau lagi membeli saat harga kembali normal.`,
      fokusUjian: 'Bedakan iklan (membangun nama merek jangka panjang) dengan promosi penjualan (memberi diskon agar pembeli belanja hari ini juga).',
      poinKunci: [
        'Promosi penjualan memberikan insentif jangka pendek (diskon, voucer, hadiah langsung).',
        'Tujuannya mendorong orang segera membeli saat itu juga.',
        'Diskon yang terlalu sering dapat merusak citra harga normal produk.'
      ]
    },
    {
      id: 'mp-7',
      nomor: '3.2.7',
      subbab: '3.2',
      judul: 'Hubungan Masyarakat dan Pemasaran Digital',
      halamanPdf: 'Hal. 10',
      referensi: 'Kotler & Armstrong; Philip Kotler (13th ed.)',
      ringkasan: 'Menjaga nama baik usaha di mata masyarakat luas dan memanfaatkan kekuatan media sosial serta internet untuk pemasaran.',
      isiMateri: `Dua sarana penting dalam era bisnis saat ini:

A. Hubungan Masyarakat (Humas / Public Relations):
Upaya menjaga nama baik dan citra positif perusahaan di mata masyarakat luas.
Contoh kegiatannya:
- Mengadakan bakti sosial atau donor darah.
- Menjadi sponsor acara gerak jalan santai warga.
- Menjelaskan klarifikasi secara sopan dan terbuka jika ada keluhan atau salah paham dari masyarakat.

B. Pemasaran Digital (Digital Marketing):
Memanfaatkan internet, telepon pintar, dan media sosial untuk mempromosikan produk:
- Membuat video konten kreatif di TikTok dan Instagram mengenai keunikan produk.
- Mendaftarkan titik lokasi toko di peta online (Google Maps) agar pembeli mudah mencari rute jalan dan melihat ulasan bintang dari pembeli lain.
- Bergabung di aplikasi pesan-antar makanan dan pasar online (e-commerce).
Keuntungan Pemasaran Digital: Biayanya jauh lebih murah dibanding memasang baliho besar, dan pesannya bisa langsung ditujukan kepada kelompok anak muda atau warga di wilayah tertentu.`,
      fokusUjian: 'Jelaskan mengapa usaha kecil zaman sekarang wajib memanfaatkan media sosial dan peta online untuk mempromosikan barang dagangannya.',
      poinKunci: [
        'Humas bertugas menjaga citra baik dan hubungan baik dengan masyarakat.',
        'Pemasaran digital memanfaatkan media sosial dan internet dengan biaya hemat namun jangkauan tepat sasaran.',
        'Ulasan positif pembeli di internet menjadi penentu kepercayaan bagi pembeli baru.'
      ]
    }
  ]
};
