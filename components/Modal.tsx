import { Id, Task } from "@/utils/types";
import { Dispatch, FC, SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface IProps {
  setShowTaskOptions: Dispatch<SetStateAction<boolean>>;
  deleteTask: (id: Id) => void;
  task: Task;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<IProps> = ({
  setShowTaskOptions,
  task,
  deleteTask,
  setEditMode,
}) => {
  return (
    <section
      onClick={() => setShowTaskOptions(false)}
      className="fixed inset-0 z-10 bg-gray-800 opacity-90 flex justify-center items-center"
    >
      <div
        className="flex px-20 py-8 rounded-md relative bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col gap-2">
          <li
            onClick={() => {
              setEditMode(true);
              setShowTaskOptions(false);
            }}
            className="px-3 py-1 cursor-pointer bg-white text-black rounded-md"
          >
            Edit
          </li>
          <li className="px-3 py-1 cursor-pointer bg-white text-black rounded-md">
            Prev
          </li>
          <li className="px-3 py-1 cursor-pointer bg-white text-black rounded-md">
            Next
          </li>
          <li
            onClick={() => {
              deleteTask(task.id);
              setShowTaskOptions(false);
            }}
            className="px-3 py-1 cursor-pointer bg-white text-black rounded-md"
          >
            Delete
          </li>
        </ul>
        <button
          onClick={() => setShowTaskOptions(false)}
          className="absolute top-2 text-xl text-white right-2"
        >
          <IoCloseOutline />
        </button>
      </div>
    </section>
  );
};

export default Modal;
