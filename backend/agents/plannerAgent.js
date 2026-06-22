const axios = require("axios");

async function plannerAgent(userPrompt) {

  const response =
    await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "qwen2.5:7b",
        prompt: `
Analyze:

${userPrompt}

Return:

Application Type:
Cloud Provider:
Need Docker:
Need Terraform:
Need Kubernetes:
Need CI/CD:
`,
        stream: false
      }
    );

  return response.data.response;
}

module.exports = plannerAgent;