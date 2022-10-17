import React from "react";
import image1 from "../../assets/img/image 1.png";
const whatNext = () => {
  return (
    <div className="flex justify-between items-stretch mx-5 py-16">
      <div>
        <p className="uppercase text-[#7C5CFC]">what’s next?</p>
        <h2 className="text-[#152C5B] font-bold text-5xl my-5">
          Custom Chatbot for
          <span className="block my-5">All Platform</span>
        </h2>
        <p className="w-[484px] text-[#969696] leading-7 text-justify my-5 pt-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit
        </p>
        <button className="bg-[#FA9D4C] w-[166px] h-[56px] border-none px-[40px] py-[18px] rounded-[14px] text-white text-sm mt-10">
          Learn More
        </button>
      </div>
      <div className="">
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

export default whatNext;
