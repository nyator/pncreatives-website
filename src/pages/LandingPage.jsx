import Title from "../components/Title.jsx";
import {
  leftarrow,
  rightarrow,
  underline,
  lRectangle,
  rRectangle,
  hireus,
  logo,
} from "../constants/assets.js";

import { services } from "../constants/index.js";


const LandingPage = () => {
  return (
    <>
      <section className="bg-hero-pattern">
        <div className="text-primary font-cVariable w-9/12 md:w-4/6 mx-auto h-screen justify-center items-center content-evenly space-y-[3rem]">
          <div className="leading-none font-cRegular line-clamp-[7]">
            <h1 className="text-clamp text-start relative">
              Refresh Your
              <div className="bg-gradient-to-l from-white to-secondary-default absolute left-2/3 md:left-2/4 top-1/3 rounded-full p-[2px] -z-10">
                <p className="text-clamp_2 px-2 py-[1.5px] rounded-full bg-gradient-to-r from-white to-secondary-default text-nowrap">
                  create'n space
                </p>
              </div>
            </h1>
            <h1 className="text-clamp text-center">Brand With Pro</h1>
            <h1 className="text-clamp text-end relative">Creative Services</h1>
          </div>

          {/* <div className="absolute top-0 right-[-30px] w-clamp">
                <img src={leftarrow} alt="left Arrow" className="object-fit"/>
              </div> */}
          {/* <img src={rightarrow} alt="left Arrow" className="absolute left-[-100px] top-[8rem]"/> */}
          {/* <img src={underline} alt="underline" className="absolute size-10 object-none top-[105rem] right-[0rem] md:size-3/5"/> */}

          <div className="flex  items-center flex-col space-y-10 md:space-y-0 md:flex-row justify-between">
            <div className="w-full md:w-myspace bg-primary h-[10rem] text-white p-3 rounded-[20px]">
              <div className=" flex items-center justify-between pb-4">
                <h1 className="text-clamp_name font-cSemibold">300+</h1>
                <h1 className="text-clamp_desc font-cRegular">Projects</h1>
              </div>
              <p className="text-clamp_text text-[#B3B3B3] text-base font-cRegular">
                We understand the importance creating a strong and recognizable
                visual and digital presence
              </p>
            </div>

            <div className="w-full md:w-myspace bg-gradient-to-br from-secondary-yray to-secondary-default h-[10rem] flex flex-col p-3 rounded-[20px]">
              <div className=" flex items-center justify-between pb-4">
                <h1 className="text-clamp_name font-cSemibold">150+</h1>
                <h1 className="text-clamp_desc font-cRegular">Clients</h1>
              </div>
              <p className="text-clamp_text text-[#3F3E3E] text-base font-cRegular">
                Keeping our clients happy and satisfied with their projects, as
                we pay attention to project details.
              </p>
            </div>
          </div>
          {/* <div className="absolute top-0 right-[0px] bg-red-500 w-[10rem]">
          <img src={leftarrow} alt="left Arrow" className="object-cover"/>
        </div> */}
        </div>
      </section>



      <section className="bg-gradient-to-bl from-primary to-black h-screen border-dashed  border-white border-t-4 border-b-4">
        <div id="about" className="w-9/12 md:w-4/6 mx-auto my-10 content-evenly space-y-[3rem]">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <Title title="Services" className="text-white"/>
          <p className="text-white text-base font">Digital Marketing</p>
        </div>
        </div>
      </section>


      <section id="services" className="h-screen bg-white"></section>
    </>
  );
};

export default LandingPage;

{
  /* <section className="text-primary  font-cVariable w-[84rem] h-screen mx-auto justify-between items-center pt-[220px] overflow-uto"></section> */
}
