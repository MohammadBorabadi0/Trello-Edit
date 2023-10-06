import { BsPlus } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { CgTemplate } from "react-icons/cg";

const MainContent = () => {
  return (
    <div className="flex gap-4 p-6 h-[calc(100%-105px)] overflow-x-auto">
      <section className="min-w-[275px] rounded-xl bg-[#F1F2F4] text-gray-500 py-2 font-semibold h-fit">
        <header className="flex justify-between items-center mb-3 px-4">
          <h3 className="text-black">List-1</h3>
          <button className="hover:bg-gray-300 p-2 rounded-md">
            <FiMoreHorizontal />
          </button>
        </header>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-1
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-2
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-3
        </div>
        <footer className="flex justify-between items-center px-4">
          <button className="flex gap-1 items-center hover:bg-gray-300 rounded-md p-1 w-full my-1">
            <BsPlus className="text-3xl" />
            Add a card
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-md">
            <CgTemplate />
          </button>
        </footer>
      </section>
      <section className="min-w-[275px] rounded-xl bg-[#F1F2F4] text-gray-500 py-2 font-semibold h-fit">
        <header className="flex justify-between items-center mb-3 px-4">
          <h3 className="text-black">List-1</h3>
          <button className="hover:bg-gray-300 p-2 rounded-md">
            <FiMoreHorizontal />
          </button>
        </header>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-1
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-2
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-3
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-4
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-5
        </div>
        <footer className="flex justify-between items-center px-4">
          <button className="flex gap-1 items-center hover:bg-gray-300 rounded-md p-1 w-full my-1">
            <BsPlus className="text-3xl" />
            Add a card
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-md">
            <CgTemplate />
          </button>
        </footer>
      </section>
      <section className="min-w-[275px] rounded-xl bg-[#F1F2F4] text-gray-500 py-2 font-semibold h-fit">
        <header className="flex justify-between items-center mb-3 px-4">
          <h3 className="text-black">List-1</h3>
          <button className="hover:bg-gray-300 p-2 rounded-md">
            <FiMoreHorizontal />
          </button>
        </header>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-1
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-2
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-3
        </div>
        <footer className="flex justify-between items-center px-4">
          <button className="flex gap-1 items-center hover:bg-gray-300 rounded-md p-1 w-full my-1">
            <BsPlus className="text-3xl" />
            Add a card
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-md">
            <CgTemplate />
          </button>
        </footer>
      </section>
      {/* <section className="min-w-[275px] rounded-xl bg-[#F1F2F4] text-gray-500 py-2 font-semibold h-fit">
        <header className="flex justify-between items-center mb-3 px-4">
          <h3 className="text-black">List-1</h3>
          <button className="hover:bg-gray-300 p-2 rounded-md">
            <FiMoreHorizontal />
          </button>
        </header>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-1
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-2
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-3
        </div>
        <footer className="flex justify-between items-center px-4">
          <button className="flex gap-1 items-center hover:bg-gray-300 rounded-md p-1 w-full my-1">
            <BsPlus className="text-3xl" />
            Add a card
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-md">
            <CgTemplate />
          </button>
        </footer>
      </section>
      <section className="min-w-[275px] rounded-xl bg-[#F1F2F4] text-gray-500 py-2 font-semibold h-fit">
        <header className="flex justify-between items-center mb-3 px-4">
          <h3 className="text-black">List-1</h3>
          <button className="hover:bg-gray-300 p-2 rounded-md">
            <FiMoreHorizontal />
          </button>
        </header>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-1
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-2
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-3
        </div>
        <footer className="flex justify-between items-center px-4">
          <button className="flex gap-1 items-center hover:bg-gray-300 rounded-md p-1 w-full my-1">
            <BsPlus className="text-3xl" />
            Add a card
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-md">
            <CgTemplate />
          </button>
        </footer>
      </section>
      <section className="min-w-[275px] rounded-xl bg-[#F1F2F4] text-gray-500 py-2 font-semibold h-fit">
        <header className="flex justify-between items-center mb-3 px-4">
          <h3 className="text-black">List-1</h3>
          <button className="hover:bg-gray-300 p-2 rounded-md">
            <FiMoreHorizontal />
          </button>
        </header>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-1
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-2
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-3
        </div>
        <footer className="flex justify-between items-center px-4">
          <button className="flex gap-1 items-center hover:bg-gray-300 rounded-md p-1 w-full my-1">
            <BsPlus className="text-3xl" />
            Add a card
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-md">
            <CgTemplate />
          </button>
        </footer>
      </section>
      <section className="min-w-[275px] rounded-xl bg-[#F1F2F4] text-gray-500 py-2 font-semibold h-fit">
        <header className="flex justify-between items-center mb-3 px-4">
          <h3 className="text-black">List-1</h3>
          <button className="hover:bg-gray-300 p-2 rounded-md">
            <FiMoreHorizontal />
          </button>
        </header>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-1
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-2
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-3
        </div>
        <footer className="flex justify-between items-center px-4">
          <button className="flex gap-1 items-center hover:bg-gray-300 rounded-md p-1 w-full my-1">
            <BsPlus className="text-3xl" />
            Add a card
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-md">
            <CgTemplate />
          </button>
        </footer>
      </section>
      <section className="min-w-[275px] rounded-xl bg-[#F1F2F4] text-gray-500 py-2 font-semibold h-fit">
        <header className="flex justify-between items-center mb-3 px-4">
          <h3 className="text-black">List-1</h3>
          <button className="hover:bg-gray-300 p-2 rounded-md">
            <FiMoreHorizontal />
          </button>
        </header>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-1
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-2
        </div>
        <div className="bg-white px-2 py-1.5 mx-2 rounded-lg border mb-2">
          Card-3
        </div>
        <footer className="flex justify-between items-center px-4">
          <button className="flex gap-1 items-center hover:bg-gray-300 rounded-md p-1 w-full my-1">
            <BsPlus className="text-3xl" />
            Add a card
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-md">
            <CgTemplate />
          </button>
        </footer>
      </section> */}
    </div>
  );
};

export default MainContent;
