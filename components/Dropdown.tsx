import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  setShowTaskOptions: Dispatch<SetStateAction<boolean>>;
}

const Dropdown: FC<IProps> = ({ setShowTaskOptions }) => {
  return (
    <section className="absolute -top-10 -right-10 z-10 bg-red-600 px-4 py-3">
      <h2>List Actions</h2>
      <ul>
        <li>List-1</li>
        <li>List-2</li>
        <li>List-3</li>
      </ul>
      {/* <button className="absolute right-2 top-2">
        <AiOutlineClose />
      </button> */}
    </section>
  );
};

export default Dropdown;
