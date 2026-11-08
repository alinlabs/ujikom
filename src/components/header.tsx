import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, ChevronLeft, BookOpen, History, Printer, FileText, Bookmark } from 'lucide-react';
import { useExamStore } from '../stores/useExamStore';
import { getBidangById } from '../pages/materi/utils';
import { formatDurationSeconds } from '../utils/formatters';

interface HeaderProps {
  onOpenSettings?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();
  const setIsConfirmSubmitOpen = useExamStore((state) => state.setIsConfirmSubmitOpen);
  const timeRemainingSeconds = useExamStore((state) => state.timeRemainingSeconds);
  const isExamActive = useExamStore((state) => state.isExamActive);
  const resultSource = useExamStore((state) => state.resultSource);
  const currentQuestionIndex = useExamStore((state) => state.currentQuestionIndex);
  const activeQuestions = useExamStore((state) => state.activeQuestions);

  // Check if current route is a module reading view (/materi/:bidangId...)
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const isModuleRoute =
    pathSegments[0] === 'materi' &&
    ['operasional', 'keuangan', 'pemasaran', 'sdm'].includes(pathSegments[1] || '');
  const activeBidangId = isModuleRoute ? pathSegments[1] : null;
  const activeBidang = activeBidangId ? getBidangById(activeBidangId) : null;

  // Route flags
  const isReferensiGlobalRoute = location.pathname === '/materi/referensi';
  const isTestHasilRoute = location.pathname === '/test/hasil';
  const isTestRiwayatRoute = location.pathname === '/test/riwayat';
  const isTestSesiRoute = location.pathname === '/test/sesi';
  const isTestRoute = location.pathname.startsWith('/test');

  // Determine module view tab (ringkasan, isi, referensi)
  const viewType = isModuleRoute ? pathSegments[2] || '' : '';
  const isMateriView = viewType === 'isi' || viewType === 'materi';
  const isReferensiView = viewType === 'referensi';
  const isRingkasanView = !isMateriView && !isReferensiView;

  const isLowTime = timeRemainingSeconds < 120;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          {/* Left Brand / Adaptive Title */}
          {isReferensiGlobalRoute ? (
            /* Referensi Page Header Title: ChevronLeft + Referensi / UJIKOM S1 Manajemen */
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <Link
                to="/"
                className="p-1 sm:p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors flex items-center justify-center shrink-0"
                title="Kembali ke Beranda"
                aria-label="Kembali ke Beranda"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              </Link>
              <div className="min-w-0">
                <span className="font-bold text-sm sm:text-base md:text-lg tracking-tight text-slate-900 block leading-tight">
                  Referensi
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-normal block mt-0.5">
                  UJIKOM S1 Manajemen
                </span>
              </div>
            </div>
          ) : isTestHasilRoute ? (
            /* Hasil Ujian Page Header Title: ChevronLeft + Hasil Ujian / UJIKOM S1 Manajemen */
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <Link
                to={resultSource === 'history' ? '/test/riwayat' : '/test'}
                className="p-1 sm:p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors flex items-center justify-center shrink-0"
                title={resultSource === 'history' ? 'Kembali ke Riwayat Ujian' : 'Kembali ke Halaman Simulasi'}
                aria-label={resultSource === 'history' ? 'Kembali ke Riwayat Ujian' : 'Kembali ke Halaman Simulasi'}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              </Link>
              <div className="min-w-0">
                <span className="font-bold text-sm sm:text-base md:text-lg tracking-tight text-slate-900 block leading-tight">
                  Hasil Ujian
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-normal block mt-0.5">
                  UJIKOM S1 Manajemen
                </span>
              </div>
            </div>
          ) : isTestRiwayatRoute ? (
            /* Riwayat Ujian Page Header Title: ChevronLeft + Riwayat Ujian / UJIKOM S1 Manajemen */
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <Link
                to="/test"
                className="p-1 sm:p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors flex items-center justify-center shrink-0"
                title="Kembali ke Halaman Simulasi"
                aria-label="Kembali ke Halaman Simulasi"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              </Link>
              <div className="min-w-0">
                <span className="font-bold text-sm sm:text-base md:text-lg tracking-tight text-slate-900 block leading-tight">
                  Riwayat Ujian
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-normal block mt-0.5">
                  UJIKOM S1 Manajemen
                </span>
              </div>
            </div>
          ) : isTestSesiRoute ? (
            /* Test Session Header Title: "Simulasi Ujian" + "1/10 Soal" Subtitle */
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="min-w-0">
                <span className="font-bold text-sm sm:text-base md:text-lg tracking-tight text-slate-900 block leading-tight">
                  Simulasi Ujian
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium block mt-0.5 font-mono">
                  {currentQuestionIndex + 1}/{activeQuestions.length || 10} Soal
                </span>
              </div>
            </div>
          ) : isTestRoute ? (
            /* Test Page Header Title: ChevronLeft + Simulasi Ujian Komprehensif / UJIKOM S1 Manajemen */
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <Link
                to="/"
                className="p-1 sm:p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors flex items-center justify-center shrink-0"
                title="Kembali ke Beranda"
                aria-label="Kembali ke Beranda"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              </Link>
              <div className="min-w-0">
                <span className="font-bold text-xs sm:text-base md:text-lg tracking-tight text-slate-900 block leading-tight whitespace-normal">
                  Simulasi Ujian Komprehensif
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-normal block mt-0.5">
                  UJIKOM S1 Manajemen
                </span>
              </div>
            </div>
          ) : isModuleRoute && activeBidang ? (
            /* Module Page Header Title: ChevronLeft + Module Name / UJIKOM S1 Manajemen */
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <Link
                to="/"
                className="p-1 sm:p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors flex items-center justify-center shrink-0"
                title="Kembali ke Beranda"
                aria-label="Kembali ke Beranda"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              </Link>
              <div className="min-w-0">
                <span className="font-bold text-xs sm:text-base md:text-lg tracking-tight text-slate-900 block leading-tight whitespace-normal">
                  {activeBidang.nama}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-normal block mt-0.5">
                  UJIKOM S1 Manajemen
                </span>
              </div>
            </div>
          ) : (
            /* Home / General Header Title: GraduationCap + UJIKOM / S1 Manajemen */
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 focus:outline-hidden shrink-0"
              aria-label="Beranda UJIKOM"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white shrink-0 shadow-xs">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 block leading-none">
                  UJIKOM
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium block mt-0.5">
                  S1 Manajemen
                </span>
              </div>
            </Link>
          )}

          {/* Right Navigation Controls */}
          {isReferensiGlobalRoute || isTestRiwayatRoute ? (
            /* Referensi & Riwayat Page Header Right: Empty (Clean navigation) */
            <div />
          ) : isTestHasilRoute ? (
            /* Hasil Ujian Header Right: ONLY Cetak Button */
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={() => window.print()}
                className="px-3 sm:px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                title="Cetak Hasil Ujian"
              >
                <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
                <span>Cetak</span>
              </button>
            </div>
          ) : isTestSesiRoute && isExamActive ? (
            /* Test Session Header Right: Timer Badge & Selesaikan Ujian Button */
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <div
                className={`font-mono font-bold text-[11px] sm:text-xs md:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border whitespace-nowrap ${
                  isLowTime
                    ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
                    : 'bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                <span>{formatDurationSeconds(timeRemainingSeconds)}</span>
              </div>

              <button
                onClick={() => setIsConfirmSubmitOpen(true)}
                className="bg-rose-600 hover:bg-rose-700 text-white text-[9px] sm:text-[10px] font-bold leading-none px-2.5 py-1 rounded-md transition-colors cursor-pointer shadow-2xs shrink-0 flex flex-col items-center justify-center text-center gap-0.5 tracking-tight"
                title="Akhiri Sesi Ujian"
              >
                <span>Akhiri</span>
                <span>Sesi</span>
              </button>
            </div>
          ) : isTestRoute ? (
            /* Test Hub / History / Result Header Right: ONLY Riwayat Icon Link */
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/test/riwayat"
                className="p-2 sm:p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
                title="Riwayat Ujian"
                aria-label="Riwayat Ujian"
              >
                <History className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          ) : isModuleRoute && activeBidangId ? (
            /* Module Page Header Right: Tabs on Desktop, Icons on Mobile when in Materi tab */
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Desktop Navigation Tabs */}
              <nav className="hidden md:flex items-center gap-0.5 sm:gap-1 bg-slate-100 p-0.5 sm:p-1 rounded-lg text-xs sm:text-sm font-medium" aria-label="Navigasi Modul Header">
                <Link
                  to={`/materi/${activeBidangId}`}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors whitespace-nowrap text-xs sm:text-sm ${
                    isRingkasanView
                      ? 'bg-white text-blue-700 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ringkasan
                </Link>
                <Link
                  to={`/materi/${activeBidangId}/isi`}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors whitespace-nowrap text-xs sm:text-sm ${
                    isMateriView
                      ? 'bg-white text-blue-700 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Materi
                </Link>
                <Link
                  to={`/materi/${activeBidangId}/referensi`}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors whitespace-nowrap text-xs sm:text-sm ${
                    isReferensiView
                      ? 'bg-white text-blue-700 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Referensi
                </Link>
              </nav>

              {/* Mobile Header Icons when on Materi reading tab */}
              {isMateriView && (
                <div className="md:hidden flex items-center gap-1">
                  <Link
                    to={`/materi/${activeBidangId}`}
                    className="p-2 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-slate-100 transition-colors"
                    title="Ringkasan Modul"
                    aria-label="Ringkasan Modul"
                  >
                    <FileText className="w-5 h-5" />
                  </Link>
                  <Link
                    to={`/materi/${activeBidangId}/referensi`}
                    className="p-2 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-slate-100 transition-colors"
                    title="Referensi Buku"
                    aria-label="Referensi Buku"
                  >
                    <Bookmark className="w-5 h-5" />
                  </Link>
                </div>
              )}
            </div>
          ) : (
            /* Home Page Header Right: Book Icon for Daftar Pustaka (Desktop only, hidden on mobile) */
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/materi/referensi"
                className="hidden md:flex p-2 sm:p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 cursor-pointer items-center justify-center"
                title="Daftar Pustaka & Buku Rujukan"
                aria-label="Daftar Pustaka"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>

  );
};
