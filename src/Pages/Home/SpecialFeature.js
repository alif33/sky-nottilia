import React from "react";
import feature from "../../assets/img/feature-1.png.png";
import PDF from "../../assets/img/PDF.png";
import iconCalculat from "../../assets/img/icon-calculat.png";
const SpecialFeature = () => {
  return (
    <div className="flex justify-between items-start mx-5 py-16">
      <div className="">
        <img src={feature} alt="" />
      </div>
      <div>
        <p className="uppercase text-[#7C5CFC]">Special feature</p>
        <h2 className="text-[#152C5B] font-bold text-5xl my-5">
          Download Your analytics
        </h2>
        <p className="w-[484px] text-[#969696] leading-7 text-justify my-5 pt-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit
        </p>
        <div className="flex justify-start items-start gap-[53px]">
          <div>
            <p>
              <span className="">
                <img
                  className="inline mr-4  bg-slate-100 p-1 rounded-full"
                  src={PDF}
                  alt=""
                  srcset=""
                />
              </span>{" "}
              Download PDF
            </p>
          </div>
          <div>
            <p>
              <span>
                <img
                  className="inline mr-4 bg-slate-100 p-1 rounded-full"
                  src={iconCalculat}
                  alt=""
                  srcset=""
                />
              </span>
              Calculate Files{" "}
            </p>
          </div>
        </div>
        <button className="bg-[#FA9D4C] w-[166px] h-[56px] border-none px-[40px] py-[18px] rounded-[14px] text-white text-sm mt-10">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SpecialFeature;
