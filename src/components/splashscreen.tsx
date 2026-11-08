import React, { useState, useEffect } from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { useAppStore } from '../stores/useAppStore';

interface SplashScreenProps {
  onComplete: () => void;
  durationSeconds?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  durationSeconds = 5,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(durationSeconds);
  const setHasSeenSplash = useAppStore((state) => state.setHasSeenSplash);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (secondsRemaining <= 0) {
      setHasSeenSplash(true);
      onComplete();
    }
  }, [secondsRemaining, onComplete, setHasSeenSplash]);

  const handleSkip = () => {
    setHasSeenSplash(true);
    onComplete();
  };

  const progressPercent = ((durationSeconds - secondsRemaining) / durationSeconds) * 100;

  return (
    <div
      data-testid="splashscreen-view"
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-white text-slate-900 p-6 sm:p-10 select-none"
    >
      {/* Top Header Tag */}
      <div className="w-full flex justify-between items-center max-w-2xl pt-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Program Studi S1 Manajemen
        </span>
        <button
          onClick={handleSkip}
          className="text-xs font-medium text-slate-500 hover:text-slate-900 px-3 py-1.5 rounded-md border border-slate-200 hover:border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
          aria-label="Lewati splashscreen langsung ke beranda"
        >
          <span>Lewati</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center Branding & Info: Minimalist Academic */}
      <div className="flex flex-col items-center text-center max-w-lg my-auto py-6 space-y-4">
        <div className="w-16 h-16 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-sm mb-2">
          <GraduationCap className="w-9 h-9" />
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            UJIKOM
          </h1>
          <p className="text-sm font-semibold text-blue-700">
            Panduan & Simulasi Ujian Komprehensif S1 Manajemen
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md pt-1">
          Platform terpadu pendalaman 4 pilar mata kuliah (Operasional, Keuangan, Pemasaran, dan SDM) serta simulasi ujian tertulis dan sidang lisan.
        </p>

        {/* 4 Pillars Summary List - Minimalist Text */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full text-center">
          <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="text-xs font-bold text-slate-900">Operasional</div>
            <div className="text-[11px] text-slate-500">15 Topik</div>
          </div>
          <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="text-xs font-bold text-slate-900">Keuangan</div>
            <div className="text-[11px] text-slate-500">14 Topik</div>
          </div>
          <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="text-xs font-bold text-slate-900">Pemasaran</div>
            <div className="text-[11px] text-slate-500">9 Topik</div>
          </div>
          <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="text-xs font-bold text-slate-900">SDM</div>
            <div className="text-[11px] text-slate-500">8 Topik</div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Timer */}
      <div className="w-full max-w-sm pb-4 flex flex-col items-center space-y-2">
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200">
          <div
            className="bg-blue-700 h-full transition-all duration-1000 ease-linear rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex items-center justify-between w-full text-xs text-slate-500">
          <span>Memuat sistem modul...</span>
          <span className="font-mono">{secondsRemaining}s</span>
        </div>
      </div>
    </div>
  );
};
