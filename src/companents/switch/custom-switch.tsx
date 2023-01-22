import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import * as React from "react";

import { MaterialUISwitch } from "./material-UI-switch";

type CustomSwitchProps = {
  checked: boolean;
  onChange: () => void;
};

export const CustomSwitch: React.FC<CustomSwitchProps> = ({
  checked,
  onChange,
}) => {
  const handleChange = () => {
    onChange();
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} />}
        label=""
        checked={checked}
        onClick={handleChange}
      />
    </FormGroup>
  );
};
