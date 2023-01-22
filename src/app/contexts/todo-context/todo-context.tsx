import React, { createContext, Dispatch } from "react";

type TypeSetState<T> = Dispatch<T>;

type TodoState = {
  addTaskCheck: boolean;
  setAddTaskCheck: TypeSetState<boolean>;
  news: boolean;
  setNews: TypeSetState<boolean>;
};

export const defaultState = {
  addTaskCheck: false,
  setAddTaskCheck: () => {
    console.log("setAddTaskCheck");
  },
  news: true,
  setNews: () => {
    console.log("setNews");
  },
};

export const TodoContext = createContext<TodoState>(defaultState);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [addTaskCheck, setAddTaskCheck] = React.useState(false);
  const [news, setNews] = React.useState(true);

  return (
    <TodoContext.Provider
      value={{ addTaskCheck, setAddTaskCheck, news, setNews }}
    >
      {children}
    </TodoContext.Provider>
  );
};
