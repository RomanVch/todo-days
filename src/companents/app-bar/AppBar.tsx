import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

import Menu from "./menu/Menu";
import { styles } from "./styles";

export const Header: React.FC = () => {
  const classes = styles();
  return (
    <AppBar position="static" sx={classes.appBar}>
      <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={classes.title}>
          To Do
        </Typography>
        <Toolbar disableGutters={true}>
          <Menu />
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};
