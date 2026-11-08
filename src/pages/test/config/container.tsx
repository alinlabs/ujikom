import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExamStore } from '../../../stores/useExamStore';
import { formatDateIndonesian } from '../../../utils/formatters';
import { ChevronRight, CheckSquare, History, Play, Sliders, ShieldCheck, HelpCircle, FileText, Mic } from 'lucide-react';

export const TestContainer: React.FC = () => {
  const navigate = useNavigate();
  const setIsSettingsModalOpen = useExamStore((state) => state.setIsSettingsModalOpen);
  const startNewExam = useExamStore((state) => state.startNewExam);
  const history = useExamStore((state) => state.history);
  const loadHistory = useExamStore((state) => state.loadHistory);
  const viewResult = useExamStore((state) => state.viewResult);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const handleStartQuickWritten = () => {
    startNewExam({
      mode: 'tertulis',
      selectedBidang: 'semua',
      totalQuestions: 10,
      durationMinutes: 15,
      randomize: true,
      questionDeliveryMode: 'text',
      answerType: 'pilihan_ganda',
    });
    navigate('/test/sesi');
  };

  const handleStartQuickOral = () => {
    startNewExam({
      mode: 'lisan',
      selectedBidang: 'semua',
      totalQuestions: 4,
      durationMinutes: 20,
      randomize: true,
      questionDeliveryMode: 'voice',
      answerType: 'voice_input',
    });
    navigate('/test/sesi');
  };

  // Metrics
  const totalExams = history.length;
  const passedExams = history.filter((h) => h.passed).length;
  const passRate = totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0;
  const highestScore = totalExams > 0 ? Math.max(...history.map((h) => h.score)) : 0;

  return (
    <div className="w-full space-y-8">
      {/* 1. Pengantar Ujian Komprehensif */}
      <section className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 shadow-xs">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-[11px] sm:text-xs font-semibold border border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
              <span>Panduan Resmi Uji Kompetensi Komprehensif (UJIKOM)</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
              Pengantar & Ketentuan Pelaksanaan Ujian
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ujian Komprehensif S1 Manajemen merupakan evaluasi menyeluruh atas penguasaan 4 bidang keilmuan utama: <strong>Manajemen Operasional, Keuangan, Pemasaran, dan SDM</strong>. Ujian ini menguji integrasi pemahaman teori, analisis kasus kuantitatif, dan sintesis keputusan manajerial.
            </p>
          </div>
        </div>

        {/* Core Exam Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-slate-100">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-700" />
              <span>Standar Passing Grade</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Batas kelulusan minimum adalah <strong>Nilai 70 (Grade B)</strong>. Skor di bawah 70 dikategori Belum Lulus (Remedial).
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Mic className="w-4 h-4 text-blue-700" />
              <span>Metode Penyampaian Soal</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mendukung tampilan <strong>Teks Soal</strong> dan <strong>Voice Audio (Text-to-Speech)</strong> untuk mensimulasikan pertanyaan lisan dosen.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-blue-700" />
              <span>Metode Jawaban</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pilihan Ganda kuantitatif, Input Singkat Rumus/Hasil, atau <strong>Perekaman Suara (Speech-to-Text)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Two Main Mode Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Mode 1: Written Exam */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-5 hover:border-slate-300 transition-colors shadow-xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-700 font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
                Mode 1 · Ujian Tertulis
              </span>
              <span className="text-xs text-slate-500 font-medium">10-15 Soal</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Simulasi Ujian Tertulis Komprehensif
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Latihan soal konseptual dan perhitungan kuantitatif (EOQ, Utilisasi Kapasitas, NPV, BEP, Rasio Keuangan, SWOT) dengan timer real-time per sesi.
            </p>
            <div className="text-xs text-slate-500 space-y-1.5 pt-1 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span>Waktu Standar:</span>
                <span className="font-semibold text-slate-800">15 Menit</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tipe Jawaban:</span>
                <span className="font-semibold text-slate-800">Pilihan Ganda & Input Nilai</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleStartQuickWritten}
            className="w-full py-2.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Mulai Ujian Tertulis Sekarang</span>
          </button>
        </div>

        {/* Mode 2: Oral Exam */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-5 hover:border-slate-300 transition-colors shadow-xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-amber-800 font-bold uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">
                Mode 2 · Sidang Lisan Interaktif
              </span>
              <span className="text-xs text-slate-500 font-medium">4 Case Studies</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Simulasi Sidang Lisan Dewan Penguji
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Simulasi pertanyaan lisan acak dosen penguji dilengkapi pendeteksi Voice Speech-to-Text, kata kunci wajib, dan rubrik evaluasi artikulasi.
            </p>
            <div className="text-xs text-slate-500 space-y-1.5 pt-1 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span>Waktu Standar:</span>
                <span className="font-semibold text-slate-800">20 Menit</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tipe Jawaban:</span>
                <span className="font-semibold text-slate-800">Voice Record (STT) & Rubrik</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleStartQuickOral}
            className="w-full py-2.5 px-4 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-900 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Mic className="w-4 h-4 text-slate-700" />
            <span>Mulai Simulasi Sidang Lisan</span>
          </button>
        </div>
      </section>

      {/* 4. Statistics Strip & Recent History */}
      <section className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Ringkasan Riwayat Simulasi Ujian
            </h3>
            <p className="text-xs text-slate-500">
              Progres evaluasi hasil ujian Anda yang tersimpan di sistem
            </p>
          </div>
          <button
            onClick={() => navigate('/test/riwayat')}
            className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Buka Halaman Riwayat Lengkap</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 text-center">
          <div className="p-2.5 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Total Sesi Diikuti</div>
            <div className="text-lg sm:text-xl font-bold text-slate-900">{totalExams} Sesi</div>
          </div>
          <div className="p-2.5 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Skor Tertinggi</div>
            <div className="text-lg sm:text-xl font-bold text-blue-700">{highestScore} / 100</div>
          </div>
          <div className="p-2.5 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Tingkat Kelulusan</div>
            <div className="text-lg sm:text-xl font-bold text-emerald-700">{passRate}%</div>
          </div>
        </div>

        {/* Recent 3 Items */}
        {history.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-400">
            Belum ada riwayat simulasi ujian tersimpan. Pilih salah satu mode di atas untuk memulai.
          </div>
        ) : (
          <div className="divide-y divide-slate-100 pt-1">
            {history.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="py-3 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-semibold text-[11px] ${
                        item.passed ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      {item.passed ? 'LULUS' : 'BELUM LULUS'}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium text-slate-900">
                      Ujian {item.config.mode === 'tertulis' ? 'Tertulis' : 'Lisan'} ({item.config.selectedBidang})
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    {formatDateIndonesian(item.timestamp)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-900 font-mono">
                      {item.score}
                    </div>
                    <div className="text-[11px] text-slate-500">Grade {item.grade}</div>
                  </div>

                  <button
                    onClick={() => {
                      viewResult(item, 'exam');
                      navigate('/test/hasil');
                    }}
                    className="p-1.5 text-slate-400 hover:text-blue-700 transition-colors cursor-pointer"
                    aria-label="Lihat detail hasil ujian"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
