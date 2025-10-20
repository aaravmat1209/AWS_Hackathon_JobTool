/**
 * TypeScript declaration file for styled-components theme
 * Extends DefaultTheme to include our JobRight theme structure
 */

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      jobright: {
        primary: Record<number, string>;
        secondary: Record<number, string>;
        accent: {
          primary: string;
          hover: string;
          active: string;
          blue: string;
        };
        success: Record<number, string>;
        error: Record<number, string>;
        warning: Record<number, string>;
      };
      neutral: Record<number, string>;
      black: string;
      white: string;
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        muted: string;
      };
      border: {
        light: string;
        medium: string;
        dark: string;
      };
      primary: string;
      primaryHover: string;
      primaryActive: string;
      secondary: string;
      success: string;
      error: string;
      warning: string;
    };
    fonts: {
      primary: string;
      heading: string;
      mono: string;
    };
    fontSizes: Record<string, string>;
    fontWeights: Record<string, number>;
    lineHeights: Record<string, number>;
    letterSpacings: Record<string, string>;
    spacing: Record<string | number, string>;
    radii: Record<string, string>;
    shadows: Record<string, string>;
    transitions: {
      durations: Record<string, string>;
      timings: Record<string, string>;
      default: string;
      fast: string;
      slow: string;
    };
    breakpoints: Record<string, string>;
    media: Record<string, string>;
    zIndex: Record<string, number>;
    components: any;
  }
}
