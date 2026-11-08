import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useExamSession } from '../../../hooks/useExamSession';
import { useExamStore } from '../../../stores/useExamStore';
import { SectionSoal } from './section-soal';
import { SectionJawaban } from './section-jawaban';
import { Modal } from '../../../components/modal';

export const SessionMetode: React.FC = () => {
  const navigate = useNavigate();
  const {
    isExamActive,
    currentQuestionIndex,
    currentQuestion,
    currentResponse,
    activeQuestions,
    answeredCount,
    submitExam,
  } = useExamSession();

  const answerQuestion = useExamStore((state) => state.answerQuestion);
  const recordOralResponse = useExamStore((state) => state.recordOralResponse);
  const config = useExamStore((state) => state.config);
  const isConfirmSubmitOpen = useExamStore((state) => state.isConfirmSubmitOpen);
  const setIsConfirmSubmitOpen = useExamStore((state) => state.setIsConfirmSubmitOpen);

  // If no exam is active, show empty state / redirect helper
  if (!isExamActive || activeQuestions.length === 0 || !currentQuestion) {
    return (
      <div className="max-w-md mx-auto my-12 bg-white rounded-xl border border-slate-200 p-8 text-center space-y-4 shadow-xs">
        <h2 className="text-lg font-bold text-slate-900">Belum Ada Sesi Ujian Aktif</h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Silakan konfigurasikan simulasi ujian tertulis atau lisan Anda terlebih dahulu.
        </p>
        <button
          onClick={() => navigate('/test')}
          className="w-full py-2.5 px-4 bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-800 transition-colors cursor-pointer"
        >
          Buka Hub Simulasi Ujian
        </button>
      </div>
    );
  }

  const handleFinishConfirmed = () => {
    setIsConfirmSubmitOpen(false);
    submitExam();
    navigate('/test/hasil');
  };

  return (
    <div className="w-full space-y-6">
      {/* Main Exam Layout: Clean question view relying strictly on bottom navigation for answers */}
      <div className="w-full">
        <SectionSoal
          question={currentQuestion}
          index={currentQuestionIndex}
          total={activeQuestions.length}
        />
      </div>


      {/* Confirmation Modal */}
      <Modal
        isOpen={isConfirmSubmitOpen}
        onClose={() => setIsConfirmSubmitOpen(false)}
        title="Konfirmasi Selesai Ujian"
        footer={
          <div className="flex items-center justify-end gap-3 w-full">
            <button
              onClick={() => setIsConfirmSubmitOpen(false)}
              className="px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
            >
              Lanjutkan Mengerjakan
            </button>
            <button
              onClick={handleFinishConfirmed}
              className="px-4 py-2 text-xs sm:text-sm font-medium bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg cursor-pointer"
            >
              Ya, Selesaikan Ujian
            </button>
          </div>
        }
      >
        <div className="space-y-3 text-slate-700 text-xs sm:text-sm">
          <p className="font-semibold text-slate-900">
            Apakah Anda yakin ingin mengakhiri sesi ujian ini?
          </p>
          <p className="text-slate-600">
            Anda telah menjawab <span className="font-semibold text-slate-900">{answeredCount} dari {activeQuestions.length}</span> soal.
          </p>
          <p className="text-xs text-slate-500">
            Nilai akan dihitung berdasarkan standar kelulusan Ujian Komprehensif S1 Manajemen (Passing Grade: Nilai 70).
          </p>
        </div>
      </Modal>
    </div>
  );
};
