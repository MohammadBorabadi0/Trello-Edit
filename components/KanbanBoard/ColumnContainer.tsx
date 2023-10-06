import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Column, Id, Task } from "@/utils/types";
import { CSS } from "@dnd-kit/utilities";
import { MouseEvent, MouseEventHandler, useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import { FiMoreHorizontal } from "react-icons/fi";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const handleOption = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      opacity-40
      border-2
      border-pink-500
      bg-gray-400
      w-[275px]
      min-h-[200px]
      max-h-fit
      rounded-md
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    <section
      ref={setNodeRef}
      style={style}
      className="
  w-[275px]
  h-fit
  max-h-[500px]
  shadow-lg
  rounded-md
  flex
  flex-col
  "
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className="
      text-md
      h-[60px]
      cursor-grab
      rounded-md
      rounded-b-none
      p-3
      font-bold
    bg-[#F1F2F4]
      flex
      items-center
      justify-between
      "
      >
        <div className="flex gap-2">
          {!editMode && column.title}
          {editMode && (
            <input
              className="h-full bg-white focus:border-blue-500 border-2 rounded-lg outline-none px-2 py-1"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={handleOption}
          className="   
        rounded
        hover:bg-slate-200
        p-2
        "
        >
          <FiMoreHorizontal />
        </button>
      </div>

      {/* Column task container */}
      <div className="flex flex-grow flex-col gap-1 p-2 bg-[#F1F2F4] overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      <button
        className="flex bg-[#F1F2F4] gap-2 items-center border rounded-b-md px-4 py-3"
        onClick={() => {
          createTask(column.id);
        }}
      >
        + Add task
      </button>
    </section>
  );
}

export default ColumnContainer;
