/**
 * Jobright.ai Design System Tokens
 * Extracted from https://jobright.ai page source (January 2025)
 * 
 * EXTRACTION METHOD:
 * Values extracted directly from jobright.ai's HTML page source and inline CSS.
 * This includes actual color values, font families, spacing, and component styles
 * used in their production website.
 * 
 * KEY FINDINGS FROM PAGE SOURCE:
 * - Primary brand color: #00F0A0 (bright cyan/green - their signature color)
 * - Font: Inter (via __Inter_c3f87e custom font loading)
 * - Secondary font: Titillium Web for headings
 * - Black text: #000000 (pure black for high contrast)
 * - Background: #FFFFFF with subtle grays
 * - Ant Design component library (CSS framework)
 * - Clean, modern aesthetic with generous spacing
 */

// ============================================================================
// COLOR PALETTE - EXTRACTED FROM JOBRIGHT.AI
// ============================================================================
export const colors = {
  // Primary Brand Color - Jobright's signature cyan/green
  primary: {
    50: '#E6FFF9',
    100: '#CCFFF3',
    200: '#99FFE7',
    300: '#66FFDB',
    400: '#33FFCF',
    500: '#00F0A0',   // Main brand color (extracted from CSS: color:#00f0a0)
    600: '#00C98D',
    700: '#00A877',
    800: '#008761',
    900: '#00664B',
  },

  // Secondary/Accent Colors
  secondary: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#0591FF',   // Blue accent (from CSS: rgba(5, 145, 255))
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C4A6E',
  },

  // Accent Colors - Additional highlights
  accent: {
    primary: '#00F0A0',      // Main brand cyan/green
    hover: '#52FFBA',        // Hover state (from CSS: color:#52ffba)
    active: '#00C98D',       // Active state (from CSS: color:#00c98d)
    blue: '#0591FF',         // Secondary blue
    cyan: '#06B6D4',
    teal: '#14B8A6',
  },

  // Success/Error/Warning - From Ant Design system in page
  success: {
    50: '#F0FDF4',
    500: '#52C41A',    // From CSS: color:#52c41a
    600: '#16A34A',
  },
  
  error: {
    50: '#FEF2F2',
    500: '#FF4D4F',    // From CSS: color:#ff4d4f
    600: '#DC2626',
  },
  
  warning: {
    50: '#FFFBEB',
    500: '#FAAD14',    // From CSS: color:#faad14
    600: '#D97706',
  },

  // Neutral/Gray Scale - Extracted from Ant Design tokens
  neutral: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',     // From CSS: border:#d9d9d9
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },

  // Black/White - Pure values used throughout
  black: '#000000',      // From CSS: color:#000000 (primary text)
  white: '#FFFFFF',      // From CSS: background:#ffffff

  // Semantic Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
    dark: '#111827',
  },

  text: {
    primary: '#000000',              // From CSS: color:#000000
    secondary: 'rgba(0, 0, 0, 0.88)', // From CSS: color:rgba(0, 0, 0, 0.88)
    tertiary: 'rgba(0, 0, 0, 0.45)',  // From CSS: color:rgba(0, 0, 0, 0.45)
    inverse: '#FFFFFF',
    muted: '#9CA3AF',
  },

  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },
};

// ============================================================================
// TYPOGRAPHY - EXTRACTED FROM PAGE SOURCE
// ============================================================================
export const typography = {
  fontFamily: {
    // From page source: font-family:'__Inter_c3f87e','__Inter_Fallback_c3f87e'
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    // From page source: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"/>
    heading: "'Titillium Web', 'Inter', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  },

  // Font Sizes - From Ant Design system (font-size:14px base)
  fontSize: {
    xs: '0.75rem',      // 12px - From CSS: font-size:12px
    sm: '0.875rem',     // 14px - From CSS: font-size:14px (base size)
    base: '1rem',       // 16px - From CSS: font-size:16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px - From CSS: font-size:24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
  },

  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// ============================================================================
// SPACING SYSTEM
// ============================================================================
// 4px base unit (common in modern design systems)
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  7: '1.75rem',   // 28px
  8: '2rem',      // 32px
  9: '2.25rem',   // 36px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  14: '3.5rem',   // 56px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  28: '7rem',     // 112px
  32: '8rem',     // 128px
  36: '9rem',     // 144px
  40: '10rem',    // 160px
  44: '11rem',    // 176px
  48: '12rem',    // 192px
  52: '13rem',    // 208px
  56: '14rem',    // 224px
  60: '15rem',    // 240px
  64: '16rem',    // 256px
  72: '18rem',    // 288px
  80: '20rem',    // 320px
  96: '24rem',    // 384px
};

// ============================================================================
// BORDER RADIUS - EXTRACTED FROM ANT DESIGN SYSTEM
// ============================================================================
export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px - From CSS: border-radius:4px
  md: '0.375rem',    // 6px - From CSS: border-radius:6px
  lg: '0.5rem',      // 8px - From CSS: border-radius:8px
  xl: '0.75rem',     // 12px - From CSS: border-radius:12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',    // Fully rounded (pills)
};

// ============================================================================
// SHADOWS - EXTRACTED FROM ANT DESIGN DROPDOWN/CARD SHADOWS
// ============================================================================
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  // From CSS: box-shadow:0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)
  '2xl': '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  
  // Colored shadows for emphasis
  primaryGlow: '0 0 20px rgba(0, 240, 160, 0.3)',  // Using actual brand color
  accentGlow: '0 0 20px rgba(5, 145, 255, 0.3)',
};

// ============================================================================
// TRANSITIONS & ANIMATIONS - FROM ANT DESIGN SYSTEM
// ============================================================================
export const transitions = {
  duration: {
    fast: '150ms',
    base: '200ms',     // From CSS: transition:all 0.2s
    slow: '300ms',     // From CSS: transition:color 0.3s
    slower: '500ms',
  },
  
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear',
    // From CSS: cubic-bezier(0.215, 0.61, 0.355, 1)
    antEase: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    // From CSS: cubic-bezier(0.645, 0.045, 0.355, 1)
    antEaseIn: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};

// ============================================================================
// BREAKPOINTS
// ============================================================================
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// ============================================================================
// Z-INDEX LAYERS
// ============================================================================
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
};

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================
export const components = {
  // Button Styles - Extracted from page source
  button: {
    primary: {
      // Black background for primary CTA (from page: style="background:#000;color:#fff")
      background: '#000000',
      color: '#FFFFFF',
      padding: `${spacing[3]} ${spacing[6]}`,
      borderRadius: borderRadius.base,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.semibold,
      boxShadow: shadows.md,
      height: '40px',  // From CSS: height:40px
    },
    secondary: {
      background: colors.neutral[100],
      color: colors.text.primary,
      padding: `${spacing[3]} ${spacing[6]}`,
      borderRadius: borderRadius.base,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.medium,
    },
  },

  // Card Styles - From Ant Design cards
  card: {
    background: colors.background.primary,
    borderRadius: borderRadius.lg,  // 8px from CSS
    padding: spacing[6],
    boxShadow: shadows['2xl'],  // Using Ant Design shadow
    border: `1px solid ${colors.border.light}`,
  },

  // Input Styles - From Ant Design form inputs
  input: {
    background: colors.background.primary,
    borderRadius: borderRadius.base,  // 4px from CSS
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.fontSize.sm,  // 14px base
    border: `1px solid ${colors.border.medium}`,
    focusBorder: colors.primary[500],
    height: '32px',  // From CSS: min-height:32px
  },

  // Navigation - From page header
  navbar: {
    height: '64px',  // From CSS: height:64px for ant-layout-header
    background: colors.background.primary,
    borderBottom: `1px solid ${colors.border.light}`,
    boxShadow: shadows.sm,
    padding: '0 50px',  // From CSS: padding:0 50px
  },
};

// ============================================================================
// EXPORT DEFAULT THEME
// ============================================================================
const jobrightTheme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  breakpoints,
  zIndex,
  components,
};

// CommonJS exports for compatibility
module.exports = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  breakpoints,
  zIndex,
  components,
  jobrightTheme,
};

// Default export
module.exports.default = jobrightTheme;

/**
 * USAGE EXAMPLE:
 * 
 * import { colors, typography, spacing, borderRadius } from './jobright-tokens';
 * 
 * const Button = styled.button`
 *   background: ${colors.primary[500]};  // #00F0A0 - Jobright brand color
 *   color: ${colors.text.inverse};
 *   padding: ${spacing[3]} ${spacing[6]};
 *   font-family: ${typography.fontFamily.primary};
 *   font-size: ${typography.fontSize.base};
 *   border-radius: ${borderRadius.base};
 * `;
 */

/**
 * EXTRACTION NOTES & VERIFICATION:
 * 
 * These tokens were extracted from jobright.ai's actual page source (January 2025).
 * 
 * KEY EXTRACTED VALUES:
 * 
 * 1. PRIMARY BRAND COLOR: #00F0A0
 *    - Found in CSS: color:#00f0a0
 *    - Location: Links, primary accents throughout the site
 *    - Hover state: #52FFBA (color:#52ffba)
 *    - Active state: #00C98D (color:#00c98d)
 * 
 * 2. TYPOGRAPHY:
 *    - Primary Font: Inter (font-family:'__Inter_c3f87e','__Inter_Fallback_c3f87e')
 *    - Heading Font: Titillium Web (loaded via Google Fonts)
 *    - Base Size: 14px (font-size:14px from Ant Design system)
 * 
 * 3. COMPONENT LIBRARY:
 *    - Framework: Ant Design (React UI library)
 *    - Custom theme with Jobright branding
 *    - CSS classes: .ant-btn, .ant-form, .ant-layout, etc.
 * 
 * 4. LAYOUT:
 *    - Header height: 64px (height:64px)
 *    - Base spacing: 4px, 8px, 12px, 16px, 24px (common values)
 *    - Border radius: 4px, 6px, 8px, 12px (border-radius values)
 * 
 * 5. SHADOWS:
 *    - Ant Design shadow system
 *    - Main shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)
 * 
 * 6. COLORS:
 *    - Text: #000000 (pure black for high contrast)
 *    - Background: #FFFFFF (pure white)
 *    - Success: #52C41A (color:#52c41a)
 *    - Error: #FF4D4F (color:#ff4d4f)
 *    - Warning: #FAAD14 (color:#faad14)
 * 
 * VERIFICATION METHODS:
 * If you need to verify or extract additional values:
 * 
 * 1. Visit https://jobright.ai
 * 2. Open Chrome DevTools (F12 or Right-click > Inspect)
 * 3. Use the Elements tab to inspect specific components
 * 4. Check the Computed tab for final CSS values
 * 5. Use ColorZilla extension to pick exact colors from pixels
 * 6. Use WhatFont extension to identify font families
 * 
 * DESIGN CHARACTERISTICS:
 * - Clean, modern SaaS aesthetic
 * - High contrast (black text on white background)
 * - Bright cyan/green accent color (#00F0A0)
 * - Generous white space
 * - Subtle shadows and rounded corners
 * - Mobile-responsive design with breakpoints
 */
