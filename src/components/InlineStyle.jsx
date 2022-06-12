export const InlineStyle = () => {
  const containerStyle = {
    width: "500px",
    height: "100px",
    border: "solid 2px blue",
    borderRadius: "50px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "10px"
  };
  const titleStyle = {
    color: "green"
  };
  const buttonStyle = {
    border: "none",
    backgroundColor: "skyblue",
    borderRadius: "50px",
    color: "white"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
