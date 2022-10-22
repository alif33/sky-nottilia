import React from "react";
import ClockCounterClockwiseBlue from "../../assets/img/ClockCounterClockwiseBlue.png";
import MagnifyingGlass from "../../assets/img/MagnifyingGlass.png";
import Hangouts from "../../assets/img/icon/StartupScreen3/Hangouts.png";
import googledrive from "../../assets/img/icon/StartupScreen3/google-drive.png";
const History = () => {
  return (
    <div>
      <div className="w-[355px] h-screen bg-[#191919] border-l-2 border-t-2 border-black">
        <div className="flex justify-between items-center mt-[15px] mx-[13px]">
          <div className="flex justify-between items-center gap-3">
            <img src={ClockCounterClockwiseBlue} alt="" />
            <p className="font-semibold text-[16px] leading-5 text-white ">
              History
            </p>
          </div>
          <button className="bg-black text-white px-3 py-1 rounded-3xl mr-2">
            Clear Browsing History
          </button>
        </div>
        <div className="flex justify-items-center items-center mt-[20px] mx-5">
          <div className="w-[308px] h-[35px] bg-black rounded-3xl flex items-center px-3">
            <img
              className="w-[16px] h-[16px]"
              src={MagnifyingGlass}
              alt=""
              srcset=""
            />
            <input
              className="bg-[black] text-white ml-2 pl-1 w-[250px] focus:outline-none"
              type="text"
              placeholder="Search history"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-[16px] leading-5 text-[#B6B8BA] mt-3 ml-4">
            Recently closed
          </p>
          <div>
            <ul className="bg-[#020303] py-3 my-3">
              <li className="flex justify-around items-center my-1">
                <div className="flex justify-around items-center gap-2">
                  <p className="text-[12px] leading-4 text-white">11:05</p>
                  <img className="w-[19px] text-white" src={Hangouts} alt="" />
                  <p className="text-white text-[12px]">Hangouts Call....</p>
                </div>
                <p className="text-white text-[12px]">hangouts.google.com</p>
              </li>
              <li className="flex justify-around items-center my-1">
                <div className="flex justify-around items-center gap-2">
                  <p className="text-[12px] leading-4 text-white">11:05</p>
                  <img className="w-[19px] text-white" src={Hangouts} alt="" />
                  <p className="text-white text-[12px]">Hangouts Call....</p>
                </div>
                <p className="text-white text-[12px]">hangouts.google.com</p>
              </li>
              <li className="flex justify-around items-center my-1">
                <div className="flex justify-around items-center gap-2">
                  <p className="text-[12px] leading-4 text-white">11:05</p>
                  <img className="text-white" src={googledrive} alt="" />
                  <p className="text-white text-[12px]">Google Drive....</p>
                </div>
                <p className="text-white text-[12px]">drive.google.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[16px] leading-5 text-[#B6B8BA] mt-3 ml-4">
            Today
          </p>
          <div>
            <ul className="bg-[#020303] py-3 my-3">
              <li className="flex justify-around items-center my-1">
                <div className="flex justify-around items-center gap-2">
                  <p className="text-[12px] leading-4 text-white">11:05</p>
                  <img className="w-[19px] text-white" src={Hangouts} alt="" />
                  <p className="text-white text-[12px]">Hangouts Call....</p>
                </div>
                <p className="text-white text-[12px]">hangouts.google.com</p>
              </li>
              <li className="flex justify-around items-center my-1">
                <div className="flex justify-around items-center gap-2">
                  <p className="text-[12px] leading-4 text-white">11:05</p>
                  <img className="w-[19px] text-white" src={Hangouts} alt="" />
                  <p className="text-white text-[12px]">Hangouts Call....</p>
                </div>
                <p className="text-white text-[12px]">hangouts.google.com</p>
              </li>
              <li className="flex justify-around items-center my-1">
                <div className="flex justify-around items-center gap-2">
                  <p className="text-[12px] leading-4 text-white">11:05</p>
                  <img className="text-white" src={googledrive} alt="" />
                  <p className="text-white text-[12px]">Google Drive....</p>
                </div>
                <p className="text-white text-[12px]">drive.google.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
