/**
 * Web Speech & Audio Service for UJIKOM Exam Engine
 * Provides Text-to-Speech (TTS) for reading questions and Speech-to-Text (STT) for voice answers.
 * Triggers native browser microphone permission prompts via getUserMedia,
 * maintains MediaStream and MediaRecorder, with full fallback mechanisms.
 */

export class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
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
        error: 'Browser Anda tidak mendukung perizinan mikrofon (navigator.mediaDevices.getUserMedia).',
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
        msg = 'Perangkat mikrofon fisik tidak ditemukan pada perangkat Anda.';
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
   * Mencari suara wanita bahasa Indonesia terbaik yang tersedia pada peramban/sistem.
   */
  getBestFemaleIndonesianVoice(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return null;

    // Prioritas 1: Suara wanita Indonesia spesifik
    const femaleIdVoice = voices.find((v) => {
      const name = v.name.toLowerCase();
      const lang = v.lang.toLowerCase();
      const isIndo = lang.startsWith('id') || lang.includes('indonesia');
      const isFemale =
        name.includes('gadis') ||
        name.includes('damayanti') ||
        name.includes('putri') ||
        name.includes('female') ||
        name.includes('wanita') ||
        name.includes('google bahasa indonesia');
      return isIndo && isFemale;
    });
    if (femaleIdVoice) return femaleIdVoice;

    // Prioritas 2: Suara bahasa Indonesia apa pun yang terpasang
    const anyIdVoice = voices.find((v) => {
      const lang = v.lang.toLowerCase();
      return lang.startsWith('id') || lang.includes('indonesia');
    });
    if (anyIdVoice) return anyIdVoice;

    // Prioritas 3: Suara Natural / Google / Female umum
    const naturalVoice = voices.find((v) => {
      const name = v.name.toLowerCase();
      return name.includes('natural') || name.includes('google') || name.includes('samantha');
    });
    return naturalVoice || voices[0] || null;
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
    const voice = this.getBestFemaleIndonesianVoice();

    // Rangkaian segmen intonasi ekspresif:
    // 1. Intro nomor soal (tempo lugas, pitch percaya diri)
    // 2. Teks pertanyaan (artikulatif, tempo natural ~1.04, intonasi ramah)
    // 3. Jeda jeda pemikiran (550ms)
    // 4. Kalimat penegasan: "Saya ulangi,"
    // 5. Teks pertanyaan ulangan (tempo terukur 1.00 agar jelas diserap)
    const segments: Array<{ text: string; rate: number; pitch: number; pauseAfterMs: number }> = [
      {
        text: `Soal nomor ${options.questionNumber}.`,
        rate: 1.05,
        pitch: 1.08,
        pauseAfterMs: 220,
      },
      ...(options.scenarioText
        ? [
            {
              text: `Skenario kasus: ${options.scenarioText}.`,
              rate: 1.02,
              pitch: 1.05,
              pauseAfterMs: 300,
            },
          ]
        : []),
      {
        text: `${options.questionText}`,
        rate: 1.04, // sedikit lebih cepat dari sebelumnya (0.91 -> 1.04) agar tidak lambat/menyeret
        pitch: 1.08, // intonasi bertanya wanita yang ramah & segar
        pauseAfterMs: 550, // jeda natural sebelum pengulangan
      },
      {
        text: 'Saya ulangi,',
        rate: 1.05,
        pitch: 1.04,
        pauseAfterMs: 250,
      },
      {
        text: `${options.questionText}`,
        rate: 1.00, // tempo stabil dan jelas saat pengulangan (sebelumnya 0.88 yang terlalu lambat)
        pitch: 1.06,
        pauseAfterMs: 0,
      },
    ];

    let currentStep = 0;
    let isCancelled = false;

    if (options.onStart) options.onStart();

    const playNext = () => {
      if (isCancelled || !this.synth) return;

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
        if (isCancelled) return;
        if (item.pauseAfterMs > 0) {
          setTimeout(playNext, item.pauseAfterMs);
        } else {
          playNext();
        }
      };

      utterance.onerror = (e) => {
        if (isCancelled) return;
        this.currentUtterance = null;
        if (options.onError) options.onError(e);
        if (options.onEnd) options.onEnd();
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    };

    playNext();
  }

  speakText(text: string, onEnd?: () => void, onError?: (err: any) => void): void {
    if (!this.isTTSSupported() || !this.synth) {
      if (onError) onError('Text-to-Speech tidak didukung oleh browser Anda.');
      return;
    }

    this.stopSpeaking();
    const voice = this.getBestFemaleIndonesianVoice();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 1.04; // sedikit lebih cepat dari sebelumnya (0.95 -> 1.04)
      utterance.pitch = 1.06;
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onend = () => {
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        this.currentUtterance = null;
        if (onError) onError(e);
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch (err) {
      if (onError) onError(err);
    }
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
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  isSpeaking(): boolean {
    return !!(this.synth && this.synth.speaking && !this.synth.paused);
  }

  // --- Speech-to-Text (STT) & Audio Recording Methods ---

  isSTTSupported(): boolean {
    if (typeof window === 'undefined') return false;
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    return !!SpeechRecognition || !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  /**
   * Memulai perekaman suara dengan memicu izin native browser terlebih dahulu (getUserMedia).
   * Menjalankan SpeechRecognition dan MediaRecorder secara paralel untuk keandalan maksimal.
   */
  async startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError?: (err: string, errorType?: string) => void,
    onEnd?: () => void
  ): Promise<boolean> {
    this.stopListening();
    this.recordedChunks = [];

    // 1. Dapatkan izin mikrofon melalui getUserMedia untuk memicu modal izin bawaan browser
    let stream: MediaStream | null = null;
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });
        this.activeStream = stream;
      }
    } catch (err: any) {
      const errorType = err.name || 'NotAllowedError';
      const msg =
        errorType === 'NotAllowedError' || errorType === 'PermissionDeniedError'
          ? 'Izin mikrofon ditolak oleh browser. Mohon izinkan akses mikrofon di ikon gembok / izin situs browser Anda.'
          : errorType === 'NotFoundError'
          ? 'Perangkat mikrofon tidak ditemukan di sistem Anda.'
          : err.message || 'Gagal meminta izin mikrofon.';

      if (onError) onError(msg, errorType);
      return false;
    }

    // 2. Mulai MediaRecorder untuk merekam aliran audio mentah
    if (stream && typeof MediaRecorder !== 'undefined') {
      try {
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            this.recordedChunks.push(e.data);
          }
        };
        recorder.start(500); // chunk setiap 500ms
        this.mediaRecorder = recorder;
      } catch (recErr) {
        console.warn('MediaRecorder init error:', recErr);
      }
    }

    // 3. Inisialisasi Web Speech API (SpeechRecognition)
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'id-ID';
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this.recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            const transcriptChunk = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcriptChunk;
            } else {
              interimTranscript += transcriptChunk;
            }
          }

          const currentText = finalTranscript || interimTranscript;
          if (currentText.trim()) {
            onResult(currentText, !!finalTranscript);
          }
        };

        this.recognition.onerror = (event: any) => {
          console.warn('SpeechRecognition error:', event.error);
          if (event.error === 'not-allowed') {
            // Jika recognition diblokir namun stream getUserMedia aktif, tetap lanjutkan dengan rekaman audio
            if (!this.activeStream) {
              this.isListening = false;
              if (onError) onError('Izin mikrofon ditolak oleh browser.', 'NotAllowedError');
            }
          } else if (event.error === 'no-speech') {
            // abaikan no-speech agar tidak menghentikan rekaman saat pengguna berjeda bicara
          } else if (event.error !== 'aborted') {
            if (onError) onError(`Perekaman suara: ${event.error}`, event.error);
          }
        };

        this.recognition.onend = () => {
          // Hanya panggil onEnd jika pengguna benar-benar selesai
          if (!this.isListening && onEnd) {
            onEnd();
          }
        };

        this.recognition.start();
      } catch (recStartErr: any) {
        console.warn('SpeechRecognition start error:', recStartErr);
      }
    } else {
      // Jika browser tidak memiliki SpeechRecognition (misal Firefox atau Safari lama),
      // MediaStream audio tetap aktif merekam jawaban lisan
      console.info('SpeechRecognition not available, using raw audio stream.');
    }

    this.isListening = true;
    return true;
  }

  stopListening(): void {
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

    this.isListening = false;
  }

  getIsListening(): boolean {
    return this.isListening;
  }

  getRecordedAudioBlob(): Blob | null {
    if (this.recordedChunks.length > 0) {
      return new Blob(this.recordedChunks, { type: 'audio/webm' });
    }
    return null;
  }
}

export const speechService = new SpeechService();
