/**
 * Web Speech & Audio Service for UJIKOM Exam Engine
 * Provides Text-to-Speech (TTS) for reading questions and Speech-to-Text (STT) for voice answers.
 * Triggers native browser microphone permission prompts via getUserMedia,
 * maintains MediaStream and MediaRecorder, with full fallback mechanisms.
 */

export type VoiceGender = 'female' | 'male';

export interface MateriSpeechSettings {
  gender: VoiceGender;
  rate: number;
  pitch: number;
  volume: number;
  autoPlayNext: boolean;
}

export const DEFAULT_MATERI_SPEECH_SETTINGS: MateriSpeechSettings = {
  gender: 'female',
  rate: 1.0,
  pitch: 1.0,
  volume: 1.0,
  autoPlayNext: true,
};

export class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private playbackId = 0;
  private recognition: any = null;
  private isListening = false;
  private activeStream: MediaStream | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      if ('speechSynthesis' in window) {
        this.synth = window.speechSynthesis;
      }
    }
  }

  // --- Audio & Microphone Permission Helper ---

  /**
   * Meminta izin mikrofon eksplisit dari browser menggunakan getUserMedia.
   * Ini memunculkan modal/dialog izin default peramban (Chrome, Edge, Safari, Firefox).
   */
  async requestAudioPermissions(): Promise<{ micGranted: boolean; error?: string; errorType?: string }> {
    if (typeof window === 'undefined') {
      return { micGranted: false, error: 'SSR Context', errorType: 'SSR' };
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return {
        micGranted: false,
        error: 'Browser kamu tidak mendukung perizinan mikrofon (navigator.mediaDevices.getUserMedia).',
        errorType: 'NotSupported',
      };
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      // Segera hentikan track jika ini hanya pengecekan izin awal
      stream.getTracks().forEach((track) => track.stop());
      return { micGranted: true };
    } catch (err: any) {
      console.warn('getUserMedia permission error:', err);
      let errorType = err.name || 'UnknownError';
      let msg = 'Izin mikrofon belum diberikan oleh browser.';

      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        errorType = 'NotAllowedError';
        msg = 'Izin mikrofon ditolak oleh browser. Silakan klik ikon gembok / perizinan di bilah alamat browser untuk mengaktifkan izin mikrofon.';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        errorType = 'NotFoundError';
        msg = 'Perangkat mikrofon fisik tidak ditemukan pada perangkat kamu.';
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        errorType = 'NotReadableError';
        msg = 'Mikrofon sedang digunakan oleh aplikasi lain.';
      }

      return { micGranted: false, error: msg, errorType };
    }
  }

  // --- Text-to-Speech (TTS) Methods ---

  isTTSSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  /**
   * Mendeteksi daftar suara bahasa Indonesia yang tersedia di browser/OS
   * serta memilih suara terbaik sesuai preferensi gender (perempuan / laki-laki).
   */
  getVoiceForGender(gender: VoiceGender): {
    voice: SpeechSynthesisVoice | null;
    isExactGenderMatch: boolean;
    hasIndonesianVoice: boolean;
  } {
    try {
      if (!this.synth || typeof this.synth.getVoices !== 'function') {
        return { voice: null, isExactGenderMatch: false, hasIndonesianVoice: false };
      }
      const voices = this.synth.getVoices();
      if (!voices || voices.length === 0) {
        return { voice: null, isExactGenderMatch: false, hasIndonesianVoice: false };
      }

      const isIndoVoice = (v: SpeechSynthesisVoice) => {
        const lang = (v?.lang || '').toLowerCase();
        return lang.startsWith('id') || lang.includes('indonesia');
      };

      const maleTokens = [
        'ardi',
        'budi',
        'andika',
        'bagus',
        'rizky',
        'male',
        'pria',
        'laki',
        'id-id-x-ide',
        'id-id-x-idc',
      ];
      const femaleTokens = [
        'gadis',
        'damayanti',
        'putri',
        'sari',
        'dewi',
        'female',
        'wanita',
        'perempuan',
        'google bahasa indonesia',
        'id-id-x-idd',
        'id-id-x-dfz',
      ];

      const matchesTokens = (v: SpeechSynthesisVoice, tokens: string[]) => {
        const lowerName = `${v?.name || ''} ${v?.voiceURI || ''}`.toLowerCase();
        return tokens.some((token) => lowerName.includes(token));
      };

      const indoVoices = voices.filter(isIndoVoice);

      if (gender === 'male') {
        const exactMaleIndo = indoVoices.find((v) => matchesTokens(v, maleTokens));
        if (exactMaleIndo) {
          return { voice: exactMaleIndo, isExactGenderMatch: true, hasIndonesianVoice: true };
        }
        const nonFemaleIndo = indoVoices.find((v) => !matchesTokens(v, femaleTokens));
        if (nonFemaleIndo) {
          return { voice: nonFemaleIndo, isExactGenderMatch: false, hasIndonesianVoice: true };
        }
        if (indoVoices.length > 0) {
          return { voice: indoVoices[0], isExactGenderMatch: false, hasIndonesianVoice: true };
        }
        const fallbackMale = voices.find((v) => matchesTokens(v, maleTokens));
        return {
          voice: fallbackMale || voices[0] || null,
          isExactGenderMatch: !!fallbackMale,
          hasIndonesianVoice: false,
        };
      }

      // gender === 'female'
      const exactFemaleIndo = indoVoices.find((v) => matchesTokens(v, femaleTokens));
      if (exactFemaleIndo) {
        return { voice: exactFemaleIndo, isExactGenderMatch: true, hasIndonesianVoice: true };
      }
      const nonMaleIndo = indoVoices.find((v) => !matchesTokens(v, maleTokens));
      if (nonMaleIndo) {
        return { voice: nonMaleIndo, isExactGenderMatch: true, hasIndonesianVoice: true };
      }
      if (indoVoices.length > 0) {
        return { voice: indoVoices[0], isExactGenderMatch: false, hasIndonesianVoice: true };
      }
      const naturalVoice = voices.find((v) => {
        const name = (v?.name || '').toLowerCase();
        return name.includes('natural') || name.includes('google') || name.includes('samantha');
      });
      return {
        voice: naturalVoice || voices[0] || null,
        isExactGenderMatch: false,
        hasIndonesianVoice: false,
      };
    } catch {
      return { voice: null, isExactGenderMatch: false, hasIndonesianVoice: false };
    }
  }

  /**
   * Mencari suara wanita bahasa Indonesia terbaik yang tersedia pada peramban/sistem.
   */
  getBestFemaleIndonesianVoice(): SpeechSynthesisVoice | null {
    return this.getVoiceForGender('female').voice;
  }

  /**
   * Memecah teks panjang menjadi kalimat-kalimat alami lalu mengelompokkannya menjadi
   * potongan ideal (~200 karakter) agar TTS membaca dengan tempo mengalir tanpa jeda kaku antar kalimat.
   */
  private splitIntoSentences(text: string): string[] {
    const cleaned = text.replace(/\s+/g, ' ').trim();
    if (!cleaned) return [];
    const parts = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
    if (!parts) return [cleaned];
    return parts.map((s) => s.trim()).filter(Boolean);
  }

  private groupSentencesForNaturalTempo(text: string, maxChars = 200): string[] {
    const sentences = this.splitIntoSentences(text);
    if (sentences.length <= 1) return sentences;

    const chunks: string[] = [];
    let current = '';

    for (const sentence of sentences) {
      if (!current) {
        current = sentence;
      } else if (current.length + 1 + sentence.length <= maxChars) {
        current = `${current} ${sentence}`;
      } else {
        chunks.push(current);
        current = sentence;
      }
    }

    if (current) {
      chunks.push(current);
    }

    return chunks;
  }

  /**
   * Memainkan audio pembacaan soal lisan dengan format pengulangan interaktif:
   * "Soal nomor X. [Pertanyaan]..." -> jeda -> "Saya ulangi, [Pertanyaan]..."
   * Menggunakan modulasi intonasi (pitch & rate dinamis) dan suara wanita terbaik.
   */
  speakOralQuestionWithIntonation(options: {
    questionNumber: number;
    questionText: string;
    scenarioText?: string;
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (err: any) => void;
  }): void {
    if (!this.isTTSSupported() || !this.synth) {
      if (options.onError) options.onError('Text-to-Speech tidak didukung pada browser ini.');
      return;
    }

    this.stopSpeaking();
    const sessionId = this.playbackId;
    const voice = this.getBestFemaleIndonesianVoice();

    const segments: Array<{ text: string; rate: number; pitch: number; pauseAfterMs: number }> = [
      {
        text: `Soal nomor ${options.questionNumber}.`,
        rate: 1.08,
        pitch: 1.07,
        pauseAfterMs: 160,
      },
      ...(options.scenarioText
        ? [
            {
              text: `Skenario kasus: ${options.scenarioText}.`,
              rate: 1.08,
              pitch: 1.05,
              pauseAfterMs: 220,
            },
          ]
        : []),
      {
        text: `${options.questionText}`,
        rate: 1.08,
        pitch: 1.07,
        pauseAfterMs: 420,
      },
      {
        text: 'Saya ulangi,',
        rate: 1.08,
        pitch: 1.04,
        pauseAfterMs: 180,
      },
      {
        text: `${options.questionText}`,
        rate: 1.05,
        pitch: 1.06,
        pauseAfterMs: 0,
      },
    ];

    let currentStep = 0;

    if (options.onStart) options.onStart();

    const playNext = () => {
      if (sessionId !== this.playbackId || !this.synth) return;

      if (currentStep >= segments.length) {
        this.currentUtterance = null;
        if (options.onEnd) options.onEnd();
        return;
      }

      const item = segments[currentStep];
      currentStep++;

      const utterance = new SpeechSynthesisUtterance(item.text);
      utterance.lang = 'id-ID';
      utterance.rate = item.rate;
      utterance.pitch = item.pitch;
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onend = () => {
        if (sessionId !== this.playbackId) return;
        if (item.pauseAfterMs > 0) {
          setTimeout(playNext, item.pauseAfterMs);
        } else {
          playNext();
        }
      };

      utterance.onerror = (e) => {
        if (sessionId !== this.playbackId) return;
        this.currentUtterance = null;
        if (options.onError) options.onError(e);
        if (options.onEnd) options.onEnd();
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    };

    playNext();
  }

  /**
   * Memutar rangkaian segmen berintonasi (tempo baca, pitch, volume, dan pilihan suara)
   * dengan pengelompokan kalimat alami serta kompresi jeda agar tempo baca terasa sigap & natural,
   * bukan terdengar kaku atau seperti audio dipercepat.
   */
  speakSegmentsWithIntonation(
    segments: Array<{ text: string; rate: number; pitch: number; pauseAfterMs: number }>,
    callbacks?: {
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: any) => void;
    },
    voiceSettings?: Partial<MateriSpeechSettings>
  ): void {
    if (!this.isTTSSupported() || !this.synth) {
      if (callbacks?.onError) callbacks.onError('Text-to-Speech tidak didukung oleh browser kamu.');
      return;
    }

    this.stopSpeaking();
    const sessionId = this.playbackId;

    const gender: VoiceGender = voiceSettings?.gender ?? 'female';
    const userRate = Math.min(1.6, Math.max(0.7, voiceSettings?.rate ?? 1.0));
    const userPitch = voiceSettings?.pitch ?? 1.0;
    const userVolume = voiceSettings?.volume ?? 1.0;

    // Kalibrasi tempo baca alami:
    // - Pada 1.0x (Normal), tempo dasar dibuat sigap (~1.14) agar tidak terkesan pelan/lambat.
    // - Di atas 1.0x, kurva artikulasi naik bertahap (maks ~1.41) & jeda antar segmen diperketat
    //   sehingga terasa seperti penutur membaca lebih cekatan tanpa efek melengking/dipercepat.
    const mappedTempoRate =
      userRate >= 1.0
        ? 1.14 + (userRate - 1.0) * 0.45
        : 1.14 - (1.0 - userRate) * 0.9;

    // Stabilkan pitch sedikit saat tempo cepat agar nada suara tetap hangat & natural
    const tempoPitchStabilizer =
      mappedTempoRate > 1.15 ? Math.max(0.95, 1 - (mappedTempoRate - 1.15) * 0.08) : 1.0;

    const { voice, isExactGenderMatch } = this.getVoiceForGender(gender);
    const genderPitchFactor =
      gender === 'male'
        ? isExactGenderMatch
          ? 0.96
          : 0.78
        : isExactGenderMatch
        ? 1.02
        : 1.12;

    const expandedQueue: Array<{ text: string; rate: number; pitch: number; pauseAfterMs: number }> = [];
    for (const seg of segments) {
      const chunks = this.groupSentencesForNaturalTempo(seg.text);
      const subtleSegRateFactor = 1 + (seg.rate - 1) * 0.4;
      const chunkRate = Math.min(1.48, Math.max(0.75, mappedTempoRate * subtleSegRateFactor));
      const chunkPitch = Math.min(
        1.8,
        Math.max(0.5, seg.pitch * userPitch * genderPitchFactor * tempoPitchStabilizer)
      );

      // Jeda antar segmen diperketat dan mengikuti tempo agar transisi mengalir sigap
      const scaledSegmentPause =
        seg.pauseAfterMs > 0
          ? Math.max(30, Math.round((seg.pauseAfterMs * 0.42) / Math.max(0.85, userRate)))
          : 0;
      const intraChunkPause = userRate < 1.0 ? Math.round((1.0 - userRate) * 140) : 0;

      chunks.forEach((chunk, idx) => {
        const isLastInSeg = idx === chunks.length - 1;
        expandedQueue.push({
          text: chunk,
          rate: chunkRate,
          pitch: chunkPitch,
          pauseAfterMs: isLastInSeg ? scaledSegmentPause : intraChunkPause,
        });
      });
    }

    if (expandedQueue.length === 0) {
      if (callbacks?.onEnd) callbacks.onEnd();
      return;
    }

    if (callbacks?.onStart) callbacks.onStart();

    let currentStep = 0;

    const playNext = () => {
      if (sessionId !== this.playbackId || !this.synth) return;

      if (currentStep >= expandedQueue.length) {
        this.currentUtterance = null;
        if (callbacks?.onEnd) callbacks.onEnd();
        return;
      }

      const item = expandedQueue[currentStep];
      currentStep++;

      try {
        const utterance = new SpeechSynthesisUtterance(item.text);
        utterance.lang = 'id-ID';
        utterance.rate = item.rate;
        utterance.pitch = item.pitch;
        utterance.volume = Math.min(1.0, Math.max(0.0, userVolume));
        if (voice) {
          utterance.voice = voice;
        }

        utterance.onend = () => {
          if (sessionId !== this.playbackId) return;
          if (item.pauseAfterMs > 0) {
            setTimeout(playNext, item.pauseAfterMs);
          } else {
            playNext();
          }
        };

        utterance.onerror = (e) => {
          if (sessionId !== this.playbackId) return;
          this.currentUtterance = null;
          if (callbacks?.onError) callbacks.onError(e);
          if (callbacks?.onEnd) callbacks.onEnd();
        };

        this.currentUtterance = utterance;
        this.synth.speak(utterance);
      } catch (err) {
        this.currentUtterance = null;
        if (callbacks?.onError) callbacks.onError(err);
      }
    };

    playNext();
  }

  /**
   * Memutar contoh singkat suara untuk pratinjau pengaturan audio materi.
   */
  previewMateriVoice(
    voiceSettings: Partial<MateriSpeechSettings>,
    callbacks?: {
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: any) => void;
    }
  ): void {
    this.speakSegmentsWithIntonation(
      [
        {
          text: 'Halo, ini contoh tempo suara untuk membacakan materi Ujikom. Penjelasan materi akan dibacakan secara lancar, jelas, dan nyaman didengarkan.',
          rate: 1.0,
          pitch: 1.02,
          pauseAfterMs: 0,
        },
      ],
      callbacks,
      voiceSettings
    );
  }

  /**
   * Memutar penjelasan materi atau teks panjang per kalimat agar intonasi tetap alami, jelas,
   * dan tidak terpotong oleh batas durasi SpeechSynthesis pada beberapa browser.
   */
  speakText(text: string, onEnd?: () => void, onError?: (err: any) => void): void {
    if (!this.isTTSSupported() || !this.synth) {
      if (onError) onError('Text-to-Speech tidak didukung oleh browser kamu.');
      return;
    }

    this.stopSpeaking();
    const sessionId = this.playbackId;
    const voice = this.getBestFemaleIndonesianVoice();
    const sentences = this.splitIntoSentences(text);

    if (sentences.length === 0) {
      if (onEnd) onEnd();
      return;
    }

    let currentStep = 0;

    const playNextSentence = () => {
      if (sessionId !== this.playbackId || !this.synth) return;

      if (currentStep >= sentences.length) {
        this.currentUtterance = null;
        if (onEnd) onEnd();
        return;
      }

      const sentence = sentences[currentStep];
      currentStep++;

      try {
        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.lang = 'id-ID';
        utterance.rate = 1.02;
        utterance.pitch = 1.06;
        if (voice) {
          utterance.voice = voice;
        }

        utterance.onend = () => {
          if (sessionId !== this.playbackId) return;
          if (currentStep < sentences.length) {
            setTimeout(playNextSentence, 160);
          } else {
            this.currentUtterance = null;
            if (onEnd) onEnd();
          }
        };

        utterance.onerror = (e) => {
          if (sessionId !== this.playbackId) return;
          this.currentUtterance = null;
          if (onError) onError(e);
        };

        this.currentUtterance = utterance;
        this.synth.speak(utterance);
      } catch (err) {
        this.currentUtterance = null;
        if (onError) onError(err);
      }
    };

    playNextSentence();
  }

  pauseSpeaking(): void {
    if (this.synth && this.synth.speaking) {
      this.synth.pause();
    }
  }

  resumeSpeaking(): void {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  stopSpeaking(): void {
    this.playbackId++;
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  isSpeaking(): boolean {
    return !!(this.synth && this.synth.speaking && !this.synth.paused);
  }

  // --- Speech-to-Text (STT) Word-by-Word Text Transcription Methods ---

  private committedTranscript = '';
  private sessionFinalTranscript = '';
  private initialTranscriptPrefix = '';
  private manualStopRequested = false;

  isSTTSupported(): boolean {
    if (typeof window === 'undefined') return false;
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    return !!SpeechRecognition;
  }

  private mergeTranscriptParts(parts: string[]): string {
    return parts
      .map((p) => p.trim())
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Memulai transkripsi suara menjadi teks kata demi kata secara real-time (pure Speech-to-Text,
   * tanpa menyimpan audio/MP3). Menangani izin mikrofon, akumulasi multi-kalimat,
   * serta auto-resume jika peramban menjeda sesi di tengah kalimat.
   */
  async startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError?: (err: string, errorType?: string) => void,
    onEnd?: () => void,
    initialText = ''
  ): Promise<boolean> {
    this.stopListening();

    const SpeechRecognition =
      typeof window !== 'undefined'
        ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
        : null;

    if (!SpeechRecognition) {
      if (onError) {
        onError(
          'Browser kamu belum mendukung transkripsi suara ke teks (Speech-to-Text). Gunakan Chrome/Edge/Safari atau ketik langsung pada kolom transkrip.',
          'NotSupported'
        );
      }
      return false;
    }

    // 1. Pastikan izin mikrofon diberikan via getUserMedia, lalu segera lepaskan track
    //    agar SpeechRecognition memiliki akses penuh tanpa bentrok perangkat keras (Android/iOS).
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });
        stream.getTracks().forEach((track) => track.stop());
      }
    } catch (err: any) {
      const errorType = err.name || 'NotAllowedError';
      const msg =
        errorType === 'NotAllowedError' || errorType === 'PermissionDeniedError'
          ? 'Izin mikrofon ditolak oleh browser. Mohon izinkan akses mikrofon di ikon gembok / izin situs browser kamu.'
          : errorType === 'NotFoundError' || errorType === 'DevicesNotFoundError'
          ? 'Perangkat mikrofon tidak ditemukan pada perangkat kamu.'
          : err.message || 'Gagal meminta izin mikrofon.';

      if (onError) onError(msg, errorType);
      return false;
    }

    this.initialTranscriptPrefix = initialText.trim();
    this.committedTranscript = '';
    this.sessionFinalTranscript = '';
    this.manualStopRequested = false;
    this.isListening = true;

    const startRecognitionInstance = () => {
      if (!this.isListening || this.manualStopRequested) return;

      try {
        const recognition = new SpeechRecognition();
        recognition.lang = 'id-ID';
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event: any) => {
          let allFinals = '';
          let currentInterim = '';

          // Iterasi mulai indeks 0 agar seluruh kata sebelumnya tetap terjaga saat jeda bicara
          for (let i = 0; i < event.results.length; ++i) {
            const chunk = (event.results[i][0]?.transcript || '').trim();
            if (!chunk) continue;
            if (event.results[i].isFinal) {
              allFinals = allFinals ? `${allFinals} ${chunk}` : chunk;
            } else {
              currentInterim = currentInterim ? `${currentInterim} ${chunk}` : chunk;
            }
          }

          this.sessionFinalTranscript = allFinals;

          const combinedText = this.mergeTranscriptParts([
            this.initialTranscriptPrefix,
            this.committedTranscript,
            this.sessionFinalTranscript,
            currentInterim,
          ]);

          if (combinedText) {
            onResult(combinedText, !currentInterim && !!allFinals);
          }
        };

        recognition.onerror = (event: any) => {
          if (event.error === 'no-speech') {
            // Abaikan no-speech agar pengguna dapat berpikir sejenak tanpa memutus rekaman
            return;
          }
          if (event.error === 'aborted') {
            return;
          }
          if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            this.manualStopRequested = true;
            this.isListening = false;
            if (onError) onError('Izin mikrofon ditolak oleh browser.', 'NotAllowedError');
            return;
          }
          if (event.error === 'audio-capture') {
            this.manualStopRequested = true;
            this.isListening = false;
            if (onError) onError('Mikrofon sedang digunakan aplikasi lain atau tidak terdeteksi.', 'audio-capture');
            return;
          }
          if (onError) onError(`Transkripsi suara: ${event.error}`, event.error);
        };

        recognition.onend = () => {
          if (this.sessionFinalTranscript) {
            this.committedTranscript = this.mergeTranscriptParts([
              this.committedTranscript,
              this.sessionFinalTranscript,
            ]);
            this.sessionFinalTranscript = '';
          }

          // Jika pengguna belum menghentikan rekaman secara manual, lanjutkan mendengarkan
          if (this.isListening && !this.manualStopRequested) {
            setTimeout(() => {
              if (this.isListening && !this.manualStopRequested) {
                startRecognitionInstance();
              }
            }, 120);
          } else {
            this.recognition = null;
            if (onEnd) onEnd();
          }
        };

        this.recognition = recognition;
        recognition.start();
      } catch (recStartErr: any) {
        this.isListening = false;
        this.recognition = null;
        if (onError) {
          onError(recStartErr?.message || 'Gagal memulai pengenalan suara.', 'StartError');
        }
      }
    };

    startRecognitionInstance();
    return true;
  }

  stopListening(): void {
    this.manualStopRequested = true;
    this.isListening = false;

    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch {
        // ignore
      }
      this.recognition = null;
    }

    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      try {
        this.mediaRecorder.stop();
      } catch {
        // ignore
      }
      this.mediaRecorder = null;
    }

    if (this.activeStream) {
      try {
        this.activeStream.getTracks().forEach((track) => track.stop());
      } catch {
        // ignore
      }
      this.activeStream = null;
    }
  }

  getIsListening(): boolean {
    return this.isListening;
  }

  getRecordedAudioBlob(): Blob | null {
    return null;
  }
}

export const speechService = new SpeechService();
