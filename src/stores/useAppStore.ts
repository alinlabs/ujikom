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
}

// Check sessionStorage so within a session, the user is never repeatedly interrupted by splashscreen
const getInitialSplashState = (): boolean => {
  if (typeof window === 'undefined') return false;
  // If ?autostart=1 or ?skip_splash=1 in URL
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('autostart') === '1' || urlParams.get('skip_splash') === '1') {
    return true;
  }
  return sessionStorage.getItem('ujikom_splash_seen') === 'true';
};

export const useAppStore = create<AppState>((set) => ({
  hasSeenSplash: getInitialSplashState(),
  setHasSeenSplash: (seen: boolean) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('ujikom_splash_seen', seen ? 'true' : 'false');
    }
    set({ hasSeenSplash: seen });
  },
  activeNavTab: 'home',
  setActiveNavTab: (tab: string) => set({ activeNavTab: tab }),
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  selectedBidangFilter: null,
  setSelectedBidangFilter: (bidang: string | null) => set({ selectedBidangFilter: bidang }),
}));
