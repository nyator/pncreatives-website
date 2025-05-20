import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>My App</title>
      </Helmet>
      <main>
        <div className="w-9/12 md:w-4/6 mx-auto">
          <Navbar title="Portfoli"/>
        </div>
        <Outlet />
        <Footer /> 
      </main>
    </>
  );
};

export default Layout;
