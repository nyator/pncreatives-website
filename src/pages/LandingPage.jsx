import Navbar from "../components/Navbar.jsx";
import {
  leftarrow,
  rightarrow,
  underline,
  lRectangle,
  rRectangle,
  hireus,
  logo,
} from "../constants/assets.js";

const LandingPage = () => {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <Navbar title="" />
      </div>
      <section className="text-primary  font-cVariable w-4/5 h-screen mx-auto justify-between items-center pt-[120px] md:pt-[180px]">
        <div className="leading-none font-cRegular line-clamp-[7] relative">
          <h1 className="text-clamp text-start relative">
            Refresh Your
            <div className="bg-gradient-to-l from-white to-secondary-default absolute left-2/3 md:left-2/4 top-1/3 rounded-full p-[2px]">
              <p className="text-clamp_2 px-5 py-[1.5px] rounded-full bg-gradient-to-r from-white to-secondary-default text-nowrap">
                create'n space
              </p>
            </div>
          </h1>
          <h1 className="text-clamp text-center">Brand With Pro</h1>
          <h1 className="text-clamp text-end relative ">Creative Services</h1>
        </div>
        {/* <img src={leftarrow} alt="left Arrow" className="absolute left-4/5 md:right-0 top-44 size-44 md:size-auto"/> */}
        {/* <img src={rightarrow} alt="left Arrow" className="absolute left-[-100px] top-[8rem]"/> */}
        {/* <img src={underline} alt="underline" className="absolute size-10 object-none top-[105rem] right-[0rem] md:size-3/5"/> */}

        <div className="flex flex-row justify-between mt-5 md:mt-10">

          <div className=" w-myspace bg-primary  text-white p-3 rounded-[20px]">
            <div className=" flex items-center justify-between">
              <h1 className="text-clamp_name font-cSemibold">300+</h1>
              <h1 className="text-clamp_desc font-cRegular">Projects</h1>
            </div>
            <p className="text-clamp_text text-[#B3B3B3]">
              We understand the importance creating a strong and recognisable
              visual and digital presence
            </p>
          </div>
          <div className="w-myspace bg-gradient-to-br from-secondary-yray to-secondary-default p-3 rounded-xl">
            <div className=" flex items-center justify-between">
              <h1 className="text-clamp_name font-cSemibold">150+</h1>
              <h1 className="text-clamp_desc font-cRegular">Happy Clients</h1>
            </div>
            <p className="text-clamp_text text-[#3F3E3E] w-5/6 text-wrap">
                    Keeping our clients happy and satisfied with their projects,
                    as we pay attention to project details.
                  </p>
          </div>

          {/* Left Rectangle */}

          {/* <div className="w-myspace">
            <div className="relative">
              <img
                src={lRectangle}
                alt=""
                className="w-full h-fit  object-fill"
              />
              <div className="absolute top-1 md:top-5 text-white px-3 md:px-5 text-nowrap w-full">
                <div className=" flex justify-between mb-0 sm:mb-3 md:mb-4">
                  <h1 className="text-clamp_name font-cSemibold">300+</h1>
                  <h1 className="text-clamp_desc font-cRegular">Projects</h1>
                </div>
                <p className="text-clamp_text text-[#B3B3B3] w-5/6 text-wrap">
                  We understand the importance creating a strong and
                  recognisable visual and digital presence
                </p>
              </div>
            </div>
          </div> */}

          {/* Right Rectangle */}

          {/* <div className="w-myspace">
            <div className="relative">
              <img
                src={rRectangle}
                alt=""
                className="w-full h-fit object-fill"
              />
              <div className="absolute top-1 md:top-5 text-primary px-3 md:px-5 text-nowrap w-full">
                <div className=" flex justify-between items-center mb-0 sm:mb-3 md:mb-4">
                  <h1 className="text-clamp_name font-cSemibold">150+</h1>
                  <h1 className="text-clamp_desc font-cRegular">
                    Happy Clients
                  </h1>
                </div>
                <div className="flex justify-end">
                  <p className="text-clamp_text text-[#3F3E3E] w-5/6 text-wrap">
                    Keeping our clients happy and satisfied with their projects,
                    as we pay attention to project details.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="bg-blue scale-100%  p-1 rounded-full flex items-center justify-center absolute bottom-[-7px] left-[42.8%]">
          <h1 className="text-center text-nowrap text-white text-[8px] font-cMedium">Hire Us!</h1>
        </div> */}

          {/* <div className="absolute bottom-0 left-[43.3%] bg-red-500">
            <img
              src={logo}
              alt=""
              className="size-7 object-fill  cursor-pointer"
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default LandingPage;

{
  /* <section className="text-primary  font-cVariable w-[84rem] h-screen mx-auto justify-between items-center pt-[220px] overflow-uto"></section> */
}
