import { ExamQuestion } from '../../../types/exam';

export const operasionalQuestions: ExamQuestion[] = [
  {
    id: 'soal-mo-01',
    bidangId: 'operasional',
    topikId: 'mo-1',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu membedakan karakteristik produk barang dan jasa dalam proses transformasi operasional.',
    pertanyaan: 'Dalam proses operasional, perbedaan mendasar antara usaha yang menghasilkan produk barang dengan usaha yang menghasilkan jasa adalah...',
    options: [
      { key: 'A', text: 'Barang berwujud fisik dan dapat disimpan di gudang, sedangkan jasa tidak berwujud fisik dan langsung dirasakan saat diberikan.' },
      { key: 'B', text: 'Barang tidak memerlukan bahan baku sama sekali, sedangkan jasa selalu membutuhkan pabrik besar.' },
      { key: 'C', text: 'Kualitas jasa dapat disimpan selama berbulan-bulan di dalam lemari pendingin.' },
      { key: 'D', text: 'Usaha jasa tidak pernah membutuhkan interaksi atau komunikasi dengan pelanggan.' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Ciri utama barang adalah memiliki wujud fisik nyata (dapat disentuh, disimpan di gudang, dan dipindahkan). Sedangkan jasa bersifat tidak berwujud (layanan/pengalaman) dan proses produksinya berlangsung bersamaan saat konsumen menikmatinya (seperti layanan hotel di Jatiluhur atau jasa potong rambut di Purwakarta).',
    referensiBuku: 'Heizer & Render (2004), Manajemen Operasi, Bab Pengantar Operasi; Handoko (2000).',
    halamanPdf: 'Hal. 3'
  },
  {
    id: 'soal-mo-02',
    bidangId: 'operasional',
    topikId: 'mo-2',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu menghubungkan keputusan operasional dengan strategi efisiensi biaya pada usaha lokal.',
    pertanyaan: 'Pengrajin keramik di Sentra Plered Purwakarta memilih menggunakan cetakan standar yang seragam untuk memproduksi pot tanaman pesanan massal. Tujuan utama dari keputusan operasional ini adalah...',
    options: [
      { key: 'A', text: 'Membuat setiap pot memiliki bentuk dan ukuran yang berbeda-beda secara acak.' },
      { key: 'B', text: 'Meningkatkan efisiensi kerja, mempercepat proses pembuatan, dan menekan biaya produksi.' },
      { key: 'C', text: 'Menaikkan harga jual setinggi mungkin agar pembeli lokal enggan membeli.' },
      { key: 'D', text: 'Mengurangi jumlah pesanan yang masuk dari toko tanaman hias.' },
    ],
    kunciJawaban: 'B',
    pembahasan: 'Standardisasi proses dan peralatan kerja (seperti cetakan seragam pada industri keramik Plered) mempermudah pekerja, mengurangi kesalahan bentuk, mempercepat waktu pengerjaan, dan menghemat biaya produksi sehingga produk bisa dijual dengan harga yang bersaing.',
    referensiBuku: 'Heizer & Render (2004), Manajemen Operasi, Bab Strategi Operasi.',
    halamanPdf: 'Hal. 3'
  },
  {
    id: 'soal-mo-03',
    bidangId: 'operasional',
    topikId: 'mo-5',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu menentukan faktor penting dalam pemilihan lokasi usaha bagi usaha pemula/mahasiswa.',
    pertanyaan: 'Seorang mahasiswa STIE Wibawa Karta Raharja Purwakarta ingin membuka usaha kedai minuman teh manis dan cemilan. Faktor terpenting yang paling wajib diperhatikan dalam menentukan lokasi tempat usahanya adalah...',
    options: [
      { key: 'A', text: 'Memilih lokasi yang sangat tersembunyi dan jauh dari keramaian orang.' },
      { key: 'B', text: 'Dekat dengan target konsumen (ramai mahasiswa/pelajar), mudah diakses, dan aman.' },
      { key: 'C', text: 'Lokasi yang hanya bisa dilewati oleh kendaraan besar seperti truk gandeng.' },
      { key: 'D', text: 'Memilih tempat yang harga sewanya paling mahal tanpa melihat potensi jumlah pembeli.' },
    ],
    kunciJawaban: 'B',
    pembahasan: 'Dalam manajemen operasional penentuan lokasi usaha mikro/ritel, kedekatan dengan target pasar (ramai calon pembeli seperti mahasiswa, pelajar, dan masyarakat sekitar kampus), kemudahan akses jalan, serta keamanan merupakan faktor penentu utama keberhasilan usaha.',
    referensiBuku: 'Heizer & Render (2004), Manajemen Operasi, Bab Strategi Penentuan Lokasi.',
    halamanPdf: 'Hal. 4'
  },
  {
    id: 'soal-mo-04',
    bidangId: 'operasional',
    topikId: 'mo-6',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu memahami konsep kapasitas produksi pabrik dan alasan output aktual berada di bawah kapasitas maksimal.',
    pertanyaan: 'Sebuah pabrik garmen di Kawasan Industri Bukit Indah City (BIC) Purwakarta memiliki mesin yang mampu menjahit maksimal 1.000 potong pakaian per hari. Namun pada kenyataannya rata-rata hasil jahitan per hari hanya mencapai 850 potong. Penyebab utama hasil nyata berada di bawah kapasitas mesin maksimal adalah...',
    options: [
      { key: 'A', text: 'Adanya waktu istirahat pekerja, jadwal perawatan mesin rutin, dan pergantian bahan kain.' },
      { key: 'B', text: 'Pabrik sengaja mematikan listrik sepanjang hari tanpa alasan yang jelas.' },
      { key: 'C', text: 'Mesin pabrik tidak boleh digunakan oleh karyawan lebih dari 1 jam sehari.' },
      { key: 'D', text: 'Pekerja dilarang menjahit pakaian saat jam kerja berlangsung.' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Kapasitas maksimal (kapasitas desain) adalah kapasitas teoritis dalam kondisi sempurna tanpa henti. Dalam praktik nyata pabrik di kawasan industri Purwakarta, hasil aktual selalu lebih rendah karena adanya waktu istirahat pekerja, pemeliharaan/perbaikan mesin, penyiapan bahan baku, dan pengawasan kualitas.',
    referensiBuku: 'Handoko, T. Hani (2000), Dasar-Dasar Manajemen Produksi dan Operasi, Bab Perencanaan Kapasitas.',
    halamanPdf: 'Hal. 4'
  },
  {
    id: 'soal-mo-05',
    bidangId: 'operasional',
    topikId: 'mo-10',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu memahami tujuan utama konsep pengelolaan persediaan bahan baku (EOQ).',
    pertanyaan: 'Pengusaha kuliner Sate Maranggi di Purwakarta mengelola persediaan daging sapi dan bumbu dapur dengan teratur. Tujuan utama dari penerapan konsep jumlah pesanan yang ekonomis (EOQ / Economic Order Quantity) dalam persediaan adalah...',
    options: [
      { key: 'A', text: 'Menimbun daging sebanyak mungkin di gudang hingga membusuk dan rusak.' },
      { key: 'B', text: 'Menyeimbangkan antara biaya pesan dan biaya simpan agar total biaya persediaan menjadi paling hemat/minimal.' },
      { key: 'C', text: 'Membuat stok daging di dapur selalu habis total sehingga pembeli sering kecewa.' },
      { key: 'D', text: 'Memesan daging hanya 1 kilogram setiap jam sekali agar staf dapur selalu sibuk keluar masuk.' },
    ],
    kunciJawaban: 'B',
    pembahasan: 'Tujuan utama metode persediaan EOQ (Economic Order Quantity) adalah menentukan jumlah pemesanan bahan yang paling efisien, sehingga biaya pengadaan pesanan dan biaya penyimpanan (seperti pendingin daging dan risiko rusak) mencapai titik total biaya terendah.',
    referensiBuku: 'Heizer & Render (2004), Manajemen Operasi, Bab Manajemen Persediaan.',
    halamanPdf: 'Hal. 5'
  },
  {
    id: 'soal-mo-06',
    bidangId: 'operasional',
    topikId: 'mo-9',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu menjelaskan peran pengendalian kualitas pada produk makanan lokal Purwakarta.',
    pertanyaan: 'Produsen camilan Simping Kaum khas Purwakarta selalu melakukan pemeriksaan kebersihan cetakan, kerenyahan lembaran simping, dan kerapatan segel kemasan sebelum produk dikirim ke toko oleh-oleh. Langkah operasional ini merupakan penerapan dari...',
    options: [
      { key: 'A', text: 'Pengendalian kualitas mutu (Quality Control) untuk menjaga kepuasan dan kepercayaan pelanggan.' },
      { key: 'B', text: 'Pemberian sanksi denda kepada pembeli simping.' },
      { key: 'C', text: 'Penundaan pengiriman barang tanpa batas waktu tertentu.' },
      { key: 'D', text: 'Pengurangan porsi bahan baku agar rasa simping menjadi tawar.' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Pengendalian kualitas (Quality Control) bertujuan memastikan produk yang sampai ke tangan konsumen memenuhi standar mutu yang konsisten (renyah, higienis, kemasan rapi), sehingga nama baik oleh-oleh khas Purwakarta tetap terjaga dan pembeli merasa puas.',
    referensiBuku: 'Heizer & Render (2004), Manajemen Operasi, Bab Manajemen Kualitas.',
    halamanPdf: 'Hal. 5'
  },
  {
    id: 'soal-mo-07',
    bidangId: 'operasional',
    topikId: 'mo-1',
    type: 'tanya_jawab_lisan',
    tingkatKesulitan: 'sedang',
    indikatorPenilaian: 'Kemampuan menjelaskan alur masukan-proses-keluaran (input-proses-output) pada usaha nyata di Purwakarta.',
    pertanyaan: 'Jelaskan bagaimana proses transformasi masukan (input) menjadi keluaran (output) pada salah satu usaha yang ada di Purwakarta (misalnya usaha kuliner Sate Maranggi atau kerajinan keramik Plered)!',
    rubrikPenilaianLisan: {
      kriteriaUtama: 'Kemampuan menjelaskan unsur input, proses pengolahan, dan hasil akhir (output) secara sederhana dan tepat.',
      ekspektasiJawaban: [
        'Input: bahan baku (daging sapi/kambing segar, kecap, rempah bumbu, tusuk sate, arang kayu), tenaga juru masak, dan peralatan panggangan.',
        'Proses: pemotongan daging, perendaman bumbu khas maranggi, penusukan daging, serta proses pembakaran sate di atas bara arang dengan tingkat kematangan yang pas.',
        'Output: hidangan sate maranggi yang lezat, sambal tomat segar, serta kepuasan para penikmat kuliner lokal maupun wisatawan yang datang ke Purwakarta.'
      ],
      kataKunciWajib: ['Bahan baku (input)', 'Proses pengolahan/memasak', 'Produk jadi (output)', 'Kepuasan konsumen', 'Nilai tambah']
    },
    pembahasan: 'Pertanyaan sidang lisan tingkat dasar untuk menguji pemahaman mahasiswa STIE Wibawa Karta Raharja mengenai konsep proses operasi di lingkungan sekitarnya.',
    referensiBuku: 'Heizer & Render (2004); Handoko (2000), Bab Pengantar Sistem Operasi.',
    halamanPdf: 'Hal. 3'
  }
];
