import React, { useState } from 'react';
import { BidangMateri, PokokBahasanItem } from '../../types/materi';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Modal } from '../../components/modal';

interface RingkasanProps {
  bidang: BidangMateri;
}

export const RingkasanMateri: React.FC<RingkasanProps> = ({ bidang }) => {
  const [selectedTopic, setSelectedTopic] = useState<PokokBahasanItem | null>(null);

  return (
    <div className="w-full space-y-6">
      {/* 1. Gambaran Umum */}
      <section className="space-y-2">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Gambaran Umum
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
          {bidang.gambaranUmum}
        </p>
      </section>

      {/* 2. Konsep Dasar */}
      <section className="space-y-2">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Konsep Dasar
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
          {bidang.konsepDasar}
        </p>
      </section>

      {/* 3. Tujuan Pembelajaran */}
      {bidang.tujuanPembelajaran && bidang.tujuanPembelajaran.length > 0 && (
        <section className="space-y-2.5">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Tujuan Pembelajaran & Standar Kompetensi
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {bidang.tujuanPembelajaran.map((tujuan, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                <span className="leading-relaxed text-justify">{tujuan}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 4. Petunjuk Belajar */}
      <section className="space-y-2.5">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Petunjuk Penggunaan Materi Ujian
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
          {bidang.petunjukUjian.map((ptk, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
              <span className="leading-relaxed text-justify">{ptk}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Daftar Pokok Pembahasan (Clean Unboxed Items, No Card Outline/Background) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Pokok Pembahasan Silabus ({bidang.pokokBahasan.length} Topik)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
          {bidang.pokokBahasan.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => setSelectedTopic(topic)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-100/80 transition-all flex items-center justify-between gap-3 group text-left cursor-pointer w-full"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <span className="w-5 h-5 rounded-md bg-slate-200/80 text-slate-700 text-xs font-mono font-semibold flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  {topic.nomor.split('.').pop()}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                  {topic.judul}
                </h4>
              </div>

              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 stroke-[1.25] transition-all shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ))}
        </div>
      </section>

      {/* Modal Penjelasan & Fokus Jawaban */}
      {selectedTopic && (
        <Modal
          isOpen={!!selectedTopic}
          onClose={() => setSelectedTopic(null)}
          title={selectedTopic.judul}
          maxWidth="lg"
          footer={
            <Link
              to={`/materi/${bidang.id}/isi?topik=${selectedTopic.id}`}
              onClick={() => setSelectedTopic(null)}
              className="w-full py-2.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Buka Detail Selengkapnya</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          }
        >
          <div className="space-y-4">
            {/* Fokus Jawaban */}
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Fokus Jawaban
              </h4>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-800 text-justify">
                {selectedTopic.fokusUjian}
              </p>
            </div>

            {/* Penjelasan Ringkas */}
            <div className="space-y-1.5 pt-1">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Penjelasan & Ringkasan Materi
              </h4>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal text-justify">
                {selectedTopic.ringkasan || selectedTopic.isiMateri}
              </p>
            </div>

            {/* Poin Kunci Jika Ada */}
            {selectedTopic.poinKunci && selectedTopic.poinKunci.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Pokok Pembahasan Kunci
                </h4>
                <div className="space-y-1.5">
                  {selectedTopic.poinKunci.map((point, i) => (
                    <div
                      key={i}
                      className="py-1 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800"
                    >
                      <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] sm:text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed text-justify">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
