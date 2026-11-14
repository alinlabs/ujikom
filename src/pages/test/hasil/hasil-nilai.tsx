import React from 'react';
import { ExamResult } from '../../../types/exam';
import { PASSING_SCORE_THRESHOLD } from '../utils';
import { getResultFeedbackTemplate } from './hasil-review-template';
import { Link } from 'react-router-dom';

interface HasilNilaiProps {
  result: ExamResult;
}

const BIDANG_NAMES: Record<string, string> = {
  operasional: 'Manajemen Operasional',
  keuangan: 'Manajemen Keuangan',
  pemasaran: 'Manajemen Pemasaran',
  sdm: 'Manajemen SDM',
};

export const HasilNilai: React.FC<HasilNilaiProps> = ({ result }) => {
  const feedback = getResultFeedbackTemplate(result.score, result.passed);
  const isPassed = result.score >= PASSING_SCORE_THRESHOLD;

  return (
    <div className="space-y-6">
      {/* Primary Score Summary Card: Clean White Canvas */}
      <section className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 border-b border-slate-100 pb-5 sm:pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
              <span
                className={`font-semibold ${
                  isPassed ? 'text-emerald-700' : 'text-rose-700'
                }`}
              >
                {isPassed ? 'Lulus Komprehensif' : 'Belum Memenuhi Standar Kelulusan'}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500">Passing Grade: {PASSING_SCORE_THRESHOLD}</span>
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
              {feedback.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              {feedback.summary}
            </p>
          </div>

          {/* Big Score Card */}
          <div className="p-3.5 sm:p-4 rounded-lg border border-slate-200 bg-slate-50 text-center w-full sm:w-auto sm:min-w-[130px] shrink-0">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
              Skor Akhir
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono my-0.5">
              {result.score}
            </div>
            <div className="text-xs font-semibold text-slate-700">
              Grade {result.grade}
            </div>
          </div>
        </div>

        {/* Small stats row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center text-xs">
          <div className="p-2.5 sm:p-3 rounded-md bg-slate-50 border border-slate-100">
            <span className="text-slate-500 block text-[10px] sm:text-[11px]">Jawaban Benar</span>
            <span className="text-sm sm:text-base font-bold text-emerald-700 font-mono">
              {result.correctAnswers} Soal
            </span>
          </div>
          <div className="p-2.5 sm:p-3 rounded-md bg-slate-50 border border-slate-100">
            <span className="text-slate-500 block text-[10px] sm:text-[11px]">Jawaban Salah</span>
            <span className="text-sm sm:text-base font-bold text-rose-700 font-mono">
              {result.wrongAnswers} Soal
            </span>
          </div>
          <div className="p-2.5 sm:p-3 rounded-md bg-slate-50 border border-slate-100">
            <span className="text-slate-500 block text-[10px] sm:text-[11px]">Total Soal</span>
            <span className="text-sm sm:text-base font-bold text-slate-900 font-mono">
              {result.totalQuestions} Soal
            </span>
          </div>
        </div>
      </section>

      {/* Breakdown per Empat Pilar Bidang */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-900">
            Penguasaan Berdasarkan Empat Pilar Modul
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Evaluasi per mata kuliah untuk mengidentifikasi topik yang membutuhkan pendalaman
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(result.breakdownPerBidang).map(([key, data]) => {
            const name = BIDANG_NAMES[key] || key;

            return (
              <div
                key={key}
                className="p-4 rounded-md border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">
                    {name}
                  </span>
                  <span className="text-xs font-mono text-slate-600">
                    {data.correct} / {data.total} Benar
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Tingkat Penguasaan:</span>
                    <span className="font-semibold text-slate-900 font-mono">{data.score}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        data.score >= 70 ? 'bg-blue-700' : 'bg-rose-600'
                      }`}
                      style={{ width: `${data.score}%` }}
                    />
                  </div>
                </div>

                <div className="pt-1 border-t border-slate-100">
                  <Link
                    to={`/materi/${key}`}
                    className="text-xs text-blue-700 hover:text-blue-800 font-medium"
                  >
                    Buka materi {name} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recommendations Checklist */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 space-y-3">
        <h3 className="text-sm font-bold text-slate-900">
          Rekomendasi Tindak Lanjut Akademik:
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
          {feedback.recommendations.map((rec, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
              <span className="leading-relaxed">{rec}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
