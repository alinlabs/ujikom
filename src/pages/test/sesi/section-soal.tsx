import React, { useState, useEffect } from 'react';
import { ExamQuestion } from '../../../types/exam';
import { Volume2, Pause, Lock, RotateCcw } from 'lucide-react';
import { speechService } from '../../../services/speechService';
import { useExamStore } from '../../../stores/useExamStore';

import { getQuestionSpeechText, getScenarioSpeechText } from '../../../utils/phonetic';

interface SectionSoalProps {
  question: ExamQuestion;
  index: number;
  total: number;
}

const BIDANG_NAMES: Record<string, string> = {
  operasional: 'Manajemen Operasional',
  keuangan: 'Manajemen Keuangan',
  pemasaran: 'Manajemen Pemasaran',
  sdm: 'Manajemen SDM',
};

export const SectionSoal: React.FC<SectionSoalProps> = ({
  question,
  index,
  total,
}) => {
  const bidangName = BIDANG_NAMES[question.bidangId] || question.bidangId || '';

  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [showPhonetic, setShowPhonetic] = useState(false);
  const isTTSSupported = speechService.isTTSSupported();

  // Answer lock countdown state from global exam store
  const lockingKey = useExamStore((state) => state.lockingKey);
  const lockCountdown = useExamStore((state) => state.lockCountdown);
  const cancelLock = useExamStore((state) => state.cancelLock);
  const isMobileExpanded = useExamStore((state) => state.isMobileExpanded);

  const config = useExamStore((state) => state.config);
  const isOral = config.mode === 'lisan' || config.answerType === 'voice_input';

  const playQuestionAudio = () => {
    setIsPlayingVoice(true);
    const speechQuestionText = getQuestionSpeechText(question);
    const speechScenarioText = getScenarioSpeechText(question);

    if (isOral) {
      speechService.speakOralQuestionWithIntonation({
        questionNumber: index + 1,
        questionText: speechQuestionText,
        scenarioText: speechScenarioText,
        onStart: () => setIsPlayingVoice(true),
        onEnd: () => setIsPlayingVoice(false),
        onError: () => setIsPlayingVoice(false),
      });
    } else {
      const fullSpeechText = `Soal nomor ${index + 1} dari ${total}. ${
        speechScenarioText ? 'Skenario kasus: ' + speechScenarioText + '. Pertanyaan: ' : ''
      } ${speechQuestionText}`;

      speechService.speakText(
        fullSpeechText,
        () => setIsPlayingVoice(false),
        () => setIsPlayingVoice(false)
      );
    }
  };

  // Auto-play audio pada mode lisan dengan jeda 1 detik di awal masuk & saat pindah pertanyaan
  useEffect(() => {
    speechService.stopSpeaking();
    setIsPlayingVoice(false);

    if (isOral) {
      const autoPlayTimer = setTimeout(() => {
        playQuestionAudio();
      }, 1000);

      return () => {
        clearTimeout(autoPlayTimer);
        speechService.stopSpeaking();
      };
    }

    return () => {
      speechService.stopSpeaking();
    };
  }, [question.id, isOral, index]);

  const handleToggleSpeech = () => {
    if (isPlayingVoice) {
      speechService.stopSpeaking();
      setIsPlayingVoice(false);
    } else {
      playQuestionAudio();
    }
  };

  return (
    <div className="relative bg-white rounded-xl border border-slate-200 p-4 sm:p-5 md:p-6 space-y-2.5 sm:space-y-3 shadow-xs w-full transition-all">
      {/* Top Row: Small Bidang Name Text on Left + Gray Icon Only Audio Button on Far Right */}
      <div className="flex items-center justify-between gap-2 min-h-[24px]">
        {bidangName ? (
          <div className="flex items-center text-xs text-slate-700 font-semibold">
            <span>{bidangName}</span>
          </div>
        ) : (
          <div />
        )}

        {/* Audio TTS Speaker Icon Button (Icon Only, Rata Kanan) */}
        {isTTSSupported && (
          <button
            type="button"
            onClick={handleToggleSpeech}
            className={`p-1 rounded-md transition-colors cursor-pointer ${
              isPlayingVoice
                ? 'text-amber-600 bg-amber-50 animate-pulse'
                : 'text-slate-400 hover:text-blue-700 hover:bg-slate-100'
            }`}
            title={isPlayingVoice ? 'Hentikan Suara' : 'Dengarkan Soal (TTS)'}
            aria-label="Dengarkan Soal"
          >
            {isPlayingVoice ? (
              <Pause className="w-4 h-4 text-amber-600" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {/* Case Scenario (if any) */}
      {question.skenarioKasus && (
        <div className="p-3 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="font-semibold text-slate-900 mb-0.5">
            Skenario Kasus:
          </div>
          <p className="italic">{question.skenarioKasus}</p>
        </div>
      )}

      {/* Primary Question Text - Increased Font Size */}
      <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-normal sm:leading-relaxed tracking-tight py-1">
        {question.pertanyaan}
      </div>

      {/* Active Phonetic Speech Transcript (TTS) */}
      {(isPlayingVoice || showPhonetic) && (
        <div className="p-3 rounded-lg bg-amber-50/90 border border-amber-200/80 text-xs text-amber-900 transition-all">
          <div className="flex items-center justify-between gap-1 mb-1 font-semibold text-[11px] uppercase tracking-wider text-amber-800">
            <span className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
              Lafal Audio TTS (Transkrip Fonetis)
            </span>
            <button
              type="button"
              onClick={() => setShowPhonetic(!showPhonetic)}
              className="text-[10px] text-amber-700 hover:text-amber-900 underline cursor-pointer"
            >
              {showPhonetic ? 'Sembunyikan' : 'Kunci Tampilan'}
            </button>
          </div>
          <p className="italic text-amber-950 font-normal leading-relaxed">
            "{question.transkripFonetis || getQuestionSpeechText(question)}"
          </p>
        </div>
      )}

      {/* Direct reference book text (small, light/thin grey, no icon) */}
      {question.referensiBuku && (
        <div className="text-[10px] sm:text-[11px] font-normal text-slate-400">
          Rujukan : {question.referensiBuku}
        </div>
      )}

      {/* Question Card Lock Overlay (15% Dark Tint & 15% Blur, Minimal Text: Large Countdown + Ketuk untuk membatalkan in crisp white) */}
      {lockingKey && (
        <div
          onClick={cancelLock}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30 rounded-xl flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all animate-in fade-in duration-200 select-none"
          title="Ketuk untuk membatalkan"
          role="button"
          tabIndex={0}
        >
          <div className="space-y-1 text-center">
            <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-mono drop-shadow-md">
              {lockCountdown}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide drop-shadow-sm">
              Ketuk untuk membatalkan
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



