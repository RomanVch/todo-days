export const styles = (open: boolean) => ({
  today: {
    display: "flex",
    backgroundColor: "#121212",
    alignItems: "center",
    padding: "5px 15px 5px 15px",
    marginBottom: "10px",
    borderRadius: "15px 15px 0 0",
    "& div": {
      fontSize: 24,
      fontWeight: 600,
    },
  },
  otherDay: {
    display: "flex",
    backgroundColor: "#282828",
    borderRadius: open ? "15px 15px 0 0" : "15px",
    alignItems: "center",
    marginBottom: "15px",
    marginTop: "25px",
    padding: "5px 15px 5px 15px",
    "& div": {
      fontSize: 24,
      fontWeight: 600,
    },
    "& button": {
      marginLeft: "auto",
    },
  },
});

export default styles;
