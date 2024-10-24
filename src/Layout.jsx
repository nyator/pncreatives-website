import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <div className="w-9/12 md:w-4/6 mx-auto">
          <Navbar title="Portfoli"/>
        </div>
        <Outlet />
        {/* <div className="w-9/12 md:w-4/6 mx-auto"> */}
          <Footer /> 
        {/* </div> */}
      </main>
    </>
  );
};

export default Layout;
