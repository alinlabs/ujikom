import React from 'react';
import { Link } from 'react-router-dom';
import { allBidangMateri, getTotalPokokBahasanCount } from '../materi/utils';
import { ArrowUpRight } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export const HomeContainer: React.FC = () => {
  const { isTopicCompleted } = useApp();

  const totalTopics = getTotalPokokBahasanCount();

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      {/* Hero Section: Clean, Minimalist Banner (Hidden on Mobile) */}
      <section className="hidden sm:block bg-white border border-slate-200 rounded-xl p-4 sm:p-6 md:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
              S1 Manajemen
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.12]">
              <div>Panduan Lengkap</div>
              <div>Simulasi Ujian Komprehensif</div>
            </h1>

            <div className="text-xs sm:text-sm text-slate-600 leading-snug pt-1">
              <div>Platform terpadu pendalaman 46 pokok bahasan resmi, fokus materi dewan penguji,</div>
              <div>serta simulasi komprehensif ujian tertulis dan sidang lisan.</div>
            </div>
          </div>

          <div className="shrink-0 flex items-center pt-1 md:pt-0">
            <Link
              to="/test"
              className="w-full md:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center cursor-pointer shadow-xs whitespace-nowrap"
            >
              <span>Mulai Ujian</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Quiet Academic Metrics */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs text-center flex flex-col items-center justify-center">
          <div className="text-xl sm:text-2xl font-bold text-slate-900">4 Pilar</div>
          <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Keilmuan Manajemen</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs text-center flex flex-col items-center justify-center">
          <div className="text-xl sm:text-2xl font-bold text-slate-900">{totalTopics} Subtopik</div>
          <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Silabus Resmi PDF</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs text-center flex flex-col items-center justify-center">
          <div className="text-xl sm:text-2xl font-bold text-slate-900">2 Metode</div>
          <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Ujian Tertulis & Lisan</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs text-center flex flex-col items-center justify-center">
          <div className="text-xl sm:text-2xl font-bold text-slate-900">Nilai 70</div>
          <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Passing Grade Kelulusan</div>
        </div>
      </section>

      {/* Empat Modul Utama (Section E: Keuangan, Operasional, SDM, Pemasaran) */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            <span className="block sm:inline">Empat Modul Utama </span>
            <span className="block sm:inline">Ujian Komprehensif</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {allBidangMateri.map((bidang) => {
            const completedCount = bidang.pokokBahasan.filter((t) =>
              isTopicCompleted(t.id)
            ).length;
            const progress = Math.round(
              (completedCount / bidang.pokokBahasan.length) * 100
            );

            return (
              <Link
                key={bidang.id}
                to={`/materi/${bidang.id}`}
                className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-6 flex flex-col justify-between space-y-4 hover:border-blue-300 hover:shadow-md transition-all shadow-xs cursor-pointer block"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {bidang.nama}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 stroke-[1.5]" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {bidang.deskripsi}
                  </p>
                </div>

                {/* Clean progress indicator */}
                <div className="pt-1 space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>Progres Belajar</span>
                    <span>{completedCount}/{bidang.pokokBahasan.length} ({progress}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-700 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Petunjuk Resmi Belajar & Strategi Menghadapi Ujian */}
      <section className="space-y-4">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 text-center tracking-tight leading-snug">
          <span className="block sm:inline">Petunjuk Resmi Belajar & </span>
          <span className="block sm:inline">Standar Penilaian Ujian</span>
        </h2>

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">
                Cara Efektif Mempelajari Materi:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Pahami hubungan antartopik dalam setiap modul keilmuan sebelum berpindah modul.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Latih kemampuan menjelaskan definisi, metode, dan manfaat konsep secara lisan mandiri.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Untuk materi hitungan (EOQ, Utilisasi Kapasitas, NPV, BEP), kuasai alur rumus dan interpretasi keputusannya.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">
                Kriteria Pengujian Dewan Sidang:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Dewan penguji menilai pemahaman mendalam, bukan sekadar hafalan kalimat teori.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Siapkan contoh implementasi nyata di industri atau perusahaan untuk tiap konsep pokok.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Gunakan daftar pustaka resmi untuk mendalami konsep yang dirasa masih perlu penguatan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
