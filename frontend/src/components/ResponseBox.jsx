function ResponseBox({
  response,
}) {
  return (
    <pre
  style={{
    backgroundColor: "#f4f4f4",
    padding: "15px",
    borderRadius: "8px",
    whiteSpace: "pre-wrap",
    overflowX: "auto",
  }}
>
  {response}
</pre>
  );
}

export default ResponseBox;