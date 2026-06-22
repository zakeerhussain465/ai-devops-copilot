import axios from "axios";

export const generateResponse = async (prompt) => {

  const response = await axios.post(
    "http://localhost:5000/deploy-agent",
    {
      prompt
    }
  );

  return response.data;
};