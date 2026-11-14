/**
 * Centralized Design Tokens for UJIKOM
 * Concept: Minimalist Academic Technology Platform
 * Primary background: White / Neutral (#FAFAFA & #FFFFFF)
 * Accent: Academic Blue (#1D4ED8 / #1E40AF) used with intentional restraint
 * Font: Inter globally
 */

export const DESIGN_TOKENS = {
  // 1. Color Palette
  colors: {
    // Dominant white & clean canvas
    background: '#FAFAFA',
    surface: '#FFFFFF',
    surfaceSubtle: '#F8FAFC',
    
    // Borders & Hairlines
    borderSubtle: '#E2E8F0',
    borderMuted: '#CBD5E1',
    borderActive: '#2563EB',
    
    // Typography Neutrals
    textPrimary: '#0F172A',   // Slate 900
    textSecondary: '#475569', // Slate 600
    textMuted: '#64748B',     // Slate 500
    textTertiary: '#94A3B8',  // Slate 400
    
    // Intentional Accent: Academic Blue
    accent: {
      primary: '#1D4ED8',      // Blue 700 - Primary actions & active tabs
      hover: '#1E40AF',        // Blue 800 - Interactive hover
      surface: '#EFF6FF',      // Blue 50 - Active subtle fill
      subtle: '#DBEAFE',       // Blue 100 - Active border tint
    },
    
    // Status (Quiet & functional, not candy-like)
    status: {
      success: '#15803D',      // Emerald 700
      successSurface: '#F0FDF4',
      successBorder: '#BBF7D0',
      danger: '#B91C1C',       // Rose 700
      dangerSurface: '#FEF2F2',
      dangerBorder: '#FECDD3',
      warning: '#B45309',      // Amber 700
      warningSurface: '#FFFBEB',
      warningBorder: '#FDE68A',
    },
    
    // 4 Module Indicators (Subtle, non-garish)
    modules: {
      operasional: '#0D9488',  // Teal
      keuangan: '#2563EB',     // Blue
      pemasaran: '#D97706',    // Amber
      sdm: '#6366F1',          // Indigo
    },
  },

  // 2. Typography Hierarchy (Inter font exclusively)
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    sizes: {
      xs: '0.75rem',    // 12px - metadata, badges
      sm: '0.875rem',   // 14px - secondary text, buttons, inputs
      base: '1rem',     // 16px - body reading prose, exam question text
      lg: '1.125rem',   // 18px - card titles, subtitles
      xl: '1.25rem',    // 20px - section headers
      '2xl': '1.5rem',  // 24px - module headers
      '3xl': '1.875rem',// 30px - page titles
      '4xl': '2.25rem', // 36px - hero headings
    },
    lineHeights: {
      tight: 1.2,
      snug: 1.35,
      normal: 1.5,
      relaxed: 1.65,    // For comfortable long reading
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },

  // 3. Spacing Scale (4px math)
  spacing: {
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px (minimum container padding)
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
  },

  // 4. Border Radius (Controlled, professional - no exaggerated pills)
  radius: {
    none: '0',
    sm: '0.25rem',   // 4px - inputs, small badges
    md: '0.375rem',  // 6px - buttons, tags
    lg: '0.5rem',    // 8px - cards, dialogs
    xl: '0.75rem',   // 12px - major cards
    '2xl': '1rem',   // 16px - hero containers
    full: '9999px',  // only for avatars or radio dots
  },

  // 5. Borders (Subtle hairline)
  borders: {
    hairline: '1px solid #E2E8F0',
    subtle: '1px solid #CBD5E1',
    active: '2px solid #2563EB',
  },

  // 6. Shadows (Minimal, unobtrusive - no thick heavy drops)
  shadows: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
  },

  // 7. Breakpoints (Mobile-first standard)
  breakpoints: {
    sm: '640px',   // Mobile landscape / phablets
    md: '768px',   // Tablets
    lg: '1024px',  // Laptops
    xl: '1280px',  // Desktops
    '2xl': '1536px',
  },
  
  // 8. Container Max Widths
  containers: {
    reading: '768px',    // Comfortable reading width for long text sessions
    exam: '896px',       // Focused exam slide width
    standard: '1152px',  // Standard page max-width
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
