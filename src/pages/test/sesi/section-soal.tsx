import React, { useState, useEffect } from 'react';
import { ExamQuestion } from '../../../types/exam';
import { Volume2, Pause } from 'lucide-react';
import { speechService } from '../../../services/speechService';

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
}) => {
  const isOral = question.type === 'tanya_jawab_lisan';
  const bidangName = BIDANG_NAMES[question.bidangId] || question.bidangId || '';

  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const isTTSSupported = speechService.isTTSSupported();

  useEffect(() => {
    speechService.stopSpeaking();
    setIsPlayingVoice(false);
    return () => {
      speechService.stopSpeaking();
    };
  }, [question.id]);

  const handleToggleSpeech = () => {
    if (isPlayingVoice) {
      speechService.stopSpeaking();
      setIsPlayingVoice(false);
    } else {
      const fullSpeechText = `Soal nomor ${index + 1}. ${
        question.skenarioKasus ? 'Skenario kasus: ' + question.skenarioKasus + '. Pertanyaan: ' : ''
      } ${question.pertanyaan}`;

      setIsPlayingVoice(true);
      speechService.speakText(
        fullSpeechText,
        () => setIsPlayingVoice(false),
        () => setIsPlayingVoice(false)
      );
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 md:p-6 space-y-2.5 sm:space-y-3 shadow-xs max-h-[calc(100vh-270px)] sm:max-h-[calc(100vh-290px)] overflow-y-auto">
      {/* Category / Module Label above question + Icon Only Audio Button on Far Right */}
      <div className="flex items-center justify-between gap-2 min-h-[24px]">
        {bidangName ? (
          <div className="text-[10px] sm:text-[11px] font-normal text-slate-400">
            {bidangName}
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

      {/* Primary Question Text */}
      <div className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 leading-snug">
        {question.pertanyaan}
      </div>

      {/* Oral Exam Rubric Guidelines (if oral mode) */}
      {isOral && question.rubrikPenilaianLisan && (
        <div className="p-3 sm:p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 space-y-1.5 text-xs">
          <div className="font-bold text-amber-900 uppercase tracking-wider">
            Kriteria Ekspektasi Dewan Penguji:
          </div>
          <p className="text-amber-950 font-medium leading-relaxed">
            {question.rubrikPenilaianLisan.kriteriaUtama}
          </p>
          <div className="text-amber-800 pt-0.5">
            <span className="font-semibold">Kata Kunci Wajib: </span>
            {question.rubrikPenilaianLisan.kataKunciWajib.join(', ')}
          </div>
        </div>
      )}

      {/* Direct reference book text (small, light/thin grey, close to question text) */}
      {question.referensiBuku && (
        <div className="text-[10px] sm:text-[11px] font-normal text-slate-400">
          {question.referensiBuku}
        </div>
      )}
    </div>
  );
};
