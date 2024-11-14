import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatesNews from "../Components/LatesNews";
import LeftSide from "../Components/LayoutComponetes/LeftSide";
import RightSide from "../Components/LayoutComponetes/RightSide";
import Navber from "../Components/Navber";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatesNews></LatesNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-5">
        <Navber></Navber>
      </nav>
      {/* new topices / coding new style */}
      <main className="w-11/12 mx-auto  grid grid-cols-12 gap-5">
        <aside className=" left col-span-3">
          <LeftSide></LeftSide>
        </aside>
        <section className="col-span-6"><Outlet></Outlet></section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
