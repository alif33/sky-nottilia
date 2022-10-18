import React from "react";
// import BackgroundImg from "../../../src/assets/img/Rectangle 738 (4).png";
import laptop from "../../../src/assets/img/laptop mockup.png";
import Navbar from "./Navbar";
import "./Home.css";
const Banner = () => {
  return (
    <div>
      <div className="backgroundImg">
        <Navbar />
        <div>
          <h2 className="text-6xl text-center pt-[124px] text-white ">
            Manage your Social
            <span className="block pt-5">media at a Glance!</span>
          </h2>
          <p className="text-center py-8 text-white px-4">
            {" "}
            analyze the performace
            <span className="block">
              in your social media and use custome chatbot services!
            </span>
          </p>
          <div className="flex justify-center items-center gap-5 text-white ">
            <button className="bg-[#FA9D4C] w-[141px] h-[59px] border-none px-3 py-2 rounded-[14px]">
              Try For free
            </button>
            <button className="bg-transparent bg-opacity-25 w-[141px] h-[59px] border-2 border-white px-3 py-2 rounded-[14px]">
              Our Services
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="mt-[-400px] lg:mt-[-700px]  lg:w-[1565px] lg:h-[1276px]"
          src={laptop}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Banner;
