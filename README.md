# AI DevOps Copilot 🚀

AI DevOps Copilot is an intelligent DevOps assistant that helps users generate cloud infrastructure, Docker configurations, Terraform scripts, CI/CD pipelines, and deployment architectures from natural language prompts.

The project uses a multi-agent architecture where specialized agents generate different DevOps artifacts and combine them into a single deployment solution.

---

## Features

* 🏗️ Architecture Generation
* 🐳 Dockerfile & Docker Compose Generation
* ☁️ Terraform Infrastructure Generation
* 🔄 CI/CD Pipeline Generation
* 🤖 Multi-Agent Architecture
* 🖥️ React Frontend Interface
* ⚡ Node.js & Express Backend
* 🔗 Ollama Local LLM Integration
* 📄 Automatic Output File Generation

---

## Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Axios
* Ollama

### DevOps Technologies

* Docker
* Terraform
* AWS
* GitHub Actions
* CI/CD

---

## Project Architecture

```text
User Prompt
      │
      ▼
React Frontend
      │
      ▼
Express Backend
      │
      ▼
Deployment Agent
      │
 ┌────┼────┬────┬────┐
 ▼    ▼    ▼    ▼
Architecture Agent
Docker Agent
Terraform Agent
CI/CD Agent
      │
      ▼
Combined Output
      │
      ▼
Generated Files
```

---

## Folder Structure

```text
AI-DEVOPS-COPILOT
│
├── backend
│   ├── agents
│   │   ├── architectureAgent.js
│   │   ├── dockerAgent.js
│   │   ├── terraformAgent.js
│   │   ├── cicdAgent.js
│   │   ├── deploymentAgent.js
│   │   └── validatorAgent.js
│   │
│   ├── generated
│   ├── templates
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   └── App.js
│   │
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/ai-devops-copilot.git
cd ai-devops-copilot
```

---

### Backend Setup

```bash
cd backend
npm install
```

Start backend:

```bash
node server.js
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

### Ollama Setup

Install Ollama:

https://ollama.com

Pull a model:

```bash
ollama pull qwen2.5:1.5b
```

Run model:

```bash
ollama run qwen2.5:1.5b
```

---

## Example Prompts

### AWS Deployment

```text
Deploy a MERN application on AWS
```

### Terraform

```text
Create Terraform code for an EC2 instance and S3 bucket
```

### Docker

```text
Dockerize a Node.js application
```

### CI/CD

```text
Create a GitHub Actions pipeline for a React application
```

---

## Future Enhancements

* Kubernetes Agent
* AWS Cost Optimization Agent
* Automatic File Generation
* ZIP Download Support
* Multi-Cloud Support (AWS, Azure, GCP)
* DevSecOps Integration
* AI-Powered Infrastructure Recommendations

---

## Learning Outcomes

This project helped in understanding:

* Multi-Agent AI Systems
* DevOps Automation
* Infrastructure as Code
* Docker & Containerization
* Terraform
* CI/CD Pipelines
* AWS Cloud Services
* React & Node.js Integration

---

## Author

**Sheik Zakeer Hussain**

Final Year Information Science Engineering Student | Cloud & DevOps Enthusiast

LinkedIn: Add your profile link

GitHub: Add your GitHub profile link
