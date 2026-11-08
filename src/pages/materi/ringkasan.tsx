import React from 'react';
import { BidangMateri } from '../../types/materi';
import { Link } from 'react-router-dom';

interface RingkasanProps {
  bidang: BidangMateri;
}

export const RingkasanMateri: React.FC<RingkasanProps> = ({ bidang }) => {
  return (
    <div className="w-full space-y-6">
      {/* 1. Gambaran Umum */}
      <section className="space-y-2">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Gambaran Umum
        </h3>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {bidang.gambaranUmum}
        </p>
      </section>

      {/* 2. Konsep Dasar */}
      <section className="space-y-2 pt-2 border-t border-slate-200/80">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Konsep Dasar
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {bidang.konsepDasar}
        </p>
      </section>

      {/* 3. Tujuan Pembelajaran */}
      {bidang.tujuanPembelajaran && bidang.tujuanPembelajaran.length > 0 && (
        <section className="space-y-2.5 pt-2 border-t border-slate-200/80">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Tujuan Pembelajaran & Standar Kompetensi
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {bidang.tujuanPembelajaran.map((tujuan, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                <span className="leading-relaxed">{tujuan}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 4. Petunjuk Belajar */}
      <section className="space-y-2.5 pt-2 border-t border-slate-200/80">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Petunjuk Penggunaan Materi Ujian
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
          {bidang.petunjukUjian.map((ptk, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
              <span className="leading-relaxed">{ptk}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Daftar Pokok Pembahasan */}
      <section className="space-y-3 pt-2 border-t border-slate-200/80">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Pokok Pembahasan Silabus ({bidang.pokokBahasan.length} Topik)
          </h3>
          <span className="text-xs text-slate-500 font-mono">
            {bidang.halamanPdf}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {bidang.pokokBahasan.map((topic) => (
            <Link
              key={topic.id}
              to={`/materi/${bidang.id}/isi?topik=${topic.id}`}
              className="p-4 rounded-lg bg-white border border-slate-200 hover:border-blue-400 hover:bg-slate-50/60 transition-colors flex items-start gap-3 group shadow-2xs"
            >
              <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                {topic.nomor.split('.').pop()}
              </span>
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {topic.judul}
                  </h4>
                  {topic.halamanPdf && (
                    <span className="text-[10px] text-slate-400 font-mono shrink-0">
                      {topic.halamanPdf}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {topic.ringkasan}
                </p>
                <div className="text-[11px] text-slate-500 pt-0.5 line-clamp-1">
                  Fokus Penguji: {topic.fokusUjian}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
