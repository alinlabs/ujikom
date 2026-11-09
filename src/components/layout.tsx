import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header';
import { BottomNavigation } from './bottom-navigation';
import { Footer } from './footer';
import { ScrollToTop } from './scroll-to-top';
import { ModalPengaturan } from '../pages/test/config';
import { WelcomeModal } from './welcome-modal';
import { useExamStore } from '../stores/useExamStore';
import { useAppStore } from '../stores/useAppStore';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isSettingsModalOpen = useExamStore((state) => state.isSettingsModalOpen);
  const setIsSettingsModalOpen = useExamStore((state) => state.setIsSettingsModalOpen);

  const isWelcomeModalOpen = useAppStore((state) => state.isWelcomeModalOpen);
  const setIsWelcomeModalOpen = useAppStore((state) => state.setIsWelcomeModalOpen);
  const hasSeenWelcomeModal = useAppStore((state) => state.hasSeenWelcomeModal);

  // Rekam jejak halaman aktif di cache/storage agar saat refresh tetap berada di halaman yang sama
  useEffect(() => {
    if (location.pathname) {
      try {
        localStorage.setItem('ujikom_last_route', location.pathname + location.search);
        sessionStorage.setItem('ujikom_last_route', location.pathname + location.search);
      } catch {
        // ignore
      }
    }
  }, [location.pathname, location.search]);

  // Direct effect for instant scroll reset on route pathname change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  // Footer is displayed on Home Page (/) AND Daftar Pustaka Page (/materi/referensi)
  const isHomePage = location.pathname === '/';
  const isDaftarPustakaPage = location.pathname === '/materi/referensi';
  const isTestSesiPage = location.pathname === '/test/sesi';
  const isMateriIsiPage = location.pathname.includes('/materi/') && location.pathname.endsWith('/isi');
  const isTestHubPage = location.pathname === '/test' || location.pathname === '/test/pengaturan';
  const showFooter = isHomePage || isDaftarPustakaPage;

  const isMobileExpanded = useExamStore((state) => state.isMobileExpanded);

  return (
    <div className="h-screen max-h-screen flex flex-col bg-white text-slate-900 font-sans overflow-hidden">
      <ScrollToTop scrollRef={scrollContainerRef} />
      
      {/* Header is fixed at top, outside scroll container */}
      <div className="shrink-0 z-40 bg-white">
        <Header onOpenSettings={() => setIsSettingsModalOpen(true)} />
      </div>

      {/* Main scrollable body container strictly below header */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto min-h-0 flex flex-col">
        <main className={`flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isTestSesiPage
            ? 'py-4 sm:py-6 flex flex-col'
            : isMateriIsiPage
            ? 'pt-4 sm:pt-6 pb-32 sm:pb-24 lg:pb-24'
            : isTestHubPage
            ? 'pt-4 sm:pt-6 pb-28 sm:pb-28 lg:pb-28'
            : showFooter
            ? 'pt-4 sm:pt-6 pb-24 sm:pb-12 lg:pb-8'
            : 'pt-4 sm:pt-6 pb-24 sm:pb-16 lg:pb-12'
        }`}>
          {children || <Outlet />}
        </main>
        {/* Render Footer if on Home Page or Daftar Pustaka Page */}
        {showFooter && <Footer />}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />

      {/* Global Exam Configuration Modal */}
      <ModalPengaturan
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />

      {/* Welcoming Modal / Desktop Bottom Sheet */}
      <WelcomeModal
        isOpen={isWelcomeModalOpen}
        onClose={() => setIsWelcomeModalOpen(false)}
      />
    </div>
  );
};

