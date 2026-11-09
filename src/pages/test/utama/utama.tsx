import React, { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { ExamResult } from '../../../types/exam';
import { formatShortDateTime } from '../../../utils/formatters';

export interface TestUtamaProps {
  onOpenSettings?: () => void;
  onNavigateToHistory: () => void;
  onViewResult: (item: ExamResult) => void;
  totalExams: number;
  passedExams: number;
  passRate: number;
  highestScore: number;
  history: ExamResult[];
}

const INFO_CARDS = [
  {
    title: 'Standar Passing Grade',
    desc: 'Batas kelulusan minimum adalah Nilai 70 (Grade B). Skor di bawah 70 dikategori Belum Lulus (Remedial).',
  },
  {
    title: 'Metode Penyampaian Soal',
    desc: 'Mendukung tampilan Teks Soal dan Voice Audio (Text-to-Speech) untuk mensimulasikan pertanyaan lisan dosen.',
  },
  {
    title: 'Metode Jawaban',
    desc: 'Pilihan Ganda kuantitatif, Input Singkat Rumus/Hasil, atau Perekaman Suara (Speech-to-Text).',
  },
];

export const TestUtama: React.FC<TestUtamaProps> = ({
  onNavigateToHistory,
  onViewResult,
  totalExams,
  passRate,
  highestScore,
  history,
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const width = container.clientWidth;
      if (width > 0) {
        const index = Math.round(container.scrollLeft / width);
        if (index >= 0 && index < INFO_CARDS.length && index !== activeCardIndex) {
          setActiveCardIndex(index);
        }
      }
    }
  };

  const scrollToCard = (index: number) => {
    setActiveCardIndex(index);
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* 1. Pengantar (Unboxed, Menempel pada Layout Utama) */}
      <section className="space-y-5 sm:space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Pengantar & Ketentuan Pelaksanaan Ujian
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Ujian Komprehensif S1 Manajemen merupakan evaluasi menyeluruh atas penguasaan 4 bidang keilmuan utama: Manajemen Operasional, Keuangan, Pemasaran, dan SDM. Ujian ini menguji integrasi pemahaman teori, analisis kasus kuantitatif, dan sintesis keputusan manajerial.
          </p>
        </div>

        {/* Desktop Grid Layout (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-3 gap-4 pt-2 border-t border-slate-100">
          {INFO_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-center"
            >
              <h3 className="text-xs font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Container (Native Touch Scroll Snap) */}
        <div className="md:hidden pt-2 border-t border-slate-100 space-y-3">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex w-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {INFO_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="w-full min-w-full shrink-0 snap-center px-1"
              >
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-center">
                  <h3 className="text-xs font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicator Dots (Mobile Only) */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {INFO_CARDS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeCardIndex === idx
                    ? 'w-5 bg-blue-700'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ke slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Statistics Strip & Recent History */}
      <section className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-xs">
        {/* Card Header with Top-Right Arrow Icon Indicator */}
        <div
          onClick={onNavigateToHistory}
          className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 cursor-pointer group"
        >
          <div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
              Ringkasan Riwayat Simulasi Ujian
            </h3>
            <p className="text-xs text-slate-500">
              Progres evaluasi hasil ujian Anda yang tersimpan di sistem
            </p>
          </div>
          <div className="p-1 text-slate-400 group-hover:text-blue-700 transition-colors shrink-0">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        {/* Stats Grid (2-line labels on mobile) */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 text-center">
          <div className="p-2.5 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
              <span className="block sm:inline">Total Sesi </span>
              <span className="block sm:inline">Diikuti</span>
            </div>
            <div className="text-base sm:text-xl font-bold text-slate-900 mt-1">{totalExams} Sesi</div>
          </div>
          <div className="p-2.5 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
              <span className="block sm:inline">Skor </span>
              <span className="block sm:inline">Tertinggi</span>
            </div>
            <div className="text-base sm:text-xl font-bold text-blue-700 mt-1">{highestScore} / 100</div>
          </div>
          <div className="p-2.5 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
              <span className="block sm:inline">Tingkat </span>
              <span className="block sm:inline">Kelulusan</span>
            </div>
            <div className="text-base sm:text-xl font-bold text-emerald-700 mt-1">{passRate}%</div>
          </div>
        </div>

        {/* Recent 3 Items */}
        {history.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-400">
            Belum ada riwayat simulasi ujian tersimpan.
          </div>
        ) : (
          <div className="divide-y divide-slate-100 pt-1">
            {history.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onViewResult(item)}
                className="py-3 flex items-center justify-between gap-3 text-xs cursor-pointer hover:bg-slate-50/60 -mx-2 px-2 rounded-lg transition-colors group"
              >
                <div className="space-y-0.5">
                  {/* Line 1: Status */}
                  <div
                    className={`font-bold text-xs ${
                      item.passed ? 'text-emerald-700' : 'text-rose-700'
                    }`}
                  >
                    {item.passed ? 'LULUS' : 'BELUM LULUS'}
                  </div>
                  {/* Line 2: Mode Ujian */}
                  <div className="font-semibold text-slate-800">
                    Ujian {item.config.mode === 'tertulis' ? 'Tertulis' : 'Lisan'} ({item.config.selectedBidang})
                  </div>
                  {/* Line 3: Format Waktu & Tanggal */}
                  <div className="text-[11px] text-slate-400 font-mono">
                    {formatShortDateTime(item.timestamp)}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <div className="text-right">
                    <div className="text-sm sm:text-base font-bold text-slate-900 font-mono">
                      {item.score}
                    </div>
                    <div className="text-[11px] text-slate-500">Grade {item.grade}</div>
                  </div>

                  <div className="p-1 text-slate-400 group-hover:text-blue-700 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
