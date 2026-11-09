import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout';
import { SplashScreen } from '../components/splashscreen';
import { HomeContainer } from '../pages/home/container';
import { MateriContainer } from '../pages/materi/container';
import { ReferensiMateri } from '../pages/materi/referensi';
import { TestContainer } from '../pages/test/config';
import { SessionMetode } from '../pages/test/sesi';
import { Hasil } from '../pages/test/hasil';
import { RiwayatPage } from '../pages/test/riwayat';
import { useAppStore } from '../stores/useAppStore';
import { openMateriPdfInViewer } from '../services/materiPdfService';
import { allBidangMateri } from '../pages/materi/utils';

/**
 * Handler khusus rute /pdf:
 * Ketika dibuka melalui link https://ujikomprehensif.vercel.app/pdf,
 * otomatis membuka pratinjau dokumen PDF A4 lengkap dan langsung membersihkan URL
 * di address bar (auto correction/clear) kembali ke domain utama https://ujikomprehensif.vercel.app/
 */
const PdfRouteHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Buka viewer/download PDF materi A4 lengkap secara otomatis
    openMateriPdfInViewer(allBidangMateri);

    // 2. Auto-clear URL di address bar dari /pdf kembali ke domain utama "/"
    try {
      window.history.replaceState(null, '', '/');
    } catch {
      // ignore
    }
    navigate('/', { replace: true });
  }, [navigate]);

  return <HomeContainer />;
};

export const AppRouter: React.FC = () => {
  const hasSeenSplash = useAppStore((state) => state.hasSeenSplash);
  const setHasSeenSplash = useAppStore((state) => state.setHasSeenSplash);

  // If user hasn't seen splashscreen in this session, show it for 3.5 seconds
  if (!hasSeenSplash) {
    return <SplashScreen onComplete={() => setHasSeenSplash(true)} durationSeconds={3.5} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 1. Home */}
          <Route index element={<HomeContainer />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          {/* 2. Special /pdf Route (Auto opens PDF & auto clears URL bar to domain root) */}
          <Route path="pdf" element={<PdfRouteHandler />} />
          <Route path="pdf/*" element={<PdfRouteHandler />} />

          {/* 3. Materi Routes (bare /materi redirects to Home / per user request) */}
          <Route path="materi" element={<Navigate to="/" replace />} />
          <Route path="materi/referensi" element={<ReferensiMateri />} />
          <Route path="materi/:bidangId" element={<MateriContainer />} />
          <Route path="materi/:bidangId/:viewType" element={<MateriContainer />} />

          {/* 4. Test / Simulation Routes */}
          <Route path="test" element={<TestContainer />} />
          <Route path="test/pengaturan" element={<TestContainer />} />
          <Route path="test/riwayat" element={<RiwayatPage />} />
          <Route path="test/sesi" element={<SessionMetode />} />
          <Route path="test/hasil" element={<Hasil />} />
          <Route path="test/hasil/:id" element={<Hasil />} />

          {/* 5. Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
