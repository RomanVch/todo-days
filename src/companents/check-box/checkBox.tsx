import { checkboxClasses } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";

import styles from "./styles";

type CheckboxCustomT = {
  checked: boolean;
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const CheckboxCustom: React.FC<CheckboxCustomT> = ({ checked }) => {
  const classes = styles();
  return (
    <div>
      <Checkbox
        checked={checked}
        sx={classes.checkbox}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
};
