import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useExamSession } from '../../../hooks/useExamSession';
import { useExamStore } from '../../../stores/useExamStore';
import { SectionSoal } from './section-soal';
import { Modal } from '../../../components/modal';

export const SessionMetode: React.FC = () => {
  const navigate = useNavigate();
  const {
    isExamActive,
    currentQuestionIndex,
    currentQuestion,
    activeQuestions,
    answeredCount,
    submitExam,
  } = useExamSession();

  const isConfirmSubmitOpen = useExamStore((state) => state.isConfirmSubmitOpen);
  const setIsConfirmSubmitOpen = useExamStore((state) => state.setIsConfirmSubmitOpen);

  // If no exam is active, show empty state / redirect helper
  if (!isExamActive || activeQuestions.length === 0 || !currentQuestion) {
    return (
      <div className="max-w-md mx-auto my-12 bg-white rounded-xl border border-slate-200 p-8 text-center space-y-4 shadow-xs">
        <h2 className="text-lg font-bold text-slate-900">Belum Ada Sesi Ujian Aktif</h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Silakan konfigurasikan simulasi ujian tertulis atau lisan kamu terlebih dahulu.
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

  const isAllAnswered = answeredCount === activeQuestions.length;
  const unansweredCount = activeQuestions.length - answeredCount;

  const isMobileExpanded = useExamStore((state) => state.isMobileExpanded);

  return (
    <div className="w-full flex-1 flex flex-col justify-center my-auto transition-all">
      {/* Mobile Full Screen Confirmation View (No Question Card, No Bottom Nav on Mobile, Content Centered Vertically) */}
      {isConfirmSubmitOpen ? (
        <div className="sm:hidden w-full flex-1 flex flex-col justify-between py-2 text-center min-h-[calc(100vh-130px)] sm:min-h-0">
          {/* Centered content block with equal top and bottom spacing */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-4 py-4 w-full">
            <div className="space-y-2 text-center max-w-sm mx-auto">
              <span className="inline-block text-[10px] font-bold tracking-wider text-rose-600 uppercase bg-rose-50 px-2.5 py-1 rounded-md">
                Konfirmasi Pengumpulan
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug text-center">
                Apakah kamu yakin ingin mengakhiri dan mengumpulkan sesi ujian ini?
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed text-center">
                Setiap jawaban yang tersimpan akan langsung dievaluasi dan dihitung hasilnya secara otomatis.
              </p>
            </div>

            {/* Answered Status Alert Card - Centered text and content */}
            <div
              className={`w-full p-4 rounded-xl border flex flex-col items-center text-center gap-2 shadow-xs ${
                isAllAnswered
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}
            >
              {isAllAnswered ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
              ) : (
                <AlertCircle className="w-6 h-6 text-amber-700 shrink-0" />
              )}
              <div className="space-y-1 text-center">
                <div className="font-bold text-xs sm:text-sm">
                  Progres: {answeredCount} dari {activeQuestions.length} Soal Terisi
                </div>
                <div className="text-[11px] opacity-90 leading-tight">
                  {isAllAnswered
                    ? 'Semua pertanyaan telah dijawab dengan lengkap.'
                    : `Terdapat ${unansweredCount} soal yang belum terisi. Soal kosong tidak akan mendapat poin.`}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center leading-normal border-t border-slate-100 pt-3">
              *Standar kelulusan Ujian Komprehensif S1 Manajemen mengacu pada minimum Nilai 70 (Grade B+).
            </p>
          </div>

          {/* Action Buttons for Mobile */}
          <div className="space-y-2 pt-2 w-full">
            <button
              type="button"
              onClick={handleFinishConfirmed}
              className="w-full py-3.5 px-4 text-sm font-bold bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white rounded-xl shadow-md transition-colors cursor-pointer text-center"
            >
              Ya, Akhiri Ujian
            </button>
            <button
              type="button"
              onClick={() => setIsConfirmSubmitOpen(false)}
              className="w-full py-3 px-4 text-xs font-semibold border border-slate-200 hover:bg-slate-50 active:bg-slate-100 text-slate-700 rounded-xl transition-colors cursor-pointer text-center"
            >
              Lanjutkan Mengerjakan
            </button>
          </div>
        </div>
      ) : (
        /* Regular Question Card view */
        <div className="w-full my-auto">
          <SectionSoal
            question={currentQuestion}
            index={currentQuestionIndex}
            total={activeQuestions.length}
          />
        </div>
      )}

      {/* Desktop-Only Confirmation Modal (Mounted and visible only on desktop sm+ screens) */}
      {typeof window !== 'undefined' && window.innerWidth >= 640 && (
        <Modal
          isOpen={isConfirmSubmitOpen}
          onClose={() => setIsConfirmSubmitOpen(false)}
          title="Konfirmasi Selesai Ujian"
          footer={
            <div className="flex items-center justify-end gap-3 w-full">
              <button
                type="button"
                onClick={() => setIsConfirmSubmitOpen(false)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg transition-colors cursor-pointer text-center"
              >
                Lanjutkan Mengerjakan
              </button>
              <button
                type="button"
                onClick={handleFinishConfirmed}
                className="px-4 py-2 text-xs sm:text-sm font-bold bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white rounded-lg transition-colors cursor-pointer shadow-xs text-center"
              >
                Ya, Akhiri Ujian
              </button>
            </div>
          }
        >
          <div className="space-y-4 text-slate-700 text-xs sm:text-sm">
            <div className="space-y-1">
              <p className="font-bold text-slate-900 text-sm sm:text-base">
                Apakah kamu yakin ingin mengakhiri dan mengumpulkan sesi ujian ini?
              </p>
              <p className="text-slate-600">
                Setiap jawaban yang tersimpan akan dievaluasi dan dihitung hasilnya secara otomatis.
              </p>
            </div>

            {/* Answered Status Alert Box */}
            <div
              className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                isAllAnswered
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}
            >
              {isAllAnswered ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
              )}
              <div>
                <div className="font-bold text-xs sm:text-sm">
                  Progres Jawaban: {answeredCount} dari {activeQuestions.length} Soal Terisi
                </div>
                <div className="text-xs opacity-90 mt-0.5">
                  {isAllAnswered
                    ? 'Semua pertanyaan telah dijawab dengan lengkap.'
                    : `Terdapat ${unansweredCount} soal yang belum terisi. Soal yang dikosongkan tidak akan mendapat poin.`}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-normal border-t border-slate-100 pt-3">
              *Nilai evaluasi kelulusan Ujian Komprehensif S1 Manajemen mengacu pada standar passing grade minimum Nilai 70 (Grade B+).
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

