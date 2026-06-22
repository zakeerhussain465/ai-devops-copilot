const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const deploymentAgent =
require("./agents/deploymentAgent");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/generate", async (req, res) => {

  try {

    const { prompt } = req.body;

    const ollamaResponse =
      await axios.post(
        "http://localhost:11434/api/generate",
        {
         model: "qwen2.5:7b",
          prompt,
          stream: false
        }
      );

    res.json({
      response:
      ollamaResponse.data.response
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      response: error.message
    });

  }

});

app.post("/deploy-agent", async (req, res) => {

  try {

    const { prompt } = req.body;

    const response =
      await deploymentAgent(prompt);

    const generatedPath =
      path.join(__dirname, "generated");

    if (!fs.existsSync(generatedPath)) {
      fs.mkdirSync(generatedPath);
    }

    fs.writeFileSync(
      path.join(
        generatedPath,
        "output.txt"
      ),
      response.response
    );

    res.json({
      message: "Files generated",
      response: response.response
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      response: error.message
    });

  }

});

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});