import React from "react";
import BackgroundImg from "../../assets/img/Base1.png";
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
          <h2 className="text-center text-5xl">Download SKy Nottilia Today</h2>
          <p className="text-[18px] text-center">
            Download to make prototyping of you project more faster and
            efficient. Enjoy your 30 days pass Free Trial
          </p>
          <div className="w-[483px] h-[72px] bg-white">
            <img src="" alt="" />
            <input type="text" />
            <button className="w-[132px] h-[54px] rounded-[14px] bg-slate-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
