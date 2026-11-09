/**
 * Safe LocalStorage abstraction with typed serialization and error catching
 */

const STORAGE_PREFIX = 'ujikom_app_';

export const safeLocalStorage = {
  get<T>(key: string, defaultValue: T): T {
    try {
      const item = window.localStorage.getItem(STORAGE_PREFIX + key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.warn(`[safeLocalStorage] Error reading key "${key}":`, error);
      return defaultValue;
    }
  },

  set<T>(key: string, value: T): void {
    try {
      window.localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (error) {
      console.warn(`[safeLocalStorage] Error saving key "${key}":`, error);
    }
  },

  remove(key: string): void {
    try {
      window.localStorage.removeItem(STORAGE_PREFIX + key);
    } catch (error) {
      console.warn(`[safeLocalStorage] Error removing key "${key}":`, error);
    }
  },

  clearAll(): void {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith(STORAGE_PREFIX)) {
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach((k) => window.localStorage.removeItem(k));
    } catch (error) {
      console.warn('[safeLocalStorage] Error clearing storage:', error);
    }
  },
};
