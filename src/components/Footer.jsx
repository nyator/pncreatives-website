import { Link } from "react-router-dom";
// import { HashLink as HashLink } from "react-router-hash-link";

import { ig, linkedin, behance } from "../constants/assets";

const Footer = () => {
  return (
    <div className="bg-primary p-12 border-dashed border-[#EBEBEB] border-t-4 relative">
      <div className="px-28 mx-auto flex flex-col md:flex-row gap-3 items-center justify-between content-center ">
        <div className=" text-center md:text-start text-nowrap ">
          <p className="text-white font-cRegular text-clamp_desc">
            Follow us on <Link className="text-[#FFDB4B]">Instagram</Link> and{" "}
            <Link className="text-[#FFDB4B]">Behance</Link>
          </p>
          <p className="text-white font-cRegular text-clamp_desc">
            Email :
            <Link className="text-[#FFE26C]"> pncreatives@gmail.com</Link>
          </p>
          <p className="text-white font-cRegular text-clamp_desc">
            Tel :<Link className="text-[#FFE888]"> + 233 55 616 9432</Link>
          </p>
        </div>

        <div className="flex gap-1 md:gap-5">
          <Link to="">
            <img src={ig} className="object-contain" alt="instagram" />
          </Link>
          <Link to="">
            <img src={behance} className="object-contain" alt="Behance" />
          </Link>
          <Link to="">
            <img src={linkedin} className="object-contain" alt="linkedin" />
          </Link>
        </div>

        <div>
          <p className="text-white font-cRegular text-clamp_desc text-center text-nowrap ">
            © 2025 PN Creatives | All Rights Reserved
          </p>
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <p className=" bottom-5 fixed w-4/5 bg-red-500 h-fit text-center text-white animate-pulse text-clamp_desc md:text-clamp_2 font-cRegular rounded-xl mt-10">
          Site is under Construction
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
