/**
 * Design Tokens & Theme Configuration for UJIKOM
 * Concept: Minimalist Academic Technology Platform
 */

import { DESIGN_TOKENS } from './tokens';

export { DESIGN_TOKENS };

export const THEME = {
  colors: {
    primary: {
      DEFAULT: DESIGN_TOKENS.colors.accent.primary,
      light: '#3B82F6',
      dark: '#1E293B',
      surface: DESIGN_TOKENS.colors.accent.surface,
    },
    accent: {
      gold: '#D97706',
      goldLight: '#FEF3C7',
      goldHover: '#B45309',
    },
    bidang: DESIGN_TOKENS.colors.modules,
  },
  typography: DESIGN_TOKENS.typography,
  spacing: DESIGN_TOKENS.spacing,
  radius: DESIGN_TOKENS.radius,
  shadows: DESIGN_TOKENS.shadows,
};
