import Image from "next/image";

const navItems = ["Workspaces", "Recent", "Starred", "Templates"];

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center text-white font-semibold gap-2 text-sm">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex gap-1 items-center px-2 py-1 cursor-pointer rounded-md hover-link transition-colors duration-100"
          >
            {item}{" "}
            <Image
              src="/down.svg"
              alt="chevron"
              className="mt-1"
              width={20}
              height={10}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
