import { create } from 'zustand';
import { BidangId } from '../../../types/materi';
import { ExamConfig, ExamQuestion, ExamResult, UserExamResponse } from '../../../types/exam';
import { generateUniqueId, shuffleArray } from '../../../utils/helpers';
import { sampleExamQuestions } from '../../../data/sampleQuestions';
import { storageService } from '../../../services/storageService';
import { safeLocalStorage } from '../../../utils/storage';
import {
  parseAndEvaluateBilingualAnswer,
  BILINGUAL_THESAURUS,
  stemBilingual,
  stemIndonesian,
  stemEnglish,
  calculateDiceCoefficient,
  evaluateGrammarAndStructure,
} from './bilingualParser';

// Re-export full bilingual NLP parsing module
export * from './bilingualParser';

// Backward compatibility alias
export const evaluateBilingualSimilarity = parseAndEvaluateBilingualAnswer;

// ============================================================================
// 2. Evaluasi Sesi Ujian Komprehensif
// ============================================================================

export const PASSING_SCORE_THRESHOLD = 70; // Standar kelulusan Ujian Komprehensif S1 Manajemen

export const calculateScore = (totalScoreEarned: number, maxScore: number): number => {
  if (maxScore <= 0) return 0;
  return Math.min(100, Math.round((totalScoreEarned / maxScore) * 100));
};

export const determineGrade = (score: number): 'A' | 'B+' | 'B' | 'C' | 'TL' => {
  if (score >= 85) return 'A';
  if (score >= 78) return 'B+';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  return 'TL'; // Tidak Lulus / Perbaikan
};

export const getGradeLabel = (grade: 'A' | 'B+' | 'B' | 'C' | 'TL'): string => {
  switch (grade) {
    case 'A':
      return 'Sangat Memuaskan (Cumlaude Ready)';
    case 'B+':
      return 'Sangat Baik';
    case 'B':
      return 'Baik (Lulus Standar)';
    case 'C':
      return 'Cukup (Perlu Penguatan Materi)';
    case 'TL':
      return 'Tidak Lulus (Wajib Remedial / Review Mendalam)';
  }
};

export const evaluateExamSession = (
  questions: ExamQuestion[],
  responses: Record<string, UserExamResponse>,
  config: ExamConfig,
  totalTimeSeconds: number
): ExamResult => {
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;
  let totalScoreEarned = 0;
  const maxScorePerQuestion = 10;
  const totalMaxScore = questions.length * maxScorePerQuestion;

  const responsesList: UserExamResponse[] = [];
  const breakdown: Record<BidangId, { total: number; correct: number; score: number }> = {
    operasional: { total: 0, correct: 0, score: 0 },
    keuangan: { total: 0, correct: 0, score: 0 },
    pemasaran: { total: 0, correct: 0, score: 0 },
    sdm: { total: 0, correct: 0, score: 0 },
  };

  const subjectPointsEarned: Record<BidangId, { earned: number; max: number }> = {
    operasional: { earned: 0, max: 0 },
    keuangan: { earned: 0, max: 0 },
    pemasaran: { earned: 0, max: 0 },
    sdm: { earned: 0, max: 0 },
  };

  const isMultipleChoiceMode =
    config.mode === 'pilihan_ganda' &&
    config.answerType !== 'manual_input' &&
    config.answerType !== 'voice_input';

  for (const q of questions) {
    const userResp = responses[q.id];
    breakdown[q.bidangId].total += 1;
    subjectPointsEarned[q.bidangId].max += maxScorePerQuestion;

    const hasAnswer = isMultipleChoiceMode
      ? Boolean(userResp?.userAnswer)
      : Boolean(userResp?.userNotesOrAudio?.trim() || userResp?.userAnswer);

    if (!userResp || !hasAnswer) {
      unansweredCount += 1;
      responsesList.push({
        questionId: q.id,
        isCorrect: false,
        scoreEarned: 0,
        maxScore: maxScorePerQuestion,
        matchPercentage: 0,
        matchedKeywords: [],
        partialKeywords: [],
        keywordMatchRatio: 0,
        timeSpentSeconds: userResp?.timeSpentSeconds || 0,
      });
      continue;
    }

    if (isMultipleChoiceMode) {
      const isCorrect = userResp.userAnswer === q.kunciJawaban;
      const scoreEarned = isCorrect ? maxScorePerQuestion : 0;
      const matchPercentage = isCorrect ? 100 : 0;

      if (isCorrect) {
        correctCount += 1;
        breakdown[q.bidangId].correct += 1;
      } else {
        wrongCount += 1;
      }

      totalScoreEarned += scoreEarned;
      subjectPointsEarned[q.bidangId].earned += scoreEarned;

      responsesList.push({
        ...userResp,
        scoreEarned,
        maxScore: maxScorePerQuestion,
        matchPercentage,
        matchedKeywords: isCorrect ? q.kataKunciUtama : [],
        partialKeywords: [],
        keywordMatchRatio: isCorrect ? 1 : 0,
        isCorrect,
      });
    } else {
      // Ujian Tertulis (Manual text input) or Ujian Lisan (Voice STT transcript input)
      const inputContent = userResp.userNotesOrAudio || userResp.userAnswer || '';
      const evalResult = evaluateBilingualSimilarity(
        inputContent,
        q,
        userResp.selfAssessedScore,
        maxScorePerQuestion
      );

      if (evalResult.isCorrect) {
        correctCount += 1;
        breakdown[q.bidangId].correct += 1;
      } else {
        wrongCount += 1;
      }

      totalScoreEarned += evalResult.scoreEarned;
      subjectPointsEarned[q.bidangId].earned += evalResult.scoreEarned;

      responsesList.push({
        ...userResp,
        scoreEarned: evalResult.scoreEarned,
        maxScore: maxScorePerQuestion,
        matchPercentage: evalResult.matchPercentage,
        matchedKeywords: evalResult.matchedKeywords,
        partialKeywords: evalResult.partialKeywords,
        keywordMatchRatio: evalResult.keywordMatchRatio,
        synonymHighlights: evalResult.synonymHighlights,
        structuralFeedback: evalResult.structuralFeedback,
        isCorrect: evalResult.isCorrect,
      });
    }
  }

  // Calculate percentage breakdown per subject
  for (const key of Object.keys(breakdown) as BidangId[]) {
    const pts = subjectPointsEarned[key];
    breakdown[key].score = pts.max > 0 ? Math.round((pts.earned / pts.max) * 100) : 0;
  }

  const finalScore = calculateScore(totalScoreEarned, totalMaxScore);
  const grade = determineGrade(finalScore);
  const passed = finalScore >= PASSING_SCORE_THRESHOLD;

  return {
    id: generateUniqueId('result'),
    timestamp: Date.now(),
    config,
    totalQuestions: questions.length,
    correctAnswers: correctCount,
    wrongAnswers: wrongCount,
    unanswered: unansweredCount,
    score: finalScore,
    grade,
    passed,
    totalTimeSeconds,
    responses: responsesList,
    breakdownPerBidang: breakdown,
  };
};

// ============================================================================
// 3. State Management & Lifecycle Ujian (useExamStore)
// ============================================================================

export interface ExamState {
  // Configuration
  config: ExamConfig;
  setConfig: (config: Partial<ExamConfig>) => void;
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: (open: boolean) => void;
  isConfirmSubmitOpen: boolean;
  setIsConfirmSubmitOpen: (open: boolean) => void;

  // Active Session
  isExamActive: boolean;
  isExamFinished: boolean;
  currentQuestionIndex: number;
  activeQuestions: ExamQuestion[];
  responses: Record<string, UserExamResponse>;
  timeRemainingSeconds: number;
  totalTimeSeconds: number;
  lastResult: ExamResult | null;
  history: ExamResult[];
  resultSource: 'exam' | 'history';

  // Lock countdown state for answer locking
  lockingKey: 'A' | 'B' | 'C' | 'D' | null;
  lockCountdown: number;
  setLockingKey: (key: 'A' | 'B' | 'C' | 'D' | null) => void;
  setLockCountdown: (count: number | ((prev: number) => number)) => void;
  cancelLock: () => void;

  // Mobile drawer collapse state
  isMobileExpanded: boolean;
  setIsMobileExpanded: (open: boolean) => void;

  // Actions
  startNewExam: (customConfig?: Partial<ExamConfig>) => void;
  answerQuestion: (questionId: string, answer: 'A' | 'B' | 'C' | 'D') => void;
  recordOralResponse: (questionId: string, notes: string, score?: number) => void;
  setCurrentQuestionIndex: (index: number) => void;
  decrementTimer: () => void;
  submitExam: () => ExamResult;
  resetExam: () => void;
  loadHistory: () => Promise<void>;
  clearHistory: () => void;
  deleteHistoryItem: (id: string) => void;
  viewResult: (result: ExamResult, source?: 'exam' | 'history') => void;
}

const DEFAULT_CONFIG: ExamConfig = {
  mode: 'pilihan_ganda',
  selectedBidang: 'semua',
  selectedBidangs: ['operasional', 'keuangan', 'pemasaran', 'sdm'],
  totalQuestions: 10,
  durationMinutes: 15,
  randomize: true,
  questionDeliveryMode: 'text',
  answerType: 'pilihan_ganda',
};

let examStartTimestamp: number | null = null;

const getInitialActiveSession = () => {
  const saved = safeLocalStorage.get<any>('ujikom_active_session', null);
  if (!saved || !saved.isExamActive || !saved.startTimestamp) {
    return null;
  }
  const totalAllocatedSec = (saved.config?.durationMinutes || DEFAULT_CONFIG.durationMinutes) * 60;
  const elapsedSec = Math.floor((Date.now() - saved.startTimestamp) / 1000);
  const remaining = Math.max(0, totalAllocatedSec - elapsedSec);

  if (remaining <= 0) {
    safeLocalStorage.remove('ujikom_active_session');
    return null;
  }

  examStartTimestamp = saved.startTimestamp;
  return {
    config: saved.config,
    activeQuestions: saved.activeQuestions || [],
    currentQuestionIndex: saved.currentQuestionIndex || 0,
    responses: saved.responses || {},
    isExamActive: true,
    isExamFinished: false,
    timeRemainingSeconds: remaining,
    totalTimeSeconds: elapsedSec,
    lastResult: null,
    resultSource: 'exam' as const,
  };
};

const initialSession = getInitialActiveSession();

export const useExamStore = create<ExamState>((set, get) => ({
  config: initialSession?.config || DEFAULT_CONFIG,
  setConfig: (newConfig) =>
    set((state) => ({ config: { ...state.config, ...newConfig } })),
  isSettingsModalOpen: false,
  setIsSettingsModalOpen: (open) => set({ isSettingsModalOpen: open }),
  isConfirmSubmitOpen: false,
  setIsConfirmSubmitOpen: (open) => {
    const prevOpen = get().isConfirmSubmitOpen;
    if (prevOpen && !open && examStartTimestamp) {
      // Resuming: adjust examStartTimestamp by the paused duration so timer continues seamlessly
      const { timeRemainingSeconds, config } = get();
      const totalSec = (config?.durationMinutes || 15) * 60;
      const elapsed = totalSec - timeRemainingSeconds;
      examStartTimestamp = Date.now() - elapsed * 1000;
    }
    set({ isConfirmSubmitOpen: open });
  },

  lockingKey: null,
  lockCountdown: 3,
  setLockingKey: (key) => set({ lockingKey: key, lockCountdown: 3 }),
  setLockCountdown: (count) =>
    set((state) => ({
      lockCountdown: typeof count === 'function' ? count(state.lockCountdown) : count,
    })),
  isMobileExpanded: false,
  setIsMobileExpanded: (open) => set({ isMobileExpanded: open }),
  cancelLock: () => {
    set((state) => {
      const currentQ = state.activeQuestions[state.currentQuestionIndex];
      if (!currentQ) {
        return { lockingKey: null, lockCountdown: 3 };
      }
      const updatedResponses = { ...state.responses };
      delete updatedResponses[currentQ.id];

      if (state.isExamActive && examStartTimestamp) {
        safeLocalStorage.set('ujikom_active_session', {
          config: state.config,
          activeQuestions: state.activeQuestions,
          currentQuestionIndex: state.currentQuestionIndex,
          responses: updatedResponses,
          startTimestamp: examStartTimestamp,
          isExamActive: true,
        });
      }

      return {
        lockingKey: null,
        lockCountdown: 3,
        responses: updatedResponses,
      };
    });
  },

  isExamActive: initialSession?.isExamActive || false,
  isExamFinished: initialSession?.isExamFinished || false,
  currentQuestionIndex: initialSession?.currentQuestionIndex || 0,
  activeQuestions: initialSession?.activeQuestions || [],
  responses: initialSession?.responses || {},
  timeRemainingSeconds: initialSession?.timeRemainingSeconds ?? DEFAULT_CONFIG.durationMinutes * 60,
  totalTimeSeconds: initialSession?.totalTimeSeconds || 0,
  lastResult: null,
  history: storageService.getExamResultsSync(),
  resultSource: initialSession?.resultSource || 'exam',

  startNewExam: (customConfig) => {
    const activeConfig = { ...get().config, ...customConfig };

    // Selected subjects list
    const targetBidangs: BidangId[] =
      activeConfig.selectedBidangs && activeConfig.selectedBidangs.length > 0
        ? activeConfig.selectedBidangs
        : activeConfig.selectedBidang && activeConfig.selectedBidang !== 'semua'
        ? [activeConfig.selectedBidang as BidangId]
        : ['operasional', 'keuangan', 'pemasaran', 'sdm'];

    // Collect questions per selected subject using topic-balanced random variation sampling
    let selectedQuestions: ExamQuestion[] = [];
    const questionsPerSubjectCount = Math.max(1, activeConfig.totalQuestions || 10);

    for (const bId of targetBidangs) {
      const subjectQs = sampleExamQuestions.filter((q) => q.bidangId === bId);

      // Group questions by topic (topikId) for hierarchical sampling
      const topicMap = new Map<string, ExamQuestion[]>();
      for (const q of subjectQs) {
        if (!topicMap.has(q.topikId)) {
          topicMap.set(q.topikId, []);
        }
        topicMap.get(q.topikId)!.push(q);
      }

      let topicIds = Array.from(topicMap.keys());
      if (activeConfig.randomize) {
        topicIds = shuffleArray(topicIds);
      }

      const pickedForSubject: ExamQuestion[] = [];
      const pickedQuestionIds = new Set<string>();

      // Cycle through topics and pick 1 random variation per topic to maximize diversity and minimize repetition
      let round = 0;
      while (pickedForSubject.length < questionsPerSubjectCount && pickedQuestionIds.size < subjectQs.length) {
        let addedInRound = false;
        for (const tId of topicIds) {
          if (pickedForSubject.length >= questionsPerSubjectCount) break;
          const availableInTopic = (topicMap.get(tId) || []).filter((q) => !pickedQuestionIds.has(q.id));
          if (availableInTopic.length > 0) {
            const chosen = activeConfig.randomize
              ? availableInTopic[Math.floor(Math.random() * availableInTopic.length)]
              : availableInTopic[0];
            pickedForSubject.push(chosen);
            pickedQuestionIds.add(chosen.id);
            addedInRound = true;
          }
        }
        round++;
        if (!addedInRound) break; // All available questions in this subject have been picked
      }

      selectedQuestions.push(...pickedForSubject);
    }

    if (selectedQuestions.length === 0) {
      selectedQuestions = sampleExamQuestions.slice(0, questionsPerSubjectCount * targetBidangs.length);
    }

    if (activeConfig.randomize) {
      selectedQuestions = shuffleArray(selectedQuestions);
    }

    const durationSec = activeConfig.durationMinutes * 60;
    examStartTimestamp = Date.now();

    const newSession = {
      config: activeConfig,
      activeQuestions: selectedQuestions,
      currentQuestionIndex: 0,
      responses: {},
      isExamActive: true,
      isExamFinished: false,
      timeRemainingSeconds: durationSec,
      totalTimeSeconds: 0,
      lastResult: null,
      resultSource: 'exam' as const,
    };

    // Save active session for crash recovery
    safeLocalStorage.set('ujikom_active_session', {
      ...newSession,
      startTimestamp: examStartTimestamp,
    });

    set(newSession);
  },

  answerQuestion: (questionId, answer) => {
    set((state) => {
      const updatedResponses = {
        ...state.responses,
        [questionId]: {
          questionId,
          userAnswer: answer,
          timeSpentSeconds: (state.responses[questionId]?.timeSpentSeconds || 0) + 1,
        },
      };

      if (state.isExamActive && examStartTimestamp) {
        safeLocalStorage.set('ujikom_active_session', {
          config: state.config,
          activeQuestions: state.activeQuestions,
          currentQuestionIndex: state.currentQuestionIndex,
          responses: updatedResponses,
          startTimestamp: examStartTimestamp,
          isExamActive: true,
        });
      }

      return { responses: updatedResponses };
    });
  },

  recordOralResponse: (questionId, notes, score) => {
    set((state) => {
      const updatedResponses = { ...state.responses };
      const trimmed = notes.trim();
      if (!trimmed && (score === undefined || score <= 0)) {
        delete updatedResponses[questionId];
      } else {
        updatedResponses[questionId] = {
          questionId,
          userNotesOrAudio: notes,
          ...(score !== undefined ? { selfAssessedScore: score } : {}),
          timeSpentSeconds: (state.responses[questionId]?.timeSpentSeconds || 0) + 1,
        };
      }

      if (state.isExamActive && examStartTimestamp) {
        safeLocalStorage.set('ujikom_active_session', {
          config: state.config,
          activeQuestions: state.activeQuestions,
          currentQuestionIndex: state.currentQuestionIndex,
          responses: updatedResponses,
          startTimestamp: examStartTimestamp,
          isExamActive: true,
        });
      }

      return { responses: updatedResponses };
    });
  },

  setCurrentQuestionIndex: (index) => {
    const state = get();
    if (index >= 0 && index < state.activeQuestions.length) {
      if (state.isExamActive && examStartTimestamp) {
        safeLocalStorage.set('ujikom_active_session', {
          config: state.config,
          activeQuestions: state.activeQuestions,
          currentQuestionIndex: index,
          responses: state.responses,
          startTimestamp: examStartTimestamp,
          isExamActive: true,
        });
      }
      set({ currentQuestionIndex: index, lockingKey: null, lockCountdown: 3 });
    }
  },

  decrementTimer: () => {
    const { isExamActive, isConfirmSubmitOpen, submitExam, config } = get();
    if (!isExamActive || isConfirmSubmitOpen) return;

    if (!examStartTimestamp) {
      examStartTimestamp = Date.now();
    }

    const totalAllocatedSec = config.durationMinutes * 60;
    const elapsedSec = Math.floor((Date.now() - examStartTimestamp) / 1000);
    const remaining = Math.max(0, totalAllocatedSec - elapsedSec);

    if (remaining <= 0) {
      submitExam();
    } else {
      set({
        timeRemainingSeconds: remaining,
        totalTimeSeconds: elapsedSec,
      });
    }
  },

  submitExam: () => {
    const state = get();
    const result = evaluateExamSession(
      state.activeQuestions,
      state.responses,
      state.config,
      state.totalTimeSeconds
    );

    // Save result to persistent storage
    storageService.saveExamResult(result);

    // Clear active session buffer
    safeLocalStorage.remove('ujikom_active_session');
    examStartTimestamp = null;

    set((s) => ({
      isExamActive: false,
      isExamFinished: true,
      lastResult: result,
      history: [result, ...s.history.filter((h) => h.id !== result.id)],
      resultSource: 'exam',
    }));

    return result;
  },

  resetExam: () => {
    safeLocalStorage.remove('ujikom_active_session');
    examStartTimestamp = null;
    set({
      isExamActive: false,
      isExamFinished: false,
      currentQuestionIndex: 0,
      activeQuestions: [],
      responses: {},
      lastResult: null,
      resultSource: 'exam',
    });
  },

  loadHistory: async () => {
    const list = await storageService.getAllExamResults();
    set({ history: list });
  },

  clearHistory: () => {
    safeLocalStorage.remove('exam_history');
    set({ history: [] });
  },

  deleteHistoryItem: (id: string) => {
    storageService.deleteExamResult(id);
    set((state) => ({
      history: state.history.filter((h) => h.id !== id),
    }));
  },

  viewResult: (result, source = 'history') => {
    set({
      lastResult: result,
      isExamFinished: true,
      isExamActive: false,
      resultSource: source,
    });
  },
}));
