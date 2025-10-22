import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Menu, X, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled(motion.div)`
  font-size: 1.25rem;
  font-weight: 700;
  color: #4ade80;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #06b6d4;
    transform: scale(1.05);
  }
`;

const Nav = styled.nav<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 0 0 1rem 1rem;
    border: 1px solid rgba(74, 222, 128, 0.2);
    box-shadow: none;
  }
`;

const NavLink = styled(motion.button)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.6rem 1.2rem;
  border-radius: 16px;
  position: relative;
  white-space: nowrap;
  background: none;
  border: none;

  &:focus-visible {
    outline: 2px solid var(--accent-start);
    outline-offset: 2px;
    background: rgba(255, 255, 255, 0.1);
    color: #4ade80;
  }

  &:hover {
    color: #4ade80;
    background: rgba(255, 255, 255, 0.08);
  }

  &.active {
    color: #4ade80;
    background: rgba(74, 222, 128, 0.15);
  }
`;

const ProfileIcon = styled(motion.button)`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4ade80;
  cursor: pointer;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: scale(1.05);
    color: #06b6d4;
  }
`;

const MobileMenuButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4ade80;
  cursor: pointer;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: scale(1.05);
  }
  display: none;

  @media (max-width: 768px) {
    display: flex;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mode, setMode] = useState('home'); // 'home' or 'chatbot'
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const toggleRef = useRef(null);

  // Update mode based on current route
  useEffect(() => {
    if (location.pathname === '/') {
      setMode('home');
    } else if (location.pathname === '/chatbot') {
      setMode('chatbot');
    }
  }, [location.pathname]);

  const handleDragStart = (e: any) => {
    setIsDragging(true);
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: any) => {
    if (!isDragging) return;
    
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diff = clientX - dragStart;
    
    // Switch if dragged more than 50px
    if (diff > 50 && mode === 'home') {
      setMode('chatbot');
      setIsDragging(false);
    } else if (diff < -50 && mode === 'chatbot') {
      setMode('home');
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleNavigation = (path: string, newMode: string) => {
    setMode(newMode);
    navigate(path);
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <HeaderContent>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavigation('/', 'home')}
        >
          JobSearch
        </Logo>

        <Nav 
          $isOpen={isMenuOpen}
          ref={toggleRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseMove={handleDragMove}
          onTouchMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchEnd={handleDragEnd}
          onMouseLeave={handleDragEnd}
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none'
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Sliding Background */}
            <div 
              style={{
                position: 'absolute',
                top: '0.25rem',
                bottom: '0.25rem',
                background: 'linear-gradient(to right, #4ade80, #06b6d4)',
                borderRadius: '14px',
                transition: 'all 0.3s ease-out',
                left: mode === 'home' ? '0.25rem' : 'calc(50% + 0.5rem)',
                width: 'calc(50% - 0.75rem)',
                zIndex: 1,
                border: 'none',
                outline: 'none'
              }}
            />
            
            {/* Home Button */}
            <NavLink
              className={mode === 'home' ? 'active' : ''}
              onClick={() => handleNavigation('/', 'home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                position: 'relative', 
                zIndex: 2,
                color: mode === 'home' ? '#000' : 'rgba(255, 255, 255, 0.8)',
                transition: 'color 0.3s ease'
              }}
            >
              Home
            </NavLink>
            
            {/* Chatbot Button */}
            <NavLink
              className={mode === 'chatbot' ? 'active' : ''}
              onClick={() => handleNavigation('/chatbot', 'chatbot')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                position: 'relative', 
                zIndex: 2,
                color: mode === 'chatbot' ? '#000' : 'rgba(255, 255, 255, 0.8)',
                transition: 'color 0.3s ease'
              }}
            >
              Chatbot
            </NavLink>
          </div>
        </Nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <NavLink
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ margin: 0 }}
            onClick={() => navigate('/profile')}
          >
            Profile
          </NavLink>
          <ProfileIcon
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/profile')}
          >
            <User size={20} />
          </ProfileIcon>
        </div>

        <MobileMenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;