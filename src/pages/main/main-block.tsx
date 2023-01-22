import { Alert, Box } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";

import { api } from "../../app/API";
import { Preloader } from "../../companents/preloader/Preloader";
import { TodoDay } from "../../companents/todo-day/todoDay";
import styles from "./styles";

export const MainBlock: React.FC = () => {
  const { data, status } = useQuery("getTodos", () => api.getTodos());

  const isLoading = status === "loading" || status === "idle";
  const isError = status === "error";
  const classes = styles();
  return (
    <Box sx={classes.main}>
      {isLoading && <Preloader />}
      {isError && <Alert severity="error">Something went wrong</Alert>}
      <Box sx={{ flexDirection: "row", flexGrow: 1 }}>
        {data &&
          Object.keys(data)
            .sort((a, b) => {
              return new Date(a).getTime() - new Date(b).getTime();
            })
            .map((key) => {
              return <TodoDay key={key} tasks={data[key]} />;
            })}
      </Box>
    </Box>
  );
};
