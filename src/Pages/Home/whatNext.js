import React from "react";
import image1 from "../../assets/img/image 1.png";
import image2 from "../../assets/img/Ellipse 184.png";
import image3 from "../../assets/img/Ellipse 185.png";
const whatNext = () => {
  return (
    <div className="lg:flex  justify-between items-stretch mx-5 py-16 relative">
      <div className="lg:ml-[100px]">
        <p className="uppercase text-[#7C5CFC]">what’s next?</p>
        <h2 className="text-[#152C5B] font-bold text-5xl  leading-[60px]">
          Custom Chatbot for
          <span className="block ">All Platform</span>
        </h2>
        <p className="lg:w-[484px] text-[#969696] leading-7 text-justify my-5 pt-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit
        </p>
        <button className="bg-[#FA9D4C] w-[166px] h-[56px] border-none px-[40px] py-[18px] rounded-[14px] text-white text-sm mt-10 sm:mb-11">
          Learn More
        </button>
      </div>
      <div className="">
        <img
          className="absolute lg:top-[380px] lg:right-[550px] top-[820px] right-[180px]  w-1/2 lg:w-[215px]"
          src={image3}
          alt=""
        />
        <img
          className="absolute lg:top-[250px] top-[750px] lg:right-[-15px] right-[-18px]"
          src={image2}
          alt=""
        />
        <img
          className="mr-10 relative   pt-[40px] lg:pt-0 "
          src={image1}
          alt=""
        />
      </div>
    </div>
  );
};

export default whatNext;
