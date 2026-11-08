import { BidangId } from './materi';

export type ExamMode = 'tertulis' | 'lisan';

export type QuestionType = 'pilihan_ganda' | 'studi_kasus' | 'tanya_jawab_lisan';

export type QuestionDifficulty = 'mudah' | 'sedang' | 'sulit';

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface ExamQuestion {
  id: string;
  bidangId: BidangId;
  topikId: string;
  type: QuestionType;
  pertanyaan: string;
  skenarioKasus?: string;
  options?: QuestionOption[];
  kunciJawaban?: 'A' | 'B' | 'C' | 'D';
  rubrikPenilaianLisan?: {
    kriteriaUtama: string;
    ekspektasiJawaban: string[];
    kataKunciWajib: string[];
  };
  pembahasan: string;
  indikatorPenilaian?: string;
  tingkatKesulitan?: QuestionDifficulty;
  referensiBuku: string;
  halamanPdf?: string;
}

export type QuestionDeliveryMode = 'text' | 'voice';

export type AnswerType = 'pilihan_ganda' | 'manual_input' | 'voice_input';

export interface UserExamResponse {
  questionId: string;
  userAnswer?: 'A' | 'B' | 'C' | 'D';
  userNotesOrAudio?: string; // Text answer, essay, or STT transcript
  selfAssessedScore?: number; // 0 - 100 for oral/essay self evaluation
  isCorrect?: boolean;
  timeSpentSeconds: number;
  matchedKeywords?: string[]; // Automated rubric evaluation breakdown
}

export interface ExamConfig {
  mode: ExamMode;
  selectedBidang: BidangId | 'semua';
  totalQuestions: number; // min 10, max 15
  durationMinutes: number;
  randomize: boolean;
  questionDeliveryMode: QuestionDeliveryMode; // Text vs Voice (TTS)
  answerType: AnswerType; // Pilihan ganda, Manual input, Esai, Voice input (STT)
}

export interface ExamResult {
  id: string;
  timestamp: number;
  config: ExamConfig;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered: number;
  score: number; // 0 - 100
  grade: 'A' | 'B+' | 'B' | 'C' | 'TL';
  passed: boolean;
  totalTimeSeconds: number;
  responses: UserExamResponse[];
  breakdownPerBidang: Record<BidangId, { total: number; correct: number; score: number }>;
}
