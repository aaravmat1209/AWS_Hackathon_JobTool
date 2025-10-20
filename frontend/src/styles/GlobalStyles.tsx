/**
 * Global Styles using styled-components
 * Applies JobRight design system globally
 */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    color: ${props => props.theme.colors.text.primary};
    background: ${props => props.theme.colors.background.primary};
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.durations.base} ${props => props.theme.transitions.timings.ease};
    
    &:hover {
      color: ${props => props.theme.colors.primaryHover};
    }
    
    &:active {
      color: ${props => props.theme.colors.primaryActive};
    }
  }
  
  button {
    font-family: ${props => props.theme.fonts.primary};
    cursor: pointer;
  }
  
  input, textarea, select {
    font-family: ${props => props.theme.fonts.primary};
  }
`;
