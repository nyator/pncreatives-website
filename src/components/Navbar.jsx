import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HashLink as HashLink } from "react-router-hash-link";

import { styles } from "../constants/styles.js";
import { logo } from "../constants/assets.js";
import { CgMenuMotion } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";

const navLinks = [
  { title: "Services", href: "/#services", id: 1 },
  { title: "About Us", href: "/#about", id: 2 },
  { title: "Works", href: "/works", id: 3 },
];

const Navbar = ({ title, className }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.1,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 9.36, 0],
      },
    },
  };

  const mobNav = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      <div
        className={`${
          title === "Portfolio" ? `${styles.navop}` : `${styles.navBlur}`
        }  ${className}  flex font-cVariable w-9/12 md:w-4/6 mx-auto justify-between items-center pl-8 pr-4 py-3 mt-5 rounded-full z-50 `}
      >
        <Link to="/">
          <img src={logo} alt="pncreatives" className="size-8" />
        </Link>
        <div className="hidden md:flex space-x-[50px] lg:space-x-[70px] bg-[#fafafa65] py-3 px-5 rounded-full">
          <li className="list-none  text-navblack font-cMedium hover:text-primary transition-all duration-500 ease-in-out">
            <HashLink to={"/#services"} smooth>
              Services
            </HashLink>
          </li>
          <li className="list-none  text-navblack font-cMedium hover:text-primary transition-all duration-500 ease-in-out">
            <HashLink to={"/#about"} smooth>
              About Us
            </HashLink>
          </li>
          <li className="list-none  text-navblack font-cMedium hover:text-primary transition-all duration-500 ease-in-out">
            <Link to={"/works"}>works</Link>
          </li>
        </div>

        <button className="hidden md:flex  hover:text-primary bg-secondary-default hover:bg-secondary-default/70 py-2 px-5 font-cMedium text-navblack text-[15px] rounded-full transition-all duration-200 ease-linear">
          <Link to="/booking">Book A Service</Link>
        </button>

        <button className="md:hidden" onClick={toggleMenu}>
          <CgMenuMotion className="size-7 text-primary" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobNav}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed md:hidden h-screen w-full origin-top left-0 top-0 bg-white z-50"
          >
            <div className="flex w-9/12 mx-auto justify-between items-center pl-8 pr-4 py-3 mt-5 rounded-full">
              <Link to="/" onClick={toggleMenu}>
                <img src={logo} alt="pnCreatives" className="size-8" />
              </Link>

              <button className="md:hidden" onClick={toggleMenu}>
                <AiFillCloseCircle className="size-7 text-primary" />
              </button>
            </div>

            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full flex flex-col items-center justify-start px-10 gap-10 mt-[5rem] md:mt-32"
            >
              {navLinks.map((items) => {
                return (
                  <div className="overflow-hidden" key={items.id}>
                    <motion.div
                      variants={mobileLinkVars}
                      initial="initial"
                      animate="open"
                      key={items.id}
                      className="list-none flex justify-center items-center w-fit font-cVariable text-[3rem] text-navblack hover:text-primary transition-all duration-300 ease-in-out"
                    >
                      <HashLink to={items.href} smooth onClick={toggleMenu}>
                        {" "}
                        {items.title}{" "}
                      </HashLink>
                    </motion.div>
                  </div>
                );
              })}
              <button
                className="bg-secondary-yray py-2 px-5 font-cMedium text-navblack text-[20px] rounded-full border-secondary-default border-2 hover:scale-150 hover:bg-secondary-default hover:border-2 hover:border-dashed hover:border-white transition-all duration-500 ease-in-out "
                onClick={() => setOpen(false)}
              >
                <Link to="/booking">BOOK A SERVICE</Link>
              </button>
              <p className="font-cLight tracking-widest absolute bottom-10 z-10 text-[#a8a7a7] text-[12px] ">
                ©PNCREATIVESGH
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
