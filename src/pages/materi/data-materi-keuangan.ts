import { BidangMateri } from '../../types/materi';

export const dataMateriKeuangan: BidangMateri = {
  id: 'keuangan',
  nama: 'Manajemen Keuangan',
  kode: 'MK',
  nomorBab: 2,
  judulBab: 'BAB 2 MANAJEMEN KEUANGAN',
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
    'Ujian komprehensif lisan menguji logika dan pemahaman konsep kamu, bukan kemampuan menghitung rumus akuntansi yang panjang.',
    'Jelaskan konsep keuangan dengan perumpamaan sederhana: misalnya mengelola uang saku, modal warung, atau usaha toko kelontong.',
    'Pahami perbedaan penting antara untung di catatan pembukuan (laba akuntansi) dengan uang tunai nyata di kantong (arus kas lancar).',
    'Gunakan bahasa Indonesia yang jelas, tenang, dan runtut saat menjawab pertanyaan dosen penguji.'
  ],
  ringkasanFonetis: 'Selamat datang di ringkasan Manajemen Keuangan. Secara sederhana, ilmu ini mengajarkan cara mencari modal usaha, membelanjakan uang untuk aset yang produktif, menjaga uang kas agar tagihan harian lancar terbayar, serta menilai apakah rencana investasi baru layak dijalankan. Ingat tiga keputusan utamanya: keputusan investasi, keputusan pendanaan, dan kebijakan pembagian keuntungan. Saat menjawab penguji nanti, cukup jelaskan logikanya seperti mengatur keuangan warung atau toko agar mudah dipahami.',
  referensiFonetis: 'Buku rujukan utama Manajemen Keuangan terdiri atas buku Fainensyel Menejemen karya Arthur Keown dan rekan, buku Manajemen Keuangan karya Martono dan Agus Harjito, diktat perkuliahan Ibu Nunung Nurhasanah dari Es-Te-I-E Wikara, serta buku Manajemen Keuangan karya Wiratna Sujarweni yang membahas aplikasi rasio dan titik impas di Indonesia.',
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
      fokusUjian: 'Fokuskan penjelasan kamu pada tiga keputusan utama manajer keuangan investasi, pendanaan, dan pembagian keuntungan serta tujuan akhirnya untuk memaksimalkan nilai usaha jangka panjang.',
      penjelasanPendukung: 'Dalam sidang ujian, sampaikan dengan bahasa kamu sendiri: manajer keuangan itu seperti bendahara keluarga yang harus tahu dari mana uang didapat, untuk apa uang dibelanjakan, dan berapa yang harus ditabung untuk masa depan.'
      ,
      transkripFonetis: 'Secara sederhana, manajemen keuangan itu seperti menjadi bendahara cerdas bagi usaha. Tugas utamanya ada tiga. Pertama, keputusan investasi, yaitu memilih uang usaha mau dibelikan alat atau barang apa. Kedua, keputusan pendanaan, yaitu menentukan modalnya mau diambil dari uang sendiri atau pinjam bank. Ketiga, keputusan keuntungan, yaitu membagi sebagian laba kepada pemilik dan menyisakan sebagian untuk modal tambahan. Tujuan akhirnya adalah memaksimalkan nilai usaha dalam jangka panjang, bukan cuma untung sesaat.'
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
      fokusUjian: 'Fokuskan jawaban kamu pada logika bahwa uang hari ini lebih bernilai daripada uang masa depan karena pengaruh inflasi, peluang diputar menjadi laba, dan kepastian penerimaan, serta arti anuitas sebagai cicilan rutin berjumlah sama.',
      transkripFonetis: 'Konsep Nilai Waktu dari Uang, atau Taim Velyu of Mani, gampang sekali dipahami. Uang satu juta rupiah yang kita pegang hari ini jauh lebih berharga dibanding satu juta rupiah yang baru diterima lima tahun lagi. Alasannya tiga: pertama ada inflasi atau kenaikan harga barang, kedua uang hari ini bisa langsung diputar menjadi modal usaha atau ditabung berbunga, dan ketiga masa depan penuh ketidakpastian. Sementara itu, anuitas artinya pembayaran atau cicilan dengan jumlah yang sama secara rutin tiap bulan, seperti cicilan motor.'
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
      fokusUjian: 'Fokuskan penjelasan kamu pada perbedaan mendasar antara saham sebagai bukti kepemilikan modal dengan imbalan dividen dan obligasi sebagai surat utang yang wajib dibayar bunganya secara rutin hingga jatuh tempo.',
      transkripFonetis: 'Perusahaan besar biasanya mencari modal lewat dua surat berharga, yaitu saham dan obligasi. Bedanya sangat jelas: saham adalah tanda kepemilikan modal, artinya pembeli saham ikut menjadi pemilik perusahaan dan mendapat bagian untung berupa dividen, tetapi ikut menanggung rugi jika bisnis jatuh. Sebaliknya, obligasi adalah surat tanda utang, di mana perusahaan wajib membayar bunga secara rutin dan mengembalikan pokok pinjaman saat jatuh tempo, serta didahulukan pembayarannya jika perusahaan bangkrut.'
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
      fokusUjian: 'Fokuskan jawaban kamu pada fungsi tiga laporan keuangan pokok serta perbedaan likuiditas, solvabilitas, dan profitabilitas, terutama mengapa usaha berlaba besar tetap bisa macet bila kehabisan uang kas tunai.',
      transkripFonetis: 'Kesehatan keuangan usaha dilihat dari tiga laporan pokok. Neraca menunjukkan posisi harta, utang, dan modal pada satu tanggal. Laba rugi menunjukkan apakah jualan kita untung atau rugi. Lalu arus kas mencatat uang tunai nyata yang masuk dan keluar. Nah, istilah yang sering ditanya penguji adalah likuiditas, yaitu kemampuan kas membayar tagihan jangka pendek seperti gaji dan listrik, contohnya lewat Karent Reysyo. Ingat, usaha yang untung di catatan kertas bisa tetap macet kalau kehabisan uang tunai di kas.'
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
      fokusUjian: 'Fokuskan penjelasan kamu pada arti titik impas (BEP) sebagai kondisi penerimaan sama dengan total biaya, perbedaan biaya tetap dengan biaya variabel, serta perannya menentukan target penjualan minimal.',
      transkripFonetis: 'Titik impas, atau Breyk Iven Point yang disingkat Bi-I-Pi, adalah kondisi balik modal di mana total penjualan sama persis dengan total biaya, sehingga usaha belum untung tapi juga tidak rugi. Untuk menghitungnya, kita membedakan dua biaya: biaya tetap atau Fiks Kos seperti sewa ruko yang jumlahnya sama meski toko sepi atau ramai, dan biaya variabel atau Veriebel Kos seperti bahan baku dan kemasan yang makin besar jika jualan makin banyak. Penjualan di atas titik Bi-I-Pi barulah menghasilkan untung bersih.'
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
      fokusUjian: 'Fokuskan jawaban kamu pada peran modal kerja untuk operasional harian dan keseimbangan menjaga saldo kas cukup untuk membayar tagihan mendadak namun kelebihannya tetap diputar agar produktif.',
      transkripFonetis: 'Modal kerja adalah uang putar untuk membiayai kegiatan harian usaha, mulai dari beli bahan baku, bayar gaji, sampai tagihan listrik. Di dalamnya ada manajemen uang tunai atau kas yang harus dijaga pas. Jika uang kas terlalu sedikit, usaha bisa gagal bayar saat ada tagihan mendadak. Sebaliknya jika terlalu banyak uang tunai menumpuk di laci, uang itu menganggur dan tidak menghasilkan tambahan keuntungan. Jadi kelebihan kas sebaiknya diputar ke stok barang cepat laku atau tabungan berbunga.'
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
      fokusUjian: 'Fokuskan penjelasan kamu pada penilaian kelayakan investasi jangka panjang melalui kecepatan balik modal (Payback Period) serta arti nilai NPV positif sebagai tanda proyek layak diterima karena melampaui biaya modal.',
      transkripFonetis: 'Penganggaran modal, atau Kapital Bajating, adalah cara menilai rencana belanja besar jangka panjang seperti membeli mesin baru atau membuka cabang toko. Dua ukuran yang paling sering ditanya penguji: pertama, Peybek Piriod, yaitu berapa lama modal awal kita bisa kembali, makin cepat makin aman. Kedua, Net Prezen Velyu atau En-Pi-Vi, yaitu selisih keuntungan masa depan yang sudah dihitung nilainya hari ini dikurangi modal awal. Kalau nilai En-Pi-Vi positif, rencana itu layak dijalankan; kalau negatif, sebaiknya ditolak.'
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
      fokusUjian: 'Fokuskan jawaban kamu pada perbandingan biaya dan risiko antara modal pinjaman utang bank yang berbunga tetap dengan modal sendiri dalam menyusun struktur modal yang aman.',
      transkripFonetis: 'Setiap modal usaha itu ada biayanya. Kalau modal berasal dari pinjaman bank, biayanya adalah bunga utang. Kalau berasal dari investor atau pemilik, biayanya adalah pembagian laba yang diharapkan. Nah, struktur modal mengatur perbandingan yang sehat antara modal pinjaman dengan modal sendiri. Kelebihan utang adalah bunganya bisa mengurangi beban pajak, tetapi risikonya bunga wajib dibayar meski toko sedang sepi. Jadi jangan sampai porsi utang terlalu besar hingga membahayakan usaha.'
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
      fokusUjian: 'Fokuskan penjelasan kamu pada pertimbangan membagi laba bersih sebagai dividen kepada pemilik atau menyimpannya sebagai laba ditahan, terutama mengapa usaha yang sedang tumbuh pesat lebih memprioritaskan laba ditahan.',
      transkripFonetis: 'Saat usaha mencatat untung bersih di akhir tahun, pimpinan harus mengambil kebijakan dividen: apakah laba itu dibagikan tunai kepada pemilik sebagai dividen, atau disimpan di kas sebagai laba ditahan untuk membesarkan usaha. Perusahaan baru yang sedang tumbuh pesat biasanya memilih menahan sebagian besar labanya sebagai modal ekspansi atau membuka cabang. Sebaliknya, perusahaan yang sudah mapan dan stabil biasanya lebih leluasa membagikan dividen tunai kepada para pemegang sahamnya.'
    }
  ]
};
