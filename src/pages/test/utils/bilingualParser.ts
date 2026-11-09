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
    idTerms: ['persediaan', 'stok barang', 'penyimpanan barang', 'gudang persediaan', 'cadangan bahan'],
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
    idTerms: ['kapasitas produksi', 'daya tampung', 'kemampuan produksi', 'volume hasil maksimal'],
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
    idTerms: ['output aktual', 'hasil nyata', 'realisasi produksi', 'hasil riil', 'keluaran nyata'],
    enTerms: ['actual output', 'actual production', 'real output'],
    acronyms: [],
  },
  {
    concept: 'quality_control',
    idTerms: ['pengendalian kualitas', 'pengendalian mutu', 'kendali mutu', 'kontrol mutu', 'pemeriksaan kualitas'],
    enTerms: ['quality control', 'quality assurance', 'total quality management'],
    acronyms: ['qc', 'qa', 'tqm'],
  },
  {
    concept: 'standardization',
    idTerms: ['standardisasi', 'penyeragaman', 'standarisasi', 'standar baku', 'cetakan seragam'],
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
    idTerms: ['proses transformasi', 'proses pengolahan', 'proses operasi', 'alur produksi', 'transformasi nilai tambah'],
    enTerms: ['transformation process', 'production process', 'operations system', 'value addition'],
    acronyms: [],
  },
  {
    concept: 'tangible',
    idTerms: ['berwujud fisik', 'benda berwujud', 'dapat disentuh', 'fisik nyata'],
    enTerms: ['tangible', 'physical goods', 'physical tangible'],
    acronyms: [],
  },
  {
    concept: 'intangible',
    idTerms: ['tidak berwujud', 'jasa nirwujud', 'layanan non fisik', 'pengalaman'],
    enTerms: ['intangible', 'services', 'intangibility'],
    acronyms: [],
  },

  // --- MANAJEMEN KEUANGAN ---
  {
    concept: 'bep',
    idTerms: ['titik impas', 'pulang pokok', 'balik modal', 'laba nol', 'impas', 'titik kembali modal'],
    enTerms: ['break even point', 'break-even', 'zero profit point'],
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
    idTerms: ['nilai sekarang bersih', 'net present value', 'arus kas diskonto', 'penilaian kelayakan investasi'],
    enTerms: ['net present value', 'discounted cash flow', 'capital budgeting feasibility'],
    acronyms: ['npv', 'dcf'],
  },
  {
    concept: 'liquidity',
    idTerms: ['likuiditas', 'kemampuan membayar utang jangka pendek', 'kelancaran kas', 'kewajiban lancar'],
    enTerms: ['liquidity', 'short-term solvency', 'ability to pay debts'],
    acronyms: [],
  },
  {
    concept: 'current_ratio',
    idTerms: ['rasio lancar', 'aktiva lancar dibagi utang lancar', 'tingkat rasio lancar'],
    enTerms: ['current ratio', 'liquidity ratio', 'working capital ratio'],
    acronyms: ['cr'],
  },
  {
    concept: 'equity',
    idTerms: ['modal sendiri', 'ekuitas', 'tabungan pribadi', 'saham pemilik usaha'],
    enTerms: ['equity', 'owner equity', 'retained equity', 'internal financing'],
    acronyms: [],
  },
  {
    concept: 'debt_financing',
    idTerms: ['modal pinjaman', 'utang bank', 'kredit usaha', 'pinjaman modal', 'liabilitas utang'],
    enTerms: ['debt financing', 'bank loan', 'borrowing', 'leverage'],
    acronyms: [],
  },
  {
    concept: 'dividend',
    idTerms: ['dividen', 'pembagian laba', 'kebijakan laba bersih', 'keuntungan dibagikan'],
    enTerms: ['dividend', 'dividend policy', 'profit distribution'],
    acronyms: [],
  },
  {
    concept: 'retained_earnings',
    idTerms: ['laba ditahan', 'keuntungan yang ditahan', 'reinvestasi laba'],
    enTerms: ['retained earnings', 'plowed back profit'],
    acronyms: [],
  },
  {
    concept: 'firm_value',
    idTerms: ['nilai perusahaan', 'nilai usaha', 'kesejahteraan pemegang saham', 'kemakmuran pemilik'],
    enTerms: ['firm value', 'shareholder wealth', 'company valuation'],
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
    idTerms: ['tidak dapat disimpan', 'mudah musnah', 'tidak tahan lama', 'jasa tidak bisa disimpan'],
    enTerms: ['perishability', 'perishable', 'cannot be stored'],
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
    enTerms: ['skimming pricing', 'market skimming'],
    acronyms: [],
  },
  {
    concept: 'sales_promotion',
    idTerms: ['promosi penjualan', 'insentif jangka pendek', 'diskon potongan harga', 'voucher belanja', 'beli dua gratis satu'],
    enTerms: ['sales promotion', 'promotional discount', 'short-term incentive'],
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
    enTerms: ['positioning', 'market position', 'brand image in customer mind'],
    acronyms: [],
  },
  {
    concept: 'marketing_mix',
    idTerms: ['bauran pemasaran', 'produk harga lokasi promosi', 'alat pemasaran taktis'],
    enTerms: ['marketing mix', '4p', '7p', 'product price place promotion'],
    acronyms: ['4p', '7p'],
  },

  // --- MANAJEMEN SDM ---
  {
    concept: 'human_capital',
    idTerms: ['modal manusia', 'aset manusia', 'tenaga kerja strategis', 'karyawan sebagai aset'],
    enTerms: ['human capital', 'human resources', 'talent asset'],
    acronyms: ['hc', 'hr'],
  },
  {
    concept: 'training',
    idTerms: ['pelatihan kerja', 'pelatihan', 'peningkatan keterampilan saat ini', 'kursus teknis'],
    enTerms: ['training', 'job skill training', 'vocational training'],
    acronyms: [],
  },
  {
    concept: 'development',
    idTerms: ['pengembangan karir', 'pengembangan', 'pembinaan kepemimpinan masa depan', 'karir masa depan'],
    enTerms: ['development', 'career development', 'leadership development', 'future readiness'],
    acronyms: [],
  },
  {
    concept: 'performance_appraisal',
    idTerms: ['penilaian kinerja', 'evaluasi kerja', 'penilaian prestasi kerja', 'evaluasi karyawan'],
    enTerms: ['performance appraisal', 'performance evaluation', 'kpi assessment'],
    acronyms: ['kpi'],
  },
  {
    concept: 'internal_equity',
    idTerms: ['keadilan internal', 'keadilan pengupahan', 'bobot tanggung jawab jabatan', 'keadilan kompensasi'],
    enTerms: ['internal equity', 'internal compensation equity', 'job evaluation equity'],
    acronyms: [],
  },
  {
    concept: 'k3',
    idTerms: ['keselamatan dan kesehatan kerja', 'k3', 'keamanan kerja', 'bebas kecelakaan', 'nihil kecelakaan'],
    enTerms: ['occupational health and safety', 'workplace safety', 'zero accident'],
    acronyms: ['k3', 'ohs', 'hse'],
  },
  {
    concept: 'intrinsic_motivation',
    idTerms: ['motivasi non finansial', 'motivasi intrinsik', 'pujian tulus', 'penghargaan karyawan teladan', 'suasana kerja nyaman'],
    enTerms: ['intrinsic motivation', 'non-financial reward', 'employee recognition'],
    acronyms: [],
  },
  {
    concept: 'recruitment',
    idTerms: ['rekrutmen dan seleksi', 'pengadaan tenaga kerja', 'penarikan pegawai', 'penerimaan karyawan'],
    enTerms: ['recruitment and selection', 'talent acquisition', 'staffing'],
    acronyms: [],
  },
];

// Stopwords in Indonesian & English
const STOPWORDS = new Set([
  'dan', 'atau', 'yang', 'di', 'ke', 'dari', 'untuk', 'pada', 'adalah', 'yaitu', 'seperti',
  'dalam', 'dengan', 'oleh', 'karena', 'maka', 'akan', 'bisa', 'dapat', 'secara', 'ini', 'itu',
  'juga', 'agar', 'jika', 'bila', 'saat', 'serta', 'antara', 'sebuah', 'suatu', 'para', 'bagi',
  'terhadap', 'menjadi', 'membuat', 'melakukan', 'tentang', 'atas', 'setiap', 'harus', 'lebih',
  'saya', 'kami', 'anda', 'dia', 'mereka', 'sudah', 'telah', 'sedang', 'hanya', 'saja',
  'the', 'and', 'or', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'be', 'an', 'a'
]);

// ============================================================================
// 2. Morphological Stemmer & Normalizer (Indonesian & English)
// ============================================================================

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
    else if (w.endsWith('i')) w = w.slice(0, -1);
  }

  // Prefixes: meng-, meny-, mem-, men-, me-
  if (w.startsWith('meny') && w.length > 5) w = 's' + w.slice(4);
  else if (w.startsWith('meng') && w.length > 5) w = w.slice(4);
  else if (w.startsWith('mem') && w.length > 5) {
    const nextChar = w[3];
    w = (nextChar === 'p' || nextChar === 'b' ? '' : 'p') + w.slice(3);
  } else if (w.startsWith('men') && w.length > 5) {
    const nextChar = w[3];
    w = (nextChar === 't' || nextChar === 'd' ? '' : 't') + w.slice(3);
  } else if (w.startsWith('me') && w.length > 4) w = w.slice(2);

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
  if (w.startsWith('peny') && w.length > 5) w = 's' + w.slice(4);
  else if (w.startsWith('peng') && w.length > 5) w = w.slice(4);
  else if (w.startsWith('pem') && w.length > 5) {
    const nextChar = w[3];
    w = (nextChar === 'p' || nextChar === 'b' ? '' : 'p') + w.slice(3);
  } else if (w.startsWith('pen') && w.length > 5) {
    const nextChar = w[3];
    w = (nextChar === 't' || nextChar === 'd' ? '' : 't') + w.slice(3);
  } else if (w.startsWith('per') && w.length > 5) w = w.slice(3);
  else if (w.startsWith('pe') && w.length > 4) w = w.slice(2);

  return w;
};

/**
 * Strips common English inflections to match verb/noun roots
 */
export const stemEnglish = (word: string): string => {
  let w = word.toLowerCase().trim();
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
 * Cleans punctuation and returns an array of unique informative tokens
 */
export const tokenizeText = (text: string): string[] => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
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

  const total = (str1.length - 1) + (str2.length - 1);
  return total > 0 ? (2 * intersection) / total : 0;
};

// ============================================================================
// 3. Parser & Matcher Bilingual Cerdas
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
  matchedKeywords: string[];
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
  const kwLower = keyword.toLowerCase().trim();
  const set = new Set<string>();
  let hasBilingual = false;

  set.add(kwLower);

  // 1. Question specific synonyms
  if (questionSynonyms) {
    for (const [head, syns] of Object.entries(questionSynonyms)) {
      if (kwLower.includes(head.toLowerCase()) || head.toLowerCase().includes(kwLower)) {
        hasBilingual = true;
        set.add(head.toLowerCase());
        for (const s of syns) set.add(s.toLowerCase());
      }
    }
  }

  // 2. Global bilingual thesaurus search
  for (const entry of BILINGUAL_THESAURUS) {
    const allInEntry = [...entry.idTerms, ...entry.enTerms, ...entry.acronyms, entry.concept];
    const matchesConcept = allInEntry.some(
      (term) => kwLower.includes(term.toLowerCase()) || term.toLowerCase().includes(kwLower)
    );

    if (matchesConcept) {
      hasBilingual = true;
      for (const t of entry.idTerms) set.add(t.toLowerCase());
      for (const t of entry.enTerms) set.add(t.toLowerCase());
      for (const a of entry.acronyms) set.add(a.toLowerCase());
    }
  }

  return {
    terms: Array.from(set),
    isBilingual: hasBilingual,
  };
};

/**
 * Checks if a target keyword or any of its bilingual synonyms appears in user input
 */
export const matchKeywordInText = (
  keyword: string,
  userText: string,
  userTokens: string[],
  userStemmedTokens: Set<string>,
  questionSynonyms?: Record<string, string[]>
): { matched: boolean; matchedAs?: string; isBilingual: boolean } => {
  const userTextLower = userText.toLowerCase();
  const kwLower = keyword.toLowerCase().trim();

  // 1. Direct exact substring match
  if (userTextLower.includes(kwLower)) {
    return { matched: true, matchedAs: keyword, isBilingual: false };
  }

  // 2. Bilingual and synonym lookup
  const { terms, isBilingual } = findSynonymVariants(keyword, questionSynonyms);
  for (const syn of terms) {
    if (syn && userTextLower.includes(syn)) {
      return { matched: true, matchedAs: syn, isBilingual: true };
    }
  }

  // 3. Stemmed token matching
  const kwTokens = tokenizeText(keyword);
  if (kwTokens.length > 0) {
    const kwStemmed = kwTokens.map((t) => stemBilingual(t));
    const matchedCount = kwStemmed.filter((st) => userStemmedTokens.has(st)).length;
    if (matchedCount / kwStemmed.length >= 0.6) {
      return { matched: true, matchedAs: `${keyword} (padanan bentuk kata)`, isBilingual };
    }
  }

  // 4. Fuzzy distance matching for STT speech recognition slips
  for (const syn of terms) {
    const synTokens = tokenizeText(syn);
    if (synTokens.length > 0) {
      for (const uToken of userTokens) {
        for (const sToken of synTokens) {
          if (calculateDiceCoefficient(uToken, sToken) >= 0.82) {
            return { matched: true, matchedAs: `${syn} ~ ${uToken}`, isBilingual: true };
          }
        }
      }
    }
  }

  return { matched: false, isBilingual: false };
};

/**
 * Analyzes sentence syntax, connector coherence, and relational structure
 */
export const evaluateGrammarAndStructure = (userText: string): { coherenceMultiplier: number; note: string } => {
  const trimmed = userText.trim();
  if (trimmed.length < 5) {
    return { coherenceMultiplier: 0.5, note: 'Jawaban terlalu ringkas' };
  }

  // Explanatory connector words
  const connectors = [
    'karena', 'sehingga', 'adalah', 'merupakan', 'yaitu', 'dengan cara', 'meliputi',
    'antara', 'bertujuan', 'menghasilkan', 'karena itu', 'agar', 'oleh karena itu',
    'because', 'which is', 'therefore', 'in order to', 'such as', 'due to'
  ];

  const lower = trimmed.toLowerCase();
  const connectorMatches = connectors.filter((c) => lower.includes(c));
  const sentences = trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const wordCount = trimmed.split(/\s+/).length;

  let multiplier = 1.0;
  let note = 'Tatanan bahasa dan struktur argumentasi baik';

  if (wordCount >= 10 && connectorMatches.length >= 1) {
    multiplier = 1.1; // Bonus for coherent structured explanation
    note = 'Struktur kalimat runtut dengan konjungsi penjelasan yang tepat';
  } else if (wordCount >= 5 && connectorMatches.length >= 1) {
    multiplier = 1.05;
    note = 'Pola kalimat jelas dan saling berhubungan';
  } else if (wordCount < 4) {
    multiplier = 0.85;
    note = 'Struktur frasa singkat tanpa uraian kalimat lengkap';
  }

  return { coherenceMultiplier: multiplier, note };
};

/**
 * Universal Bilingual Parser and Proportional Evaluator
 */
export const parseAndEvaluateBilingualAnswer = (
  userInput: string,
  question: ExamQuestion,
  selfAssessedScore?: number,
  maxScore = 10
): BilingualMatchResult => {
  const rawTrimmed = (userInput || '').trim();

  // Empty response
  if (!rawTrimmed) {
    return {
      matchPercentage: 0,
      scoreEarned: 0,
      maxScore,
      isCorrect: false,
      matchedKeywords: [],
      synonymHighlights: [],
      structuralFeedback: 'Tidak ada jawaban atau transkrip suara yang terekam.',
    };
  }

  const rawUpper = rawTrimmed.toUpperCase();
  const qKey = question.kunciJawaban;

  // Direct option letter match (e.g. user wrote "A", "Opsi A", "Pilihan A")
  if (
    rawUpper === qKey ||
    rawUpper === `OPSI ${qKey}` ||
    rawUpper === `PILIHAN ${qKey}` ||
    rawUpper.startsWith(`${qKey}.`) ||
    rawUpper.startsWith(`${qKey} `)
  ) {
    return {
      matchPercentage: 100,
      scoreEarned: maxScore,
      maxScore,
      isCorrect: true,
      matchedKeywords: question.kataKunciUtama,
      synonymHighlights: question.kataKunciUtama.map((k) => ({
        keyword: k,
        matchedAs: `Pilihan Kunci (${qKey})`,
        isBilingual: false,
      })),
      structuralFeedback: `Jawaban tepat sesuai kunci abjad Opsi (${qKey}).`,
    };
  }

  // Explicit incorrect letter choice
  if (['A', 'B', 'C', 'D'].includes(rawUpper)) {
    return {
      matchPercentage: 0,
      scoreEarned: 0,
      maxScore,
      isCorrect: false,
      matchedKeywords: [],
      synonymHighlights: [],
      structuralFeedback: `Memilih opsi (${rawUpper}) yang tidak sesuai dengan kunci jawaban resmi (${qKey}).`,
    };
  }

  // Natural Language Parsing
  const userTokens = tokenizeText(rawTrimmed);
  const userStemmedTokens = new Set(userTokens.map((t) => stemBilingual(t)));

  const matchedKeywords: string[] = [];
  const synonymHighlights: SynonymMatchHighlight[] = [];

  // Match all primary keywords
  for (const kw of question.kataKunciUtama) {
    const match = matchKeywordInText(
      kw,
      rawTrimmed,
      userTokens,
      userStemmedTokens,
      question.sinonimBilingual
    );

    if (match.matched) {
      matchedKeywords.push(kw);
      synonymHighlights.push({
        keyword: kw,
        matchedAs: match.matchedAs || kw,
        isBilingual: match.isBilingual,
      });
    }
  }

  const keywordCoverageRatio =
    question.kataKunciUtama.length > 0
      ? matchedKeywords.length / question.kataKunciUtama.length
      : 0;

  // Conceptual corpus overlap against descriptive key & correct option text
  const correctOpt = question.options.find((o) => o.key === question.kunciJawaban);
  const referenceCorpus = `${question.kunciJawabanDeskriptif} ${correctOpt?.text || ''}`;
  const refTokens = tokenizeText(referenceCorpus);
  const refStemmed = new Set(refTokens.map((t) => stemBilingual(t)));

  let tokenMatchCount = 0;
  for (const uStem of userStemmedTokens) {
    if (refStemmed.has(uStem)) {
      tokenMatchCount += 1;
    }
  }

  const corpusOverlapRatio =
    userStemmedTokens.size > 0
      ? Math.min(1.0, (tokenMatchCount / userStemmedTokens.size) * 1.4)
      : 0;

  // Structural grammar analysis
  const { coherenceMultiplier, note: structureNote } = evaluateGrammarAndStructure(rawTrimmed);

  // Compute composite raw percentage
  // Weighting: 60% Keyword Coverage, 30% Conceptual Overlap, 10% Grammar & Syntactic Coherence
  let baseScore = (keywordCoverageRatio * 0.65 + corpusOverlapRatio * 0.35) * 100;
  baseScore = baseScore * coherenceMultiplier;

  // If oral self-assessed score is provided, blend gently (80% automated parsing + 20% self-assessment)
  if (selfAssessedScore !== undefined && selfAssessedScore > 0) {
    baseScore = baseScore * 0.8 + selfAssessedScore * 0.2;
  }

  // Clamp percentage between 0 and 100
  const matchPercentage = Math.min(100, Math.max(0, Math.round(baseScore)));

  // Proportional score: e.g. 92% of 10 = 9.2 (or 9)
  const rawScoreEarned = (matchPercentage / 100) * maxScore;
  const scoreEarned = Math.round(rawScoreEarned * 10) / 10;

  const isCorrect = matchPercentage >= 70;

  // Feedback text
  let feedback = structureNote;
  if (synonymHighlights.some((s) => s.isBilingual)) {
    feedback += '. Terdeteksi penggunaan padanan istilah bilingual / sinonim resmi.';
  }

  return {
    matchPercentage,
    scoreEarned,
    maxScore,
    isCorrect,
    matchedKeywords,
    synonymHighlights,
    structuralFeedback: feedback,
  };
};
