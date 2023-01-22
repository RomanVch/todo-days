import { checkboxClasses } from "@mui/material";

export const styles = () => ({
  checkbox: {
    paddingLeft: "0",
    [`&, &.${checkboxClasses.checked}`]: {
      color: "#F4F4F4",
    },
  },
});

export default styles;
