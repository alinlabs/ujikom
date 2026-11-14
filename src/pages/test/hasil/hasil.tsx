import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExamStore } from '../../../stores/useExamStore';
import { HasilNilai } from './hasil-nilai';
import { HasilWaktu } from './hasil-waktu';
import { HasilReview } from './hasil-review';

export const Hasil: React.FC = () => {
  const navigate = useNavigate();
  const lastResult = useExamStore((state) => state.lastResult);
  const setIsSettingsModalOpen = useExamStore((state) => state.setIsSettingsModalOpen);

  const [activeTab, setActiveTab] = useState<'nilai' | 'waktu' | 'review'>('nilai');

  if (!lastResult) {
    return (
      <div className="max-w-md mx-auto my-12 bg-white rounded-xl border border-slate-200 p-8 text-center space-y-4 shadow-xs">
        <h2 className="text-lg font-bold text-slate-900">Belum Ada Hasil Ujian Tersedia</h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Ikuti simulasi ujian komprehensif tertulis atau lisan untuk melihat evaluasi hasil belajar kamu.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => navigate('/test/riwayat')}
            className="flex-1 py-2.5 px-3 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Lihat Riwayat
          </button>
          <button
            onClick={() => {
              setIsSettingsModalOpen(true);
            }}
            className="flex-1 py-2.5 px-3 bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-800 transition-colors cursor-pointer"
          >
            Mulai Ujian Baru
          </button>
        </div>
      </div>
    );
  }

  const [isPrinting, setIsPrinting] = useState(false);

  React.useEffect(() => {
    const onBeforePrint = () => setIsPrinting(true);
    const onAfterPrint = () => setIsPrinting(false);
    window.addEventListener('beforeprint', onBeforePrint);
    window.addEventListener('afterprint', onAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', onBeforePrint);
      window.removeEventListener('afterprint', onAfterPrint);
    };
  }, []);

  return (
    <div className="w-full space-y-6">
      {/* Header Banner during Print */}
      <div className="hidden print-only mb-6 border-b pb-4">
        <h1 className="text-xl font-bold text-slate-900">
          Laporan Hasil Uji Kompetensi Komprehensif (UJIKOM)
        </h1>
        <p className="text-xs text-slate-600">Program Studi S1 Manajemen</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-2 sm:gap-6 text-xs sm:text-sm font-medium no-print overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('nilai')}
          className={`py-2 sm:py-2.5 transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'nilai'
              ? 'border-b-2 border-blue-700 text-blue-700 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Skor & Evaluasi Rubrik
        </button>
        <button
          onClick={() => setActiveTab('waktu')}
          className={`py-2 sm:py-2.5 transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'waktu'
              ? 'border-b-2 border-blue-700 text-blue-700 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Analisis Waktu Menjawab
        </button>
        <button
          onClick={() => setActiveTab('review')}
          className={`py-2 sm:py-2.5 transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'review'
              ? 'border-b-2 border-blue-700 text-blue-700 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Pembahasan Soal ({lastResult.responses.length})
        </button>
      </div>

      {/* Tab Content for Screen & Printout */}
      <div className="space-y-6">
        {(activeTab === 'nilai' || isPrinting) && (
          <div className={activeTab === 'nilai' ? 'block' : 'hidden print:block'}>
            <HasilNilai result={lastResult} />
          </div>
        )}
        {(activeTab === 'waktu' || isPrinting) && (
          <div className={activeTab === 'waktu' ? 'block' : 'hidden print:block'}>
            <HasilWaktu result={lastResult} />
          </div>
        )}
        {(activeTab === 'review' || isPrinting) && (
          <div className={activeTab === 'review' ? 'block' : 'hidden print:block'}>
            <HasilReview
              responses={lastResult.responses}
              mode={lastResult.config.mode}
            />
          </div>
        )}
      </div>
    </div>
  );
};
