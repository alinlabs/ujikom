import { ExamQuestion } from '../../../types/exam';

export const sdmQuestions: ExamQuestion[] = [
  {
    id: 'soal-sdm-01',
    bidangId: 'sdm',
    topikId: 'sdm-1',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu memahami pandangan modern terhadap karyawan sebagai aset berharga perusahaan.',
    pertanyaan: 'Dalam manajemen sumber daya manusia (MSDM) modern, cara pandang perusahaan yang paling tepat terhadap para pekerjanya adalah memperlakukan karyawan sebagai...',
    options: [
      { key: 'A', text: 'Beban biaya yang harus ditekan dan dikurangi sebanyak-banyaknya.' },
      { key: 'B', text: 'Aset modal manusia (human capital) yang sangat berharga dan perlu dikembangkan kemampuannya.' },
      { key: 'C', text: 'Mesin mekanik yang dapat dipaksa bekerja tanpa istirahat siang malam.' },
      { key: 'D', text: 'Pihak yang tidak berhak mendapatkan hak upah dan jaminan kesehatan.' },
    ],
    kunciJawaban: 'B',
    pembahasan: 'Pendekatan MSDM modern memposisikan karyawan bukan sekadar tenaga suruhan atau pos beban biaya, melainkan aset bernilai tinggi (human capital). Karyawan yang terampil, bermotivasi tinggi, dan diperlakukan adil akan menciptakan kemajuan dan keunggulan bagi usaha/perusahaan.',
    referensiBuku: 'Noe et al. (2016), Manajemen Sumber Daya Manusia, Bab Ruang Lingkup MSDM.',
    halamanPdf: 'Hal. 11'
  },
  {
    id: 'soal-sdm-02',
    bidangId: 'sdm',
    topikId: 'sdm-2',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu membedakan tujuan pelatihan kerja dan pengembangan karir karyawan.',
    pertanyaan: 'Sebuah perusahaan logistik di Purwakarta memberikan kursus kilat cara mengoperasikan sistem komputer gudang kepada staf admin yang baru masuk agar bisa langsung bekerja lancar. Kegiatan peningkatan keahlian untuk pekerjaan saat ini disebut..., sedangkan pembinaan wawasan kepemimpinan untuk masa depan disebut...',
    options: [
      { key: 'A', text: 'Pelatihan kerja (training) ; Pengembangan karir (development)' },
      { key: 'B', text: 'Pemutusan hubungan kerja ; Skorsing' },
      { key: 'C', text: 'Pemberian sanksi ; Pemotongan gaji' },
      { key: 'D', text: 'Izin cuti melahirkan ; Uang pesangon' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Pelatihan (training) bertujuan meningkatkan keterampilan teknis agar karyawan mampu melaksanakan tugas pekerjaannya saat ini dengan benar. Sedangkan pengembangan (development) berfokus pada wawasan jangka panjang dan pembentukan jiwa kepemimpinan untuk jenjang karir berikutnya.',
    referensiBuku: 'Noe et al. (2016), Manajemen Sumber Daya Manusia, Bab Pelatihan dan Pengembangan.',
    halamanPdf: 'Hal. 11'
  },
  {
    id: 'soal-sdm-03',
    bidangId: 'sdm',
    topikId: 'sdm-3',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu memahami prinsip keadilan dan objektivitas dalam penilaian kinerja karyawan.',
    pertanyaan: 'Dalam melakukan penilaian kinerja karyawan di sebuah toserba di Purwakarta, supervisor wajib bersikap adil dan objektif. Yang dimaksud dengan penilaian kinerja yang objektif adalah...',
    options: [
      { key: 'A', text: 'Memberikan nilai bagus hanya kepada karyawan yang sering membawakan oleh-oleh makanan ke rumah atasan.' },
      { key: 'B', text: 'Menilai berdasarkan pencapaian target kerja nyata, kedisiplinan, dan standar hasil kerja yang telah disepakati bersama.' },
      { key: 'C', text: 'Memberikan nilai buruk kepada semua karyawan agar tidak ada yang meminta kenaikan upah.' },
      { key: 'D', text: 'Mengundi nilai secara acak menggunakan lemparan koin.' },
    ],
    kunciJawaban: 'B',
    pembahasan: 'Penilaian kinerja yang adil dan objektif didasarkan pada bukti nyata hasil kerja, kedisiplinan, perilaku, dan pencapaian target yang jelas, bukan berdasarkan faktor kedekatan pribadi (nepotisme) atau perasaan suka/tidak suka semata.',
    referensiBuku: 'Noe et al. (2016), Manajemen Sumber Daya Manusia, Bab Penilaian Kinerja Karyawan.',
    halamanPdf: 'Hal. 11'
  },
  {
    id: 'soal-sdm-04',
    bidangId: 'sdm',
    topikId: 'sdm-4',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu menjelaskan asas keadilan dalam pemberian gaji dan kompensasi.',
    pertanyaan: 'Pemberian gaji dan tunjangan karyawan pada sebuah pabrik garmen di Purwakarta diatur sedemikian rupa sehingga karyawan yang memegang tanggung jawab lebih besar dan memiliki keahlian teknis khusus mendapatkan gaji pokok yang lebih tinggi. Prinsip keadilan kompensasi ini disebut...',
    options: [
      { key: 'A', text: 'Keadilan internal (imbalan sebanding dengan bobot tanggung jawab dan kesulitan pekerjaan di dalam perusahaan).' },
      { key: 'B', text: 'Kecurangan pengupahan' },
      { key: 'C', text: 'Penyeragaman gaji seluruh tingkatan dari manajer hingga pesuruh sama rata' },
      { key: 'D', text: 'Kekacauan administrasi kantor' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Keadilan internal (internal equity) memastikan bahwa besaran gaji di dalam satu perusahaan mencerminkan perbedaan tanggung jawab, keahlian yang dibutuhkan, dan risiko tugas antar-jabatan sehingga tercipta rasa keadilan di lingkungan kerja.',
    referensiBuku: 'Noe et al. (2016), Manajemen Sumber Daya Manusia, Bab Manajemen Kompensasi.',
    halamanPdf: 'Hal. 12'
  },
  {
    id: 'soal-sdm-05',
    bidangId: 'sdm',
    topikId: 'sdm-5',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu menjelaskan pentingnya Keselamatan dan Kesehatan Kerja (K3) pada kawasan industri di Purwakarta.',
    pertanyaan: 'Pekerja pabrik manufaktur di Kawasan Industri Bukit Indah City (BIC) Purwakarta diwajibkan selalu memakai helm pelindung, sepatu pengaman (safety shoes), dan masker saat berada di area mesin produksi. Tujuan utama dari aturan Keselamatan dan Kesehatan Kerja (K3) ini adalah...',
    options: [
      { key: 'A', text: 'Mencegah terjadinya kecelakaan kerja dan melindungi kesehatan serta keselamatan fisik pekerja.' },
      { key: 'B', text: 'Membuat para pekerja merasa gerah dan tidak nyaman selama bekerja.' },
      { key: 'C', text: 'Membuat pabrik terlihat seperti lokasi syuting film perang.' },
      { key: 'D', text: 'Menghabiskan anggaran kas perusahaan untuk belanja peralatan yang tidak berguna.' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Tujuan utama Keselamatan dan Kesehatan Kerja (K3) adalah menciptakan lingkungan kerja yang aman, sehat, dan nyaman serta mencegah terjadinya kecelakaan kerja maupun penyakit akibat kerja, sehingga produktivitas dan kesejahteraan karyawan tetap terjaga.',
    referensiBuku: 'Noe et al. (2016), Manajemen Sumber Daya Manusia, Bab Keselamatan dan Kesehatan Kerja.',
    halamanPdf: 'Hal. 12'
  },
  {
    id: 'soal-sdm-06',
    bidangId: 'sdm',
    topikId: 'sdm-6',
    type: 'pilihan_ganda',
    tingkatKesulitan: 'mudah',
    indikatorPenilaian: 'Mampu mengidentifikasi cara memotivasi karyawan selain melalui imbalan uang/gaji.',
    pertanyaan: 'Pemilik restoran Sate Maranggi di Purwakarta ingin agar karyawannya selalu bersemangat dan ramah dalam melayani tamu. Selain memberikan gaji yang tepat waktu, langkah motivasi non-finansial yang sangat efektif dilakukan oleh pemilik usaha adalah...',
    options: [
      { key: 'A', text: 'Memberikan pujian tulus atas kerja keras karyawan, penghargaan karyawan teladan bulanan, dan menciptakan suasana kerja yang rukun.' },
      { key: 'B', text: 'Memarahi karyawan di depan pelanggan setiap ada kesalahan kecil.' },
      { key: 'C', text: 'Menambah jam kerja karyawan tanpa ada waktu istirahat dan makan siang.' },
      { key: 'D', text: 'Melarang sesama karyawan untuk saling menyapa dan tersenyum.' },
    ],
    kunciJawaban: 'A',
    pembahasan: 'Motivasi kerja tidak hanya bersumber dari materi/uang, melainkan juga dari faktor non-finansial seperti pengakuan dan penghargaan atas prestasi kerja, perhatian pimpinan, lingkungan kerja yang saling mendukung, dan kesempatan untuk berkembang.',
    referensiBuku: 'Noe et al. (2016), Manajemen Sumber Daya Manusia, Bab Motivasi dan Hubungan Karyawan.',
    halamanPdf: 'Hal. 12'
  },
  {
    id: 'soal-sdm-07',
    bidangId: 'sdm',
    topikId: 'sdm-1',
    type: 'tanya_jawab_lisan',
    tingkatKesulitan: 'sedang',
    indikatorPenilaian: 'Kemampuan menjelaskan fungsi-fungsi pokok Manajemen Sumber Daya Manusia secara terstruktur dan sederhana.',
    pertanyaan: 'Sebutkan dan jelaskan secara singkat fungsi-fungsi pokok yang dijalankan dalam Manajemen Sumber Daya Manusia (mulai dari penerimaan pegawai hingga pemeliharaan karyawan) pada sebuah organisasi atau perusahaan!',
    rubrikPenilaianLisan: {
      kriteriaUtama: 'Kemampuan menyebutkan tahapan rekrutmen/seleksi, pelatihan, penilaian kinerja, kompensasi, dan pemeliharaan hubungan kerja.',
      ekspektasiJawaban: [
        '1. Pengadaan Tenaga Kerja (Rekrutmen & Seleksi): Mengumumkan lowongan kerja dan memilih calon karyawan yang paling sesuai dengan kebutuhan usaha.',
        '2. Pelatihan dan Pengembangan: Memberikan pembekalan keterampilan agar karyawan terampil bekerja dan siap memegang tanggung jawab yang lebih tinggi.',
        '3. Penilaian Kinerja: Mengevaluasi hasil dan kedisiplinan kerja karyawan secara berkala dan objektif.',
        '4. Kompensasi dan Balas Jasa: Memberikan gaji, upah lembur, tunjangan, dan bonus yang adil dan tepat waktu.',
        '5. Pemeliharaan dan Hubungan Kerja: Menjaga keselamatan kerja (K3), kesehatan, keharmonisan komunikasi, dan kesejahteraan karyawan agar betah dan loyal bekerja di perusahaan.'
      ],
      kataKunciWajib: ['Rekrutmen dan Seleksi', 'Pelatihan kerja', 'Penilaian kinerja', 'Kompensasi / Gaji', 'Kesejahteraan dan K3']
    },
    pembahasan: 'Pertanyaan umum dan mendasar pada ujian sidang lisan komprehensif Program Studi Manajemen.',
    referensiBuku: 'Noe et al. (2016), Manajemen Sumber Daya Manusia, Bab Fungsi-Fungsi Pokok MSDM.',
    halamanPdf: 'Hal. 11'
  }
];
