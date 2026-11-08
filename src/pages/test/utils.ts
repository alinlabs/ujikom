import { BidangId } from '../../types/materi';
import { ExamConfig, ExamQuestion, ExamResult, UserExamResponse } from '../../types/exam';
import { generateUniqueId } from '../../utils/helpers';

export const PASSING_SCORE_THRESHOLD = 70; // Standar kelulusan Ujian Komprehensif S1 Manajemen

export const calculateScore = (correct: number, total: number): number => {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
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

  const responsesList: UserExamResponse[] = [];
  const breakdown: Record<BidangId, { total: number; correct: number; score: number }> = {
    operasional: { total: 0, correct: 0, score: 0 },
    keuangan: { total: 0, correct: 0, score: 0 },
    pemasaran: { total: 0, correct: 0, score: 0 },
    sdm: { total: 0, correct: 0, score: 0 },
  };

  for (const q of questions) {
    const userResp = responses[q.id];
    breakdown[q.bidangId].total += 1;

    const hasAnswer = Boolean(
      userResp?.userAnswer ||
        userResp?.userNotesOrAudio?.trim() ||
        userResp?.selfAssessedScore !== undefined
    );

    if (!userResp || !hasAnswer) {
      unansweredCount += 1;
      responsesList.push({
        questionId: q.id,
        isCorrect: false,
        timeSpentSeconds: userResp?.timeSpentSeconds || 0,
      });
      continue;
    }

    if (config.mode === 'tertulis') {
      let isCorrect = false;
      if (userResp.userAnswer) {
        isCorrect = userResp.userAnswer === q.kunciJawaban;
      } else if (userResp.userNotesOrAudio) {
        const rawText = userResp.userNotesOrAudio.trim().toUpperCase();
        if (
          q.kunciJawaban &&
          (rawText === q.kunciJawaban ||
            rawText.startsWith(`${q.kunciJawaban}.`) ||
            rawText.startsWith(`${q.kunciJawaban} `))
        ) {
          isCorrect = true;
        } else if (q.options && q.kunciJawaban) {
          const correctOpt = q.options.find((o) => o.key === q.kunciJawaban);
          if (correctOpt) {
            const cleanOptText = correctOpt.text.toLowerCase();
            const cleanUserText = userResp.userNotesOrAudio.toLowerCase();
            const numbers = cleanOptText.match(/\d+([.,]\d+)?/g);
            const userNumbers = cleanUserText.match(/\d+([.,]\d+)?/g);
            const numMatch =
              numbers && userNumbers && numbers.some((n) => userNumbers.includes(n));
            const subStrMatch =
              cleanOptText.length > 5 &&
              (cleanUserText.includes(cleanOptText.slice(0, 15)) ||
                cleanOptText.includes(cleanUserText));
            isCorrect = Boolean(numMatch || subStrMatch);
          }
        }
      }

      if (isCorrect) {
        correctCount += 1;
        breakdown[q.bidangId].correct += 1;
      } else {
        wrongCount += 1;
      }
      responsesList.push({
        ...userResp,
        isCorrect,
      });
    } else {
      // Ujian Lisan: based on self-evaluation or rubric keyword matching
      let isCorrect = false;
      let matchedKeywords: string[] = [];

      if (q.rubrikPenilaianLisan?.kataKunciWajib && userResp.userNotesOrAudio) {
        const text = userResp.userNotesOrAudio.toLowerCase();
        matchedKeywords = q.rubrikPenilaianLisan.kataKunciWajib.filter((kw) =>
          text.includes(kw.toLowerCase())
        );
      }

      const selfScore = userResp.selfAssessedScore ?? 0;
      if (matchedKeywords.length >= 2 || selfScore >= PASSING_SCORE_THRESHOLD) {
        isCorrect = true;
      }

      if (isCorrect) {
        correctCount += 1;
        breakdown[q.bidangId].correct += 1;
      } else {
        wrongCount += 1;
      }

      responsesList.push({
        ...userResp,
        matchedKeywords,
        isCorrect,
      });
    }
  }

  // Calculate percentage breakdown
  for (const key of Object.keys(breakdown) as BidangId[]) {
    const b = breakdown[key];
    b.score = b.total > 0 ? Math.round((b.correct / b.total) * 100) : 0;
  }

  const finalScore = calculateScore(correctCount, questions.length);
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
