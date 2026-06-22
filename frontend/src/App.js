import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import PromptBox from "./components/PromptBox";
import ResponseBox from "./components/ResponseBox";
import { generateResponse }
from "./services/api";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {

  setLoading(true);

  try {

    const data =
      await generateResponse(prompt);

      console.log(data);

    setResponse(data.response);

  } catch (error) {

    console.error(error);

  }

  setLoading(false);

};

  return (
  <div
    style={{
      maxWidth: "900px",
      margin: "auto",
      padding: "20px",
    }}
  >
    <Header />

    <PromptBox
      prompt={prompt}
      setPrompt={setPrompt}
      handleGenerate={handleGenerate}
    />
{loading && (
  <h3>Generating...</h3>
)}
    <ResponseBox
      response={response}
    />
  </div>
);
}

export default App;