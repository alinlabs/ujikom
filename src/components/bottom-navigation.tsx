import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Home, CheckSquare, Bookmark, ChevronLeft, ChevronRight, Check, Play, Mic, MicOff, AlertCircle, Volume2, Pause, FileText, BookOpen } from 'lucide-react';
import { useExamStore } from '../stores/useExamStore';
import { getBidangById } from '../pages/materi/utils';
import { speechService } from '../services/speechService';
import { ExamQuestion, UserExamResponse } from '../types/exam';

interface OralAnswerBottomBarProps {
  question: ExamQuestion;
  response?: UserExamResponse;
  onRecord: (notes: string, score: number) => void;
  onAutoAdvance: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
}

const OralAnswerBottomBar: React.FC<OralAnswerBottomBarProps> = ({
  question,
  response,
  onRecord,
  onAutoAdvance,
  hasPrev,
  hasNext,
  onPrev,
}) => {
  const [oralNotes, setOralNotes] = useState(response?.userNotesOrAudio || '');
  const [oralScore, setOralScore] = useState<number>(response?.selfAssessedScore ?? 80);
  const [isRecording, setIsRecording] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);

  const isSTTSupported = speechService.isSTTSupported();

  useEffect(() => {
    setOralNotes(response?.userNotesOrAudio || '');
    setOralScore(response?.selfAssessedScore ?? 80);
    setIsRecording(false);
    setSpeechError(null);
  }, [question.id]);

  const handleToggleRecord = () => {
    if (isRecording) {
      speechService.stopListening();
      setIsRecording(false);
    } else {
      setSpeechError(null);
      const success = speechService.startListening(
        (transcriptText) => {
          setOralNotes(transcriptText);
          onRecord(transcriptText, oralScore);
        },
        (errMessage) => {
          setSpeechError(errMessage);
          setIsRecording(false);
        },
        () => {
          setIsRecording(false);
        }
      );
      if (success) {
        setIsRecording(true);
      }
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setOralNotes(val);
    onRecord(val, oralScore);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAutoAdvance();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {isSTTSupported && (
          <button
            type="button"
            onClick={handleToggleRecord}
            className={`px-3 sm:px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              isRecording
                ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                : 'bg-blue-700 hover:bg-blue-800 text-white shadow-xs'
            }`}
          >
            {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            <span>{isRecording ? 'Hentikan Rekam' : 'Rekam Suara'}</span>
          </button>
        )}

        <input
          type="text"
          value={oralNotes}
          onChange={handleNotesChange}
          onKeyDown={handleKeyDown}
          placeholder="Ucapkan jawaban lisan Anda atau ketikkan di sini (Enter untuk lanjut)..."
          className="flex-1 px-3 sm:px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-hidden bg-white"
        />


        <button
          type="button"
          onClick={onAutoAdvance}
          className="px-3.5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer shrink-0"
          title={hasNext ? 'Lanjut ke Soal Berikutnya' : 'Selesaikan Ujian'}
        >
          <span>{hasNext ? 'Lanjut' : 'Selesai'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {speechError && (
        <div className="text-xs text-rose-600 flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{speechError}</span>
        </div>
      )}
    </div>
  );
};

export const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Store state for exam session
  const isExamActive = useExamStore((state) => state.isExamActive);
  const activeQuestions = useExamStore((state) => state.activeQuestions);
  const currentQuestionIndex = useExamStore((state) => state.currentQuestionIndex);
  const setCurrentQuestionIndex = useExamStore((state) => state.setCurrentQuestionIndex);
  const responses = useExamStore((state) => state.responses);
  const answerQuestion = useExamStore((state) => state.answerQuestion);
  const recordOralResponse = useExamStore((state) => state.recordOralResponse);
  const config = useExamStore((state) => state.config);
  const setIsConfirmSubmitOpen = useExamStore((state) => state.setIsConfirmSubmitOpen);
  const setIsSettingsModalOpen = useExamStore((state) => state.setIsSettingsModalOpen);
  const startNewExam = useExamStore((state) => state.startNewExam);

  // Manual input & TTS state
  const currentQuestion = activeQuestions[currentQuestionIndex];
  const currentResponse = currentQuestion ? responses[currentQuestion.id] : undefined;
  const [manualText, setManualText] = useState(currentResponse?.userNotesOrAudio || '');
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const isTTSSupported = speechService.isTTSSupported();

  useEffect(() => {
    setManualText(currentResponse?.userNotesOrAudio || '');
    speechService.stopSpeaking();
    setIsPlayingVoice(false);
  }, [currentQuestion?.id]);

  const handleToggleSpeech = () => {
    if (!currentQuestion) return;
    if (isPlayingVoice) {
      speechService.stopSpeaking();
      setIsPlayingVoice(false);
    } else {
      const fullSpeechText = `Soal nomor ${currentQuestionIndex + 1}. ${
        currentQuestion.skenarioKasus ? 'Skenario kasus: ' + currentQuestion.skenarioKasus + '. Pertanyaan: ' : ''
      } ${currentQuestion.pertanyaan}`;

      setIsPlayingVoice(true);
      speechService.speakText(
        fullSpeechText,
        () => setIsPlayingVoice(false),
        () => setIsPlayingVoice(false)
      );
    }
  };

  // Route flags
  const isTestSesiRoute = location.pathname === '/test/sesi';
  const isTestHubRoute = location.pathname === '/test';

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const isModuleRoute =
    pathSegments[0] === 'materi' &&
    ['operasional', 'keuangan', 'pemasaran', 'sdm'].includes(pathSegments[1] || '');
  const activeBidangId = isModuleRoute ? pathSegments[1] : null;
  const activeBidang = activeBidangId ? getBidangById(activeBidangId) : null;

  const viewType = isModuleRoute ? pathSegments[2] || '' : '';
  const isMateriIsiView = isModuleRoute && (viewType === 'isi' || viewType === 'materi');
  const isReferensiView = isModuleRoute && viewType === 'referensi';
  const isRingkasanView = isModuleRoute && !isMateriIsiView && !isReferensiView;

  // --- Context 1: Exam Session Direct Answer Options Navigation (/test/sesi) ---
  if (isTestSesiRoute && isExamActive && activeQuestions.length > 0 && currentQuestion) {
    const isOral = currentQuestion.type === 'tanya_jawab_lisan' || config.answerType === 'voice_input';
    const isManualInput = config.answerType === 'manual_input';
    const hasPrev = currentQuestionIndex > 0;
    const hasNext = currentQuestionIndex < activeQuestions.length - 1;

    const handleAdvance = () => {
      if (hasNext) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsConfirmSubmitOpen(true);
      }
    };

    const handlePrev = () => {
      if (hasPrev) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };

    const handleOptionSelect = (key: 'A' | 'B' | 'C' | 'D') => {
      answerQuestion(currentQuestion.id, key);
      // Automatically advance to next slide / question
      handleAdvance();
    };

    const handleManualSubmit = () => {
      if (manualText.trim()) {
        recordOralResponse(currentQuestion.id, manualText, 80);
      }
      handleAdvance();
    };

    const rawOptions = currentQuestion.options && currentQuestion.options.length > 0
      ? currentQuestion.options.slice(0, 4)
      : [
          { key: 'A' as const, text: 'Pilihan A' },
          { key: 'B' as const, text: 'Pilihan B' },
          { key: 'C' as const, text: 'Pilihan C' },
          { key: 'D' as const, text: 'Pilihan D' },
        ];

    const options = rawOptions.map((opt) => ({
      key: opt.key as 'A' | 'B' | 'C' | 'D',
      text: opt.text,
    }));

    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl transition-all"
        aria-label="Navigasi Pilihan Jawaban Ujian"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {isOral ? (
            /* Voice Input / Oral Panel */
            <OralAnswerBottomBar
              question={currentQuestion}
              response={currentResponse}
              onRecord={(notes, score) => recordOralResponse(currentQuestion.id, notes, score)}
              onAutoAdvance={handleAdvance}
              hasPrev={hasPrev}
              hasNext={hasNext}
              onPrev={handlePrev}
            />
          ) : isManualInput ? (
            /* Manual Text Input Panel */
            <div className="flex items-center gap-2 sm:gap-3">


              <input
                type="text"
                value={manualText}
                onChange={(e) => {
                  setManualText(e.target.value);
                  recordOralResponse(currentQuestion.id, e.target.value, 80);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleManualSubmit();
                  }
                }}
                placeholder="Ketikkan jawaban Anda di sini (Tekan Enter untuk Lanjut)..."
                className="flex-1 px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-hidden bg-white"
              />

              <button
                type="button"
                onClick={handleManualSubmit}
                className="px-3.5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer shrink-0 shadow-xs"
              >
                <span>{hasNext ? 'Lanjut' : 'Selesai'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Multiple Choice Direct Options Panel (Strictly 4 Options: A, B, C, D) */
            <div className="space-y-2.5">
              {/* Header Row: PILIHAN JAWABAN on Left & Lewati Text Link on Far Right */}
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Pilihan Jawaban
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleAdvance}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-0.5 cursor-pointer transition-colors"
                  >
                    <span>{hasNext ? 'Lewati' : 'Selesai'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Options Grid (Vertically centered ABCD cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 max-h-[260px] overflow-y-auto pr-0.5">
                {options.map((opt) => {
                  const isSelected = currentResponse?.userAnswer === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleOptionSelect(opt.key)}
                      className={`p-2.5 sm:p-3 rounded-lg border text-left text-xs transition-all cursor-pointer flex items-center gap-2.5 sm:gap-3 min-h-[46px] ${
                        isSelected
                          ? 'border-blue-700 bg-blue-50/90 text-slate-900 font-semibold shadow-xs ring-1 ring-blue-600'
                          : 'border-slate-200 hover:border-blue-400 hover:bg-slate-50 text-slate-800 bg-white'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center text-xs font-bold shrink-0 transition-colors my-auto ${
                          isSelected
                            ? 'bg-blue-700 text-white'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="flex-1 text-[11px] sm:text-xs leading-snug break-words whitespace-normal font-normal my-auto">
                        {opt.text}
                      </span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-blue-700 shrink-0 ml-1 my-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- Context 2: Module Pages Mobile & Desktop Navigation Bar (/materi/:bidangId...) ---
  if (isModuleRoute && activeBidangId) {
    const topikParam = searchParams.get('topik');
    const activeTopic =
      activeBidang && activeBidang.pokokBahasan.length > 0
        ? activeBidang.pokokBahasan.find((t) => t.id === topikParam) || activeBidang.pokokBahasan[0]
        : undefined;
    const currentIndex =
      activeBidang && activeTopic
        ? activeBidang.pokokBahasan.findIndex((t) => t.id === activeTopic.id)
        : 0;

    const isFirstTopic = currentIndex <= 0;
    const isLastTopic =
      activeBidang ? currentIndex >= activeBidang.pokokBahasan.length - 1 : true;

    const handleSelectTopic = (id: string) => {
      setSearchParams({ topik: id });
      window.scrollTo(0, 0);
      const scrollContainer = document.querySelector('.overflow-y-auto') || document.documentElement || document.body;
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
      }
    };

    const handleNextTopic = () => {
      if (activeBidang && !isLastTopic) {
        const next = activeBidang.pokokBahasan[currentIndex + 1];
        handleSelectTopic(next.id);
      }
    };

    const handlePrevTopic = () => {
      if (activeBidang && !isFirstTopic) {
        const prev = activeBidang.pokokBahasan[currentIndex - 1];
        handleSelectTopic(prev.id);
      }
    };

    return (
      <>
        {/* Desktop Bottom Navigation for Tab Materi ONLY (Sebelumnya / Selanjutnya) */}
        {isMateriIsiView && activeTopic && activeBidang && (
          <div
            className="hidden md:block fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-lg"
            aria-label="Navigasi Topik Modul Desktop"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-4">
              <button
                onClick={handlePrevTopic}
                disabled={isFirstTopic}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold border flex items-center gap-1.5 transition-all cursor-pointer ${
                  isFirstTopic
                    ? 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100 bg-white shadow-xs'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <div className="text-center truncate px-2 min-w-0">
                <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {activeTopic.judul}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-mono">
                  Topik {currentIndex + 1} dari {activeBidang.pokokBahasan.length}
                </div>
              </div>

              <button
                onClick={handleNextTopic}
                disabled={isLastTopic}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold border flex items-center gap-1.5 transition-all cursor-pointer ${
                  isLastTopic
                    ? 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
                    : 'bg-blue-700 hover:bg-blue-800 text-white border-blue-700 shadow-xs'
                }`}
              >
                <span>Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Bottom Navigation Bar (Slide Indicator + 3 Main Tabs) */}
        <div
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-md safe-area-pb"
          aria-label="Navigasi Bawah Modul Pembelajaran Mobile"
        >
          {/* Mobile Progress Bar for Tab Materi (Chevron Left | Plain Number Text | Chevron Right - Minimal, No Card/Badge) */}
          {isMateriIsiView && activeTopic && activeBidang && (
            <div className="px-6 py-2 bg-slate-50/95 border-b border-slate-200 flex items-center justify-between">
              {/* Previous Topic Chevron Icon Button (Clean, no card wrapper) */}
              <button
                type="button"
                onClick={handlePrevTopic}
                disabled={isFirstTopic}
                className={`p-1 transition-colors flex items-center justify-center shrink-0 ${
                  isFirstTopic
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 hover:text-slate-900 cursor-pointer active:scale-90'
                }`}
                title="Topik Sebelumnya"
                aria-label="Topik Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Pure Number Text (Clean, no badge wrapper) */}
              <span className="text-xs sm:text-sm font-semibold font-mono text-slate-800 tracking-wider">
                {currentIndex + 1} / {activeBidang.pokokBahasan.length}
              </span>

              {/* Next Topic Chevron Icon Button (Clean, no card wrapper) */}
              <button
                type="button"
                onClick={handleNextTopic}
                disabled={isLastTopic}
                className={`p-1 transition-colors flex items-center justify-center shrink-0 ${
                  isLastTopic
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 hover:text-slate-900 cursor-pointer active:scale-90'
                }`}
                title="Topik Selanjutnya"
                aria-label="Topik Selanjutnya"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          )}

          {/* 3 Main Mobile Tabs: Ringkasan | Materi | Referensi */}
          <nav aria-label="Tab Pembelajaran Mobile" className="px-3 py-1.5">
            <div className="flex items-center justify-around max-w-md mx-auto">
              <Link
                to={`/materi/${activeBidangId}`}
                className={`flex flex-col items-center justify-center py-1.5 px-4 min-w-[72px] min-h-[48px] text-xs transition-colors ${
                  isRingkasanView
                    ? 'text-blue-700 font-semibold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Ringkasan Modul"
              >
                <FileText className="w-5 h-5 mb-1" />
                <span>Ringkasan</span>
              </Link>

              <Link
                to={`/materi/${activeBidangId}/isi`}
                className={`flex flex-col items-center justify-center py-1.5 px-4 min-w-[72px] min-h-[48px] text-xs transition-colors ${
                  isMateriIsiView
                    ? 'text-blue-700 font-semibold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Materi Pembelajaran"
              >
                <BookOpen className="w-5 h-5 mb-1" />
                <span>Materi</span>
              </Link>

              <Link
                to={`/materi/${activeBidangId}/referensi`}
                className={`flex flex-col items-center justify-center py-1.5 px-4 min-w-[72px] min-h-[48px] text-xs transition-colors ${
                  isReferensiView
                    ? 'text-blue-700 font-semibold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Referensi Buku"
              >
                <Bookmark className="w-5 h-5 mb-1" />
                <span>Referensi</span>
              </Link>
            </div>
          </nav>
        </div>
      </>
    );
  }

  // --- Context 3: Test Hub Page (/test) - Sticky Mulai Ujian Action Bar ---
  if (isTestHubRoute) {
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

    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-lg"
        aria-label="Navigasi Aksi Simulasi Ujian"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-4">
          <div className="hidden sm:block text-xs text-slate-600 font-medium">
            Siap mengikuti simulasi ujian komprehensif?
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => setIsSettingsModalOpen(true)}
              className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              Kustomisasi
            </button>
            <button
              onClick={handleStartQuickWritten}
              className="flex-1 sm:flex-initial px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              <span>Mulai Simulasi Ujian</span>
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Context 4: Mobile-Only Navigation Bar for general pages (Hidden on Desktop: Beranda, Tab Ringkasan, Tab Referensi, Daftar Pustaka) ---
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-3 py-1.5 safe-area-pb shadow-md"
      aria-label="Navigasi Utama Bawah Mobile"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center py-1.5 px-4 min-w-[72px] min-h-[48px] text-xs transition-colors ${
            location.pathname === '/'
              ? 'text-blue-700 font-semibold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="Halaman Beranda"
        >
          <Home className="w-5 h-5 mb-1" />
          <span>Beranda</span>
        </Link>

        <Link
          to="/test"
          className={`flex flex-col items-center justify-center py-1.5 px-4 min-w-[72px] min-h-[48px] text-xs transition-colors ${
            location.pathname.startsWith('/test')
              ? 'text-blue-700 font-semibold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="Halaman Simulasi Ujian"
        >
          <CheckSquare className="w-5 h-5 mb-1" />
          <span>Ujian</span>
        </Link>

        <Link
          to="/materi/referensi"
          className={`flex flex-col items-center justify-center py-1.5 px-4 min-w-[72px] min-h-[48px] text-xs transition-colors ${
            location.pathname === '/materi/referensi'
              ? 'text-blue-700 font-semibold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="Daftar Referensi Buku"
        >
          <Bookmark className="w-5 h-5 mb-1" />
          <span>Referensi</span>
        </Link>
      </div>
    </nav>
  );
};
