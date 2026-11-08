import { create } from 'zustand';
import { ExamConfig, ExamQuestion, ExamResult, UserExamResponse } from '../types/exam';
import { sampleExamQuestions } from '../data/sampleQuestions';
import { evaluateExamSession } from '../pages/test/utils';
import { storageService } from '../services/storageService';
import { safeLocalStorage } from '../utils/storage';
import { shuffleArray } from '../utils/helpers';

interface ExamState {
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

  // Actions
  startNewExam: (customConfig?: Partial<ExamConfig>) => void;
  answerQuestion: (questionId: string, answer: 'A' | 'B' | 'C' | 'D') => void;
  recordOralResponse: (questionId: string, notes: string, score: number) => void;
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
  mode: 'tertulis',
  selectedBidang: 'semua',
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
  setIsConfirmSubmitOpen: (open) => set({ isConfirmSubmitOpen: open }),

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

    // Validate min 10 max 15 range
    activeConfig.totalQuestions = Math.min(15, Math.max(10, activeConfig.totalQuestions || 10));

    // Filter questions based on configuration
    let filtered = sampleExamQuestions.filter((q) => {
      // Filter by mode
      if (activeConfig.mode === 'tertulis') {
        if (q.type !== 'pilihan_ganda' && q.type !== 'studi_kasus') return false;
      } else {
        if (q.type !== 'tanya_jawab_lisan') return false;
      }

      // Filter by bidang
      if (activeConfig.selectedBidang !== 'semua') {
        if (q.bidangId !== activeConfig.selectedBidang) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      // Fallback: take all matching the mode
      filtered = sampleExamQuestions.filter((q) =>
        activeConfig.mode === 'tertulis'
          ? q.type === 'pilihan_ganda' || q.type === 'studi_kasus'
          : q.type === 'tanya_jawab_lisan'
      );
    }

    if (activeConfig.randomize) {
      filtered = shuffleArray(filtered);
    }

    const selectedQuestions = filtered.slice(0, activeConfig.totalQuestions);
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
      
      // Auto save active session buffer
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
      const updatedResponses = {
        ...state.responses,
        [questionId]: {
          questionId,
          userNotesOrAudio: notes,
          selfAssessedScore: score,
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
      set({ currentQuestionIndex: index });
    }
  },

  decrementTimer: () => {
    const { isExamActive, submitExam, config } = get();
    if (!isExamActive) return;

    if (!examStartTimestamp) {
      examStartTimestamp = Date.now();
    }

    const totalAllocatedSec = config.durationMinutes * 60;
    const elapsedSec = Math.floor((Date.now() - examStartTimestamp) / 1000);
    const remaining = Math.max(0, totalAllocatedSec - elapsedSec);

    if (remaining <= 0) {
      // Time is up, auto submit
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

