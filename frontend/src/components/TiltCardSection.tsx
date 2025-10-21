import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { Sparkles, Target, Zap, Brain, TrendingUp, Shield } from 'lucide-react';

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
  background: transparent;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TiltCardWrapper = styled.div`
  perspective: 1000px;
  min-height: 350px;
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const TiltCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(74, 222, 128, 0.2) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle,
      rgba(74, 222, 128, 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    transform: scale(0);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scale(1);
  }
  
  &:hover {
    border-color: rgba(74, 222, 128, 0.3);
    box-shadow: 0 20px 60px rgba(74, 222, 128, 0.2),
                0 0 40px rgba(74, 222, 128, 0.1);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardIcon = styled(motion.div)`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4ade80;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${TiltCard}:hover & {
    background: rgba(74, 222, 128, 0.2);
    border-color: rgba(74, 222, 128, 0.4);
    box-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
    transform: scale(1.1) rotate(5deg);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const CardBadge = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: rgba(74, 222, 128, 0.15);
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #4ade80;
  margin-top: auto;
  width: fit-content;
`;

interface TiltCardComponentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  delay: number;
}

const TiltCardComponent: React.FC<TiltCardComponentProps> = ({
  icon,
  title,
  description,
  badge,
  delay
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-150px" });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 35 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 35 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    // Update CSS variable for gradient
    cardRef.current.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <TiltCardWrapper>
      <TiltCard
        ref={cardRef}
        initial={{ 
          opacity: 0, 
          y: 100, 
          scale: 0.8,
          rotateX: -15,
          filter: "blur(10px)"
        }}
        animate={
          isInView 
            ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: 0,
                filter: "blur(0px)"
              }
            : {}
        }
        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        style={{
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.05,
          y: -10,
          transition: { 
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
        <CardContent>
          <div>
            <CardIcon>{icon}</CardIcon>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <CardBadge>{badge}</CardBadge>
        </CardContent>
      </TiltCard>
    </TiltCardWrapper>
  );
};

const TiltCardSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const cards = [
    {
      icon: <Sparkles size={28} />,
      title: "AI-Powered Matching",
      description: "Our advanced AI analyzes thousands of job postings to find your perfect match based on skills, experience, and preferences.",
      badge: "Smart Match",
      delay: 0.1
    },
    {
      icon: <Target size={28} />,
      title: "Precision Targeting",
      description: "Get matched with roles that align with your career goals and company culture preferences.",
      badge: "Accurate",
      delay: 0.2
    },
    {
      icon: <Zap size={28} />,
      title: "Instant Results",
      description: "Real-time job recommendations delivered as soon as new opportunities match your profile.",
      badge: "Fast",
      delay: 0.3
    },
    {
      icon: <Brain size={28} />,
      title: "Resume Intelligence",
      description: "AI-powered resume analysis with personalized suggestions to improve your chances of landing interviews.",
      badge: "AI-Enhanced",
      delay: 0.4
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Career Growth",
      description: "Track your application progress and get insights on how to advance your career trajectory.",
      badge: "Growth",
      delay: 0.5
    },
    {
      icon: <Shield size={28} />,
      title: "Privacy First",
      description: "Your data is encrypted and secure. We never share your information without permission.",
      badge: "Secure",
      delay: 0.6
    }
  ];
  
  return (
    <SectionContainer ref={sectionRef}>
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Powerful Features
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Everything you need to land your dream job, powered by cutting-edge AI technology
          </SectionSubtitle>
        </SectionHeader>
        
        <CardsGrid>
          {cards.map((card, index) => (
            <TiltCardComponent key={index} {...card} />
          ))}
        </CardsGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default TiltCardSection;
