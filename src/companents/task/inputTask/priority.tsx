import { Card } from "@mui/material";
import React from "react";

import { styles } from "./styles";

type InputTaskT = {
  text: string;
  type: "title" | "task";
  id: string;
};

export const InputTask: React.FC<InputTaskT> = ({ text, id }) => {
  const [edit, setEdit] = React.useState(false);
  return <div></div>;
};
