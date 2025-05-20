import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../components/Title";
import { underline2 } from "../constants/assets.js";
import { services } from "../constants/index.js";
import { TbArrowMoveLeft, TbArrowMoveRight } from "react-icons/tb";
import { CgBorderTop } from "react-icons/cg";
import { worksMap } from "../constants/works.js";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(services[0]?.title);
  const works = worksMap[activeTab] || [];
  const scrollRef = useRef(null);

  // Scroll handler functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | PN Creatives</title>
      </Helmet>
      <section className="bg-gradient-to-bl from-primary to-black min-h-screen">
        <div className="w-10/12 md:w-5/6 mx-auto py-24 content-evenly space-y-[3rem]">
          
          {/* Title and tab buttons only, not fixed */}
          <div className="flex flex-col md:flex-row md:items-center justify-evenly gap-2 md:gap-8 mb-8">
            <Title title="Works" className="text-white" icon={underline2} />
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
            </div>
            
          </div>
          {/* Show works as horizontal scroll cards */}
          {works.length > 0 ? (
            <div
              ref={scrollRef}
              className="flex gap-8 mt-8 overflow-x-auto md:pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            >
              {works.map((work) => (
                <div
                  key={work.id}
                  className="relative rounded-[20px] min-w-[300px] max-w-[350px] md:min-w-[450px] md:max-w-[500px] min-h-[200px] md:min-h-[400px] flex flex-col justify-end p-8 mb-5 shadow-lg border-white/50 border-[3px] flex-shrink-0"
                  style={{
                    backgroundImage: work.img ? `url(${work.img})` : undefined,
                    backgroundSize: work.img ? "cover" : undefined,
                    backgroundPosition: work.img ? "center" : undefined,
                    backgroundColor: work.img ? undefined : "#222",
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 rounded-[20px]"></div>
                  <div className="relative z-10">
                    <h1 className="text-clamp_title font-cSemibold text-white drop-shadow mb-2 leading-none">
                      {work.title}
                    </h1>
                    <p className="text-clamp_desc text-white font-cRegular drop-shadow">
                      {work.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white text-center mt-10">
              No works available for this service yet.
            </div>
          )}
          <div className="text-white flex items-center justify-center gap-2">
            <span onClick={scrollLeft} className="cursor-pointer">
              <TbArrowMoveLeft className="text-3xl" />
            </span>
            <span>
              <CgBorderTop className="text-3xl mt-4" />
            </span>
            <span onClick={scrollRight} className="cursor-pointer">
              <TbArrowMoveRight className="text-3xl" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
