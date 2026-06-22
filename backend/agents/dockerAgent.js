const axios = require("axios");

async function dockerAgent(userPrompt) {

  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "qwen2.5:7b",
      prompt: `
You are a Senior Docker Engineer.

Task:
${userPrompt}

Generate ONLY:

====================
DOCKERFILE
====================

====================
DOCKER_COMPOSE
====================

Rules:
- Return complete code
- No explanations
- Production ready
- Use Node.js best practices
`,
      stream: false
    }
  );

  return response.data.response;
}

module.exports = dockerAgent;