import { Box, Card, InputBase, TextField } from "@mui/material";
import React from "react";
import { useMutation, useQueryClient } from "react-query";

import { api } from "../../app/API";
import { TaskT } from "../../app/types";
import { CustomSwitch } from "../switch/custom-switch";
import { Priority } from "./priority/priority";
import styles from "./styles";

type TodoDayT = {
  task: TaskT;
};

export const Task: React.FC<TodoDayT> = ({ task }) => {
  const [inputData, setInputData] = React.useState({
    editTask: false,
    task: task.task,
    editTitle: false,
    title: task.title,
  });
  const queryClient = useQueryClient();
  const classes = styles(task.success);
  const { mutate, isError } = useMutation(api.correctTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
  });

  const onSwitch = () => {
    if (isError) {
      return;
    }
    mutate({
      id: task.id,
      success: !task.success,
    });
  };
  const onMouseDownTask = () => {
    setInputData((prev) => ({ ...prev, editTask: !prev.editTask }));
    if (inputData.editTask) {
      mutate({
        id: task.id,
        task: inputData.task,
      });
    }
  };
  const onMouseDownTitle = () => {
    setInputData((prev) => ({ ...prev, editTitle: !prev.editTitle }));
    if (inputData.editTitle) {
      mutate({
        id: task.id,
        title: inputData.title,
      });
    }
  };
  const onChangedTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((prev) => ({ ...prev, title: event.target.value }));
  };
  const onChangedTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((prev) => ({ ...prev, task: event.target.value }));
  };

  return (
    <Box sx={classes.task}>
      <div>
        <Priority priority={task.priority} id={task.id} />
      </div>
      <div>
        {!inputData.editTitle ? (
          <div
            role="button"
            tabIndex={0}
            onMouseDown={onMouseDownTitle}
            style={classes.title}
          >
            {task.title}
          </div>
        ) : (
          <InputBase
            margin="dense"
            id="Title"
            type="text"
            fullWidth
            value={inputData.title}
            onMouseDown={onMouseDownTitle}
            onChange={onChangedTitle}
            sx={{ ...classes.title, color: "white" }}
          />
        )}
        {!inputData.editTask ? (
          <div role="button" tabIndex={0} onMouseDown={onMouseDownTask}>
            {task.task}
          </div>
        ) : (
          <InputBase
            margin="dense"
            id="Task"
            type="text"
            fullWidth
            value={inputData.task}
            onChange={onChangedTask}
            onMouseDown={onMouseDownTask}
            sx={{ ...classes.task, color: "white" }}
          />
        )}
      </div>
      <Box sx={{ marginLeft: "auto" }}>
        <CustomSwitch checked={task.success} onChange={onSwitch} />
      </Box>
    </Box>
  );
};
