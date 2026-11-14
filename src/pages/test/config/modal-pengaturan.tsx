import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../components/modal';
import { useExamStore } from '../../../stores/useExamStore';
import { ExamMode } from '../../../types/exam';
import { BidangId } from '../../../types/materi';

interface ModalPengaturanProps {
  isOpen: boolean;
  onClose: () => void;
}

const BIDANG_LIST: { id: BidangId; label: string }[] = [
  { id: 'operasional', label: 'Operasional' },
  { id: 'keuangan', label: 'Keuangan' },
  { id: 'pemasaran', label: 'Pemasaran' },
  { id: 'sdm', label: 'SDM' },
];

export const ModalPengaturan: React.FC<ModalPengaturanProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const config = useExamStore((state) => state.config);
  const startNewExam = useExamStore((state) => state.startNewExam);

  const [mode, setMode] = useState<ExamMode>(config.mode || 'pilihan_ganda');
  const [selectedBidangs, setSelectedBidangs] = useState<BidangId[]>(
    config.selectedBidangs && config.selectedBidangs.length > 0
      ? config.selectedBidangs
      : config.selectedBidang && config.selectedBidang !== 'semua'
      ? [config.selectedBidang as BidangId]
      : ['operasional', 'keuangan', 'pemasaran', 'sdm']
  );
  const [totalQuestions, setTotalQuestions] = useState<number>(config.totalQuestions || 10);
  const [durationMinutes, setDurationMinutes] = useState<number>(config.durationMinutes || 15);
  const [randomize, setRandomize] = useState<boolean>(config.randomize);

  const handleToggleBidang = (id: BidangId) => {
    if (selectedBidangs.includes(id)) {
      if (selectedBidangs.length > 1) {
        setSelectedBidangs(selectedBidangs.filter((b) => b !== id));
      }
    } else {
      setSelectedBidangs([...selectedBidangs, id]);
    }
  };

  const handleStart = () => {
    let answerType: 'pilihan_ganda' | 'manual_input' | 'voice_input' = 'pilihan_ganda';
    let questionDeliveryMode: 'text' | 'voice' = 'text';

    if (mode === 'pilihan_ganda') {
      answerType = 'pilihan_ganda';
      questionDeliveryMode = 'text';
    } else if (mode === 'tertulis') {
      answerType = 'manual_input';
      questionDeliveryMode = 'text';
    } else if (mode === 'lisan') {
      answerType = 'voice_input';
      questionDeliveryMode = 'voice';
    }

    const primaryBidang = selectedBidangs.length === 4 ? 'semua' : selectedBidangs[0] || 'semua';

    startNewExam({
      mode,
      selectedBidang: primaryBidang,
      selectedBidangs,
      totalQuestions,
      durationMinutes,
      randomize,
      questionDeliveryMode,
      answerType,
    });
    onClose();
    navigate('/test/sesi');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Aturan Sesi Ujian"
      maxWidth="lg"
      footer={
        <div className="w-full">
          <button
            type="button"
            onClick={handleStart}
            className="w-full py-2.5 sm:py-3 px-6 text-xs sm:text-sm font-bold bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors cursor-pointer shadow-xs text-center"
          >
            Mulai Ujian Sekarang
          </button>
        </div>
      }
    >
      <div className="space-y-5 text-slate-800">
        {/* 1. Metode Ujian (3 Options: Ujian Pilihan Ganda, Ujian Tertulis, Ujian Lisan) */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Metode Ujian
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => setMode('pilihan_ganda')}
              className={`p-3 rounded-lg border text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                mode === 'pilihan_ganda'
                  ? 'border-blue-700 bg-blue-50/80 text-blue-950 ring-1 ring-blue-600'
                  : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
              }`}
            >
              <div className="text-xs sm:text-[13px] font-bold whitespace-nowrap tracking-tight">
                Ujian Pilihan Ganda
              </div>
              <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                Soal pilihan ganda A, B, C, D
              </div>
            </button>

            <button
              type="button"
              onClick={() => setMode('tertulis')}
              className={`p-3 rounded-lg border text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                mode === 'tertulis'
                  ? 'border-blue-700 bg-blue-50/80 text-blue-950 ring-1 ring-blue-600'
                  : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
              }`}
            >
              <div className="text-xs sm:text-[13px] font-bold whitespace-nowrap tracking-tight">
                Ujian Tertulis
              </div>
              <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                Studi kasus & isian singkat
              </div>
            </button>

            <button
              type="button"
              onClick={() => setMode('lisan')}
              className={`p-3 rounded-lg border text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                mode === 'lisan'
                  ? 'border-blue-700 bg-blue-50/80 text-blue-950 ring-1 ring-blue-600'
                  : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
              }`}
            >
              <div className="text-xs sm:text-[13px] font-bold whitespace-nowrap tracking-tight">
                Ujian Lisan
              </div>
              <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                Simulasi tanya jawab lisan (voice)
              </div>
            </button>
          </div>
        </div>

        {/* 2. Cakupan Mata Kuliah (4 Cards ONLY: Operasional, Keuangan, Pemasaran, SDM) */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Cakupan Mata Kuliah
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {BIDANG_LIST.map((item) => {
              const isSelected = selectedBidangs.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleToggleBidang(item.id)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold text-center border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-700 bg-blue-50 text-blue-900 ring-1 ring-blue-600 shadow-xs'
                      : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Jumlah Pertanyaan (4 Options: 5, 10, 15, 20 Soal) */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Jumlah Pertanyaan
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[5, 10, 15, 20].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setTotalQuestions(num)}
                className={`py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium border text-center transition-all cursor-pointer ${
                  totalQuestions === num
                    ? 'border-blue-700 bg-blue-50 text-blue-900 font-bold ring-1 ring-blue-600 shadow-xs'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50 bg-white'
                }`}
              >
                {num} Soal
              </button>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 mt-1.5 leading-tight">
            *Jumlah soal di atas berlaku per mata kuliah yang dipilih.
          </p>
        </div>

        {/* 4. Alokasi Waktu (Terpisah Vertikal di Bawah Jumlah Pertanyaan) */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Alokasi Waktu
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[10, 15, 30, 45].map((mins) => (
              <button
                key={mins}
                type="button"
                onClick={() => setDurationMinutes(mins)}
                className={`py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium border text-center transition-all cursor-pointer whitespace-nowrap ${
                  durationMinutes === mins
                    ? 'border-blue-700 bg-blue-50 text-blue-900 font-bold ring-1 ring-blue-600 shadow-xs'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50 bg-white'
                }`}
              >
                {mins} Menit
              </button>
            ))}
          </div>
        </div>

        {/* 4. Acak Urutan Pertanyaan */}
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div>
            <div className="text-xs font-semibold text-slate-900">Acak Urutan Pertanyaan</div>
            <div className="text-[11px] text-slate-500">Mencegah bias hafalan posisi nomor soal</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={randomize}
            onClick={() => setRandomize(!randomize)}
            className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
              randomize ? 'bg-blue-700 justify-end' : 'bg-slate-300 justify-start'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
          </button>
        </div>
      </div>
    </Modal>
  );
};


