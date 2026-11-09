import { ExamQuestion } from '../../../types/exam';

/**
 * BANK SOAL MANAJEMEN SUMBER DAYA MANUSIA (BAB 4)
 * Berdasarkan Panduan Ujian Komprehensif S1 Manajemen STIE Wibawa Karta Raharja Purwakarta
 * 
 * STRUKTUR HIERARKI:
 * Manajemen Sumber Daya Manusia
 *  └── Pokok Pembahasan (1 s/d 5)
 *       ├── Variasi 1: Definisi / Pengertian Mendasar ("Apa pengertian / Apa yang dimaksud...")
 *       ├── Variasi 2: Unsur-unsur / Komponen Pokok ("Sebutkan unsur-unsur / Apa saja komponen...")
 *       ├── Variasi 3: Pemahaman Konsep / Esensi ("Apa yang Anda ketahui tentang...")
 *       ├── Variasi 4: Tujuan / Fungsi / Peranan Utama ("Apa tujuan utama / fungsi pokok...")
 *       └── Variasi 5: Bentuk Penerapan / Contoh Nyata ("Contoh nyata / Dalam praktiknya...")
 * 
 * Total: 5 Pokok Pembahasan x 5 Variasi = 25 Butir Soal To-the-Point
 */

export const sdmQuestions: ExamQuestion[] = [
  // ==========================================================================
  // POKOK PEMBAHASAN 1: Ruang Lingkup dan Perkembangan MSDM (4.2.1)
  // ==========================================================================
  {
    id: 'soal-sdm-01-1',
    bidangId: 'sdm',
    topikId: 'sdm-1',
    pokokBahasanNomor: '4.2.1',
    pokokBahasanJudul: 'Ruang Lingkup dan Perkembangan Manajemen Sumber Daya Manusia',
    variasiIndex: 1,
    tipeVariasi: 'definisi',
    indikatorPenilaian: 'Mampu menjelaskan definisi MSDM.',
    pertanyaan: 'Apa yang dimaksud dengan Manajemen Sumber Daya Manusia (MSDM)?',
    transkripFonetis: 'Apa yang dimaksud dengan Manajemen Sumber Daya Manusia, yaitu Em-Es-De-Em?',
    options: [
      { key: 'A', text: 'Kebijakan, praktik, dan sistem yang mengelola dan memberdayakan aspek manusia dalam organisasi untuk mencapai tujuan strategis perusahaan.' },
      { key: 'B', text: 'Kegiatan membagikan jatah seragam dan sepatu dinas kepada seluruh petugas kebersihan.' },
      { key: 'C', text: 'Proses menghitung sisa bahan baku kain yang tersimpan di dalam gudang.' },
      { key: 'D', text: 'Pencatatan nomor seri seluruh mesin cetak yang dimiliki oleh perusahaan.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Menurut Noe et al. (2016), MSDM merujuk pada kebijakan, praktik, dan sistem terpadu yang memengaruhi perilaku, sikap, dan kinerja karyawan dalam rangka mencapai keunggulan kompetitif organisasi.',
    kataKunciUtama: ['kebijakan praktik sistem mengelola manusia', 'mencapai tujuan strategis perusahaan', 'manajemen sumber daya manusia msdm'],
    sinonimBilingual: {
      'human resource management': ['manajemen sumber daya manusia', 'msdm', 'hrm'],
      'competitive advantage': ['keunggulan kompetitif', 'keunggulan bersaing'],
    },
    pembahasan: 'MSDM memandang manusia bukan sebagai beban biaya melainkan aset modal manusia (human capital) paling berharga yang menggerakkan seluruh roda bisnis.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-01-2',
    bidangId: 'sdm',
    topikId: 'sdm-1',
    pokokBahasanNomor: '4.2.1',
    pokokBahasanJudul: 'Ruang Lingkup dan Perkembangan Manajemen Sumber Daya Manusia',
    variasiIndex: 2,
    tipeVariasi: 'unsur',
    indikatorPenilaian: 'Mampu menyebutkan fungsi-fungsi operasional MSDM.',
    pertanyaan: 'Sebutkan fungsi-fungsi operasional utama dalam manajemen sumber daya manusia!',
    transkripFonetis: 'Sebutkan fungsi-fungsi operasional utama dalam manajemen sumber daya manusia!',
    options: [
      { key: 'A', text: 'Pengadaan (Procurement/Rekrutmen), Pengembangan (Development), Kompensasi (Compensation), Pengintegrasian (Integration), dan Pemeliharaan (Maintenance).' },
      { key: 'B', text: 'Pemasaran, Penjualan, Distribusi, Iklan, dan Diskon.' },
      { key: 'C', text: 'Pembelian, Penyimpanan, Pemotongan, Penjahitan, dan Pengepakan.' },
      { key: 'D', text: 'Peminjaman, Penanaman, Penganggaran, Perpajakan, dan Pengauditan.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Fungsi operasional MSDM mencakup: (1) Pengadaan tenaga kerja (analisis jabatan, rekrutmen, seleksi), (2) Pengembangan (pelatihan dan karir), (3) Kompensasi (upah dan insentif), (4) Integrasi (hubungan kerja harmonis), dan (5) Pemeliharaan (K3 dan retensi).',
    kataKunciUtama: ['pengadaan procurement', 'pengembangan development', 'kompensasi compensation', 'pemeliharaan maintenance', 'fungsi operasional msdm'],
    sinonimBilingual: {
      'hr operational functions': ['fungsi operasional sdm', 'tugas operasional hrd'],
    },
    pembahasan: 'Kelima fungsi ini mencakup siklus hidup lengkap seorang pekerja sejak melamar masuk kantor hingga saat memasuki masa pensiun.',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-01-3',
    bidangId: 'sdm',
    topikId: 'sdm-1',
    pokokBahasanNomor: '4.2.1',
    pokokBahasanJudul: 'Ruang Lingkup dan Perkembangan Manajemen Sumber Daya Manusia',
    variasiIndex: 3,
    tipeVariasi: 'konsep',
    indikatorPenilaian: 'Mampu menjelaskan konsep Strategic HRM (SHRM).',
    pertanyaan: 'Apa yang Anda ketahui tentang pergeseran dari administrasi personalia tradisional menuju Strategic HRM (SHRM)?',
    transkripFonetis: 'Apa yang Anda ketahui tentang pergeseran dari administrasi personalia tradisional menuju Strategic Eits-Ar-Em, yaitu Es-Eits-Ar-Em?',
    options: [
      { key: 'A', text: 'MSDM tidak lagi sekadar mengurusi urusan administratif absensi dan berkas gaji, melainkan menjadi mitra strategis bisnis yang merancang kompetensi talenta demi mendukung visi jangka panjang perusahaan.' },
      { key: 'B', text: 'Seluruh berkas dokumen kertas diganti dengan buku tulis bergaris yang lebih tebal.' },
      { key: 'C', text: 'Bagian personalia dipindahkan ruangannya ke lantai paling atas gedung perkantoran.' },
      { key: 'D', text: 'Perusahaan menghapuskan seluruh sistem pemberian gaji dan menggantinya dengan uang koin.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Strategic HRM menghubungkan praktik-praktik SDM secara langsung dengan sasaran strategis perusahaan, menjadikan divisi SDM sebagai mitra strategis (strategic partner) yang proaktif membangun kapabilitas daya saing organisasi.',
    kataKunciUtama: ['mitra strategis bisnis', 'merancang kompetensi talenta', 'strategic hrm shrm', 'visi jangka panjang perusahaan'],
    sinonimBilingual: {
      'strategic hrm': ['manajemen sdm strategis', 'shrm', 'mitra strategis bisnis'],
    },
    pembahasan: 'Jika administrasi personalia hanya sibuk mencatat siapa yang terlambat hari ini, maka Strategic HRM merencanakan keahlian apa yang harus dimiliki pegawai agar perusahaan bisa berekspansi ke pasar luar negeri.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-01-4',
    bidangId: 'sdm',
    topikId: 'sdm-1',
    pokokBahasanNomor: '4.2.1',
    pokokBahasanJudul: 'Ruang Lingkup dan Perkembangan Manajemen Sumber Daya Manusia',
    variasiIndex: 4,
    tipeVariasi: 'tujuan_fungsi',
    indikatorPenilaian: 'Mampu menjelaskan tujuan utama MSDM.',
    pertanyaan: 'Apa tujuan utama dari pengelolaan SDM yang profesional di sebuah perusahaan?',
    transkripFonetis: 'Apa tujuan utama dari pengelolaan Es-De-Em yang profesional di sebuah perusahaan?',
    options: [
      { key: 'A', text: 'Menempatkan orang yang tepat pada posisi yang tepat (the right man on the right place) untuk mencapai kinerja maksimal dan kepuasan kerja karyawan.' },
      { key: 'B', text: 'Memaksimalkan denda pemotongan upah agar kas perusahaan bertambah.' },
      { key: 'C', text: 'Memastikan semua karyawan tidak memiliki waktu luang untuk keluarga di rumah.' },
      { key: 'D', text: 'Menghindari keikutsertaan dalam program jaminan sosial ketenagakerjaan pemerintah.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Tujuan utama MSDM adalah mengoptimalkan kesesuaian antara kompetensi individu dengan tuntutan jabatan (person-job fit) guna mendorong produktivitas kerja tinggi sekaligus memelihara motivasi dan kesejahteraan pekerja.',
    kataKunciUtama: ['the right man on the right place', 'orang tepat posisi tepat', 'kinerja maksimal kepuasan kerja', 'tujuan msdm'],
    sinonimBilingual: {
      'the right man on the right place': ['orang tepat di posisi tepat', 'kesesuaian jabatan'],
      'person job fit': ['kesesuaian orang dengan jabatan', 'kecocokan kerja'],
    },
    pembahasan: 'Menugaskan orang berbakat di bidang yang sesuai keahliannya akan melahirkan hasil kerja luar biasa dan membuat karyawan merasa bahagia serta dihargai di tempat kerja.',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-01-5',
    bidangId: 'sdm',
    topikId: 'sdm-1',
    pokokBahasanNomor: '4.2.1',
    pokokBahasanJudul: 'Ruang Lingkup dan Perkembangan Manajemen Sumber Daya Manusia',
    variasiIndex: 5,
    tipeVariasi: 'contoh_penerapan',
    indikatorPenilaian: 'Mampu mengidentifikasi contoh penerapan analisis jabatan (Job Analysis).',
    pertanyaan: 'Sebelum membuka lowongan kerja, manajer HRD mengumpulkan informasi rinci mengenai tugas apa saja yang harus dikerjakan, tanggung jawabnya, serta kualifikasi pendidikan dan pengalaman yang wajib dimiliki calon pelamar. Proses penyusunan ini dinamakan...',
    transkripFonetis: 'Sebelum membuka lowongan kerja, manajer Eits-Ar-Di mengumpulkan informasi rinci mengenai tugas apa saja yang harus dikerjakan, tanggung jawabnya, serta kualifikasi pendidikan dan pengalaman yang wajib dimiliki calon pelamar. Proses penyusunan ini dinamakan?',
    options: [
      { key: 'A', text: 'Analisis Jabatan (Job Analysis) yang menghasilkan Deskripsi dan Spesifikasi Jabatan.' },
      { key: 'B', text: 'Pemberian Sanksi Indisipliner Karyawan.' },
      { key: 'C', text: 'Pengundian Arisan Bulanan Staf Kantor.' },
      { key: 'D', text: 'Perhitungan Pajak Bumi dan Bangunan Pabrik.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Analisis Jabatan (Job Analysis) adalah proses sistematis mengidentifikasi tugas, kewajiban, dan tanggung jawab pekerjaan (Job Description), serta keahlian, pengetahuan, dan kualifikasi minimum seseorang untuk mendudukinya (Job Specification).',
    kataKunciUtama: ['analisis jabatan job analysis', 'deskripsi jabatan job description', 'spesifikasi jabatan job specification', 'tugas dan kualifikasi'],
    sinonimBilingual: {
      'job analysis': ['analisis jabatan', 'analisis pekerjaan'],
      'job description': ['deskripsi jabatan', 'uraian tugas pekerjaan'],
      'job specification': ['spesifikasi jabatan', 'persyaratan pelamar'],
    },
    pembahasan: 'Tanpa analisis jabatan yang jelas, perusahaan tidak akan tahu profil orang seperti apa yang harus dicari dan apa saja tugas nyata yang harus ia emban nanti.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },

  // ==========================================================================
  // POKOK PEMBAHASAN 2: Perekrutan, Pelatihan, dan Pengembangan (4.2.2)
  // ==========================================================================
  {
    id: 'soal-sdm-02-1',
    bidangId: 'sdm',
    topikId: 'sdm-2',
    pokokBahasanNomor: '4.2.2',
    pokokBahasanJudul: 'Perekrutan, Pelatihan, dan Pengembangan',
    variasiIndex: 1,
    tipeVariasi: 'definisi',
    indikatorPenilaian: 'Mampu membedakan pengertian rekrutmen dan seleksi.',
    pertanyaan: 'Apa perbedaan mendasar antara proses rekrutmen (recruitment) dengan proses seleksi (selection)?',
    transkripFonetis: 'Apa perbedaan mendasar antara proses rekrutmen, yaitu recruitment, dengan proses seleksi, yaitu selection?',
    options: [
      { key: 'A', text: 'Rekrutmen adalah proses mencari dan menarik sekumpulan calon pelamar yang berpotensi, sedangkan seleksi adalah proses menyaring dan memilih kandidat terbaik dari kumpulan pelamar tersebut.' },
      { key: 'B', text: 'Rekrutmen dilakukan oleh bagian keuangan, sedangkan seleksi dilakukan oleh bagian satpam.' },
      { key: 'C', text: 'Rekrutmen bertujuan memecat karyawan lama, sedangkan seleksi bertujuan menaikkan upah.' },
      { key: 'D', text: 'Keduanya merupakan istilah yang persis sama dan tidak ada bedanya sama sekali.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Rekrutmen bersifat positif (mengundang dan menarik sebanyak mungkin orang berkualitas untuk melamar), sedangkan seleksi bersifat negatif/eliminatif (menyaring melalui tes, wawancara, dan tes kesehatan untuk memilih yang terbaik).',
    kataKunciUtama: ['rekrutmen menarik calon pelamar', 'seleksi menyaring dan memilih kandidat terbaik', 'perbedaan rekrutmen dan seleksi'],
    sinonimBilingual: {
      'recruitment and selection': ['perekrutan dan penyeleksian', 'rekrutmen dan seleksi'],
    },
    pembahasan: 'Ibarat mencari mutiara: rekrutmen adalah mengumpulkan banyak kerang dari dasar laut, sedangkan seleksi adalah membuka kerang satu per satu untuk menemukan mutiara terbaik.',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-02-2',
    bidangId: 'sdm',
    topikId: 'sdm-2',
    pokokBahasanNomor: '4.2.2',
    pokokBahasanJudul: 'Perekrutan, Pelatihan, dan Pengembangan',
    variasiIndex: 2,
    tipeVariasi: 'unsur',
    indikatorPenilaian: 'Mampu menyebutkan sumber rekrutmen internal dan eksternal.',
    pertanyaan: 'Sebutkan saluran sumber rekrutmen calon tenaga kerja internal dan eksternal!',
    transkripFonetis: 'Sebutkan saluran sumber rekrutmen calon tenaga kerja internal dan eksternal!',
    options: [
      { key: 'A', text: 'Sumber Internal (promosi jabatan, rotasi, referensi karyawan) dan Sumber Eksternal (iklan media, kampus universitas, bursa kerja/job fair, lembaga penyalur).'},
      { key: 'B', text: 'Buku Tabungan Internal dan Buku Giro Eksternal.' },
      { key: 'C', text: 'Jalan Tol Internal dan Jalan Raya Eksternal.' },
      { key: 'D', text: 'Kamera CCTV Depan dan Kamera CCTV Belakang.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Perekrutan internal merekrut dari karyawan yang sudah ada (hemat biaya dan mendongkrak motivasi kerja), sedangkan perekrutan eksternal menjaring talenta baru dari luar organisasi (membawa ide segar dan keahlian baru).',
    kataKunciUtama: ['sumber internal promosi rotasi', 'sumber eksternal iklan universitas job fair', 'saluran rekrutmen'],
    sinonimBilingual: {
      'internal and external recruitment': ['rekrutmen internal dan eksternal', 'sumber perekrutan'],
    },
    pembahasan: 'Perusahaan bijak menyeimbangkan keduanya: memberikan kesempatan promosi bagi orang dalam, sambil menyuntikkan ide baru dengan merekrut orang luar yang berkompeten.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-02-3',
    bidangId: 'sdm',
    topikId: 'sdm-2',
    pokokBahasanNomor: '4.2.2',
    pokokBahasanJudul: 'Perekrutan, Pelatihan, dan Pengembangan',
    variasiIndex: 3,
    tipeVariasi: 'konsep',
    indikatorPenilaian: 'Mampu menjelaskan perbedaan pelatihan (training) vs pengembangan (development).',
    pertanyaan: 'Apa yang Anda ketahui tentang perbedaan fokus antara program pelatihan (training) dengan program pengembangan (development)?',
    transkripFonetis: 'Apa yang Anda ketahui tentang perbedaan fokus antara program pelatihan, yaitu training, dengan program pengembangan, yaitu development?',
    options: [
      { key: 'A', text: 'Pelatihan berfokus pada penguasaan keterampilan teknis untuk pekerjaan saat ini dalam jangka pendek, sedangkan pengembangan berfokus pada pembentukan kompetensi kepemimpinan untuk karier masa depan jangka panjang.' },
      { key: 'B', text: 'Pelatihan hanya diberikan kepada pimpinan, sedangkan pengembangan hanya untuk pekerja kasar.' },
      { key: 'C', text: 'Pelatihan wajib dibayar oleh karyawan, sedangkan pengembangan dibiayai pemerintah.' },
      { key: 'D', text: 'Pelatihan berlangsung selama sepuluh tahun, sedangkan pengembangan berlangsung satu jam.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Pelatihan (training) bersifat jangka pendek dan berorientasi pada peningkatan kinerja pada tugas saat ini (current job). Pengembangan (development) berorientasi masa depan (future oriented) guna mempersiapkan pegawai menghadapi tanggung jawab peran baru yang lebih kompleks.',
    kataKunciUtama: ['pelatihan teknis pekerjaan saat ini jangka pendek', 'pengembangan kepemimpinan masa depan jangka panjang', 'training vs development'],
    sinonimBilingual: {
      'training vs development': ['pelatihan vs pengembangan', 'diklat sdm'],
    },
    pembahasan: 'Mengajari kasir cara memakai mesin scanner baru adalah pelatihan (training); mengirim manajer muda kuliah S2 manajemen untuk calon direktur adalah pengembangan (development).',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-02-4',
    bidangId: 'sdm',
    topikId: 'sdm-2',
    pokokBahasanNomor: '4.2.2',
    pokokBahasanJudul: 'Perekrutan, Pelatihan, dan Pengembangan',
    variasiIndex: 4,
    tipeVariasi: 'tujuan_fungsi',
    indikatorPenilaian: 'Mampu menjelaskan tujuan Analisis Kebutuhan Pelatihan (TNA).',
    pertanyaan: 'Apa tujuan utama dilakukannya Analisis Kebutuhan Pelatihan (Training Needs Assessment / TNA) sebelum merancang program kursus karyawan?',
    transkripFonetis: 'Apa tujuan utama dilakukannya Analisis Kebutuhan Pelatihan, yaitu Treining Nids Esesmen atau Ti-En-Ey, sebelum merancang program kursus karyawan?',
    options: [
      { key: 'A', text: 'Mengetahui kesenjangan kompetensi nyata antara keterampilan yang dimiliki karyawan saat ini dengan standar kerja yang diharapkan agar pelatihan tepat sasaran dan hemat biaya.' },
      { key: 'B', text: 'Menghabiskan anggaran sisa kantor agar tidak ditarik kembali oleh pemilik modal.' },
      { key: 'C', text: 'Memilih tempat hotel wisata mewah untuk acara liburan akhir pekan bersama.' },
      { key: 'D', text: 'Menentukan jadwal pembagian uang saku makan siang gratis.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'TNA (mencakup analisis organisasi, analisis tugas, dan analisis personel) memastikan bahwa masalah kinerja memang disebabkan oleh kekurangan keterampilan yang dapat diselesaikan lewat pelatihan, bukan karena mesin yang rusak atau motivasi yang rendah.',
    kataKunciUtama: ['kesenjangan kompetensi nyata', 'standar kerja yang diharapkan', 'pelatihan tepat sasaran', 'training needs assessment tna'],
    sinonimBilingual: {
      'training needs assessment': ['analisis kebutuhan pelatihan', 'tna', 'analisis kebutuhan diklat'],
    },
    pembahasan: 'Jangan memberikan pelatihan kepemimpinan jika masalah sebenarnya adalah komputer kasir yang lemot; TNA mendiagnosis dengan tepat apa akar masalahnya.',
    referensiBuku: 'Noe, R. A. et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-02-5',
    bidangId: 'sdm',
    topikId: 'sdm-2',
    pokokBahasanNomor: '4.2.2',
    pokokBahasanJudul: 'Perekrutan, Pelatihan, dan Pengembangan',
    variasiIndex: 5,
    tipeVariasi: 'contoh_penerapan',
    indikatorPenilaian: 'Mampu mengidentifikasi contoh evaluasi pelatihan model Kirkpatrick.',
    pertanyaan: 'Sebuah perusahaan mengukur keberhasilan pelatihan layanan pelanggan dengan melihat peningkatan skor kepuasan pelanggan di aplikasi dan lonjakan omzet toko setelah karyawan selesai ikut kursus. Menurut Model Kirkpatrick, evaluasi ini berada pada level...',
    transkripFonetis: 'Sebuah perusahaan mengukur keberhasilan pelatihan layanan pelanggan dengan melihat peningkatan skor kepuasan pelanggan di aplikasi dan lonjakan omzet toko setelah karyawan selesai ikut kursus. Menurut Model Kirkpatrick, evaluasi ini berada pada level?',
    options: [
      { key: 'A', text: 'Tingkat 4: Hasil Akhir Bisnis (Results).' },
      { key: 'B', text: 'Tingkat 1: Reaksi Kepuasan Peserta (Reaction).' },
      { key: 'C', text: 'Tingkat 0: Kehadiran Absensi Ruangan.' },
      { key: 'D', text: 'Tingkat Ujian Tulis Soal Pilihan Ganda.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Empat level evaluasi Kirkpatrick: Level 1 (Reaction / reaksi peserta), Level 2 (Learning / ujian ilmu), Level 3 (Behavior / perubahan perilaku kerja di lapangan), dan Level 4 (Results / dampak nyata pada indikator bisnis seperti omzet, efisiensi, dan kepuasan pelanggan).',
    kataKunciUtama: ['tingkat 4 hasil bisnis results', 'peningkatan kepuasan pelanggan dan omzet', 'model evaluasi kirkpatrick'],
    sinonimBilingual: {
      'kirkpatrick evaluation model': ['model evaluasi kirkpatrick', 'empat level evaluasi diklat'],
    },
    pembahasan: 'Tujuan akhir dari pelatihan karyawan bukanlah sekadar peserta merasa senang saat makan siang pelatihan, melainkan membuahkan hasil nyata bagi omzet dan kinerja perusahaan (Level 4 Results).',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },

  // ==========================================================================
  // POKOK PEMBAHASAN 3: Penilaian dan Peningkatan Kinerja (4.2.3)
  // ==========================================================================
  {
    id: 'soal-sdm-03-1',
    bidangId: 'sdm',
    topikId: 'sdm-3',
    pokokBahasanNomor: '4.2.3',
    pokokBahasanJudul: 'Penilaian dan Peningkatan Kinerja',
    variasiIndex: 1,
    tipeVariasi: 'definisi',
    indikatorPenilaian: 'Mampu menjelaskan definisi penilaian kinerja.',
    pertanyaan: 'Apa yang dimaksud dengan penilaian kinerja (performance appraisal) dalam organisasi?',
    transkripFonetis: 'Apa yang dimaksud dengan penilaian kinerja, yaitu Performens Epreisal, dalam organisasi?',
    options: [
      { key: 'A', text: 'Proses evaluasi sistematis terhadap pelaksanaan pekerjaan dan pencapaian hasil kerja seorang pegawai berdasarkan standar objektif yang telah disepakati bersama.' },
      { key: 'B', text: 'Pemeriksaan saldo rekening pribadi pegawai oleh staf bagian akuntansi.' },
      { key: 'C', text: 'Lomba karya cipta lagu dan puisi antar divisi saat hari kemerdekaan.' },
      { key: 'D', text: 'Penimbangan berat badan dan tinggi badan karyawan sebelum libur panjang.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Penilaian kinerja adalah evaluasi berkala dan formal mengenai seberapa baik karyawan melaksanakan tugas pekerjaannya dibandingkan dengan standar yang telah ditetapkan, disertai sesi umpan balik perbaikan.',
    kataKunciUtama: ['evaluasi sistematis pelaksanaan pekerjaan', 'pencapaian hasil kerja standar objektif', 'penilaian kinerja performance appraisal'],
    sinonimBilingual: {
      'performance appraisal': ['penilaian kinerja', 'evaluasi prestasi kerja', 'penilaian prestasi'],
    },
    pembahasan: 'Penilaian kinerja menjadi cermin bagi pegawai untuk mengetahui apa saja prestasinya yang bagus dan bagian mana yang perlu diperbaiki di masa depan.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-03-2',
    bidangId: 'sdm',
    topikId: 'sdm-2',
    pokokBahasanNomor: '4.2.3',
    pokokBahasanJudul: 'Penilaian dan Peningkatan Kinerja',
    variasiIndex: 2,
    tipeVariasi: 'unsur',
    indikatorPenilaian: 'Mampu menyebutkan metode-metode penilaian kinerja.',
    pertanyaan: 'Sebutkan metode-metode penilaian kinerja pegawai yang umum diterapkan di dunia kerja profesional!',
    transkripFonetis: 'Sebutkan metode-metode penilaian kinerja pegawai yang umum diterapkan di dunia kerja profesional!',
    options: [
      { key: 'A', text: 'Skala Penilaian Grafis (Graphic Rating Scale), Umpan Balik 360 Derajat (360-Degree Feedback), Manajemen Berdasarkan Sasaran (MBO), dan Skala Perilaku BARS.' },
      { key: 'B', text: 'Metode Lempar Koin, Kocok Dadu, dan Tebak Angka.' },
      { key: 'C', text: 'Metode Bunga Bank, Bunga Majemuk, dan Bunga Anuitas.' },
      { key: 'D', text: 'Metode Cetak Koran, Siaran Radio, dan Spanduk Jalan.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Metode penilaian mencakup Graphic Rating Scales (skala nilai sifat/kinerja), BARS (Behaviorally Anchored Rating Scales), MBO (Management by Objectives berbasis target terukur), dan 360-degree feedback yang mengumpulkan masukan dari berbagai sudut pandang.',
    kataKunciUtama: ['graphic rating scale', '360 degree feedback', 'manajemen berdasarkan sasaran mbo', 'skala perilaku bars'],
    sinonimBilingual: {
      'performance evaluation methods': ['metode penilaian kinerja', 'teknik penilaian karyawan'],
    },
    pembahasan: 'Setiap metode memiliki keunggulan; MBO sangat cocok untuk posisi eksekutif berbasis target, sedangkan BARS sangat objektif untuk pekerjaan operasional.',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-03-3',
    bidangId: 'sdm',
    topikId: 'sdm-3',
    pokokBahasanNomor: '4.2.3',
    pokokBahasanJudul: 'Penilaian dan Peningkatan Kinerja',
    variasiIndex: 3,
    tipeVariasi: 'konsep',
    indikatorPenilaian: 'Mampu menjelaskan bias penilaian Halo Effect.',
    pertanyaan: 'Apa yang Anda ketahui tentang kesalahan bias Halo Effect dalam penilaian kinerja karyawan?',
    transkripFonetis: 'Apa yang Anda ketahui tentang kesalahan bias Halo Effect dalam penilaian kinerja karyawan?',
    options: [
      { key: 'A', text: 'Kecenderungan penilai memberikan nilai tinggi pada semua aspek kinerja hanya karena terpesona oleh satu karakteristik positif yang menonjol (seperti paras menarik atau keramahan).' },
      { key: 'B', text: 'Pemasangan lampu sorot bundar di atas panggung ruang rapat pimpinan.' },
      { key: 'C', text: 'Kewajiban karyawan mengenakan topi putih saat berada di ruang pendingin.' },
      { key: 'D', text: 'Pemberian hadiah kue ulang tahun kepada staf yang genap berusia tiga puluh tahun.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Halo Effect adalah distorsi kognitif di mana kesan positif umum pada satu karakteristik tertentu (misalnya karyawan sangat sopan atau berpenampilan rapi) membuat penilai secara keliru menganggap karyawan tersebut hebat di semua bidang tugas lainnya.',
    kataKunciUtama: ['nilai tinggi pada semua aspek', 'terpesona oleh satu karakteristik positif', 'halo effect', 'bias penilaian'],
    sinonimBilingual: {
      'halo effect': ['efek halo', 'bias halo'],
    },
    pembahasan: 'Kebalikan dari halo effect adalah horn effect (satu kekurangan kecil membuat seluruh kinerja karyawan dianggap buruk semua). Penilai yang adil harus mampu menilai setiap indikator tugas secara terpisah dan objektif.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-03-4',
    bidangId: 'sdm',
    topikId: 'sdm-3',
    pokokBahasanNomor: '4.2.3',
    pokokBahasanJudul: 'Penilaian dan Peningkatan Kinerja',
    variasiIndex: 4,
    tipeVariasi: 'tujuan_fungsi',
    indikatorPenilaian: 'Mampu menjelaskan kegunaan hasil penilaian kinerja.',
    pertanyaan: 'Apa kegunaan utama data hasil penilaian kinerja bagi pengambilan keputusan manajemen SDM?',
    transkripFonetis: 'Apa kegunaan utama data hasil penilaian kinerja bagi pengambilan keputusan manajemen Es-De-Em?',
    options: [
      { key: 'A', text: 'Sebagai dasar objektif keputusan promosi jabatan, penyesuaian gaji/bonus insentif, dan penetapan program pelatihan perbaikan.' },
      { key: 'B', text: 'Sebagai bahan obrolan santai antar karyawan saat jam istirahat.' },
      { key: 'C', text: 'Menghapuskan kewajiban perusahaan membayar tunjangan hari raya keagamaan.' },
      { key: 'D', text: 'Membuat karyawan merasa cemas dan tidak berani bertanya kepada atasan.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Hasil penilaian kinerja memiliki dua fungsi krusial: fungsi administratif (dasar gaji, promosi, mutasi, atau pemutusan hubungan kerja) dan fungsi pengembangan (memberi umpan balik kekuatan/kelemahan dan perencanaan pelatihan lanjutan).',
    kataKunciUtama: ['dasar promosi jabatan', 'penyesuaian gaji bonus insentif', 'program pelatihan perbaikan', 'kegunaan penilaian kinerja'],
    sinonimBilingual: {
      'administrative and developmental uses': ['fungsi administratif dan pengembangan'],
    },
    pembahasan: 'Tanpa penilaian kinerja yang adil dan transparan, pemberian bonus atau kenaikan pangkat akan dicurigai sarat dengan unsur pilih kasih (nepotisme).',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-03-5',
    bidangId: 'sdm',
    topikId: 'sdm-3',
    pokokBahasanNomor: '4.2.3',
    pokokBahasanJudul: 'Penilaian dan Peningkatan Kinerja',
    variasiIndex: 5,
    tipeVariasi: 'contoh_penerapan',
    indikatorPenilaian: 'Mampu mengidentifikasi contoh penerapan penilaian 360-Degree Feedback.',
    pertanyaan: 'Seorang manajer dievaluasi kinerjanya bukan hanya oleh direktur atasannya, melainkan juga menerima masukan rahasia dari rekan kerja sejajar dan para staf bawahannya. Metode evaluasi menyeluruh ini dinamakan...',
    transkripFonetis: 'Seorang manajer dievaluasi kinerjanya bukan hanya oleh direktur atasannya, melainkan juga menerima masukan rahasia dari rekan kerja sejajar dan para staf bawahannya. Metode evaluasi menyeluruh ini dinamakan?',
    options: [
      { key: 'A', text: 'Umpan Balik 360 Derajat (360-Degree Performance Feedback).' },
      { key: 'B', text: 'Pemeriksaan Latar Belakang Kejaksaan Negeri.' },
      { key: 'C', text: 'Pengawasan Kamera Tersembunyi Ruang Kerja.' },
      { key: 'D', text: 'Ujian Nasional Berbasis Komputer Kantor.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Metode 360-degree feedback mengumpulkan penilaian komprehensif dari seluruh lingkaran kerja individu: atasan langsung, rekan sejawat (peers), bawahan langsung (subordinates), diri sendiri (self-evaluation), dan bahkan pelanggan.',
    kataKunciUtama: ['umpan balik 360 derajat', '360 degree feedback', 'masukan atasan rekan sejawat bawahan', 'evaluasi menyeluruh'],
    sinonimBilingual: {
      '360 degree feedback': ['umpan balik 360 derajat', 'penilaian multi-sumber', 'multi rater feedback'],
    },
    pembahasan: 'Metode 360 derajat sangat ampuh menilai kepemimpinan: bos yang bersikap manis di depan direktur tetapi menindas staf bawahannya akan terungkap dengan metode ini.',
    referensiBuku: 'Noe, R. A. et al. (2016), Human Resource Management.'
  },

  // ==========================================================================
  // POKOK PEMBAHASAN 4: Kompensasi (Gaji dan Balas Jasa) (4.2.4)
  // ==========================================================================
  {
    id: 'soal-sdm-04-1',
    bidangId: 'sdm',
    topikId: 'sdm-4',
    pokokBahasanNomor: '4.2.4',
    pokokBahasanJudul: 'Kompensasi (Gaji dan Balas Jasa)',
    variasiIndex: 1,
    tipeVariasi: 'definisi',
    indikatorPenilaian: 'Mampu menjelaskan definisi kompensasi.',
    pertanyaan: 'Apa yang dimaksud dengan kompensasi dalam manajemen sumber daya manusia?',
    transkripFonetis: 'Apa yang dimaksud dengan kompensasi dalam manajemen sumber daya manusia?',
    options: [
      { key: 'A', text: 'Seluruh bentuk imbalan finansial maupun non-finansial yang diterima karyawan sebagai balas jasa atas pekerjaan dan kontribusi yang mereka berikan kepada organisasi.' },
      { key: 'B', text: 'Uang denda yang dibayarkan oleh perusahaan kepada kantor dinas kebersihan kota.' },
      { key: 'C', text: 'Potongan harga belanja khusus pakaian seragam di toko koperasi kantor.' },
      { key: 'D', text: 'Bantuan santunan sukarela yang dikumpulkan oleh sesama teman sekantor.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Kompensasi mencakup seluruh penghargaan moneter dan non-moneter (gaji pokok, tunjangan, asuransi, bonus prestasi, hingga lingkungan kerja yang menyenangkan) yang diberikan pengusaha sebagai timbal balik atas curahan waktu dan tenaga pekerja.',
    kataKunciUtama: ['seluruh bentuk imbalan finansial dan non-finansial', 'balas jasa atas pekerjaan kontribusi', 'kompensasi total rewards'],
    sinonimBilingual: {
      'compensation': ['kompensasi', 'balas jasa pegawai', 'imbalan kerja'],
      'total rewards': ['total imbalan', 'paket kompensasi'],
    },
    pembahasan: 'Kompensasi bukan hanya sebatas uang gaji pokok; fasilitas asuransi kesehatan, mobil dinas, hingga kesempatan pelatihan ke luar negeri adalah bagian dari kompensasi.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-04-2',
    bidangId: 'sdm',
    topikId: 'sdm-4',
    pokokBahasanNomor: '4.2.4',
    pokokBahasanJudul: 'Kompensasi (Gaji dan Balas Jasa)',
    variasiIndex: 2,
    tipeVariasi: 'unsur',
    indikatorPenilaian: 'Mampu menyebutkan komponen kompensasi finansial langsung dan tidak langsung.',
    pertanyaan: 'Sebutkan contoh komponen kompensasi finansial langsung dan finansial tidak langsung!',
    transkripFonetis: 'Sebutkan contoh komponen kompensasi finansial langsung dan finansial tidak langsung!',
    options: [
      { key: 'A', text: 'Finansial Langsung: Gaji pokok, upah per jam, insentif, dan komisi. Finansial Tidak Langsung: Asuransi kesehatan (BPJS), dana pensiun, tunjangan hari raya, dan jatah cuti berbayar.' },
      { key: 'B', text: 'Finansial Langsung: Kursi kantor dan meja kerja. Finansial Tidak Langsung: Komputer jinjing dan tetikus kabel.' },
      { key: 'C', text: 'Finansial Langsung: Kuitansi belanja. Finansial Tidak Langsung: Nota pembelian.' },
      { key: 'D', text: 'Finansial Langsung: Sandal jepit. Finansial Tidak Langsung: Sepatu kerja.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Kompensasi finansial langsung (direct financial) langsung masuk ke rekening dalam bentuk uang tunai (gaji/komisi). Kompensasi finansial tidak langsung (indirect financial/benefits) berupa tunjangan kesejahteraan, proteksi asuransi, dan program pensiun.',
    kataKunciUtama: ['finansial langsung gaji komisi', 'finansial tidak langsung asuransi bpjs pensiun cuti', 'komponen kompensasi'],
    sinonimBilingual: {
      'direct and indirect compensation': ['kompensasi langsung dan tidak langsung', 'gaji dan tunjangan benefits'],
    },
    pembahasan: 'Kompensasi tidak langsung sering disebut tunjangan (fringe benefits); meski tidak diterima dalam bentuk uang tunai harian, nilainya sangat berharga untuk perlindungan hidup karyawan.',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-04-3',
    bidangId: 'sdm',
    topikId: 'sdm-4',
    pokokBahasanNomor: '4.2.4',
    pokokBahasanJudul: 'Kompensasi (Gaji dan Balas Jasa)',
    variasiIndex: 3,
    tipeVariasi: 'konsep',
    indikatorPenilaian: 'Mampu menjelaskan prinsip keadilan internal vs keadilan eksternal pengupahan.',
    pertanyaan: 'Apa yang Anda ketahui tentang konsep keadilan internal (internal equity) dan keadilan eksternal (external equity) dalam penetapan struktur gaji?',
    transkripFonetis: 'Apa yang Anda ketahui tentang konsep keadilan internal, yaitu internal equity, dan keadilan eksternal, yaitu external equity, dalam penetapan struktur gaji?',
    options: [
      { key: 'A', text: 'Keadilan internal menjamin gaji adil antarkaryawan di dalam perusahaan berdasarkan bobot tanggung jawab jabatan, sedangkan keadilan eksternal memastikan gaji kompetitif sebanding dengan standar pasar perusahaan sejenis di luar.' },
      { key: 'B', text: 'Keadilan internal hanya untuk staf pria, sedangkan keadilan eksternal untuk staf wanita.' },
      { key: 'C', text: 'Keadilan internal dihitung berdasarkan golongan darah, sedangkan eksternal berdasarkan zodiak.' },
      { key: 'D', text: 'Keadilan internal tidak memperbolehkan pegawai makan di luar kantor.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Keadilan internal dicapai lewat Evaluasi Jabatan (Job Evaluation) agar pekerjaan lebih berat digaji lebih tinggi secara adil. Keadilan eksternal dicapai lewat Survei Gaji (Salary Survey) agar karyawan andalan tidak dibajak oleh perusahaan pesaing.',
    kataKunciUtama: ['keadilan internal adil antarkaryawan bobot jabatan', 'keadilan eksternal kompetitif standar pasar sejenis', 'keadilan pengupahan'],
    sinonimBilingual: {
      'internal and external equity': ['keadilan internal dan eksternal', 'keadilan sistem gaji'],
      'job evaluation': ['evaluasi jabatan', 'penilaian bobot jabatan'],
      'salary survey': ['survei gaji pasar', 'pembandingan upah pasar'],
    },
    pembahasan: 'Jika keadilan internal pincang, karyawan saling iri; jika keadilan eksternal pincang, karyawan berprestasi akan beramai-ramai mengundurkan diri pindah ke kantor pesaing.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-04-4',
    bidangId: 'sdm',
    topikId: 'sdm-4',
    pokokBahasanNomor: '4.2.4',
    pokokBahasanJudul: 'Kompensasi (Gaji dan Balas Jasa)',
    variasiIndex: 4,
    tipeVariasi: 'tujuan_fungsi',
    indikatorPenilaian: 'Mampu menjelaskan fungsi pemberian kompensasi berbasis kinerja (Pay-for-Performance).',
    pertanyaan: 'Apa tujuan pokok perusahaan menerapkan skema kompensasi berbasis kinerja (Pay-for-Performance / Merit Pay)?',
    transkripFonetis: 'Apa tujuan pokok perusahaan menerapkan skema kompensasi berbasis kinerja, yaitu Pey for Performens atau Merit Pey?',
    options: [
      { key: 'A', text: 'Memotivasi karyawan untuk bekerja lebih giat dan berprestasi, menyelaraskan tujuan individu dengan profitabilitas perusahaan, dan menghargai mereka yang berkinerja unggul.' },
      { key: 'B', text: 'Mengurangi jumlah pekerja tetap agar seluruh pekerjaan ditangani mesin pabrik.' },
      { key: 'C', text: 'Menghapuskan kewajiban membayar upah minimum yang ditetapkan oleh pemerintah.' },
      { key: 'D', text: 'Membuat karyawan merasa cemas setiap kali pergantian bulan tiba.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Sistem pay-for-performance (seperti bonus kinerja, bagi hasil, atau kenaikan gaji berbasis prestasi) menciptakan hubungan yang jelas antara usaha dengan imbalan, sehingga merangsang produktivitas dan menahan karyawan berprestasi (high performers).',
    kataKunciUtama: ['memotivasi bekerja giat berprestasi', 'menyelaraskan tujuan individu dengan laba perusahaan', 'pay for performance merit pay'],
    sinonimBilingual: {
      'pay for performance': ['upah berbasis kinerja', 'gaji berdasarkan prestasi', 'merit pay'],
    },
    pembahasan: 'Sistem gaji yang sama rata antara pegawai yang rajin bekerja keras dengan pegawai yang malas akan memicu rasa ketidakadilan dan memadamkan semangat juang karyawan terbaik.',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-04-5',
    bidangId: 'sdm',
    topikId: 'sdm-4',
    pokokBahasanNomor: '4.2.4',
    pokokBahasanJudul: 'Kompensasi (Gaji dan Balas Jasa)',
    variasiIndex: 5,
    tipeVariasi: 'contoh_penerapan',
    indikatorPenilaian: 'Mampu mengidentifikasi contoh penerapan evaluasi jabatan (Job Evaluation).',
    pertanyaan: 'Sebuah komite HRD menilai bobot tanggung jawab jabatan Manajer Pabrik lebih berat daripada jabatan Supervisor Produksi dari segi keahlian, dampak finansial, dan risiko tugas untuk menentukan tingkat golongan pangkat gajinya. Proses perbandingan bobot pekerjaan ini dinamakan...',
    transkripFonetis: 'Sebuah komite Eits-Ar-Di menilai bobot tanggung jawab jabatan Manajer Pabrik lebih berat daripada jabatan Supervisor Produksi dari segi keahlian, dampak finansial, dan risiko tugas untuk menentukan tingkat golongan pangkat gajinya. Proses perbandingan bobot pekerjaan ini dinamakan?',
    options: [
      { key: 'A', text: 'Evaluasi Jabatan (Job Evaluation).' },
      { key: 'B', text: 'Penetapan Upah Lembur Hari Libur.' },
      { key: 'C', text: 'Survei Angka Inflasi Daerah.' },
      { key: 'D', text: 'Perhitungan Pajak Penghasilan Pasal 21.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Evaluasi Jabatan (Job Evaluation) adalah proses sistematis menentukan nilai relatif atau bobot suatu pekerjaan dalam hubungannya dengan pekerjaan lain di organisasi untuk menyusun struktur upah dan skala gaji (pay grade) yang adil.',
    kataKunciUtama: ['evaluasi jabatan job evaluation', 'menilai bobot tanggung jawab jabatan', 'menentukan tingkat golongan pangkat gaji'],
    sinonimBilingual: {
      'job evaluation': ['evaluasi jabatan', 'penilaian bobot pekerjaan'],
    },
    pembahasan: 'Evaluasi jabatan memastikan jabatan yang memerlukan keahlian langka dan menanggung risiko triliunan rupiah dihargai dengan skala gaji yang selaras dan berkeadilan.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },

  // ==========================================================================
  // POKOK PEMBAHASAN 5: Hubungan Industrial dan K3 (4.2.5)
  // ==========================================================================
  {
    id: 'soal-sdm-05-1',
    bidangId: 'sdm',
    topikId: 'sdm-5',
    pokokBahasanNomor: '4.2.5',
    pokokBahasanJudul: 'Hubungan Industrial dan Keselamatan Kerja (K3)',
    variasiIndex: 1,
    tipeVariasi: 'definisi',
    indikatorPenilaian: 'Mampu menjelaskan definisi Keselamatan dan Kesehatan Kerja (K3).',
    pertanyaan: 'Apa yang dimaksud dengan Keselamatan dan Kesehatan Kerja (K3) di tempat kerja?',
    transkripFonetis: 'Apa yang dimaksud dengan Keselamatan dan Kesehatan Kerja, yaitu Ka Tiga, di tempat kerja?',
    options: [
      { key: 'A', text: 'Kondisi dan upaya untuk menjamin keutuhan dan kesempurnaan jasmani serta rohani pekerja guna mencegah terjadinya kecelakaan kerja dan penyakit akibat kerja.' },
      { key: 'B', text: 'Aturan mewajibkan karyawan memotong rambut pendek setiap hari senin pagi.' },
      { key: 'C', text: 'Kebijakan mematikan seluruh lampu gedung saat jam makan siang berlangsung.' },
      { key: 'D', text: 'Sistem pemberian denda tilang parkir kendaraan roda dua di halaman kantor.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'K3 (Occupational Safety and Health) adalah bidang ilmu dan praktik terencana untuk menciptakan tempat kerja yang aman, sehat, dan bebas dari bahaya kecelakaan fisik maupun penyakit akibat kerja, serta melindungi aset perusahaan.',
    kataKunciUtama: ['mencegah kecelakaan kerja penyakit akibat kerja', 'kesempurnaan jasmani dan rohani pekerja', 'keselamatan dan kesehatan kerja k3'],
    sinonimBilingual: {
      'occupational safety and health': ['keselamatan dan kesehatan kerja', 'k3', 'osh'],
      'work accident prevention': ['pencegahan kecelakaan kerja'],
    },
    pembahasan: 'K3 menjamin bahwa setiap pekerja yang berangkat bekerja di pagi hari dalam keadaan sehat dapat kembali pulang ke keluarganya di sore hari dengan selamat dan sehat.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-05-2',
    bidangId: 'sdm',
    topikId: 'sdm-5',
    pokokBahasanNomor: '4.2.5',
    pokokBahasanJudul: 'Hubungan Industrial dan Keselamatan Kerja (K3)',
    variasiIndex: 2,
    tipeVariasi: 'unsur',
    indikatorPenilaian: 'Mampu menyebutkan tiga pihak utama (tripartit) hubungan industrial.',
    pertanyaan: 'Sebutkan tiga pihak pelaku utama (Tripartit) dalam sistem hubungan industrial di Indonesia menurut undang-undang!',
    transkripFonetis: 'Sebutkan tiga pihak pelaku utama, yaitu Tripartit, dalam sistem hubungan industrial di Indonesia menurut undang-undang!',
    options: [
      { key: 'A', text: 'Pekerja / Serikat Pekerja (Labor), Pengusaha / Asosiasi Pengusaha (Employer), dan Pemerintah (Government).' },
      { key: 'B', text: 'Petani, Pedagang, dan Konsumen.' },
      { key: 'C', text: 'Dokter, Perawat, dan Pasien.' },
      { key: 'D', text: 'Masinis, Kondektur, dan Penumpang.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Hubungan industrial adalah sistem hubungan yang terbentuk antara para pelaku dalam proses produksi barang/jasa yang terdiri atas unsur Pengusaha, Pekerja/Buruh, dan Pemerintah yang didasarkan pada nilai-nilai Pancasila dan UUD 1945.',
    kataKunciUtama: ['pekerja serikat pekerja', 'pengusaha asosiasi pengusaha', 'pemerintah', 'tiga pihak tripartit hubungan industrial'],
    sinonimBilingual: {
      'tripartite industrial relations': ['hubungan industrial tripartit', 'tiga pihak hubungan kerja'],
    },
    pembahasan: 'Pekerja menyumbang tenaga, pengusaha menyediakan modal dan lapangan kerja, sedangkan pemerintah bertindak sebagai regulator yang menetapkan undang-undang dan pengawas kepatuhan.',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-05-3',
    bidangId: 'sdm',
    topikId: 'sdm-5',
    pokokBahasanNomor: '4.2.5',
    pokokBahasanJudul: 'Hubungan Industrial dan Keselamatan Kerja (K3)',
    variasiIndex: 3,
    tipeVariasi: 'konsep',
    indikatorPenilaian: 'Mampu menjelaskan konsep Perjanjian Kerja Bersama (PKB).',
    pertanyaan: 'Apa yang Anda ketahui tentang Perjanjian Kerja Bersama (PKB) atau Collective Bargaining Agreement?',
    transkripFonetis: 'Apa yang Anda ketahui tentang Perjanjian Kerja Bersama, yaitu Pe-Ka-Be, atau Collective Bargaining Agreement?',
    options: [
      { key: 'A', text: 'Perjanjian tertulis hasil perundingan bersama antara serikat pekerja dengan pengusaha yang memuat syarat-syarat kerja, hak, dan kewajiban kedua belah pihak.' },
      { key: 'B', text: 'Surat tilang yang diberikan satpam kepada karyawan yang membuang puntung rokok sembarangan.' },
      { key: 'C', text: 'Katalog harga barang dagangan yang ditawarkan kepada pembeli di pasar.' },
      { key: 'D', text: 'Daftar nama seluruh kerabat pemilik perusahaan yang berhak mendapatkan warisan.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Perjanjian Kerja Bersama (PKB) merupakan dokumen kesepakatan hukum mengikat hasil musyawarah mufakat (collective bargaining) antara perwakilan serikat pekerja dan pengusaha yang mengatur hak, kewajiban, tata tertib, dan fasilitas kesejahteraan kerja.',
    kataKunciUtama: ['perjanjian hasil perundingan serikat pekerja dan pengusaha', 'syarat kerja hak dan kewajiban', 'perjanjian kerja bersama pkb'],
    sinonimBilingual: {
      'collective bargaining agreement': ['perjanjian kerja bersama', 'pkb', 'kesepakatan kerja bersama'],
    },
    pembahasan: 'PKB menjadi undang-undang internal perusahaan yang menjamin kepastian hukum sehingga perselisihan kerja dapat dicegah dan diselesaikan secara damai.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-05-4',
    bidangId: 'sdm',
    topikId: 'sdm-5',
    pokokBahasanNomor: '4.2.5',
    pokokBahasanJudul: 'Hubungan Industrial dan Keselamatan Kerja (K3)',
    variasiIndex: 4,
    tipeVariasi: 'tujuan_fungsi',
    indikatorPenilaian: 'Mampu menjelaskan tujuan hirarki pengendalian bahaya K3.',
    pertanyaan: 'Apa tujuan utama penerapan Hierarki Pengendalian Bahaya (Hierarchy of Hazard Controls) di tempat kerja manufaktur?',
    transkripFonetis: 'Apa tujuan utama penerapan Hierarki Pengendalian Bahaya, yaitu Hairarki of Hazard Kontrols, di tempat kerja manufaktur?',
    options: [
      { key: 'A', text: 'Mengeliminasi atau mengendalikan sumber potensi bahaya kecelakaan kerja mulai dari tingkat yang paling efektif (menghilangkan bahaya) hingga tingkat proteksi terakhir (alat pelindung diri/APD).' },
      { key: 'B', text: 'Menghindari biaya pembelian helm keselamatan bagi para teknisi lapangan.' },
      { key: 'C', text: 'Meniadakan jadwal istirahat siang agar target produksi cepat tercapai.' },
      { key: 'D', text: 'Memperbolehkan pekerja mengoperasikan mesin berputar tanpa penutup pengaman.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Hierarki K3 menetapkan urutan langkah proteksi: (1) Eliminasi bahaya, (2) Substitusi bahan berbahaya, (3) Rekayasa teknik (engineering controls), (4) Pengendalian administratif (prosedur/SOP), dan terakhir (5) Alat Pelindung Diri (APD/PPE).',
    kataKunciUtama: ['mengeliminasi atau mengendalikan sumber bahaya', 'dari yang paling efektif hingga apd', 'hierarki pengendalian bahaya k3'],
    sinonimBilingual: {
      'hierarchy of controls': ['hierarki pengendalian bahaya', 'tata cara proteksi k3'],
      'personal protective equipment': ['alat pelindung diri', 'apd'],
    },
    pembahasan: 'APD seperti helm dan masker adalah garis pertahanan terakhir; langkah paling utama dan efektif adalah merekayasa mesin agar tidak berbahaya bagi manusia.',
    referensiBuku: 'Noe et al. (2016), Human Resource Management.'
  },
  {
    id: 'soal-sdm-05-5',
    bidangId: 'sdm',
    topikId: 'sdm-5',
    pokokBahasanNomor: '4.2.5',
    pokokBahasanJudul: 'Hubungan Industrial dan Keselamatan Kerja (K3)',
    variasiIndex: 5,
    tipeVariasi: 'contoh_penerapan',
    indikatorPenilaian: 'Mampu mengidentifikasi contoh penerapan musyawarah Bipartit.',
    pertanyaan: 'Ketika terjadi perselisihan mengenai jadwal lembur malam, pimpinan manajer perusahaan dan perwakilan pengurus serikat pekerja pabrik duduk bersama di ruang rapat untuk berunding mencari mufakat tanpa melibatkan pejabat pemerintah. Proses penyelesaian sengketa internal ini dinamakan...',
    transkripFonetis: 'Ketika terjadi perselisihan mengenai jadwal lembur malam, pimpinan manajer perusahaan dan perwakilan pengurus serikat pekerja pabrik duduk bersama di ruang rapat untuk berunding mencari mufakat tanpa melibatkan pejabat pemerintah. Proses penyelesaian sengketa internal ini dinamakan?',
    options: [
      { key: 'A', text: 'Perundingan Bipartit.' },
      { key: 'B', text: 'Pemberitahuan Mogok Kerja Terbuka.' },
      { key: 'C', text: 'Gugatan Perdata Mahkamah Konstitusi.' },
      { key: 'D', text: 'Pemberhentian Massal Seluruh Karyawan.' },
    ],
    kunciJawaban: 'A',
    kunciJawabanDeskriptif: 'Perundingan Bipartit adalah musyawarah langsung antara dua pihak utama (pengusaha dan serikat pekerja/karyawan) untuk menyelesaikan perselisihan hubungan industrial secara kekeluargaan di tingkat internal perusahaan terlebih dahulu.',
    kataKunciUtama: ['perundingan bipartit', 'musyawarah dua pihak internal', 'serikat pekerja dan pengusaha', 'penyelesaian sengketa'],
    sinonimBilingual: {
      'bipartite negotiation': ['perundingan bipartit', 'musyawarah bipartit'],
    },
    pembahasan: 'Hukum ketenagakerjaan mewajibkan jalur bipartit ditempuh terlebih dahulu selama maksimal 30 hari kerja sebelum meminta mediasi pemerintah (tripartit) atau ke Pengadilan Hubungan Industrial.',
    referensiBuku: 'Noe, R. A., Hollenbeck, J. R., Gerhart, B., & Wright, P. M. (2016), Human Resource Management.'
  },
];
