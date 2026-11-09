import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Home, CheckSquare, Bookmark, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Check, Play, Mic, MicOff, AlertCircle, Volume2, Pause, FileText, BookOpen, Lightbulb, List, Lock, RotateCcw, HelpCircle } from 'lucide-react';
import { useExamStore } from '../stores/useExamStore';
import { getBidangById } from '../pages/materi/utils';
import { speechService } from '../services/speechService';
import { getQuestionSpeechText, getScenarioSpeechText } from '../utils/phonetic';
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
  const [countdown, setCountdown] = useState<number>(0);
  const [speechError, setSpeechError] = useState<string | null>(null);

  useEffect(() => {
    setOralNotes(response?.userNotesOrAudio || '');
    setOralScore(response?.selfAssessedScore ?? 80);
    setIsRecording(false);
    setCountdown(0);
    setSpeechError(null);
    return () => {
      speechService.stopListening();
    };
  }, [question.id]);

  // 5-second countdown timer effect to repeat or auto-advance
  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => {
            onAutoAdvance();
          }, 50);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, onAutoAdvance]);

  const handleStartRecording = async () => {
    setSpeechError(null);
    setCountdown(0);

    const success = await speechService.startListening(
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
        setCountdown(5);
      }
    );

    if (success) {
      setIsRecording(true);
    } else {
      setIsRecording(false);
    }
  };

  const handleStopRecording = () => {
    speechService.stopListening();
    setIsRecording(false);

    if (!oralNotes) {
      const recordedText = `Jawaban lisan terekam (${new Date().toLocaleTimeString('id-ID')})`;
      setOralNotes(recordedText);
      onRecord(recordedText, oralScore);
    }

    // Start 5-second countdown to repeat or auto-advance
    setCountdown(5);
  };

  const handleMainButtonClick = () => {
    if (isRecording) {
      // Tapped while recording -> stop recording & start 5s countdown
      handleStopRecording();
    } else if (countdown > 0) {
      // Tapped during 5s countdown -> repeat recording!
      setCountdown(0);
      handleStartRecording();
    } else {
      // Tapped while idle -> start recording
      handleStartRecording();
    }
  };

  return (
    <div className="space-y-1.5 sm:space-y-2">
      {/* Blue Main Card Button for Oral Recording */}
      <button
        type="button"
        onClick={handleMainButtonClick}
        className={`w-full py-3.5 px-4 rounded-xl text-white font-bold flex flex-col items-center justify-center text-center shadow-md transition-all cursor-pointer active:scale-[0.99] min-h-[58px] ${
          isRecording
            ? 'bg-rose-600 hover:bg-rose-700 animate-pulse'
            : countdown > 0
            ? 'bg-amber-600 hover:bg-amber-700 ring-2 ring-amber-400/50'
            : 'bg-blue-700 hover:bg-blue-800 active:bg-blue-900'
        }`}
      >
        {/* Line 1: Main Title */}
        <span className="text-sm sm:text-base font-extrabold block leading-tight">
          {isRecording
            ? 'Sedang Merekam Suara...'
            : countdown > 0
            ? `Jawaban Terekam (${countdown}s)`
            : 'Jawab Pertanyaan'}
        </span>

        {/* Line 2: Small thin subtitle */}
        <span className="text-[11px] sm:text-xs font-normal opacity-90 block mt-0.5">
          {isRecording
            ? 'Ketuk Lagi Untuk Menghentikan'
            : countdown > 0
            ? 'Ketuk Untuk Mengulang Rekaman'
            : 'Ketuk Untuk Merekam'}
        </span>
      </button>

      {/* Thin Skip Link below main button */}
      <div className="text-center pt-0.5">
        <button
          type="button"
          onClick={() => {
            speechService.stopListening();
            setIsRecording(false);
            setCountdown(0);
            onAutoAdvance();
          }}
          className="text-xs font-normal text-slate-500 hover:text-slate-700 active:text-slate-900 cursor-pointer transition-colors inline-flex items-center gap-0.5 py-1"
        >
          <span>Lewati Pertanyaan</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      {speechError && (
        <div className="text-xs text-rose-600 flex items-center justify-center gap-1 pt-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
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
  const isConfirmSubmitOpen = useExamStore((state) => state.isConfirmSubmitOpen);
  const setIsSettingsModalOpen = useExamStore((state) => state.setIsSettingsModalOpen);
  const startNewExam = useExamStore((state) => state.startNewExam);

  // Lock-in countdown state from global exam store
  const lockingKey = useExamStore((state) => state.lockingKey);
  const lockCountdown = useExamStore((state) => state.lockCountdown);
  const setLockingKey = useExamStore((state) => state.setLockingKey);
  const setLockCountdown = useExamStore((state) => state.setLockCountdown);
  const cancelLock = useExamStore((state) => state.cancelLock);

  // Mobile collapsible options drawer state from global exam store
  const isMobileExpanded = useExamStore((state) => state.isMobileExpanded);
  const setIsMobileExpanded = useExamStore((state) => state.setIsMobileExpanded);

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
    setIsMobileExpanded(false);
    cancelLock();
  }, [currentQuestionIndex, currentQuestion?.id]);

  // Lock-in countdown timer effect
  useEffect(() => {
    if (!lockingKey) return;

    if (lockCountdown > 0) {
      const timer = setTimeout(() => {
        setLockCountdown(lockCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Countdown complete: answer saved and advance to next slide
      if (currentQuestion) {
        answerQuestion(currentQuestion.id, lockingKey);
      }
      cancelLock();
      if (currentQuestionIndex < activeQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsConfirmSubmitOpen(true);
      }
    }
  }, [lockingKey, lockCountdown, currentQuestion?.id, currentQuestionIndex, activeQuestions.length]);

  const handleToggleSpeech = () => {
    if (!currentQuestion) return;
    if (isPlayingVoice) {
      speechService.stopSpeaking();
      setIsPlayingVoice(false);
    } else {
      const speechQuestionText = getQuestionSpeechText(currentQuestion);
      const speechScenarioText = getScenarioSpeechText(currentQuestion);

      const fullSpeechText = `Soal nomor ${currentQuestionIndex + 1}. ${
        speechScenarioText ? 'Skenario kasus: ' + speechScenarioText + '. Pertanyaan: ' : ''
      } ${speechQuestionText}`;

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
    const isOral = config.mode === 'lisan' || config.answerType === 'voice_input';
    const isManualInput = config.mode === 'tertulis' || config.answerType === 'manual_input';
    const hasPrev = currentQuestionIndex > 0;
    const hasNext = currentQuestionIndex < activeQuestions.length - 1;

    const handleAdvance = () => {
      cancelLock();
      if (hasNext) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsConfirmSubmitOpen(true);
      }
    };

    const handlePrev = () => {
      cancelLock();
      if (hasPrev) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };

    const handleOptionSelect = (key: 'A' | 'B' | 'C' | 'D') => {
      // If clicking the SAME option currently locking, cancel lock!
      if (lockingKey === key) {
        cancelLock();
        return;
      }

      // Record answer immediately and start 3-second countdown lock
      answerQuestion(currentQuestion.id, key);
      setLockingKey(key);
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
        className={`w-full shrink-0 z-30 bg-white border-t border-slate-200 shadow-xl transition-all ${
          isConfirmSubmitOpen ? 'hidden sm:block' : ''
        }`}
        aria-label="Navigasi Pilihan Jawaban Ujian"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
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
            /* Manual Written Text Area Panel (Minimalist 1 line initial, grows up to 10 lines, scrolls for >10 lines) */
            <div className="space-y-2.5 sm:space-y-3">
              <div className="w-full">
                <textarea
                  value={manualText}
                  onChange={(e) => {
                    setManualText(e.target.value);
                    recordOralResponse(currentQuestion.id, e.target.value, 80);
                  }}
                  rows={Math.min(10, Math.max(1, (manualText.match(/\n/g) || []).length + 1))}
                  placeholder="Ketikkan jawaban Anda di sini..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-hidden bg-white resize-none overflow-y-auto leading-relaxed shadow-xs transition-all duration-150"
                />
              </div>

              <button
                type="button"
                onClick={handleManualSubmit}
                className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-[0.99]"
              >
                <span>Kirim Jawaban</span>
              </button>
            </div>
          ) : (
            /* Multiple Choice Direct Options Panel (Strictly 4 Options: A, B, C, D) */
            <div>
              {/* Mobile Collapsed State: Single compact blue card button "Jawab Pertanyaan" + Plain Gray "Lewati Soal Ini" Link (Mobile Only < sm) */}
              {!isMobileExpanded && (
                <div className="sm:hidden space-y-2">
                  <button
                    type="button"
                    onClick={() => setIsMobileExpanded(true)}
                    className="w-full py-3 px-4 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center text-center shadow-md cursor-pointer transition-all active:scale-[0.99] min-h-[48px]"
                  >
                    <span className="truncate">
                      {currentResponse?.userAnswer
                        ? `Jawab Pertanyaan (Opsi ${currentResponse.userAnswer})`
                        : 'Jawab Pertanyaan'}
                    </span>
                  </button>

                  <div className="text-center pt-0.5">
                    <button
                      type="button"
                      onClick={handleAdvance}
                      className="text-xs font-medium text-slate-500 hover:text-slate-700 active:text-slate-900 cursor-pointer transition-colors inline-flex items-center gap-0.5 py-1"
                    >
                      <span>Lewati Soal Ini</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* Options Drawer Content: Always open on Desktop (sm:block), Collapsible on Mobile */}
              <div className={`relative space-y-2.5 ${isMobileExpanded ? 'block' : 'hidden sm:block'}`}>
                {/* Header Row: Title "PILIHAN JAWABAN" with dropdown Chevron icon on left & "Lewati" Link on Far Right */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* Dropdown chevron icon to collapse back to "Jawab Pertanyaan" on Mobile */}
                    <button
                      type="button"
                      onClick={() => setIsMobileExpanded(false)}
                      className="sm:hidden p-1 -ml-1 text-slate-600 hover:text-blue-700 rounded-md transition-colors cursor-pointer flex items-center justify-center"
                      title="Sembunyikan Pilihan Jawaban"
                      aria-label="Sembunyikan Pilihan Jawaban"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-700" />
                    </button>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Pilihan Jawaban
                    </div>
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

                {/* Options Grid (2x2 layout on desktop: A|B, C|D - scrollbar at far right edge) */}
                <div className="max-h-[260px] sm:max-h-[300px] overflow-y-auto -mx-2 px-2 sm:mx-0 sm:px-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 sm:gap-3">
                    {options.map((opt) => {
                      const isSelected = (lockingKey || currentResponse?.userAnswer) === opt.key;
                      const isLockingThis = lockingKey === opt.key;
                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => handleOptionSelect(opt.key)}
                          className={`p-3 sm:p-3.5 sm:px-4 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 min-h-[52px] sm:min-h-[56px] ${
                            isSelected || isLockingThis
                              ? 'bg-blue-700 border-blue-700 text-white shadow-md'
                              : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          <span
                            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-xs sm:text-sm shrink-0 transition-colors my-auto ${
                              isSelected || isLockingThis
                                ? 'bg-white text-blue-700 font-extrabold shadow-xs'
                                : 'bg-slate-100 text-slate-700 border border-slate-200 font-bold'
                            }`}
                          >
                            {opt.key}
                          </span>
                          <span
                            className={`flex-1 text-xs sm:text-sm leading-snug break-words whitespace-normal my-auto ${
                              isSelected || isLockingThis
                                ? 'text-white font-semibold'
                                : 'text-slate-800 font-medium'
                            }`}
                          >
                            {opt.text}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
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
          {/* Mobile Progress Bar for Tab Detail (Chevron Left | Plain Number Text | Chevron Right - Pure White, No Border Divider) */}
          {isMateriIsiView && activeTopic && activeBidang && (
            <div className="px-6 pt-2 pb-1 bg-white flex items-center justify-between">
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

          {/* 3 Main Mobile Tabs: Ringkasan | Detail | Referensi */}
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
                <Lightbulb className="w-5 h-5 mb-1" />
                <span>Ringkasan</span>
              </Link>

              <Link
                to={`/materi/${activeBidangId}/isi`}
                className={`flex flex-col items-center justify-center py-1.5 px-4 min-w-[72px] min-h-[48px] text-xs transition-colors ${
                  isMateriIsiView
                    ? 'text-blue-700 font-semibold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Detail Modul"
              >
                <List className="w-5 h-5 mb-1" />
                <span>Detail</span>
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
    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-lg safe-area-pb"
        aria-label="Navigasi Aksi Simulasi Ujian"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4">
          <div className="hidden sm:block text-xs sm:text-sm text-slate-600 font-medium">
            Siap mengikuti simulasi ujian komprehensif?
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => setIsSettingsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl sm:rounded-lg bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 sm:gap-2.5 transition-all cursor-pointer shadow-md min-h-[48px] sm:min-h-0"
            >
              <span>Mulai Simulasi Ujian</span>
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
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
