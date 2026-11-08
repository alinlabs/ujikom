import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BidangMateri, PokokBahasanItem } from '../../types/materi';

interface MateriProps {
  bidang: BidangMateri;
}

interface TopicContentCardProps {
  topic: PokokBahasanItem;
  bidang: BidangMateri;
}

const TopicContentCard: React.FC<TopicContentCardProps> = ({
  topic,
  bidang,
}) => {
  return (
    <div className="space-y-5 sm:space-y-6 py-2 sm:py-3">
      {/* Header Row */}
      <div className="border-b border-slate-200 pb-4">
        <div className="space-y-1 min-w-0">
          <div className="text-xs text-slate-500 font-medium">
            Subbab {topic.nomor} · {bidang.nama} {topic.halamanPdf && `· ${topic.halamanPdf}`}
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            {topic.judul}
          </h1>
        </div>
      </div>

      {/* Fokus Ujian Dewan Penguji */}
      <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-200 text-amber-950 space-y-1">
        <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
          Fokus Pertanyaan Dewan Penguji Sidang:
        </div>
        <p className="text-sm font-medium leading-relaxed">
          {topic.fokusUjian}
        </p>
      </div>

      {/* Uraian Materi Sesuai Dokumen Sumber PDF */}
      <section className="space-y-2">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Uraian Materi Sesuai Silabus Resmi PDF
        </h2>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          {topic.isiMateri || topic.ringkasan}
        </p>
      </section>

      {/* Poin Kunci Pembahasan */}
      <section className="space-y-3 pt-2">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Pokok-Pokok Pembahasan Kunci
        </h2>
        <div className="space-y-2">
          {topic.poinKunci.map((point, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-3"
            >
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Penjelasan Pendukung Kontekstual */}
      {topic.penjelasanPendukung && (
        <section className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
          <div className="font-semibold text-slate-900 text-xs">
            Penjelasan Pendukung Kontekstual:
          </div>
          <p className="leading-relaxed text-slate-600">
            {topic.penjelasanPendukung}
          </p>
        </section>
      )}

      {/* Rumus atau Metode Kuantitatif */}
      {topic.rumusAtauMetode && topic.rumusAtauMetode.length > 0 && (
        <section className="space-y-2 pt-2">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Rumus & Formulasi Kuantitatif
          </h2>
          <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm space-y-1.5">
            {topic.rumusAtauMetode.map((formula, formulaIdx) => (
              <div key={formulaIdx} className="flex items-center gap-2">
                <span className="text-slate-400">›</span>
                <span>{formula}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contoh Penerapan Organisasi */}
      {topic.contohPenerapan && (
        <section className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
          <h2 className="font-semibold text-slate-900 text-xs">
            Contoh Kasus / Penerapan Organisasi:
          </h2>
          <p className="leading-relaxed text-slate-600">
            {topic.contohPenerapan}
          </p>
        </section>
      )}

      {/* Rujukan Pustaka Spesifik */}
      {topic.referensi && (
        <div className="pt-2 text-xs text-slate-500 border-t border-slate-100">
          <span className="font-semibold text-slate-700">Rujukan Pustaka: </span>
          <span>{topic.referensi}</span>
        </div>
      )}
    </div>
  );
};

export const MateriDetail: React.FC<MateriProps> = ({ bidang }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topikParam = searchParams.get('topik');

  const totalTopics = bidang.pokokBahasan.length;

  const initialIndex = Math.max(
    0,
    bidang.pokokBahasan.findIndex((t) => t.id === topikParam)
  );

  const [slideIndex, setSlideIndex] = useState<number>(initialIndex);
  const [dragX, setDragX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  // Sync state if URL search param 'topik' changes externally
  useEffect(() => {
    if (topikParam) {
      const idx = bidang.pokokBahasan.findIndex((t) => t.id === topikParam);
      if (idx !== -1 && idx !== slideIndex) {
        setSlideIndex(idx);
        setDragX(0);
        setIsSwiping(false);
      }
    }
  }, [topikParam, bidang.pokokBahasan]);

  // Scroll to top whenever active slide changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const scrollContainer = document.querySelector('.overflow-y-auto') || document.documentElement || document.body;
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [slideIndex]);

  // Touch gesture tracker refs
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isMoving = useRef<boolean>(false);
  const isDirectionDetermined = useRef<boolean>(false);
  const isHorizontal = useRef<boolean>(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isMoving.current = true;
    isDirectionDetermined.current = false;
    isHorizontal.current = false;
    setDragX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMoving.current) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartX.current;
    const deltaY = currentY - touchStartY.current;

    // Detect gesture angle once finger moves past 8px
    if (!isDirectionDetermined.current) {
      if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
        isDirectionDetermined.current = true;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          isHorizontal.current = true;
          setIsSwiping(true);
        } else {
          isHorizontal.current = false;
          setIsSwiping(false);
        }
      }
    }

    if (isHorizontal.current) {
      // Resistance at first and last slides
      if ((slideIndex === 0 && deltaX > 0) || (slideIndex === totalTopics - 1 && deltaX < 0)) {
        setDragX(deltaX * 0.2);
      } else {
        // Clamp to prevent dragging further than 1 slide
        const maxDrag = window.innerWidth || 360;
        const clamped = Math.max(-maxDrag, Math.min(maxDrag, deltaX));
        setDragX(clamped);
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isMoving.current) return;
    isMoving.current = false;

    if (isHorizontal.current) {
      const threshold = 45; // strictly 45px threshold to trigger 1 slide
      let targetIndex = slideIndex;

      if (dragX < -threshold && slideIndex < totalTopics - 1) {
        // Strictly advance by exactly +1 slide
        targetIndex = slideIndex + 1;
      } else if (dragX > threshold && slideIndex > 0) {
        // Strictly move back by exactly -1 slide
        targetIndex = slideIndex - 1;
      }

      // Synchronously commit target index and zero drag to let smooth CSS transition take over
      setIsSwiping(false);
      setDragX(0);
      setSlideIndex(targetIndex);

      if (targetIndex !== slideIndex) {
        const nextTopic = bidang.pokokBahasan[targetIndex];
        if (nextTopic) {
          setSearchParams({ topik: nextTopic.id }, { replace: true });
        }
      }

      // Reset scroll position to top of new topic
      window.scrollTo(0, 0);
      const scrollContainer = document.querySelector('.overflow-y-auto') || document.documentElement || document.body;
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
      }
    } else {
      setIsSwiping(false);
      setDragX(0);
    }

    isDirectionDetermined.current = false;
    isHorizontal.current = false;
  };

  const activeTopic = bidang.pokokBahasan[slideIndex] || bidang.pokokBahasan[0];

  if (!activeTopic) {
    return <div className="p-8 text-center text-slate-500">Materi belum tersedia.</div>;
  }

  return (
    <div className="w-full">
      {/* Desktop Mode: Calm static reading view */}
      <div className="hidden md:block w-full">
        <TopicContentCard
          topic={activeTopic}
          bidang={bidang}
        />
      </div>

      {/* Mobile Mode: Dynamic per-slide height touch slider */}
      <div className="md:hidden w-full overflow-hidden select-none">
        <div
          className="flex w-full items-start will-change-transform"
          style={{
            transform: `translate3d(calc(-${slideIndex * 100}% + ${dragX}px), 0, 0)`,
            transition: isSwiping ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.9, 0.3, 1)',
            touchAction: 'pan-y',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {bidang.pokokBahasan.map((topic, idx) => {
            const isActive = idx === slideIndex;
            const isAdjacent = isSwiping && Math.abs(idx - slideIndex) <= 1;
            const isVisible = isActive || isAdjacent;

            return (
              <div
                key={topic.id}
                className={`w-full min-w-full shrink-0 px-0.5 ${
                  isVisible ? 'h-auto' : 'h-0 overflow-hidden invisible'
                }`}
              >
                <TopicContentCard
                  topic={topic}
                  bidang={bidang}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
