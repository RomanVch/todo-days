import React from "react";
import { useMutation, useQueryClient } from "react-query";

import { api } from "../../../app/API";
import { styles } from "./styles";

type PriorityT = {
  priority: number;
  id: string;
};

const colors = ["gray", "#FF0000", "#366EFF", "#FFEB33", "green"];

export const Priority: React.FC<PriorityT> = ({ priority, id }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(api.correctTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
  });
  const onClick = () => {
    if (!priority) {
      return;
    }
    const nextPriority = +priority + 1;
    if (nextPriority < 4) {
      mutate({ id, priority: nextPriority });
    } else {
      mutate({ id, priority: 1 });
    }
  };
  const color = colors[priority];
  const classes = styles(color);
  return (
    <div
      role="button"
      tabIndex={0}
      style={classes.priority}
      onMouseDown={onClick}
    />
  );
};
