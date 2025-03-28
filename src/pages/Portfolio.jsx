import React from "react";
import Title from "../components/Title";
import { underline, underline2 } from "../constants/assets.js";
import { services } from "../constants/index.js";

const Portfolio = () => {
  return (
    <>
      <section className="bg-gradient-to-bl from-primary to-black h-screen">
        <div className="w-9/12 md:w-4/6 mx-auto py-24 content-evenly space-y-[3rem]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-10 fixed ">
            <Title title="Portfolio" className="text-white" icon={underline} />
            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              {services.map((items) => {
                return (
                  <p
                    key={items.id}
                    className="text-white/70 font-cRegular text-clamp_items bg-slate-100/50 border-slate-100/40 border-[1px] rounded-full px-3 text-center"
                  >
                    {items.title}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className={` flex  flex-col w-full h-svh justify-center  items-center text-center text-secondary-default animate-pulse leading-none text-clamp_desc md:text-clamp_2 font-cRegular`}
        >
          <p className="text-clamp_title font-cSemibold">PAGE COMING SOON</p>
          <p className="text-clamp_name font-cSemibold">Under Construction</p>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
