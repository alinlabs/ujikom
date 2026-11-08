import React, { useState } from 'react';
import { allBidangMateri } from './utils';

interface ReferensiMateriProps {
  filteredBidangId?: string;
}

export const ReferensiMateri: React.FC<ReferensiMateriProps> = ({ filteredBidangId }) => {
  const [filterBidang, setFilterBidang] = useState<string>(filteredBidangId || 'all');

  const filteredBidang =
    filterBidang === 'all'
      ? allBidangMateri
      : allBidangMateri.filter((b) => b.id === filterBidang);

  return (
    <div className="w-full space-y-6">
      {/* Header Info */}
      <section className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 md:p-8 space-y-2 shadow-xs">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Bibliografi Resmi PDF · Program Studi S1 Manajemen
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Daftar Pustaka & Buku Rujukan
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          Sumber pustaka akademik resmi yang tercantum dalam panduan ujian komprehensif Program Studi S1 Manajemen sebagai rujukan utama empat modul keilmuan.
        </p>

        {/* Filter Tabs if no strict single module prop provided */}
        {!filteredBidangId && (
          <div className="pt-3 flex flex-wrap gap-1.5" aria-label="Filter Referensi Berdasarkan Modul">
            <button
              onClick={() => setFilterBidang('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                filterBidang === 'all'
                  ? 'bg-blue-700 text-white border-blue-700'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Semua Modul
            </button>
            {allBidangMateri.map((b) => (
              <button
                key={b.id}
                onClick={() => setFilterBidang(b.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                  filterBidang === b.id
                    ? 'bg-blue-700 text-white border-blue-700'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {b.nama}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Reference Cards by Bidang */}
      <div className="space-y-6">
        {filteredBidang.map((bidang) => (
          <section
            key={bidang.id}
            className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4 shadow-xs"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs text-slate-500 font-medium">{bidang.judulBab}</span>
                <h2 className="text-base font-bold text-slate-900">
                  {bidang.nama}
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                {bidang.referensi.length} Buku Rujukan · {bidang.halamanPdf}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bidang.referensi.map((ref) => (
                <div
                  key={ref.id}
                  className="p-4 rounded-md bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2"
                >
                  <div className="space-y-1">
                    <div className="text-xs text-blue-700 font-semibold">
                      {ref.penulis} {ref.tahun ? `(${ref.tahun})` : ''}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                      {ref.judul}
                    </h3>
                    <p className="text-xs text-slate-600">
                      Penerbit: {ref.penerbit}
                    </p>
                    {ref.catatan && (
                      <p className="text-[11px] text-slate-500 italic pt-1">
                        {ref.catatan}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Catatan Akademik */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 space-y-3">
        <h2 className="text-sm font-bold text-slate-900">
          Catatan Integritas Akademik & Konsultasi Kepustakaan
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Bibliografi pada dokumen panduan komprehensif resmi diverifikasi terhadap katalog kepustakaan akademik. Mahasiswa sangat dianjurkan membaca teks asli di perpustakaan untuk memperluas perspektif analitis pada studi kasus bisnis nyata.
        </p>
      </section>
    </div>
  );
};
