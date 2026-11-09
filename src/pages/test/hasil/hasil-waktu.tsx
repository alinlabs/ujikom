import React from 'react';
import { ExamResult } from '../../../types/exam';
import { formatDurationSeconds } from '../../../utils/formatters';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';
import { Clock, TrendingUp } from 'lucide-react';

interface HasilWaktuProps {
  result: ExamResult;
}

export const HasilWaktu: React.FC<HasilWaktuProps> = ({ result }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const avgTimePerQuestion =
    result.totalQuestions > 0
      ? Math.round(result.totalTimeSeconds / result.totalQuestions)
      : 0;

  // Chart data mapping per response
  const chartData = result.responses.map((resp, idx) => ({
    name: `S${idx + 1}`,
    fullName: `Soal Nomor ${idx + 1}`,
    durasi: resp.timeSpentSeconds,
    status: resp.isCorrect ? 'Benar' : 'Salah / Review',
    isCorrect: resp.isCorrect,
  }));

  return (
    <div className="space-y-6">
      {/* Time overview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1 shadow-xs">
          <span className="text-xs text-slate-500 block">Total Durasi Pengerjaan</span>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">
            {formatDurationSeconds(result.totalTimeSeconds)}
          </div>
          <span className="text-[10px] sm:text-[11px] text-slate-400 block">Alokasi: {result.config.durationMinutes} Menit</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1 shadow-xs">
          <span className="text-xs text-slate-500 block">Rata-rata Waktu Per Soal</span>
          <div className="text-xl sm:text-2xl font-extrabold text-blue-700 font-mono">
            {avgTimePerQuestion} Detik
          </div>
          <span className="text-[10px] sm:text-[11px] text-slate-400 block">Kecepatan Menjawab</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1 shadow-xs">
          <span className="text-xs text-slate-500 block">Status Efisiensi Waktu</span>
          <div className="text-base sm:text-lg font-bold text-emerald-700 pt-0.5 sm:pt-1">
            {avgTimePerQuestion <= 90 ? 'Sangat Efisien (<90s)' : 'Perlu Kelancaran'}
          </div>
          <span className="text-[10px] sm:text-[11px] text-slate-400 block">Standar Komprehensif</span>
        </div>
      </div>

      {/* Line Chart Durasi Per Soal */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-blue-700" />
              <span>Grafik Durasi Menjawab Per Pertanyaan</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Distribusi waktu (detik) yang dialokasikan pada setiap nomor soal
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <span className="w-3 h-0.5 bg-blue-700 inline-block" /> Waktu Soal
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-0.5 border-t border-dashed border-rose-500 inline-block" /> Rata-rata ({avgTimePerQuestion}s)
            </span>
          </div>
        </div>

        <div className="w-full h-64 sm:h-72 min-w-0 min-h-[256px] relative pt-2">
          {isMounted && chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={240}>
              <LineChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: '#64748B' }}
                  stroke="#CBD5E1"
                />
                <YAxis
                  unit="s"
                  tick={{ fontSize: 11, fill: '#64748B' }}
                  stroke="#CBD5E1"
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-slate-900 text-white p-2.5 rounded-lg text-xs shadow-lg space-y-1">
                          <div className="font-bold text-slate-200">{data.fullName}</div>
                          <div className="text-blue-300 font-mono">
                            Durasi: {data.durasi} detik
                          </div>
                          <div className={data.isCorrect ? 'text-emerald-400' : 'text-rose-400'}>
                            Status: {data.status}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <ReferenceLine
                  y={avgTimePerQuestion}
                  stroke="#F43F5E"
                  strokeDasharray="4 4"
                  label={{
                    value: `Rata-rata: ${avgTimePerQuestion}s`,
                    position: 'insideTopRight',
                    fill: '#F43F5E',
                    fontSize: 10,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="durasi"
                  stroke="#1D4ED8"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#1D4ED8' }}
                  activeDot={{ r: 6, fill: '#2563EB' }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full min-h-[240px] flex items-center justify-center text-xs text-slate-400">
              Memuat grafik durasi pengerjaan...
            </div>
          )}
        </div>
      </div>

      {/* Detail Per Responses List */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-slate-500" />
          <span>Rincian Durasi Menjawab Per Soal</span>
        </h3>

        <div className="divide-y divide-slate-100">
          {result.responses.map((resp, idx) => (
            <div key={resp.questionId} className="py-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 font-bold text-slate-700 flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <span className="font-semibold text-slate-900 block">Soal Nomor {idx + 1}</span>
                  <span className={`text-[11px] ${resp.isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {resp.isCorrect ? 'Jawaban Benar' : 'Jawaban Salah / Belum Sempurna'}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-mono font-bold text-slate-900 text-sm block">
                  {resp.timeSpentSeconds} Detik
                </span>
                <span className="text-[11px] text-slate-400">Durasi Tercatat</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
