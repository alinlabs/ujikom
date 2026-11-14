import { ExamQuestion } from '../../../types/exam';

// ============================================================================
// 1. Kamus Bilingual & Tesaurus Manajemen Terpadu (Indonesia - English)
// ============================================================================

export interface SynonymEntry {
  concept: string;
  idTerms: string[];
  enTerms: string[];
  acronyms: string[];
}

export const BILINGUAL_THESAURUS: SynonymEntry[] = [
  // --- MANAJEMEN OPERASIONAL ---
  {
    concept: 'eoq',
    idTerms: ['kuantitas pesanan ekonomis', 'jumlah pesanan ekonomis', 'pesanan paling hemat', 'jumlah pemesanan optimal', 'pesanan ekonomis'],
    enTerms: ['economic order quantity', 'optimal order quantity', 'order quantity'],
    acronyms: ['eoq'],
  },
  {
    concept: 'inventory',
    idTerms: ['persediaan', 'stok barang', 'stok', 'penyimpanan barang', 'gudang persediaan', 'cadangan bahan', 'bahan baku'],
    enTerms: ['inventory', 'stock', 'raw materials inventory', 'finished goods inventory'],
    acronyms: ['inv'],
  },
  {
    concept: 'holding_cost',
    idTerms: ['biaya simpan', 'biaya penyimpanan', 'ongkos simpan', 'biaya gudang', 'biaya simpanan'],
    enTerms: ['holding cost', 'carrying cost', 'storage cost'],
    acronyms: [],
  },
  {
    concept: 'ordering_cost',
    idTerms: ['biaya pesan', 'biaya pemesanan', 'ongkos pesan', 'biaya pengadaan'],
    enTerms: ['ordering cost', 'setup cost', 'procurement cost'],
    acronyms: [],
  },
  {
    concept: 'capacity',
    idTerms: ['kapasitas produksi', 'kapasitas', 'daya tampung', 'kemampuan produksi', 'volume hasil maksimal'],
    enTerms: ['capacity', 'production capacity', 'plant capacity'],
    acronyms: [],
  },
  {
    concept: 'design_capacity',
    idTerms: ['kapasitas desain', 'kapasitas maksimal', 'kapasitas teoritis', 'kapasitas mesin maksimal'],
    enTerms: ['design capacity', 'theoretical capacity', 'maximum capacity'],
    acronyms: [],
  },
  {
    concept: 'actual_output',
    idTerms: ['output aktual', 'hasil nyata', 'realisasi produksi', 'hasil riil', 'keluaran nyata', 'hasil akhir', 'keluaran'],
    enTerms: ['actual output', 'actual production', 'real output', 'output'],
    acronyms: [],
  },
  {
    concept: 'quality_control',
    idTerms: ['pengendalian kualitas', 'pengendalian mutu', 'kendali mutu', 'kontrol mutu', 'pemeriksaan kualitas', 'mutu', 'kualitas', 'bermutu', 'berkualitas'],
    enTerms: ['quality control', 'quality assurance', 'total quality management', 'quality'],
    acronyms: ['qc', 'qa', 'tqm'],
  },
  {
    concept: 'standardization',
    idTerms: ['standardisasi', 'penyeragaman', 'standarisasi', 'standar baku', 'cetakan seragam', 'seragam'],
    enTerms: ['standardization', 'uniformity', 'standard operating procedure'],
    acronyms: ['sop'],
  },
  {
    concept: 'economies_of_scale',
    idTerms: ['skala ekonomis', 'penghematan skala besar', 'kehematan biaya produksi per unit'],
    enTerms: ['economies of scale', 'scale efficiency'],
    acronyms: [],
  },
  {
    concept: 'transformation_process',
    idTerms: ['proses transformasi', 'proses pengolahan', 'mengolah', 'pengolahan', 'memproses', 'memproduksi', 'proses operasi', 'alur produksi', 'transformasi nilai tambah', 'masukan', 'bahan'],
    enTerms: ['transformation process', 'production process', 'operations system', 'value addition', 'input', 'processing', 'manufacturing'],
    acronyms: [],
  },
  {
    concept: 'tangible',
    idTerms: ['berwujud fisik', 'berwujud', 'benda berwujud', 'dapat disentuh', 'fisik nyata', 'wujud fisik'],
    enTerms: ['tangible', 'physical goods', 'physical tangible'],
    acronyms: [],
  },
  {
    concept: 'intangible',
    idTerms: ['tidak berwujud', 'nirwujud', 'jasa nirwujud', 'layanan nonfisik', 'tidak terlihat'],
    enTerms: ['intangible', 'intangibility'],
    acronyms: [],
  },
  {
    concept: 'prototype',
    idTerms: ['prototipe', 'contoh awal', 'sampel awal', 'purwarupa', 'model awal', 'uji coba'],
    enTerms: ['prototype', 'sample', 'trial'],
    acronyms: [],
  },
  {
    concept: 'smooth_flow',
    idTerms: ['lancar', 'kelancaran', 'teratur', 'tidak bolak balik', 'rapi', 'tertata'],
    enTerms: ['smooth', 'streamlined', 'flow'],
    acronyms: [],
  },
  {
    concept: 'store_warehouse',
    idTerms: ['disimpan', 'digudangkan', 'penyimpanan', 'gudang'],
    enTerms: ['stored', 'warehousing', 'storability'],
    acronyms: [],
  },

  // --- MANAJEMEN KEUANGAN ---
  {
    concept: 'bep',
    idTerms: ['titik impas', 'pulang pokok', 'balik modal', 'laba nol', 'impas', 'titik kembali modal'],
    enTerms: ['break even point', 'break even', 'zero profit point'],
    acronyms: ['bep'],
  },
  {
    concept: 'tvm',
    idTerms: ['nilai waktu uang', 'nilai waktu dari uang', 'daya beli uang'],
    enTerms: ['time value of money', 'present value', 'future value', 'discounted value'],
    acronyms: ['tvm', 'pv', 'fv'],
  },
  {
    concept: 'npv',
    idTerms: ['nilai sekarang bersih', 'arus kas diskonto', 'penilaian kelayakan investasi', 'penganggaran modal'],
    enTerms: ['net present value', 'discounted cash flow', 'capital budgeting', 'internal rate of return', 'payback period', 'profitability index'],
    acronyms: ['npv', 'dcf', 'irr', 'pi'],
  },
  {
    concept: 'wacc',
    idTerms: ['biaya modal rata rata tertimbang', 'biaya modal', 'ongkos modal'],
    enTerms: ['weighted average cost of capital', 'cost of capital', 'cost of debt', 'cost of equity'],
    acronyms: ['wacc'],
  },
  {
    concept: 'roi_metrics',
    idTerms: ['pengembalian investasi', 'imbal hasil', 'tingkat pengembalian', 'rasio profitabilitas'],
    enTerms: ['return on investment', 'return on equity', 'return on assets'],
    acronyms: ['roi', 'roe', 'roa'],
  },
  {
    concept: 'liquidity',
    idTerms: ['likuiditas', 'kemampuan membayar utang jangka pendek', 'kelancaran kas', 'kewajiban lancar'],
    enTerms: ['liquidity', 'short term solvency', 'ability to pay debts'],
    acronyms: [],
  },
  {
    concept: 'current_ratio',
    idTerms: ['rasio lancar', 'aktiva lancar dibagi utang lancar', 'tingkat rasio lancar', 'rasio cepat'],
    enTerms: ['current ratio', 'liquidity ratio', 'working capital ratio', 'quick ratio', 'acid test ratio'],
    acronyms: ['cr'],
  },
  {
    concept: 'equity',
    idTerms: ['modal sendiri', 'ekuitas', 'tabungan pribadi', 'saham pemilik usaha', 'modal'],
    enTerms: ['equity', 'owner equity', 'retained equity', 'internal financing', 'capital'],
    acronyms: [],
  },
  {
    concept: 'debt_financing',
    idTerms: ['modal pinjaman', 'utang bank', 'utang', 'kredit usaha', 'pinjaman modal', 'liabilitas utang', 'pendanaan'],
    enTerms: ['debt financing', 'bank loan', 'borrowing', 'leverage', 'financing'],
    acronyms: ['der', 'dar'],
  },
  {
    concept: 'dividend',
    idTerms: ['dividen', 'pembagian laba', 'kebijakan laba bersih', 'keuntungan dibagikan', 'kebijakan dividen'],
    enTerms: ['dividend', 'dividend policy', 'profit distribution', 'dividend payout ratio'],
    acronyms: ['dpr'],
  },
  {
    concept: 'retained_earnings',
    idTerms: ['laba ditahan', 'keuntungan yang ditahan', 'reinvestasi laba'],
    enTerms: ['retained earnings', 'plowed back profit'],
    acronyms: [],
  },
  {
    concept: 'firm_value',
    idTerms: ['nilai perusahaan', 'nilai usaha', 'kesejahteraan pemegang saham', 'kemakmuran pemilik', 'memaksimalkan nilai'],
    enTerms: ['firm value', 'shareholder wealth', 'company valuation', 'maximize value'],
    acronyms: [],
  },
  {
    concept: 'profit',
    idTerms: ['laba', 'keuntungan', 'untung', 'imbal hasil', 'pendapatan bersih'],
    enTerms: ['profit', 'margin', 'return', 'earnings'],
    acronyms: [],
  },
  {
    concept: 'cost',
    idTerms: ['biaya', 'ongkos', 'beban', 'pengeluaran', 'dana'],
    enTerms: ['cost', 'expense', 'expenditure', 'funds'],
    acronyms: [],
  },
  {
    concept: 'efficient',
    idTerms: ['efisien', 'efisiensi', 'hemat', 'penghematan', 'tidak boros', 'murah'],
    enTerms: ['efficient', 'efficiency', 'cost saving', 'economical'],
    acronyms: [],
  },

  // --- MANAJEMEN PEMASARAN ---
  {
    concept: 'plc',
    idTerms: ['siklus hidup produk', 'daur hidup produk', 'tahapan daur produk'],
    enTerms: ['product life cycle', 'life cycle stages'],
    acronyms: ['plc'],
  },
  {
    concept: 'maturity_stage',
    idTerms: ['tahap kedewasaan', 'tahap matang', 'pasar jenuh', 'kejenuhan pasar', 'persaingan harga ketat'],
    enTerms: ['maturity stage', 'market saturation', 'mature market'],
    acronyms: [],
  },
  {
    concept: 'perishability',
    idTerms: ['tidak dapat disimpan', 'mudah musnah', 'tidak tahan lama', 'jasa tidak bisa disimpan', 'hilang seketika'],
    enTerms: ['perishability', 'perishable', 'cannot be stored'],
    acronyms: [],
  },
  {
    concept: 'inseparability',
    idTerms: ['tidak terpisahkan', 'ketidakterpisahan', 'hadir bersamaan', 'produksi dan konsumsi simultan', 'langsung dinikmati'],
    enTerms: ['inseparability', 'simultaneous production consumption'],
    acronyms: [],
  },
  {
    concept: 'heterogeneity',
    idTerms: ['bervariasi', 'heterogen', 'beragam', 'tidak seragam'],
    enTerms: ['heterogeneity', 'variability'],
    acronyms: [],
  },
  {
    concept: 'penetration_pricing',
    idTerms: ['harga penetrasi pasar', 'strategi penetrasi', 'harga awal terjangkau', 'harga murah merakyat'],
    enTerms: ['penetration pricing', 'market penetration', 'low entry price'],
    acronyms: [],
  },
  {
    concept: 'skimming_pricing',
    idTerms: ['harga memerah pasar', 'harga awal tinggi', 'skimming pasar'],
    enTerms: ['skimming pricing', 'market skimming', 'price skimming'],
    acronyms: [],
  },
  {
    concept: 'sales_promotion',
    idTerms: ['promosi penjualan', 'insentif jangka pendek', 'diskon potongan harga', 'voucher belanja', 'beli dua gratis satu'],
    enTerms: ['sales promotion', 'promotional discount', 'short term incentive'],
    acronyms: [],
  },
  {
    concept: 'digital_marketing',
    idTerms: ['pemasaran digital', 'pemasaran daring', 'media sosial', 'pemasaran online', 'promosi digital'],
    enTerms: ['digital marketing', 'social media marketing', 'online advertising'],
    acronyms: ['smm', 'sem', 'seo'],
  },
  {
    concept: 'stp',
    idTerms: ['segmentasi targeting positioning', 'segmentasi pasar sasaran posisi', 'strategi pemasaran terarah'],
    enTerms: ['segmenting targeting positioning', 'stp marketing strategy'],
    acronyms: ['stp'],
  },
  {
    concept: 'segmenting',
    idTerms: ['segmentasi pasar', 'membagi pasar', 'pengelompokan konsumen', 'pemetaan pembeli'],
    enTerms: ['segmenting', 'market segmentation', 'consumer grouping'],
    acronyms: [],
  },
  {
    concept: 'targeting',
    idTerms: ['pasar sasaran', 'target pasar', 'membidik segmen pasar', 'kelompok pembeli terpilih'],
    enTerms: ['targeting', 'target market', 'target audience'],
    acronyms: [],
  },
  {
    concept: 'positioning',
    idTerms: ['penentuan posisi pasar', 'posisi produk', 'citra unik di benak konsumen', 'persepsi merek'],
    enTerms: ['positioning', 'market position', 'brand image'],
    acronyms: [],
  },
  {
    concept: 'brand_equity',
    idTerms: ['ekuitas merek', 'nilai merek', 'kekuatan merek', 'nama merek'],
    enTerms: ['brand equity', 'brand value'],
    acronyms: [],
  },
  {
    concept: 'marketing_mix',
    idTerms: ['bauran pemasaran', 'produk harga lokasi promosi', 'orang proses bukti fisik', 'alat pemasaran taktis'],
    enTerms: ['marketing mix', '4p', '7p', 'product price place promotion', 'people process physical evidence'],
    acronyms: ['4p', '7p', '3p'],
  },
  {
    concept: 'consumer',
    idTerms: ['konsumen', 'pelanggan', 'pembeli', 'nasabah', 'klien', 'pemakai', 'pasar'],
    enTerms: ['consumer', 'customer', 'buyer', 'client', 'market'],
    acronyms: [],
  },
  {
    concept: 'goods_product',
    idTerms: ['barang', 'produk', 'barang jadi', 'benda'],
    enTerms: ['goods', 'product', 'products'],
    acronyms: [],
  },
  {
    concept: 'service_product',
    idTerms: ['jasa', 'layanan', 'pelayanan', 'servis'],
    enTerms: ['service', 'services'],
    acronyms: [],
  },
  {
    concept: 'need_want',
    idTerms: ['kebutuhan', 'keinginan', 'memuaskan', 'memenuhi'],
    enTerms: ['need', 'needs', 'want', 'wants', 'satisfy'],
    acronyms: [],
  },
  {
    concept: 'distribution',
    idTerms: ['saluran distribusi', 'distribusi', 'penyaluran', 'perantara', 'agen', 'pedagang'],
    enTerms: ['distribution', 'channel', 'intermediary', 'place'],
    acronyms: [],
  },
  {
    concept: 'promotion',
    idTerms: ['promosi', 'iklan', 'periklanan', 'komunikasi pemasaran', 'hubungan masyarakat', 'humas'],
    enTerms: ['promotion', 'advertising', 'public relations', 'imc'],
    acronyms: ['imc', 'pr'],
  },

  // --- MANAJEMEN SDM ---
  {
    concept: 'human_capital',
    idTerms: ['modal manusia', 'aset manusia', 'tenaga kerja strategis', 'karyawan sebagai aset', 'manajemen sumber daya manusia', 'sumber daya manusia', 'karyawan', 'pegawai', 'pekerja', 'tenaga kerja'],
    enTerms: ['human capital', 'human resources', 'human resource management', 'talent asset', 'employee', 'staff', 'worker'],
    acronyms: ['hc', 'hr', 'hrm', 'msdm', 'sdm', 'shrm'],
  },
  {
    concept: 'procurement_recruitment',
    idTerms: ['pengadaan', 'rekrutmen', 'seleksi', 'penarikan pegawai', 'penerimaan karyawan', 'analisis jabatan'],
    enTerms: ['procurement', 'recruitment', 'selection', 'talent acquisition', 'staffing', 'job analysis'],
    acronyms: [],
  },
  {
    concept: 'training_development',
    idTerms: ['pelatihan', 'pelatihan kerja', 'pengembangan', 'pengembangan karir', 'pembinaan', 'peningkatan keterampilan', 'analisis kebutuhan pelatihan'],
    enTerms: ['training', 'development', 'career development', 'training needs assessment', 'vocational training'],
    acronyms: ['tna'],
  },
  {
    concept: 'performance_appraisal',
    idTerms: ['penilaian kinerja', 'evaluasi kerja', 'penilaian prestasi kerja', 'evaluasi karyawan', 'indikator kinerja'],
    enTerms: ['performance appraisal', 'performance evaluation', 'kpi assessment'],
    acronyms: ['kpi'],
  },
  {
    concept: 'compensation',
    idTerms: ['kompensasi', 'gaji', 'upah', 'imbalan', 'insentif', 'bonus', 'tunjangan', 'keadilan pengupahan', 'keadilan internal'],
    enTerms: ['compensation', 'salary', 'wage', 'pay', 'internal equity', 'pay for performance'],
    acronyms: [],
  },
  {
    concept: 'maintenance_k3',
    idTerms: ['pemeliharaan', 'keselamatan dan kesehatan kerja', 'keamanan kerja', 'bebas kecelakaan', 'nihil kecelakaan', 'hubungan industrial', 'perjanjian kerja bersama'],
    enTerms: ['maintenance', 'occupational health and safety', 'workplace safety', 'zero accident', 'industrial relations'],
    acronyms: ['k3', 'ohs', 'hse', 'pkb'],
  },
  {
    concept: 'intrinsic_motivation',
    idTerms: ['motivasi non finansial', 'motivasi intrinsik', 'pujian tulus', 'penghargaan karyawan teladan', 'suasana kerja nyaman'],
    enTerms: ['intrinsic motivation', 'non financial reward', 'employee recognition'],
    acronyms: [],
  },
  {
    concept: 'goal_purpose',
    idTerms: ['tujuan', 'sasaran', 'target', 'mencapai', 'fungsi'],
    enTerms: ['goal', 'objective', 'target', 'purpose', 'function'],
    acronyms: [],
  },
];

// Stopwords in Indonesian & English (keep negation words like 'tidak' / 'tanpa' / 'bukan' out of STOPWORDS when meaningful,
// OR handle negation carefully so 'tidak berwujud' keeps 'tidak'!)
const STOPWORDS = new Set([
  'dan', 'atau', 'yang', 'di', 'ke', 'dari', 'untuk', 'pada', 'adalah', 'yaitu', 'seperti',
  'dalam', 'dengan', 'oleh', 'karena', 'maka', 'akan', 'bisa', 'dapat', 'secara', 'ini', 'itu',
  'juga', 'agar', 'jika', 'bila', 'saat', 'serta', 'antara', 'sebuah', 'suatu', 'para', 'bagi',
  'terhadap', 'menjadi', 'membuat', 'melakukan', 'tentang', 'atas', 'setiap', 'harus', 'lebih',
  'saya', 'kami', 'anda', 'kamu', 'dia', 'mereka', 'sudah', 'telah', 'sedang', 'hanya', 'saja',
  'the', 'and', 'or', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'be', 'an', 'a',
  'merupakan', 'yakni', 'tersebut', 'bahwa', 'hingga', 'sampai', 'guna', 'demi', 'sehingga',
]);

// ============================================================================
// 2. Normalisasi STT, Stemmer Morfologis (ID + EN), & Indeks Konsep
// ============================================================================

const STT_NORMALIZATION_RULES: Array<{ pattern: RegExp; replacement: string }> = [
  // Spaced / phonetic acronyms common in Indonesian Web Speech API
  { pattern: /\be\s+o\s+q\b/gi, replacement: 'eoq' },
  { pattern: /\bb\s+e\s+p\b/gi, replacement: 'bep' },
  { pattern: /\br\s+o\s+i\b/gi, replacement: 'roi' },
  { pattern: /\br\s+o\s+a\b/gi, replacement: 'roa' },
  { pattern: /\br\s+o\s+e\b/gi, replacement: 'roe' },
  { pattern: /\bn\s+p\s+v\b/gi, replacement: 'npv' },
  { pattern: /\bi\s+r\s+r\b/gi, replacement: 'irr' },
  { pattern: /\bw\s+a\s+c\s+c\b/gi, replacement: 'wacc' },
  { pattern: /\bm\s+s\s+d\s+m\b/gi, replacement: 'msdm' },
  { pattern: /\bs\s+d\s+m\b/gi, replacement: 'sdm' },
  { pattern: /\bk\s*[- ]?\s*(?:tiga|3)\b/gi, replacement: 'k3' },
  { pattern: /\b(?:empat|for|4)\s*(?:p|pi)\b/gi, replacement: '4p' },
  { pattern: /\b(?:tujuh|seven|7)\s*(?:p|pi)\b/gi, replacement: '7p' },
  { pattern: /\b(?:tiga|tri|3)\s*(?:p|pi)\b/gi, replacement: '3p' },
  { pattern: /\bi\s+m\s+c\b/gi, replacement: 'imc' },
  { pattern: /\bs\s+t\s+p\b/gi, replacement: 'stp' },
  { pattern: /\bp\s+l\s+c\b/gi, replacement: 'plc' },
  { pattern: /\bs\s+o\s+p\b/gi, replacement: 'sop' },
  { pattern: /\bp\s+o\s+a\s+c\b/gi, replacement: 'poac' },
  { pattern: /\bp\s+d\s+c\s+a\b/gi, replacement: 'pdca' },
  { pattern: /\bs\s+w\s+o\s+t\b/gi, replacement: 'swot' },
  { pattern: /\bt\s+q\s+m\b/gi, replacement: 'tqm' },
  { pattern: /\bj\s+i\s+t\b/gi, replacement: 'jit' },
  { pattern: /\bi\s+h\s+i\s+p\b/gi, replacement: 'ihip' },
  { pattern: /\bk\s+p\s+i\b/gi, replacement: 'kpi' },
  { pattern: /\bp\s+k\s+b\b/gi, replacement: 'pkb' },
  { pattern: /\bd\s+p\s+r\b/gi, replacement: 'dpr' },
  // Common KBBI / colloquial / STT spelling variants
  { pattern: /\bresiko\b/gi, replacement: 'risiko' },
  { pattern: /\banalisa\b/gi, replacement: 'analisis' },
  { pattern: /\bkwalitas\b/gi, replacement: 'kualitas' },
  { pattern: /\befektifitas\b/gi, replacement: 'efektivitas' },
  { pattern: /\bproduktifitas\b/gi, replacement: 'produktivitas' },
  { pattern: /\baktifitas\b/gi, replacement: 'aktivitas' },
  { pattern: /\bstandarisasi\b/gi, replacement: 'standardisasi' },
  { pattern: /\bkarir\b/gi, replacement: 'karier' },
  { pattern: /\bmetoda\b/gi, replacement: 'metode' },
  { pattern: /\bsistim\b/gi, replacement: 'sistem' },
  { pattern: /\b(?:managemen|menejemen)\b/gi, replacement: 'manajemen' },
  { pattern: /\bhutang\b/gi, replacement: 'utang' },
  { pattern: /\bpurna\s+jual\b/gi, replacement: 'purnajual' },
  { pattern: /\bnon\s+fisik\b/gi, replacement: 'nonfisik' },
  { pattern: /\bkerja\s+sama\b/gi, replacement: 'kerjasama' },
  { pattern: /\bkomersil\b/gi, replacement: 'komersial' },
  { pattern: /\bbolak[\s-]+balik\b/gi, replacement: 'bolak balik' },
  { pattern: /\bbreak[\s-]+even\b/gi, replacement: 'break even' },
  { pattern: /\bnon[\s-]+finansial\b/gi, replacement: 'non finansial' },
];

export const normalizeTextForMatching = (text: string): string => {
  let result = (text || '').toLowerCase();
  for (const rule of STT_NORMALIZATION_RULES) {
    result = result.replace(rule.pattern, rule.replacement);
  }
  return result.replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
};

// Protected root words ending in -i that should not lose trailing 'i'
const PROTECTED_I_ROOTS = new Set([
  'beli', 'gaji', 'nilai', 'rugi', 'uji', 'isi', 'beri', 'inti', 'pasti', 'ahli',
  'jadi', 'sendiri', 'kembali', 'produksi', 'distribusi', 'promosi', 'efisiensi',
  'kompensasi', 'motivasi', 'evaluasi', 'investasi', 'strategi', 'inovasi',
  'koperasi', 'operasi', 'komunikasi', 'spesifikasi', 'segmentasi', 'standardisasi',
  'negosiasi', 'kualifikasi', 'kompetisi', 'rekomendasi', 'klasifikasi', 'identifikasi',
  'orientasi', 'informasi', 'transformasi', 'integrasi', 'relasi', 'posisi',
]);

/**
 * Strips common Indonesian affixes (imbuhan) to obtain base root word
 */
export const stemIndonesian = (word: string): string => {
  let w = word.toLowerCase().trim();
  if (w.length <= 4) return w;

  // Suffixes: -nya, -lah, -kah
  w = w.replace(/(nya|lah|kah)$/, '');

  // Suffixes: -kan, -an, -i
  if (w.length > 5) {
    if (w.endsWith('kan')) w = w.slice(0, -3);
    else if (w.endsWith('an')) w = w.slice(0, -2);
    else if (w.endsWith('i') && !PROTECTED_I_ROOTS.has(w)) {
      const candidateWithoutI = w.slice(0, -1);
      if (candidateWithoutI.length >= 4 && !candidateWithoutI.endsWith('s')) {
        w = candidateWithoutI;
      }
    }
  }

  // Prefixes: meng-, meny-, mem-, men-, me-
  if (w.startsWith('meny') && w.length > 5) {
    w = 's' + w.slice(4);
  } else if (w.startsWith('meng') && w.length > 5) {
    w = w.slice(4);
  } else if (w.startsWith('mem') && w.length > 5) {
    const nextChar = w[3];
    if (nextChar === 'b' || nextChar === 'f' || nextChar === 'v' || nextChar === 'p') {
      w = w.slice(3);
    } else if (nextChar === 'a' && w.slice(3).startsWith('aksimal')) {
      w = 'm' + w.slice(3);
    } else {
      w = 'p' + w.slice(3);
    }
  } else if (w.startsWith('men') && w.length > 5) {
    const nextChar = w[3];
    if (nextChar === 'c' || nextChar === 'd' || nextChar === 'j' || nextChar === 'z') {
      w = w.slice(3);
    } else if (nextChar === 't') {
      w = w.slice(3);
    } else {
      w = 't' + w.slice(3);
    }
  } else if (w.startsWith('me') && w.length > 4) {
    w = w.slice(2);
  }

  // Prefixes: di-, ke-, se-, te-, ter-
  if (w.startsWith('ter') && w.length > 5) w = w.slice(3);
  else if (w.startsWith('te') && w.length > 4) w = w.slice(2);
  else if (w.startsWith('di') && w.length > 4) w = w.slice(2);
  else if (w.startsWith('ke') && w.length > 4) w = w.slice(2);
  else if (w.startsWith('se') && w.length > 4) w = w.slice(2);

  // Prefixes: ber-, be-
  if (w.startsWith('ber') && w.length > 5) w = w.slice(3);
  else if (w.startsWith('be') && w.length > 4) w = w.slice(2);

  // Prefixes: peng-, peny-, pem-, pen-, per-, pe-
  if (w.startsWith('peny') && w.length > 5) {
    w = 's' + w.slice(4);
  } else if (w.startsWith('peng') && w.length > 5) {
    w = w.slice(4);
  } else if (w.startsWith('pem') && w.length > 5) {
    const nextChar = w[3];
    if (nextChar === 'b' || nextChar === 'f' || nextChar === 'v' || nextChar === 'p') {
      w = w.slice(3);
    } else {
      w = 'p' + w.slice(3);
    }
  } else if (w.startsWith('pen') && w.length > 5) {
    const nextChar = w[3];
    if (nextChar === 'c' || nextChar === 'd' || nextChar === 'j' || nextChar === 'z' || nextChar === 't') {
      w = w.slice(3);
    } else {
      w = 't' + w.slice(3);
    }
  } else if (w.startsWith('per') && w.length > 5) {
    w = w.slice(3);
  } else if (w.startsWith('pe') && w.length > 4) {
    w = w.slice(2);
  }

  return w;
};

/**
 * Strips common English inflections to match verb/noun roots
 */
export const stemEnglish = (word: string): string => {
  const w = word.toLowerCase().trim();
  if (w.length <= 4) return w;

  if (w.endsWith('ing') && w.length > 5) return w.slice(0, -3);
  if (w.endsWith('tion') && w.length > 6) return w.slice(0, -4);
  if (w.endsWith('ment') && w.length > 6) return w.slice(0, -4);
  if (w.endsWith('ies') && w.length > 5) return w.slice(0, -3) + 'y';
  if (w.endsWith('ed') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('es') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss') && w.length > 3) return w.slice(0, -1);

  return w;
};

/**
 * Unified stemmer supporting both Bahasa Indonesia and English
 */
export const stemBilingual = (word: string): string => {
  return stemEnglish(stemIndonesian(word));
};

/**
 * Generates multiple plausible morphological root candidates for robust matching
 */
export const getBilingualStemCandidates = (word: string): string[] => {
  const lower = word.toLowerCase().trim();
  const candidates = new Set<string>();
  candidates.add(lower);
  candidates.add(stemIndonesian(lower));
  candidates.add(stemEnglish(lower));
  candidates.add(stemBilingual(lower));

  // Handle ambiguous nasalized m- vs p- roots (e.g. memaksimalkan -> maksimal)
  if (lower.startsWith('mem') && lower.length > 5) {
    const bare = lower.replace(/(nya|lah|kah|kan|an)$/, '').slice(3);
    candidates.add('m' + bare);
    candidates.add('p' + bare);
  }

  // Handle trailing -i verb vs noun root (e.g. membeli -> beli, menilai -> nilai)
  if (lower.endsWith('i') && lower.length > 5) {
    const withoutI = lower.slice(0, -1);
    candidates.add(stemIndonesian(withoutI));
    const afterPrefix = stemIndonesian(lower);
    if (!afterPrefix.endsWith('i')) {
      candidates.add(afterPrefix + 'i');
    }
  }

  return Array.from(candidates).filter((c) => c.length >= 2);
};

/**
 * Cleans punctuation, normalizes STT artifacts, and returns informative tokens
 */
export const tokenizeText = (text: string): string[] => {
  const normalized = normalizeTextForMatching(text);
  if (!normalized) return [];
  return normalized
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
};

// Precomputed thesaurus index: normalized token/stem -> set of concept IDs
const TOKEN_CONCEPT_INDEX = new Map<string, Set<string>>();
for (const entry of BILINGUAL_THESAURUS) {
  const phrases = [...entry.idTerms, ...entry.enTerms, ...entry.acronyms];
  for (const phrase of phrases) {
    const tokens = tokenizeText(phrase);
    // Register single-word terms and core heads into token concept map
    if (tokens.length === 1) {
      for (const cand of getBilingualStemCandidates(tokens[0])) {
        if (!TOKEN_CONCEPT_INDEX.has(cand)) TOKEN_CONCEPT_INDEX.set(cand, new Set());
        TOKEN_CONCEPT_INDEX.get(cand)!.add(entry.concept);
      }
    }
  }
}

const getConceptIdsForWord = (word: string): Set<string> => {
  const result = new Set<string>();
  for (const cand of getBilingualStemCandidates(word)) {
    const concepts = TOKEN_CONCEPT_INDEX.get(cand);
    if (concepts) {
      for (const c of concepts) result.add(c);
    }
  }
  return result;
};

/**
 * Bigram Dice Coefficient for phonetic / fuzzy typo tolerance (e.g. STT speech slips)
 */
export const calculateDiceCoefficient = (s1: string, s2: string): number => {
  const str1 = s1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const str2 = s2.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (str1 === str2) return 1.0;
  if (str1.length < 2 || str2.length < 2) return 0.0;

  const getBigrams = (str: string) => {
    const bigrams = new Map<string, number>();
    for (let i = 0; i < str.length - 1; i++) {
      const b = str.substring(i, i + 2);
      bigrams.set(b, (bigrams.get(b) || 0) + 1);
    }
    return bigrams;
  };

  const b1 = getBigrams(str1);
  const b2 = getBigrams(str2);

  let intersection = 0;
  for (const [k, count1] of b1.entries()) {
    const count2 = b2.get(k);
    if (count2) {
      intersection += Math.min(count1, count2);
    }
  }

  const total = str1.length - 1 + (str2.length - 1);
  return total > 0 ? (2 * intersection) / total : 0;
};

// ============================================================================
// 3. Parser & Matcher Bilingual Cerdas Berbasis Keyword & Partial Credit
// ============================================================================

export interface SynonymMatchHighlight {
  keyword: string;
  matchedAs: string;
  isBilingual: boolean;
}

export interface BilingualMatchResult {
  matchPercentage: number; // 0 - 100
  scoreEarned: number; // e.g. 9.2 out of 10
  maxScore: number; // 10
  isCorrect: boolean; // >= 70% passing
  matchedKeywords: string[]; // Strong / full matched keywords
  partialKeywords: string[]; // Keywords with partial overlap (>0 but <0.5)
  keywordMatchRatio: number; // 0 - 1 weighted keyword score
  synonymHighlights: SynonymMatchHighlight[];
  structuralFeedback: string;
}

/**
 * Looks up synonyms across question specific dictionary and global bilingual thesaurus
 */
export const findSynonymVariants = (
  keyword: string,
  questionSynonyms?: Record<string, string[]>
): { terms: string[]; isBilingual: boolean } => {
  const kwLower = normalizeTextForMatching(keyword);
  const set = new Set<string>();
  let hasBilingual = false;

  if (kwLower) set.add(kwLower);

  // 1. Question specific synonyms
  if (questionSynonyms) {
    for (const [head, syns] of Object.entries(questionSynonyms)) {
      const headNorm = normalizeTextForMatching(head);
      if (headNorm && (kwLower.includes(headNorm) || headNorm.includes(kwLower))) {
        hasBilingual = true;
        set.add(headNorm);
        for (const s of syns) {
          const sNorm = normalizeTextForMatching(s);
          if (sNorm) set.add(sNorm);
        }
      }
    }
  }

  // 2. Global bilingual thesaurus search
  for (const entry of BILINGUAL_THESAURUS) {
    const allInEntry = [...entry.idTerms, ...entry.enTerms, ...entry.acronyms];
    const matchesConcept = allInEntry.some((term) => {
      const tNorm = normalizeTextForMatching(term);
      if (!tNorm || tNorm.length < 2) return false;
      // Only treat as phrase match if exact or full-word boundary match for short terms
      if (tNorm.length <= 4) {
        return kwLower.split(/\s+/).includes(tNorm);
      }
      return kwLower.includes(tNorm) || tNorm.includes(kwLower);
    });

    if (matchesConcept) {
      hasBilingual = true;
      for (const t of entry.idTerms) set.add(normalizeTextForMatching(t));
      for (const t of entry.enTerms) set.add(normalizeTextForMatching(t));
      for (const a of entry.acronyms) set.add(normalizeTextForMatching(a));
    }
  }

  return {
    terms: Array.from(set).filter(Boolean),
    isBilingual: hasBilingual,
  };
};

/**
 * Checks whether a single keyword token matches any user token (exact, stem, concept synonym, or fuzzy STT)
 */
const matchSingleTokenInUserInput = (
  kToken: string,
  userTokens: string[],
  userStemSet: Set<string>,
  userConceptSets: Map<string, Set<string>>
): { matched: boolean; viaSynonym: boolean; viaFuzzy: boolean; matchedWord?: string } => {
  const kCandidates = getBilingualStemCandidates(kToken);
  const kConcepts = getConceptIdsForWord(kToken);

  // 1. Exact or stem candidate match
  for (const cand of kCandidates) {
    if (userStemSet.has(cand)) {
      return { matched: true, viaSynonym: false, viaFuzzy: false, matchedWord: kToken };
    }
  }

  // 2. Token-level bilingual thesaurus concept overlap (e.g. hemat <-> efisien, pelanggan <-> konsumen)
  if (kConcepts.size > 0) {
    for (const uToken of userTokens) {
      const uConcepts = userConceptSets.get(uToken);
      if (uConcepts) {
        for (const c of kConcepts) {
          if (uConcepts.has(c)) {
            return { matched: true, viaSynonym: true, viaFuzzy: false, matchedWord: uToken };
          }
        }
      }
    }
  }

  // 3. Fuzzy Dice match for STT phonetic slips (higher threshold for short tokens)
  const fuzzyThreshold = kToken.length >= 6 ? 0.78 : kToken.length >= 4 ? 0.84 : 1.0;
  if (fuzzyThreshold < 1.0) {
    for (const uToken of userTokens) {
      if (uToken.length >= 4 && calculateDiceCoefficient(uToken, kToken) >= fuzzyThreshold) {
        return { matched: true, viaSynonym: true, viaFuzzy: true, matchedWord: uToken };
      }
    }
  }

  return { matched: false, viaSynonym: false, viaFuzzy: false };
};

/**
 * Deduplicates bilingual redundant tokens inside a single keyword phrase
 * (e.g. "pengadaan procurement" -> 1 semantic unit, "intangibility tidak berwujud" -> 1 semantic unit)
 */
const groupKeywordIntoSemanticUnits = (kwTokens: string[]): string[][] => {
  const units: string[][] = [];
  const unitConcepts: Array<Set<string>> = [];

  for (const token of kwTokens) {
    const tokenConcepts = getConceptIdsForWord(token);
    let merged = false;

    if (tokenConcepts.size > 0) {
      for (let i = 0; i < units.length; i++) {
        for (const c of tokenConcepts) {
          if (unitConcepts[i].has(c)) {
            units[i].push(token);
            for (const nc of tokenConcepts) unitConcepts[i].add(nc);
            merged = true;
            break;
          }
        }
        if (merged) break;
      }
    }

    if (!merged) {
      units.push([token]);
      unitConcepts.push(new Set(tokenConcepts));
    }
  }

  return units;
};

/**
 * Detailed graded keyword matching (0.0 - 1.0) supporting full, bilingual, stemmed, STT fuzzy, and partial matches
 */
export const matchKeywordDetailed = (
  keyword: string,
  userText: string,
  userTokens: string[],
  userStemmedTokens: Set<string>,
  questionSynonyms?: Record<string, string[]>,
  userConceptSets?: Map<string, Set<string>>
): { score: number; matched: boolean; isPartial: boolean; matchedAs?: string; isBilingual: boolean } => {
  const normalizedUser = normalizeTextForMatching(userText);
  const kwNorm = normalizeTextForMatching(keyword);
  if (!kwNorm || !normalizedUser) {
    return { score: 0, matched: false, isPartial: false, isBilingual: false };
  }

  // 1. Direct exact phrase match (word-boundary safe for short terms)
  if (
    kwNorm.includes(' ')
      ? normalizedUser.includes(kwNorm)
      : userTokens.includes(kwNorm) || normalizedUser.includes(kwNorm)
  ) {
    return { score: 1.0, matched: true, isPartial: false, matchedAs: keyword, isBilingual: false };
  }

  // 2. Bilingual and synonym phrase lookup
  const { terms, isBilingual } = findSynonymVariants(keyword, questionSynonyms);
  for (const syn of terms) {
    if (!syn) continue;
    const isHit = syn.includes(' ')
      ? normalizedUser.includes(syn)
      : userTokens.includes(syn) || (syn.length >= 5 && normalizedUser.includes(syn));
    if (isHit) {
      return { score: 1.0, matched: true, isPartial: false, matchedAs: syn, isBilingual: true };
    }
  }

  // 3. Semantic-unit & token-level graded matching
  const conceptMap =
    userConceptSets ||
    new Map(userTokens.map((t) => [t, getConceptIdsForWord(t)]));

  const kwTokens = tokenizeText(keyword);
  if (kwTokens.length === 0) {
    return { score: 0, matched: false, isPartial: false, isBilingual: false };
  }

  const semanticUnits = groupKeywordIntoSemanticUnits(kwTokens);
  let matchedUnits = 0;
  let usedSynonym = isBilingual;
  const matchedWords: string[] = [];

  for (const unit of semanticUnits) {
    let unitHit = false;
    for (const candidateToken of unit) {
      const hit = matchSingleTokenInUserInput(
        candidateToken,
        userTokens,
        userStemmedTokens,
        conceptMap
      );
      if (hit.matched) {
        unitHit = true;
        if (hit.viaSynonym) usedSynonym = true;
        if (hit.matchedWord) matchedWords.push(hit.matchedWord);
        break;
      }
    }
    if (unitHit) {
      matchedUnits += 1;
    }
  }

  // Also check synonyms from questionSynonyms token-wise if phrase didn't match verbatim
  if (matchedUnits === 0 && terms.length > 1) {
    let bestSynScore = 0;
    let bestSynLabel = '';
    for (const syn of terms) {
      const synTokens = tokenizeText(syn);
      if (synTokens.length === 0) continue;
      let hits = 0;
      for (const st of synTokens) {
        const res = matchSingleTokenInUserInput(st, userTokens, userStemmedTokens, conceptMap);
        if (res.matched) hits += 1;
      }
      const ratio = hits / synTokens.length;
      if (ratio > bestSynScore) {
        bestSynScore = ratio;
        bestSynLabel = syn;
      }
    }
    if (bestSynScore >= 0.5) {
      const score = Math.min(1.0, 0.5 + bestSynScore * 0.5);
      return {
        score,
        matched: true,
        isPartial: false,
        matchedAs: `${bestSynLabel} (padanan konsep)`,
        isBilingual: true,
      };
    } else if (bestSynScore > 0) {
      return {
        score: Math.max(0.28, bestSynScore * 0.75),
        matched: false,
        isPartial: true,
        matchedAs: `${bestSynLabel} (kesesuaian sebagian)`,
        isBilingual: true,
      };
    }
  }

  if (matchedUnits === 0) {
    return { score: 0, matched: false, isPartial: false, isBilingual: false };
  }

  const unitRatio = matchedUnits / semanticUnits.length;

  if (unitRatio >= 0.85) {
    return {
      score: 1.0,
      matched: true,
      isPartial: false,
      matchedAs: matchedWords.join(', ') || keyword,
      isBilingual: usedSynonym,
    };
  }

  if (unitRatio >= 0.5) {
    return {
      score: Math.min(0.95, 0.5 + unitRatio * 0.45),
      matched: true,
      isPartial: false,
      matchedAs: `${matchedWords.join(', ')} (padanan inti)`,
      isBilingual: usedSynonym,
    };
  }

  // Partial credit (e.g. 1 of 3 or 1 of 4 tokens matched) -> NEVER 0!
  return {
    score: Math.max(0.3, unitRatio * 0.85),
    matched: false,
    isPartial: true,
    matchedAs: `${matchedWords.join(', ')} (sebagian)`,
    isBilingual: usedSynonym,
  };
};

/**
 * Backward-compatible boolean wrapper around matchKeywordDetailed
 */
export const matchKeywordInText = (
  keyword: string,
  userText: string,
  userTokens: string[],
  userStemmedTokens: Set<string>,
  questionSynonyms?: Record<string, string[]>
): { matched: boolean; matchedAs?: string; isBilingual: boolean } => {
  const detail = matchKeywordDetailed(
    keyword,
    userText,
    userTokens,
    userStemmedTokens,
    questionSynonyms
  );
  return {
    matched: detail.matched,
    matchedAs: detail.matchedAs,
    isBilingual: detail.isBilingual,
  };
};

/**
 * Analyzes sentence syntax, connector coherence, and relational structure
 * Gentle multiplier so concise spoken/voice answers are never unfairly penalized.
 */
export const evaluateGrammarAndStructure = (userText: string): { coherenceMultiplier: number; note: string } => {
  const trimmed = userText.trim();
  if (trimmed.length < 3) {
    return { coherenceMultiplier: 0.9, note: 'Jawaban sangat singkat' };
  }

  const connectors = [
    'karena', 'sehingga', 'adalah', 'merupakan', 'yaitu', 'dengan cara', 'meliputi',
    'antara', 'bertujuan', 'menghasilkan', 'karena itu', 'agar', 'oleh karena itu',
    'untuk', 'supaya', 'sedangkan', 'sementara',
    'because', 'which is', 'therefore', 'in order to', 'such as', 'due to'
  ];

  const lower = trimmed.toLowerCase();
  const connectorMatches = connectors.filter((c) => lower.includes(c));
  const wordCount = trimmed.split(/\s+/).length;

  let multiplier = 1.0;
  let note = 'Penyampaian poin jawaban cukup jelas';

  if (wordCount >= 10 && connectorMatches.length >= 1) {
    multiplier = 1.06;
    note = 'Struktur kalimat runtut dengan konjungsi penjelasan yang tepat';
  } else if (wordCount >= 5 && connectorMatches.length >= 1) {
    multiplier = 1.03;
    note = 'Pola kalimat jelas dan saling berhubungan';
  } else if (wordCount < 4) {
    multiplier = 0.96;
    note = 'Jawaban berupa poin kata kunci ringkas';
  }

  return { coherenceMultiplier: multiplier, note };
};

/**
 * Universal Bilingual Parser and Keyword-Driven Proportional Evaluator
 * Mendukung pencocokan tepat, sinonim bilingual, bentuk kata dasar (stemming),
 * toleransi ejaan STT suara, serta kredit parsial (sedikit kesesuaian tidak langsung 0).
 */
export const parseAndEvaluateBilingualAnswer = (
  userInput: string,
  question: ExamQuestion,
  selfAssessedScore?: number,
  maxScore = 10
): BilingualMatchResult => {
  const rawTrimmed = (userInput || '').trim();

  if (!rawTrimmed) {
    return {
      matchPercentage: 0,
      scoreEarned: 0,
      maxScore,
      isCorrect: false,
      matchedKeywords: [],
      partialKeywords: [],
      keywordMatchRatio: 0,
      synonymHighlights: [],
      structuralFeedback: 'Tidak ada jawaban atau transkrip suara yang terekam.',
    };
  }

  const rawUpper = rawTrimmed.toUpperCase();
  const qKey = question.kunciJawaban;

  // Direct option letter match (e.g. user wrote or spoke "A", "Opsi A", "Pilihan A")
  if (
    rawUpper === qKey ||
    rawUpper === `OPSI ${qKey}` ||
    rawUpper === `PILIHAN ${qKey}` ||
    rawUpper === `JAWABAN ${qKey}` ||
    rawUpper.startsWith(`${qKey}.`) ||
    rawUpper.startsWith(`${qKey} `)
  ) {
    return {
      matchPercentage: 100,
      scoreEarned: maxScore,
      maxScore,
      isCorrect: true,
      matchedKeywords: question.kataKunciUtama,
      partialKeywords: [],
      keywordMatchRatio: 1,
      synonymHighlights: question.kataKunciUtama.map((k) => ({
        keyword: k,
        matchedAs: `Pilihan Kunci (${qKey})`,
        isBilingual: false,
      })),
      structuralFeedback: `Jawaban tepat sesuai kunci abjad Opsi (${qKey}).`,
    };
  }

  // Explicit single wrong letter choice
  if (['A', 'B', 'C', 'D'].includes(rawUpper)) {
    return {
      matchPercentage: 0,
      scoreEarned: 0,
      maxScore,
      isCorrect: false,
      matchedKeywords: [],
      partialKeywords: [],
      keywordMatchRatio: 0,
      synonymHighlights: [],
      structuralFeedback: `Memilih opsi (${rawUpper}) yang tidak sesuai dengan kunci jawaban resmi (${qKey}).`,
    };
  }

  // Natural Language Parsing (Voice STT & Manual Input)
  const userTokens = tokenizeText(rawTrimmed);
  const userStemmedTokens = new Set<string>();
  const userConceptSets = new Map<string, Set<string>>();

  for (const t of userTokens) {
    for (const cand of getBilingualStemCandidates(t)) {
      userStemmedTokens.add(cand);
    }
    userConceptSets.set(t, getConceptIdsForWord(t));
  }

  const matchedKeywords: string[] = [];
  const partialKeywords: string[] = [];
  const synonymHighlights: SynonymMatchHighlight[] = [];
  let totalKeywordScore = 0;

  for (const kw of question.kataKunciUtama) {
    const detail = matchKeywordDetailed(
      kw,
      rawTrimmed,
      userTokens,
      userStemmedTokens,
      question.sinonimBilingual,
      userConceptSets
    );

    totalKeywordScore += detail.score;

    if (detail.matched) {
      matchedKeywords.push(kw);
      synonymHighlights.push({
        keyword: kw,
        matchedAs: detail.matchedAs || kw,
        isBilingual: detail.isBilingual,
      });
    } else if (detail.isPartial) {
      partialKeywords.push(kw);
      synonymHighlights.push({
        keyword: kw,
        matchedAs: detail.matchedAs || kw,
        isBilingual: detail.isBilingual,
      });
    }
  }

  const keywordCoverageRatio =
    question.kataKunciUtama.length > 0
      ? Math.min(1.0, totalKeywordScore / question.kataKunciUtama.length)
      : 0;

  // Conceptual corpus overlap against descriptive key + correct option + assessment indicator
  // Discount words that ONLY appear in the question stem itself so repeating the question isn't over-rewarded
  const questionOnlyStemTokens = new Set(
    tokenizeText(question.pertanyaan).flatMap((t) => getBilingualStemCandidates(t))
  );
  const correctOpt = question.options.find((o) => o.key === question.kunciJawaban);
  const referenceCorpus = `${question.kunciJawabanDeskriptif} ${correctOpt?.text || ''} ${question.indikatorPenilaian || ''}`;
  const refTokens = Array.from(new Set(tokenizeText(referenceCorpus)));

  // Distinct answer reference tokens (keep question words only if they also appear in kataKunciUtama)
  const keywordStemSet = new Set(
    question.kataKunciUtama.flatMap((kw) => tokenizeText(kw).flatMap((t) => getBilingualStemCandidates(t)))
  );
  const substantiveRefTokens = refTokens.filter((rt) => {
    const cands = getBilingualStemCandidates(rt);
    const inQuestionOnly = cands.some((c) => questionOnlyStemTokens.has(c)) && !cands.some((c) => keywordStemSet.has(c));
    return !inQuestionOnly;
  });

  const activeRefTokens = substantiveRefTokens.length > 0 ? substantiveRefTokens : refTokens;

  let refMatchedCount = 0;
  for (const rToken of activeRefTokens) {
    const hit = matchSingleTokenInUserInput(rToken, userTokens, userStemmedTokens, userConceptSets);
    if (hit.matched) {
      refMatchedCount += 1;
    }
  }

  // Combine user-precision & reference-recall so concise accurate answers score high too
  const refRecall = activeRefTokens.length > 0 ? refMatchedCount / activeRefTokens.length : 0;
  let userRefHitCount = 0;
  for (const uToken of userTokens) {
    const uCands = getBilingualStemCandidates(uToken);
    const uConcepts = userConceptSets.get(uToken);
    const matchesRef = activeRefTokens.some((rt) => {
      const rCands = getBilingualStemCandidates(rt);
      if (uCands.some((uc) => rCands.includes(uc))) return true;
      const rConcepts = getConceptIdsForWord(rt);
      if (uConcepts && rConcepts.size > 0) {
        for (const c of uConcepts) if (rConcepts.has(c)) return true;
      }
      return false;
    });
    if (matchesRef) userRefHitCount += 1;
  }
  const userPrecision = userTokens.length > 0 ? userRefHitCount / userTokens.length : 0;
  const corpusOverlapRatio = Math.min(1.0, refRecall * 1.65 * 0.6 + userPrecision * 0.4);

  // Structural grammar analysis (gentle)
  const { coherenceMultiplier, note: structureNote } = evaluateGrammarAndStructure(rawTrimmed);

  // Keyword matching determines the primary score (72% Keyword Match + 28% Concept Alignment)
  let baseScore = (keywordCoverageRatio * 0.72 + corpusOverlapRatio * 0.28) * 100;
  baseScore = baseScore * coherenceMultiplier;

  // Only blend selfAssessedScore if explicitly provided by an interactive self-rating control
  if (selfAssessedScore !== undefined && selfAssessedScore > 0) {
    baseScore = baseScore * 0.85 + selfAssessedScore * 0.15;
  }

  // Guarantee non-zero partial credit whenever at least 1 keyword/concept matches ("sedikit kesesuaian tidak harus jadi 0")
  const hasAnyRelevance =
    matchedKeywords.length > 0 || partialKeywords.length > 0 || refMatchedCount >= 1;
  let matchPercentage = Math.min(100, Math.max(0, Math.round(baseScore)));
  if (hasAnyRelevance && matchPercentage < 10) {
    matchPercentage = Math.max(10, Math.round(keywordCoverageRatio * 100) || 10);
  }
  if (!hasAnyRelevance) {
    matchPercentage = 0;
  }

  // Proportional score out of maxScore (10)
  const rawScoreEarned = (matchPercentage / 100) * maxScore;
  const scoreEarned = Math.round(rawScoreEarned * 10) / 10;

  const isCorrect = matchPercentage >= 70;

  // Detailed rubric feedback text
  const feedbackParts: string[] = [structureNote];
  if (matchedKeywords.length > 0 || partialKeywords.length > 0) {
    feedbackParts.push(
      `Kecocokan kata kunci: ${matchedKeywords.length}/${question.kataKunciUtama.length} penuh` +
        (partialKeywords.length > 0 ? ` & ${partialKeywords.length} sebagian` : '')
    );
  } else if (refMatchedCount > 0) {
    feedbackParts.push(`Terdapat ${refMatchedCount} istilah relevan dengan indikator penilaian`);
  } else {
    feedbackParts.push('Belum ditemukan kata kunci atau konsep yang sesuai dengan indikator penilaian');
  }
  if (synonymHighlights.some((s) => s.isBilingual)) {
    feedbackParts.push('Terdeteksi padanan istilah bilingual / sinonim konsep');
  }

  return {
    matchPercentage,
    scoreEarned,
    maxScore,
    isCorrect,
    matchedKeywords,
    partialKeywords,
    keywordMatchRatio: Math.round(keywordCoverageRatio * 100) / 100,
    synonymHighlights,
    structuralFeedback: `${feedbackParts.join('. ')}.`,
  };
};
