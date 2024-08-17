import { useState } from "react";
import { Link } from "react-router-dom";

import { logo } from "../constants/assets.js";
import { CgMenuMotion } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";

const navLinks = [
  { title: "Services", href: "/" },
  { title: "About Us", href: "/" },
  { title: "Portfolio", href: "/portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div className="flex bg-red-400 font-cVariable w-4/5 mx-auto justify-between items-center pl-8 pr-4 py-3 mt-10 rounded-full">
        <div>
          <img src={logo} alt="pncreatives" className="size-8" />
        </div>
        <div className="hidden md:flex space-x-[60px] bg-gray py-2 px-5 font-cMedium text-navblack text-[13px] rounded-full">
          {navLinks.map((items,index) => {
            return (
              <>
                <li key={index} className="list-none">
                  <Link to={items.href}>{items.title}</Link>
                </li>
              </>
            );
          })}
        </div>

        <button className="hidden md:flex  bg-secondary-default py-2 px-5 font-cMedium text-navblack text-[15px] rounded-full ">
          <a href="">Contact US</a>
        </button>




        <button className="md:hidden" onClick={toggleMenu}>
          <CgMenuMotion className="size-7 text-primary" />
        </button>

        {open && (
          <div className="fixed md:hidden h-screen w-full left-0 top-0 bg-gray">
            <div className="flex w-4/5 mx-auto justify-between items-center pl-8 pr-4 py-3 mt-10 rounded-full">
              <div>
                <img src={logo} alt="pncreatives" className="size-8" />
              </div>
              <button className="md:hidden" onClick={toggleMenu}>
                <AiFillCloseCircle className="size-7 text-primary" />
              </button>
            </div>

            <div className="h-full flex flex-col items-center justify-start px-10 gap-10 mt-20">
              {navLinks.map((items, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className="list-none flex justify-center items-center w-fit text-[50px] hover:underline underline-offset-5 transition-all duration-500 ease-in-out"
                    >
                      <Link to={items.href}>{items.title}</Link>
                    </li>
                  </>
                );
              })}
              <button className="bg-secondary-yray py-2 px-5 font-cMedium text-navblack text-[20px] rounded-full hover:scale-150 hover:bg-secondary-default hover:border-2 border-dashed border-gray transition-all duration-500 ease-in-out ">
                <a href="">Contact US</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
