import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../components/modal';
import { useExamStore } from '../../../stores/useExamStore';
import { ExamMode, QuestionDeliveryMode, AnswerType } from '../../../types/exam';
import { BidangId } from '../../../types/materi';

interface ModalPengaturanProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalPengaturan: React.FC<ModalPengaturanProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const config = useExamStore((state) => state.config);
  const startNewExam = useExamStore((state) => state.startNewExam);

  const [mode, setMode] = useState<ExamMode>(config.mode);
  const [selectedBidang, setSelectedBidang] = useState<BidangId | 'semua'>(config.selectedBidang);
  const [totalQuestions, setTotalQuestions] = useState<number>(config.totalQuestions);
  const [durationMinutes, setDurationMinutes] = useState<number>(config.durationMinutes);
  const [randomize, setRandomize] = useState<boolean>(config.randomize);

  const [questionDeliveryMode, setQuestionDeliveryMode] = useState<QuestionDeliveryMode>(
    config.questionDeliveryMode || 'text'
  );
  const [answerType, setAnswerType] = useState<AnswerType>(
    config.answerType || 'pilihan_ganda'
  );

  const handleStart = () => {
    startNewExam({
      mode,
      selectedBidang,
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
      title="Pengaturan Sesi Ujian Komprehensif"
      maxWidth="lg"
      footer={
        <div className="flex items-center justify-between w-full">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md transition-colors cursor-pointer"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleStart}
            className="px-5 py-2.5 text-xs sm:text-sm font-medium bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-colors cursor-pointer"
          >
            Mulai Ujian Sekarang
          </button>
        </div>
      }
    >
      <div className="space-y-5 text-slate-800">
        {/* Mode & Penyampaian Soal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Penyampaian Soal
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setQuestionDeliveryMode('text')}
                className={`flex-1 py-2 px-2.5 rounded-md text-xs font-medium border text-center transition-colors cursor-pointer ${
                  questionDeliveryMode === 'text'
                    ? 'border-blue-700 bg-blue-50 text-blue-900 font-semibold'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Teks (Biasa)
              </button>
              <button
                type="button"
                onClick={() => setQuestionDeliveryMode('voice')}
                className={`flex-1 py-2 px-2.5 rounded-md text-xs font-medium border text-center transition-colors cursor-pointer ${
                  questionDeliveryMode === 'voice'
                    ? 'border-blue-700 bg-blue-50 text-blue-900 font-semibold'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Voice (TTS Suara)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Tipe Jawaban
            </label>
            <select
              value={answerType}
              onChange={(e) => setAnswerType(e.target.value as AnswerType)}
              className="w-full py-2 px-3 rounded-md text-xs font-medium border border-slate-300 bg-white text-slate-800 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-hidden"
            >
              <option value="pilihan_ganda">Pilihan Ganda (4 Opsi: A, B, C, D)</option>
              <option value="manual_input">Manual Input (Ketik manual)</option>
              <option value="voice_input">Voice (Perekam Suara STT)</option>
            </select>
          </div>
        </div>

        {/* Mode Ujian */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Metode Ujian
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setMode('tertulis');
                if (answerType === 'voice_input') setAnswerType('pilihan_ganda');
              }}
              className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                mode === 'tertulis'
                  ? 'border-blue-700 bg-blue-50/60'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="text-sm font-semibold text-slate-900">Ujian Tertulis</div>
              <div className="text-xs text-slate-500 mt-0.5">
                Pilihan ganda, perhitungan rumus & studi kasus kuantitatif
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setMode('lisan');
                setAnswerType('voice_input');
              }}
              className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                mode === 'lisan'
                  ? 'border-blue-700 bg-blue-50/60'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="text-sm font-semibold text-slate-900">Ujian Lisan / Sidang</div>
              <div className="text-xs text-slate-500 mt-0.5">
                Simulasi tanya-jawab mendalam dengan dewan penguji
              </div>
            </button>
          </div>
        </div>

        {/* Bidang Selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Cakupan Mata Kuliah
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { id: 'semua', label: 'Semua Bidang (Terpadu)' },
              { id: 'operasional', label: 'Manajemen Operasional' },
              { id: 'keuangan', label: 'Manajemen Keuangan' },
              { id: 'pemasaran', label: 'Manajemen Pemasaran' },
              { id: 'sdm', label: 'Manajemen SDM' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedBidang(item.id as BidangId | 'semua')}
                className={`py-2 px-2.5 rounded-md text-xs font-medium text-center border transition-colors cursor-pointer ${
                  selectedBidang === item.id
                    ? 'border-blue-700 bg-blue-700 text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question Count & Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Jumlah Pertanyaan (Min 10 - Max 15)
            </label>
            <div className="flex gap-2">
              {[10, 12, 15].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setTotalQuestions(num)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                    totalQuestions === num
                      ? 'border-blue-700 bg-blue-50 text-blue-900 font-semibold'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {num} Soal
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Alokasi Waktu
            </label>
            <div className="flex gap-2">
              {[10, 15, 30, 45].map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setDurationMinutes(mins)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                    durationMinutes === mins
                      ? 'border-blue-700 bg-blue-50 text-blue-900 font-semibold'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {mins} Menit
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Randomize Option */}
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
