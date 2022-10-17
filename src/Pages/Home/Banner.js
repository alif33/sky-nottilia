import React from "react";
import BackgroundImg from "../../../src/assets/img/Rectangle 738.png";
import laptop from "../../../src/assets/img/laptop mockup.png";
import Navbar from "./Navbar";
const Banner = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ background: `url(${BackgroundImg})` }}
    >
      <Navbar />
      <div>
        <h2 className="text-6xl text-center pt-20 text-white">
          Manage your Social
          <span className="block pt-5">media at a Glance!</span>
        </h2>
        <p className="text-center py-8 text-white">
          {" "}
          analyze the performace
          <span className="block">
            in your social media and use custome chatbot services!
          </span>
        </p>
        <div className="flex justify-center items-center gap-5 text-white">
          <button className="bg-[#FA9D4C] w-[141px] h-[59px] border-none px-3 py-2 rounded-[14px]">
            Try For free
          </button>
          <button className="bg-transparent bg-opacity-25 w-[141px] h-[59px] border-2 border-white px-3 py-2 rounded-[14px]">
            Our Services
          </button>
        </div>
        <div className="flex justify-center">
          <img
            className="mt-[-100px] h-[915px]"
            src={laptop}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
