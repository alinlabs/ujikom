import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, ChevronLeft, BookOpen, History, Printer, Volume2, Pause } from 'lucide-react';
import { useExamStore } from '../stores/useExamStore';
import { getBidangById, allBidangMateri } from '../pages/materi/utils';
import { formatDurationSeconds } from '../utils/formatters';
import { openMateriPdfInViewer } from '../services/materiPdfService';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { PWAInstallModal } from './pwa-install-modal';

interface HeaderProps {
  onOpenSettings?: () => void;
  materiSpeech?: {
    canPlay: boolean;
    isPlaying: boolean;
    isAutoEnabled: boolean;
    onToggle: () => void;
  };
}

export const Header: React.FC<HeaderProps> = ({ materiSpeech }) => {
  const location = useLocation();
  const setIsConfirmSubmitOpen = useExamStore((state) => state.setIsConfirmSubmitOpen);
  const timeRemainingSeconds = useExamStore((state) => state.timeRemainingSeconds);
  const isExamActive = useExamStore((state) => state.isExamActive);
  const resultSource = useExamStore((state) => state.resultSource);
  const currentQuestionIndex = useExamStore((state) => state.currentQuestionIndex);
  const activeQuestions = useExamStore((state) => state.activeQuestions);
  const config = useExamStore((state) => state.config);

  const { isInstalled, isIOS, showGuideModal, setShowGuideModal, triggerInstall } = usePWAInstall();

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

  const examModeLabel =
    config.mode === 'lisan'
      ? 'Ujian Lisan'
      : config.mode === 'tertulis'
      ? 'Ujian Tertulis'
      : 'Pilihan Ganda';

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          {/* Left Brand / Adaptive Title */}
          {isReferensiGlobalRoute ? (
            /* Referensi Page Header Title */
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
            /* Hasil Ujian Page Header Title */
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
            /* Riwayat Ujian Page Header Title */
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
            /* Test Session Header Title */
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base md:text-lg tracking-tight text-slate-900 block leading-tight">
                    Simulasi Ujian
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-md">
                    {examModeLabel}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium block mt-0.5 font-mono">
                  Soal {currentQuestionIndex + 1} dari {activeQuestions.length || 10}
                </span>
              </div>
            </div>
          ) : isTestRoute ? (
            /* Test Page Header Title */
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
            /* Module Page Header Title */
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
                <span className="font-bold text-xs sm:text-base md:text-lg tracking-tight text-slate-900 block leading-tight truncate">
                  {activeBidang.nama}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-normal block mt-0.5">
                  UJIKOM S1 Manajemen
                </span>
              </div>
            </div>
          ) : (
            /* Home / General Header Title */
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
            <div />
          ) : isTestHasilRoute ? (
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
            /* Test Session Header Right */
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Duration Timer Badge (Clean, no clock icon) */}
              <div
                className={`font-mono font-bold text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border whitespace-nowrap flex items-center justify-center ${
                  isLowTime
                    ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
                    : 'bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                <span>{formatDurationSeconds(timeRemainingSeconds)}</span>
              </div>

              {/* End Session Button (2 lines on mobile: Akhiri / Sesi) */}
              <button
                type="button"
                onClick={() => setIsConfirmSubmitOpen(true)}
                className="bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs shrink-0 flex items-center justify-center text-center font-bold"
                title="Akhiri Sesi Ujian"
                aria-label="Akhiri Sesi Ujian"
              >
                <span className="sm:hidden text-[10px] leading-tight font-bold block text-center">
                  Akhiri<br />Sesi
                </span>
                <span className="hidden sm:inline text-xs font-bold whitespace-nowrap">
                  Akhiri Sesi
                </span>
              </button>
            </div>
          ) : isTestRoute ? (
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
          ) : isModuleRoute && activeBidang && activeBidangId ? (
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
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
                  Detail
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

              {/* Print Button (Desktop & Mobile) */}
              <button
                type="button"
                onClick={() => openMateriPdfInViewer(allBidangMateri)}
                className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100 text-slate-700 hover:text-blue-700 transition-colors cursor-pointer shadow-xs flex items-center justify-center shrink-0"
                title="Cetak Seluruh Panduan Materi PDF (A4)"
                aria-label="Cetak Panduan Materi PDF A4"
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* Speaker Audio Explanation Button (Hanya pada tab Detail, paling kanan - Desktop & Mobile) */}
              {isMateriView && materiSpeech?.canPlay && (
                <button
                  type="button"
                  onClick={materiSpeech.onToggle}
                  className={`p-2 rounded-lg border transition-colors cursor-pointer shadow-xs flex items-center justify-center shrink-0 ${
                    materiSpeech.isPlaying
                      ? 'border-amber-300 bg-amber-50 text-amber-600 animate-pulse'
                      : materiSpeech.isAutoEnabled
                      ? 'border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100'
                      : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100 text-slate-700 hover:text-blue-700'
                  }`}
                  title={
                    materiSpeech.isPlaying
                      ? 'Hentikan Penjelasan Audio'
                      : materiSpeech.isAutoEnabled
                      ? 'Audio Otomatis Aktif (Buka Pengaturan Suara)'
                      : 'Pengaturan & Putar Penjelasan Suara'
                  }
                  aria-label={
                    materiSpeech.isPlaying
                      ? 'Hentikan Penjelasan Audio'
                      : materiSpeech.isAutoEnabled
                      ? 'Audio Otomatis Aktif (Buka Pengaturan Suara)'
                      : 'Pengaturan & Putar Penjelasan Suara'
                  }
                >
                  {materiSpeech.isPlaying ? (
                    <Pause className="w-4 h-4 text-amber-600" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
              {/* Desktop Install App (Left of referensi icon, pure blue text, no card) */}
              {!isInstalled && (
                <button
                  type="button"
                  onClick={triggerInstall}
                  className="hidden md:inline-flex text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm active:opacity-75 transition-colors cursor-pointer select-none"
                  title="Instal Aplikasi UJIKOM"
                  aria-label="Instal Aplikasi UJIKOM"
                >
                  Instal App
                </button>
              )}

              {/* Referensi Icon on Desktop */}
              <Link
                to="/materi/referensi"
                className="hidden md:flex p-2 sm:p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 cursor-pointer items-center justify-center"
                title="Daftar Pustaka & Buku Rujukan"
                aria-label="Daftar Pustaka"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>

              {/* Mobile Install App (Far right in header, pure blue text, no card) */}
              {!isInstalled && (
                <button
                  type="button"
                  onClick={triggerInstall}
                  className="md:hidden text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm active:opacity-75 transition-colors cursor-pointer select-none py-1"
                  title="Instal Aplikasi UJIKOM"
                  aria-label="Instal Aplikasi UJIKOM"
                >
                  Instal App
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Animated Top Progress Bar on /test/sesi */}
      {isTestSesiRoute && isExamActive && (
        <div className="w-full bg-slate-100 h-1 overflow-hidden">
          <div
            className="bg-blue-700 h-full transition-all duration-300"
            style={{
              width: `${
                activeQuestions.length > 0
                  ? Math.min(100, Math.max(0, ((currentQuestionIndex + 1) / activeQuestions.length) * 100))
                  : 0
              }%`,
            }}
          />
        </div>
      )}

      {/* PWA Install Guide Modal */}
      <PWAInstallModal
        isOpen={showGuideModal}
        onClose={() => setShowGuideModal(false)}
        isIOS={isIOS}
      />
    </header>
  );
};

