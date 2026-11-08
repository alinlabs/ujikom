import { useEffect } from 'react';
import { useExamStore } from '../stores/useExamStore';

export const useExamSession = () => {
  const isExamActive = useExamStore((state) => state.isExamActive);
  const decrementTimer = useExamStore((state) => state.decrementTimer);
  const timeRemainingSeconds = useExamStore((state) => state.timeRemainingSeconds);
  const currentQuestionIndex = useExamStore((state) => state.currentQuestionIndex);
  const activeQuestions = useExamStore((state) => state.activeQuestions);
  const responses = useExamStore((state) => state.responses);
  const submitExam = useExamStore((state) => state.submitExam);

  useEffect(() => {
    if (!isExamActive) return;

    const interval = setInterval(() => {
      decrementTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamActive, decrementTimer]);

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const currentResponse = currentQuestion ? responses[currentQuestion.id] : undefined;
  const answeredCount = Object.keys(responses).length;
  const progressPercentage =
    activeQuestions.length > 0 ? (answeredCount / activeQuestions.length) * 100 : 0;

  return {
    isExamActive,
    timeRemainingSeconds,
    currentQuestionIndex,
    currentQuestion,
    currentResponse,
    activeQuestions,
    answeredCount,
    progressPercentage,
    submitExam,
  };
};
