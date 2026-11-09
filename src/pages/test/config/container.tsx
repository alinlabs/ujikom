import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExamStore } from '../../../stores/useExamStore';
import { TestUtama } from '../utama';
import { ExamResult } from '../../../types/exam';

export const TestContainer: React.FC = () => {
  const navigate = useNavigate();
  const setIsSettingsModalOpen = useExamStore((state) => state.setIsSettingsModalOpen);
  const history = useExamStore((state) => state.history);
  const loadHistory = useExamStore((state) => state.loadHistory);
  const viewResult = useExamStore((state) => state.viewResult);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const handleOpenSettings = () => {
    setIsSettingsModalOpen(true);
  };

  const handleNavigateToHistory = () => {
    navigate('/test/riwayat');
  };

  const handleViewResult = (item: ExamResult) => {
    viewResult(item, 'exam');
    navigate('/test/hasil');
  };

  // Metrics calculation
  const totalExams = history.length;
  const passedExams = history.filter((h) => h.passed).length;
  const passRate = totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0;
  const highestScore = totalExams > 0 ? Math.max(...history.map((h) => h.score)) : 0;

  return (
    <TestUtama
      onOpenSettings={handleOpenSettings}
      onNavigateToHistory={handleNavigateToHistory}
      onViewResult={handleViewResult}
      totalExams={totalExams}
      passedExams={passedExams}
      passRate={passRate}
      highestScore={highestScore}
      history={history}
    />
  );
};
