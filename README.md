# 🧠 Agentic Job Search – AI-Powered Career Assistant

A comprehensive, intelligent job search assistant that empowers students with personalized job recommendations, resume-based career insights, and automated daily notifications — built using **AWS Bedrock AgentCore**, **Nova Pro**, and **event-driven serverless architecture**.

---

## 🎥 Demo Video

<p align="center">
  <a href="https://www.youtube.com/watch?v=4EIM9nCceco">
    <img src="https://markdown-videos-api.jorgenkh.no/youtube/4EIM9nCceco?width=640&height=360&filetype=jpeg" alt="Demo Video"/>
  </a>
</p>

---

## 📘 Index

| Description | Link |
|-------------|------|
| Overview | [Overview](#overview) |
| Architecture | [Architecture](#architecture-diagram) |
| Detailed Architecture | [Detailed Architecture](docs/ARCHITECTURE.MD) |
| User Flow | [User Flow](docs/USERFLOW.md) |
| SMS Prerequisites | [SMS Prerequisites](docs/SMS_PREREQUISITES.md) |
| Deployment | [Deployment](docs/DEPLOYMENT.MD) |
| Post-Deployment Setup | [Post-Deployment Setup](docs/POST_DEPLOYMENT_SETUP.md) |
| Infrastructure | [Infrastructure](docs/INFRASTRUCTURE.MD) |
| Modification Guide | [Modification Guide](#modification-guide) |
| Credits | [Credits](#credits) |
| License | [License](#license) |

---

## 🧩 Overview

The **Agentic Job Search Assistant** leverages AWS Bedrock’s agentic capabilities to automate the end-to-end student job search process — from **resume parsing** to **daily career recommendations**.

It integrates **real-time user interactions** (via live search) with **automated batch processes** (for job matching and communication), providing a seamless and intelligent job discovery experience.

### 🌟 Key Features
- **Multi-Agent System (AgentCore):**  
  Includes a *Routing Agent*, *Career Exploration Agent*, and *Job Search Agent* for modular and dynamic decision-making.
- **AI-Powered Resume Parsing:**  
  Extracts key entities and skills using **Nova Pro** and stores structured student profiles in DynamoDB.
- **Automated Notifications:**  
  Sends **daily job updates via AWS SES (email)** and **SNS (SMS)**.
- **Event-Driven Architecture:**  
  Uses **Amazon EventBridge** and **SQS** for time-triggered and asynchronous job processing.
- **Knowledge Graph + RAG:**  
  Combines **Bedrock Knowledge Base**, **Graph RAG**, and **Neptune Graph** for context-aware job matching and career exploration.
- **Secure File Storage:**  
  User resumes and resources are securely managed in **Amazon S3**.

---

## 🏗️ Architecture Diagram

<p align="center">
  <img width="1100" height="950" alt="JOB SEARCH ARCHITECTURE DIAGRAM" src="https://github.com/user-attachments/assets/c3e3a995-07db-43f9-88f7-6fcd9af1a264" />
</p>

### 🔍 Architecture Overview

The system is divided into three main modules:

#### 1. **Live Search**
- Students upload resumes → stored in **Amazon S3**.  
- **Lambda + Nova Pro** parses resumes and extracts skills.  
- Processed profiles are stored via API Gateway → DynamoDB.  
- AgentCore runtime routes user queries to the appropriate agent:
  - **Career Exploration Agent:** Provides insights and skill-based recommendations.  
  - **Job Search Agent:** Fetches job postings and returns AI-filtered results.

#### 2. **Job Search Batch Process**
- Triggered daily via **Amazon EventBridge**.  
- Lambda adds new student job search tasks to **Amazon SQS** queue.  
- Another Lambda processes queued tasks to perform job searches and updates DynamoDB with results.

#### 3. **Communication Batch Process**
- Triggered daily at configurable times (e.g., 9 AM).  
- Fetches new job recommendations from DynamoDB.  
- Sends personalized **email and SMS notifications** using:
  - **Amazon SES (Email Service)**  
  - **Amazon SNS (SMS Service)**

#### 4. **Knowledge Infrastructure**
- **Bedrock Knowledge Base** connects with:
  - **S3 Vector Store:** Stores semantic embeddings of career resources.  
  - **Neptune Graph:** Stores relational data between jobs, skills, and industries.  
  - **Graph RAG:** Enhances contextual retrieval for AI-driven responses.

---

## 🚀 Deployment

Follow the complete deployment guide here:  
👉 [docs/DEPLOYMENT.MD](docs/DEPLOYMENT.MD)

Includes setup for:
- Lambda functions  
- API Gateway routes  
- Bedrock AgentCore configuration  
- DynamoDB and Neptune initialization  
- SQS and EventBridge scheduling  
- SES/SNS permissions for notifications  

---

## 🧠 Post-Deployment Usage

After successful deployment:
1. Upload student resumes via the web interface.  
2. Use **Live Search** for real-time job queries.  
3. Receive **daily job recommendations** via email and SMS.  
4. Explore personalized **career resources** powered by Graph RAG.

For detailed steps → [Post Deployment Setup](docs/POST_DEPLOYMENT_SETUP.md)

---

## ⚙️ Infrastructure Overview

The entire system is **serverless** and **event-driven**, leveraging:
- **Compute:** AWS Lambda  
- **Storage:** S3, DynamoDB  
- **AI Models:** Bedrock (Claude Sonnet, Nova Pro)  
- **Messaging:** SQS, SNS, SES  
- **Graph & RAG:** Neptune Graph, Bedrock Knowledge Base  
- **Automation:** EventBridge

See full infrastructure details in [docs/INFRASTRUCTURE.MD](docs/INFRASTRUCTURE.MD).

---

## 🧭 Modification Guide

You can easily extend or modify:
- **LLM Models:** Swap Bedrock models (e.g., Nova Pro → Claude 3.5 Sonnet).  
- **Notification Logic:** Add more conditions or new channels (Slack, Teams).  
- **Agent Behavior:** Adjust Routing Agent logic to support new intents.  

See [docs/modificationGuide.md](docs/modificationGuide.md) for instructions.

---

## 👩‍💻 Credits

Developed by the **ASU Career Services AI Team** in collaboration with **AWS AI Cloud Innovation Center**.  
**Contributors:**
- [Sayantika Paul](https://www.linkedin.com/in/sayantikapaul12/)  
- [Aryan Khanna](https://www.linkedin.com/in/aryankhanna2004/)  
- [Aarav Matalia](https://www.linkedin.com/in/aarav-matalia/)

---

## 📜 License

Licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
