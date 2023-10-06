import { Column, Task } from "./types";

const defaultCols: Column[] = [
  {
    id: "todo",
    title: "Todo",
  },
  {
    id: "doing",
    title: "Work in progress",
  },
  {
    id: "done",
    title: "Done",
  },
];

const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: "todo",
    content: "Content-1",
  },
  {
    id: "2",
    columnId: "done",
    content: "Content-2",
  },
  {
    id: "3",
    columnId: "doing",
    content: "Content-3",
  },
];

export { defaultCols, defaultTasks };
