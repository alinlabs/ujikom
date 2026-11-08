/**
 * Web Speech API Service for UJIKOM Exam Engine
 * Provides Text-to-Speech (TTS) for reading questions and Speech-to-Text (STT) for voice answers
 * Implements fallback mechanisms for unsupported browsers.
 */

export class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private recognition: any = null;
  private isListening = false;

  constructor() {
    if (typeof window !== 'undefined') {
      if ('speechSynthesis' in window) {
        this.synth = window.speechSynthesis;
      }
    }
  }

  // --- Text-to-Speech (TTS) Methods ---

  isTTSSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  speakText(text: string, onEnd?: () => void, onError?: (err: any) => void): void {
    if (!this.isTTSSupported() || !this.synth) {
      if (onError) onError('Text-to-Speech tidak didukung oleh browser Anda.');
      return;
    }

    this.stopSpeaking();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID'; // Indonesian voice
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

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

  // --- Speech-to-Text (STT) Recognition Methods ---

  isSTTSupported(): boolean {
    if (typeof window === 'undefined') return false;
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    return !!SpeechRecognition;
  }

  startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError?: (err: string) => void,
    onEnd?: () => void
  ): boolean {
    if (!this.isSTTSupported()) {
      if (onError) onError('Speech Recognition (Voice Input) tidak didukung oleh browser ini. Gunakan input ketik.');
      return false;
    }

    try {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      this.stopListening();

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
        onResult(currentText, !!finalTranscript);
      };

      this.recognition.onerror = (event: any) => {
        this.isListening = false;
        let msg = 'Terjadi kesalahan perekaman suara.';
        if (event.error === 'not-allowed') {
          msg = 'Izin mikrofon ditolak oleh browser. Izinkan akses mikrofon di pengaturan browser.';
        } else if (event.error === 'no-speech') {
          msg = 'Suara tidak terdeteksi. Silakan bicara lebih jelas.';
        }
        if (onError) onError(msg);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (onEnd) onEnd();
      };

      this.recognition.start();
      this.isListening = true;
      return true;
    } catch (err: any) {
      this.isListening = false;
      if (onError) onError(err.message || 'Gagal memulai rekaman suara.');
      return false;
    }
  }

  stopListening(): void {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch {
        // ignore
      }
    }
    this.isListening = false;
    this.recognition = null;
  }

  getIsListening(): boolean {
    return this.isListening;
  }
}

export const speechService = new SpeechService();
