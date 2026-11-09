/**
 * Utility helpers
 */

export const generateUniqueId = (prefix = 'ujikom'): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const clamp = (val: number, min: number, max: number): number => {
  return Math.min(Math.max(val, min), max);
};
