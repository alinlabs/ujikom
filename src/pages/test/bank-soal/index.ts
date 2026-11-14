import { ExamQuestion } from '../../../types/exam';
import { operasionalQuestions } from './operasional';
import { keuanganQuestions } from './keuangan';
import { pemasaranQuestions } from './pemasaran';
import { sdmQuestions } from './sdm';

export * from './operasional';
export * from './keuangan';
export * from './pemasaran';
export * from './sdm';

export const sampleExamQuestions: ExamQuestion[] = [
  ...operasionalQuestions,
  ...keuanganQuestions,
  ...pemasaranQuestions,
  ...sdmQuestions,
];
