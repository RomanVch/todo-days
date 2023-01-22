import { Box, Card } from "@mui/material";
import React, { useState } from "react";

import { TaskT } from "../../app/types";
import { whatDay } from "../../utils/whatDay";
import { Task } from "../task/task";
import { HeadTodoDay } from "./head-todo-day/head-todo-day";
import styles from "./styles";

type TodoDayT = {
  tasks: TaskT[];
};

export const TodoDay: React.FC<TodoDayT> = ({ tasks }) => {
  const [open, setOpen] = useState(false);
  if (tasks.length === 0) return null;
  const classes = styles();
  const day = whatDay(tasks[0].date);
  const onClickOpen = () => setOpen((prev) => !prev);
  const showTask = () => {
    if (day === "Today") {
      return true;
    }
    return open;
  };
  return (
    <Box sx={classes.todoDay}>
      <HeadTodoDay whatDay={day} onClickOpen={onClickOpen} open={open} />
      {showTask() &&
        tasks
          .sort((a, b) => {
            return a.priority - b.priority;
          })
          .map((task) => <Task key={task.id} task={task} />)}
    </Box>
  );
};
