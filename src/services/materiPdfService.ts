import { jsPDF } from 'jspdf';
import { BidangMateri } from '../types/materi';

/**
 * Service untuk mengonversi seluruh materi UJIKOM menjadi dokumen PDF A4
 * presisi tinggi dengan format akademik formal murni (Direct Vector Text),
 * tanpa elemen dekoratif seperti kotak/badge, dan setiap mata kuliah
 * terpisah di halaman baru dengan judul rata tengah.
 */

// Konstanta Standar Kertas A4 (Milimeter)
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN = 15;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2; // 180 mm
const BOTTOM_THRESHOLD = PAGE_HEIGHT - MARGIN - 12; // 270 mm (ruang footer 12mm)
const CENTER_X = PAGE_WIDTH / 2; // 105 mm (titik tengah kertas A4)

/**
 * Pengecekan batas bawah halaman & penambahan lembar otomatis
 */
function checkPageBreak(doc: jsPDF, currentY: number, neededHeightMm: number): number {
  if (currentY + neededHeightMm > BOTTOM_THRESHOLD) {
    doc.addPage();
    return MARGIN + 6;
  }
  return currentY;
}

/**
 * Menggambar teks berbaris dengan auto word-wrap dan auto-pagination
 */
function drawTextLines(
  doc: jsPDF,
  lines: string[],
  startX: number,
  startY: number,
  lineSpacingMm: number
): number {
  let y = startY;
  for (const line of lines) {
    y = checkPageBreak(doc, y, lineSpacingMm);
    doc.text(line, startX, y);
    y += lineSpacingMm;
  }
  return y;
}

/**
 * Menggambar satu paragraf teks dengan wrapping
 */
function drawParagraph(
  doc: jsPDF,
  text: string,
  startX: number,
  startY: number,
  maxWidthMm: number,
  fontSizePt = 9,
  lineSpacingMm = 4.1,
  isBold = false,
  textColor: [number, number, number] = [30, 41, 59]
): number {
  doc.setFont('helvetica', isBold ? 'bold' : 'normal');
  doc.setFontSize(fontSizePt);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);

  const lines = doc.splitTextToSize(text, maxWidthMm);
  return drawTextLines(doc, lines, startX, startY, lineSpacingMm);
}

/**
 * Membangun isi satu mata kuliah dengan format formal murni (tanpa kotak/badge)
 */
function renderSingleBidang(doc: jsPDF, bidang: BidangMateri, startY: number): number {
  let currentY = startY;

  // ==============================================================
  // 1. KOP SURAT / DOKUMEN AKADEMIK RESMI (RATA TENGAH)
  // ==============================================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('STIE WIBAWA KARTA RAHARJA PURWAKARTA', CENTER_X, currentY, { align: 'center' });
  currentY += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  doc.text('PROGRAM STUDI S1 MANAJEMEN PANDUAN UJIAN KOMPREHENSIF', CENTER_X, currentY, {
    align: 'center',
  });
  currentY += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(
    'Pedoman Pembelajaran, Silabus Materi Pokok & Kisi-Kisi Ujian Tertulis & Lisan',
    CENTER_X,
    currentY,
    { align: 'center' }
  );
  currentY += 3.5;

  // Garis Pembatas Ganda Kop Surat
  doc.setDrawColor(30, 41, 59);
  doc.setLineWidth(0.6);
  doc.line(MARGIN, currentY, PAGE_WIDTH - MARGIN, currentY);
  currentY += 1.2;

  doc.setLineWidth(0.2);
  doc.line(MARGIN, currentY, PAGE_WIDTH - MARGIN, currentY);
  currentY += 7;

  // ==============================================================
  // 2. JUDUL MATA KULIAH RESMI (RATA TENGAH)
  // ==============================================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text(`BAB ${bidang.nomorBab}`, CENTER_X, currentY, { align: 'center' });
  currentY += 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42);
  doc.text(bidang.nama.toUpperCase(), CENTER_X, currentY, { align: 'center' });
  currentY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(
    `Kode Silabus: ${bidang.kode}   |   Kategori: ${bidang.judulBab}   |   Silabus Resmi: ${bidang.halamanPdf}`,
    CENTER_X,
    currentY,
    { align: 'center' }
  );
  currentY += 5;

  // Garis Halus Pemisah Judul
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, currentY, PAGE_WIDTH - MARGIN, currentY);
  currentY += 6;

  // ==============================================================
  // 3. I. GAMBARAN UMUM & KONSEP DASAR (FORMAT TEKSTUAL MURNI)
  // ==============================================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('I. GAMBARAN UMUM & KONSEP DASAR', MARGIN, currentY);
  currentY += 5;

  // Deskripsi Pengantar
  currentY = drawParagraph(doc, bidang.deskripsi, MARGIN, currentY, CONTENT_WIDTH, 9, 4.1, false);
  currentY += 2;

  // Gambaran Umum
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Gambaran Umum Bidang:', MARGIN, currentY);
  currentY += 4.5;

  currentY = drawParagraph(doc, bidang.gambaranUmum, MARGIN, currentY, CONTENT_WIDTH, 9, 4.1, false);
  currentY += 3;

  // Konsep Dasar
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Konsep Dasar Bidang:', MARGIN, currentY);
  currentY += 4.5;

  currentY = drawParagraph(doc, bidang.konsepDasar, MARGIN, currentY, CONTENT_WIDTH, 9, 4.1, false);
  currentY += 6;

  // ==============================================================
  // 4. II. SASARAN PEMBELAJARAN & PETUNJUK UJIAN
  // ==============================================================
  currentY = checkPageBreak(doc, currentY, 30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('II. SASARAN PEMBELAJARAN & PETUNJUK UJIAN', MARGIN, currentY);
  currentY += 5;

  // Sasaran Penguasaan Materi
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Sasaran Penguasaan Materi:', MARGIN, currentY);
  currentY += 4.5;

  bidang.tujuanPembelajaran.forEach((tujuan, idx) => {
    currentY = checkPageBreak(doc, currentY, 6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    const prefix = `${idx + 1}. `;
    const prefixWidth = doc.getTextWidth(prefix);
    doc.text(prefix, MARGIN + 2, currentY);

    const lines = doc.splitTextToSize(tujuan, CONTENT_WIDTH - 6 - prefixWidth);
    currentY = drawTextLines(doc, lines, MARGIN + 2 + prefixWidth, currentY, 3.9);
    currentY += 1.5;
  });
  currentY += 3;

  // Petunjuk Ujian Komprehensif
  currentY = checkPageBreak(doc, currentY, 20);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Petunjuk Penguji Ujian (Lisan & Tertulis):', MARGIN, currentY);
  currentY += 4.5;

  bidang.petunjukUjian.forEach((petunjuk, idx) => {
    currentY = checkPageBreak(doc, currentY, 6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    const prefix = `- `;
    const prefixWidth = doc.getTextWidth(prefix);
    doc.text(prefix, MARGIN + 2, currentY);

    const lines = doc.splitTextToSize(petunjuk, CONTENT_WIDTH - 6 - prefixWidth);
    currentY = drawTextLines(doc, lines, MARGIN + 2 + prefixWidth, currentY, 3.9);
    currentY += 1.5;
  });
  currentY += 6;

  // ==============================================================
  // 5. III. PEMBAHASAN LENGKAP POKOK-POKOK BAHASAN
  // ==============================================================
  currentY = checkPageBreak(doc, currentY, 35);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text(
    `III. POKOK-POKOK PEMBAHASAN SILABUS (${bidang.pokokBahasan.length} SUBPOKOK)`,
    MARGIN,
    currentY
  );
  currentY += 5;

  bidang.pokokBahasan.forEach((item, index) => {
    // Keep-together lookahead: pastikan setidaknya ada 35mm sebelum memulai pokok bahasan baru
    currentY = checkPageBreak(doc, currentY, 35);

    // Judul Pokok Bahasan (Format teks akademik tebal tanpa kotak atau badge)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    const titleText = `${item.nomor} ${item.judul}${item.halamanPdf ? ` (${item.halamanPdf})` : ''}`;
    const titleLines = doc.splitTextToSize(titleText, CONTENT_WIDTH);
    currentY = drawTextLines(doc, titleLines, MARGIN, currentY, 4.2);
    currentY += 1.5;

    // Fokus Pertanyaan Penguji (Tekstual murni)
    if (item.fokusUjian) {
      currentY = checkPageBreak(doc, currentY, 12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text('Fokus Pertanyaan Penguji:', MARGIN + 4, currentY);
      currentY += 4;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const fokusLines = doc.splitTextToSize(item.fokusUjian, CONTENT_WIDTH - 6);
      currentY = drawTextLines(doc, fokusLines, MARGIN + 4, currentY, 3.9);
      currentY += 2;
    }

    // Uraian & Penjelasan Materi
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text('Penjelasan Materi:', MARGIN + 4, currentY);
    currentY += 4;

    const fullContent = item.isiMateri || item.ringkasan;
    currentY = drawParagraph(
      doc,
      fullContent,
      MARGIN + 4,
      currentY,
      CONTENT_WIDTH - 6,
      8.5,
      3.9,
      false,
      [51, 65, 85]
    );
    currentY += 2;

    // Penjelasan Pendukung & Contoh Kasus
    if (item.penjelasanPendukung) {
      currentY = checkPageBreak(doc, currentY, 8);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      const noteLines = doc.splitTextToSize(`Penjelasan Pendukung: ${item.penjelasanPendukung}`, CONTENT_WIDTH - 6);
      currentY = drawTextLines(doc, noteLines, MARGIN + 4, currentY, 3.7);
      currentY += 2;
    }

    // Pemisah halus antar subpokok
    if (index < bidang.pokokBahasan.length - 1) {
      currentY = checkPageBreak(doc, currentY, 6);
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.2);
      doc.line(MARGIN, currentY, PAGE_WIDTH - MARGIN, currentY);
      currentY += 5;
    }
  });

  currentY += 6;

  // ==============================================================
  // 6. IV. DAFTAR PUSTAKA & RUJUKAN RESMI
  // ==============================================================
  currentY = checkPageBreak(doc, currentY, 30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('IV. DAFTAR PUSTAKA & RUJUKAN RESMI', MARGIN, currentY);
  currentY += 5;

  bidang.referensi.forEach((buku, bIdx) => {
    currentY = checkPageBreak(doc, currentY, 12);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    const bTag = `[${bIdx + 1}] `;
    const bTagWidth = doc.getTextWidth(bTag);
    doc.text(bTag, MARGIN, currentY);

    const citationHeader = `${buku.penulis} (${buku.tahun}). `;
    doc.text(citationHeader, MARGIN + bTagWidth, currentY);

    const authWidth = doc.getTextWidth(citationHeader);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(30, 41, 59);

    const bookTitle = `${buku.judul}. `;
    const lines = doc.splitTextToSize(bookTitle, CONTENT_WIDTH - bTagWidth - authWidth);
    doc.text(lines[0] || bookTitle, MARGIN + bTagWidth + authWidth, currentY);
    currentY += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(
      `Penerbit: ${buku.penerbit}${buku.catatan ? ` • ${buku.catatan}` : ''}${
        buku.halamanPdf ? ` • Sumber Silabus: ${buku.halamanPdf}` : ''
      }`,
      MARGIN + bTagWidth,
      currentY
    );
    currentY += 5;
  });

  return currentY;
}

/**
 * Generator dokumen resmi A4 untuk satu atau seluruh bidang studi UJIKOM.
 * Setiap mata kuliah dijamin dimulai di halaman baru secara terpisah.
 */
export function buildMateriPdf(materiInput: BidangMateri | BidangMateri[]): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  const list: BidangMateri[] = Array.isArray(materiInput) ? materiInput : [materiInput];

  list.forEach((bidang, index) => {
    // Pastikan setiap mata kuliah setelah yang pertama selalu mulai di halaman baru terpisah
    if (index > 0) {
      doc.addPage();
    }
    renderSingleBidang(doc, bidang, MARGIN);
  });

  // ==============================================================
  // FOOTER DINAMIS DUA-PASS (NOMOR HALAMAN PRESISI DI BAWAH)
  // ==============================================================
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const footerY = PAGE_HEIGHT - MARGIN + 4;

    // Garis halus di atas footer
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.2);
    doc.line(MARGIN, footerY - 3, PAGE_WIDTH - MARGIN, footerY - 3);

    // Keterangan resmi sebelah kiri
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(
      'Dokumen Resmi UJIKOM S1 Manajemen • STIE Wibawa Karta Raharja Purwakarta',
      MARGIN,
      footerY
    );

    // Penomoran Halaman Rata Kanan
    const pageText = `Halaman ${i} dari ${totalPages}`;
    const pageTextWidth = doc.getTextWidth(pageText);
    doc.text(pageText, PAGE_WIDTH - MARGIN - pageTextWidth, footerY);
  }

  return doc;
}

/**
 * Fungsi untuk membuka langsung dokumen PDF ke peramban (Chrome PDF viewer / blob)
 */
export function openMateriPdfInViewer(materiInput: BidangMateri | BidangMateri[]): void {
  try {
    const doc = buildMateriPdf(materiInput);
    const blob = doc.output('blob');
    const blobUrl = URL.createObjectURL(blob);

    const win = window.open(blobUrl, '_blank');
    if (!win) {
      const a = document.createElement('a');
      a.href = blobUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  } catch (error) {
    console.error('Gagal membuat atau membuka dokumen PDF materi:', error);
  }
}
