import React, { useState } from "react";
import MagnifyingGlass from "../../../assets/img/MagnifyingGlass.png";
import notification from "../../../assets/img/Group 34470.png";
import profileImg from "../../../assets/img/Group 34488.png";
import rocket from "../../../assets/img/rocket.png";
import Group48096786 from "../../../assets/img/Group 48096786.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./PostScheduler.css";
import { IoIosAdd, IoMdMore } from "react-icons/io";
const PostScheduler = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-[#131517] h-max">
      <div className="flex justify-between items-center mx-3 mb-3  mt-[30px]">
        <div>
          <h1 className="text-white font-bold text-2xl leading-8">
            Post Scheduler
          </h1>
          <p className="text-white mt-2">Welcome back, have a nice day!</p>
        </div>

        <div className="flex justify-between items-center gap-[100px]">
          <div className="w-[426.83px] h-[51.22px] bg-[#1E1F25] text-white flex items-center justify-start rounded-2xl px-2">
            <img src={MagnifyingGlass} alt="" srcset="" />
            <input
              className="bg-transparent focus:outline-none  w-[400px] ml-2"
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
      <div className="grid grid-cols-12">
        <div className="col-span-8 ">
          <div className="flex justify-evenly items-center">
            <div className="w-[187px] h-[204px] bg-[#1E1F25] rounded-[16px] relative mt-10">
              <img
                className="relative top-[-40px] left-11"
                src={rocket}
                alt=""
              />
              <p className="font-poppins text-sm font-medium text-center text-white mt-[-30px]">
                Add New Schedule
              </p>
              <p className="text-[#727272] font-poppins text-[10px] text-center pt-2">
                Hurry up and add your schedule now!
              </p>
              <div className="flex justify-center items-center mt-3">
                <button className="w-[155px] h-[32px] bg-[#7C5CFC] rounded-[16px] text-white font-poppins font-medium text-xs">
                  Create Schedule
                </button>
              </div>
            </div>
            <div className="bgImgPostScheduler w-[554px] h-[204px] rounded-xl relative mt-10 ">
              <div className="w-[554px] h-[64px] bg-[#121212] bg-opacity-30 absolute flex justify-around items-center bottom-0">
                <p className="font-poppins font-semibold text-base text-white">
                  Social Media Marketing
                </p>
                <img src={Group48096786} alt="" srcset="" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center px-[70px] pt-8">
            <p className="text-white font-poppins text-[20px] font-semibold">
              Upcoming Schedule
            </p>
            <IoMdMore className="w-[24px] h-[24px]" />
          </div>
          <div className="w-[810px] h-[444px] bg-[#1E1F25] rounded-[16px] mt-10 ml-16"></div>
        </div>
        <div className="col-span-4">
          <div className="mt-10">
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className="w-[332px] h-[400px] bg-[#1E1F25] rounded-[16px] mt-10 text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default PostScheduler;
