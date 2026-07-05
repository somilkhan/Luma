/**
 * Luma Design System - Design Tokens
 * 
 * Reusable constants representing Luma's core design values.
 * Use these tokens in TypeScript/JavaScript code, or reference the corresponding
 * Tailwind classes in your TSX files.
 */

export const COLORS = {
  background: '#000000',
  primarySurface: '#0A0A0A',
  secondarySurface: '#111111',
  glassSurface: 'rgba(255, 255, 255, 0.05)',
  glassBorder: 'rgba(255, 255, 255, 0.08)',
  primaryText: '#FFFFFF',
  secondaryText: '#B3B3B3',
  mutedText: '#7A7A7A',
  divider: 'rgba(255, 255, 255, 0.06)',
  focusRing: 'rgba(255, 255, 255, 0.35)',
  success: '#22C55E',
  warning: '#FACC15',
  error: '#EF4444',
} as const;

export const RADIUS = {
  small: '0.25rem',      // 4px
  medium: '0.5rem',      // 8px
  large: '0.75rem',      // 12px
  extraLarge: '1rem',    // 16px
  pill: '9999px',
} as const;

export const SPACING = {
  xxs: '0.125rem',       // 2px
  xs: '0.25rem',         // 4px
  sm: '0.5rem',          // 8px
  md: '1rem',            // 16px
  lg: '1.5rem',          // 24px
  xl: '2rem',            // 32px
  xxl: '3rem',           // 48px
  xxxl: '4rem',          // 64px
  '4xl': '6rem',         // 96px
  '5xl': '8rem',         // 128px
} as const;

export const TYPOGRAPHY = {
  display: 'text-display',
  heading: 'text-heading',
  subheading: 'text-subheading',
  body: 'text-body',
  small: 'text-small',
  caption: 'text-caption',
} as const;

export const SHADOWS = {
  softSm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  softMd: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
  softLg: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
} as const;

export const BLUR = {
  small: '4px',
  medium: '8px',
  large: '16px',
} as const;

export const MOTION = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    fast: 'cubic-bezier(0.4, 0, 0.2, 1)',
    normal: 'cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  toast: 1060,
} as const;
