import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import TopNav from "@/components/Nav/TopNav";
import MainContent from "@/components/MainContent/MainContent";
import KanbanBoard from "@/components/KanbanBoard/KanbanBoard";

const Home = () => {
  return (
    <main
      className={`bg-blue-600 min-h-full max-w-screen-2xl overflow-y-hidden overflow-x-auto mx-auto`}
    >
      <Header />
      <section className="flex max-w-screen-2xl md:mx-auto overflow-x-hidden bg-blue-600">
        <Sidebar />
        <main className="flex flex-col w-full">
          <TopNav />
          {/* <MainContent /> */}
          <KanbanBoard />
        </main>
      </section>
    </main>
  );
};

export default Home;
