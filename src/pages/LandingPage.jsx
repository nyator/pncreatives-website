import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../components/Title.jsx";
import { underline, underline2 } from "../constants/assets.js";
import {
  services,
  graphicDesign,
  publishing,
  virtualTouring,
  livestreaming,
  photoVideo,
  digitalMarketing,
} from "../constants/index.js";

import { TbArrowMoveLeft, TbArrowMoveRight } from "react-icons/tb";
import { CgBorderTop } from "react-icons/cg";

// Map service title to its related content array
const serviceContentMap = {
  "Graphic Design": graphicDesign,
  Publishing: publishing,
  "Virtual Touring": virtualTouring,
  "Live Streaming": livestreaming,
  "Photo/Video": photoVideo,
  "Digital Marketing": digitalMarketing,
  // Add other mappings as you create more content arrays
};

const LandingPage = () => {
  // Set default tab to first service
  const [activeTab, setActiveTab] = useState(services[0]?.title);

  // Get the related content array for the active tab
  const relatedContent = serviceContentMap[activeTab];

  return (
    <>
      <Helmet>
        <title>pncreativesgh</title>
      </Helmet>
      <section className="bg-hero-pattern">
        <div className="text-primary font-cVariable w-10/12 md:w-4/6 mx-auto min-h-screen justify-center items-center content-evenly space-y-[3rem]">
          <div className="leading-none font-cRegular line-clamp-[7]">
            <h1 className="text-clamp text-start relative">
              <span className="font-cMedium">Refresh Your</span>
              <div className="bg-gradient-to-l from-white to-secondary-default absolute left-2/3 md:left-2/4 top-1/3 rounded-full p-[2px] z-10">
                <p className="text-clamp_2 px-2 py-[1.5px] rounded-full bg-gradient-to-r from-white to-secondary-default text-nowrap">
                  create&#39;n space
                </p>
              </div>
            </h1>
            <h1 className="text-clamp text-center font-cMedium">
              Brand With Pro
            </h1>
            <h1 className="text-clamp text-end font-cMedium relative">
              Creative Services
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-10">
            <div className="flex items-center flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between sm:w-7/12 md:w-full">
              <div className="w-full md:w-myspace bg-primary min-h-[12rem] flex flex-col justify-center items-between text-white py-3 px-7 rounded-[20px]">
                <div className=" flex items-center justify-between pb-4">
                  <h1 className="text-clamp_name font-cSemibold">300+</h1>
                  <h1 className="text-clamp_desc font-cRegular underline">
                    Projects
                  </h1>
                </div>
                <p className="text-clamp_text text-[#B3B3B3] font-cRegular">
                  We understand the importance creating a strong and
                  recognizable visual and digital presence
                </p>
              </div>

              <div className="w-full md:w-myspace bg-gradient-to-br from-secondary-yray to-secondary-default min-h-[12rem] flex flex-col justify-center items-between py-3 px-7 rounded-[20px]">
                <div className=" flex items-center justify-between pb-4">
                  <h1 className="text-clamp_name font-cSemibold">150+</h1>
                  <h1 className="text-clamp_desc font-cRegular underline">
                    Clients
                  </h1>
                </div>
                <p className="text-clamp_text text-[#3F3E3E] font-cRegular">
                  Keeping our clients happy and satisfied with their projects,
                  as we pay attention to project details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <section
          id="services"
          className="bg-gradient-to-bl from-primary to-black border-dashed border-[#EBEBEB] border-t-4 border-b-4"
        >
          <div className="w-10/12 md:w-5/6 mx-auto py-24 content-evenly space-y-[3rem]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-10">
              {/* <div className="flex flex-col md:flex-row gap-2 md:gap-10 md:items-center justify-between"> */}
              <Title title="Services" className="text-white" icon={underline} />
              <div className="flex gap-2 flex-wrap">
                {services.map((item) => (
                  <button
                    key={item.id}
                    className={`font-cRegular text-clamp_text px-3 py-1 rounded-full border-[1px] text-center transition z-40  
                      ${
                        activeTab === item.title
                          ? "bg-white text-primary border-white"
                          : "bg-slate-100/50 text-white/70 border-slate-100/40 hover:bg-white/20 hover:text-white"
                      }`}
                    onClick={() => setActiveTab(item.title)}
                  >
                    {item.title}
                  </button>
                ))}
                {/* </div> */}
              </div>
            </div>
            {/* Show related content cards */}
            {relatedContent && relatedContent.length > 0 && (
              <div className="flex gap-8 mt-8 overflow-x-auto scroll-smooth ">
                {relatedContent.map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-[20px] min-w-[300px] max-w-[350px] md:min-w-[350px] md:max-w-[400px] min-h-[200px] md:min-h-[200px] flex flex-col justify-end p-8 mb-5 shadow-lg border-white/50 border-[3px] flex-shrink-0"
                    style={{
                      backgroundImage: item.img
                        ? `url(${item.img})`
                        : undefined,
                      backgroundSize: item.img ? "cover" : undefined,
                      backgroundPosition: item.img ? "center" : undefined,
                      backgroundColor: item.img ? undefined : "#222",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50 rounded-[20px]"></div>
                    <div className="relative z-5">
                      <h1 className="text-clamp_text font-cSemibold text-white drop-shadow mb-4">
                        {item.title}
                      </h1>
                      <p className="text-clamp_desc text-white font-cRegular drop-shadow leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Optionally, show a fallback if no content */}
            {(!relatedContent || relatedContent.length === 0) && (
              <div className="text-white text-center mt-10">
                No content available for this service yet.
              </div>
            )}
            <div className="text-white flex items-center justify-center gap-2">
              <span>
                <TbArrowMoveLeft className="text-3xl" />
              </span>
              <span>
                <CgBorderTop className="text-3xl mt-4" />
              </span>
              <span>
                <TbArrowMoveRight className="text-3xl" />
              </span>
            </div>
          </div>
        </section>
      </section>

      <section id="about" className="h-full bg-[#EBEBEB]">
        <div className="w-10/12 md:w-5/6 mx-auto py-24 content-evenly space-y-[3rem]">
          {/* <div className=" flex items-start bg-black w-full"> */}
          <Title title="About Us" className="text-primary" icon={underline2} />
          {/* </div> */}

          <div className="flex flex-col md:flex-row content-evenly gap-5">
            <div className="font-cRegular w-full md:w-10/12 text-clamp_text space-y-[0.5rem]">
              <h1>
                At <span className="font-cMedium">PN Creatives </span>, your
                one-stop creative powerhouse. We are a dynamic team of
                passionate creatives dedicated to helping businesses like yours
                shine in the digital landscape.
              </h1>
              <h1>
                we work closely with you to develop customized solutions that
                elevate your business and leave a lasting impression on your
                target audience.
              </h1>
              <h1>
                Ready to take your brand to new heights? Contact us today, and
                let&#39;s start collaborating!
              </h1>
            </div>

            <div className="text-clamp_text leading-7">
              <h1 className="font-cRegular mb-0 md:mb-4">
                Our expertise encompasses a wide range of services, including:
              </h1>
              {services.map((items) => {
                return (
                  <div key={items.id} className="pl-10">
                    <ul className="list-disc font-cMedium">
                      <li>{items.title}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
