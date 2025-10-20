/**
 * Styled Components Theme Configuration
 * Integrates JobRight design tokens for use with styled-components ThemeProvider
 * 
 * USAGE:
 * 1. Wrap your app with ThemeProvider in App.tsx or index.tsx
 * 2. Access theme values in styled components via props.theme
 * 
 * Example:
 * import { ThemeProvider } from 'styled-components';
 * import { theme } from './styles/theme';
 * 
 * <ThemeProvider theme={theme}>
 *   <App />
 * </ThemeProvider>
 * 
 * In styled components:
 * const Button = styled.button`
 *   background: ${props => props.theme.colors.jobright.primary[500]};
 *   color: ${props => props.theme.colors.white};
 *   font-family: ${props => props.theme.fonts.primary};
 * `;
 */

// Import JobRight design tokens
const { 
  colors: jobrightColors, 
  typography, 
  spacing, 
  borderRadius, 
  shadows, 
  transitions,
  breakpoints,
  zIndex,
  components 
} = require('./jobright-tokens.js');

// ============================================================================
// STYLED-COMPONENTS THEME
// ============================================================================
const theme = {
  // ==========================================================================
  // COLORS - JobRight brand colors with organized structure
  // ==========================================================================
  colors: {
    // JobRight brand colors (primary cyan/green)
    jobright: {
      primary: jobrightColors.primary,
      secondary: jobrightColors.secondary,
      accent: jobrightColors.accent,
      success: jobrightColors.success,
      error: jobrightColors.error,
      warning: jobrightColors.warning,
    },
    
    // Neutral colors
    neutral: jobrightColors.neutral,
    black: jobrightColors.black,
    white: jobrightColors.white,
    
    // Semantic colors
    background: jobrightColors.background,
    text: jobrightColors.text,
    border: jobrightColors.border,
    
    // Quick access to common colors
    primary: jobrightColors.primary[500],      // #00F0A0
    primaryHover: jobrightColors.accent.hover, // #52FFBA
    primaryActive: jobrightColors.accent.active, // #00C98D
    secondary: jobrightColors.secondary[500],  // #0591FF
    success: jobrightColors.success[500],      // #52C41A
    error: jobrightColors.error[500],          // #FF4D4F
    warning: jobrightColors.warning[500],      // #FAAD14
  },
  
  // ==========================================================================
  // TYPOGRAPHY - Fonts, sizes, weights
  // ==========================================================================
  fonts: {
    primary: typography.fontFamily.primary,
    heading: typography.fontFamily.heading,
    mono: typography.fontFamily.mono,
  },
  
  fontSizes: typography.fontSize,
  fontWeights: typography.fontWeight,
  lineHeights: typography.lineHeight,
  letterSpacings: typography.letterSpacing,
  
  // ==========================================================================
  // SPACING - Consistent spacing scale
  // ==========================================================================
  spacing,
  
  // ==========================================================================
  // BORDER RADIUS - Rounded corners
  // ==========================================================================
  radii: borderRadius,
  
  // ==========================================================================
  // SHADOWS - Elevation and depth
  // ==========================================================================
  shadows,
  
  // ==========================================================================
  // TRANSITIONS - Animation timing
  // ==========================================================================
  transitions: {
    durations: transitions.duration,
    timings: transitions.timing,
    
    // Convenience functions
    default: `all ${transitions.duration.base} ${transitions.timing.antEase}`,
    fast: `all ${transitions.duration.fast} ${transitions.timing.ease}`,
    slow: `all ${transitions.duration.slow} ${transitions.timing.antEase}`,
  },
  
  // ==========================================================================
  // BREAKPOINTS - Responsive design
  // ==========================================================================
  breakpoints,
  
  // Media query helpers
  media: {
    xs: `@media (min-width: ${breakpoints.xs})`,
    sm: `@media (min-width: ${breakpoints.sm})`,
    md: `@media (min-width: ${breakpoints.md})`,
    lg: `@media (min-width: ${breakpoints.lg})`,
    xl: `@media (min-width: ${breakpoints.xl})`,
    '2xl': `@media (min-width: ${breakpoints['2xl']})`,
  },
  
  // ==========================================================================
  // Z-INDEX - Layering system
  // ==========================================================================
  zIndex,
  
  // ==========================================================================
  // COMPONENT PRESETS - Pre-configured component styles
  // ==========================================================================
  components,
};

// ============================================================================
// GLOBAL STYLES (Optional)
// Use with createGlobalStyle from styled-components
// ============================================================================
const globalStyles = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-family: ${typography.fontFamily.primary};
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    color: ${jobrightColors.text.primary};
    background: ${jobrightColors.background.primary};
  }
  
  a {
    color: ${jobrightColors.primary[500]};
    text-decoration: none;
    transition: color ${transitions.duration.base} ${transitions.timing.ease};
    
    &:hover {
      color: ${jobrightColors.accent.hover};
    }
    
    &:active {
      color: ${jobrightColors.accent.active};
    }
  }
`;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get color value from theme
 * @param {string} path - Dot notation path to color (e.g., 'jobright.primary.500')
 */
const getColor = (path) => (props) => {
  const keys = path.split('.');
  let value = props.theme.colors;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || props.theme.colors.primary;
};

/**
 * Get spacing value from theme
 * @param {number|string} size - Spacing size (e.g., 4, 8, 16)
 */
const getSpacing = (size) => (props) => {
  return props.theme.spacing[size] || `${size}px`;
};

/**
 * Get responsive value based on breakpoint
 * @param {Object} values - Object with breakpoint keys and values
 */
const responsive = (values) => (props) => {
  return Object.entries(values)
    .map(([breakpoint, value]) => {
      const mediaQuery = props.theme.media[breakpoint];
      return mediaQuery ? `${mediaQuery} { ${value} }` : '';
    })
    .join('\n');
};

// ============================================================================
// EXPORTS
// ============================================================================
module.exports = {
  theme,
  globalStyles,
  getColor,
  getSpacing,
  responsive,
};
