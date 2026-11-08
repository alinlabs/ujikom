import React from 'react';
import { UserExamResponse, ExamMode } from '../../../types/exam';
import { sampleExamQuestions } from '../bank-soal';
import { CheckCircle2, XCircle, BookOpen, AlertCircle } from 'lucide-react';

interface HasilReviewProps {
  responses: UserExamResponse[];
  mode: ExamMode;
}

export const HasilReview: React.FC<HasilReviewProps> = ({ responses, mode }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
          Pembahasan Detail Dan Rujukan Pustaka Resmi ({responses.length} Soal)
        </h3>

        <div className="space-y-5 sm:space-y-6">
          {responses.map((resp, idx) => {
            const question = sampleExamQuestions.find((q) => q.id === resp.questionId);
            if (!question) return null;

            const isWritten = mode === 'tertulis';

            return (
              <div
                key={resp.questionId}
                className={`p-4 sm:p-5 rounded-lg border space-y-3.5 sm:space-y-4 transition-colors ${
                  resp.isCorrect
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-rose-200 bg-rose-50/20'
                }`}
              >
                {/* Header Soal & Badge Status */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Soal {idx + 1} · {question.bidangId.toUpperCase()}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {question.pertanyaan}
                    </h4>
                  </div>

                  <div className="shrink-0">
                    {resp.isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded-md">
                        <XCircle className="w-3.5 h-3.5" /> Perlu Review
                      </span>
                    )}
                  </div>
                </div>

                {/* Skenario Kasus jika ada */}
                {question.skenarioKasus && (
                  <div className="p-3 bg-white rounded border border-slate-200 text-xs text-slate-700 italic">
                    Skenario: {question.skenarioKasus}
                  </div>
                )}

                {/* Jawaban User vs Kunci Jawaban */}
                {isWritten ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded bg-white border border-slate-200 space-y-1">
                      <span className="text-slate-500 block text-[11px]">Jawaban Anda:</span>
                      <span className="font-bold text-slate-900">
                        {resp.userAnswer ? `Opsi (${resp.userAnswer})` : 'Tidak Dijawab'}
                      </span>
                    </div>

                    <div className="p-3 rounded bg-white border border-slate-200 space-y-1">
                      <span className="text-slate-500 block text-[11px]">Kunci Jawaban Resmi:</span>
                      <span className="font-bold text-emerald-700">
                        Opsi ({question.kunciJawaban})
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded bg-white border border-slate-200 space-y-1">
                      <span className="text-slate-500 block text-[11px]">Catatan / Transkrip Suara Anda:</span>
                      <p className="text-slate-800 font-medium">
                        {resp.userNotesOrAudio || 'Tidak ada transkrip terekam.'}
                      </p>
                    </div>

                    {question.rubrikPenilaianLisan && (
                      <div className="p-3 rounded bg-amber-50/60 border border-amber-200 space-y-1 text-amber-900">
                        <span className="font-bold block text-[11px] uppercase">Kata Kunci Wajib Dewan Penguji:</span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {question.rubrikPenilaianLisan.kataKunciWajib.map((kw, i) => (
                            <span key={i} className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-mono text-[11px]">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Pembahasan Akademik */}
                <div className="p-3.5 rounded bg-white border border-slate-200 space-y-1 text-xs sm:text-sm text-slate-800">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-blue-700">
                    Pembahasan Konsep:
                  </span>
                  <p className="leading-relaxed text-xs sm:text-sm text-slate-700">
                    {question.pembahasan}
                  </p>
                </div>

                {/* Rujukan Pustaka */}
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1 border-t border-slate-100">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>Rujukan Pustaka: {question.referensiBuku}</span>
                  {question.halamanPdf && <span>({question.halamanPdf})</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
