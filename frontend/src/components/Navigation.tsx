/**
 * Shared Navigation Component - JobRight.ai styled
 * Used across all pages for consistent navigation
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ASULogoImage } from './ImageAssets';

// ============================================================================
// STYLED COMPONENTS - JobRight.ai Design
// ============================================================================

const Header = styled.header`
  height: 64px;
  background: #FFFFFF;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  border-bottom: 1px solid #E5E7EB;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 16px;
  }
`;

const LogoSection = styled.div`
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

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  font-family: 'Titillium Web', 'Inter', sans-serif;
  
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLinks = styled.nav`
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

const NavLink = styled.button<NavLinkProps>`
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

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #F9FAFB;
  border-radius: 9999px;
  
  @media (max-width: 640px) {
    padding: 6px 12px;
  }
`;

const UserIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const UserName = styled.span`
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  @media (max-width: 640px) {
    display: none;
  }
`;

// ============================================================================
// COMPONENT
// ============================================================================

interface NavigationProps {
  userName?: string;
}

const Navigation: React.FC<NavigationProps> = ({ userName = 'User' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Header>
      <LogoSection onClick={() => navigate('/')}>
        <ASULogoImage />
        <LogoText>Job Search</LogoText>
      </LogoSection>
      
      <NavLinks>
        <NavLink 
          onClick={() => navigate('/')}
          $isActive={isActive('/')}
        >
          Home
        </NavLink>
        <NavLink 
          onClick={() => navigate('/profile')}
          $isActive={isActive('/profile')}
        >
          Profile
        </NavLink>
        <NavLink 
          onClick={() => navigate('/chatbot')}
          $isActive={isActive('/chatbot')}
        >
          Chatbot
        </NavLink>
      </NavLinks>
      
      <UserSection>
        <UserIcon>👤</UserIcon>
        <UserName>Hi, {userName}</UserName>
      </UserSection>
    </Header>
  );
};

export default Navigation;
