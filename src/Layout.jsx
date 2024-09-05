import Navbar from "../src/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <div className="w-9/12 md:w-4/6 mx-auto">
          <Navbar title="" />
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
