import { BidangMateri } from '../../types/materi';

export const dataMateriKeuangan: BidangMateri = {
  id: 'keuangan',
  nama: 'Manajemen Keuangan',
  kode: 'MK',
  nomorBab: 2,
  judulBab: 'BAB 2 — MANAJEMEN KEUANGAN',
  halamanPdf: 'Halaman 6–8',
  deskripsi: 'Panduan belajar praktis tentang cara mencari modal, mengalokasikan uang usaha, menjaga kelancaran kas, dan menilai kelayakan investasi untuk Ujian Komprehensif STIE Wibawa Karta Raharja Purwakarta.',
  iconName: 'DollarSign',
  color: '#2563EB',
  gambaranUmum: `Manajemen Keuangan di STIE Wibawa Karta Raharja (WIKARA) Purwakarta mempelajari bagaimana seorang pemilik usaha atau manajer mengelola aliran uang agar usaha tetap berjalan sehat, berkembang, dan bernilai tinggi dalam jangka panjang. Materi ini difokuskan pada pemahaman logika bisnis nyata: dari mana usaha mendapatkan modal (uang sendiri atau pinjaman bank), bagaimana cara membelanjakannya untuk membeli alat atau barang dagang, bagaimana menjaga uang tunai (kas) agar selalu siap membayar tagihan tepat waktu, serta bagaimana mengetahui apakah suatu rencana usaha itu menguntungkan atau justru merugi.`,
  konsepDasar: `Tujuan utama manajemen keuangan bukan semata-mata mengejar keuntungan sesaat, melainkan memaksimalkan nilai perusahaan atau kemakmuran pemilik usaha dalam jangka panjang. Tiga keputusan paling penting yang harus diambil manajer keuangan adalah: (1) Keputusan Investasi (uangnya mau dibelikan apa?), (2) Keputusan Pendanaan (modalnya mau dicari dari mana?), dan (3) Kebijakan Keuntungan (apakah keuntungan dibagikan ke pemilik atau ditahan untuk modal usaha lagi?).`,
  tujuanPembelajaran: [
    'Memahami 3 keputusan pokok manajer keuangan: Investasi, Pendanaan, dan Pengelolaan Keuntungan.',
    'Memahami konsep nilai waktu uang (mengapa uang sekarang lebih bernilai dibanding uang masa depan karena inflasi dan potensi menghasilkan laba).',
    'Mengenal laporan keuangan sederhana (Neraca, Laba Rugi, dan Arus Kas) beserta arti kelancaran kas (likuiditas).',
    'Memahami arti titik impas (Break Even Point / BEP) sebagai batas aman agar usaha tidak merugi.',
    'Mengetahui cara sederhana menilai apakah rencana membeli mesin atau membuka cabang baru itu layak dijalankan.'
  ],
  petunjukUjian: [
    'Ujian komprehensif lisan menguji logika dan pemahaman konsep Anda, bukan kemampuan menghitung rumus akuntansi yang panjang.',
    'Jelaskan konsep keuangan dengan perumpamaan sederhana: misalnya mengelola uang saku, modal warung, atau usaha toko kelontong.',
    'Pahami perbedaan penting antara untung di catatan pembukuan (laba akuntansi) dengan uang tunai nyata di kantong (arus kas lancar).',
    'Gunakan bahasa Indonesia yang jelas, tenang, dan runtut saat menjawab pertanyaan dosen penguji.'
  ],
  referensi: [
    {
      id: 'mk-ref-1',
      penulis: 'Keown, Arthur J., John D. Martin, J. William Petty, David F. Scott Jr.',
      tahun: '2005',
      judul: 'Financial Management: Principles and Applications (10th ed.)',
      penerbit: 'Prentice Hall International Inc.',
      catatan: 'Buku rujukan standar internasional untuk konsep nilai waktu uang, keputusan investasi, dan biaya modal.',
      halamanPdf: 'Hal. 6 & 13'
    },
    {
      id: 'mk-ref-2',
      penulis: 'Martono dan D. Agus Harjito',
      tahun: '2010',
      judul: 'Manajemen Keuangan',
      penerbit: 'Ekonisia',
      catatan: 'Buku rujukan manajemen keuangan berbahasa Indonesia mengenai struktur modal dan sumber pendanaan usaha.',
      halamanPdf: 'Hal. 6 & 13'
    },
    {
      id: 'mk-ref-3',
      penulis: 'Nunung Nurhasanah',
      tahun: '2020',
      judul: 'Manajemen Keuangan',
      penerbit: 'Bahan Ajar / Diktat Kuliah',
      catatan: 'Materi perkuliahan program studi manajemen STIE Wikara.',
      halamanPdf: 'Hal. 6 & 13'
    },
    {
      id: 'mk-ref-4',
      penulis: 'Sujarweni, V. Wiratna',
      tahun: '2021',
      judul: 'Manajemen Keuangan: Teori, Aplikasi dan Hasil Penelitian',
      penerbit: 'Pustaka Baru Press',
      catatan: 'Penerapan praktis laporan keuangan, rasio keuangan, dan analisis titik impas di Indonesia.',
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
      ringkasan: 'Kegiatan merencanakan, mencari, menggunakan, dan mengawasi dana usaha demi memaksimalkan nilai usaha dalam jangka panjang.',
      isiMateri: `Manajemen keuangan adalah kegiatan mengelola keuangan usaha agar uang yang ada digunakan secara terarah, tidak boros, dan mampu mendatangkan keuntungan yang berkelanjutan.

Tiga Keputusan Utama Manajer Keuangan:
1. Keputusan Investasi (Penggunaan Dana):
Menentukan uang usaha hendak dibelanjakan untuk apa saja. Misalnya: apakah membeli mesin jahit baru, menyewa ruko yang lebih luas, atau menambah stok barang dagang.
2. Keputusan Pendanaan (Pencarian Modal):
Menentukan dari mana modal usaha diperoleh. Misalnya: apakah memakai uang tabungan pribadi (modal sendiri), mengajak teman patungan (saham), atau meminjam ke bank (utang).
3. Keputusan Keuntungan / Dividen:
Jika usaha mendapatkan laba bersih, memutuskan berapa persen uang untung yang dibagikan kepada para pemilik/pemegang saham, dan berapa persen yang disimpan di kas usaha (laba ditahan) untuk memperbesar usaha ke depan.

Tujuan Utama: Memaksimalkan nilai usaha (membuat usaha makin dipercaya, asetnya bertambah, dan nilai bisnisnya makin tinggi).`,
      fokusUjian: 'Penguji biasanya menanyakan tiga keputusan utama manajer keuangan dan apa bedanya mengejar untung sesaat dengan memaksimalkan nilai usaha.',
      poinKunci: [
        'Tiga keputusan utama: Investasi (belanja aset), Pendanaan (cari modal), dan Keuntungan/Dividen (bagi laba vs simpan).',
        'Tujuan akhir adalah memaksimalkan nilai usaha dan kemakmuran pemilik dalam jangka panjang.',
        'Keuangan yang sehat menjaga keseimbangan antara kemampuan membayar tagihan harian dengan kemampuan mencari laba.'
      ],
      penjelasanPendukung: 'Dalam sidang ujian, sampaikan dengan bahasa Anda sendiri: manajer keuangan itu seperti bendahara keluarga yang harus tahu dari mana uang didapat, untuk apa uang dibelanjakan, dan berapa yang harus ditabung untuk masa depan.'
    },
    {
      id: 'mk-2',
      nomor: '2.2.2',
      subbab: '2.2',
      judul: 'Nilai Waktu dari Uang dan Anuitas (Annuity)',
      halamanPdf: 'Hal. 6',
      referensi: 'Keown et al. (2005)',
      ringkasan: 'Uang yang dipegang hari ini lebih berharga daripada uang dengan jumlah nominal sama di masa depan karena pengaruh inflasi dan potensi menghasilkan keuntungan.',
      isiMateri: `Konsep Nilai Waktu dari Uang (Time Value of Money) mengajarkan bahwa Rp1.000.000 yang kita terima hari ini nilainya lebih berharga dibandingkan Rp1.000.000 yang baru akan kita terima lima tahun lagi.

Mengapa bisa begitu?
1. Adanya Kenaikan Harga Barang (Inflasi): Uang Rp100.000 sepuluh tahun lalu bisa untuk belanja kebutuhan satu keranjang penuh di pasar, sedangkan hari ini uang yang sama hanya dapat membeli sedikit barang.
2. Potensi Menghasilkan Keuntungan: Uang yang ada di tangan hari ini bisa langsung ditabung di bank menghasilkan bunga, atau dibelikan barang dagang yang menghasilkan laba.
3. Ketidakpastian Masa Depan: Menerima uang hari ini sudah pasti, sedangkan janji uang di masa depan selalu mengandung risiko gagal bayar.

Istilah Dasar:
- Nilai Sekarang (Present Value): Nilai uang pada saat ini.
- Nilai Masa Depan (Future Value): Jumlah uang yang akan berkembang di masa mendatang jika diinvestasikan dengan bunga.
- Anuitas: Pembayaran atau penerimaan uang dalam jumlah yang sama secara rutin di setiap periode (misalnya membayar cicilan motor Rp500.000 setiap akhir bulan).`,
      fokusUjian: 'Pahami logika mengapa uang hari ini lebih berharga dibanding uang masa depan tanpa perlu menghafal rumus matematika.',
      poinKunci: [
        'Uang sekarang lebih bernilai karena ada inflasi dan uang tersebut bisa langsung diputar untuk menghasilkan laba.',
        'Nilai uang di masa depan akan tergerus oleh kenaikan harga kebutuhan hidup.',
        'Anuitas adalah pembayaran atau cicilan dengan jumlah yang sama secara berkala.'
      ]
    },
    {
      id: 'mk-3',
      nomor: '2.2.3',
      subbab: '2.2',
      judul: 'Penilaian Saham dan Obligasi',
      halamanPdf: 'Hal. 6',
      referensi: 'Keown et al. (2005)',
      ringkasan: 'Memahami perbedaan antara surat tanda kepemilikan modal usaha (saham) dengan surat perjanjian utang berjangka (obligasi).',
      isiMateri: `Untuk mendapatkan modal dalam jumlah besar, perusahaan biasanya menerbitkan dua jenis surat berharga:

A. Saham (Surat Tanda Kepemilikan):
- Pembeli saham menjadi pemilik sebagian dari perusahaan tersebut.
- Imbalannya: Mendapatkan bagian keuntungan perusahaan (disebut dividen) dan keuntungan jika harga saham naik.
- Risikonya: Jika perusahaan merugi atau bangkrut, pemegang saham ikut menanggung risiko dan tidak mendapat pembagian keuntungan.

B. Obligasi (Surat Tanda Utang):
- Perusahaan meminjam uang dari masyarakat atau investor dan berjanji akan mengembalikannya pada tanggal jatuh tempo tertentu.
- Imbalannya: Perusahaan wajib membayar bunga secara rutin (biasanya tiap bulan atau tiap semester) kepada pemegang obligasi.
- Hak istimewa: Jika perusahaan bangkrut, uang pemegang obligasi wajib dilunasi terlebih dahulu sebelum sisa asetnya dibagikan ke pemegang saham.`,
      fokusUjian: 'Penguji sering meminta mahasiswa membedakan antara saham (modal sendiri/ikut memiliki) dengan obligasi (pinjaman utang/wajib bayar bunga).',
      poinKunci: [
        'Saham adalah bukti ikut memiliki usaha; penghasilannya dari pembagian dividen.',
        'Obligasi adalah surat utang; perusahaan wajib membayar bunga secara rutin dan mengembalikan pokok pinjaman saat jatuh tempo.'
      ]
    },
    {
      id: 'mk-4',
      nomor: '2.2.4',
      subbab: '2.2',
      judul: 'Laporan dan Analisis Keuangan',
      halamanPdf: 'Hal. 7',
      referensi: 'Sujarweni (2021); Keown et al. (2005)',
      ringkasan: 'Membaca kesehatan usaha melalui tiga laporan utama dan mengukur kelancaran kas serta keuntungan bisnis.',
      isiMateri: `Tiga Laporan Keuangan Pokok:
1. Neraca: Menunjukkan posisi kekayaan usaha pada satu tanggal tertentu. Isinya ada dua sisi yang seimbang: Harta (Aset) = Utang (Kewajiban) + Modal Sendiri.
2. Laporan Laba Rugi: Menunjukkan hasil penjualan dikurangi seluruh biaya selama satu periode (sebulan atau setahun). Jika penjualan lebih besar dari biaya berarti untung (laba); jika biaya lebih besar berarti rugi.
3. Laporan Arus Kas: Menunjukkan uang tunai nyata yang masuk dan keluar dari kas usaha (dari kegiatan dagang harian, jual beli alat, dan pinjaman).

Istilah Analisis Kesehatan Keuangan yang Sering Ditanyakan:
- Likuiditas (Kelancaran Bayar): Kemampuan usaha melunasi utang jangka pendek yang segera jatuh tempo (seperti tagihan listrik, gaji karyawan bulan ini, dan utang pemasok). Contoh ukurannya adalah Rasio Lancar (Current Ratio).
- Solvabilitas (Kemampuan Bayar Seluruh Utang): Kemampuan usaha melunasi semua utangnya jika usaha tersebut ditutup.
- Profitabilitas (Kemampuan Mencari Laba): Seberapa besar keuntungan yang bisa dihasilkan dari setiap rupiah penjualan atau modal yang ditanamkan.`,
      fokusUjian: 'Pahami apa arti likuiditas (kelancaran bayar tagihan harian) dan mengapa perusahaan yang labanya besar tetap bisa bangkrut jika kehabisan uang kas tunai.',
      poinKunci: [
        'Neraca menunjukkan harta, utang, dan modal.',
        'Laba rugi menunjukkan apakah usaha untung atau rugi.',
        'Likuiditas mengukur kesiapan uang kas membayar tagihan jangka pendek yang segera jatuh tempo.'
      ]
    },
    {
      id: 'mk-5',
      nomor: '2.2.5',
      subbab: '2.2',
      judul: 'Perencanaan Keuangan dan Analisis Titik Impas (BEP)',
      halamanPdf: 'Hal. 7',
      referensi: 'Sujarweni (2021); Martono & Harjito (2010)',
      ringkasan: 'Menentukan batas minimal penjualan agar hasil usaha dapat menutup semua pengeluaran tanpa mengalami kerugian.',
      isiMateri: `Analisis Titik Impas (sering disebut Break Even Point / BEP) adalah kondisi di mana penerimaan penjualan suatu usaha sama persis dengan total biaya yang dikeluarkan.
Pada kondisi titik impas, perusahaan tidak mendapat untung dan juga tidak mengalami kerugian (Laba = 0).

Dua Jenis Biaya Usaha:
1. Biaya Tetap (Fixed Cost): Biaya yang jumlahnya tetap harus dibayar berapa pun banyaknya barang yang dijual, misalnya: sewa tempat ruko, gaji pokok satpam/karyawan tetap, dan iuran kebersihan.
2. Biaya Variabel (Variable Cost): Biaya yang jumlahnya bertambah seiring makin banyaknya barang yang dibuat atau dijual, misalnya: bahan baku terigu, minyak goreng, dan kemasan plastik.

Manfaat Titik Impas bagi Pengusaha:
Membantu pemilik usaha mengetahui target minimal: "Dalam sebulan, minimal saya harus menjual berapa porsi atau berapa buah barang agar seluruh biaya operasional tertutupi?" Setiap penjualan di atas angka titik impas barulah mulai menghasilkan keuntungan bersih.`,
      fokusUjian: 'Jelaskan pengertian titik impas (BEP) dan sebutkan contoh biaya tetap vs biaya variabel dalam sebuah usaha makanan atau toko.',
      poinKunci: [
        'Titik impas (BEP) adalah kondisi penjualan sama dengan total biaya (tidak untung, tidak rugi).',
        'Biaya tetap tidak berubah meskipun produksi naik atau turun (contoh: sewa ruko).',
        'Biaya variabel bertambah jika produksi bertambah (contoh: bahan baku).'
      ]
    },
    {
      id: 'mk-6',
      nomor: '2.2.6',
      subbab: '2.2',
      judul: 'Manajemen Modal Kerja dan Manajemen Kas',
      halamanPdf: 'Hal. 7',
      referensi: 'Keown et al. (2005); Martono & Harjito (2010)',
      ringkasan: 'Mengatur dana harian untuk operasional usaha dan mengelola saldo uang tunai agar tidak kekurangan dan tidak menganggur sia-sia.',
      isiMateri: `Modal kerja adalah dana yang dibutuhkan perusahaan untuk membiayai kegiatan operasional sehari-hari, seperti membeli bahan baku, membayar gaji pegawai, membayar listrik, dan memberi tempo pembayaran kepada langganan (piutang).

Manajemen Uang Tunai (Kas):
Uang kas adalah aset yang paling lancar tetapi tidak menghasilkan bunga jika hanya disimpan di laci meja toko.

Tantangan Mengelola Kas:
- Kas Terlalu Sedikit: Berbahaya, karena jika tiba-tiba ada tagihan pemasok yang jatuh tempo atau mesin rusak mendadak, usaha tidak mampu membayar dan bisa kehilangan kepercayaan.
- Kas Terlalu Banyak di Laci: Kurang bijak, karena uang tunai yang menganggur tidak menghasilkan tambahan laba. Sebaiknya kelebihan kas diinvestasikan pada tabungan berbunga atau dipakai menambah barang dagangan yang cepat laku.`,
      fokusUjian: 'Jelaskan bahaya jika usaha kekurangan uang kas dan mengapa uang kas tidak boleh dibiarkan menganggur terlalu banyak.',
      poinKunci: [
        'Modal kerja dipakai untuk membiayai kegiatan usaha sehari-hari.',
        'Kas yang cukup menjamin kelancaran pembayaran tagihan harian.',
        'Kelebihan kas sebaiknya diputar agar menghasilkan keuntungan tambahan.'
      ]
    },
    {
      id: 'mk-7',
      nomor: '2.2.7',
      subbab: '2.2',
      judul: 'Penganggaran Modal (Capital Budgeting)',
      halamanPdf: 'Hal. 7',
      referensi: 'Keown et al. (2005)',
      ringkasan: 'Proses menilai dan memilih rencana pengeluaran modal jangka panjang (seperti membeli mesin baru atau membuka cabang toko).',
      isiMateri: `Penganggaran modal adalah keputusan memilih proyek investasi jangka panjang yang memakan biaya besar dan dampaknya terasa bertahun-tahun ke depan. Karena uang yang dikeluarkan sangat besar, keputusan ini harus dihitung dengan sangat hati-hati agar tidak salah langkah.

Dua Metode Penilaian yang Paling Sering Ditanyakan:

1. Waktu Pengembalian Modal (Payback Period):
Menghitung berapa lama (berapa bulan atau berapa tahun) uang modal awal yang kita tanamkan bisa balik kembali dari hasil keuntungan usaha.
Kriterianya: Semakin cepat modalnya kembali, semakin disukai karena risikonya lebih kecil.

2. Nilai Sekarang Bersih (Net Present Value / NPV secara logika):
Menghitung selisih antara seluruh keuntungan kas di masa depan (yang sudah disesuaikan nilainya ke nilai uang hari ini) dengan besarnya modal awal yang dikeluarkan hari ini.
Kriterianya:
- Jika hasilnya bernilai positif (+): Rencana investasi tersebut LAYAK DITERIMA karena menghasilkan keuntungan yang melebihi biaya modalnya.
- Jika hasilnya bernilai negatif (-): Rencana investasi tersebut HARUS DITOLAK karena diperkirakan akan merugikan usaha.`,
      fokusUjian: 'Penguji biasanya menanyakan arti nilai NPV positif (+) dan apa arti payback period dalam penilaian kelayakan usaha.',
      poinKunci: [
        'Penganggaran modal menilai kelayakan pengeluaran jangka panjang bernilai besar.',
        'Waktu pengembalian modal (payback period) mengukur seberapa cepat modal awal bisa balik.',
        'Jika NPV bernilai positif, proyek investasi dinilai layak dan menguntungkan.'
      ]
    },
    {
      id: 'mk-8',
      nomor: '2.2.8',
      subbab: '2.2',
      judul: 'Biaya Modal dan Struktur Modal',
      halamanPdf: 'Hal. 8',
      referensi: 'Keown et al. (2005); Martono & Harjito (2010)',
      ringkasan: 'Menentukan perpaduan yang pas antara menggunakan uang sendiri dengan meminjam uang bank agar biaya modal serendah mungkin.',
      isiMateri: `Setiap modal yang digunakan dalam usaha ada 'harganya' (disebut Biaya Modal):
- Jika meminjam uang ke bank (utang), biayanya adalah bunga pinjaman yang wajib dibayar setiap bulan.
- Jika memakai uang tabungan sendiri atau uang investor (saham), biayanya adalah harapan investor untuk mendapatkan pembagian keuntungan (dividen).

Struktur Modal:
Perpaduan atau perbandingan antara modal pinjaman (utang) dengan modal sendiri yang dipakai untuk mendanai usaha.

Kelebihan dan Risiko Utang:
- Kelebihan: Bunga pinjaman bank bisa mengurangi beban pajak keuntungan usaha.
- Risiko: Bunga utang wajib dibayar tepat waktu, baik saat usaha sedang ramai maupun saat sepi. Jika usaha memiliki terlalu banyak utang dan penjualan anjlok, usaha bisa terancam bangkrut karena disita bank.`,
      fokusUjian: 'Pahami perbandingan antara menggunakan modal pinjaman utang bank vs modal sendiri dalam membiayai usaha.',
      poinKunci: [
        'Biaya modal adalah pengorbanan atau beban yang harus ditanggung atas uang modal yang dipakai.',
        'Utang bank memiliki kewajiban bunga tetap yang harus dibayar tepat waktu.',
        'Struktur modal yang baik menjaga porsi utang agar tidak membahayakan keselamatan usaha.'
      ]
    },
    {
      id: 'mk-9',
      nomor: '2.2.9',
      subbab: '2.2',
      judul: 'Kebijakan Dividen',
      halamanPdf: 'Hal. 8',
      referensi: 'Keown et al. (2005); Martono & Harjito (2010)',
      ringkasan: 'Keputusan membagi keuntungan bersih kepada pemilik usaha atau menyimpannya sebagai modal cadangan untuk mengembangkan usaha.',
      isiMateri: `Ketika usaha berhasil mencatat keuntungan bersih di akhir tahun, ada dua pilihan yang harus diputuskan:

1. Dibagikan sebagai Dividen:
Uang keuntungan diserahkan kepada para pemilik atau pemegang saham. Hal ini membuat pemilik senang karena langsung menikmati hasil jerih payah investasinya.
2. Ditahan di Kas Usaha (Laba Ditahan):
Uang keuntungan tidak dibagikan, melainkan disimpan untuk membeli perlengkapan baru, menambah stok dagangan, atau membuka cabang usaha baru di tahun depan.

Pertimbangan Mengambil Keputusan:
- Usaha Baru yang Sedang Tumbuh Pesat: Biasanya lebih memilih menahan sebagian besar keuntungannya karena butuh banyak modal untuk ekspansi dan menambah barang.
- Usaha Mapan yang Sudah Stabil: Biasanya lebih leluasa membagikan sebagian besar keuntungannya dalam bentuk uang tunai (dividen) kepada para pemilik.`,
      fokusUjian: 'Jelaskan mengapa usaha yang sedang berkembang pesat sering kali tidak membagikan semua keuntungannya kepada pemilik.',
      poinKunci: [
        'Dividen adalah bagian laba bersih yang dibagikan kepada para pemilik modal.',
        'Laba ditahan adalah bagian laba yang disimpan untuk membiayai pertumbuhan usaha di masa depan.',
        'Perusahaan yang ingin berkembang pesat membutuhkan laba ditahan sebagai modal tambahan.'
      ]
    }
  ]
};
