import { motion } from "framer-motion";

interface IDropdownProps {
  isShow: Boolean;
}

const Dropdown = ({ isShow }: IDropdownProps) => {
  return (
    <motion.div
      animate={{ opacity: isShow ? 1 : 0 }}
      className="bg-white text-black absolute top-10 right-1 w-[300px] h-fit px-2 py-2 rounded-md"
    >
      <h2>Item-1</h2>
      <h2>Item-2</h2>
      <h2>Item-3</h2>
      <h2>Item-4</h2>
    </motion.div>
  );
};

export default Dropdown;
