/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppRouter } from './routes';
import { AppProvider } from './contexts/AppContext';

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
