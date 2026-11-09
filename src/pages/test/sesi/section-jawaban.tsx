import React, { useState, useEffect } from 'react';
import { ExamQuestion, UserExamResponse } from '../../../types/exam';
import { Check, Mic, MicOff, AlertCircle } from 'lucide-react';
import { speechService } from '../../../services/speechService';
import { useExamStore } from '../../../stores/useExamStore';

interface SectionJawabanProps {
  question: ExamQuestion;
  response?: UserExamResponse;
  onAnswerWritten: (answer: 'A' | 'B' | 'C' | 'D', transcript?: string) => void;
  onAnswerOral: (notes: string, score: number, transcript?: string) => void;
}

export const SectionJawaban: React.FC<SectionJawabanProps> = ({
  question,
  response,
  onAnswerWritten,
  onAnswerOral,
}) => {
  const config = useExamStore((state) => state.config);
  const isOral = config.mode === 'lisan' || config.answerType === 'voice_input';

  // Oral / Voice input state
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
    return () => {
      speechService.stopListening();
    };
  }, [question.id]);

  const handleToggleRecord = async () => {
    if (isRecording) {
      speechService.stopListening();
      setIsRecording(false);
    } else {
      setSpeechError(null);
      const success = await speechService.startListening(
        (transcriptText) => {
          setOralNotes(transcriptText);
          onAnswerOral(transcriptText, oralScore, transcriptText);
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
      } else {
        setIsRecording(false);
      }
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setOralNotes(val);
    onAnswerOral(val, oralScore, val);
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setOralScore(val);
    onAnswerOral(oralNotes, val, oralNotes);
  };

  if (isOral) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Perekaman Suara (STT) & Argumentasi Lisan
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Ucapkan jawaban lisan Anda atau ketik ringkasan argumentasi untuk dievaluasi
            </p>
          </div>

          {/* Microphone Recording Button */}
          {isSTTSupported && (
            <button
              onClick={handleToggleRecord}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-xs ${
                isRecording
                  ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                  : 'bg-blue-700 hover:bg-blue-800 text-white'
              }`}
            >
              {isRecording ? (
                <>
                  <MicOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Hentikan Rekam Voice</span>
                </>
              ) : (
                <>
                  <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Mulai Rekam Suara (STT)</span>
                </>
              )}
            </button>
          )}
        </div>

        {speechError && (
          <div className="p-3 rounded-md bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{speechError}</span>
          </div>
        )}

        {isRecording && (
          <div className="p-3 rounded-md bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-center gap-2 animate-pulse">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            <span className="font-semibold">Sistem sedang mendengarkan dan mentranskripsi suara Anda...</span>
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Transkrip / Ringkasan Jawaban Lisan:
          </label>
          <textarea
            value={oralNotes}
            onChange={handleNotesChange}
            placeholder="Tekan 'Mulai Rekam Suara' untuk mengucapkannya, atau ketikkan poin-poin argumentasi konsep..."
            rows={4}
            className="w-full text-xs sm:text-sm p-3 sm:p-3.5 rounded-lg border border-slate-300 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-hidden transition-all bg-white"
          />
        </div>

        {/* Rubric Evaluasi Mandiri */}
        <div className="p-3.5 sm:p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">
              Evaluasi Mandiri Penguasaan & Kelancaran:
            </span>
            <span className="text-sm font-bold text-blue-700 font-mono">
              {oralScore} / 100
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={oralScore}
            onChange={handleScoreChange}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
          />
          <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400">
            <span>Kurang (&lt;60)</span>
            <span>Cukup (60-69)</span>
            <span>Baik (70-84)</span>
            <span>Sangat Memuaskan (85+)</span>
          </div>
        </div>
      </div>
    );
  }

  // Written exam options (strictly 4 choices: A, B, C, D)
  const options = question.options ? question.options.slice(0, 4) : [];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-3.5 sm:space-y-4 shadow-xs">
      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
        Pilihan Jawaban Tertulis:
      </div>

      <div className="space-y-2 sm:space-y-2.5">
        {options.map((opt) => {
          const isSelected = response?.userAnswer === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => onAnswerWritten(opt.key)}
              className={`w-full p-3 sm:p-3.5 rounded-lg text-left border transition-all cursor-pointer flex items-center justify-between gap-3 min-h-[46px] sm:min-h-[50px] ${
                isSelected
                  ? 'border-blue-700 bg-blue-50/80 text-slate-900 font-medium shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center text-xs font-bold transition-colors shrink-0 ${
                    isSelected
                      ? 'bg-blue-700 text-white'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {opt.key}
                </span>
                <span className="text-xs sm:text-sm leading-snug">{opt.text}</span>
              </div>

              {isSelected && (
                <Check className="w-4 h-4 text-blue-700 shrink-0 ml-2" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

