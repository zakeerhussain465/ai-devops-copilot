const axios = require("axios");

async function cicdAgent(userPrompt) {

  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "qwen2.5:7b",
      prompt: `
You are a DevOps CI/CD Engineer.

Task:
${userPrompt}

Generate ONLY:

====================
GITHUB_ACTIONS
====================

Rules:
- YAML only
- Complete workflow
- Build
- Test
- Deploy
- No explanations
`,
      stream: false
    }
  );

  return response.data.response;
}

module.exports = cicdAgent;