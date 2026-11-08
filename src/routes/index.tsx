import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

export const AppRouter: React.FC = () => {
  const hasSeenSplash = useAppStore((state) => state.hasSeenSplash);
  const setHasSeenSplash = useAppStore((state) => state.setHasSeenSplash);

  // If user hasn't seen splashscreen in this session, show it for 5 seconds
  if (!hasSeenSplash) {
    return <SplashScreen onComplete={() => setHasSeenSplash(true)} durationSeconds={5} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 1. Home */}
          <Route index element={<HomeContainer />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          {/* 2. Materi Routes (bare /materi redirects to Home / per user request) */}
          <Route path="materi" element={<Navigate to="/" replace />} />
          <Route path="materi/referensi" element={<ReferensiMateri />} />
          <Route path="materi/:bidangId" element={<MateriContainer />} />
          <Route path="materi/:bidangId/:viewType" element={<MateriContainer />} />

          {/* 3. Test / Simulation Routes */}
          <Route path="test" element={<TestContainer />} />
          <Route path="test/pengaturan" element={<TestContainer />} />
          <Route path="test/riwayat" element={<RiwayatPage />} />
          <Route path="test/sesi" element={<SessionMetode />} />
          <Route path="test/hasil" element={<Hasil />} />
          <Route path="test/hasil/:id" element={<Hasil />} />

          {/* 4. Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

