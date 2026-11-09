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
      <div className="pb-1 text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug text-center">
          {topic.judul}
        </h1>
      </div>

      {/* Fokus Jawaban */}
      <section className="space-y-1.5">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Fokus Jawaban
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed text-justify">
          {topic.fokusUjian}
        </p>
      </section>

      {/* Uraian Materi Sesuai Silabus Resmi PDF */}
      <section className="space-y-2">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Uraian Materi Sesuai Silabus Resmi PDF
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
          {topic.isiMateri || topic.ringkasan}
        </p>
      </section>

      {/* Pokok-Pokok Pembahasan Kunci (Unboxed, No Card/Outline) */}
      <section className="space-y-2.5">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Pokok-Pokok Pembahasan Kunci
        </h3>
        <div className="space-y-2">
          {topic.poinKunci.map((point, i) => (
            <div
              key={i}
              className="py-1 flex items-start gap-3"
            >
              <span className="w-5 h-5 rounded-full bg-slate-200/80 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Penjelasan Pendukung Kontekstual */}
      {topic.penjelasanPendukung && (
        <section className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Penjelasan Pendukung Kontekstual
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 text-justify">
            {topic.penjelasanPendukung}
          </p>
        </section>
      )}

      {/* Rumus atau Metode Kuantitatif */}
      {topic.rumusAtauMetode && topic.rumusAtauMetode.length > 0 && (
        <section className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Rumus & Formulasi Kuantitatif
          </h3>
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
        <section className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Contoh Kasus & Penerapan Organisasi
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 text-justify">
            {topic.contohPenerapan}
          </p>
        </section>
      )}

      {/* Rujukan Pustaka */}
      {topic.referensi && (
        <section className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Rujukan Pustaka
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 text-justify">
            {topic.referensi}
          </p>
        </section>
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
