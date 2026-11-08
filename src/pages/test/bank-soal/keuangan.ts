import { ExamQuestion } from '../../../types/exam';

export const keuanganQuestions: ExamQuestion[] = [
  {
    id: 'soal-mk-01',
    bidangId: 'keuangan',
    topikId: 'mk-1',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu menjelaskan tujuan utama manajemen keuangan perusahaan atau usaha.',
    pertanyaan: 'Tujuan utama dari pengelolaan keuangan (manajemen keuangan) pada suatu perusahaan atau usaha bisnis adalah...',
    options: [
      { key: 'A', text: 'Membelanjakan seluruh kas perusahaan hingga saldo rekening bernilai nol setiap bulan.' },
      { key: 'B', text: 'Memaksimalkan nilai usaha (nilai perusahaan) dan kesejahteraan pemilik usaha dalam jangka panjang.' },
      { key: 'C', text: 'Menghindari pembayaran pajak dan melarang usaha untuk berkembang.' },
      { key: 'D', text: 'Meminjam uang dari bank sebanyak mungkin tanpa rencana penggunaan yang jelas.' },
    ],
    kunciJawaban: 'B',
    pembahasan: 'Tujuan pokok manajemen keuangan adalah memaksimalkan nilai perusahaan (firm value) dan kemakmuran pemilik/pemegang saham. Pengelolaan keuangan yang sehat memastikan kelangsungan hidup usaha, kestabilan arus kas, dan pertumbuhan bisnis jangka panjang.',
    referensiBuku: 'Sujarweni, V. Wiratna (2021), Manajemen Keuangan, Bab Pengantar Manajemen Keuangan.',
    halamanPdf: 'Hal. 6'
  },
  {
    id: 'soal-mk-02',
    bidangId: 'keuangan',
    topikId: 'mk-2',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu memahami konsep dasar nilai waktu dari uang (Time Value of Money).',
    pertanyaan: 'Dalam konsep dasar manajemen keuangan, alasan utama mengapa uang sebesar Rp1.000.000 yang kita terima hari ini nilainya lebih berharga dibandingkan uang Rp1.000.000 yang baru akan diterima 5 tahun lagi adalah karena...',
    options: [
      { key: 'A', text: 'Uang fisik yang diterima hari ini memiliki gambar pahlawan yang lebih baru.' },
      { key: 'B', text: 'Adanya pengaruh inflasi (kenaikan harga barang) dan uang saat ini dapat disimpan atau diinvestasikan agar menghasilkan keuntungan.' },
      { key: 'C', text: 'Semua bank di Indonesia akan berhenti beroperasi dalam jangka waktu 5 tahun ke depan.' },
      { key: 'D', text: 'Nilai angka nominal uang lima tahun lagi secara otomatis berkurang menjadi separuhnya.' },
    ],
    kunciJawaban: 'B',
    pembahasan: 'Konsep Nilai Waktu dari Uang (Time Value of Money) mengajarkan bahwa uang yang kita miliki saat ini memiliki potensi untuk diinvestasikan/menghasilkan bunga, serta daya beli uang di masa depan cenderung menurun akibat adanya inflasi (kenaikan harga kebutuhan hidup).',
    referensiBuku: 'Keown et al. (2005), Manajemen Keuangan; Sujarweni (2021).',
    halamanPdf: 'Hal. 6'
  },
  {
    id: 'soal-mk-03',
    bidangId: 'keuangan',
    topikId: 'mk-4',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu menjelaskan fungsi rasio likuiditas bagi kelancaran operasional usaha lokal.',
    pertanyaan: 'Pemilik toko bahan kue di Pasar Rebo Purwakarta memeriksa laporan kas dan utang usahanya. Manfaat utama dari menganalisis rasio likuiditas (seperti Rasio Lancar / Current Ratio) bagi seorang pemilik usaha adalah...',
    options: [
      { key: 'A', text: 'Mengetahui seberapa banyak karyawan yang harus diberhentikan di akhir bulan.' },
      { key: 'B', text: 'Mengetahui kemampuan usaha dalam melunasi kewajiban atau utang jangka pendek yang segera jatuh tempo.' },
      { key: 'C', text: 'Menghitung luas lahan toko yang belum terpakai untuk tempat parkir.' },
      { key: 'D', text: 'Menentukan warna cat dinding toko agar tampak lebih mencolok bagi pembeli.' },
    ],
    kunciJawaban: 'B',
    pembahasan: 'Rasio likuiditas mengukur kesiapan dan kemampuan perusahaan dalam membayar tagihan atau utang jangka pendek (seperti utang ke pemasok bahan baku, tagihan listrik, dan gaji karyawan) tepat pada waktunya menggunakan aset lancar (kas, tabungan, dan piutang).',
    referensiBuku: 'Sujarweni, V. Wiratna (2021), Manajemen Keuangan, Bab Analisis Laporan Keuangan.',
    halamanPdf: 'Hal. 7'
  },
  {
    id: 'soal-mk-04',
    bidangId: 'keuangan',
    topikId: 'mk-7',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu memahami kriteria kelayakan investasi modal (NPV).',
    pertanyaan: 'Mahasiswa STIE Wibawa Karta Raharja Purwakarta membuat proposal rencana pembukaan cabang kafe kopi. Setelah dihitung, nilai Net Present Value (NPV) usaha tersebut bernilai positif (+). Keputusan keuangan yang paling tepat diambil adalah...',
    options: [
      { key: 'A', text: 'Proyek rencana pembukaan kafe tersebut dinilai layak (diterima) karena memberikan keuntungan lebih besar daripada modal yang ditanamkan.' },
      { key: 'B', text: 'Rencana kafe harus segera dibatalkan karena bernilai positif berarti usaha tersebut merugi.' },
      { key: 'C', text: 'Pemilik kafe harus membuang seluruh peralatan masak yang sudah dibeli.' },
      { key: 'D', text: 'Mahasiswa harus mengganti seluruh menu kopi menjadi jualan pakaian bekas.' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Aturan dasar penilaian investasi metode Net Present Value (NPV): jika nilai NPV positif (NPV > 0), berarti penerimaan kas di masa depan setelah disesuaikan dengan nilai waktu lebih besar daripada modal awal yang dikeluarkan, sehingga proyek investasi layak diterima dan menambah nilai kekayaan usaha.',
    referensiBuku: 'Keown et al. (2005), Dasar-Dasar Manajemen Keuangan, Bab Penilaian Investasi.',
    halamanPdf: 'Hal. 7'
  },
  {
    id: 'soal-mk-05',
    bidangId: 'keuangan',
    topikId: 'mk-9',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu membedakan karakteristik sumber modal sendiri dan modal pinjaman bank.',
    pertanyaan: 'Seorang wirausahawan di Purwakarta sedang mempertimbangkan sumber modal untuk memperluas bengkel motornya. Keuntungan utama jika ia memilih menggunakan modal sendiri (tabungan pribadi) dibandingkan modal pinjaman bank adalah...',
    options: [
      { key: 'A', text: 'Tidak ada kewajiban membayar bunga pinjaman dan tidak ada risiko aset disita bank jika usaha sedang sepi.' },
      { key: 'B', text: 'Pemerintah daerah Purwakarta akan menanggung seluruh biaya operasional bengkel secara gratis.' },
      { key: 'C', text: 'Bengkel secara otomatis akan langsung ramai pelanggan tanpa perlu promosi.' },
      { key: 'D', text: 'Wirausahawan tidak perlu lagi membuat pembukuan keuangan sama sekali.' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Kelebihan utama penggunaan modal sendiri (ekuitas) adalah tidak menimbulkan beban tetap pembayaran cicilan pokok dan bunga bulanan ke pihak ketiga, sehingga tekanan keuangan usaha jauh lebih aman dan fleksibel saat penjualan sedang mengalami penurunan.',
    referensiBuku: 'Martono & Harjito (2010), Manajemen Keuangan, Bab Biaya Modal dan Struktur Modal.',
    halamanPdf: 'Hal. 7'
  },
  {
    id: 'soal-mk-06',
    bidangId: 'keuangan',
    topikId: 'mk-12',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu menjelaskan manfaat analisis Break Even Point (BEP) bagi pengusaha mikro dan mahasiswa.',
    pertanyaan: 'Pengusaha keripik singkong pedas di Wanayasa Purwakarta mempelajari analisis Titik Impas (Break Even Point / BEP). Manfaat paling nyata dari mengetahui titik impas tersebut adalah...',
    options: [
      { key: 'A', text: 'Mengetahui target jumlah bungkus keripik yang harus terjual agar usaha tidak mengalami kerugian (balik modal).' },
      { key: 'B', text: 'Membuat rasa pedas keripik singkong menjadi hilang saat dimakan.' },
      { key: 'C', text: 'Menghitung jumlah kendaraan yang melintas di depan toko setiap hari libur.' },
      { key: 'D', text: 'Memastikan semua pembeli mendapatkan keripik singkong secara gratis tanpa membayar.' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Titik Impas (Break Even Point / BEP) adalah kondisi di mana total pendapatan penjualan persis sama dengan total biaya yang dikeluarkan (laba = 0). Manfaat utamanya bagi pengusaha adalah menjadi pedoman target volume penjualan minimum yang wajib dicapai agar usaha tidak merugi.',
    referensiBuku: 'Sujarweni, V. Wiratna (2021), Manajemen Keuangan, Bab Analisis Peluang Pokok.',
    halamanPdf: 'Hal. 8'
  },
  {
    id: 'soal-mk-07',
    bidangId: 'keuangan',
    topikId: 'mk-1',
    type: 'tanya_jawab_lisan',
    tingkatKesulitan: 'sedang',
    indikatorPenilaian: 'Kemampuan menjelaskan 3 fungsi utama keputusan manajer keuangan secara sederhana.',
    pertanyaan: 'Sebutkan dan jelaskan secara singkat 3 keputusan pokok yang harus diambil oleh seorang pengelola keuangan (manajer keuangan) dalam menjalankan bisnis atau perusahaan!',
    rubrikPenilaianLisan: {
      kriteriaUtama: 'Kemampuan menyebutkan keputusan investasi, pendanaan, dan pengelolaan laba/dividen beserta contohnya.',
      ekspektasiJawaban: [
        '1. Keputusan Investasi: Menentukan ke mana uang/modal dialokasikan, misalnya membeli mesin produksi baru, menyewa ruko, atau menambah stok barang dagang.',
        '2. Keputusan Pendanaan: Menentukan dari mana asal modal untuk membiayai usaha, apakah dari modal sendiri (tabungan/saham) atau pinjaman utang dari pihak bank.',
        '3. Keputusan Pengelolaan Laba (Kebijakan Dividen): Menentukan apakah keuntungan bersih usaha akan dibagikan kepada pemilik atau diputar kembali sebagai laba ditahan untuk mengembangkan usaha.'
      ],
      kataKunciWajib: ['Keputusan Investasi', 'Keputusan Pendanaan', 'Pengelolaan Laba / Dividen', 'Alokasi modal', 'Sumber dana']
    },
    pembahasan: 'Pertanyaan dasar yang lazim diujikan pada sidang komprehensif manajemen keuangan di STIE Wibawa Karta Raharja Purwakarta.',
    referensiBuku: 'Keown et al. (2005); Sujarweni (2021), Bab 1 Pengantar Manajemen Keuangan.',
    halamanPdf: 'Hal. 6'
  }
];
