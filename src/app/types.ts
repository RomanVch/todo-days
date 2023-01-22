export type CorrectTaskT = {
  id: string;
  title?: string;
  task?: string;
  priority?: number;
  success?: boolean;
};

export type NewTaskT = {
  title: string;
  task: string;
  date: string;
};

export type TaskT = NewTaskT & {
  success: boolean;
  priority: number;
  id: string;
};
export type TodoUiT = { [key: string]: TaskT[] };
