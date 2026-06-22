const architectureAgent =
require("./architectureAgent");

const dockerAgent =
require("./dockerAgent");

const terraformAgent =
require("./terraformAgent");

const cicdAgent =
require("./cicdAgent");

async function deploymentAgent(userPrompt) {

  console.time("All Agents");

  try {

    console.log("Running All Agents...");

    const [
      architecture,
      docker,
      terraform,
      cicd
    ] = await Promise.all([
      architectureAgent(userPrompt),
      dockerAgent(userPrompt),
      terraformAgent(userPrompt),
      cicdAgent(userPrompt)
    ]);

    console.log("All Agents Completed");

    const combinedOutput = `
====================
ARCHITECTURE
====================

${architecture}

====================
DOCKER
====================

${docker}

====================
TERRAFORM
====================

${terraform}

====================
CI/CD
====================

${cicd}
`;

    console.timeEnd("All Agents");

    return {
      response: combinedOutput
    };

  } catch (error) {

    console.error(
      "Deployment Agent Error:",
      error
    );

    throw error;
  }
}

module.exports = deploymentAgent;