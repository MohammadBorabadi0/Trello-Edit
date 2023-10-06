import { MouseEvent, useState } from "react";
import { Id, Task } from "@/utils/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AiTwotoneEdit } from "react-icons/ai";
import Modal from "../Modal";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showTaskOptions, setShowTaskOptions] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  const handleColumnOptions = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowTaskOptions(true);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      p-2.5 h-fit items-center flex text-left rounded-xl border-2 border-blue-500  cursor-grab relative
      "
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-white text-gray-500 p-2 rounded-xl border mb-2 items-center flex text-left hover:ring-2 hover:ring-inset hover:ring-blue-500 cursor-grab relative"
      >
        <input
          className="
        w-full border-none rounded bg-transparent text-gray-500 focus:outline-none focus:text-black
        "
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>
    );
  }

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        onClick={toggleEditMode}
        className="bg-white shadow-sm border p-2 h-fit items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-blue-500 cursor-grab relative task"
        onMouseEnter={() => {
          setMouseIsOver(true);
        }}
        onMouseLeave={() => {
          setMouseIsOver(false);
        }}
      >
        <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
          {task.content}
        </p>

        {mouseIsOver && (
          <button
            onClick={handleColumnOptions}
            className="stroke-white absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded opacity-60 hover:opacity-100"
          >
            <AiTwotoneEdit />
          </button>
        )}
      </div>
      <div className="relative">
        {showTaskOptions && (
          <Modal
            setShowTaskOptions={setShowTaskOptions}
            deleteTask={deleteTask}
            task={task}
            setEditMode={setEditMode}
          />
        )}
      </div>
    </>
  );
}

export default TaskCard;
