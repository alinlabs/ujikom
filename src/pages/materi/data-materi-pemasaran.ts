import { BidangMateri } from '../../types/materi';

export const dataMateriPemasaran: BidangMateri = {
  id: 'pemasaran',
  nama: 'Manajemen Pemasaran',
  kode: 'MP',
  nomorBab: 3,
  judulBab: 'BAB 3 MANAJEMEN PEMASARAN',
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
    'Pemasaran paling mudah dipahami dengan membayangkan diri kamu sebagai pembeli atau pemilik usaha toko.',
    'Hindari menghafal definisi bahasa Inggris yang berbelit-belit. Gunakan bahasa Indonesia yang santai namun berbobot akademik.',
    'Bila ditanya soal bauran pemasaran (4P), sebutkan secara runtut: Produknya apa, berapa Harganya, di mana Tempat jualnya, dan bagaimana cara Promosinya.',
    'Beri contoh usaha sehari-hari yang nyata, seperti kedai kopi, penjual pakaian online, toko kelontong, atau usaha kuliner lokal.'
  ],
  ringkasanFonetis: 'Selamat datang di ringkasan Manajemen Pemasaran. Intinya, pemasaran bukan sekadar merayu orang untuk membeli, melainkan seni memahami apa yang dibutuhkan pembeli agar mereka puas dan menjadi pelanggan setia. Ingat bauran pemasaran For Pi untuk produk barang, yaitu Produk, Harga, Tempat, dan Promosi, serta tambahan Tri Pi untuk jasa yaitu Orang, Proses, dan Bukti Fisik. Saat ujian nanti, bayangkan contoh usaha sehari-hari seperti kedai kopi atau toko pakaian agar penjelasan kamu mengalir lancar.',
  referensiFonetis: 'Buku rujukan utama Manajemen Pemasaran bersumber dari karya Philip Kotler dan Gary Armstrong berjudul Prinsip-Prinsip Pemasaran, buku Marketing Menejemen edisi ketiga belas karya Philip Kotler, serta buku Marketing Menejemen perspektif Asia karya Kotler dan Keller yang membahas pemasaran jasa Seven Pi.',
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
      fokusUjian: 'Fokuskan penjelasan kamu pada unsur penting produk mutu, merek, dan kemasan serta empat tahap daur hidup produk (perkenalan, pertumbuhan, kedewasaan, penurunan) beserta langkah usaha di tiap tahap.',
      penjelasanPendukung: 'Sebagai contoh kasus di lapangan, minuman teh kemasan botol di tahap kedewasaan sering mengeluarkan varian rasa baru (rasa apel, lemon, madu) dan ukuran kemasan mini agar pembeli tidak bosan.',
      transkripFonetis: 'Produk adalah segala sesuatu yang ditawarkan ke pasar untuk memenuhi kebutuhan pembeli, baik berupa barang maupun jasa, lengkap dengan merek atau brend dan kemasan atau pekejing. Produk punya empat tahap usia yang disebut daur hidup produk, atau Prodak Laif Saikel. Pertama tahap perkenalan atau Introdaksyen saat jualan masih sedikit dan butuh promosi besar. Kedua tahap pertumbuhan atau Grot saat pembeli mulai ramai. Ketiga tahap kedewasaan atau Metyuriti saat persaingan ketat sehingga kita harus berinovasi rasa atau kemasan baru. Keempat tahap penurunan atau Diklain saat selera pasar mulai berganti.'
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
      fokusUjian: 'Fokuskan jawaban kamu pada empat sifat khas jasa tidak berwujud, tidak terpisahkan, beragam, dan tidak bisa disimpan serta peran tambahan 3P (orang, proses, dan bukti fisik) dalam meyakinkan pelanggan.',
      transkripFonetis: 'Layanan jasa seperti potong rambut atau kamar hotel punya empat sifat khusus. Pertama tidak berwujud fisik atau Intenjibel. Kedua dinikmati bersamaan saat dilayani atau Inseperebel. Ketiga mutunya bisa beragam atau Veriebel tergantung siapa pegawai yang melayani, makanya perlu Es-O-Pe. Keempat tidak bisa disimpan di gudang atau Perisyebel, misalnya kamar hotel kosong hari ini langsung hangus. Karena itu, pemasaran jasa memakai Seven Pi: For Pi standar ditambah Pipelt yaitu keramahan staf, Proses yaitu alur layanan cepat, dan Fisikel Efidens yaitu kebersihan serta kenyamanan ruangan.'
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
      fokusUjian: 'Fokuskan penjelasan kamu pada tiga dasar penetapan harga biaya, pesaing, dan nilai pembeli serta perbedaan strategi harga penetrasi yang murah di awal dengan strategi memerah pasar yang mahal di awal.',
      transkripFonetis: 'Harga adalah satu-satunya unsur pemasaran yang langsung mendatangkan pemasukan uang. Cara menentukan harga ada tiga: berdasarkan biaya modal ditambah untung atau Kos Beisd, melihat harga toko pesaing atau Kompetitor Beisd, atau melihat manfaat dan gengsi di mata pembeli atau Velyu Beisd. Untuk produk baru, ada dua strategi: harga penetrasi atau Penetreisyen Praising yaitu pasang harga murah di awal agar cepat ramai pembeli, dan harga memerah pasar atau Prais Skiming yaitu pasang harga mahal di awal untuk pembeli kalangan atas seperti ponsel keluaran terbaru.'
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
      fokusUjian: 'Fokuskan jawaban kamu pada perbedaan saluran distribusi langsung tanpa perantara dengan saluran tidak langsung melalui agen dan toko pengecer, beserta kelebihan dan kekurangan masing-masing.',
      transkripFonetis: 'Saluran distribusi adalah jalur pengiriman barang dari pembuat hingga sampai ke tangan pembeli. Jalurnya ada dua. Pertama saluran langsung atau Dairek Cenel, yaitu jualan langsung ke pembeli tanpa perantara seperti buka warung sendiri atau jualan lewat media sosial sendiri; untungnya utuh, tapi jangkauannya terbatas. Kedua saluran tidak langsung atau Indairek Cenel, yaitu menitipkan barang lewat agen, grosir, hingga warung pengecer; keuntungannya barang tersebar luas ke mana-mana meski harus berbagi margin untung dengan para agen.'
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
      fokusUjian: 'Fokuskan penjelasan kamu pada tiga tujuan utama komunikasi pemasaran memberi tahu, membujuk, dan mengingatkan pelanggan serta peran periklanan dalam menjangkau banyak orang secara luas.',
      transkripFonetis: 'Komunikasi pemasaran adalah cara usaha memperkenalkan dagangan kepada masyarakat. Tujuannya ada tiga: memberi tahu bahwa produk kita ada, membujuk agar pembeli yakin produk kita lebih unggul, dan mengingatkan pelanggan lama agar beli lagi. Salah satu caranya adalah periklanan atau edvertaising, yaitu pesan promosi berbayar untuk khalayak ramai tanpa tatap muka, baik lewat spanduk di pinggir jalan, radio, maupun iklan bersponsor di media sosial.'
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
      fokusUjian: 'Fokuskan jawaban kamu pada perbedaan iklan yang membangun merek jangka panjang dengan promosi penjualan seperti diskon, kupon, atau cicipan gratis yang mendorong pembeli segera bertransaksi hari itu juga.',
      transkripFonetis: 'Promosi penjualan, atau Seils Promosyen, adalah rangsangan jangka pendek supaya orang langsung belanja hari itu juga tanpa menunda. Contohnya diskon dua puluh persen, promo beli satu gratis satu atau Bai Wan Get Wan, cicipan gratis atau sempel di depan toko, kupon voucer, dan hadiah langsung. Bedanya dengan iklan: iklan membangun nama merek jangka panjang, sedangkan promosi penjualan membuat penjualan langsung ramai seketika. Namun hati-hati, diskon terlalu sering membuat pembeli malas belanja saat harga kembali normal.'
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
      fokusUjian: 'Fokuskan penjelasan kamu pada peran humas menjaga citra baik usaha di masyarakat serta keunggulan pemasaran digital media sosial, peta online, dan e-commerce yang hemat biaya namun menjangkau pembeli secara tepat sasaran.',
      transkripFonetis: 'Di slide terakhir pemasaran, kita membahas hubungan masyarakat atau Pablik Rileisyens, dan pemasaran digital atau Dijital Marketing. Humas bertugas menjaga citra baik usaha di mata warga, misalnya lewat bakti sosial atau sponsor acara warga. Sedangkan pemasaran digital memanfaatkan internet agar promosi hemat biaya tapi tepat sasaran, seperti membuat video di TikTok dan Instagram, mendaftarkan toko di Gugel Meps agar mudah dicari rutenya, serta berjualan di pasar onlain atau I-Komers.'
    }
  ]
};
