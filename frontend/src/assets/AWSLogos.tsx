/**
 * AWS Service Logos
 * Centralized imports for all AWS service icons
 */

import React from 'react';

// SVG Imports
import LambdaLogo from './aws-logos/Lambda.svg';
import DynamoDBLogo from './aws-logos/DynamoDB.svg';
import S3Logo from './aws-logos/Simple Storage Service.svg';
import APIGatewayLogo from './aws-logos/API Gateway.svg';
import CDKLogo from './aws-logos/Cloud Development Kit.svg';
import SESLogo from './aws-logos/Simple Email Service.svg';
import SQSLogo from './aws-logos/Simple Queue Service.svg';

// JPEG Import
import BedrockLogo from './aws-logos/agentcore.jpeg';

// Styled Image Component
interface AWSLogoProps {
  src: string;
  alt: string;
  size?: number;
}

export const AWSLogoImage: React.FC<AWSLogoProps> = ({ src, alt, size = 60 }) => (
  <img 
    src={src} 
    alt={alt} 
    style={{ 
      width: `${size}px`, 
      height: `${size}px`, 
      objectFit: 'contain' 
    }} 
  />
);

// Export individual logos
export const AWSLogos = {
  Bedrock: BedrockLogo,
  Lambda: LambdaLogo,
  DynamoDB: DynamoDBLogo,
  S3: S3Logo,
  APIGateway: APIGatewayLogo,
  CDK: CDKLogo,
  SES: SESLogo,
  SQS: SQSLogo,
};

// Export as named components for easier use
export const BedrockIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <AWSLogoImage src={BedrockLogo} alt="Amazon Bedrock" size={size} />
);

export const LambdaIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <AWSLogoImage src={LambdaLogo} alt="AWS Lambda" size={size} />
);

export const DynamoDBIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <AWSLogoImage src={DynamoDBLogo} alt="Amazon DynamoDB" size={size} />
);

export const S3Icon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <AWSLogoImage src={S3Logo} alt="Amazon S3" size={size} />
);

export const APIGatewayIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <AWSLogoImage src={APIGatewayLogo} alt="Amazon API Gateway" size={size} />
);

export const CDKIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <AWSLogoImage src={CDKLogo} alt="AWS CDK" size={size} />
);

export const SESIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <AWSLogoImage src={SESLogo} alt="Amazon SES" size={size} />
);

export const SQSIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <AWSLogoImage src={SQSLogo} alt="Amazon SQS" size={size} />
);
