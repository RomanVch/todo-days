import { keyframes } from "@mui/system";

const text = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const styles = () => ({
  lineCard: {
    height: 50,
    width: "100%",
    margin: "0 auto",
    background: "#343436",
    display: "flex",
    alignItems: "center",
    "& p": {
      textAlign: "center",
      color: "#fff",
      textTransform: "uppercase",
      animation: `${text} 15s infinite linear`,
      whiteSpace: "nowrap",
    },
  },
});

export default styles;
