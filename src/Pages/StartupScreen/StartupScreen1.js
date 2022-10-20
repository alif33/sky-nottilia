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
import Developer from "../../assets/img/icon/Code.png";
import "./StartupScreen1.css";
import { IoIosRadioButtonOff } from "react-icons/io";
const StartupScreen1 = () => {
  const startupScreenDatas = [
    {
      _id: "01",
      name: "Marketer",
      for: "marketer",
      img: Marketer,
    },
    {
      _id: "02",
      name: "Sales",
      for: "sales",
      img: Sales,
    },
    {
      _id: "03",
      name: "Finance",
      for: "finance",
      img: Finance,
    },
    {
      _id: "04",
      name: "Designer",
      for: "designer",
      img: Designer,
    },
    {
      _id: "05",
      name: "Management",
      for: "management",
      img: Management,
    },
    {
      _id: "06",
      name: "Celebraty",
      for: "celebraty",
      img: Celebraty,
    },
    {
      _id: "07",
      name: "Enterprise",
      for: "enterprise",
      img: Enterprise,
    },
    {
      _id: "08",
      name: "Entreprenure",
      for: "entreprenure",
      img: Entreprenure,
    },
    {
      _id: "09",
      name: "Developer",
      for: "developer",
      img: Developer,
    },
  ];
  return (
    <div className="flex justify-center items-center">
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
            Tell us about yourself
          </p>
          <p className="text-[18px] font-normal leading-[24px] text-white text-center pt-[16px]">
            What type of work you do?
          </p>
        </div>

        <div className="flex justify-center items-center my-10">
          <div className="grid grid-cols-3 gap-6">
            {startupScreenDatas.map((startupScreenData) => (
              <div key={startupScreenData._id}>
                <div
                  id="_tile"
                  className="tile w-[303px] h-[109px] rounded-[10px] shadow-xl"
                >
                  {/* <IoIosRadioButtonOff className="" /> */}
                  <input
                    className={``}
                    type="checkbox"
                    name="celebraty"
                    id={startupScreenData.for}
                  />
                  <label
                    className="mb-[10px] flex justify-center items-center gap-[20px] h-3/4 w-[100%] absolute cursor-pointer"
                    htmlFor={`${startupScreenData.for}`}
                    for={startupScreenData.for}
                  >
                    <img
                      className="checkboxImg"
                      src={startupScreenData.img}
                      alt=""
                    />
                    <h6>{startupScreenData.name}</h6>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupScreen1;
