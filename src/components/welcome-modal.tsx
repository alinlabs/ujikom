import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, ArrowRight } from 'lucide-react';
import { useAppStore } from '../stores/useAppStore';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const setHasSeenWelcomeModal = useAppStore((state) => state.setHasSeenWelcomeModal);

  // Trigger blue confetti animation with high z-index and extended duration
  useEffect(() => {
    if (!isOpen) return;

    const colors = ['#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#1e40af', '#0284c7'];

    // Wave 1: Immediate center burst with high zIndex floating above overlay backdrop
    confetti({
      particleCount: 90,
      spread: 85,
      origin: { y: 0.55 },
      colors,
      zIndex: 99999,
      ticks: 400,
      disableForReducedMotion: true,
    });

    // Wave 2: Side cannons burst after subtle delay
    const timer1 = setTimeout(() => {
      confetti({
        particleCount: 55,
        angle: 60,
        spread: 70,
        origin: { x: 0.08, y: 0.65 },
        colors,
        zIndex: 99999,
        ticks: 400,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 55,
        angle: 120,
        spread: 70,
        origin: { x: 0.92, y: 0.65 },
        colors,
        zIndex: 99999,
        ticks: 400,
        disableForReducedMotion: true,
      });
    }, 400);

    // Wave 3: Final top rain burst to extend celebratory atmosphere
    const timer2 = setTimeout(() => {
      confetti({
        particleCount: 70,
        spread: 100,
        origin: { y: 0.35 },
        colors,
        zIndex: 99999,
        ticks: 450,
        disableForReducedMotion: true,
      });
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDismiss = () => {
    setHasSeenWelcomeModal(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        onClick={handleDismiss}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Modal / Desktop Bottom Sheet Container */}
      <div className="fixed inset-x-0 bottom-0 md:inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 pointer-events-none">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-modal-title"
          className="pointer-events-auto relative w-full md:max-w-xl lg:max-w-2xl bg-white rounded-t-3xl md:rounded-2xl border border-slate-200/90 shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 max-h-[92vh] flex flex-col"
        >
          {/* Top floating close button */}
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute top-3.5 right-3.5 z-20 p-1.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer shadow-xs border border-slate-200/60"
            aria-label="Tutup Ucapan Selamat Datang"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content with strict order: [Gambar] -> [Judul Rata Tengah] -> [Deskripsi Rata Tengah] -> [Tombol Biru Close] */}
          <div className="overflow-y-auto p-5 sm:p-6 md:p-7 space-y-4 sm:space-y-5">
            {/* 1. [Gambar] Tanpa outline & tidak terpotong */}
            <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src="/welcoming.webp"
                alt="Selamat Datang di Portal Ujian Komprehensif"
                className="w-full h-auto max-h-[260px] sm:max-h-[320px] object-contain rounded-xl"
                loading="eager"
              />
            </div>

            {/* 2. [Judul] Rata Tengah */}
            <div className="text-center px-2">
              <h2
                id="welcome-modal-title"
                className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug"
              >
                Hi, my princess ❤️
              </h2>
            </div>

            {/* 3. [Deskripsi] Rata Tengah */}
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center px-2 sm:px-4 space-y-2">
              <p>
                Semangat ya buat UTS Hari ini, sama semangat terus buat nanti sampe beresin kompre nya. Diriku sudah buatkan panduan ini walau janjinya dari kemarin kemarin, hehe...
              </p>
              <p className="font-semibold text-slate-800">
                Semangat, Sehat sehat. Love U
              </p>
              <div className="text-base sm:text-lg tracking-widest pt-0.5">
                ❤️❤️❤️
              </div>
            </div>

            {/* 4. [Tombol Biru] Penutup Modal */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleDismiss}
                className="w-full py-3 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-blue-700/20"
              >
                <span>Okei, Aku janji lebih hebat dari kamu!</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
