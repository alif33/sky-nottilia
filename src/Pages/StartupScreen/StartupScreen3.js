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
import telegram from "../../assets/img/icon/StartupScreen3/telegram.png";
import fb from "../../assets/img/icon/StartupScreen3/fb.png";
import keep from "../../assets/img/icon/StartupScreen3/keep.png";
import googleForms from "../../assets/img/icon/StartupScreen3/google-forms.png";
import youtube from "../../assets/img/icon/StartupScreen3/youtube.png";
import adwords from "../../assets/img/icon/StartupScreen3/adwords.png";
import sheets from "../../assets/img/icon/StartupScreen3/sheets.png";
import googleMaps from "../../assets/img/icon/StartupScreen3/google-maps.png";
import google from "../../assets/img/icon/StartupScreen3/google.png";
import Hangouts from "../../assets/img/icon/StartupScreen3/Hangouts.png";
import discord from "../../assets/img/icon/StartupScreen3/discord.png";
import instagram from "../../assets/img/icon/StartupScreen3/instagram.png";
import slack from "../../assets/img/icon/StartupScreen3/slack.png";
import whatsapp from "../../assets/img/icon/StartupScreen3/whatsapp.png";
import dropbox from "../../assets/img/icon/StartupScreen3/dropbox.png";
import twitter from "../../assets/img/icon/StartupScreen3/twitter.png";

import "./StartupScreen3.css";

const StartupScreen3 = () => {
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

  const appDatas = [
    {
      _id: "01",
      img: telegram,
      for: "telegram",
    },
    {
      _id: "02",
      img: fb,
      for: "fb",
    },
    {
      _id: "03",
      img: keep,
      for: "keep",
    },
    {
      _id: "04",
      img: googleForms,
      for: "googleForms",
    },
    {
      _id: "05",
      img: youtube,
      for: "youtube",
    },
    {
      _id: "06",
      img: adwords,
      for: "adwords",
    },
    {
      _id: "07",
      img: sheets,
      for: "sheets",
    },
    {
      _id: "08",
      img: googleMaps,
      for: "googleMaps",
    },
    {
      _id: "09",
      img: google,
      for: "google",
    },
    {
      _id: "10",
      img: Hangouts,
      for: "hangouts",
    },
    {
      _id: "11",
      img: discord,
      for: "discord",
    },
    {
      _id: "12",
      img: instagram,
      for: "instagram",
    },
    {
      _id: "13",
      img: slack,
      for: "slack",
    },
    {
      _id: "14",
      img: whatsapp,
      for: "whatsapp",
    },
    {
      _id: "15",
      img: dropbox,
      for: "dropbox",
    },
    {
      _id: "16",
      img: twitter,
      for: "twitter",
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
            Setup your workspace
          </p>
          <p className="text-[18px] font-normal leading-[24px] text-white text-center pt-[16px]">
            Add Your Favorite Apps
          </p>
        </div>

        <div className="flex justify-center items-center my-10">
          <div className="grid grid-cols-8 gap-6">
            {appDatas.map((appData) => (
              <div key={appData._id}>
                <div
                  id="_tile3"
                  className="w-[75px] h-[75px] rounded-[10px] bg-[#E2E2E2] relative"
                >
                  {/* <IoIosRadioButtonOff className="" /> */}
                  <input
                    className={``}
                    type="checkbox"
                    name="celebraty"
                    id={appData.for}
                  />
                  <label
                    className="mb-[10px] flex justify-center items-center gap-[20px] h-[80%] w-[100%] absolute cursor-pointer"
                    htmlFor={`${appData.for}`}
                    for={appData.for}
                  >
                    <img className="checkboxImg" src={appData.img} alt="" />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
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
  );
};

export default StartupScreen3;
