import { useState, useEffect, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getBidangById } from '../pages/materi/utils';
import {
  speechService,
  MateriSpeechSettings,
  DEFAULT_MATERI_SPEECH_SETTINGS,
} from '../services/speechService';
import { buildMateriSlideSpeechSegments } from '../utils/phonetic';
import { PokokBahasanItem } from '../types/materi';
import { useAppStore } from '../stores/useAppStore';

const SPEECH_SETTINGS_STORAGE_KEY = 'ujikom_materi_speech_settings';

function loadSavedSpeechSettings(): MateriSpeechSettings {
  try {
    const raw = localStorage.getItem(SPEECH_SETTINGS_STORAGE_KEY);
    if (!raw) return DEFAULT_MATERI_SPEECH_SETTINGS;
    const parsed = JSON.parse(raw);
    return {
      gender: parsed?.gender === 'male' ? 'male' : 'female',
      rate:
        typeof parsed?.rate === 'number' &&
        Number.isFinite(parsed.rate) &&
        parsed.rate >= 0.7 &&
        parsed.rate <= 1.6
          ? parsed.rate
          : DEFAULT_MATERI_SPEECH_SETTINGS.rate,
      pitch:
        typeof parsed?.pitch === 'number' &&
        Number.isFinite(parsed.pitch) &&
        parsed.pitch >= 0.8 &&
        parsed.pitch <= 1.25
          ? parsed.pitch
          : DEFAULT_MATERI_SPEECH_SETTINGS.pitch,
      volume:
        typeof parsed?.volume === 'number' &&
        Number.isFinite(parsed.volume) &&
        parsed.volume >= 0.2 &&
        parsed.volume <= 1.0
          ? parsed.volume
          : DEFAULT_MATERI_SPEECH_SETTINGS.volume,
      autoPlayNext:
        typeof parsed?.autoPlayNext === 'boolean'
          ? parsed.autoPlayNext
          : DEFAULT_MATERI_SPEECH_SETTINGS.autoPlayNext,
    };
  } catch {
    return DEFAULT_MATERI_SPEECH_SETTINGS;
  }
}

export function useMateriSpeech() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [isPlayingMateriAudio, setIsPlayingMateriAudio] = useState(false);
  const [isMateriVoiceEnabled, setIsMateriVoiceEnabled] = useState(false);
  const isSpeechModalOpen = useAppStore((state) => state.isMateriSpeechModalOpen);
  const setIsSpeechModalOpen = useAppStore((state) => state.setIsMateriSpeechModalOpen);
  const [speechSettings, setSpeechSettings] = useState<MateriSpeechSettings>(loadSavedSpeechSettings);

  const isPlayingMateriRef = useRef(false);
  const isMateriVoiceEnabledRef = useRef(false);
  const speechSettingsRef = useRef<MateriSpeechSettings>(speechSettings);
  const prevBidangIdRef = useRef<string | null>(null);
  const autoPlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const isModuleRoute =
    pathSegments[0] === 'materi' &&
    ['operasional', 'keuangan', 'pemasaran', 'sdm'].includes(pathSegments[1] || '');
  const activeBidangId = isModuleRoute ? pathSegments[1] : null;
  const activeBidang = activeBidangId ? getBidangById(activeBidangId) : null;
  const viewType = isModuleRoute ? pathSegments[2] || '' : '';
  const isMateriView = viewType === 'isi' || viewType === 'materi';

  const topikParam = searchParams.get('topik');
  const activeTopic =
    isModuleRoute && isMateriView && activeBidang && activeBidang.pokokBahasan.length > 0
      ? activeBidang.pokokBahasan.find((t) => t.id === topikParam) || activeBidang.pokokBahasan[0]
      : null;

  const materiAudioKey =
    isModuleRoute && isMateriView && activeBidang && activeTopic
      ? `detail-${activeBidang.id}-${activeTopic.id}`
      : null;

  const clearPendingAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  const playMateriTopicAudio = (
    topic: PokokBahasanItem,
    settingsOverride?: MateriSpeechSettings
  ) => {
    const segments = buildMateriSlideSpeechSegments(topic);
    if (segments.length === 0) return;

    const activeSettings = settingsOverride || speechSettingsRef.current;

    speechService.speakSegmentsWithIntonation(
      segments,
      {
        onStart: () => {
          isPlayingMateriRef.current = true;
          setIsPlayingMateriAudio(true);
        },
        onEnd: () => {
          isPlayingMateriRef.current = false;
          setIsPlayingMateriAudio(false);
        },
        onError: () => {
          isPlayingMateriRef.current = false;
          setIsPlayingMateriAudio(false);
        },
      },
      activeSettings
    );
  };

  useEffect(() => {
    clearPendingAutoPlay();

    if (isPlayingMateriRef.current) {
      speechService.stopSpeaking();
      isPlayingMateriRef.current = false;
      setIsPlayingMateriAudio(false);
    }

    const switchedBidang =
      prevBidangIdRef.current !== null && prevBidangIdRef.current !== activeBidangId;
    prevBidangIdRef.current = activeBidangId;

    if (!materiAudioKey || !activeTopic || switchedBidang) {
      setIsSpeechModalOpen(false);
      if (isMateriVoiceEnabledRef.current) {
        isMateriVoiceEnabledRef.current = false;
        setIsMateriVoiceEnabled(false);
      }
      return;
    }

    if (isMateriVoiceEnabledRef.current && speechSettingsRef.current.autoPlayNext) {
      autoPlayTimerRef.current = setTimeout(() => {
        autoPlayTimerRef.current = null;
        if (isMateriVoiceEnabledRef.current && speechSettingsRef.current.autoPlayNext) {
          playMateriTopicAudio(activeTopic, speechSettingsRef.current);
        }
      }, 150);
    }

    return () => {
      clearPendingAutoPlay();
    };
  }, [materiAudioKey, activeBidangId]);

  useEffect(() => {
    return () => {
      clearPendingAutoPlay();
      setIsSpeechModalOpen(false);
      if (isPlayingMateriRef.current) {
        speechService.stopSpeaking();
        isPlayingMateriRef.current = false;
      }
      isMateriVoiceEnabledRef.current = false;
    };
  }, []);

  const handleToggleMateriAudio = () => {
    clearPendingAutoPlay();

    if (isPlayingMateriAudio) {
      speechService.stopSpeaking();
      isMateriVoiceEnabledRef.current = false;
      setIsMateriVoiceEnabled(false);
      isPlayingMateriRef.current = false;
      setIsPlayingMateriAudio(false);
      return;
    }

    if (!isModuleRoute || !isMateriView || !activeTopic) return;
    if (!speechService.isTTSSupported()) return;

    setIsSpeechModalOpen(true);
  };

  const handleStartSpeechFromModal = (newSettings: MateriSpeechSettings) => {
    speechSettingsRef.current = newSettings;
    setSpeechSettings(newSettings);
    try {
      localStorage.setItem(SPEECH_SETTINGS_STORAGE_KEY, JSON.stringify(newSettings));
    } catch {
      // Abaikan jika penyimpanan lokal dibatasi
    }

    setIsSpeechModalOpen(false);

    if (!isModuleRoute || !isMateriView || !activeTopic) return;
    if (!speechService.isTTSSupported()) return;

    isMateriVoiceEnabledRef.current = newSettings.autoPlayNext;
    setIsMateriVoiceEnabled(newSettings.autoPlayNext);
    playMateriTopicAudio(activeTopic, newSettings);
  };

  const handleDisableAutoVoice = () => {
    clearPendingAutoPlay();
    isMateriVoiceEnabledRef.current = false;
    setIsMateriVoiceEnabled(false);
    setIsSpeechModalOpen(false);
  };

  return {
    canUseMateriSpeech: isModuleRoute && isMateriView && !!activeTopic,
    activeTopicTitle: activeTopic?.judul || 'Materi Pembelajaran',
    isPlayingMateriAudio,
    isMateriVoiceEnabled,
    isSpeechModalOpen,
    speechSettings,
    closeSpeechModal: () => setIsSpeechModalOpen(false),
    handleToggleMateriAudio,
    handleStartSpeechFromModal,
    handleDisableAutoVoice,
  };
}
