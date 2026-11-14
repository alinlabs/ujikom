import React from 'react';
import { X, Download, Share, PlusSquare, Smartphone, CheckCircle2 } from 'lucide-react';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isIOS: boolean;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({
  isOpen,
  onClose,
  isIOS,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 sm:p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xs">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h3 id="pwa-modal-title" className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
              Instal Aplikasi UJIKOM
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Akses cepat tanpa browser & hemat kuota
            </p>
          </div>
        </div>

        {isIOS ? (
          <div className="space-y-3 py-2 text-sm text-slate-700">
            <p className="text-xs text-slate-600">
              Untuk menginstal di iPhone atau iPad:
            </p>
            <div className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
              <Share className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-slate-900 block">1. Buka Menu Bagikan</span>
                Ketuk ikon <strong>Bagikan (Share)</strong> di bilah bawah peramban Safari.
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
              <PlusSquare className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-slate-900 block">2. Tambahkan ke Layar Utama</span>
                Gulir ke bawah lalu pilih menu <strong>Tambahkan ke Layar Utama (Add to Home Screen)</strong>.
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 py-2 text-sm text-slate-700">
            <p className="text-xs text-slate-600">
              Petunjuk pemasangan aplikasi web pada perangkat kamu:
            </p>
            <div className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
              <Smartphone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-slate-900 block">Browser Android / Chrome</span>
                Ketuk tombol menu titik tiga (<strong>⋮</strong>) di kanan atas, lalu pilih <strong>Instal Aplikasi</strong> atau <strong>Tambahkan ke Layar Utama</strong>.
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-slate-900 block">Komputer / Desktop Chrome / Edge</span>
                Klik ikon <strong>Instal</strong> pada kolom alamat peramban (URL bar) di kanan atas.
              </div>
            </div>
          </div>
        )}

        <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer text-center"
          >
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
