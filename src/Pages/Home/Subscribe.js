import React from "react";
import BackgroundImg from "../../assets/img/Base1.png";
import message from "../../assets/img/message.png";
const Subscribe = () => {
  return (
    <div className="flex justify-center">
      <div
        className="w-[1140px] h-[347px] my-11 bg-auto bg-no-repeat bg-center"
        style={{ background: `url(${BackgroundImg})` }}
      >
        <div
          className="
        "
        >
          <h2 className="text-center text-5xl text-white pt-[33px] pb-[33px]">
            Download SKy Nottilia Today
          </h2>
          <p className="text-[18px] text-center text-white font-normal pb-[25px]">
            Download to make prototyping of you project more faster and
            efficient.{" "}
            <span className="block">Enjoy your 30 days pass Free Trial</span>
          </p>
          <div className="flex justify-center">
            <div className="w-[483px] h-[72px] bg-white flex  justify-between items-center rounded-[14px] px-3 ">
              <div>
                <img className="inline mr-2 " src={message} alt="" />
                <input
                  className="focus:outline-none border-none pr-[80px] py-3 appearance-none text-[#969696] text-base"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <button className="w-[132px] h-[54px] rounded-[14px] bg-[#3346D3] border-none text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
