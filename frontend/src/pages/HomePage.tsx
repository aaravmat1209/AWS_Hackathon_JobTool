/**
 * HomePage - JobRight.ai inspired landing page
 * Showcases the AI Job Search solution with hero section, features, and tech stack
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TiltCardSection from '../components/TiltCardSection';
import AIFeatures from '../components/AIFeatures';
import Footer from '../components/Footer';
import {
  BedrockIcon,
  LambdaIcon,
  DynamoDBIcon,
  S3Icon,
  APIGatewayIcon,
  CDKIcon,
  SESIcon,
  SQSIcon
} from '../assets/AWSLogos';

// ============================================================================
// STYLED COMPONENTS - JobRight Design System
// ============================================================================

const PageContainer = styled.div`
  min-height: 100vh;
  background: #000000;
  overflow-x: hidden;
  position: relative;
`;

const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
  padding: 80px 50px 100px;
  text-align: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 50%, rgba(0, 240, 160, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0, 240, 160, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 24px 80px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 24px 0;
  line-height: 1.2;
  font-family: 'Titillium Web', 'Inter', sans-serif;
  animation: fadeInUp 0.8s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroHighlight = styled.span`
  color: #00F0A0;
  display: block;
  margin-top: 12px;
  background: linear-gradient(135deg, #00F0A0 0%, #52FFBA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.88);
  margin: 0 0 40px 0;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #00F0A0 0%, #52FFBA 100%);
  color: #FFFFFF;
  border: none;
  padding: 16px 48px;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 200ms ease;
  box-shadow: 0 4px 12px rgba(0, 240, 160, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 240, 160, 0.5);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 14px 32px;
  }
`;

const Section = styled.section`
  padding: 80px 50px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const TeardropSection = styled.section`
  background: #F9FAFB;
  border-radius: 60px;
  padding: 80px 50px;
  margin: 40px auto;
  max-width: 1400px;
  position: relative;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.2s;
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    padding: 60px 24px;
    border-radius: 40px;
    margin: 24px 16px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0 0 24px 0;
  text-align: center;
  font-family: 'Titillium Web', 'Inter', sans-serif;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin: 0 0 60px 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 48px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  background: #FFFFFF;
  border-radius: 1.5rem;
  padding: 32px;
  transition: all 300ms ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.5s ease-out forwards;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(0, 240, 160, 0.15);
  }
`;

const FeatureHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const FeatureIcon = styled.div`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const FeatureTitleWrapper = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
  font-family: 'Titillium Web', 'Inter', sans-serif;
  line-height: 1.3;
  display: inline;
`;

const FeatureSlash = styled.span`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 8px;
`;

const FeatureDescription = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
`;

const FeatureBullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FeatureBullet = styled.li`
  font-size: 0.9375rem;
  color: rgba(0, 0, 0, 0.75);
  padding-left: 20px;
  position: relative;
  line-height: 1.5;
  
  &::before {
    content: '•';
    position: absolute;
    left: 4px;
    color: #000000;
    font-weight: bold;
  }
`;

const TechStackSection = styled.section`
  padding: 80px 50px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 60px;
  margin: 40px auto;
  max-width: 1400px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(74, 222, 128, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 24px;
    border-radius: 40px;
    margin: 24px 16px;
  }
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 48px 0;
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 32px;
  animation: scroll 15s linear infinite;
  will-change: transform;
  
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  
  &:hover {
    animation-play-state: paused;
  }
`;

const TechCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  transition: all 300ms ease;
  min-width: 280px;
  flex-shrink: 0;
  
  &:hover {
    opacity: 0.8;
  }
`;

const TechIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  img {
    border-radius: 50%;
  }
`;

const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const TechName = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
  font-family: 'Inter', sans-serif;
  line-height: 1.2;
`;

const TechDescription = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.3;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  margin: 60px 0;
  padding: 60px;
  background: linear-gradient(135deg, #00F0A0 0%, #52FFBA 100%);
  border-radius: 60px;
  opacity: 0;
  transform: scale(0.95);
  animation: popIn 0.6s ease-out forwards;
  animation-delay: 0.4s;
  
  @keyframes popIn {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 40px 24px;
    border-radius: 40px;
  }
`;

const StatCard = styled.div`
  text-align: center;
  color: #FFFFFF;
`;

const StatNumber = styled.div`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 8px;
  font-family: 'Titillium Web', 'Inter', sans-serif;
  letter-spacing: -0.03em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.95;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #000000 0%, #1F2937 100%);
  padding: 80px 50px;
  text-align: center;
  border-radius: 60px;
  margin: 40px auto;
  max-width: 1400px;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.5s;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
    border-radius: 40px;
    margin: 24px 16px;
  }
`;

const CTATitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #FFFFFF;
  margin: 0 0 24px 0;
  font-family: 'Titillium Web', 'Inter', sans-serif;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 40px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtonWhite = styled(CTAButton)`
  background: #FFFFFF;
  color: #000000;
  
  &:hover {
    background: #F9FAFB;
    box-shadow: 0 6px 16px rgba(255, 255, 255, 0.3);
  }
`;

// ============================================================================
// COMPONENT
// ============================================================================

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      {/* New Dark-Themed Header */}
      <Header />

      {/* New Dark-Themed Hero Section */}
      <Hero />

      {/* Tilt Card Features Section */}
      <TiltCardSection />

      {/* New Dark-Themed AI Features with Chatbot Interface */}
      <AIFeatures />

      {/* Tech Stack Section with Scrolling Animation */}
      <TechStackSection>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 50px', position: 'relative', zIndex: 1 }}>
          <SectionTitle>Built on AWS Cloud</SectionTitle>
          <SectionSubtitle>
            Enterprise-grade infrastructure ensuring reliability, security, and scalability
          </SectionSubtitle>
        </div>
        
        <MarqueeContainer>
          <MarqueeTrack>
            {/* First set of logos */}
            <TechCard>
              <TechIcon><BedrockIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>Amazon Bedrock</TechName>
                <TechDescription>AI agents</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><LambdaIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>AWS Lambda</TechName>
                <TechDescription>Serverless compute</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><DynamoDBIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>DynamoDB</TechName>
                <TechDescription>NoSQL database</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><S3Icon size={90} /></TechIcon>
              <TechInfo>
                <TechName>Amazon S3</TechName>
                <TechDescription>Cloud storage</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><SQSIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>Amazon SQS</TechName>
                <TechDescription>Message queuing</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><SESIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>Amazon SES</TechName>
                <TechDescription>Email service</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><APIGatewayIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>API Gateway</TechName>
                <TechDescription>RESTful APIs</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><CDKIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>AWS CDK</TechName>
                <TechDescription>Infrastructure as code</TechDescription>
              </TechInfo>
            </TechCard>

            {/* Duplicate set for seamless loop */}
            <TechCard>
              <TechIcon><BedrockIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>Amazon Bedrock</TechName>
                <TechDescription>AI agents</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><LambdaIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>AWS Lambda</TechName>
                <TechDescription>Serverless compute</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><DynamoDBIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>DynamoDB</TechName>
                <TechDescription>NoSQL database</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><S3Icon size={90} /></TechIcon>
              <TechInfo>
                <TechName>Amazon S3</TechName>
                <TechDescription>Cloud storage</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><SQSIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>Amazon SQS</TechName>
                <TechDescription>Message queuing</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><SESIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>Amazon SES</TechName>
                <TechDescription>Email service</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><APIGatewayIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>API Gateway</TechName>
                <TechDescription>RESTful APIs</TechDescription>
              </TechInfo>
            </TechCard>

            <TechCard>
              <TechIcon><CDKIcon size={90} /></TechIcon>
              <TechInfo>
                <TechName>AWS CDK</TechName>
                <TechDescription>Infrastructure as code</TechDescription>
              </TechInfo>
            </TechCard>
          </MarqueeTrack>
        </MarqueeContainer>
      </TechStackSection>

      {/* CTA Section */}
      <CTASection>
        <CTATitle>Ready to Transform Your Job Search?</CTATitle>
        <CTASubtitle>
          Join thousands of job seekers who are landing interviews faster with AI-powered assistance
        </CTASubtitle>
        <CTAButtonWhite onClick={() => navigate('/profile')}>
          Start Your Journey Today
        </CTAButtonWhite>
      </CTASection>

      {/* Footer */}
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
