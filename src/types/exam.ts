import { BidangId } from './materi';

export type ExamMode = 'pilihan_ganda' | 'tertulis' | 'lisan';

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
  pokokBahasanNomor?: string; // e.g. '1.2.1'
  pokokBahasanJudul?: string; // e.g. 'Pengertian, Ruang Lingkup, dan Perkembangan Manajemen Operasional'
  variasiIndex?: number; // 1 to 5
  tipeVariasi?: 'definisi' | 'unsur' | 'konsep' | 'tujuan_fungsi' | 'contoh_penerapan';
  pertanyaan: string;
  transkripFonetis?: string; // Transkrip fonetis pembacaan Text-to-Speech (TTS) bernada lisan alami
  skenarioKasus?: string;
  skenarioKasusFonetis?: string;
  options: QuestionOption[];
  kunciJawaban: 'A' | 'B' | 'C' | 'D';
  kunciJawabanDeskriptif: string;
  kataKunciUtama: string[];
  sinonimBilingual?: Record<string, string[]>;
  pembahasan: string;
  indikatorPenilaian?: string;
  referensiBuku: string;
}

export type QuestionDeliveryMode = 'text' | 'voice';

export type AnswerType = 'pilihan_ganda' | 'manual_input' | 'voice_input';

export interface UserExamResponse {
  questionId: string;
  userAnswer?: 'A' | 'B' | 'C' | 'D';
  userNotesOrAudio?: string; // Text answer, essay, or STT transcript
  selfAssessedScore?: number; // 0 - 100 for oral/essay self evaluation
  scoreEarned?: number; // Calculated proportional score (e.g. 9.2 or 9)
  maxScore?: number; // Standard max score per question (default 10)
  matchPercentage?: number; // Percentage similarity (0 - 100%)
  isCorrect?: boolean;
  timeSpentSeconds: number;
  matchedKeywords?: string[]; // Automated rubric evaluation breakdown (full/strong matches)
  partialKeywords?: string[]; // Keywords with partial token/concept overlap
  keywordMatchRatio?: number; // 0 - 1 weighted keyword coverage ratio
  synonymHighlights?: Array<{
    keyword: string;
    matchedAs: string;
    isBilingual: boolean;
  }>;
  structuralFeedback?: string;
}

export interface ExamConfig {
  mode: ExamMode;
  selectedBidang: BidangId | 'semua';
  selectedBidangs?: BidangId[];
  totalQuestions: number; // 5, 10, 15, 20 per mata kuliah
  durationMinutes: number;
  randomize: boolean;
  questionDeliveryMode: QuestionDeliveryMode;
  answerType: AnswerType;
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
