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
    <div className="w-full space-y-5">
      {/* Filter Tabs if no strict single module prop provided */}
      {!filteredBidangId && (
        <div className="flex flex-wrap gap-1.5" aria-label="Filter Referensi Berdasarkan Modul">
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

      {/* Direct List of Individual Reference Cards */}
      <div className="space-y-6">
        {filteredBidang.map((bidang) => (
          <div key={bidang.id} className="space-y-3">
            {/* Show Bidang Subheading only when viewing all modules in global page */}
            {!filteredBidangId && filterBidang === 'all' && (
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider pt-2">
                {bidang.nama}
              </h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {bidang.referensi.map((ref) => (
                <div
                  key={ref.id}
                  className="py-1.5 px-1 space-y-1"
                >
                  {/* 1. Judul Buku/Jurnal */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {ref.judul}
                  </h3>

                  {/* 2. Ringkasan / Catatan */}
                  {ref.catatan && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal text-justify">
                      {ref.catatan}
                    </p>
                  )}

                  {/* 3. Detail Informasi (Penulis, Penerbit, Tahun) dalam Format Tabel Presisi */}
                  <table className="text-xs sm:text-sm text-slate-700 w-full table-auto border-collapse mt-0.5">
                    <tbody>
                      <tr>
                        <td className="pr-1.5 py-0.5 whitespace-nowrap align-top font-normal text-slate-700">Penulis</td>
                        <td className="px-1 py-0.5 align-top font-normal text-slate-700">:</td>
                        <td className="pl-1 py-0.5 align-top font-normal text-slate-700 w-full">{ref.penulis}</td>
                      </tr>
                      <tr>
                        <td className="pr-1.5 py-0.5 whitespace-nowrap align-top font-normal text-slate-700">Penerbit</td>
                        <td className="px-1 py-0.5 align-top font-normal text-slate-700">:</td>
                        <td className="pl-1 py-0.5 align-top font-normal text-slate-700 w-full">{ref.penerbit}</td>
                      </tr>
                      {ref.tahun && (
                        <tr>
                          <td className="pr-1.5 py-0.5 whitespace-nowrap align-top font-normal text-slate-700">Tahun</td>
                          <td className="px-1 py-0.5 align-top font-normal text-slate-700">:</td>
                          <td className="pl-1 py-0.5 align-top font-normal text-slate-700 w-full">{ref.tahun}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
