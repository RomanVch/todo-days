import { Box, Card, IconButton } from "@mui/material";
import React from "react";

import { TurnIcon } from "../../../assets/svg/Turn";
import { CheckboxCustom } from "../../check-box/checkBox";
import { Priority } from "../../task/priority/priority";
import styles from "./styles";
type HeadTodoDayT = {
  whatDay: string;
  onClickOpen: () => void;
  open: boolean;
};
export const HeadTodoDay: React.FC<HeadTodoDayT> = ({
  whatDay,
  onClickOpen,
  open,
}) => {
  const classes = styles(open);
  if (whatDay === "Today") {
    return (
      <Box sx={classes.today}>
        <CheckboxCustom checked={true} /> <div> {whatDay} Tasks: </div>
      </Box>
    );
  } else {
    return (
      <Box sx={classes.otherDay}>
        <Priority priority={0} id={""} /> <div> {whatDay} Tasks: </div>
        <IconButton onClick={onClickOpen}>
          {open ? (
            <TurnIcon />
          ) : (
            <TurnIcon
              sx={{
                transform: "rotate(180deg)",
                transformOrigin: "center center",
              }}
            />
          )}
        </IconButton>
      </Box>
    );
  }
};
