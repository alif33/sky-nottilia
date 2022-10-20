import React from "react";
import logo from "../../assets/img/logo.png";
import Marketer from "../../assets/img/icon/ProjectorScreenChart.png";
import Sales from "../../assets/img/icon/Calculator.png";
import Finance from "../../assets/img/icon/Money.png";
import Designer from "../../assets/img/icon/Palette.png";
import Management from "../../assets/img/icon/Briefcase.png";
import Celebraty from "../../assets/img/icon/Sparkle.png";
import Enterprise from "../../assets/img/icon/UsersThree.png";
import Entreprenure from "../../assets/img/icon/LightbulbFilament.png";
import CheckCircle from "../../assets/img/CheckCircle.png";
import gmail from "../../assets/img/gmail.png";
import greenDot from "../../assets/img/Ellipse 2816.png";
// import "./StartupScreen.css";
import { IoIosRadioButtonOff } from "react-icons/io";

const StartupScreen2 = () => {
  return (
    <div className="flex justify-center items-center bg-[#F5F6FA]">
      <div>
        <div
          className="w-[1377px] h-[341px] rounded-[10px] mt-10"
          style={{
            background:
              "linear-gradient(266.49deg, #7892ED 44.22%, #F9D6FF 144.22%)",
          }}
        >
          <div className="flex items-center justify-center gap-4 pt-10">
            <img className="w-[49.73px] h-[53px]" src={logo} alt="" />
            <h6 className="text-[30px] font-bold text-white">SKy Nottilia </h6>
          </div>
          <p className="text-[40px] font-semibold leading-[48px] text-white text-center pt-[37px]">
            Setup your workspace
          </p>
          <p className="text-[18px] font-normal leading-[24px] text-white text-center pt-[16px]">
            Add your email accounts
          </p>
        </div>

        <div className="flex justify-center items-center my-10">
          <div>
            <div>
              <p className="text-2xl font-medium">Add an email account:</p>
              <div className="mt-[26px]">
                <input
                  className="w-[661px] h-[52px] border-[#7C5CFC] border-2 rounded-md focus:outline-[#7C5CFC] pl"
                  type="email"
                  placeholder="Tyler@skynottilia.com"
                />
                <button className="text-center w-[132px] h-[52px] bg-[#7C5CFC] border-none text-white rounded-md ml-[43px]">
                  Add
                </button>
              </div>
              <p className="text-2xl leading-[18px] font-medium mt-[26px] mb-[46px] ">
                Ready to add
              </p>
              <div className="flex justify-start items-center gap-9  border-b-[1px] border-[#DBDBDB] pb-[30px]">
                <img src={CheckCircle} alt="" />
                <img src={gmail} alt="" />
                <p className="text-[20px]">
                  Tyler@gmail.com
                  <span className="text-[#B1B1B1] pl-7">(Primary)</span>
                </p>
                <img src={greenDot} alt="" />
              </div>
              <button className="w-[824px] h-[63px] bg-[#7C5CFC] border-none rounded-md text-white text-center my-[22px]">
                Add Accounts
              </button>
              <button className="w-[824px] h-[63px] text-black border-[1px] border-[#7C5CFC] rounded-md text-center block">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupScreen2;
