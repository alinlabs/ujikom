/**
 * Utilitas Transkripsi Fonetis Bahasa Indonesia untuk Text-to-Speech (TTS)
 * Mengoptimalkan pelafalan istilah asing (Inggris), singkatan/akronim bisnis,
 * serta simbol seperti tanda kurung dan garis miring agar diucapkan fasih, luwes,
 * dan alami oleh sintesis vokal browser Indonesia.
 */

import { ExamQuestion } from '../types/exam';
import { BidangMateri, PokokBahasanItem } from '../types/materi';

export interface SpeechSegment {
  text: string;
  rate: number;
  pitch: number;
  pauseAfterMs: number;
}

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
  { pattern: /\bSTIE\b/g, replacement: 'Es-Te-I-E' },
  { pattern: /\bWIKARA\b/gi, replacement: 'Wikara' },
  { pattern: /\bUMK\b/g, replacement: 'U-Em-Ka' },
  { pattern: /\bBPJS\b/g, replacement: 'Be-Pe-Je-Es' },
  { pattern: /\bTHR\b/g, replacement: 'Te-Ha-Er' },
  { pattern: /\bJIP\b/g, replacement: 'Je-I-Pe' },
  { pattern: /\bHP\b/g, replacement: 'Ha-Pe' },
  { pattern: /\bber-AC\b/gi, replacement: 'ber-A-Se' },
  { pattern: /\bWiFi\b/gi, replacement: 'Wai-Fai' },
  { pattern: /\bHuman Capital\b/gi, replacement: 'Hyumen Kapital' },
  { pattern: /\bHalo Effect\b/gi, replacement: 'Heylo Efek' },
  { pattern: /\bInput\b/gi, replacement: 'input' },
  { pattern: /\bOutput\b/gi, replacement: 'autput' },
  { pattern: /\bFixed Cost\b/gi, replacement: 'Fiks Kos' },
  { pattern: /\bVariable Cost\b/gi, replacement: 'Veriebel Kos' },
  { pattern: /\bAnnuity\b/gi, replacement: 'Enyuiti' },
  { pattern: /\bAdvertising\b/gi, replacement: 'Edvertaising' },
  { pattern: /\bBatch\b/gi, replacement: 'Bets' },
  { pattern: /\bBuy 1 Get 1\b/gi, replacement: 'Bai Wan Get Wan' },
  { pattern: /\bCompetitor-Based\b/gi, replacement: 'Kompetitor Beisd' },
  { pattern: /\bCost-Based\b/gi, replacement: 'Kos Beisd' },
  { pattern: /\bValue-Based\b/gi, replacement: 'Velyu Beisd' },
  { pattern: /\bIntroduction\b/gi, replacement: 'Introdaksyen' },
  { pattern: /\bGrowth\b/gi, replacement: 'Grot' },
  { pattern: /\bMaturity\b/gi, replacement: 'Metyuriti' },
  { pattern: /\bDecline\b/gi, replacement: 'Diklain' },
  { pattern: /\bDirect Channel\b/gi, replacement: 'Dairek Cenel' },
  { pattern: /\bIndirect Channel\b/gi, replacement: 'Indairek Cenel' },
  { pattern: /\bGoogle Maps\b/gi, replacement: 'Gugel Meps' },
  { pattern: /\bYouTube Ads\b/gi, replacement: 'Yutub Eds' },
  { pattern: /\bInstagram Ads\b/gi, replacement: 'Instagram Eds' },
  { pattern: /\bTikTok Ads\b/gi, replacement: 'TikTok Eds' },
  { pattern: /\bInforming\b/gi, replacement: 'Informing' },
  { pattern: /\bPersuading\b/gi, replacement: 'Persweiding' },
  { pattern: /\bReminding\b/gi, replacement: 'Rimainding' },
  { pattern: /\bIntangible\b/gi, replacement: 'Intenjibel' },
  { pattern: /\bInseparable\b/gi, replacement: 'Inseperebel' },
  { pattern: /\bPerishable\b/gi, replacement: 'Perisyebel' },
  { pattern: /\bVariable\b/gi, replacement: 'Veriebel' },
  { pattern: /\bJob Shop\b/gi, replacement: 'Job Syop' },
  { pattern: /\bMaintenance\b/gi, replacement: 'Meintenens' },
  { pattern: /\bPenetration Pricing\b/gi, replacement: 'Penetreisyen Praising' },
  { pattern: /\bPrice Skimming\b/gi, replacement: 'Prais Skiming' },
  { pattern: /\bPublic Relations\b/gi, replacement: 'Pablik Rileisyens' },
  { pattern: /\bRecruitment\b/gi, replacement: 'Rekrutmen' },
  { pattern: /\bSelection\b/gi, replacement: 'Seleksyen' },
  { pattern: /\bTraining\b/gi, replacement: 'Treining' },
  { pattern: /\bDevelopment\b/gi, replacement: 'Divelopmen' },
  { pattern: /\bSample\b/gi, replacement: 'Sempel' },
  { pattern: /\bPlace\b/gi, replacement: 'Pleis' },
  { pattern: /\bErgonomi\b/gi, replacement: 'Ergonomi' },
  { pattern: /\bPrototipe\b/gi, replacement: 'Prototipe' },
  { pattern: /\bShop\b/gi, replacement: 'Syop' },
  { pattern: /\bAds\b/gi, replacement: 'Eds' },
  { pattern: /\bOnline\b/gi, replacement: 'Onlain' },
  { pattern: /\bTikTok\b/gi, replacement: 'TikTok' },
  { pattern: /\bYouTube\b/gi, replacement: 'Yutub' },
  { pattern: /\bInstagram\b/gi, replacement: 'Instagram' },
  { pattern: /%/g, replacement: ' persen' },
];

/**
 * Mengonversi angka bulat non-negatif (0 - 999.999.999) menjadi kata bahasa Indonesia yang alami untuk TTS
 */
export function numberToIndonesianWords(num: number): string {
  if (!Number.isFinite(num) || num < 0) return String(num);
  const n = Math.floor(num);
  if (n === 0) return 'nol';

  const satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

  const convert = (val: number): string => {
    if (val < 12) return satuan[val];
    if (val < 20) return `${satuan[val - 10]} belas`;
    if (val < 100) {
      const puluh = Math.floor(val / 10);
      const sisa = val % 10;
      return `${satuan[puluh]} puluh${sisa > 0 ? ' ' + satuan[sisa] : ''}`;
    }
    if (val < 200) {
      const sisa = val % 100;
      return `seratus${sisa > 0 ? ' ' + convert(sisa) : ''}`;
    }
    if (val < 1000) {
      const ratus = Math.floor(val / 100);
      const sisa = val % 100;
      return `${satuan[ratus]} ratus${sisa > 0 ? ' ' + convert(sisa) : ''}`;
    }
    if (val < 2000) {
      const sisa = val % 1000;
      return `seribu${sisa > 0 ? ' ' + convert(sisa) : ''}`;
    }
    if (val < 1000000) {
      const ribu = Math.floor(val / 1000);
      const sisa = val % 1000;
      return `${convert(ribu)} ribu${sisa > 0 ? ' ' + convert(sisa) : ''}`;
    }
    if (val < 1000000000) {
      const juta = Math.floor(val / 1000000);
      const sisa = val % 1000000;
      return `${convert(juta)} juta${sisa > 0 ? ' ' + convert(sisa) : ''}`;
    }
    return String(val);
  };

  return convert(n).trim();
}

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

const ORDINAL_WORDS = [
  'Pertama',
  'Kedua',
  'Ketiga',
  'Keempat',
  'Kelima',
  'Keenam',
  'Ketujuh',
  'Kedelapan',
  'Kesembilan',
  'Kesepuluh',
];

const SECTION_LETTER_MAP: Record<string, string> = {
  A: 'Bagian pertama',
  B: 'Berikutnya, bagian kedua',
  C: 'Bagian ketiga',
  D: 'Bagian keempat',
};

const BULLET_CONNECTORS = [
  'Di antaranya,',
  'Selain itu,',
  'Kemudian,',
  'Selanjutnya,',
  'Dan juga,',
];

function ensureSentenceEnd(text: string): string {
  const t = text.trim();
  if (!t) return '';
  if (/[\.\!\?]$/.test(t)) return t;
  return `${t}.`;
}

function formatLineStructuresForTeacherSpeech(rawText: string): string {
  const lines = rawText.split('\n').map((l) => l.trim());
  const outputLines: string[] = [];

  let insideNumberedItem = false;
  let bulletIndex = 0;
  let lastLineEndedWithColon = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) {
      // Blank line resets bullet sequence context
      bulletIndex = 0;
      lastLineEndedWithColon = false;
      continue;
    }

    // 1. Cek huruf subbagian: "A. ...", "B. ..."
    const letterMatch = line.match(/^([A-D])\.\s+(.+)$/);
    if (letterMatch) {
      const label = SECTION_LETTER_MAP[letterMatch[1]] || `Bagian ${letterMatch[1]}`;
      const body = letterMatch[2].trim();
      insideNumberedItem = false;
      bulletIndex = 0;
      lastLineEndedWithColon = body.endsWith(':');
      outputLines.push(ensureSentenceEnd(`${label}, ${body.replace(/:$/, '')}`));
      continue;
    }

    // 2. Cek angka bernomor: "1. ...", "2. ...", "3. ..."
    const numberMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numberMatch) {
      const num = parseInt(numberMatch[1], 10);
      const ordinal = ORDINAL_WORDS[num - 1] || `Poin ke-${numberToIndonesianWords(num)}`;
      const body = numberMatch[2].trim();
      insideNumberedItem = true;
      bulletIndex = 0;
      lastLineEndedWithColon = body.endsWith(':');
      if (body.endsWith(':')) {
        outputLines.push(`${ordinal}, ${body.replace(/:$/, '')}.`);
      } else {
        outputLines.push(ensureSentenceEnd(`${ordinal}, ${body}`));
      }
      continue;
    }

    // 3. Cek bullet: "- ..."
    const bulletMatch = line.match(/^-\s+(.+)$/);
    if (bulletMatch) {
      const body = bulletMatch[1].trim();
      let prefix = '';

      if (insideNumberedItem) {
        // Sedang di dalam item bernomor ("Pertama, ..."): gunakan penghubung alami tanpa mengulang "Pertama"
        if (bulletIndex === 0) {
          prefix = lastLineEndedWithColon ? '' : 'Ciri utamanya, ';
        } else {
          prefix = `${BULLET_CONNECTORS[Math.min(bulletIndex, BULLET_CONNECTORS.length - 1)]} `;
        }
      } else {
        // Bullet tingkat utama (seperti "- Barang: ...", "- Jasa: ...", atau daftar bahan)
        prefix = `${ORDINAL_WORDS[bulletIndex] || 'Selanjutnya'}, `;
      }

      bulletIndex++;
      lastLineEndedWithColon = false;
      const formattedBody = prefix && /^[A-Z][a-z]/.test(body)
        ? body.charAt(0).toLowerCase() + body.slice(1)
        : body;
      outputLines.push(ensureSentenceEnd(`${prefix}${formattedBody}`));
      continue;
    }

    // 4. Baris paragraf atau subjudul biasa
    insideNumberedItem = false;
    bulletIndex = 0;
    lastLineEndedWithColon = line.endsWith(':');
    if (line.endsWith(':')) {
      outputLines.push(`${line.slice(0, -1)}.`);
    } else {
      outputLines.push(ensureSentenceEnd(line));
    }
  }

  return outputLines.join(' ');
}

/**
 * Mengubah teks materi terstruktur (dengan bullet, penomoran, panah, vs, tanda kurung)
 * menjadi transkrip fonetis lisan Indonesia yang alami layaknya guru menjelaskan.
 */
export function convertMateriTextToPhoneticSpeech(rawText: string): string {
  if (!rawText) return '';

  // 1. Format struktur baris (1., 2., A., B., -) menjadi kata penghubung guru yang natural
  let result = formatLineStructuresForTeacherSpeech(rawText);

  // 2. Hilangkan simbol (+), (-) yang sudah dijelaskan oleh kata positif/negatif di depannya
  result = result
    .replace(/\(\s*[\+\-]\s*\)/g, '')
    // Ganti em-dash / en-dash (— / –) menjadi koma jeda napas alami
    .replace(/\s*[—–]\s*/g, ', ')
    // Ganti panah alur "->" menjadi frase sambung alami
    .replace(/\s*->\s*/g, ', lalu menjadi ')
    // Ganti "vs" menjadi frase pembanding guru yang luwes
    .replace(/\bvs\b/gi, 'dibandingkan dengan')
    // Ubah "=" menjadi "sama dengan"
    .replace(/\s*=\s*/g, ' sama dengan ');

  // 3. Rapikan tanda kurung penjelasan pada teks materi agar terdengar luwes saat dibaca
  result = result.replace(/\(([^)]+)\)/g, (_match, inner) => {
    const trimmed = inner.trim();
    if (!trimmed) return '';
    if (/^\d+$/.test(trimmed)) {
      return '';
    }
    if (/^(contoh|misal|misalnya|seperti|disebut|sering disebut|yaitu)/i.test(trimmed)) {
      const cleanedInner = trimmed
        .replace(/^contoh\s*:/i, 'contohnya')
        .replace(/^misalnya\s*:/i, 'misalnya')
        .replace(/^misal\s*:/i, 'misalnya');
      return `, ${cleanedInner.replace(/\s*\/\s*/g, ' atau ')},`;
    }
    if (trimmed.includes('/') || trimmed.includes(',')) {
      const items = trimmed.split(',').map((part: string) =>
        part
          .split('/')
          .map((sub: string) => sub.trim())
          .join(' atau ')
      );
      if (items.length > 1) {
        const lastItem = items.pop();
        return `, yaitu ${items.join(', ')}, dan ${lastItem},`;
      }
      return `, yaitu ${items[0]},`;
    }
    return `, atau ${trimmed},`;
  });

  // 4. Ganti slash mandiri di luar kurung dengan 'atau'
  result = result.replace(/\s*\/\s*/g, ' atau ');

  // 5. Terapkan kamus leksikal istilah fonetis SEBELUM konversi angka mandiri (agar 3P -> Tri Pi, K3 -> Ka Tiga)
  for (const { pattern, replacement } of DICTIONARY) {
    result = result.replace(pattern, replacement);
  }

  // 6. Konversi nominal Rupiah (misal Rp1.000.000 -> satu juta rupiah)
  result = result.replace(/\bRp\s*([\d\.]+)\b/gi, (_m, numStr) => {
    const cleanDigits = numStr.replace(/\./g, '');
    const parsed = parseInt(cleanDigits, 10);
    if (!Number.isNaN(parsed)) {
      return `${numberToIndonesianWords(parsed)} rupiah`;
    }
    return `${numStr} rupiah`;
  });

  // 7. Konversi angka berdiri sendiri (misal 24 jam -> dua puluh empat jam, 20 persen -> dua puluh persen)
  result = result.replace(/\b(\d+)\b/g, (_m, numStr) => {
    const parsed = parseInt(numStr, 10);
    if (!Number.isNaN(parsed) && parsed <= 999999) {
      return numberToIndonesianWords(parsed);
    }
    return numStr;
  });

  // 8. Bersihkan tanda baca ganda, ': .' atau ', :' atau 'dan dan' / 'dan atau' atau alias ganda seperti 'Proses, atau Proses'
  result = result
    .replace(/\b([A-Za-z-]+),\s*(?:atau|yaitu)\s*\1\s*,?/gi, '$1')
    .replace(/,\s*:/g, ':')
    .replace(/:\s*\./g, '.')
    .replace(/\.\s*\./g, '.')
    .replace(/,\s*\./g, '.')
    .replace(/^\s*\.\s*/g, '')
    .replace(/;\s*/g, ', ')
    .replace(/\bdan\s+dan\b/gi, 'dan')
    .replace(/\bdan\s+atau\b/gi, 'atau');

  // 9. Konversi tanda titik dua (:) menjadi kata penghubung guru yang pas (merupakan, adalah, yaitu, artinya, maka)
  result = formatColonsForTeacherSpeech(result);

  return cleanPunctuationForSpeech(result);
}

const NOUN_DEFINITION_STARTS =
  /^(?:kegiatan|barang|jasa|biaya|ongkos|nilai|jumlah|pembayaran|kemampuan|nama|penyampaian|potongan|kursus|pembinaan|proses|uang|bayaran|kondisi|suatu|sebuah|ilmu|sistem|metode|cara|alat|strategi|perpaduan|kumpulan|surat|bukti|layanan|bagian|kebersihan|produk yang)\b/i;

const ATTRIBUTE_ADD_NYA_LABELS =
  /^(?:Tujuan Utama|Kelebihan|Kelemahan|Keuntungan|Risiko|Manfaat|Prinsip utama|Langkah penyesuaian|Hak istimewa)$/i;

const ATTRIBUTE_EXACT_LABELS =
  /^(?:Risikonya|Imbalannya|Kriterianya|Penerapannya|Kuncinya|Keuntungan Pemasaran Digital|Contoh sederhana)$/i;

const CLAUSE_BEFORE_COLON_PATTERNS =
  /\b(?:terbatas pada|berperan sebagai|menghitung|merinci|mengetahui|sampaikan|berikan|adalah sebagai berikut|terdiri dari|yang seimbang|yang adil)\b/i;

const ACTION_VERB_LEFT_STARTS =
  /^(?:meng\w+|mem\w+|men\w+|meny\w+|mel\w+|ber\w+|ter\w+|hindari|jaga|beli|cegah|harus)\b/i;

function lowercaseLeadingWordIfNotAcronym(text: string): string {
  const trimmed = text.trim();
  if (/^[A-Z][a-z]/.test(trimmed)) {
    return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
  }
  return trimmed;
}

function formatSingleSentenceColons(sentence: string): string {
  // 1. Tangani kata pengantar contoh/perincian eksplisit
  let current = sentence
    .replace(/\b(misalnya|seperti|yakni|yaitu)\s*:\s*/gi, '$1, ')
    .replace(/\bcontoh\s*:\s*/gi, (match, offset) =>
      offset === 0 || /^[A-Z]/.test(match) ? 'Contohnya, ' : 'contohnya, '
    );

  // 2. Tangani titik dua tersisa secara berurutan jika ada
  const colonIdx = current.indexOf(':');
  if (colonIdx === -1) return current;

  const left = current.slice(0, colonIdx).trim();
  const rightRaw = current.slice(colonIdx + 1).trim();
  if (!rightRaw) return left;

  const right = formatSingleSentenceColons(rightRaw);
  const lowerRight = lowercaseLeadingWordIfNotAcronym(right);

  const subjectCore = left
    .replace(
      /^(?:Pertama|Kedua|Ketiga|Keempat|Kelima|Keenam|Ketujuh|Kedelapan|Kesembilan|Kesepuluh|Selanjutnya|Kemudian|Selain itu|Di antaranya|Dan juga|Ciri utamanya),\s*/i,
      ''
    )
    .replace(/,\s*(?:atau|yaitu)\s+[^,]+$/i, '')
    .trim();

  // A. Kalimat syarat: "Jika ...: ..." -> "..., maka ..."
  if (/^(?:jika|bila|apabila|kalau)\b/i.test(subjectCore)) {
    return `${left}, maka ${lowerRight}`;
  }

  // B. Klausa pengantar panjang sebelum titik dua
  if (CLAUSE_BEFORE_COLON_PATTERNS.test(subjectCore)) {
    return `${left}, yaitu ${lowerRight}`;
  }

  // C. Label atribut ringkas (Tujuan Utama, Kelebihan, Risiko, Kriteria, dll.)
  if (/^(?:Tiga unsur operasi|Daur hidup produk)$/i.test(subjectCore)) {
    return `${left}, yaitu ${lowerRight}`;
  }
  if (ATTRIBUTE_ADD_NYA_LABELS.test(subjectCore)) {
    const withNya = left.replace(
      new RegExp(`(${subjectCore.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})$`, 'i'),
      '$1nya'
    );
    return `${withNya} adalah ${lowerRight}`;
  }
  if (ATTRIBUTE_EXACT_LABELS.test(subjectCore)) {
    return `${left} adalah ${lowerRight}`;
  }

  // D. Subjek diawali kata kerja tindakan (Mencari Ide, Memberi Tahu, Mengutamakan, Hindari)
  if (ACTION_VERB_LEFT_STARTS.test(subjectCore)) {
    if (/^(?:jangan|tolak|jauh|dinilai)\b/i.test(lowerRight)) {
      return `${left}, artinya ${lowerRight}`;
    }
    return `${left}, yaitu ${lowerRight}`;
  }

  // E. Definisi istilah / konsep
  if (/^berupa\b/i.test(lowerRight)) {
    return `${left}, yaitu ${lowerRight}`;
  }
  if (NOUN_DEFINITION_STARTS.test(lowerRight)) {
    return `${left} merupakan ${lowerRight}`;
  }
  if (/^(?:seberapa|gaji|komponen)\b/i.test(lowerRight)) {
    return `${left} adalah ${lowerRight}`;
  }

  return `${left}, yaitu ${lowerRight}`;
}

function formatColonsForTeacherSpeech(text: string): string {
  if (!text.includes(':')) return text;
  const sentences = text.split(/(?<=[\.\!\?])\s+/);
  return sentences.map((s) => (s.includes(':') ? formatSingleSentenceColons(s) : s)).join(' ');
}

/**
 * Mengubah kalimat Fokus Jawaban agar terdengar seperti bimbingan lisan seorang guru
 */
function formatFokusJawabanForTeacherSpeech(fokusText: string): string {
  const phonetic = convertMateriTextToPhoneticSpeech(fokusText);
  if (!phonetic) return '';

  const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

  if (/^penguji\b/i.test(phonetic)) {
    return `Perlu kamu ingat, ${lowerFirst(phonetic)}`;
  }
  if (/^jelaskan\b/i.test(phonetic)) {
    return `Pastikan kamu mampu menjelaskan ${phonetic.replace(/^jelaskan\s+/i, '')}`;
  }
  if (/^bedakan\b/i.test(phonetic)) {
    return `Pastikan kamu mampu membedakan ${phonetic.replace(/^bedakan\s+/i, '')}`;
  }
  if (/^sebutkan\b/i.test(phonetic)) {
    return `Pastikan kamu mampu menyebutkan ${phonetic.replace(/^sebutkan\s+/i, '')}`;
  }
  if (/^pahami\b/i.test(phonetic)) {
    return `Pastikan kamu memahami ${phonetic.replace(/^pahami\s+/i, '')}`;
  }
  return phonetic;
}

/**
 * Membangun rangkaian segmen pidato berintonasi terbaik layaknya guru menjelaskan
 * untuk slide tab Detail materi: Judul -> Deskripsi Materi ->
 * Fokus Jawaban -> Penjelasan Pendukung (beserta contoh kasus), tanpa Rujukan Pustaka.
 */
export function buildMateriSlideSpeechSegments(topic: PokokBahasanItem): SpeechSegment[] {
  const segments: SpeechSegment[] = [];

  // 1. Pembuka Topik
  const judulFonetis = convertMateriTextToPhoneticSpeech(topic.judul);
  if (judulFonetis) {
    segments.push({
      text: `Mari kita pelajari topik ${judulFonetis.replace(/\.$/, '')}.`,
      rate: 0.98,
      pitch: 1.09,
      pauseAfterMs: 320,
    });
  }

  // 2. Deskripsi Materi langsung setelah judul (tanpa pengumuman judul section)
  const uraianRaw = topic.isiMateri || topic.ringkasan;
  const uraianFonetis = convertMateriTextToPhoneticSpeech(uraianRaw);
  if (uraianFonetis) {
    segments.push({
      text: uraianFonetis,
      rate: 1.01,
      pitch: 1.05,
      pauseAfterMs: 420,
    });
  }

  // 3. Fokus Jawaban
  const hasPendukung = Boolean(topic.penjelasanPendukung && topic.penjelasanPendukung.trim());
  const fokusGuru = formatFokusJawabanForTeacherSpeech(topic.fokusUjian);
  if (fokusGuru) {
    segments.push({
      text: 'Selanjutnya, mari kita perhatikan rekomendasi fokus jawabannya.',
      rate: 1.01,
      pitch: 1.05,
      pauseAfterMs: 200,
    });
    segments.push({
      text: fokusGuru,
      rate: 0.99,
      pitch: 1.07,
      pauseAfterMs: hasPendukung ? 400 : 0,
    });
  }

  // 4. Penjelasan Pendukung (sudah mencakup contoh kasus)
  if (topic.penjelasanPendukung && topic.penjelasanPendukung.trim()) {
    const pendukungFonetis = convertMateriTextToPhoneticSpeech(topic.penjelasanPendukung);
    if (pendukungFonetis) {
      segments.push({
        text: 'Terakhir, mari kita simak penjelasan pendukung beserta contoh kasusnya.',
        rate: 1.01,
        pitch: 1.05,
        pauseAfterMs: 200,
      });
      segments.push({
        text: pendukungFonetis,
        rate: 1.0,
        pitch: 1.07,
        pauseAfterMs: 0,
      });
    }
  }

  return segments;
}

/**
 * Mengambil teks penjelasan sederhana bernada lisan untuk satu slide PokokBahasanItem
 */
export function getMateriTopicSpeechText(topic: PokokBahasanItem): string {
  const segments = buildMateriSlideSpeechSegments(topic);
  if (segments.length > 0) {
    return segments.map((s) => s.text).join(' ');
  }
  if (topic.transkripFonetis && topic.transkripFonetis.trim()) {
    return cleanPunctuationForSpeech(topic.transkripFonetis);
  }
  return convertMateriTextToPhoneticSpeech(`${topic.judul}. ${topic.fokusUjian}`);
}

/**
 * Mengambil teks penjelasan sederhana bernada lisan untuk tab Ringkasan suatu BidangMateri
 */
export function getBidangRingkasanSpeechText(bidang: BidangMateri): string {
  if (bidang.ringkasanFonetis && bidang.ringkasanFonetis.trim()) {
    return cleanPunctuationForSpeech(bidang.ringkasanFonetis);
  }
  return convertToPhoneticSpeech(`${bidang.nama}. ${bidang.gambaranUmum} ${bidang.konsepDasar}`);
}

/**
 * Mengambil teks penjelasan sederhana bernada lisan untuk tab Referensi suatu BidangMateri
 */
export function getBidangReferensiSpeechText(bidang: BidangMateri): string {
  if (bidang.referensiFonetis && bidang.referensiFonetis.trim()) {
    return cleanPunctuationForSpeech(bidang.referensiFonetis);
  }
  const daftarBuku = bidang.referensi.map((r) => `${r.judul} karya ${r.penulis}`).join(', dan ');
  return convertToPhoneticSpeech(`Daftar buku rujukan untuk ${bidang.nama} meliputi ${daftarBuku}.`);
}

/**
 * Teks penjelasan audio untuk halaman Daftar Pustaka global (/materi/referensi)
 */
export function getGlobalReferensiSpeechText(): string {
  return 'Halaman ini berisi daftar buku rujukan resmi ujian komprehensif Es Satu Manajemen Es-Te-I-E Wibawa Karta Raharja Purwakarta. Buku-buku ini mencakup empat bidang utama, yaitu Manajemen Operasional karya Heizer dan Render serta Hani Handoko, Manajemen Keuangan karya Keown, Martono, dan Sujarweni, Manajemen Pemasaran karya Philip Kotler dan Armstrong, serta Manajemen Sumber Daya Manusia karya Noe dan rekan. Gunakan buku rujukan ini sebagai pegangan teori jika penguji menanyakan sumber akademik jawaban kamu.';
}
