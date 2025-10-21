import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 2rem 2rem;
  position: relative;
  z-index: 1;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #4ade80;
  margin-bottom: 0.5rem;
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const FooterLink = styled.a`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4ade80;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4ade80;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 222, 128, 0.2);
    border-color: rgba(74, 222, 128, 0.4);
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>JobSearch AI</FooterTitle>
          <FooterText>
            Revolutionizing job search with AI-powered matching, resume analysis, 
            and personalized career guidance. Your AI copilot for landing your dream job.
          </FooterText>
          <SocialLinks>
            <SocialIcon
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </SocialIcon>
            <SocialIcon
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </SocialIcon>
            <SocialIcon
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter size={20} />
            </SocialIcon>
            <SocialIcon
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Product</FooterTitle>
          <FooterLink href="#">Features</FooterLink>
          <FooterLink href="#">AI Matching</FooterLink>
          <FooterLink href="#">Resume Analysis</FooterLink>
          <FooterLink href="#">Interview Prep</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Press Kit</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink href="#">Documentation</FooterLink>
          <FooterLink href="#">API</FooterLink>
          <FooterLink href="#">Support</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} JobSearch AI. All rights reserved. Powered by AWS.
        </Copyright>
        <FooterLinks>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Terms</FooterLink>
          <FooterLink href="#">Cookies</FooterLink>
        </FooterLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
