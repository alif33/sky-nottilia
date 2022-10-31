import React from "react";
import BackgroundImg from "../../assets/img/Base1.png";
import message from "../../assets/img/message.png";
const Subscribe = () => {
  return (
    <div className="flex justify-center">
      <div
        className="lg:w-[1140px] w-[350px] h-[347px] my-11 backgroundImgSubscribe pb-10 rounded-3xl"
        // style={{ background: `url(${BackgroundImg})` }}
      >
        <div
          className="
        "
        >
          <h2 className="text-center lg:text-5xl text-xl text-white pt-[33px] pb-[33px]">
            Download SKy Nottilia Today
          </h2>
          <p className="lg:text-[18px] text-center text-white font-normal pb-[25px]">
            Download to make prototyping of you project more faster and
            efficient.{" "}
            <span className="lg:block">Enjoy your 30 days pass Free Trial</span>
          </p>
          <div className="flex justify-center">
            <div className="w-[483px] h-[72px] bg-white flex  justify-between items-center rounded-[14px] px-1 mx-3 ">
              <div>
                <img className="inline mr-2 " src={message} alt="" />
                <input
                  className="focus:outline-none border-none lg:pr-[80px] py-3 appearance-none text-[#969696] text-base"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <button className="lg:w-[132px] w-[80px] text-xs lg:text-base lg:h-[54px] h-7 rounded-[14px] bg-[#3346D3] border-none text-white">
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
