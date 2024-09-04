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
      <div className="w-9/12 md:w-4/6 mx-auto">
        <Navbar title="" />
      </div>

      <section className="text-primary font-cVariable w-9/12 md:w-4/6 mx-auto h-screen justify-center items-center  content-evenly space-y-[2rem] ">
 
        <div className="leading-none font-cRegular line-clamp-[7] relative bg-rose-400">
          <h1 className="text-clamp text-start relative">
            Refresh Your
            <div className="bg-gradient-to-l from-white to-secondary-default absolute left-2/3 md:left-2/4 top-1/3 rounded-full p-[2px]">
              <p className="text-clamp_2 px-5 py-[1.5px] rounded-full bg-gradient-to-r from-white to-secondary-default text-nowrap">
                create'n space
              </p>
            </div>
          </h1>
          <h1 className="text-clamp text-center">Brand With Pro</h1>
          <h1 className="text-clamp text-end relative">Creative Services</h1>
        </div>

        {/* <img src={leftarrow} alt="left Arrow" className="absolute left-4/5 md:right-0 top-44 size-44 md:size-auto"/> */}
        {/* <img src={rightarrow} alt="left Arrow" className="absolute left-[-100px] top-[8rem]"/> */}
        {/* <img src={underline} alt="underline" className="absolute size-10 object-none top-[105rem] right-[0rem] md:size-3/5"/> */}

        <div className="flex  items-center flex-col space-y-7 md:space-y-0 md:flex-row justify-between mt-5 md:mt-10 bg-green-600">
        {/* <div className="flex items-center flex-col md:flex-row  space-y-7 md:space-y-0 justify-between bg-green-600"> */}
        
          <div className="w-full md:w-myspace bg-primary h- text-white p-3 rounded-[20px]">
            <div className=" flex items-center justify-between pb-4">
              <h1 className="text-clamp_name font-cBold">300+</h1>
              <h1 className="text-clamp_desc font-cRegular">Projects</h1>
            </div>
            <p className="text-clamp_text text-[#B3B3B3] ">
              We understand the importance creating a strong and recognizable
              visual and digital presence
            </p>
          </div>

          <div className="w-full md:w-myspace bg-gradient-to-br from-secondary-yray to-secondary-default p-3 rounded-[20px]">
            <div className=" flex items-center justify-between pb-4">
              <h1 className="text-clamp_name font-cBold">150+</h1>
              <h1 className="text-clamp_desc font-cRegular">Clients</h1>
            </div>
            <p className="text-clamp_text text-[#3F3E3E]">
              Keeping our clients happy and satisfied with their projects, as we pay 
              attention to project details.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="h-screen bg-primary"></section>
    </>
  );
};

export default LandingPage;

{
  /* <section className="text-primary  font-cVariable w-[84rem] h-screen mx-auto justify-between items-center pt-[220px] overflow-uto"></section> */
}
