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
import Modern3d from "../../assets/img/Modern-3d-illustration-of-Seo-optimization-concept 1.png";
// import "./StartupScreen.css";
import { IoIosRadioButtonOff } from "react-icons/io";

const StartupScreen4 = () => {
  return (
    <div className="flex justify-center items-center bg-[#F5F6FA]">
      <div>
        <div
          className="w-[1377px] h-[341px] rounded-[10px] mt-[25px]"
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
            Almost Done!
          </p>
          <p className="text-[18px] font-normal leading-[24px] text-white text-center pt-[16px]">
            Lets depp dive into your profile
          </p>
        </div>

        <div className="flex justify-center items-center my-10">
          <div>
            <div>
              <img className="mt-[-80px]" src={Modern3d} alt="" srcset="" />
              <button className="w-[824px] h-[63px] bg-[#7C5CFC] border-none rounded-md text-white text-center my-[22px]">
                Take me to Sky Nottilia
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupScreen4;
