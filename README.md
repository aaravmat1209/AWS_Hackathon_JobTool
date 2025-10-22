# AI-Powered Job Search Assistant

A comprehensive chatbot application that provides intelligent job search and career guidance, powered by AWS Bedrock AgentCore and cutting-edge AI technologies.

## 🎯 Overview

This application combines natural language processing capabilities with intelligent job matching to deliver accurate, context-aware responses to user queries. Built on a serverless architecture with real-time communication, secure file management, and automated daily job recommendations.

### ✨ Key Features

- **🤖 Multi-Agent AI System** powered by AWS Bedrock with Claude 4.5 Sonnet
- **🧠 AgentCore Memory Integration** for cross-session conversation continuity
- **📧 Automated Daily Job Recommendations** via email and SMS
- **📄 AI Resume Parsing** with personalized job matching
- **💬 Real-time Chat Interface** with streaming responses
- **🎯 Intelligent Job Fit Analysis** using semantic search and AI models
- **🌙 Dark Theme UI** with responsive design
- **📱 Mobile-Friendly Interface** optimized for all devices

## 🏗️ Architecture

The application implements a serverless, event-driven architecture with a multi-agent AI system at its core, combining real-time user interactions with automated batch processing for job matching.
<img width="1451" height="1579" alt="JOB SEARCH ARCHITECTURE DIAGRAM drawio" src="https://github.com/user-attachments/assets/c3e3a995-07db-43f9-88f7-6fcd9af1a264" />


### Core Components

- **Frontend**: React.js with TypeScript and styled-components
- **Backend**: AWS Lambda functions with Node.js
- **AI Engine**: AWS Bedrock AgentCore with Claude 4.5 Sonnet
- **Database**: Amazon DynamoDB for user profiles and job data
- **Storage**: Amazon S3 for resume storage and processing
- **Authentication**: AWS Cognito for secure user management
- **Notifications**: Amazon SES and SNS for email/SMS delivery

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- AWS CLI configured with appropriate permissions
- AWS CDK installed globally
- Valid AWS account with Bedrock access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SayantikaPaul-12/AWS_Hackathon_JobTool.git
   cd AWS_Hackathon_JobTool
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Update .env with your AWS configuration
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## 💻 Usage

### For Job Seekers

1. **Profile Setup**: Upload your resume and complete your profile
2. **Chat Interface**: Ask questions about job opportunities, career advice, or interview preparation
3. **Job Recommendations**: Receive personalized job matches based on your profile
4. **Resume Review**: Get AI-powered feedback on your resume
5. **Interview Prep**: Practice with AI-generated interview questions

### Chat Commands

- "Find me job opportunities in [field]"
- "Review my resume and give feedback"
- "Help me prepare for interviews"
- "What skills should I develop for my career?"
- "Tell me about current trends in [industry]"

## 🎨 Features

### Intelligent Chatbot
- Natural language processing for career-related queries
- Context-aware responses with conversation memory
- Streaming responses for real-time interaction
- Multi-turn conversations with session persistence

### Job Matching Engine
- AI-powered job fit analysis
- Semantic search across job descriptions
- Personalized recommendations based on skills and experience
- Real-time job market insights

### Resume Processing
- Automated resume parsing and analysis
- Skills extraction and gap analysis
- Formatting and improvement suggestions
- ATS-friendly optimization tips

### User Experience
- Clean, modern dark theme interface
- Responsive design for all devices
- Intuitive navigation and user flow
- Accessibility-compliant components

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Styled Components** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons

### Backend & AI
- **AWS Bedrock AgentCore** for AI orchestration
- **Claude 4.5 Sonnet** for natural language processing
- **AWS Lambda** for serverless functions
- **Amazon DynamoDB** for data storage
- **Amazon S3** for file storage

### Infrastructure
- **AWS CDK** for infrastructure as code
- **Amazon CloudFront** for content delivery
- **AWS Cognito** for authentication
- **Amazon SES/SNS** for notifications

## 📁 Project Structure

```
AWS_Hackathon_JobTool/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service functions
│   │   ├── contexts/       # React contexts
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── backend/                # AWS Lambda functions
├── infrastructure/         # AWS CDK infrastructure code
├── docs/                  # Documentation files
└── README.md              # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
REACT_APP_AGENT_RUNTIME_ARN=your-bedrock-agent-arn
REACT_APP_AGENT_QUALIFIER=DEFAULT
REACT_APP_AWS_REGION=us-west-2
REACT_APP_RESUME_PROCESSOR_URL=your-lambda-url
REACT_APP_SAVE_PROFILE_URL=your-profile-lambda-url
REACT_APP_RESUME_BUCKET=your-s3-bucket-name
REACT_APP_JOB_RECOMMENDATIONS_API_URL=your-api-gateway-url
REACT_APP_COGNITO_IDENTITY_POOL_ID=your-cognito-pool-id
REACT_APP_AGENT_PROXY_URL=your-agent-proxy-url
```

## 🚀 Deployment

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy infrastructure**
   ```bash
   cd infrastructure
   cdk deploy
   ```

3. **Configure post-deployment settings**
   - Update Bedrock agent configurations
   - Set up notification preferences
   - Configure job data sources

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Credits

This application was architected and developed by:
- [Aryan Khanna](https://www.linkedin.com/in/aryankhanna2004/)
- [Aarav Matalia](https://www.linkedin.com/in/aarav-matalia/)
- [Sayantika Paul](https://www.linkedin.com/in/sayantikapaul12/)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/SayantikaPaul-12/AWS_Hackathon_JobTool/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Future Enhancements

- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Integration with job boards APIs
- [ ] Video interview preparation
- [ ] Salary negotiation guidance
- [ ] Career path visualization

---

**Built with 💡 innovation and ⚡ cutting-edge AI technologies.**
