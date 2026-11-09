import { BidangMateri } from '../../types/materi';

export const dataMateriOperasional: BidangMateri = {
  id: 'operasional',
  nama: 'Manajemen Operasional',
  kode: 'MO',
  nomorBab: 1,
  judulBab: 'BAB 1 — MANAJEMEN OPERASIONAL',
  halamanPdf: 'Halaman 3–5',
  deskripsi: 'Panduan belajar praktis seputar cara mengolah bahan mentah menjadi barang atau jasa yang bermanfaat, hemat biaya, dan bermutu untuk persiapan Ujian Komprehensif STIE Wibawa Karta Raharja Purwakarta.',
  iconName: 'Settings',
  color: '#0D9488',
  gambaranUmum: `Manajemen Operasional mempelajari bagaimana sebuah usaha mengolah masukan (seperti bahan baku, tenaga kerja, mesin, dan modal) menjadi barang atau jasa yang siap digunakan konsumen. Bagi mahasiswa STIE Wibawa Karta Raharja (WIKARA) Purwakarta, materi ini disajikan secara sederhana dan membumi: bagaimana cara memilih lokasi usaha yang strategis, mengatur tata letak tempat kerja yang rapi, menjaga persediaan bahan agar tidak kekurangan atau menumpuk di gudang, serta memastikan mutu produk tetap bagus dan disukai pembeli.`,
  konsepDasar: `Inti dari manajemen operasional adalah menciptakan nilai tambah. Artinya, barang yang sudah diolah harus memiliki nilai dan kegunaan yang jauh lebih tinggi dibandingkan bahan mentahnya. Tiga tujuan utamanya sangat jelas: bekerja dengan efisien (hemat biaya), menjaga kualitas (produk tidak cacat), dan tepat waktu (pesanan selesai sesuai janji).`,
  tujuanPembelajaran: [
    'Memahami alur pengolahan: masukan (bahan baku) -> proses kerja -> hasil jadi (barang atau jasa).',
    'Memahami perbedaan nyata antara usaha yang menjual barang fisik dengan usaha yang memberikan layanan jasa.',
    'Mengetahui pertimbangan memilih lokasi usaha dan menata ruang kerja agar alur kerja lancar.',
    'Memahami cara menjaga persediaan bahan baku secara hemat dan mencegah pemborosan.',
    'Memahami cara menjaga mutu produk agar pembeli tidak kecewa.'
  ],
  petunjukUjian: [
    'Ujian komprehensif bertujuan menguji pemahaman konsep dan logika berpikir Anda saat berbicara di depan penguji, bukan hafalan rumus matematika.',
    'Gunakan bahasa Indonesia yang jelas, sopan, dan percaya diri. Hindari istilah asing yang belum Anda pahami betul artinya.',
    'Jelaskan konsep dengan contoh nyata yang mudah dibayangkan, seperti bengkel motor, warung makan, toko roti, atau pabrik garmen di sekitar Purwakarta.',
    'Bila ditanya dosen penguji, jawablah secara teratur: sebutkan pengertiannya terlebih dahulu, apa manfaatnya, dan berikan contoh penerapannya.'
  ],
  referensi: [
    {
      id: 'mo-ref-1',
      penulis: 'Heizer, J., & Render, B.',
      tahun: '2004',
      judul: 'Operations Management (7th ed.)',
      penerbit: 'Pearson Prentice-Hall',
      catatan: 'Buku rujukan utama tentang strategi operasi, perencanaan tempat kerja, mutu, dan persediaan.',
      halamanPdf: 'Hal. 3 & 13'
    },
    {
      id: 'mo-ref-2',
      penulis: 'Handoko, T. Hani',
      tahun: '2000',
      judul: 'Dasar-Dasar Manajemen Produksi dan Operasi',
      penerbit: 'BPFE Yogyakarta',
      catatan: 'Buku rujukan berbahasa Indonesia mengenai sistem produksi, tata letak fasilitas, dan perencanaan bahan.',
      halamanPdf: 'Hal. 3 & 13'
    }
  ],
  pokokBahasan: [
    {
      id: 'mo-1',
      nomor: '1.2.1',
      subbab: '1.2',
      judul: 'Pengertian, Ruang Lingkup, dan Perkembangan Manajemen Operasional',
      halamanPdf: 'Hal. 3',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Manajemen operasional adalah kegiatan mengelola proses perubahan bahan mentah dan sumber daya menjadi barang jadi atau jasa bernilai tambah.',
      isiMateri: `Secara sederhana, manajemen operasional adalah ilmu dan seni mengatur kegiatan sehari-hari suatu usaha agar proses pembuatan barang atau pemberian jasa berjalan lancar, hemat, dan bermutu baik.

Alur dasarnya terdiri dari tiga tahap:
1. Masukan (Input): Berupa bahan baku, tenaga kerja manusia, mesin atau peralatan, modal uang, serta informasi.
2. Proses Pengolahan (Transformasi): Kegiatan mengubah atau memproses masukan tadi, misalnya memotong, merakit, memasak, atau melayani pelanggan.
3. Hasil Akhir (Output): Barang jadi yang berwujud (seperti pakaian, meja, roti) atau jasa layanan (seperti potong rambut, bengkel servis motor, penginapan hotel).

Perbedaan utama barang dan jasa:
- Barang: Ada wujud fisiknya, bisa dilihat dan disentuh, bisa disimpan di gudang jika belum laku, dan proses pembuatannya terpisah dari waktu pembeli menggunakannya.
- Jasa: Tidak berwujud benda, langsung dinikmati saat diberikan, tidak bisa disimpan di lemari es atau gudang, serta pelanggan sering kali terlibat langsung saat pelayanan berlangsung.`,
      fokusUjian: 'Penguji biasanya menanyakan alur masukan-proses-hasil dan perbedaan mendasar antara produk barang dengan layanan jasa.',
      poinKunci: [
        'Tiga unsur operasi: Masukan (bahan/tenaga/alat) -> Proses Pengolahan -> Hasil Akhir (barang/jasa).',
        'Barang memiliki bentuk fisik nyata dan dapat disimpan di gudang.',
        'Jasa tidak berwujud fisik dan dinikmati langsung saat pelayanan berlangsung.'
      ],
      penjelasanPendukung: 'Dalam sidang ujian, berikan contoh sederhana: membuat segelas kopi (masukan berupa bubuk kopi, air panas, gula, dan tenaga barista; prosesnya menyeduh; hasilnya kopi siap minum bernilai jual lebih tinggi dibanding harga bubuk mentahnya).',
      contohPenerapan: 'Pabrik pakaian mengolah kain gulungan dan benang menjadi kemeja rapi; salon kecantikan mengandalkan keahlian penata rambut untuk mempercantik penampilan pelanggan.'
    },
    {
      id: 'mo-2',
      nomor: '1.2.2',
      subbab: '1.2',
      judul: 'Strategi Operasi',
      halamanPdf: 'Hal. 3',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Langkah terencana bagian operasional untuk mendukung arah tujuan usaha agar mampu bersaing di pasar.',
      isiMateri: `Strategi operasi adalah rencana jangka panjang bagian pembuatan barang atau layanan agar usaha tersebut memiliki keunggulan dibandingkan para pesaingnya.

Sebuah usaha biasanya memilih salah satu dari beberapa keunggulan utama:
1. Keunggulan Biaya Murah: Mengatur proses kerja sehemat mungkin sehingga produk bisa dijual dengan harga lebih murah dan terjangkau bagi masyarakat banyak.
2. Keunggulan Mutu: Menjaga bahan baku terbaik dan ketelitian tinggi sehingga menghasilkan produk yang awet, enak, atau mewah.
3. Keunggulan Kecepatan dan Ketepatan Waktu: Menyelesaikan pesanan dengan cepat dan mengantarkannya tepat waktu tanpa membuat pelanggan menunggu lama.
4. Keunggulan Fleksibilitas: Mampu menerima pesanan khusus atau cepat beradaptasi dengan perubahan selera pembeli.`,
      fokusUjian: 'Penguji ingin melihat apakah mahasiswa paham bahwa perusahaan tidak bisa unggul di semua hal sekaligus, melainkan harus menentukan fokus utamanya.',
      poinKunci: [
        'Strategi biaya murah fokus pada penghematan pengeluaran produksi.',
        'Strategi mutu fokus pada keawetan, kerapian, atau kelezatan produk.',
        'Keputusan operasional harus sejalan dengan siapa target pembeli yang dituju.'
      ],
      contohPenerapan: 'Warung makan prasmanan mahasiswa mengutamakan harga murah dan porsi kenyang; restoran keluarga akhir pekan mengutamakan suasana nyaman dan rasa masakan yang lezat.'
    },
    {
      id: 'mo-3',
      nomor: '1.2.3',
      subbab: '1.2',
      judul: 'Strategi Pengembangan Produk',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Tahapan mengubah ide baru menjadi produk atau layanan nyata yang disukai dan dibutuhkan oleh pembeli.',
      isiMateri: `Pengembangan produk adalah langkah yang dilakukan pemilik usaha agar barang dagangannya tidak ketinggalan zaman dan terus diminati pembeli.

Tahapannya secara berurutan:
1. Mencari Ide: Mendengarkan keluhan pembeli, melihat tren di pasar, atau meniru hal baik dari pesaing.
2. Memilih Ide Terbaik: Menyaring ide mana yang realistis bisa dibuat dan kira-kira menguntungkan.
3. Membuat Contoh Produk (Prototipe): Membuat beberapa buah contoh awal untuk dicoba langsung oleh tim dan calon pembeli.
4. Uji Coba Produk: Meminta saran dari orang lain mengenai rasa, bentuk, warna, atau kemasan.
5. Produksi dan Penjualan Resmi: Jika contoh sudah terbukti disukai, produk mulai diproduksi lebih banyak dan dijual luas.`,
      fokusUjian: 'Jelaskan mengapa produk harus selalu diperbarui dan sebutkan alur pembuatan produk dari ide sampai dijual.',
      poinKunci: [
        'Pengembangan produk dimulai dari kebutuhan atau masalah yang dihadapi pembeli.',
        'Pembuatan contoh awal (prototipe) berguna agar kelemahan produk bisa diperbaiki sebelum dijual banyak.',
        'Usaha yang tidak berinovasi akan ditinggalkan pelanggan saat selera pasar berubah.'
      ]
    },
    {
      id: 'mo-4',
      nomor: '1.2.4',
      subbab: '1.2',
      judul: 'Rencana Produk dan Proses Produksi',
      halamanPdf: 'Hal. 4',
      referensi: 'Handoko (2000); Heizer & Render (2004)',
      ringkasan: 'Menentukan jenis dan cara memproduksi barang sesuai dengan jumlah pesanan dan variasi bentuknya.',
      isiMateri: `Cara memproduksi barang harus disesuaikan dengan jenis produk dan banyaknya pesanan. Secara umum ada empat cara kerja produksi:

1. Cara Proyek: Membuat barang khusus satu per satu dengan waktu pengerjaan yang lama dan bentuk yang unik. Contoh: membangun gedung ruko atau membuat jembatan.
2. Cara Bengkel Kerja (Pesanan Khusus): Mengerjakan pesanan dalam jumlah sedikit dengan bentuk yang berbeda-beda sesuai permintaan pemesan. Contoh: bengkel las teralis jendela, penjahit baju kebaya.
3. Cara Kelompok (Batch): Membuat barang dalam jumlah kelompok tertentu, lalu berganti membuat jenis lain. Contoh: pabrik roti (pagi membuat roti cokelat 100 bungkus, siang berganti membuat roti keju).
4. Cara Mengalir Terus-Menerus (Massal): Membuat barang yang bentuknya sama persis dalam jumlah ribuan setiap hari tanpa henti. Contoh: pabrik air minum dalam kemasan, pabrik perakitan sepeda motor.`,
      fokusUjian: 'Penguji biasanya meminta mahasiswa membedakan produksi pesanan khusus (bengkel/job shop) dengan produksi massal yang seragam.',
      poinKunci: [
        'Pesanan khusus: variasi bentuk tinggi, jumlah pesanan sedikit, peralatan fleksibel.',
        'Produksi massal: variasi bentuk seragam, jumlah barang sangat banyak, menggunakan mesin khusus.'
      ]
    },
    {
      id: 'mo-5',
      nomor: '1.2.5',
      subbab: '1.2',
      judul: 'Lokasi dan Layout',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Menentukan tempat berdirinya usaha dan menyusun tata letak ruangan serta mesin agar alur kerja nyaman dan lancar.',
      isiMateri: `Dua keputusan fisik yang sangat menentukan kelancaran usaha:

A. Pemilihan Lokasi Usaha:
- Toko atau Kedai Ritel: Harus dekat dengan keramaian pembeli, mudah dilihat, mudah dijangkau kendaraan, dan aman tempat parkirnya.
- Pabrik atau Gudang: Lebih memilih dekat dengan sumber bahan mentah, mudah mencari tenaga kerja, akses jalan lebar untuk truk, serta harga sewa tanah yang terjangkau.

B. Tata Letak Ruangan dan Mesin (Layout):
Mengatur posisi meja kerja, rak bahan, mesin, dan pintu keluar-masuk agar:
- Pekerja tidak bolak-balik kejauhan membuang tenaga dan waktu.
- Bahan tidak mudah rusak atau tercecer di lantai.
- Lingkungan kerja terasa lapang, aman dari bahaya kecelakaan kerja, dan nyaman.`,
      fokusUjian: 'Jelaskan perbedaan pertimbangan lokasi toko (ramai pembeli) vs pabrik (dekat bahan & akses angkutan), serta tujuan mengatur tata letak ruangan.',
      poinKunci: [
        'Lokasi toko butuh keramaian dan akses jalan yang mudah dikunjungi orang.',
        'Lokasi pabrik butuh kedekatan bahan mentah, upah tenaga kerja yang sesuai, dan jalan truk.',
        'Tata letak yang baik menghemat waktu gerak pekerja dan mencegah kecelakaan.'
      ]
    },
    {
      id: 'mo-6',
      nomor: '1.2.6',
      subbab: '1.2',
      judul: 'Perencanaan Kapasitas Produksi',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Menghitung batas kemampuan tempat kerja atau mesin dalam menghasilkan barang selama jangka waktu tertentu.',
      isiMateri: `Kapasitas adalah jumlah maksimal barang yang mampu dihasilkan oleh sebuah tempat kerja dalam sehari, seminggu, atau sebulan.

Tiga istilah kapasitas yang sering ditanyakan:
1. Kapasitas Desain (Maksimal Teoritis): Kemampuan mesin jika bekerja terus menerus 24 jam sehari dalam kondisi sempurna tanpa ada hambatan sama sekali.
2. Kapasitas Efektif (Kapasitas Nyata yang Wajar): Kemampuan produksi setelah memperhitungkan jam istirahat pekerja, waktu pembersihan alat, dan pergantian bahan.
3. Hasil Aktual (Output Nyata): Jumlah barang jadi yang benar-benar selesai dibuat pada hari tersebut.

Hasil nyata hampir selalu berada di bawah kapasitas maksimal mesin karena dalam kenyataannya pekerja butuh istirahat, mesin sesekali perlu diservis, dan bahan baku terkadang terlambat datang.`,
      fokusUjian: 'Pahami mengapa hasil produksi nyata selalu lebih kecil daripada kemampuan mesin maksimal di brosur pabrik.',
      poinKunci: [
        'Kapasitas desain adalah angka maksimal di atas kertas.',
        'Hasil nyata lebih rendah karena ada jam istirahat, perawatan mesin, dan kendala bahan.',
        'Kapasitas yang terlalu besar membuat mesin menganggur dan boros biaya; kapasitas terlalu kecil membuat pelanggan lama menunggu.'
      ]
    },
    {
      id: 'mo-7',
      nomor: '1.2.7',
      subbab: '1.2',
      judul: 'Desain Kerja dan Pengukuran Kerja',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Menentukan rincian tugas setiap karyawan dan mengukur waktu yang dibutuhkan untuk menyelesaikan satu pekerjaan.',
      isiMateri: `Desain kerja adalah cara mengatur tugas-tugas apa saja yang harus dikerjakan oleh seorang pekerja agar ia bekerja secara teratur, tidak bingung, dan tidak cepat kelelahan.

Hal penting di dalamnya:
- Kejelasan Tugas: Setiap orang tahu apa yang menjadi tanggung jawabnya sejak jam masuk sampai jam pulang.
- Kenyamanan Fisik Kerja (Ergonomi): Menyesuaikan tinggi meja, kursi, pencahayaan lampu, dan sirkulasi udara agar pekerja tidak mudah sakit pinggang, mata perih, atau pegal-pegal.
- Pengukuran Waktu Kerja: Menghitung waktu standar yang wajar bagi pekerja terampil untuk menyelesaikan satu tugas (misalnya: menjahit satu kerah baju butuh waktu rata-rata 3 menit). Angka waktu ini dipakai untuk menentukan target kerja harian dan menghitung upah.`,
      fokusUjian: 'Jelaskan tujuan menentukan waktu standar kerja dan pentingnya kenyamanan tempat kerja bagi pekerja.',
      poinKunci: [
        'Tempat kerja yang nyaman dan terang membuat pekerja lebih sehat dan tidak mudah membuat kesalahan.',
        'Waktu standar digunakan untuk menetapkan target hasil kerja yang wajar bagi karyawan.'
      ]
    },
    {
      id: 'mo-8',
      nomor: '1.2.8',
      subbab: '1.2',
      judul: 'Manajemen Rantai Pasok',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Kerja sama yang baik mulai dari penyedia bahan mentah, pabrik pembuat, toko penyalur, hingga barang sampai ke tangan pembeli.',
      isiMateri: `Rantai pasok adalah rangkaian pihak-pihak yang saling bekerja sama agar sebuah produk bisa sampai ke tangan konsumen akhir.

Urutan alurnya:
Pemasok Bahan Mentah -> Pabrik Pembuat -> Distributor / Agen -> Toko Pengecer -> Pembeli Akhir.

Tujuan utama mengelola rantai pasok:
1. Pasokan Bahan Tidak Terputus: Jangan sampai produksi berhenti hanya gara-gara pemasok telat mengirim bahan.
2. Mendapatkan Harga dan Mutu Terbaik: Memilih pemasok yang jujur, mengirim barang tepat waktu, dan harganya masuk akal.
3. Menjalin Hubungan Jangka Panjang: Menganggap pemasok sebagai mitra kerja yang saling menguntungkan, bukan saling menjatuhkan.`,
      fokusUjian: 'Sebutkan pihak-pihak dalam rantai pasok dan jelaskan akibatnya jika hubungan dengan pemasok bahan terganggu.',
      poinKunci: [
        'Rantai pasok menghubungkan petani/pemasok bahan mentah hingga ke tangan pembeli di toko.',
        'Keterlambatan bahan dari pemasok akan membuat pabrik mogok dan pembeli lari ke tempat lain.'
      ]
    },
    {
      id: 'mo-9',
      nomor: '1.2.9',
      subbab: '1.2',
      judul: 'Manajemen Kualitas',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Upaya menjaga agar barang atau layanan selalu sesuai dengan standar yang dijanjikan dan memuaskan pelanggan.',
      isiMateri: `Kualitas bukan hanya berarti barang mewah atau mahal, melainkan barang tersebut sesuai dengan yang diharapkan oleh pembeli dan tidak memiliki cacat.

Konsep Manajemen Mutu Menyeluruh (Total Quality Management / TQM):
1. Mengutamakan Kepuasan Pelanggan: Tolak ukur bagus atau tidaknya barang ada pada kepuasan orang yang memakai.
2. Melibatkan Semua Orang: Menjaga mutu bukan hanya tugas pemeriksa barang di bagian akhir, melainkan tanggung jawab semua orang mulai dari bagian penerimaan bahan, operator mesin, hingga pengemasan.
3. Mencegah Lebih Baik daripada Memperbaiki: Jauh lebih hemat mencegah barang salah potong sejak awal daripada membongkar barang yang sudah jadi dan rusak.
4. Perbaikan Terus-Menerus: Terus mencari cara baru agar kerja makin rapi, cepat, dan minim kesalahan.`,
      fokusUjian: 'Jelaskan mengapa mencegah kerusakan produk jauh lebih hemat biaya dibanding memperbaiki barang cacat yang sudah terlanjur jadi.',
      poinKunci: [
        'Kualitas adalah kesesuaian produk dengan kebutuhan dan harapan pembeli.',
        'Prinsip utama: Mencegah barang cacat jauh lebih murah daripada mengganti rugi barang yang dikembalikan pembeli.',
        'Semua karyawan bertanggung jawab menjaga mutu.'
      ]
    },
    {
      id: 'mo-10',
      nomor: '1.2.10',
      subbab: '1.2',
      judul: 'Manajemen Persediaan Independen',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Mengatur persediaan barang jadi atau bahan dagang agar tidak kehabisan stok namun tidak memboroskan modal simpan.',
      isiMateri: `Persediaan adalah simpanan barang atau bahan yang disiapkan untuk melayani pembeli atau menjaga kelancaran produksi.

Dua risiko utama dalam persediaan:
- Persediaan Terlalu Sedikit: Toko sering kehabisan barang sehingga pembeli kecewa dan pindah ke toko sebelah.
- Persediaan Terlalu Banyak: Modal uang tertahan di barang, butuh gudang luas, barang rawan berdebu, rusak, atau kedaluwarsa.

Konsep Jumlah Pesanan Paling Hemat (Economic Order Quantity / EOQ secara logika):
Usaha harus mencari titik tengah yang paling hemat antara dua biaya:
1. Biaya Pemesanan: Ongkos kirim, biaya telepon, dan biaya administrasi setiap kali memesan barang ke agen.
2. Biaya Penyimpanan: Biaya sewa tempat, listrik pendingin, dan risiko barang rusak selama tersimpan di gudang.
Jumlah pesanan terbaik adalah jumlah yang membuat kedua biaya ini seimbang dan total biayanya paling kecil.`,
      fokusUjian: 'Jelaskan logika EOQ: apa yang terjadi jika memesan terlalu sering vs memesan sekali tapi menumpuk di gudang.',
      poinKunci: [
        'Persediaan berlebih mengunci uang kas dan berisiko rusak.',
        'Persediaan terlalu sedikit membuat usaha kehilangan pembeli.',
        'Konsep EOQ menyeimbangkan biaya pesan dan biaya simpan agar total pengeluaran paling hemat.'
      ]
    },
    {
      id: 'mo-11',
      nomor: '1.2.11',
      subbab: '1.2',
      judul: 'Perencanaan Agregat dan Jadwal Induk Produksi',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Merencanakan jumlah keseluruhan barang yang akan dibuat untuk beberapa bulan ke depan menghadapi musim ramai dan musim sepi.',
      isiMateri: `Perencanaan agregat adalah rencana besar perusahaan dalam mengatur tenaga kerja dan produksi untuk jangka menengah (misalnya 3 sampai 12 bulan ke depan).

Tujuannya menghadapi naik-turunnya permintaan pembeli:
- Menghadapi Musim Ramai (seperti menjelang Hari Raya Lebaran): Usaha bisa menambah jam lembur karyawan, merekrut pekerja harian lepas, atau mencicil produksi dari jauh-jauh hari dan menyimpannya di gudang.
- Menghadapi Musim Sepi: Menyesuaikan jam kerja agar tidak menumpuk barang yang lambat laku.

Jadwal Induk Produksi (JIP):
Rencana kerja mingguan yang merinci secara tepat: jenis produk apa yang dibuat, berapa jumlahnya, dan pada hari apa harus selesai.`,
      fokusUjian: 'Jelaskan cara usaha mengantisipasi lonjakan permintaan musiman (misal menjelang hari raya) tanpa harus membeli mesin baru yang mahal.',
      poinKunci: [
        'Perencanaan agregat mengatur kapasitas kerja untuk menghadapi musim ramai dan sepi.',
        'Langkah penyesuaian: jam lembur, pekerja harian, atau mencicil stok dari hari biasa.'
      ]
    },
    {
      id: 'mo-12',
      nomor: '1.2.12',
      subbab: '1.2',
      judul: 'Perencanaan Kebutuhan Bahan',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Menghitung rincian bahan apa saja yang harus dibeli dan kapan harus dipesan agar barang jadi selesai tepat waktu.',
      isiMateri: `Perencanaan Kebutuhan Bahan (sering disingkat MRP) digunakan untuk produk yang dirakit dari banyak komponen.

Contoh sederhana:
Untuk membuat 1 buah meja belajar kayu, dibutuhkan:
- 1 lembar papan kayu atas
- 4 batang kayu kaki meja
- 16 buah sekrup baut
- 1 kaleng cat plitur

Jika ada pesanan 10 buah meja belajar untuk minggu depan, sistem perencanaan bahan akan menghitung: kita butuh 10 lembar papan kayu, 40 batang kaki meja, dan 160 sekrup baut. Lalu diperiksa di gudang: berapa yang sudah ada, berapa yang kurang, dan kapan bahan yang kurang itu harus dibeli dari toko bangunan agar meja bisa selesai tepat waktu.`,
      fokusUjian: 'Penguji ingin tahu apakah mahasiswa paham hubungan antara jumlah produk jadi dengan rincian bahan-bahan penyusunnya.',
      poinKunci: [
        'Digunakan untuk menghitung kebutuhan bahan baku yang bergantung pada jumlah barang jadi yang dipesan.',
        'Membantu usaha membeli bahan dalam jumlah yang pas dan waktu yang tepat.'
      ]
    },
    {
      id: 'mo-13',
      nomor: '1.2.13',
      subbab: '1.2',
      judul: 'Operasi Ramping dan Pemeliharaan',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Menghilangkan segala bentuk pemborosan kerja serta merawat mesin dan peralatan secara berkala agar tidak mogok tiba-tiba.',
      isiMateri: `Dua konsep penting agar operasional usaha berjalan sehat:

A. Operasi Ramping (Lean / Kerja Hemat Tanpa Boros):
Menyingkirkan segala hal yang membuang waktu dan biaya tetapi tidak memberi manfaat bagi pembeli, misalnya:
- Menghindari barang cacat yang harus dibuang.
- Menghindari pekerja yang menganggur karena menunggu instruksi atau menunggu bahan datang.
- Menghindari perpindahan barang yang tidak perlu.
- Menggunakan konsep 'Tepat Waktu' (Just In Time): bahan dipesan saat hendak digunakan sehingga gudang tidak penuh sesak.

B. Pemeliharaan dan Perawatan Alat (Maintenance):
1. Perawatan Pencegahan: Membersihkan, memberi pelumas minyak, dan memeriksa kondisi mesin secara rutin sebelum rusak (seperti mengganti oli motor secara berkala).
2. Perbaikan Saat Rusak: Memperbaiki mesin yang sudah terlanjur mogok.
Perawatan pencegahan jauh lebih hemat karena mencegah pabrik berhenti mendadak di tengah jam kerja ramai.`,
      fokusUjian: 'Jelaskan mengapa merawat mesin secara rutin jauh lebih menguntungkan daripada membiarkannya rusak baru diperbaiki.',
      poinKunci: [
        'Operasi ramping berfokus membuang pemborosan waktu, tenaga, dan bahan.',
        'Perawatan pencegahan rutin menjaga mesin tetap awet dan mencegah terhentinya pekerjaan secara tiba-tiba.'
      ]
    }
  ]
};
