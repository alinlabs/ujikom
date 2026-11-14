import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="hidden sm:block bg-white border-t border-slate-200 text-slate-500 text-xs mt-auto w-full shrink-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-20 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Institution Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="w-7 h-7 rounded-md bg-blue-700 flex items-center justify-center text-white shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-tight text-slate-900">
                UJIKOM — STIE Wibawa Karta Raharja Purwakarta
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed max-w-md">
              Platform persiapan dan simulasi komprehensif dua arah (tertulis & lisan) bagi mahasiswa tingkat akhir Program Studi S1 Manajemen STIE Wibawa Karta Raharja (WIKARA) Purwakarta berdasarkan silabus resmi empat pilar keilmuan.
            </p>
            <p className="text-slate-400 text-[11px]">
              Dokumen acuan: Panduan Uji Kompetensi Komprehensif S1 Manajemen STIE Wikara.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Empat Pilar Modul
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/materi/operasional" className="hover:text-blue-700 transition-colors">
                  Manajemen Operasional (15 Topik)
                </Link>
              </li>
              <li>
                <Link to="/materi/keuangan" className="hover:text-blue-700 transition-colors">
                  Manajemen Keuangan (14 Topik)
                </Link>
              </li>
              <li>
                <Link to="/materi/pemasaran" className="hover:text-blue-700 transition-colors">
                  Manajemen Pemasaran (9 Topik)
                </Link>
              </li>
              <li>
                <Link to="/materi/sdm" className="hover:text-blue-700 transition-colors">
                  Manajemen SDM (8 Topik)
                </Link>
              </li>
            </ul>
          </div>

          {/* Guidelines Column */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Petunjuk Belajar
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">
              Kuasai konsep dengan bahasa sendiri, pahami keterkaitan antar-topik, dan latih interpretasi kasus organisasi.
            </p>
            <div className="text-[11px] text-slate-400">
              Passing Grade Kelulusan: <span className="font-medium text-slate-700">Nilai 70 (Grade B)</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} UJIKOM. Hak Cipta Dilindungi.</p>
          <p>Sistem Simulasi Akademik Ujian Komprehensif S1 Manajemen</p>
        </div>
      </div>
    </footer>
  );
};
