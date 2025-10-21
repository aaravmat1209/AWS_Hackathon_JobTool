import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const JobOptionsContainer = styled.div`
  min-height: 100vh;
  background: #000000;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(74, 222, 128, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.03) 0%, transparent 70%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 140px 20px 60px;
  font-family: 'Inter', sans-serif;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 60px;
  max-width: 700px;
`;

const IconWrapper = styled(motion.div)`
  font-size: 80px;
  margin-bottom: 24px;
  filter: drop-shadow(0 4px 12px rgba(74, 222, 128, 0.3));
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  text-align: center;
  margin-bottom: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 0;
  font-weight: 400;
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`;

const OptionButton = styled(motion.button)`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  color: white;
  border: 1px solid rgba(74, 222, 128, 0.3);
  padding: 20px 32px;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  font-family: 'Inter', sans-serif;
  text-align: left;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    border-color: rgba(74, 222, 128, 0.5);
    transform: translateX(4px);
    box-shadow: 0 8px 24px rgba(74, 222, 128, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateX(2px);
  }
`;

const JobOptionsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "User";

  const handleResumeAnalysis = () => {
    navigate('/chatbot', { state: { userName } });
  };

  const handleJobMatching = () => {
    navigate('/chatbot', { state: { userName } });
  };

  const handleCareerGuidance = () => {
    navigate('/chatbot', { state: { userName } });
  };

  return (
    <JobOptionsContainer>
      <Header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <IconWrapper
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          💼
        </IconWrapper>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Welcome to Job Search!
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          What are you looking for?
        </Subtitle>
      </Header>
      <ButtonContainer
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <OptionButton
          onClick={handleResumeAnalysis}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          I am looking for a part-time job
        </OptionButton>
        <OptionButton
          onClick={handleJobMatching}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          I am looking for a full-time job or internships
        </OptionButton>
        <OptionButton
          onClick={handleCareerGuidance}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          I am exploring career paths
        </OptionButton>
      </ButtonContainer>
    </JobOptionsContainer>
  );
};

export default JobOptionsPage;