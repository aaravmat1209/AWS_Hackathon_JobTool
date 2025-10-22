import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { Brain, FileText, Users, MessageCircle } from 'lucide-react';

const ChatContainer = styled(motion.section)`
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
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
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

const ChatWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
`;

const ChatBubble = styled(motion.div)`
  padding: 1.125rem 1.5rem;
  position: relative;
  max-width: 75%;
  word-wrap: break-word;
  font-size: 1.25rem;
  line-height: 1.6;
  box-shadow: none;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.01);
  }
`;

const UserBubble = styled(ChatBubble)`
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  color: white;
  border-radius: 20px 20px 4px 20px;
  align-self: flex-end;
  margin-left: auto;
  position: relative;
`;

const AIBubble = styled(ChatBubble)`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 20px 20px 20px 4px;
  align-self: flex-start;
  position: relative;
`;


interface ChatIconProps {
  isUser: boolean;
}



const ChatMessage = styled.div`
  color: inherit;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-top: 0.75rem;
  padding-left: 0;
`;

const FeatureItem = styled(motion.li)`
  color: inherit;
  opacity: 0.95;
  font-size: 0.875rem;
  margin-bottom: 0.4rem;
  padding-left: 1.25rem;
  position: relative;
  
  &::before {
    content: '•';
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const AIFeatures = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const chatMessages = [
    {
      isUser: true,
      icon: <Users size={16} />,
      name: "You",
      message: "I'm struggling to find the right jobs. Can you help me?",
    },
    {
      isUser: false,
      icon: <Brain size={16} />,
      name: "AI Job Copilot",
      message: "Absolutely! I can help you in multiple ways:",
      features: [
        "Match you with perfect job opportunities using AI",
        "Analyze your resume and suggest improvements",
        "Provide personalized interview preparation",
        "Connect you with industry insiders"
      ]
    },
    {
      isUser: true,
      icon: <FileText size={16} />,
      name: "You",
      message: "That sounds amazing! How does the AI matching work?",
    },
    {
      isUser: false,
      icon: <Brain size={16} />,
      name: "AI Job Copilot",
      message: "Our AI analyzes your skills, experience, and preferences to find jobs that are a perfect fit. It considers:",
      features: [
        "Your technical skills and experience level",
        "Company culture and work environment preferences",
        "Salary expectations and location preferences",
        "Career growth opportunities and learning potential"
      ]
    },
    {
      isUser: true,
      icon: <MessageCircle size={16} />,
      name: "You",
      message: "What about interview preparation?",
    },
    {
      isUser: false,
      icon: <Brain size={16} />,
      name: "AI Job Copilot",
      message: "I provide comprehensive interview support:",
      features: [
        "Practice questions tailored to your specific role",
        "Industry-specific interview scenarios",
        "Feedback on your answers and presentation",
        "Confidence-building techniques and tips"
      ]
    }
  ];

  useEffect(() => {
    if (isInView && currentMessage < chatMessages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMessage(prev => prev + 1);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [isInView, currentMessage, chatMessages.length]);

  return (
    <ChatContainer
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Our AI Chatbot
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Experience intelligent conversations that help you land your dream job
          </SectionSubtitle>
        </SectionHeader>
        
        <ChatWrapper>
        {chatMessages.slice(0, currentMessage + 1).map((message, index) => {
          const BubbleComponent = message.isUser ? UserBubble : AIBubble;
          
          return (
            <BubbleComponent
              key={index}
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                y: 10
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 0.5,
                delay: index * 0.15
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              <ChatMessage>
                {message.message}
                {message.features && (
                  <FeatureList>
                    {message.features.map((feature, featureIndex) => (
                      <FeatureItem 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.3 + 0.2 + featureIndex * 0.1,
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                )}
              </ChatMessage>
            </BubbleComponent>
          );
        })}
        </ChatWrapper>
      </ContentWrapper>
    </ChatContainer>
  );
};

export default AIFeatures;