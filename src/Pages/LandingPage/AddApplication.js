import React from "react";
import MagnifyingGlass from "../../assets/img/MagnifyingGlass.png";
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
import Plus1 from "../../assets/img/Plus1.png";
import CaretDown from "../../assets/img/CaretDown.png";

const AddApplication = ({ addApplication, setAddApplication }) => {
  const appDatas = [
    {
      _id: "01",
      img: telegram,
      name: "Telegram",
      for: "telegram",
    },
    {
      _id: "02",
      img: fb,
      name: "FaceBook",
      for: "fb",
    },
    {
      _id: "03",
      img: keep,
      name: "Keep",
      for: "keep",
    },
    {
      _id: "04",
      img: googleForms,
      name: "Forms",
      for: "googleForms",
    },
    {
      _id: "05",
      img: youtube,
      name: "Youtube",
      for: "youtube",
    },
    {
      _id: "06",
      img: adwords,
      name: "Ad Words",
      for: "adwords",
    },
    {
      _id: "07",
      img: sheets,
      name: "Sheets",
      for: "sheets",
    },
    {
      _id: "08",
      img: googleMaps,
      name: "Map",
      for: "googleMaps",
    },
    {
      _id: "09",
      img: google,
      name: "Google",
      for: "google",
    },
    {
      _id: "10",
      img: Hangouts,
      name: "Hangouts",
      for: "hangouts",
    },
    {
      _id: "11",
      img: discord,
      name: "Discord",
      for: "discord",
    },
    {
      _id: "12",
      img: instagram,
      name: "Instagram",
      for: "instagram",
    },
    {
      _id: "13",
      img: slack,
      name: "Slack",
      for: "slack",
    },
    {
      _id: "14",
      img: whatsapp,
      name: "Whatsapp",
      for: "whatsapp",
    },
    {
      _id: "15",
      img: dropbox,
      name: "Dropbox",
      for: "dropbox",
    },
    {
      _id: "16",
      img: twitter,
      name: "Twitter",
      for: "twitter",
    },
  ];
  return (
    <>
      <div
        onClick={() => setAddApplication(!addApplication)}
        className=" fixed top-0 left-0 w-full h-screen bg-[#11111185] "
      ></div>
      <div className="fixed top-[80px] left-[350px]  py-8   overflow-y-auto  w-[945px] h-[715px] rounded-[17px] bg-[#191919]">
        <p className="text-2xl font-PlusJakartaSans font-semibold text-white pl-16">
          Add app
        </p>
        <div className="flex justify-start items-center gap-3 border-b-[1px] border-[#333333] pb-2 pl-16 pt-3">
          <p className="text-white font-PlusJakartaSans font-semibold ">All</p>
          <p className="text-white font-PlusJakartaSans font-semibold ">
            Add custom App
          </p>
        </div>
        <div className="flex justify-center items-center pt-6">
          <div className="w-[817px] h-[52px] rounded-[6px] bg-[#0A0A0A] flex items-center gap-2">
            <img className="pl-2" src={MagnifyingGlass} alt="" />
            <input
              type="text"
              className="w-[760px] h-[42px] bg-transparent text-white focus:outline-none"
              placeholder="Search App"
            />
          </div>
        </div>
        <p className="font-PlusJakartaSans font-semibold pb-[36px] pt-[21px] pl-16 text-white">
          Popular apps
        </p>
        <div className="flex justify-center items-center">
          <div className="w-[805px] text-center">
            <div className="grid grid-cols-8 gap-3 ">
              {appDatas.map((appData) => (
                <div className="h-[100px] ">
                  <div className="w-[70px] h-[70px] rounded-[17px] bg-opacity-30 bg-black flex justify-center items-center">
                    <img className="" src={appData.img} alt="" />
                    <label htmlFor=""></label>
                  </div>

                  <p className="text-white text-[12px] pr-5 font-PlusJakartaSans leading-[15.12px] mt-3">
                    {appData.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddApplication;
