const axios = require("axios");

async function validatorAgent(output) {

  const response =
    await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "qwen2.5:7b",
        prompt: `
You are a Senior DevOps Reviewer.

Review the following output.

Rules:

1. If a section is already correct,
   keep it unchanged.

2. If a section contains mistakes,
   fix ONLY the mistakes.

3. Do NOT rewrite the entire document.

4. Do NOT change architecture unless it is wrong.

5. Do NOT replace MongoDB with PostgreSQL unless explicitly requested.

6. Preserve all code blocks.

7. Preserve all section headings.

Output the corrected version only.

${output}
`,
        stream: false
      }
    );

  console.log(
    "Validator Response Received"
  );

  return response.data.response;
}

module.exports = validatorAgent;