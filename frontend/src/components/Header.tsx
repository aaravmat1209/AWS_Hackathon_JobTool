import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Home, User, MessageCircle } from 'lucide-react';

const HeaderContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 24px;
  margin: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const NavGlow = styled(motion.div)`
  position: absolute;
  inset: -8px;
  background: radial-gradient(
    circle,
    rgba(74, 222, 128, 0.3) 0%,
    rgba(74, 222, 128, 0.15) 30%,
    rgba(74, 222, 128, 0.05) 60%,
    transparent 100%
  );
  border-radius: 32px;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled(motion.li)`
  position: relative;
`;

const MenuItemWrapper = styled(motion.div)`
  display: block;
  border-radius: 20px;
  overflow: visible;
  position: relative;
  perspective: 600px;
`;

const ItemGlow = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  border-radius: 20px;
  opacity: 0;
`;

const NavLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.75rem;
  position: relative;
  z-index: 10;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;
  border-radius: 20px;
  transition: color 0.3s ease;
  transform-style: preserve-3d;
  
  &:hover {
    color: white;
  }
  
  .icon {
    color: #4ade80;
    transition: color 0.3s ease;
  }
`;

const NavLinkBack = styled(NavLink)`
  position: absolute;
  inset: 0;
  transform: rotateX(90deg);
  transform-origin: center top;
`;

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="icon" size={24} />,
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0.06) 50%, rgba(74, 222, 128, 0) 100%)",
  },
  {
    icon: <User className="icon" size={24} />,
    label: "Profile",
    href: "/profile",
    gradient: "radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0.06) 50%, rgba(74, 222, 128, 0) 100%)",
  },
  {
    icon: <MessageCircle className="icon" size={24} />,
    label: "Chatbot",
    href: "/chatbot",
    gradient: "radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0.06) 50%, rgba(74, 222, 128, 0) 100%)",
  },
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <HeaderContainer
      initial="initial"
      whileHover="hover"
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <NavGlow variants={navGlowVariants} />
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem key={item.label}>
            <MenuItemWrapper whileHover="hover" initial="initial">
              <ItemGlow
                variants={glowVariants}
                style={{ background: item.gradient }}
              />
              <NavLink
                href={item.href}
                onClick={handleClick(item.href)}
                variants={itemVariants}
                transition={sharedTransition}
                style={{ transformOrigin: "center bottom" }}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
              <NavLinkBack
                href={item.href}
                onClick={handleClick(item.href)}
                variants={backVariants}
                transition={sharedTransition}
                style={{ transformOrigin: "center top" }}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLinkBack>
            </MenuItemWrapper>
          </MenuItem>
        ))}
      </MenuList>
    </HeaderContainer>
  );
};

export default Header;