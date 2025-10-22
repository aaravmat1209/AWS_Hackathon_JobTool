import styled from 'styled-components';

export const ChatContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000000;
  font-family: 'Inter', sans-serif;
`;

// ============================================================================
// JOBRIGHT-STYLED HEADER - Matches jobright.ai navigation
// ============================================================================
export const Header = styled.div`
  height: 64px;
  background: #FFFFFF;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  border-bottom: 1px solid #E5E7EB;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 16px;
  }
`;

// Logo Section - Left side
export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  transition: transform 150ms ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

export const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  font-family: 'Titillium Web', 'Inter', sans-serif;
  
  @media (max-width: 640px) {
    display: none;
  }
`;

// Navigation Links - Center
export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 16px;
  }
  
  @media (max-width: 640px) {
    gap: 8px;
  }
`;

interface NavLinkProps {
  $isActive?: boolean;
}

export const NavLink = styled.button<NavLinkProps>`
  background: ${props => props.$isActive ? '#00F0A0' : 'transparent'};
  color: ${props => props.$isActive ? '#FFFFFF' : 'rgba(0, 0, 0, 0.88)'};
  border: none;
  padding: 8px 20px;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  cursor: pointer;
  transition: all 200ms ease;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.$isActive ? '#52FFBA' : '#F3F4F6'};
    color: ${props => props.$isActive ? '#FFFFFF' : '#000000'};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 640px) {
    padding: 6px 12px;
    font-size: 0.875rem;
  }
`;

// User Section - Right side
export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #F9FAFB;
  border-radius: 9999px;
`;

export const UserIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const UserName = styled.span`
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  @media (max-width: 640px) {
    display: none;
  }
`;

export const ChatArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 140px 80px 200px 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  scroll-behavior: smooth;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
  
  /* Optimize scrolling performance */
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    padding: 140px 40px 200px 40px;
    max-width: 900px;
  }

  @media (max-width: 480px) {
    padding: 140px 20px 200px 20px;
    gap: 20px;
  }
`;

export const MessageContainer = styled.div<{ $isUser: boolean }>`
  display: flex;
  justify-content: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  align-items: flex-start;
  gap: 10px;
  position: relative;
  z-index: 10;
`;

export const BotMessageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  max-width: 75%;

  @media (max-width: 480px) {
    max-width: 85%;
    gap: 10px;
  }
`;

export const BotContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BotMessageBubble = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9375rem;
  line-height: 1.6;
  position: relative;
  
  /* Smooth text rendering for streaming */
  will-change: contents;
  
  p, span, div {
    transition: opacity 0.1s ease-out;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 0.875rem;
  }
`;

export const UserMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 70%;

  @media (max-width: 480px) {
    max-width: 85%;
  }
`;

export const UserAvatarContainer = styled.div`
  margin-left: 10px;
`;

export const UserMessageBubble = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 14px 18px;
  border-radius: 12px;
  color: #000000;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 0.875rem;
  }
`;

export const Timestamp = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 4px;
  display: none;
`;

export const InputContainer = styled.div<{ $isCentered?: boolean }>`
  padding: ${props => props.$isCentered ? '0 80px' : '0 80px 60px 80px'};
  background: ${props => props.$isCentered ? 'transparent' : '#000000'};
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  position: ${props => props.$isCentered ? 'static' : 'fixed'};
  bottom: ${props => props.$isCentered ? 'auto' : '0'};
  top: ${props => props.$isCentered ? 'auto' : 'auto'};
  left: ${props => props.$isCentered ? 'auto' : '50%'};
  transform: ${props => props.$isCentered ? 'none' : 'translate(-50%, 0)'};
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: ${props => props.$isCentered ? '10' : '50'};
  will-change: transform;

  @media (max-width: 768px) {
    padding: ${props => props.$isCentered ? '0 40px' : '0 40px 40px 40px'};
    max-width: 900px;
  }

  @media (max-width: 480px) {
    padding: ${props => props.$isCentered ? '0 20px' : '0 20px 30px 20px'};
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 12px 16px;
  background: rgba(40, 40, 40, 0.8);
  backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  min-height: 56px;

  &:focus-within {
    border-color: rgba(74, 222, 128, 0.4);
    background: rgba(45, 45, 45, 0.85);
    box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.1), 0 8px 32px rgba(0, 0, 0, 0.5);
    animation: greenPulse 2s ease-in-out infinite;
  }

  @keyframes greenPulse {
    0%, 100% {
      box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.1), 0 8px 32px rgba(0, 0, 0, 0.5);
    }
    50% {
      box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.15), 0 8px 32px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    color: white;
  }
`;

export const SendButton = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  max-width: 75%;
`;

export const TypingDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  animation: typing 1.4s infinite ease-in-out;

  &:nth-child(1) { animation-delay: -0.32s; }
  &:nth-child(2) { animation-delay: -0.16s; }

  @keyframes typing {
    0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
    40% { transform: scale(1); opacity: 1; }
  }
`;

export const SourcesToggleButton = styled.button`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #495057;
  border: 1px solid #dee2e6;
  padding: 10px 16px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 16px 0 0 0;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    color: #343a40;
    border-color: #adb5bd;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

export const SourcesContainer = styled.div<{ $isExpanded: boolean }>`
  max-height: ${props => props.$isExpanded ? '300px' : '0px'};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 12px;
  opacity: ${props => props.$isExpanded ? '1' : '0'};
`;

export const SourcesList = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #e9ecef;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #dee2e6, transparent);
  }
`;

export const SourceLink = styled.a`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #dee2e6;
  border-radius: 12px;
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: #495057;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  gap: 8px;

  &::before {
    content: "📄";
    font-size: 1rem;
    opacity: 0.8;
    transition: all 0.3s ease;
    z-index: 2;
    position: relative;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(52, 152, 219, 0.15), transparent);
    transition: left 0.6s ease;
    z-index: 1;
  }

  &:hover {
    background: linear-gradient(135deg, #e8f4f8 0%, #d1ecf1 100%);
    color: #2c3e50;
    border-color: #3498db;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(52, 152, 219, 0.2);
    text-decoration: none;

    &::before {
      opacity: 1;
      transform: scale(1.1);
    }

    &::after {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.15);
  }

  &:focus {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }
`;

export const InputHelperText = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  width: 100%;
  margin-top: 12px;
  
  kbd {
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Inter', monospace;
    font-size: 0.7rem;
    margin: 0 2px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const IconButton = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
`;

export const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Welcome Screen Components
export const WelcomeContainer = styled.div<{ $theme?: 'light' | 'dark' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 140px 80px 40px 80px;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  background-image: ${props => props.$theme === 'light'
    ? `radial-gradient(circle at 20% 80%, rgba(74, 222, 128, 0.05) 0%, transparent 50%),
       radial-gradient(circle at 80% 20%, rgba(74, 222, 128, 0.03) 0%, transparent 50%),
       radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.02) 0%, transparent 70%)`
    : `radial-gradient(circle at 20% 80%, rgba(74, 222, 128, 0.1) 0%, transparent 50%),
       radial-gradient(circle at 80% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%),
       radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.03) 0%, transparent 70%)`};
  
  @media (max-width: 768px) {
    padding: 140px 40px 40px 40px;
    max-width: 900px;
  }

  @media (max-width: 480px) {
    padding: 140px 20px 40px 20px;
  }
`;

export const WelcomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
`;

export const WelcomeTitle = styled.h1<{ $theme?: 'light' | 'dark' }>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.$theme === 'light' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
  margin-bottom: 16px;
  font-family: 'Inter', sans-serif;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const WelcomeSubtitle = styled.p<{ $theme?: 'light' | 'dark' }>`
  font-size: 1.125rem;
  color: ${props => props.$theme === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 600px;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 32px;
  }
`;

export const SuggestionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 900px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const SuggestionCard = styled.button<{ $theme?: 'light' | 'dark' }>`
  background: ${props => props.$theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.$theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 16px;
  padding: 20px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${props => props.$theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.08)'};
    border-color: rgba(74, 222, 128, 0.3);
    transform: translateY(-2px);
    box-shadow: ${props => props.$theme === 'light' ? '0 8px 32px rgba(0, 0, 0, 0.1)' : '0 8px 32px rgba(0, 0, 0, 0.3)'};
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

export const SuggestionIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 12px;
`;

export const SuggestionTitle = styled.h3<{ $theme?: 'light' | 'dark' }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.$theme === 'light' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  margin-bottom: 8px;
  font-family: 'Inter', sans-serif;
  transition: color 0.3s ease;
`;

export const SuggestionDescription = styled.p<{ $theme?: 'light' | 'dark' }>`
  font-size: 0.875rem;
  color: ${props => props.$theme === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
  line-height: 1.4;
  margin: 0;
  transition: color 0.3s ease;
`;

export const MainInputContainer = styled.div<{ $isCentered?: boolean; $isLarge?: boolean }>`
  width: 100%;
  max-width: ${props => props.$isLarge ? '900px' : '500px'};
  margin: 0 auto 40px auto;
`;

export const MainInputWrapper = styled.div<{ $isLarge?: boolean; $theme?: 'light' | 'dark' }>`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.$theme === 'light' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)'};
  border-radius: ${props => props.$isLarge ? '32px' : '28px'};
  padding: ${props => props.$isLarge ? '16px 20px' : '12px 16px'};
  background: ${props => props.$theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(40, 40, 40, 0.8)'};
  backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.$theme === 'light' ? '0 4px 24px rgba(0, 0, 0, 0.1)' : '0 4px 24px rgba(0, 0, 0, 0.4)'};
  min-height: ${props => props.$isLarge ? '72px' : '56px'};

  &:focus-within {
    border-color: rgba(74, 222, 128, 0.4);
    background: ${props => props.$theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(45, 45, 45, 0.85)'};
    box-shadow: ${props => props.$theme === 'light'
    ? '0 0 0 3px rgba(74, 222, 128, 0.1), 0 8px 32px rgba(0, 0, 0, 0.15)'
    : '0 0 0 3px rgba(74, 222, 128, 0.1), 0 8px 32px rgba(0, 0, 0, 0.5)'};
    animation: greenPulse 2s ease-in-out infinite;
  }

  @keyframes greenPulse {
    0%, 100% {
      box-shadow: ${props => props.$theme === 'light'
    ? '0 0 0 3px rgba(74, 222, 128, 0.1), 0 8px 32px rgba(0, 0, 0, 0.15)'
    : '0 0 0 3px rgba(74, 222, 128, 0.1), 0 8px 32px rgba(0, 0, 0, 0.5)'};
    }
    50% {
      box-shadow: ${props => props.$theme === 'light'
    ? '0 0 0 3px rgba(74, 222, 128, 0.15), 0 8px 32px rgba(0, 0, 0, 0.15)'
    : '0 0 0 3px rgba(74, 222, 128, 0.15), 0 8px 32px rgba(0, 0, 0, 0.5)'};
    }
  }
`;

export const MainInput = styled.input<{ $isLarge?: boolean; $theme?: 'light' | 'dark' }>`
  flex: 1;
  padding: ${props => props.$isLarge ? '12px 16px' : '8px 12px'};
  border: none;
  outline: none;
  font-size: ${props => props.$isLarge ? '1.125rem' : '1rem'};
  background: transparent;
  color: ${props => props.$theme === 'light' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
  font-weight: 400;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  transition: color 0.3s ease;

  &::placeholder {
    color: ${props => props.$theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)'};
  }

  &:focus {
    color: ${props => props.$theme === 'light' ? '#000000' : '#ffffff'};
  }
`;

export const MainSendButton = styled.button<{ $isLarge?: boolean }>`
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  border: none;
  padding: ${props => props.$isLarge ? '12px' : '8px'};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: ${props => props.$isLarge ? '48px' : '40px'};
  height: ${props => props.$isLarge ? '48px' : '40px'};
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }

  svg {
    width: ${props => props.$isLarge ? '24px' : '20px'};
    height: ${props => props.$isLarge ? '24px' : '20px'};
  }
`;

