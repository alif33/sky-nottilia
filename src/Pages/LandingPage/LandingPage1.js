import React from "react";
import MagnifyingGlass from "../../assets/img/MagnifyingGlass.png";
// import BackgroundImg from "../../assets/img/pexels-travis-blessing-1363876 1.png";
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

import "./LandingPage1.css";
const LandingPage1 = () => {
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
    <div className="backgroundLandingPage1Img">
      <div>
        <h1 className="text-[96px] font-semibold leading-[120.96px] text-center text-white">
          12:45
        </h1>
        <p className="text-center text-white">Monday, 17 August 2022</p>
        <p className="text-center text-white">Good Evening, Tyler!</p>
      </div>
      <div className="flex justify-center items-center my-3">
        <div className="bg-[#020303] bg-opacity-30 w-[854px] h-[49px] flex items-center  rounded-3xl">
          <img
            className=" w-[20px] h-[20px] ml-4 mr-3"
            src={MagnifyingGlass}
            alt=""
          />
          <input
            className="bg-transparent  w-[770px] py-1 focus:outline-none text-white"
            placeholder="Search or type a URL"
            type="text"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[805px] text-center">
          <div className="grid grid-cols-8 gap-3 ">
            {appDatas.map((appData) => (
              <div className="h-[100px] ">
                <div className="w-[70px] h-[70px] rounded-[17px] bg-opacity-30 bg-black flex justify-center items-center">
                  <img className="" src={appData.img} alt="" />
                  <label htmlFor=""></label>
                </div>

                <p className="text-white text-[12px] pr-5 leading-[15.12px] mt-3">
                  {appData.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="w-[805px] text-center">
          <div className="grid grid-cols-8 gap-3 ">
            <div className="h-[100px] ">
              <div className="w-[70px] h-[70px] rounded-[17px] bg-opacity-30 bg-black flex justify-center items-center">
                <img className="" src={Plus1} alt="" />
                <label htmlFor=""></label>
              </div>

              <p className="text-white text-[12px] pr-5 leading-[15.12px] mt-3">
                Add New
              </p>
            </div>
            <div className="h-[100px] ">
              <div className="w-[70px] h-[70px] rounded-[17px] bg-opacity-30 bg-black flex justify-center items-center">
                <img className="" src={CaretDown} alt="" />
                <label htmlFor=""></label>
              </div>

              <p className="text-white text-[12px] pr-5 leading-[15.12px] mt-3">
                Hide Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
