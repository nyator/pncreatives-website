import Navbar from "../components/Navbar.jsx";
import { leftarrow, rightarrow, underline } from "../constants/assets.js";

const LandingPage = () => {
  return (
    <>
    <div className="w-4/5 mx-auto">
      <Navbar title='Portfolio' />
    </div>
      <section className="text-primary  font-cVariable w-4/5 h-screen mx-auto justify-between items-center pt-[220px]">
        <div className="leading-tight font-cRegular line-clamp-[7] relative">
          <h1 className="text-clamp text-start relative">Refresh Your 
            <div className="bg-gradient-to-l from-white to-secondary-default absolute left-2/3 md:left-2/4 top-1/3 rounded-full p-[2px]">
            <p className="text-clamp_2 px-5 py-[1.5px] rounded-full bg-gradient-to-r from-white to-secondary-default text-nowrap">
              create'n space 
            </p>
          </div>
          </h1>
          <h1 className="text-clamp text-center">Brand With Pro</h1>
          <h1 className="text-clamp text-end relative overflow-auto ">Creative Services</h1>

          
          {/* <img src={leftarrow} alt="left Arrow" className="absolute right-[-150px] top-[-10px] size-[40%]"/> */}
          {/* <img src={rightarrow} alt="left Arrow" className="absolute left-[-100px] top-[8rem]"/> */}

        </div>
            <img src={underline} alt="underline" className="absolute size-10 object-none top-[105rem] right-[0rem] md:size-3/5"/>
      </section>
    </>
  );
};

export default LandingPage;

{/* <section className="text-primary  font-cVariable w-[84rem] h-screen mx-auto justify-between items-center pt-[220px] overflow-uto"></section> */}