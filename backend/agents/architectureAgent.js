const axios = require("axios");

async function architectureAgent(userPrompt) {

  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "qwen2.5:7b",
      prompt: `
You are an AWS Solutions Architect.

User Request:
${userPrompt}

Generate:

- Architecture Diagram Description
- AWS Services Used
- Network Flow

Return concise output.
`,
      stream: false
    }
  );

  return response.data.response;
}

module.exports = architectureAgent;