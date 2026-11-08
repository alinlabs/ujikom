import { BidangMateri } from '../../types/materi';

export const dataMateriOperasional: BidangMateri = {
  id: 'operasional',
  nama: 'Manajemen Operasional',
  kode: 'MO',
  nomorBab: 1,
  judulBab: 'BAB 1 — MANAJEMEN OPERASIONAL',
  halamanPdf: 'Halaman 3–5',
  deskripsi: 'Panduan praktis perancangan, pengelolaan, dan pengawasan proses pengolahan bahan (input) menjadi barang atau jasa (output) yang efisien, bermutu, dan siap bersaing di STIE Wibawa Karta Raharja Purwakarta.',
  iconName: 'Settings',
  color: '#0D9488',
  gambaranUmum: `Manajemen Operasional di STIE Wibawa Karta Raharja (WIKARA) Purwakarta mempelajari bagaimana sebuah usaha, toko, maupun pabrik mengolah bahan mentah dan sumber daya (input) menjadi produk barang atau jasa (output) yang bermanfaat bagi konsumen. Pembahasan disajikan secara praktis dan mudah dipahami, mulai dari penentuan lokasi usaha, tata letak, perencanaan kapasitas, pengelolaan persediaan (seperti EOQ), hingga pengendalian mutu produk lokal Purwakarta (seperti kerajinan keramik Plered, kuliner Sate Maranggi, oleh-oleh Simping, serta pabrik di Kawasan Industri Bukit Indah City/BIC Purwakarta).`,
  konsepDasar: `Inti dari Manajemen Operasional adalah menciptakan nilai tambah dengan mengubah bahan masukan menjadi hasil keluaran yang bermanfaat. Mahasiswa diajak memahami cara menekan biaya agar efisien, menjaga kualitas produk agar pelanggan puas, dan mengatur waktu pengerjaan secara tepat.`,
  tujuanPembelajaran: [
    'Memahami alur perubahan masukan (input) - proses pengolahan - hasil jadi (output) pada barang dan jasa.',
    'Mampu memilih lokasi usaha dan mengatur tata letak tempat kerja yang nyaman dan lancar.',
    'Mengetahui cara sederhana mengelola persediaan bahan baku (konsep EOQ) agar tidak kekurangan dan tidak berlebihan.',
    'Menerapkan pengendalian mutu sederhana untuk menjaga kepuasan pelanggan pada usaha lokal Purwakarta.'
  ],
  petunjukUjian: [
    'Pahami pengertian dasar, manfaat, dan tahapan setiap materi tanpa perlu menghafal rumus rumit.',
    'Fokuskan pada pemahaman logika: mengapa suatu langkah diambil dan apa dampaknya bagi kelancaran usaha.',
    'Kaitkan teori dengan contoh usaha nyata di sekitar Purwakarta, seperti sentra keramik Plered, kedai kuliner Sate Maranggi, toko simping, atau pabrik garmen di BIC Purwakarta.'
  ],
  referensi: [
    {
      id: 'mo-ref-1',
      penulis: 'Heizer, J., & Render, B.',
      tahun: '2004',
      judul: 'Operations Management (7th ed.)',
      penerbit: 'Pearson Prentice-Hall',
      catatan: 'Buku teks utama untuk strategi operasi, desain proses, kapasitas, MRP, TQM, dan manajemen persediaan.',
      halamanPdf: 'Hal. 3 & 13'
    },
    {
      id: 'mo-ref-2',
      penulis: 'Handoko, T. Hani',
      tahun: '2000',
      judul: 'Dasar-Dasar Manajemen Produksi dan Operasi',
      penerbit: 'BPFE Yogyakarta',
      catatan: 'Referensi baku sistem produksi nasional, perencanaan agregat, tata letak fasilitas, dan penjadwalan.',
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
      ringkasan: 'Manajemen Operasional (MO) merencanakan, menjalankan, dan mengendalikan proses yang mengubah input—bahan, tenaga kerja, mesin, informasi, modal, dan energi—menjadi barang atau jasa.',
      isiMateri: `Manajemen Operasional (MO) merencanakan, menjalankan, dan mengendalikan proses yang mengubah input—bahan, tenaga kerja, mesin, informasi, modal, dan energi—menjadi barang atau jasa. Ruang lingkupnya mencakup desain proses, kapasitas, lokasi, tata letak, kualitas, persediaan, penjadwalan, rantai pasok, dan pemeliharaan. Perkembangannya bergerak dari efisiensi dan standardisasi menuju pengendalian kualitas, lean operations, integrasi rantai pasok, otomatisasi, dan pengambilan keputusan berbasis data.`,
      fokusUjian: 'Jelaskan input–proses–output, perbedaan barang dan jasa, serta kontribusi operasi terhadap keunggulan bersaing.',
      poinKunci: [
        'Siklus transformasi input menjadi output bernilai tambah tinggi.',
        'Perbedaan produk fisik (berwujud, dapat disimpan, produksi mendahului konsumsi) vs jasa (nirwujud, heterogen, produksi dan konsumsi simultan).',
        'Kontribusi keunggulan operasi terhadap keunggulan bersaing: diferensiasi mutu, kepemimpinan biaya, dan kecepatan respons pasar.'
      ],
      penjelasanPendukung: 'Dalam konteks ujian lisan, mahasiswa disarankan memberikan contoh nyata transformasi input di industri manufaktur (misal otomotif) dan sektor jasa (misal rumah sakit atau perbankan).',
      contohPenerapan: 'Pabrik perakitan mobil merakit komponen mesin dan bodi baja menjadi kendaraan utuh; hotel menggabungkan fasilitas kamar dan keramahan staf untuk memberikan pengalaman menginap.'
    },
    {
      id: 'mo-2',
      nomor: '1.2.2',
      subbab: '1.2',
      judul: 'Strategi Operasi',
      halamanPdf: 'Hal. 3',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Pola keputusan jangka panjang agar fungsi operasi secara konsisten mendukung dan memperkuat strategi bisnis perusahaan.',
      isiMateri: `Strategi operasi adalah pola keputusan jangka panjang agar fungsi operasi mendukung strategi bisnis. Prioritas dapat berupa biaya, kualitas, kecepatan, keandalan, fleksibilitas, dan inovasi. Strategi harus selaras dengan pasar serta kemampuan perusahaan, termasuk teknologi, kapasitas, pemasok, tenaga kerja, dan lokasi.`,
      fokusUjian: 'Hubungkan prioritas kompetitif dengan keputusan operasional.',
      poinKunci: [
        'Enam prioritas kompetitif: Biaya (Cost), Kualitas (Quality), Kecepatan (Speed), Keandalan (Reliability), Fleksibilitas (Flexibility), dan Inovasi (Innovation).',
        'Penyelarasan kapabilitas internal pabrik dengan positioning pasar.',
        'Trade-off strategis dalam operasi: biaya vs fleksibilitas atau standardisasi vs kustomisasi.'
      ],
      penjelasanPendukung: 'Keputusan operasional (seperti tata letak dan otomatisasi) harus menjadi cerminan dari prioritas kompetitif yang dipilih perusahaan.',
      contohPenerapan: 'Maskapai bertarif rendah (LCC) memilih armada pesawat bertipe seragam untuk menekan biaya perawatan dan mempercepat waktu perputaran di bandara.'
    },
    {
      id: 'mo-3',
      nomor: '1.2.3',
      subbab: '1.2',
      judul: 'Strategi Pengembangan Produk',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Pengembangan produk mengubah ide atau kebutuhan pelanggan menjadi produk/jasa yang dapat ditawarkan ke pasar.',
      isiMateri: `Pengembangan produk mengubah ide atau kebutuhan pelanggan menjadi produk/jasa yang dapat ditawarkan. Tahap umum meliputi pencarian dan penyaringan ide, analisis kelayakan, pengembangan konsep, desain, prototipe, pengujian, dan peluncuran. Keberhasilan dipengaruhi pemahaman pelanggan, biaya, teknologi, mutu, waktu ke pasar, dan koordinasi lintas fungsi.`,
      fokusUjian: 'Terangkan tahapan pengembangan produk dan pentingnya riset kebutuhan pelanggan.',
      poinKunci: [
        'Tahap: Penjaringan ide (idea generation), screening, analisis kelayakan bisnis, desain konsep, prototipe, uji pasar, dan komersialisasi.',
        'Pentingnya riset pasar: memastikan spesifikasi teknis sesuai dengan ekspektasi dan kesediaan membayar konsumen.',
        'Keterlibatan lintas fungsi (R&D, pemasaran, keuangan, dan operasi).'
      ],
      penjelasanPendukung: 'Pengembangan produk yang baik memanfaatkan metode Quality Function Deployment (QFD) untuk menerjemahkan suara pelanggan menjadi atribut rekayasa teknis.'
    },
    {
      id: 'mo-4',
      nomor: '1.2.4',
      subbab: '1.2',
      judul: 'Rencana Produk dan Proses Produksi',
      halamanPdf: 'Hal. 4',
      referensi: 'Handoko (2000); Heizer & Render (2004)',
      ringkasan: 'Perencanaan produk menetapkan karakteristik, spesifikasi, jumlah, dan target mutu. Perencanaan proses menentukan cara produk dibuat atau jasa diberikan.',
      isiMateri: `Perencanaan produk menetapkan karakteristik, spesifikasi, jumlah, dan target mutu. Perencanaan proses menentukan cara produk dibuat atau jasa diberikan, termasuk urutan kerja, teknologi, peralatan, tenaga kerja, dan standar. Pilihan proses dapat berupa proyek, job shop, batch, lini/massal, atau kontinu.`,
      fokusUjian: 'Bedakan jenis proses produksi dan kaitkan dengan volume serta variasi produk.',
      poinKunci: [
        'Proyek: variasi sangat tinggi, volume unik satu per satu (pembangunan jembatan/kapal).',
        'Job Shop: variasi tinggi, volume rendah (bengkel mesin pesanan khusus).',
        'Batch: variasi moderat, volume sedang secara bertahap (pabrik roti atau pakaian).',
        'Lini/Massal (Repetitive): variasi rendah, volume tinggi (perakitan elektronik atau mobil).',
        'Kontinu (Continuous): aliran produk tidak terputus, volume sangat tinggi (kilang minyak, pabrik semen).'
      ],
      penjelasanPendukung: 'Matriks Proses-Produk Hayes-Wheelwright menjadi landasan utama dalam memetakan kesesuaian antara volume dan variasi.'
    },
    {
      id: 'mo-5',
      nomor: '1.2.5',
      subbab: '1.2',
      judul: 'Lokasi dan Layout',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Lokasi menentukan tempat fasilitas operasi didirikan, sedangkan layout mengatur penempatan mesin, area kerja, gudang, dan aliran material/pelanggan.',
      isiMateri: `Lokasi menentukan tempat fasilitas operasi didirikan, sedangkan layout mengatur penempatan mesin, area kerja, gudang, dan aliran material/pelanggan. Faktor lokasi meliputi kedekatan pasar dan pemasok, tenaga kerja, infrastruktur, biaya lahan, regulasi, risiko, dan transportasi. Layout dapat berupa proses, produk/lini, posisi tetap, atau selular.`,
      fokusUjian: 'Jelaskan faktor lokasi dan perbedaan jenis tata letak.',
      poinKunci: [
        'Faktor penentu lokasi: kedekatan ke pasar vs kedekatan ke sumber bahan baku, ketersediaan upah tenaga kerja, infrastruktur jalan/pelabuhan, insentif pajak.',
        'Tata letak proses (functional): mesin sejenis dikelompokkan bersama untuk fleksibilitas.',
        'Tata letak produk (assembly line): mesin disusun berurutan mengikuti tahapan pembuatan produk.',
        'Tata letak posisi tetap (fixed-position): produk tetap di tempat, mesin dan pekerja mendatangi produk (pesawat terbang).',
        'Tata letak selular (cellular): pengelompokan mesin dalam sel kerja berbentuk U untuk keluarga suku cadang tertentu.'
      ]
    },
    {
      id: 'mo-6',
      nomor: '1.2.6',
      subbab: '1.2',
      judul: 'Perencanaan Kapasitas Produksi',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Kapasitas adalah kemampuan sistem menghasilkan barang/jasa dalam periode tertentu. Penyesuaian dilakukan melalui lembur, shift, subkontrak, atau penambahan mesin.',
      isiMateri: `Kapasitas adalah kemampuan sistem menghasilkan barang/jasa dalam periode tertentu. Perencanaan kapasitas membandingkan kapasitas tersedia dengan kebutuhan. Penyesuaian dapat dilakukan melalui lembur, shift, penambahan mesin, subkontrak, investasi fasilitas, atau perbaikan proses. Kapasitas berlebih menimbulkan biaya menganggur; kapasitas kurang dapat menyebabkan keterlambatan dan kehilangan pelanggan.`,
      fokusUjian: 'Pahami kapasitas desain, kapasitas efektif, output aktual, utilisasi, dan efisiensi.',
      poinKunci: [
        'Kapasitas Desain: output teoretis maksimum dalam kondisi ideal tanpa hambatan.',
        'Kapasitas Efektif: kapasitas realistis setelah memperhitungkan pemeliharaan dan jam istirahat.',
        'Output Aktual: laju produksi nyata yang berhasil diselesaikan.',
        'Utilisasi = (Output Aktual / Kapasitas Desain) × 100%',
        'Efisiensi = (Output Aktual / Kapasitas Efektif) × 100%'
      ],
      rumusAtauMetode: [
        'Utilisasi = (Output Aktual / Kapasitas Desain) × 100%',
        'Efisiensi = (Output Aktual / Kapasitas Efektif) × 100%'
      ]
    },
    {
      id: 'mo-7',
      nomor: '1.2.7',
      subbab: '1.2',
      judul: 'Ramalan Permintaan dan Rencana Produksi',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Peramalan memperkirakan kebutuhan pasar untuk menjadi dasar keputusan persediaan, kapasitas, tenaga kerja, dan jadwal produksi.',
      isiMateri: `Peramalan memperkirakan kebutuhan pasar untuk menjadi dasar keputusan persediaan, kapasitas, tenaga kerja, dan produksi. Metode kualitatif menggunakan pendapat ahli; metode kuantitatif menggunakan data historis, misalnya moving average dan exponential smoothing. Hasil ramalan mengandung kesalahan sehingga perlu dievaluasi. Rencana produksi menerjemahkan ramalan menjadi target jumlah dan waktu produksi.`,
      fokusUjian: 'Bedakan metode kualitatif dan kuantitatif serta fungsi pengukuran kesalahan ramalan.',
      poinKunci: [
        'Metode Kualitatif: Delphi method, survei pasar konsumen, juri opini eksekutif, gabungan tenaga penjual.',
        'Metode Kuantitatif: Time-series (Moving Average, Weighted Moving Average, Exponential Smoothing) dan Kaudal/Regresi.',
        'Pengukuran Kesalahan: MAD (Mean Absolute Deviation), MSE (Mean Squared Error), dan MAPE (Mean Absolute Percentage Error).'
      ],
      rumusAtauMetode: [
        'Ft = (At-1 + At-2 + ... + At-n) / n',
        'Ft = Ft-1 + α(At-1 - Ft-1)',
        'MAD = ∑ |Aktual - Ramalan| / n'
      ]
    },
    {
      id: 'mo-8',
      nomor: '1.2.8',
      subbab: '1.2',
      judul: 'Manajemen Kualitas',
      halamanPdf: 'Hal. 4',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Manajemen kualitas memastikan produk/jasa memenuhi spesifikasi dan harapan pelanggan secara konsisten.',
      isiMateri: `Manajemen kualitas memastikan produk/jasa memenuhi spesifikasi dan harapan pelanggan. Kegiatan mencakup perencanaan, penjaminan, pengendalian, dan perbaikan kualitas. Konsep terkait antara lain Total Quality Management, standardisasi, inspeksi, statistical process control, dan siklus PDCA. Kualitas berarti kesesuaian dengan kebutuhan pelanggan, bukan sekadar bebas cacat.`,
      fokusUjian: 'Jelaskan pencegahan cacat, pengendalian proses, biaya kualitas, dan perbaikan berkelanjutan.',
      poinKunci: [
        'Prinsip TQM: Fokus pada pelanggan, pelibatan seluruh karyawan, dan perbaikan berkelanjutan (Kaizen).',
        'Siklus PDCA: Plan - Do - Check - Act.',
        'Statistical Process Control (SPC): Peta kendali (Control Charts) untuk membedakan variasi umum dan variasi khusus.',
        'Empat Biaya Kualitas (Cost of Quality): Biaya Pencegahan, Penilaian, Kegagalan Internal, dan Kegagalan Eksternal.'
      ]
    },
    {
      id: 'mo-9',
      nomor: '1.2.9',
      subbab: '1.2',
      judul: 'Strategi SDM dalam Operasi',
      halamanPdf: 'Hal. 4–5',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Memastikan jumlah, kompetensi, penempatan, dan jadwal tenaga kerja sesuai kebutuhan proses operasional.',
      isiMateri: `Strategi SDM dalam operasi memastikan jumlah, kompetensi, penempatan, dan jadwal tenaga kerja sesuai kebutuhan proses. Aspeknya meliputi analisis pekerjaan, perencanaan tenaga kerja, pelatihan, pembagian tugas, pengukuran produktivitas, keselamatan, dan pengaturan shift.`,
      fokusUjian: 'Hubungkan kompetensi, produktivitas, keselamatan, dan kebutuhan tenaga kerja dengan target operasi.',
      poinKunci: [
        'Desain pekerjaan dan ergonomi di lingkungan fisik kerja.',
        'Pengukuran produktivitas tenaga kerja = Total Output / Total Jam Kerja.',
        'Penyusunan jadwal shift dan kepatuhan keselamatan kerja guna menjaga keandalan proses.'
      ]
    },
    {
      id: 'mo-10',
      nomor: '1.2.10',
      subbab: '1.2',
      judul: 'Manajemen Persediaan',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Menentukan kapan dan berapa banyak barang dipesan atau diproduksi agar biaya total persediaan seminimal mungkin.',
      isiMateri: `Persediaan adalah barang/sumber daya yang disimpan untuk mendukung produksi atau memenuhi permintaan, seperti bahan baku, barang dalam proses, barang jadi, dan perlengkapan. Manajemen persediaan menentukan kapan dan berapa banyak barang dipesan/diproduksi. Stok berlebih meningkatkan biaya simpan dan risiko usang; stok terlalu sedikit menimbulkan kehabisan barang dan gangguan proses.`,
      fokusUjian: 'Pahami biaya pesan, biaya simpan, biaya kekurangan, safety stock, reorder point, dan EOQ.',
      poinKunci: [
        'Tiga komponen biaya persediaan: Biaya Pemesanan (Ordering Cost / S), Biaya Penyimpanan (Holding Cost / H), dan Biaya Kekurangan (Stockout Cost).',
        'Economic Order Quantity (EOQ): Titik potong optimal saat total biaya pesan sama dengan total biaya simpan.',
        'Safety Stock (SS) dan Titik Pemesanan Kembali (Reorder Point / ROP) = (d × L) + SS.',
        'Klasifikasi ABC: Pengendalian berbasis Pareto 80/20.'
      ],
      rumusAtauMetode: [
        'EOQ = √((2 · D · S) / H)',
        'ROP = (d × L) + SS',
        'Total Biaya Persediaan (TIC) = (D/Q × S) + (Q/2 × H)'
      ]
    },
    {
      id: 'mo-11',
      nomor: '1.2.11',
      subbab: '1.2',
      judul: 'Perencanaan Kebutuhan Bahan Baku',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Material Requirements Planning (MRP) menggunakan jadwal induk produksi, bill of materials, dan catatan persediaan untuk menghitung kebutuhan bersih.',
      isiMateri: `Perencanaan kebutuhan bahan menentukan jenis, jumlah, dan waktu material dibutuhkan. Material Requirements Planning (MRP) menggunakan jadwal induk produksi, bill of materials, dan catatan persediaan untuk menghitung kebutuhan bersih dan waktu pemesanan. Perencanaan yang baik mengurangi kekurangan bahan, penumpukan stok, dan keterlambatan.`,
      fokusUjian: 'Jelaskan hubungan MPS, BOM, catatan persediaan, kebutuhan bruto/neto, dan lead time.',
      poinKunci: [
        'Tiga input utama MRP: Master Production Schedule (MPS), Bill of Materials (BOM), dan Catatan Persediaan (Inventory Records).',
        'Kebutuhan Bersih (Net Requirements) = Kebutuhan Kotor - Persediaan di Tangan - Penerimaan Terjadwal + Safety Stock.',
        'Penentuan saat pelepasan pesanan (planned order release) berdasarkan tenggang waktu (lead time).'
      ]
    },
    {
      id: 'mo-12',
      nomor: '1.2.12',
      subbab: '1.2',
      judul: 'Perencanaan Agregat',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Menyusun tingkat produksi, tenaga kerja, persediaan, dan kapasitas jangka menengah untuk menyeimbangkan permintaan dengan kemampuan operasi.',
      isiMateri: `Perencanaan agregat menyusun tingkat produksi, tenaga kerja, persediaan, dan kapasitas jangka menengah untuk menyeimbangkan permintaan dengan kemampuan operasi. Strateginya antara lain level (produksi relatif stabil), chase (produksi mengikuti permintaan), atau kombinasi. Pertimbangan biaya mencakup tenaga kerja, lembur, perekrutan, pengurangan tenaga kerja, persediaan, dan subkontrak.`,
      fokusUjian: 'Bandingkan strategi level dan chase serta dampaknya pada biaya dan persediaan.',
      poinKunci: [
        'Strategi Level: Laju produksi dan tenaga kerja dipertahankan konstan; surplus disimpan sebagai inventori, defisit dipenuhi dari persediaan.',
        'Strategi Chase: Laju produksi diubah persis mengikuti permintaan pasar melalui perekrutan/PHK tenaga kerja atau lembur.',
        'Kombinasi / Hybrid Strategy: Menyeimbangkan biaya penyimpanan dan biaya penyesuaian kapasitas.'
      ]
    },
    {
      id: 'mo-13',
      nomor: '1.2.13',
      subbab: '1.2',
      judul: 'Penjadwalan Jangka Pendek',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Menetapkan urutan dan waktu pekerjaan pada mesin, stasiun kerja, atau tenaga kerja untuk memenuhi tenggat.',
      isiMateri: `Penjadwalan jangka pendek menetapkan urutan dan waktu pekerjaan pada mesin, stasiun kerja, atau tenaga kerja. Tujuannya memenuhi tenggat, mengurangi waktu menganggur, meminimalkan waktu penyelesaian, dan menggunakan sumber daya secara efektif. Alatnya antara lain diagram Gantt dan aturan prioritas FCFS, SPT, EDD, atau rasio kritis.`,
      fokusUjian: 'Pahami urutan pekerjaan, waktu proses, due date, dan ukuran keterlambatan.',
      poinKunci: [
        'FCFS (First Come First Served): Berdasarkan urutan kedatangan pesanan.',
        'SPT (Shortest Processing Time): Memprioritaskan waktu kerja tersingkat (meminimalkan waktu alir rata-rata).',
        'EDD (Earliest Due Date): Memprioritaskan pesanan dengan batas tenggat terdekat (meminimalkan keterlambatan maksimum).',
        'Diagram Gantt untuk pemuatan dan pemantauan utilisasi mesin.'
      ]
    },
    {
      id: 'mo-14',
      nomor: '1.2.14',
      subbab: '1.2',
      judul: 'Manajemen Rantai Pasok',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004)',
      ringkasan: 'Mengoordinasikan aliran barang, informasi, dan dana dari pemasok hulu hingga pelanggan hilir.',
      isiMateri: `Manajemen rantai pasok mengoordinasikan aliran barang, informasi, dan dana dari pemasok hingga pelanggan. Aktivitasnya mencakup pengadaan, hubungan pemasok, produksi, pergudangan, transportasi, distribusi, dan pengembalian. Koordinasi yang baik meningkatkan ketepatan pasokan, menekan biaya total, memperpendek waktu pemenuhan, dan memperbaiki layanan.`,
      fokusUjian: 'Jelaskan aliran hulu–hilir, koordinasi pemasok, distribusi, dan risiko gangguan rantai pasok.',
      poinKunci: [
        'Tiga aliran utama: Aliran fisik barang (hulu ke hilir), aliran informasi permintaan (hilir ke hulu), dan aliran dana/pembayaran.',
        'Mitigasi fenomena Bullwhip Effect melalui integrasi informasi dan transparansi data pesanan (Point of Sale).',
        'Manajemen risiko disrupsi pasokan dan kolaborasi logistik terpadu.'
      ]
    },
    {
      id: 'mo-15',
      nomor: '1.2.15',
      subbab: '1.2',
      judul: 'Manajemen Pemeliharaan Sistem Produksi',
      halamanPdf: 'Hal. 5',
      referensi: 'Heizer & Render (2004); Handoko (2000)',
      ringkasan: 'Menjaga atau mengembalikan mesin, peralatan, dan fasilitas agar berfungsi optimal dan mencegah downtime tak terduga.',
      isiMateri: `Pemeliharaan menjaga atau mengembalikan mesin, peralatan, dan fasilitas agar berfungsi. Corrective maintenance dilakukan setelah kerusakan; preventive maintenance dijadwalkan untuk mengurangi kemungkinan kerusakan; predictive maintenance menggunakan pemantauan kondisi. Pemeliharaan mengurangi downtime, biaya kerusakan, risiko kecelakaan, dan gangguan produksi.`,
      fokusUjian: 'Bedakan corrective, preventive, dan predictive maintenance serta pahami downtime dan keandalan.',
      poinKunci: [
        'Corrective/Breakdown Maintenance: Perbaikan reaktif setelah terjadi kerusakan mesin.',
        'Preventive Maintenance: Perawatan berkala terjadwal (pelumasan, pembersihan, penggantian suku cadang aus).',
        'Predictive Maintenance: Pemantauan kondisi secara langsung (sensor getaran, termografi suhu) sebelum terjadi kerusakan.',
        'Total Productive Maintenance (TPM) dan indikator Overall Equipment Effectiveness (OEE).'
      ]
    }
  ]
};
