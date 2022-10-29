import React, { useState } from "react";
import MagnifyingGlass from "../../../assets/img/MagnifyingGlass.png";
import notification from "../../../assets/img/Group 34470.png";
import profileImg from "../../../assets/img/Group 34488.png";
import calendarImg from "../../../assets/img/calendar.png";
import Ellipse1702 from "../../../assets/img/Ellipse 1702.png";
import { IoIosAdd } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const NotePage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-[#131517] h-min pb-[150px] ">
      <div className="flex justify-between items-center mx-3 mb-3  pl-[52px] pt-6">
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
      <div className="grid grid-cols-12 border-t-[.50px] border-[#565656]">
        <div className=" col-span-3 border-r-[0.50px] border-[#565656] pl-[52px]">
          <div className="pt-[24px]">
            <button className="w-[262px] h-[58px] bg-[#1F2025] rounded-[5px] text-[#BBBBBC] font-PlusJakartaSans flex justify-center items-center ">
              <IoIosAdd className="text-5xl pr-3" />
              Add new note
            </button>
          </div>
          <div className="">
            <div className="w-[262px]  bg-[#1F2025] rounded-[10px] mt-6 ">
              <p className="pt-[14px]"></p>
              <p className="ml-[14px] bg-[#7C5CFC] bg-opacity-10  text-[#7C5CFC] w-[99.25px] h-[27px] text-[10px]  flex justify-center items-center rounded-md">
                UI/UX Designer
              </p>
              <p className="text-[12px] font-poppins font-semibold text-white pt-[11px] pl-[14px]">
                Create E-Learning Landing Page
              </p>
              <p className="font-poppins leading-4 text-white opacity-50 text-justify text-xs p-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an.
              </p>
              <div className="flex items-center gap-3 py-[11px] px-[14px]">
                <img src={Ellipse1702} alt="" />
                <p className="text-white">Tyler A</p>
              </div>
              <div className="border-t-[.50px] border-[#79797C] flex items-center pt-[11px] px-[14px] pb-[18px] gap-1">
                <img src={calendarImg} alt="" />
                <p className="text-white text-xs">25 July 2022</p>
              </div>
            </div>
            <div className="w-[262px]  bg-[#1F2025] rounded-[10px] mt-6 ">
              <p className="pt-[14px]"></p>
              <p className="ml-[14px] bg-[#7C5CFC] bg-opacity-10  text-[#7C5CFC] w-[99.25px] h-[27px] text-[10px]  flex justify-center items-center rounded-md">
                UI/UX Designer
              </p>
              <p className="text-[12px] font-poppins font-semibold text-white pt-[11px] pl-[14px]">
                Create E-Learning Landing Page
              </p>
              <p className="font-poppins leading-4 text-white opacity-50 text-justify text-xs p-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an.
              </p>
              <div className="flex items-center gap-3 py-[11px] px-[14px]">
                <img src={Ellipse1702} alt="" />
                <p className="text-white">Tyler A</p>
              </div>
              <div className="border-t-[.50px] border-[#79797C] flex items-center pt-[11px] px-[14px] pb-[18px] gap-1">
                <img src={calendarImg} alt="" />
                <p className="text-white text-xs">25 July 2022</p>
              </div>
            </div>
            <div className="w-[262px]  bg-[#1F2025] rounded-[10px] mt-6 ">
              <p className="pt-[14px]"></p>
              <p className="ml-[14px] bg-[#7C5CFC] bg-opacity-10  text-[#7C5CFC] w-[99.25px] h-[27px] text-[10px]  flex justify-center items-center rounded-md">
                UI/UX Designer
              </p>
              <p className="text-[12px] font-poppins font-semibold text-white pt-[11px] pl-[14px]">
                Create E-Learning Landing Page
              </p>
              <p className="font-poppins leading-4 text-white opacity-50 text-justify text-xs p-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an.
              </p>
              <div className="flex items-center gap-3 py-[11px] px-[14px]">
                <img src={Ellipse1702} alt="" />
                <p className="text-white">Tyler A</p>
              </div>
              <div className="border-t-[.50px] border-[#79797C] flex items-center pt-[11px] px-[14px] pb-[18px] gap-1">
                <img src={calendarImg} alt="" />
                <p className="text-white text-xs">25 July 2022</p>
              </div>
            </div>
            <div className="w-[262px]  bg-[#1F2025] rounded-[10px] mt-6 ">
              <p className="pt-[14px]"></p>
              <p className="ml-[14px] bg-[#7C5CFC] bg-opacity-10  text-[#7C5CFC] w-[99.25px] h-[27px] text-[10px]  flex justify-center items-center rounded-md">
                UI/UX Designer
              </p>
              <p className="text-[12px] font-poppins font-semibold text-white pt-[11px] pl-[14px]">
                Create E-Learning Landing Page
              </p>
              <p className="font-poppins leading-4 text-white opacity-50 text-justify text-xs p-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an.
              </p>
              <div className="flex items-center gap-3 py-[11px] px-[14px]">
                <img src={Ellipse1702} alt="" />
                <p className="text-white">Tyler A</p>
              </div>
              <div className="border-t-[.50px] border-[#79797C] flex items-center pt-[11px] px-[14px] pb-[18px] gap-1">
                <img src={calendarImg} alt="" />
                <p className="text-white text-xs">25 July 2022</p>
              </div>
            </div>
            <div className="w-[262px]  bg-[#1F2025] rounded-[10px] mt-6 ">
              <p className="pt-[14px]"></p>
              <p className="ml-[14px] bg-[#7C5CFC] bg-opacity-10  text-[#7C5CFC] w-[99.25px] h-[27px] text-[10px]  flex justify-center items-center rounded-md">
                UI/UX Designer
              </p>
              <p className="text-[12px] font-poppins font-semibold text-white pt-[11px] pl-[14px]">
                Create E-Learning Landing Page
              </p>
              <p className="font-poppins leading-4 text-white opacity-50 text-justify text-xs p-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an.
              </p>
              <div className="flex items-center gap-3 py-[11px] px-[14px]">
                <img src={Ellipse1702} alt="" />
                <p className="text-white">Tyler A</p>
              </div>
              <div className="border-t-[.50px] border-[#79797C] flex items-center pt-[11px] px-[14px] pb-[18px] gap-1">
                <img src={calendarImg} alt="" />
                <p className="text-white text-xs">25 July 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <div>
            <h3 className="font-PlusJakartaSans font-medium text-white py-[15px] pl-[30px] border-b-[.50px] border-[#565656]">
              My Notes <span className="px-1"> > </span> Best tools For Hashtag
              Reasearch
            </h3>
            <p className="font-PlusJakartaSans font-bold text-[36px] leading-[45px] text-white px-9 pt-4">
              Best tools For Hashtag Reasearch
            </p>
            <p className="font-poppins text-[12px]  text-white px-9 py-1 font-normal">
              Created by : Tyler A
            </p>
            <p className="font-poppins text-[12px]  text-white px-9 py-1 font-normal">
              last Modified : 19 August 2022, 20:49 PM
            </p>
            <ReactQuill
              className="text-white h-[400px] border-none mx-4"
              theme="snow"
              value={value}
              onChange={setValue}
            ></ReactQuill>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotePage;
