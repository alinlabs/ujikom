import React from 'react';
import { UserExamResponse, ExamMode } from '../../../types/exam';
import { sampleExamQuestions } from '../bank-soal';
import { CheckCircle2, XCircle, BookOpen, Key, Check } from 'lucide-react';

interface HasilReviewProps {
  responses: UserExamResponse[];
  mode: ExamMode;
}

export const HasilReview: React.FC<HasilReviewProps> = ({ responses, mode }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
          <span>Pembahasan Detail & Kunci Jawaban Lengkap ({responses.length} Soal)</span>
          <span className="text-xs font-normal text-slate-500">
            {mode === 'pilihan_ganda' ? 'Ujian Pilihan Ganda' : mode === 'tertulis' ? 'Ujian Tertulis' : 'Ujian Lisan'}
          </span>
        </h3>

        <div className="space-y-5 sm:space-y-6">
          {responses.map((resp, idx) => {
            const question = sampleExamQuestions.find((q) => q.id === resp.questionId);
            if (!question) return null;

            const isMultipleChoice = mode === 'pilihan_ganda';
            const scoreEarned = resp.scoreEarned ?? (resp.isCorrect ? 10 : 0);
            const maxScore = resp.maxScore ?? 10;
            const matchPercentage = resp.matchPercentage ?? (resp.isCorrect ? 100 : 0);

            const correctOption = question.options.find((o) => o.key === question.kunciJawaban);

            return (
              <div
                key={resp.questionId}
                className={`p-4 sm:p-5 rounded-lg border space-y-3.5 sm:space-y-4 transition-colors ${
                  resp.isCorrect
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-rose-200 bg-rose-50/20'
                }`}
              >
                {/* Header Soal & Badge Status + Skor Proporsional */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <span>Soal {idx + 1} · {question.bidangId}</span>
                      {question.pokokBahasanNomor && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-700 normal-case font-medium">
                            Pokok Bahasan {question.pokokBahasanNomor}
                          </span>
                        </>
                      )}
                      {question.variasiIndex && (
                        <span className="normal-case font-mono text-[10px] bg-white border border-slate-200 px-1.5 py-0.2 rounded text-slate-600">
                          Variasi {question.variasiIndex}/5
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {question.pertanyaan}
                    </h4>
                    {question.transkripFonetis && (
                      <div className="text-[11px] text-amber-800 bg-amber-50/80 border border-amber-200/70 px-2.5 py-1 rounded-md italic font-normal">
                        <span className="font-semibold not-italic text-amber-900">Lafal Fonetis TTS: </span>
                        "{question.transkripFonetis}"
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-1 shrink-0">
                    {resp.isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded-md">
                        <XCircle className="w-3.5 h-3.5" /> Perlu Review
                      </span>
                    )}

                    {/* Proportional Score & Match % Badge */}
                    <div className="text-[11px] font-semibold text-slate-600 font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                      Skor: <span className="font-bold text-blue-700">{scoreEarned}</span> / {maxScore} ({matchPercentage}%)
                    </div>
                  </div>
                </div>

                {/* Skenario Kasus jika ada */}
                {question.skenarioKasus && (
                  <div className="p-3 bg-white rounded border border-slate-200 text-xs text-slate-700 italic">
                    <span className="font-semibold text-slate-900 not-italic">Skenario: </span>
                    {question.skenarioKasus}
                  </div>
                )}

                {/* Jawaban User vs Kunci Jawaban Resmi */}
                {isMultipleChoice ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded bg-white border border-slate-200 space-y-1">
                      <span className="text-slate-500 block text-[11px]">Jawaban Anda:</span>
                      <span className="font-bold text-slate-900">
                        {resp.userAnswer ? `Opsi (${resp.userAnswer})` : 'Tidak Dijawab'}
                      </span>
                    </div>

                    <div className="p-3 rounded bg-white border border-slate-200 space-y-1">
                      <span className="text-slate-500 block text-[11px]">Kunci Jawaban Abjad:</span>
                      <span className="font-bold text-emerald-700">
                        Opsi ({question.kunciJawaban}) {correctOption ? `· ${correctOption.text}` : ''}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded bg-white border border-slate-200 space-y-1">
                      <span className="text-slate-500 block text-[11px]">
                        {mode === 'lisan' ? 'Transkrip / Jawaban Lisan Anda:' : 'Jawaban Tertulis Anda:'}
                      </span>
                      <p className="text-slate-800 font-medium whitespace-pre-wrap">
                        {resp.userNotesOrAudio || resp.userAnswer || 'Tidak ada jawaban terekam.'}
                      </p>
                    </div>

                    {/* Kunci Jawaban Abjad & Jawaban Deskriptif Resmi */}
                    <div className="p-3.5 rounded bg-emerald-50/60 border border-emerald-200 space-y-2 text-emerald-950">
                      <div className="flex items-center gap-2">
                        <Key className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="font-bold text-xs uppercase text-emerald-900 tracking-wider">
                          Kunci Jawaban Resmi (Abjad & Deskriptif):
                        </span>
                      </div>
                      <div className="text-xs font-bold text-emerald-900">
                        Opsi Terpilih: Opsi ({question.kunciJawaban}) {correctOption ? `· ${correctOption.text}` : ''}
                      </div>
                      <div className="text-xs text-emerald-900/90 leading-relaxed font-normal bg-white/70 p-2.5 rounded border border-emerald-200/60">
                        <span className="font-semibold block mb-0.5">Penjelasan Deskriptif Acuan:</span>
                        {question.kunciJawabanDeskriptif}
                      </div>

                      {/* Keywords match breakdown */}
                      <div className="pt-1 space-y-2">
                        <div>
                          <span className="text-[11px] font-semibold text-emerald-900 block mb-1">
                            Kata Kunci Utama & Padanan Bilingual:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {question.kataKunciUtama.map((kw, i) => {
                              const isMatched = resp.matchedKeywords?.includes(kw);
                              return (
                                <span
                                  key={i}
                                  className={`px-2 py-0.5 rounded text-[11px] font-medium flex items-center gap-1 ${
                                    isMatched
                                      ? 'bg-emerald-600 text-white font-bold'
                                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  }`}
                                >
                                  {isMatched && <Check className="w-3 h-3 text-white" />}
                                  {kw}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Synonym & Bilingual Parser Highlights */}
                        {resp.synonymHighlights && resp.synonymHighlights.length > 0 && (
                          <div className="pt-1 border-t border-emerald-200/60">
                            <span className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider block mb-1">
                              Hasil Parsing Padanan Sinonim / Bilingual yang Cocok:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {resp.synonymHighlights.map((syn, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-white text-emerald-900 border border-emerald-300 shadow-2xs flex items-center gap-1"
                                >
                                  <span className="font-semibold text-emerald-700">{syn.keyword}</span>
                                  <span className="text-slate-400">↔</span>
                                  <span className="italic">{syn.matchedAs}</span>
                                  {syn.isBilingual && (
                                    <span className="text-[9px] bg-blue-100 text-blue-800 px-1 rounded font-bold uppercase">
                                      Bilingual
                                    </span>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Structural & Grammar Feedback */}
                        {resp.structuralFeedback && (
                          <div className="p-2 rounded bg-white/80 border border-emerald-200 text-[11px] text-emerald-900 flex items-center gap-2">
                            <span className="font-semibold text-emerald-800 shrink-0">Tatanan Bahasa:</span>
                            <span className="text-slate-700">{resp.structuralFeedback}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Pembahasan Konsep Mendalam */}
                <div className="p-3.5 rounded bg-white border border-slate-200 space-y-1 text-xs sm:text-sm text-slate-800">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-blue-700">
                    Pembahasan Konsep:
                  </span>
                  <p className="leading-relaxed text-xs sm:text-sm text-slate-700">
                    {question.pembahasan}
                  </p>
                </div>

                {/* Rujukan Pustaka Resmi */}
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1 border-t border-slate-100">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>Rujukan Pustaka: {question.referensiBuku}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
