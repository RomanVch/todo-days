export const styles = (cheked: boolean) => ({
  task: {
    padding: "0px 15px 0px 15px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: "28px",
    textDecoration: cheked ? "line-through" : "none",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "50vw",
    "& p": {
      textAlign: "center",
      color: "#fff",
    },
  },
  input: {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: 16,
  },
});

export default styles;
