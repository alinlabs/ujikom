import { create } from 'zustand';

interface AppState {
  hasSeenSplash: boolean;
  setHasSeenSplash: (seen: boolean) => void;
  activeNavTab: string;
  setActiveNavTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedBidangFilter: string | null;
  setSelectedBidangFilter: (bidang: string | null) => void;
  isWelcomeModalOpen: boolean;
  setIsWelcomeModalOpen: (open: boolean) => void;
  hasSeenWelcomeModal: boolean;
  setHasSeenWelcomeModal: (seen: boolean) => void;
  isReload: boolean;
}

/**
 * Deteksi cerdas apakah halaman saat ini adalah hasil dari REFRESH (Reload/F5)
 * versus KUNJUNGAN MASUK BARU / KEMBALI MASUK KE WEB.
 */
export const checkIsPageReload = (): boolean => {
  if (typeof window === 'undefined') return false;

  // 1. Cek parameter skip eksplisit jika ada
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('skip_splash') === '1' || urlParams.get('autostart') === '1') {
    return true;
  }

  // 2. Cek flag reload dari event beforeunload
  let reloadFlag = false;
  try {
    reloadFlag = sessionStorage.getItem('ujikom_is_reloading') === 'true';
    sessionStorage.removeItem('ujikom_is_reloading');
  } catch {
    // ignore
  }
  if (reloadFlag) return true;

  // 3. Cek standar W3C Navigation Timing API
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries && navEntries.length > 0) {
      return (navEntries[0] as PerformanceNavigationTiming).type === 'reload';
    }
    return (window.performance as any)?.navigation?.type === 1;
  } catch {
    return false;
  }
};

// Pasang listener sebelum halaman di-reload untuk merekam status reload dan rute saat ini
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    try {
      sessionStorage.setItem('ujikom_is_reloading', 'true');
      localStorage.setItem('ujikom_last_route', window.location.pathname + window.location.search);
      sessionStorage.setItem('ujikom_last_route', window.location.pathname + window.location.search);
    } catch {
      // ignore
    }
  });
}

const isReloaded = checkIsPageReload();

export const useAppStore = create<AppState>((set) => ({
  // Jika refresh: lewati splashscreen. Jika kembali masuk ke web: jalankan splashscreen (false).
  hasSeenSplash: isReloaded,
  setHasSeenSplash: (seen: boolean) => set({ hasSeenSplash: seen }),
  activeNavTab: 'home',
  setActiveNavTab: (tab: string) => set({ activeNavTab: tab }),
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  selectedBidangFilter: null,
  setSelectedBidangFilter: (bidang: string | null) => set({ selectedBidangFilter: bidang }),
  // Jika refresh: jangan munculkan modal. Jika masuk baru: modal akan dibuka setelah splash screen selesai.
  isWelcomeModalOpen: false,
  setIsWelcomeModalOpen: (open: boolean) => set({ isWelcomeModalOpen: open }),
  hasSeenWelcomeModal: isReloaded,
  setHasSeenWelcomeModal: (seen: boolean) => set({ hasSeenWelcomeModal: seen }),
  isReload: isReloaded,
}));
