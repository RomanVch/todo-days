import { useContext } from "react";

import { TodoContext } from "../../app/contexts/todo-context/todo-context";

export const useDataTodo = () => {
  return useContext(TodoContext);
};
