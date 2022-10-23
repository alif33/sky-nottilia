import React from "react";
import MagnifyingGlass from "../../../assets/img/MagnifyingGlass.png";
import notification from "../../../assets/img/Group 34470.png";
import profileImg from "../../../assets/img/Group 34488.png";
import calendarImg from "../../../assets/img/calendar.png";
import Ellipse1702 from "../../../assets/img/Ellipse 1702.png";
import { IoIosAdd } from "react-icons/io";
const NotePage = () => {
  return (
    <div className="bg-[#131517] h-screen pb-[150px] pl-[52px]">
      <div className="flex justify-between items-center mx-3 mb-3  mt-[30px]">
        <div>
          <h1 className="text-white font-bold text-2xl leading-8 font-PlusJakartaSans">
            My Notes
          </h1>
          <p className="text-white mt-2 font-PlusJakartaSans">
            Welcome back, have a nice day!
          </p>
        </div>

        <div className="flex justify-between items-center gap-[100px]">
          <div className="w-[426.83px] h-[51.22px] bg-[#1E1F25] text-white flex items-center justify-start rounded-2xl px-2">
            <img src={MagnifyingGlass} alt="" srcset="" />
            <input
              className="bg-transparent focus:outline-none  w-[400px] ml-2 font-inter"
              placeholder="Search in settings"
              type="text"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <img className="mr-6" src={notification} alt="" />
            <div className="flex items-center gap-2">
              <img className="" src={profileImg} alt="" />
              <p className="text-sm font-semibold text-white">
                Tyler{" "}
                <span className="block text-[#9598AE] font-normal">
                  Owner Admin
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <button className="w-[262px] h-[58px] bg-[#1F2025] rounded-[5px] text-[#BBBBBC] font-PlusJakartaSans flex justify-center items-center">
            <IoIosAdd className="text-5xl pr-3" />
            Add new note
          </button>
          <div>
            <div className="w-[262px] h-[268.57px] bg-[#1F2025] rounded-[10px] mt-6 relative">
              <p className="bg-[#7C5CFC] bg-opacity-10  text-[#7C5CFC] w-[99.25px] h-[27px] text-[10px] flex justify-center items-center rounded-md">
                UI/UX Designer
              </p>
              <p className="text-[12px] font-poppins font-semibold text-white">
                Create E-Learning Landing Page
              </p>
              <p className="font-poppins leading-4 text-white opacity-50 text-justify text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an.
              </p>
              <div className="flex items-center gap-3">
                <img src={Ellipse1702} alt="" />
                <p className="text-white">Tyler A</p>
              </div>
              <div className="border-t-[1px] flex items-center ">
                <img src={calendarImg} alt="" />
                <p className="text-white text-xs">25 July 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default NotePage;
