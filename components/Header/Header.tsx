import connectMongo from "@/db/connect";
import Image from "next/image";

// Icons
import { BsTrello } from "react-icons/bs";
import Nav from "./Nav";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-12 shadow-sm border-b border-gray-400 px-3">
      <LeftSection />
      <RightSection />
    </header>
  );
};

export default Header;
