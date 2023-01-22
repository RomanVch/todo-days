import {
  Alert,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import { useMutation, useQueryClient } from "react-query";

import { api } from "../../app/API";
import { NewTaskT } from "../../app/types";
import { mapper } from "../../utils/mapper";
import { DatePickerForm } from "../date-picker/date-picker";
import { Preloader } from "../preloader/Preloader";
import { styles } from "./styles";

const defaultTaskT: NewTaskT = {
  date: mapper.getDateForBack(new Date()),
  title: "title",
  task: "task",
};
export const AddTask = () => {
  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState<NewTaskT>(defaultTaskT);
  const classes = styles();
  React.useEffect(() => {
    setNewTask(() => {
      return defaultTaskT;
    });
  }, [open]);
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(api.addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
  });
  const onChangedTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask((prevState) => ({ ...prevState, title: event.target.value }));
  };
  const onChangedTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask((prevState) => ({ ...prevState, task: event.target.value }));
  };
  const getDate = (date: Date) => {
    setNewTask((prevState) => {
      return { ...prevState, date: mapper.getDateForBack(date) };
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    mutate(newTask);
    setOpen(false);
  };
  return (
    <div>
      <Box onClick={handleClickOpen} sx={classes.buttonAdd}>
        Add task
      </Box>
      <form onSubmit={handleSubmit}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={classes.buttonAdd}>Add task</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="Title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              value={newTask.title}
              onChange={onChangedTitle}
            />
            <TextField
              margin="dense"
              id="Task"
              label="Task"
              type="text"
              fullWidth
              variant="standard"
              value={newTask.task}
              onChange={onChangedTask}
            />
            <DatePickerForm getDate={getDate} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="submit">
              Add task
            </Button>
          </DialogActions>
          {isLoading && (
            <Box sx={classes.alertWrapper}>
              {" "}
              <Preloader />
            </Box>
          )}
          {isError && <Alert severity="error">Something went wrong</Alert>}
        </Dialog>
      </form>
    </div>
  );
};
