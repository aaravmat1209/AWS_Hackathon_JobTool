import React from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
`;

const StaticBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  pointer-events: none;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: white;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
  color: #000;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.25); }
`;

const GhostButton = styled(CTAButton)`
  background: transparent;
  color: var(--fg);
  border: 1px solid var(--border);
  box-shadow: none;

  &:hover { background: var(--panel-hover); box-shadow: inset 0 0 0 1px var(--ring); }
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.8;
  color: white;
`;



const Hero = () => {
  const typewriterText = useTypewriter("No More Solo Job Hunting", 80);

  return (
    <HeroContainer>
      <StaticBackground />
      <HeroContent>
        <Title style={{ marginTop: '2rem' }} className="gradient-text">
          {typewriterText}
          <span aria-hidden="true" style={{ 
            color: '#4ade80', 
            animation: 'blink 1s infinite',
            marginLeft: '2px'
          }}>|</span>
        </Title>

        <Subtitle>
          <span style={{ color: '#4ade80', fontWeight: '700' }}>Do it with AI Copilot</span>
        </Subtitle>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.7
          }}
          style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(255, 255, 255, 0.9)', 
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}
        >
          Our AI makes landing job interviews dramatically easier and faster! Get matched jobs, 
          tailored resume analysis, and personalized career guidance powered by AWS and advanced AI.
        </motion.p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
          <CTAButton>
            Get Started
            <ArrowRight size={18} />
          </CTAButton>
          <GhostButton>
            View Demo
          </GhostButton>
        </div>

        <StatsContainer>
          <StatItem>
            <StatNumber style={{ color: 'white', fontSize: '3rem', fontWeight: '700' }}>80%</StatNumber>
            <StatLabel style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500' }}>Time Saved</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber style={{ color: 'white', fontSize: '3rem', fontWeight: '700' }}>4x</StatNumber>
            <StatLabel style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500' }}>More Interviews</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber style={{ color: 'white', fontSize: '3rem', fontWeight: '700' }}>24/7</StatNumber>
            <StatLabel style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500' }}>AI Support</StatLabel>
          </StatItem>
        </StatsContainer>

      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;