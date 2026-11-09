import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExamStore } from '../../../stores/useExamStore';
import { formatDateIndonesian, formatDurationSeconds } from '../../../utils/formatters';
import { ChevronRight, Trash2, Award, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const RiwayatPage: React.FC = () => {
  const navigate = useNavigate();
  const history = useExamStore((state) => state.history);
  const loadHistory = useExamStore((state) => state.loadHistory);
  const viewResult = useExamStore((state) => state.viewResult);
  const deleteHistoryItem = useExamStore((state) => state.deleteHistoryItem);
  const setIsSettingsModalOpen = useExamStore((state) => state.setIsSettingsModalOpen);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const totalExams = history.length;
  const passedExams = history.filter((h) => h.passed).length;
  const passRate = totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0;
  const highestScore = totalExams > 0 ? Math.max(...history.map((h) => h.score)) : 0;
  const averageScore =
    totalExams > 0 ? Math.round(history.reduce((acc, h) => acc + h.score, 0) / totalExams) : 0;

  return (
    <div className="w-full space-y-6">
      {/* Overview Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-1 shadow-xs">
          <div className="text-xs font-medium text-slate-500">Total Sesi Diikuti</div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900">{totalExams}</div>
          <div className="text-[10px] sm:text-[11px] text-slate-400">Semua Modul Keilmuan</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-1 shadow-xs">
          <div className="text-xs font-medium text-slate-500">Tingkat Kelulusan</div>
          <div className="text-xl sm:text-2xl font-bold text-emerald-700">{passRate}%</div>
          <div className="text-[10px] sm:text-[11px] text-slate-400">{passedExams} dari {totalExams} Lulus (B+)</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-1 shadow-xs">
          <div className="text-xs font-medium text-slate-500">Skor Tertinggi</div>
          <div className="text-xl sm:text-2xl font-bold text-blue-700">{highestScore} / 100</div>
          <div className="text-[10px] sm:text-[11px] text-slate-400">Pencapaian Terbaik</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-1 shadow-xs">
          <div className="text-xs font-medium text-slate-500">Rata-rata Skor</div>
          <div className="text-xl sm:text-2xl font-bold text-slate-800">{averageScore} / 100</div>
          <div className="text-[10px] sm:text-[11px] text-slate-400">Evaluasi Komprehensif</div>
        </div>
      </div>

      {/* History List Table / Cards */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-sm font-bold text-slate-900">
            Daftar Sesi Ujian Tersimpan
          </h2>
          <span className="text-xs text-slate-500">
            {totalExams} Rekaman
          </span>
        </div>

        {totalExams === 0 ? (
          <div className="py-12 text-center space-y-3">
            <Award className="w-10 h-10 text-slate-300 mx-auto" />
            <div className="text-sm font-semibold text-slate-700">Belum Ada Riwayat Ujian</div>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Anda belum memiliki catatan sesi ujian komprehensif. Mulai simulasi tertulis atau lisan pertama Anda untuk melacak progres belajar.
            </p>
            <button
              onClick={() => setIsSettingsModalOpen(true)}
              className="mt-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-medium rounded-md transition-colors cursor-pointer"
            >
              Mulai Simulasi Pertama
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {history.map((item) => (
              <div
                key={item.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 p-3 rounded-lg transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 font-bold text-xs ${
                        item.passed ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      {item.passed ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5" />
                      )}
                      <span>{item.passed ? 'LULUS (GRADE ' + item.grade + ')' : 'BELUM LULUS (GRADE ' + item.grade + ')'}</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-900">
                      Ujian {item.config.mode === 'tertulis' ? 'Tertulis' : 'Sidang Lisan'}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-600 capitalize">
                      Modul: {item.config.selectedBidang}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Durasi: {formatDurationSeconds(item.totalTimeSeconds)}
                    </span>
                    <span>•</span>
                    <span>{item.responses.length} Soal</span>
                    <span>•</span>
                    <span>{formatDateIndonesian(item.timestamp)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 border-slate-100 pt-2 sm:pt-0">
                  <div className="text-left sm:text-right">
                    <div className="text-lg font-extrabold text-slate-900 font-mono">
                      {item.score} <span className="text-xs font-normal text-slate-500">/ 100</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {item.config.mode === 'lisan' ? 'Evaluasi Rubrik' : 'Jawaban Benar'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        viewResult(item, 'history');
                        navigate('/test/hasil');
                      }}
                      className="px-3 py-1.5 text-xs font-medium rounded-md border border-slate-200 hover:bg-slate-100 text-blue-700 flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                    >
                      <span>Lihat Detail</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        if (window.confirm('Apakah Anda yakin ingin menghapus catatan sesi ujian ini?')) {
                          deleteHistoryItem(item.id);
                        }
                      }}
                      className="p-1.5 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 transition-colors cursor-pointer shrink-0"
                      title="Hapus Sesi Ini"
                      aria-label="Hapus Sesi Ini"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
