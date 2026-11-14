import { safeLocalStorage } from '../utils/storage';
import { ExamResult } from '../types/exam';

const DB_NAME = 'ujikom_indexeddb';
const DB_VERSION = 1;
const STORE_EXAM_RESULTS = 'exam_results';
const STORE_STUDY_PROGRESS = 'study_progress';

export class StorageService {
  private dbPromise: Promise<IDBDatabase> | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'indexedDB' in window) {
      this.initIndexedDB();
    }
  }

  private initIndexedDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      try {
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          if (!db.objectStoreNames.contains(STORE_EXAM_RESULTS)) {
            db.createObjectStore(STORE_EXAM_RESULTS, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(STORE_STUDY_PROGRESS)) {
            db.createObjectStore(STORE_STUDY_PROGRESS, { keyPath: 'id' });
          }
        };

        request.onsuccess = () => {
          resolve(request.result);
        };

        request.onerror = () => {
          console.warn('[StorageService] IndexedDB open error, falling back to LocalStorage', request.error);
          reject(request.error);
        };
      } catch (err) {
        console.warn('[StorageService] IndexedDB unavailable', err);
        reject(err);
      }
    });

    return this.dbPromise;
  }

  // --- Exam Results Methods ---
  async saveExamResult(result: ExamResult): Promise<void> {
    // Save to LocalStorage as quick sync buffer
    const existing = safeLocalStorage.get<ExamResult[]>('exam_history', []);
    const updated = [result, ...existing.filter((r) => r.id !== result.id)].slice(0, 50);
    safeLocalStorage.set('exam_history', updated);

    // Save to IndexedDB for robust persistent offline storage
    try {
      const db = await this.initIndexedDB();
      const tx = db.transaction(STORE_EXAM_RESULTS, 'readwrite');
      const store = tx.objectStore(STORE_EXAM_RESULTS);
      store.put(result);
    } catch {
      // Fallback already preserved in LocalStorage
    }
  }

  getExamResultsSync(): ExamResult[] {
    return safeLocalStorage.get<ExamResult[]>('exam_history', []);
  }

  async deleteExamResult(id: string): Promise<void> {
    const existing = safeLocalStorage.get<ExamResult[]>('exam_history', []);
    const updated = existing.filter((r) => r.id !== id);
    safeLocalStorage.set('exam_history', updated);

    try {
      const db = await this.initIndexedDB();
      const tx = db.transaction(STORE_EXAM_RESULTS, 'readwrite');
      const store = tx.objectStore(STORE_EXAM_RESULTS);
      store.delete(id);
    } catch {
      // Fallback already handled in LocalStorage
    }
  }

  async getAllExamResults(): Promise<ExamResult[]> {
    try {
      const db = await this.initIndexedDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_EXAM_RESULTS, 'readonly');
        const store = tx.objectStore(STORE_EXAM_RESULTS);
        const req = store.getAll();
        req.onsuccess = () => {
          const results = req.result as ExamResult[];
          if (results && results.length > 0) {
            resolve(results.sort((a, b) => b.timestamp - a.timestamp));
          } else {
            resolve(this.getExamResultsSync());
          }
        };
        req.onerror = () => resolve(this.getExamResultsSync());
      });
    } catch {
      return this.getExamResultsSync();
    }
  }

  async getExamResultById(id: string): Promise<ExamResult | undefined> {
    const list = await this.getAllExamResults();
    return list.find((item) => item.id === id);
  }

  // Bookmark / Completed Topics
  getCompletedTopicIds(): string[] {
    return safeLocalStorage.get<string[]>('completed_topics', []);
  }

  toggleTopicCompleted(topicId: string): string[] {
    const list = this.getCompletedTopicIds();
    const isCompleted = list.includes(topicId);
    const updated = isCompleted ? list.filter((id) => id !== topicId) : [...list, topicId];
    safeLocalStorage.set('completed_topics', updated);
    return updated;
  }
}

export const storageService = new StorageService();
