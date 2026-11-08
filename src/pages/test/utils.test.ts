import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateScore, determineGrade, evaluateExamSession } from './utils';
import { formatDurationSeconds, formatScorePercentage } from '../../utils/formatters';
import { searchMateri, getTotalPokokBahasanCount } from '../materi/utils';
import { ExamConfig, ExamQuestion, UserExamResponse } from '../../types/exam';

test('calculateScore calculates rounded percentages accurately', () => {
  assert.equal(calculateScore(10, 10), 100);
  assert.equal(calculateScore(7, 10), 70);
  assert.equal(calculateScore(1, 3), 33);
  assert.equal(calculateScore(0, 10), 0);
  assert.equal(calculateScore(5, 0), 0); // Zero division guard
});

test('determineGrade classifies academic grades correctly according to academic standards', () => {
  assert.equal(determineGrade(95), 'A');
  assert.equal(determineGrade(85), 'A');
  assert.equal(determineGrade(84), 'B+');
  assert.equal(determineGrade(78), 'B+');
  assert.equal(determineGrade(77), 'B');
  assert.equal(determineGrade(70), 'B');
  assert.equal(determineGrade(69), 'C');
  assert.equal(determineGrade(60), 'C');
  assert.equal(determineGrade(59), 'TL');
  assert.equal(determineGrade(0), 'TL');
});

test('formatDurationSeconds handles zero and multi-digit times', () => {
  assert.equal(formatDurationSeconds(0), '00:00');
  assert.equal(formatDurationSeconds(65), '01:05');
  assert.equal(formatDurationSeconds(900), '15:00');
  assert.equal(formatDurationSeconds(-10), '00:00'); // Negative guard
});

test('materi syllabus contains all 46 officially registered topics', () => {
  const total = getTotalPokokBahasanCount();
  assert.equal(total, 46); // 15 Operasional + 14 Keuangan + 9 Pemasaran + 8 SDM = 46
});

test('searchMateri successfully locates keywords in titles and descriptions', () => {
  const resultsEOQ = searchMateri('EOQ');
  assert.ok(resultsEOQ.length > 0);
  assert.equal(resultsEOQ[0].bidang.id, 'operasional');

  const resultsBEP = searchMateri('Break Even');
  assert.ok(resultsBEP.length > 0);
  assert.equal(resultsBEP[0].bidang.id, 'keuangan');
});

test('evaluateExamSession computes correct breakdown and pass status', () => {
  const mockConfig: ExamConfig = {
    mode: 'tertulis',
    selectedBidang: 'semua',
    totalQuestions: 2,
    durationMinutes: 10,
    randomize: false,
    questionDeliveryMode: 'text',
    answerType: 'pilihan_ganda',
  };

  const mockQuestions: ExamQuestion[] = [
    {
      id: 'q1',
      bidangId: 'operasional',
      topikId: 'mo-1',
      type: 'pilihan_ganda',
      pertanyaan: 'Soal 1',
      kunciJawaban: 'A',
      pembahasan: '',
      referensiBuku: '',
    },
    {
      id: 'q2',
      bidangId: 'keuangan',
      topikId: 'mk-1',
      type: 'pilihan_ganda',
      pertanyaan: 'Soal 2',
      kunciJawaban: 'B',
      pembahasan: '',
      referensiBuku: '',
    },
  ];

  const mockResponses: Record<string, UserExamResponse> = {
    q1: { questionId: 'q1', userAnswer: 'A', timeSpentSeconds: 20 },
    q2: { questionId: 'q2', userAnswer: 'B', timeSpentSeconds: 30 },
  };

  const result = evaluateExamSession(mockQuestions, mockResponses, mockConfig, 50);

  assert.equal(result.totalQuestions, 2);
  assert.equal(result.correctAnswers, 2);
  assert.equal(result.score, 100);
  assert.equal(result.grade, 'A');
  assert.equal(result.passed, true);
  assert.equal(result.breakdownPerBidang.operasional.correct, 1);
  assert.equal(result.breakdownPerBidang.keuangan.correct, 1);
});

test('evaluateExamSession evaluates manual input text and keyword matching correctly', () => {
  const mockConfig: ExamConfig = {
    mode: 'tertulis',
    selectedBidang: 'semua',
    totalQuestions: 2,
    durationMinutes: 10,
    randomize: false,
    questionDeliveryMode: 'text',
    answerType: 'manual_input',
  };

  const mockQuestions: ExamQuestion[] = [
    {
      id: 'q1',
      bidangId: 'operasional',
      topikId: 'mo-1',
      type: 'pilihan_ganda',
      pertanyaan: 'Soal 1',
      options: [
        { key: 'A', text: 'Level Strategy' },
        { key: 'B', text: 'Chase Strategy' },
      ],
      kunciJawaban: 'A',
      pembahasan: '',
      referensiBuku: '',
    },
    {
      id: 'q2',
      bidangId: 'keuangan',
      topikId: 'mk-1',
      type: 'pilihan_ganda',
      pertanyaan: 'Soal 2',
      options: [
        { key: 'A', text: 'Current Ratio = 1.5' },
        { key: 'B', text: 'Current Ratio = 2.5' },
      ],
      kunciJawaban: 'B',
      pembahasan: '',
      referensiBuku: '',
    },
  ];

  const mockResponses: Record<string, UserExamResponse> = {
    q1: { questionId: 'q1', userNotesOrAudio: 'Level Strategy', timeSpentSeconds: 15 },
    q2: { questionId: 'q2', userNotesOrAudio: 'B. Current Ratio 2.5', timeSpentSeconds: 25 },
  };

  const result = evaluateExamSession(mockQuestions, mockResponses, mockConfig, 40);
  assert.equal(result.correctAnswers, 2);
  assert.equal(result.score, 100);
  assert.equal(result.passed, true);
});

test('sampleExamQuestions has 27 questions with difficulty, indicators, and valid PDF page references', async () => {
  const { sampleExamQuestions } = await import('../../data/sampleQuestions.ts');
  assert.equal(sampleExamQuestions.length, 27);

  const operasionalQs = sampleExamQuestions.filter(q => q.bidangId === 'operasional');
  const keuanganQs = sampleExamQuestions.filter(q => q.bidangId === 'keuangan');
  const pemasaranQs = sampleExamQuestions.filter(q => q.bidangId === 'pemasaran');
  const sdmQs = sampleExamQuestions.filter(q => q.bidangId === 'sdm');

  assert.equal(operasionalQs.length, 7);
  assert.equal(keuanganQs.length, 7);
  assert.equal(pemasaranQs.length, 6);
  assert.equal(sdmQs.length, 7);

  sampleExamQuestions.forEach(q => {
    assert.ok(['mudah', 'sedang', 'sulit'].includes(q.tingkatKesulitan || ''), `Invalid difficulty on ${q.id}`);
    assert.ok(q.indikatorPenilaian && q.indikatorPenilaian.length > 5, `Missing indicator on ${q.id}`);
    assert.ok(q.halamanPdf && q.halamanPdf.startsWith('Hal.'), `Missing or invalid page reference on ${q.id}`);
    assert.ok(q.referensiBuku && q.referensiBuku.length > 5, `Missing textbook reference on ${q.id}`);
  });
});
