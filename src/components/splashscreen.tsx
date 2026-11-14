import React, { useState, useEffect } from 'react';
import { useAppStore } from '../stores/useAppStore';

interface SplashScreenProps {
  onComplete: () => void;
  durationSeconds?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  durationSeconds = 3,
}) => {
  const [elapsedMs, setElapsedMs] = useState(0);
  const totalMs = durationSeconds * 1000;
  const setHasSeenSplash = useAppStore((state) => state.setHasSeenSplash);
  const setIsWelcomeModalOpen = useAppStore((state) => state.setIsWelcomeModalOpen);
  const hasSeenWelcomeModal = useAppStore((state) => state.hasSeenWelcomeModal);

  useEffect(() => {
    const stepMs = 40;
    const interval = setInterval(() => {
      setElapsedMs((prev) => {
        const next = prev + stepMs;
        if (next >= totalMs) {
          clearInterval(interval);
          return totalMs;
        }
        return next;
      });
    }, stepMs);

    return () => clearInterval(interval);
  }, [totalMs]);

  useEffect(() => {
    if (elapsedMs >= totalMs) {
      setHasSeenSplash(true);
      // Setiap kali splash screen selesai saat masuk ke web, buka modal ucapan selamat datang
      setIsWelcomeModalOpen(true);
      onComplete();
    }
  }, [elapsedMs, totalMs, onComplete, setHasSeenSplash, setIsWelcomeModalOpen]);

  const progressPercent = Math.min(100, (elapsedMs / totalMs) * 100);

  return (
    <div
      data-testid="splashscreen-view"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-slate-900 select-none overflow-hidden"
    >
      {/* Center Branding: Ultra Clean - Only Logo & Two-Line Title */}
      <div className="flex flex-col items-center justify-center text-center px-4 animate-in fade-in zoom-in-95 duration-500">
        <img
          src="/icon.svg"
          alt="Logo UJIKOM"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl mb-4 sm:mb-5 shadow-xs"
        />
        <div className="space-y-1">
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-wide uppercase leading-tight">
            PANDUAN MATERI
          </div>
          <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700 tracking-wide uppercase leading-tight">
            UJIAN KOMPREHENSIF
          </div>
        </div>
      </div>

      {/* Loading Progress Line at the very bottom edge of screen */}
      <div className="fixed bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-slate-100 w-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-75 ease-linear"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
