import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header';
import { BottomNavigation } from './bottom-navigation';
import { Footer } from './footer';
import { ScrollToTop } from './scroll-to-top';
import { ModalPengaturan } from '../pages/test/config';
import { useExamStore } from '../stores/useExamStore';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isSettingsModalOpen = useExamStore((state) => state.isSettingsModalOpen);
  const setIsSettingsModalOpen = useExamStore((state) => state.setIsSettingsModalOpen);

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
  const showFooter = isHomePage || isDaftarPustakaPage;

  return (
    <div className="h-screen max-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 font-sans overflow-hidden">
      <ScrollToTop scrollRef={scrollContainerRef} />
      
      {/* Header is fixed at top, outside scroll container */}
      <div className="shrink-0 z-40 bg-white">
        <Header onOpenSettings={() => setIsSettingsModalOpen(true)} />
      </div>

      {/* Main scrollable body container strictly below header */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto min-h-0 flex flex-col">
        <main className={`flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 lg:py-8 ${
          isTestSesiPage
            ? 'pb-36 sm:pb-32'
            : isMateriIsiPage
            ? 'pb-36 sm:pb-20'
            : showFooter
            ? 'pb-24 sm:pb-8'
            : 'pb-24'
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
    </div>
  );
};

