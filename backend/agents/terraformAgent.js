const axios = require("axios");

async function terraformAgent(userPrompt) {

  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "qwen2.5:7b",
      prompt: `
You are an AWS Terraform Expert.

Task:
${userPrompt}

Generate ONLY:

====================
MAIN_TF
====================

Rules:
- AWS provider
- EC2
- Security Group
- Complete Terraform code
- No explanations
- No markdown
`,
      stream: false
    }
  );

  return response.data.response;
}

module.exports = terraformAgent;