import React, { useState, useEffect } from 'react';
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
  background: radial-gradient(circle at 20% 80%, rgba(74, 222, 128, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%);
  pointer-events: none;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #4ade80;
  line-height: 1.1;
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 40px rgba(74, 222, 128, 0.3);
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled(motion.div)`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled(motion.div)`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;


const useCounter = (end: number, duration: number, delay: number) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return count;
};

const Hero = () => {
  const typewriterText = useTypewriter("No More Solo Job Hunting", 80);
  const statsRef = React.useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  const timeCount = useCounter(80, 2000, isStatsInView ? 1300 : 0);
  const interviewCount = useCounter(4, 2000, isStatsInView ? 1400 : 0);

  return (
    <HeroContainer>
      <StaticBackground />
      <HeroContent>
        <Title 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          style={{ marginTop: '2rem' }}
        >
          {typewriterText}
          <span aria-hidden="true" style={{ 
            color: '#4ade80', 
            animation: 'blink 1s ease-in-out infinite',
            marginLeft: '2px'
          }}>|</span>
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.5
          }}
        >
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

        <CTAButton
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.9
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
          }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontWeight: '600'
          }}
        >
          Get Started for Free
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowRight size={20} />
          </motion.span>
        </CTAButton>

        <StatsContainer
          ref={statsRef}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            borderRadius: '20px',
            padding: '2.5rem',
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={isStatsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3
            }}
          >
            <StatItem>
              <StatNumber
                animate={isStatsInView ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                {timeCount}%
              </StatNumber>
              <StatLabel
                initial={{ opacity: 0 }}
                animate={isStatsInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
              >
                Time Saved
              </StatLabel>
            </StatItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={isStatsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.4
            }}
          >
            <StatItem>
              <StatNumber
                animate={isStatsInView ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                {interviewCount}x
              </StatNumber>
              <StatLabel
                initial={{ opacity: 0 }}
                animate={isStatsInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.6 }}
              >
                More Interviews
              </StatLabel>
            </StatItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={isStatsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.5
            }}
          >
            <StatItem>
              <StatNumber
                animate={isStatsInView ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                24/7
              </StatNumber>
              <StatLabel
                initial={{ opacity: 0 }}
                animate={isStatsInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.7 }}
              >
                AI Support
              </StatLabel>
            </StatItem>
          </motion.div>
        </StatsContainer>

      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;