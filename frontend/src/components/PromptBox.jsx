function PromptBox({
  prompt,
  setPrompt,
  handleGenerate,
}) {
  return (
    <>
      <textarea
        rows="5"
        cols="50"
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
        placeholder="Ask a DevOps question..."
      />

      <br />
      <br />

      <button
        onClick={handleGenerate}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Generate
      </button>
    </>
  );
}

export default PromptBox;