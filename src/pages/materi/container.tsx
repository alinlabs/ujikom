import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { allBidangMateri, getBidangById, searchMateri } from './utils';
import { RingkasanMateri } from './ringkasan';
import { MateriDetail } from './detail';
import { ReferensiMateri } from './referensi';
import { Search, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export const MateriContainer: React.FC = () => {
  const { bidangId, viewType } = useParams<{ bidangId?: string; viewType?: string }>();
  const location = useLocation();
  const { isTopicCompleted } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  const activeBidang = bidangId && bidangId !== 'referensi' ? getBidangById(bidangId) : undefined;
  const searchResults = searchQuery.trim() ? searchMateri(searchQuery) : [];

  // If viewing a specific bidang (e.g. /materi/operasional, /materi/operasional/isi, /materi/operasional/referensi)
  if (activeBidang) {
    const isMateriView = viewType === 'isi' || viewType === 'materi' || location.pathname.endsWith('/isi') || location.pathname.endsWith('/materi');
    const isReferensiView = viewType === 'referensi' || location.pathname.endsWith('/referensi');
    const isRingkasanView = !isMateriView && !isReferensiView;

    return (
      <div className="w-full space-y-6">
        {/* Render Active View Directly (Header is rendered adaptively in top Header) */}
        {isRingkasanView && <RingkasanMateri bidang={activeBidang} />}
        {isMateriView && <MateriDetail bidang={activeBidang} />}
        {isReferensiView && <ReferensiMateri filteredBidangId={activeBidang.id} />}
      </div>
    );
  }

  // General Materi Catalog Hub (listing all 4 Bidang with live search)
  return (
    <div className="w-full space-y-8">
      {/* Search Header Banner */}
      <section className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 md:p-8 space-y-4 shadow-xs">
        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Katalog Modul Pembelajaran · S1 Manajemen
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Empat Modul Akademik Komprehensif
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Pusat bahan belajar terstruktur meliputi 46 pokok bahasan resmi, fokus pertanyaan penguji, rumus kuantitatif, dan rujukan referensi buku akademik.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari konsep (misal: EOQ, BEP, Rasio Keuangan, STP, K3, WACC, TQM)..."
            className="w-full pl-10 pr-16 py-2.5 bg-slate-50 hover:bg-white focus:bg-white text-slate-900 placeholder:text-slate-400 rounded-lg border border-slate-200 focus:border-blue-600 text-sm outline-hidden transition-all"
            aria-label="Cari topik materi ujian"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 px-2 py-1 cursor-pointer"
            >
              Hapus
            </button>
          )}
        </div>
      </section>

      {/* Search Results Display (if active query) */}
      {searchQuery.trim() && (
        <section className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-semibold text-slate-900">
              Hasil Pencarian: "{searchQuery}" ({searchResults.length} Topik Ditemukan)
            </h2>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-blue-700 font-medium hover:underline cursor-pointer"
            >
              Tutup
            </button>
          </div>

          {searchResults.length === 0 ? (
            <p className="text-xs text-slate-500 py-4 text-center">
              Tidak ada topik yang cocok dengan kata kunci "{searchQuery}". Coba kata kunci umum seperti "biaya", "produk", atau "persediaan".
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {searchResults.map(({ bidang, topic }) => (
                <Link
                  key={topic.id}
                  to={`/materi/${bidang.id}/isi?topik=${topic.id}`}
                  className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-slate-50/60 transition-all flex flex-col justify-between space-y-2 group"
                >
                  <div>
                    <div className="text-[11px] text-slate-500 mb-1">
                      {bidang.nama} · Subbab {topic.nomor}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {topic.judul}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                      {topic.ringkasan}
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-100">
                    <span className="line-clamp-1">Fokus Jawaban: {topic.fokusUjian}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 4 Core Subject Pillars Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allBidangMateri.map((bidang) => {
          const completedCount = bidang.pokokBahasan.filter((t) =>
            isTopicCompleted(t.id)
          ).length;
          const progressPercent = Math.round(
            (completedCount / bidang.pokokBahasan.length) * 100
          );

          return (
            <Link
              key={bidang.id}
              to={`/materi/${bidang.id}`}
              className="group bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-blue-300 hover:shadow-md transition-all shadow-xs cursor-pointer block"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {bidang.nama}
                  </h2>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 stroke-[1.5]" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {bidang.deskripsi}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Progres Belajar</span>
                  <span>
                    {completedCount}/{bidang.pokokBahasan.length} ({progressPercent}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-700 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
