import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import plus from "../../assets/img/plus.png";
import history from "../../assets/img/ClockCounterClockwise.png";
import ChartLineUp from "../../assets/img/ChartLineUp.png";
import Gear from "../../assets/img/Gear.png";
import people from "../../assets/img/Rectangle 1339.png";
import message from "../../assets/img/Group 427320614.png";
import telegram from "../../assets/img/icon/StartupScreen3/telegram.png";
import fb from "../../assets/img/icon/StartupScreen3/fb.png";
import slack from "../../assets/img/icon/StartupScreen3/slack.png";
import whatsapp from "../../assets/img/icon/StartupScreen3/whatsapp.png";
import dropbox from "../../assets/img/icon/StartupScreen3/dropbox.png";
import twitter from "../../assets/img/icon/StartupScreen3/twitter.png";
import MagnifyingGlass from "../../assets/img/MagnifyingGlass.png";
import Star from "../../assets/img/Star.png";
import ArrowLeft from "../../assets/img/ArrowLeft.png";
import ArrowRight from "../../assets/img/ArrowRight.png";
import ArrowClockwise from "../../assets/img/ArrowClockwise.png";
import Camera from "../../assets/img/Camera.png";
import PuzzlePiece from "../../assets/img/PuzzlePiece.png";
import gmail1 from "../../assets/img/gmail1.png";
import googleDrive from "../../assets/img/google-drive.png";
import googlePhotos from "../../assets/img/google-photos.png";
import Group427320608 from "../../assets/img/Group 427320608.png";
import DotsThreeVertical from "../../assets/img/DotsThreeVertical.png";

const LandingPage = () => {
  const handleHistory = () => {
    console.log("handleHistory");
  };
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-[200px] overflow-ellipsis">
        {/* <!-- Page content here --> */}
        <div className="flex justify-end">
          <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
            {/* <HiMenu className="h-7 w-7" /> */}
          </label>
        </div>
        <div className="flex justify-between items-center bg-[#191919] py-4 px-2  sticky top-0 z-50">
          <div className="flex justify-center items-center gap-3 mx-3 pr-[38px]">
            <img className="cursor-pointer" src={ArrowLeft} alt="" srcset="" />
            <img className="cursor-pointer" src={ArrowRight} alt="" srcset="" />
            <img
              className="cursor-pointer"
              src={ArrowClockwise}
              alt=""
              srcset=""
            />
          </div>
          <div className="w-[854px] h-[49px] flex items-center bg-[#020303] rounded-3xl">
            <img
              className="w-[20px] h-[20px] ml-4 mr-3"
              src={MagnifyingGlass}
              alt=""
            />
            <input
              className="bg-[#020303] w-[770px] py-1 focus:outline-none text-white"
              placeholder="Search or type a URL"
              type="text"
            />
            <img className="w-[20px] h-[20px] ml-1" src={Star} alt="" />
          </div>
          <div className="flex justify-center items-center gap-5 mr-4">
            <img src={Camera} alt="" />
            <img src={PuzzlePiece} alt="" />
            <img src={gmail1} alt="" />
            <img src={googleDrive} alt="" />
            <img src={googlePhotos} alt="" />
            <img src={Group427320608} alt="" />
            <img src={DotsThreeVertical} alt="" />
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="overflow-y-auto w-[111px] bg-[#191919] text-base-content flex flex-col justify-between items-center">
          <div className="flex flex-col justify-center items-center mt-4">
            <img src={logo} alt="" srcset="" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img className="w-[70%]" src={telegram} alt="" srcset="" />
            <img className="w-[70%]" src={fb} alt="" srcset="" />
            <img className="w-[70%]" src={twitter} alt="" srcset="" />
            <img className="w-[70%]" src={slack} alt="" srcset="" />
            <img className="w-[70%]" src={whatsapp} alt="" srcset="" />
            <img className="w-[70%]" src={dropbox} alt="" srcset="" />
            <img className="mt-2 w-[20px]" src={plus} alt="" srcset="" />
          </div>
          <div className="flex flex-col justify-end items-center gap-5 pb-[-50px]">
            <img
              onClick={handleHistory}
              className="w-[90%] "
              src={history}
              alt=""
              srcset=""
            />
            <img className="w-[90%] " src={message} alt="" srcset="" />
            <img className="w-[90%] " src={ChartLineUp} alt="" srcset="" />
            <img className="w-[90%] " src={Gear} alt="" srcset="" />
            <img className="w-[90%] " src={people} alt="" srcset="" />
          </div>
        </div>
        <ul className="menu  overflow-y-auto w-[111px] bg-[#191919] text-base-content">
          {/* <!-- Sidebar content here --> */}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
