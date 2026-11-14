import React, { useEffect, useRef, useState } from 'react';
import { X, Volume2, Play, Square, UserRound, RefreshCw } from 'lucide-react';
import {
  DEFAULT_MATERI_SPEECH_SETTINGS,
  MateriSpeechSettings,
  VoiceGender,
  speechService,
} from '../services/speechService';

interface MateriSpeechModalProps {
  isOpen: boolean;
  topicTitle: string;
  initialSettings: MateriSpeechSettings;
  isAutoVoiceEnabled: boolean;
  onClose: () => void;
  onStart: (settings: MateriSpeechSettings) => void;
  onDisableAutoVoice?: () => void;
}

const PITCH_PRESETS = [
  { label: 'Rendah', value: 0.88 },
  { label: 'Normal', value: 1.0 },
  { label: 'Tinggi', value: 1.12 },
];

export const MateriSpeechModal: React.FC<MateriSpeechModalProps> = ({
  isOpen,
  topicTitle,
  initialSettings,
  isAutoVoiceEnabled,
  onClose,
  onStart,
  onDisableAutoVoice,
}) => {
  const [draft, setDraft] = useState<MateriSpeechSettings>(initialSettings);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [, setVoicesVersion] = useState(0);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setDraft(initialSettings);
    setIsPreviewing(false);

    const handleVoicesChanged = () => {
      setVoicesVersion((v) => v + 1);
    };

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.addEventListener?.('voiceschanged', handleVoicesChanged);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        speechService.stopSpeaking();
        setIsPreviewing(false);
        onCloseRef.current();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.removeEventListener?.('voiceschanged', handleVoicesChanged);
      }
    };
  }, [isOpen, initialSettings]);

  if (!isOpen) return null;

  const voiceInfo = speechService.getVoiceForGender(draft.gender);

  const handleClose = () => {
    if (isPreviewing) {
      speechService.stopSpeaking();
      setIsPreviewing(false);
    }
    onClose();
  };

  const handleTogglePreview = () => {
    if (isPreviewing) {
      speechService.stopSpeaking();
      setIsPreviewing(false);
      return;
    }

    speechService.previewMateriVoice(draft, {
      onStart: () => setIsPreviewing(true),
      onEnd: () => setIsPreviewing(false),
      onError: () => setIsPreviewing(false),
    });
  };

  const handleStartPlayback = () => {
    if (isPreviewing) {
      speechService.stopSpeaking();
      setIsPreviewing(false);
    }
    onStart(draft);
  };

  const handleResetDefaults = () => {
    if (isPreviewing) {
      speechService.stopSpeaking();
      setIsPreviewing(false);
    }
    setDraft(DEFAULT_MATERI_SPEECH_SETTINGS);
  };

  const speedLabel =
    draft.rate <= 0.85
      ? 'Santai'
      : draft.rate <= 1.1
      ? 'Normal'
      : draft.rate <= 1.35
      ? 'Cepat'
      : 'Sangat Cepat';

  const voiceDescription = voiceInfo.voice
    ? voiceInfo.isExactGenderMatch
      ? `Suara terdeteksi: ${voiceInfo.voice.name}`
      : draft.gender === 'male'
      ? `Menggunakan ${voiceInfo.voice.name} (nada disesuaikan ke suara laki-laki)`
      : `Menggunakan ${voiceInfo.voice.name}`
    : 'Menggunakan suara bawaan perangkat kamu';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="materi-speech-modal-title"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-150"
      onClick={handleClose}
    >
      <div
        className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 p-5 sm:p-6 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
              <Volume2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3
                id="materi-speech-modal-title"
                className="font-bold text-slate-900 text-base leading-tight"
              >
                Pengaturan Audio Materi
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 truncate" title={topicTitle}>
                {topicTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={handleResetDefaults}
              className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer"
              aria-label="Reset pengaturan suara"
              title="Reset pengaturan"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Batal dan tutup pengaturan suara"
              title="Batal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Controls */}
        <div className="space-y-5 py-4">
          {/* 1. Jenis Suara (Perempuan / Laki-laki) */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-800 block">
              Pilihan Suara
            </label>

            <div className="grid grid-cols-2 gap-2.5">
              {(
                [
                  {
                    id: 'female' as VoiceGender,
                    title: 'Perempuan',
                    subtitle: 'Jelas & ramah',
                  },
                  {
                    id: 'male' as VoiceGender,
                    title: 'Laki-laki',
                    subtitle: 'Tenang & tegas',
                  },
                ] as const
              ).map((opt) => {
                const isSelected = draft.gender === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDraft((prev) => ({ ...prev, gender: opt.id }))}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/70 text-blue-950 ring-1 ring-blue-600'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <UserRound className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs sm:text-sm font-semibold block leading-tight">
                        {opt.title}
                      </span>
                      <span
                        className={`text-[11px] block mt-0.5 ${
                          isSelected ? 'text-blue-700' : 'text-slate-500'
                        }`}
                      >
                        {opt.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-slate-500 leading-snug">
              {voiceDescription}
            </p>
          </div>

          {/* 2. Kecepatan Suara (Tempo Baca - Seekbar) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="speech-rate-slider" className="text-xs font-semibold text-slate-800">
                Kecepatan Suara
              </label>
              <span className="text-xs font-semibold text-blue-700 tabular-nums">
                {draft.rate.toFixed(2).replace(/\.00$/, '.0').replace(/(\.\d)0$/, '$1')}x · {speedLabel}
              </span>
            </div>

            <div className="pt-0.5">
              <input
                id="speech-rate-slider"
                type="range"
                min={0.7}
                max={1.6}
                step={0.05}
                value={draft.rate}
                onChange={(e) =>
                  setDraft((prev) => ({ ...prev, rate: parseFloat(e.target.value) }))
                }
                className="w-full h-2 accent-blue-700 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0.7x Santai</span>
                <span>1.0x Normal</span>
                <span>1.6x Cepat</span>
              </div>
            </div>
          </div>

          {/* 3. Nada Suara & Volume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-800 block">
                Nada Suara
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {PITCH_PRESETS.map((preset) => {
                  const isSelected = Math.abs(draft.pitch - preset.value) < 0.03;
                  return (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setDraft((prev) => ({ ...prev, pitch: preset.value }))}
                      className={`py-1.5 px-2 rounded-lg border text-xs transition-colors cursor-pointer ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="speech-volume-slider" className="text-xs font-semibold text-slate-800">
                  Volume
                </label>
                <span className="text-xs font-semibold text-slate-700 tabular-nums">
                  {Math.round(draft.volume * 100)}%
                </span>
              </div>
              <input
                id="speech-volume-slider"
                type="range"
                min={0.2}
                max={1.0}
                step={0.05}
                value={draft.volume}
                onChange={(e) =>
                  setDraft((prev) => ({ ...prev, volume: parseFloat(e.target.value) }))
                }
                className="w-full accent-blue-700 cursor-pointer mt-1"
              />
            </div>
          </div>

          {/* 4. Putar Otomatis Saat Pindah Slide */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="min-w-0">
              <span className="text-xs font-semibold text-slate-900 block">
                Putar otomatis di slide berikutnya
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5 leading-snug">
                Suara langsung berlanjut saat kamu pindah ke slide lain
              </span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={draft.autoPlayNext}
              onClick={() =>
                setDraft((prev) => ({ ...prev, autoPlayNext: !prev.autoPlayNext }))
              }
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                draft.autoPlayNext ? 'bg-blue-700' : 'bg-slate-300'
              }`}
              aria-label="Aktifkan putar otomatis saat pindah slide"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs transition duration-200 ease-in-out ${
                  draft.autoPlayNext ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-end justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <button
              type="button"
              onClick={handleTogglePreview}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                isPreviewing
                  ? 'border-amber-300 bg-amber-50 text-amber-700'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              {isPreviewing ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>Hentikan Tes</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Tes Suara</span>
                </>
              )}
            </button>

            {isAutoVoiceEnabled && onDisableAutoVoice && (
              <button
                type="button"
                onClick={() => {
                  if (isPreviewing) {
                    speechService.stopSpeaking();
                    setIsPreviewing(false);
                  }
                  onDisableAutoVoice();
                }}
                className="px-2.5 py-2 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
              >
                Matikan Otomatis
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={handleStartPlayback}
            className="ml-auto shrink-0 inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Mulai</span>
          </button>
        </div>
      </div>
    </div>
  );
};
