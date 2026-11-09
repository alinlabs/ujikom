/**
 * Utilitas Transkripsi Fonetis Bahasa Indonesia untuk Text-to-Speech (TTS)
 * Mengoptimalkan pelafalan istilah asing (Inggris), singkatan/akronim bisnis,
 * serta simbol seperti tanda kurung dan garis miring agar diucapkan fasih, luwes,
 * dan alami oleh sintesis vokal browser Indonesia.
 */

import { ExamQuestion } from '../types/exam';

const DICTIONARY: Array<{ pattern: RegExp; replacement: string }> = [
  // 1. Istilah spesifik Bauran Pemasaran (Marketing Mix 3P, 4P, 7P, 4C)
  { pattern: /\b3P\b/gi, replacement: 'Tri Pi' },
  { pattern: /\b4P\b/gi, replacement: 'For Pi' },
  { pattern: /\b7P\b/gi, replacement: 'Seven Pi' },
  { pattern: /\b4C\b/gi, replacement: 'For Si' },
  { pattern: /\bPeople\b/gi, replacement: 'Pipelt' },
  { pattern: /\bProcess\b/gi, replacement: 'Proses' },
  { pattern: /\bPhysical Evidence\b/gi, replacement: 'Fisikel Efidens' },
  { pattern: /\bMarketing Mix\b/gi, replacement: 'Marketing Miks' },
  { pattern: /\blevels of product\b/gi, replacement: 'levels of prodak' },
  { pattern: /\bCore Benefit\b/gi, replacement: 'Kor Benefit' },
  { pattern: /\bActual Product\b/gi, replacement: 'Aktual Prodak' },
  { pattern: /\bAugmented Product\b/gi, replacement: 'Ogmenteid Prodak' },
  { pattern: /\bBrand Equity\b/gi, replacement: 'Brend Ekuiniti' },
  { pattern: /\bBrand\b/gi, replacement: 'Brend' },
  { pattern: /\bPositioning\b/gi, replacement: 'Posisyen-ing' },
  { pattern: /\bTargeting\b/gi, replacement: 'Target-ing' },
  { pattern: /\bSegmenting\b/gi, replacement: 'Segmen-ting' },
  { pattern: /\bMarket Share\b/gi, replacement: 'Market Syer' },
  { pattern: /\bCustomer Lifetime Value\b/gi, replacement: 'Kastemer Laiftaim Velyu' },
  { pattern: /\bCustomer Relationship Management\b/gi, replacement: 'Kastemer Rileysyensyip Menejemen' },
  { pattern: /\bRelationship Marketing\b/gi, replacement: 'Rileysyensyip Marketing' },
  { pattern: /\bWord of Mouth\b/gi, replacement: 'Werd of Maut' },
  { pattern: /\bE-Commerce\b/gi, replacement: 'I-Komers' },
  { pattern: /\bOmnichannel\b/gi, replacement: 'Omnisenel' },
  { pattern: /\bPackaging\b/gi, replacement: 'Pekejing' },
  { pattern: /\bLabeling\b/gi, replacement: 'Lebeling' },
  { pattern: /\bInseparability\b/gi, replacement: 'In-separabiliti' },
  { pattern: /\bIntangibility\b/gi, replacement: 'Inten-jibiliti' },
  { pattern: /\bPerishability\b/gi, replacement: 'Perisye-biliti' },
  { pattern: /\bVariability\b/gi, replacement: 'Verie-biliti' },
  { pattern: /\bIHIP\b/g, replacement: 'Ai-Eits-Ai-Pi' },
  { pattern: /\bProduct Life Cycle\b/gi, replacement: 'Prodak Laif Saikel' },
  { pattern: /\bPLC\b/g, replacement: 'Pi-El-Si' },

  // 2. Istilah & Akronim Manajemen Keuangan
  { pattern: /\bBreak Even Point\b/gi, replacement: 'Breyk Iven Point' },
  { pattern: /\bBEP\b/g, replacement: 'Bi-I-Pi' },
  { pattern: /\bPayback Period\b/gi, replacement: 'Peybek Piriod' },
  { pattern: /\bReturn on Investment\b/gi, replacement: 'Ritern on Invesmen' },
  { pattern: /\bROI\b/g, replacement: 'Ar-O-Ai' },
  { pattern: /\bReturn on Equity\b/gi, replacement: 'Ritern on Ekuiti' },
  { pattern: /\bROE\b/g, replacement: 'Ar-O-I' },
  { pattern: /\bReturn on Assets\b/gi, replacement: 'Ritern on Aset' },
  { pattern: /\bROA\b/g, replacement: 'Ar-O-Ey' },
  { pattern: /\bNet Present Value\b/gi, replacement: 'Net Prezen Velyu' },
  { pattern: /\bNPV\b/g, replacement: 'En-Pi-Vi' },
  { pattern: /\bInternal Rate of Return\b/gi, replacement: 'Internal Reit of Ritern' },
  { pattern: /\bIRR\b/g, replacement: 'Ai-Ar-Ar' },
  { pattern: /\bWeighted Average Cost of Capital\b/gi, replacement: 'Weitid Everij Kos of Kapital' },
  { pattern: /\bWACC\b/g, replacement: 'Wak atau W-A-C-C' },
  { pattern: /\bEconomic Value Added\b/gi, replacement: 'Ekonomik Velyu Eded' },
  { pattern: /\bEVA\b/g, replacement: 'I-Vi-Ey' },
  { pattern: /\bProfitability Index\b/gi, replacement: 'Profitabiliti Indeks' },
  { pattern: /\bPI\b/g, replacement: 'Pi-Ai' },
  { pattern: /\bCapital Budgeting\b/gi, replacement: 'Kapital Bajat-ing' },
  { pattern: /\bWorking Capital\b/gi, replacement: 'Werking Kapital' },
  { pattern: /\bCash Flow\b/gi, replacement: 'Kesy Flo' },
  { pattern: /\bFree Cash Flow\b/gi, replacement: 'Fri Kesy Flo' },
  { pattern: /\bTime Value of Money\b/gi, replacement: 'Taim Velyu of Mani' },
  { pattern: /\bCost of Capital\b/gi, replacement: 'Kos of Kapital' },
  { pattern: /\bCost of Debt\b/gi, replacement: 'Kos of Det' },
  { pattern: /\bCost of Equity\b/gi, replacement: 'Kos of Ekuiti' },
  { pattern: /\bDividend Payout Ratio\b/gi, replacement: 'Dividen Payout Reysyo' },
  { pattern: /\bDebt to Equity Ratio\b/gi, replacement: 'Det tu Ekuiti Reysyo' },
  { pattern: /\bDER\b/g, replacement: 'Di-I-Ar' },
  { pattern: /\bDebt to Asset Ratio\b/gi, replacement: 'Det tu Aset Reysyo' },
  { pattern: /\bDAR\b/g, replacement: 'Di-Ey-Ar' },
  { pattern: /\bCurrent Ratio\b/gi, replacement: 'Karent Reysyo' },
  { pattern: /\bMargin of Safety\b/gi, replacement: 'Marjin of Sefti' },
  { pattern: /\bMoS\b/g, replacement: 'Em-O-Es' },
  { pattern: /\bAcid-Test Ratio\b/gi, replacement: 'Esid Tes Reysyo' },
  { pattern: /\bQuick Ratio\b/gi, replacement: 'Kwik Reysyo' },
  { pattern: /\bCash Ratio\b/gi, replacement: 'Kesy Reysyo' },
  { pattern: /\bInventory Turnover\b/gi, replacement: 'Inventori Tern-over' },
  { pattern: /\bAccounts Receivable\b/gi, replacement: 'Ekaun Risivebel' },
  { pattern: /\bCapital Structure\b/gi, replacement: 'Kapital Strakcer' },
  { pattern: /\bLeverage\b/gi, replacement: 'Leverij' },
  { pattern: /\bFinancial Distress\b/gi, replacement: 'Fainensyel Distres' },
  { pattern: /\bInitial Public Offering\b/gi, replacement: 'Inisyel Pablik Ofering' },
  { pattern: /\bIPO\b/g, replacement: 'Ai-Pi-O' },
  { pattern: /\bBird-in-the-Hand\b/gi, replacement: 'Berd in de Hend' },
  { pattern: /\bSignaling Theory\b/gi, replacement: 'Signaling Tiori' },
  { pattern: /\binterest tax shield\b/gi, replacement: 'interest teks syild' },
  { pattern: /\boptimal capital structure\b/gi, replacement: 'optimal kapital strakcer' },
  { pattern: /\bdividend policy\b/gi, replacement: 'dividen polisi' },
  { pattern: /\bDPR\b/g, replacement: 'Di-Pi-Ar' },

  // 3. Istilah & Akronim Manajemen Operasional
  { pattern: /\bEconomic Order Quantity\b/gi, replacement: 'Ekonomik Order Kuantiti' },
  { pattern: /\bEOQ\b/g, replacement: 'I-O-Kyu' },
  { pattern: /\bJust In Time\b/gi, replacement: 'Jas In Taim' },
  { pattern: /\bJust-In-Time\b/gi, replacement: 'Jas In Taim' },
  { pattern: /\bJIT\b/g, replacement: 'Jas In Taim, atau Je-I-Te' },
  { pattern: /\bTotal Quality Management\b/gi, replacement: 'Total Kualiti Menejemen' },
  { pattern: /\bTQM\b/g, replacement: 'Ti-Kyu-Em' },
  { pattern: /\bHouse of Quality\b/gi, replacement: 'Haus of Kualiti' },
  { pattern: /\bQuality Function Deployment\b/gi, replacement: 'Kualiti Fangsyen Diploidmen' },
  { pattern: /\bQFD\b/g, replacement: 'Kyu-Ef-Di' },
  { pattern: /\bMaterial Requirement Planning\b/gi, replacement: 'Metirial Rekwayermen Plening' },
  { pattern: /\bMaterial Requirements Planning\b/gi, replacement: 'Metirial Rekwayermen Plening' },
  { pattern: /\bMRP\b/g, replacement: 'Em-Ar-Pi' },
  { pattern: /\bCapacity Requirement Planning\b/gi, replacement: 'Kapasiti Rekwayermen Plening' },
  { pattern: /\bCRP\b/g, replacement: 'Si-Ar-Pi' },
  { pattern: /\bMaster Production Schedule\b/gi, replacement: 'Master Prodaksyen Skeyjul' },
  { pattern: /\bMPS\b/g, replacement: 'Em-Pi-Es' },
  { pattern: /\bSupply Chain Management\b/gi, replacement: 'Suplay Cen Menejemen' },
  { pattern: /\bSCM\b/g, replacement: 'Es-Se-Em' },
  { pattern: /\bSafety Stock\b/gi, replacement: 'Sefti Stok' },
  { pattern: /\bReorder Point\b/gi, replacement: 'Riorder Point' },
  { pattern: /\bROP\b/g, replacement: 'Ar-O-Pi' },
  { pattern: /\bLead Time\b/gi, replacement: 'Lid Taim' },
  { pattern: /\bSix Sigma\b/gi, replacement: 'Siks Sigma' },
  { pattern: /\bCritical Path Method\b/gi, replacement: 'Kritikal Pas Metod' },
  { pattern: /\bCPM\b/g, replacement: 'Si-Pi-Em' },
  { pattern: /\bPERT\b/g, replacement: 'Pert' },
  { pattern: /\bGantt Chart\b/gi, replacement: 'Gen Cart' },
  { pattern: /\bBill of Materials\b/gi, replacement: 'Bil of Metirials' },
  { pattern: /\bBOM\b/g, replacement: 'Bi-O-Em' },
  { pattern: /\bStatistical Process Control\b/gi, replacement: 'Statistikal Proses Kontrol' },
  { pattern: /\bSPC\b/g, replacement: 'Es-Pi-Si' },
  { pattern: /\bVendor-Managed Inventory\b/gi, replacement: 'Vendor Manejd Inventori' },
  { pattern: /\bVMI\b/g, replacement: 'Vi-Em-Ai' },
  { pattern: /\bPoint-of-Sale\b/gi, replacement: 'Point of Seil' },
  { pattern: /\bPOS\b/g, replacement: 'Pi-O-Es' },
  { pattern: /\bTotal Productive Maintenance\b/gi, replacement: 'Total Prodaktiv Mentenens' },
  { pattern: /\bTPM\b/g, replacement: 'Ti-Pi-Em' },
  { pattern: /\bLean Operations\b/gi, replacement: 'Lin Opereisyens' },
  { pattern: /\bLean\b/gi, replacement: 'Lin' },
  { pattern: /\bAndon cord\b/gi, replacement: 'Andon kord' },
  { pattern: /\bBottleneck\b/gi, replacement: 'Botel-nek' },
  { pattern: /\bLayout\b/gi, replacement: 'Tata letak' },
  { pattern: /\bRouting\b/gi, replacement: 'Rauting' },
  { pattern: /\bScheduling\b/gi, replacement: 'Skeyjuling' },
  { pattern: /\bQuality Control\b/gi, replacement: 'Kualiti Kontrol' },
  { pattern: /\bQuality Assurance\b/gi, replacement: 'Kualiti Asyurens' },
  { pattern: /\bnet requirements\b/gi, replacement: 'net rikwaiermen' },

  // 4. Istilah & Akronim Manajemen SDM
  { pattern: /\bHuman Resource Management\b/gi, replacement: 'Hyumen Risors Menejemen' },
  { pattern: /\bHRM\b/g, replacement: 'Eits-Ar-Em' },
  { pattern: /\bHuman Resource Planning\b/gi, replacement: 'Hyumen Risors Plening' },
  { pattern: /\bHRP\b/g, replacement: 'Eits-Ar-Pi' },
  { pattern: /\bMSDM\b/g, replacement: 'Em-Es-De-Em' },
  { pattern: /\bSHRM\b/g, replacement: 'Es-Eits-Ar-Em' },
  { pattern: /\bHRD\b/g, replacement: 'Eits-Ar-Di' },
  { pattern: /\bTraining Needs Assessment\b/gi, replacement: 'Treining Nids Esesmen' },
  { pattern: /\bTNA\b/g, replacement: 'Ti-En-Ey' },
  { pattern: /\bJob Analysis\b/gi, replacement: 'Job Analisis' },
  { pattern: /\bJob Description\b/gi, replacement: 'Job Deskripsyen' },
  { pattern: /\bJob Specification\b/gi, replacement: 'Job Spesifikesyen' },
  { pattern: /\bJob Enrichment\b/gi, replacement: 'Job Enricyment' },
  { pattern: /\bJob Enlargement\b/gi, replacement: 'Job Enlarjment' },
  { pattern: /\bJob Rotation\b/gi, replacement: 'Job Roteisyen' },
  { pattern: /\bPerformance Appraisal\b/gi, replacement: 'Performens Epreisal' },
  { pattern: /\bKey Performance Indicator\b/gi, replacement: 'Ki Performens Indikator' },
  { pattern: /\bKPI\b/g, replacement: 'Ka-Pe-I' },
  { pattern: /\bOn the Job Training\b/gi, replacement: 'On de Job Treining' },
  { pattern: /\bOff the Job Training\b/gi, replacement: 'Of de Job Treining' },
  { pattern: /\bManagement by Objectives\b/gi, replacement: 'Menejemen bai Objektiv' },
  { pattern: /\bMBO\b/g, replacement: 'Em-Bi-O' },
  { pattern: /\b360 Degree Feedback\b/gi, replacement: 'Tri Siksti Digri Fidbek' },
  { pattern: /\bTurnover\b/gi, replacement: 'Tern-over' },
  { pattern: /\bAssessment Center\b/gi, replacement: 'Esesmen Senter' },
  { pattern: /\bTalent Management\b/gi, replacement: 'Telent Menejemen' },
  { pattern: /\bSuccession Planning\b/gi, replacement: 'Sakseysyen Plening' },
  { pattern: /\bWork-Life Balance\b/gi, replacement: 'Werk Laif Belens' },
  { pattern: /\bPay-for-Performance\b/gi, replacement: 'Pey for Performens' },
  { pattern: /\bMerit Pay\b/gi, replacement: 'Merit Pey' },
  { pattern: /\bHierarchy of Hazard Controls\b/gi, replacement: 'Hairarki of Hazard Kontrols' },
  { pattern: /\bPKB\b/g, replacement: 'Pe-Ka-Be' },
  { pattern: /\bCoaching\b/gi, replacement: 'Kocing' },
  { pattern: /\bCounseling\b/gi, replacement: 'Kaunseling' },
  { pattern: /\bMentoring\b/gi, replacement: 'Mentoring' },

  // 5. Singkatan Umum Manajemen & Metodologi
  { pattern: /Future Value\s*=\s*PV\s*x\s*\(1\s*\+\s*i\)\^n/gi, replacement: 'Fiucyer Velyu sama dengan Pi-Vi dikali satu tambah i pangkat n' },
  { pattern: /\bFuture Value\b/gi, replacement: 'Fiucyer Velyu' },
  { pattern: /\bPresent Value\b/gi, replacement: 'Prezen Velyu' },
  { pattern: /\bPV\b/g, replacement: 'Pi-Vi' },
  { pattern: /\bSWOT\b/g, replacement: 'Es-We-O-Te' },
  { pattern: /\bSOP\b/g, replacement: 'Es-O-Pe' },
  { pattern: /\bSDM\b/g, replacement: 'Es-De-Em' },
  { pattern: /\bK3\b/g, replacement: 'Ka Tiga' },
  { pattern: /\bPOAC\b/g, replacement: 'Pe-O-A-Se' },
  { pattern: /\bPDCA\b/g, replacement: 'Plan Du Cek Aksi' },
  { pattern: /\bPDCA Cycle\b/gi, replacement: 'Siklus Pi-Di-Si-Ey' },
  { pattern: /\bABC Analysis\b/gi, replacement: 'Analisis Ey-Bi-Si' },
  { pattern: /\bKPR\b/g, replacement: 'Ka-Pe-Er' },
  { pattern: /\bRUPS\b/g, replacement: 'Er-U-Pe-Es' },
  { pattern: /\bPT\b/g, replacement: 'Pe-Te' },
  { pattern: /\bAC\b/g, replacement: 'A-Se' },
  { pattern: /\bISO\b/g, replacement: 'Ai-Es-O' },
  { pattern: /\bIMC\b/g, replacement: 'I-Em-Si' },
  { pattern: /\bPR\b/g, replacement: 'Pi-Ar' },
  { pattern: /\bCSR\b/g, replacement: 'Si-Es-Ar' },
  { pattern: /\bDigital Marketing\b/gi, replacement: 'Dijital Marketing' },
  { pattern: /\bSales Promotion\b/gi, replacement: 'Seils Promosyen' },
  { pattern: /\bPromotion Mix\b/gi, replacement: 'Promosyen Miks' },
  { pattern: /\bThe Three Cs of Pricing\b/gi, replacement: 'De Tri Sis of Praising' },
  { pattern: /\bMarket-Skimming Pricing\b/gi, replacement: 'Market Skimming Praising' },
  { pattern: /\bMarket-Penetration Pricing\b/gi, replacement: 'Market Penetration Praising' },
  { pattern: /\bLoyalty Rewards Program\b/gi, replacement: 'Loyalti Riwards Program' },
  { pattern: /\bRp\s*([\d\.,]+?)([\.\?\!,;]?)(?=\s|$)/g, replacement: '$1 rupiah$2' },
  { pattern: /%/g, replacement: ' persen' },
];

/**
 * Mengubah tanda kurung perincian/terjemahan dwibahasa menjadi kalimat lisan natural:
 * Contoh: "(People / Orang, Process / Proses, Physical Evidence / Bukti Fisik)"
 * Menjadi: ", yaitu Pipelt atau Orang, Proses atau Proses, dan Fisikel Efidens atau Bukti Fisik,"
 */
export function formatParenthesizedBilingualList(text: string): string {
  return text.replace(/\(([^)]+)\)/g, (_match, inner) => {
    const trimmed = inner.trim();
    // Jika di dalam kurung terdapat tanda garis miring (/) atau koma (,)
    if (trimmed.includes('/') || trimmed.includes(',')) {
      const items = trimmed.split(',').map((part: string) => {
        // Ganti '/' dengan ' atau '
        return part
          .split('/')
          .map((sub: string) => sub.trim())
          .join(' atau ');
      });

      if (items.length > 1) {
        const lastItem = items.pop();
        return `, yaitu ${items.join(', ')}, dan ${lastItem},`;
      }
      return `, yaitu ${items[0]},`;
    }

    // Jika hanya satu item tanpa slash/koma, misal (levels of product) atau (BEP)
    return `, yaitu ${trimmed},`;
  });
}

/**
 * Membersihkan tanda baca yang kaku atau tidak perlu dibaca harfiah oleh TTS
 */
export function cleanPunctuationForSpeech(text: string): string {
  return text
    // Ganti ellipsis (...) dengan tanda tanya jika di akhir kalimat atau koma jika di tengah
    .replace(/\.{2,}\s*$/g, '?')
    .replace(/\.{2,}/g, ', ')
    // Hilangkan tanda petik ganda/tunggal yang sering dieja oleh beberapa suara peramban
    .replace(/["“”'‘’]/g, '')
    // Bersihkan tanda baca ganda seperti ', ?' atau ', !' atau ', .'
    .replace(/,\s*\?/g, '?')
    .replace(/,\s*!/g, '!')
    .replace(/,\s*\./g, '.')
    .replace(/,\s*,/g, ',')
    // Rapikan spasi sebelum tanda baca
    .replace(/\s+([,\.!\?])/g, '$1')
    // Rapikan spasi ganda
    .replace(/\s+/g, ' ')
    .replace(/\s*,\s*/g, ', ')
    .replace(/\s*\?\s*/g, '? ')
    .trim();
}

/**
 * Mengubah teks mentah menjadi transkrip fonetis ramah TTS bahasa Indonesia
 */
export function convertToPhoneticSpeech(rawText: string): string {
  if (!rawText) return '';

  let result = rawText;

  // 1. Format kurung terjemahan / dwibahasa menjadi kalimat lisan natural
  result = formatParenthesizedBilingualList(result);

  // 2. Ganti slash mandiri di luar kurung dengan 'atau'
  result = result.replace(/\s*\/\s*/g, ' atau ');

  // 3. Terapkan kamus leksikal istilah fonetis
  for (const { pattern, replacement } of DICTIONARY) {
    result = result.replace(pattern, replacement);
  }

  // 4. Bersihkan tanda baca
  result = cleanPunctuationForSpeech(result);

  return result;
}

/**
 * Mengambil teks pidato terbaik untuk suatu soal:
 * Memprioritaskan `transkripFonetis` eksplisit pada data soal,
 * dengan fallback cerdas ke konversi fonetis otomatis.
 */
export function getQuestionSpeechText(question: ExamQuestion): string {
  if (question.transkripFonetis && question.transkripFonetis.trim()) {
    return cleanPunctuationForSpeech(question.transkripFonetis);
  }
  return convertToPhoneticSpeech(question.pertanyaan);
}

/**
 * Mengambil teks pidato terbaik untuk skenario kasus soal
 */
export function getScenarioSpeechText(question: ExamQuestion): string | undefined {
  if (question.skenarioKasusFonetis && question.skenarioKasusFonetis.trim()) {
    return cleanPunctuationForSpeech(question.skenarioKasusFonetis);
  }
  if (question.skenarioKasus && question.skenarioKasus.trim()) {
    return convertToPhoneticSpeech(question.skenarioKasus);
  }
  return undefined;
}
