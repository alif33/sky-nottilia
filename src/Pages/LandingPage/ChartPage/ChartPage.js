import React from "react";
import MagnifyingGlass from "../../../assets/img/MagnifyingGlass.png";
import notification from "../../../assets/img/Group 34470.png";
import profileImg from "../../../assets/img/Group 34488.png";
import twoPeople from "../../../assets/img/61.png";
import peoplePlus from "../../../assets/img/69.png";
import love from "../../../assets/img/38.png";
import messageIcon from "../../../assets/img/8.png";
import Rectangle784 from "../../../assets/img/Rectangle 784.png";
import Rectangle785 from "../../../assets/img/Rectangle 785.png";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
const ChartPage = () => {
  return (
    <div className="bg-[#131517] h-max pb-[150px] pl-[52px]">
      <div className="flex justify-between items-center mx-3 mb-3  mt-[30px]">
        <div>
          <h1 className="text-white font-bold text-2xl leading-8">Hi, Tyler</h1>
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
      <div className="mt-6 ml-1">
        <select
          name=""
          id=""
          className="bg-transparent text-white font-ubuntu font-medium text-2xl"
        >
          <option className="bg-transparent text-white " value="instagram">
            Instagram Analytics
          </option>
          <option className="bg-transparent text-white " value="faceBook">
            FaceBook Analytics
          </option>
          <option className="bg-transparent text-white " value="youtube">
            Youtube Analytics
          </option>
        </select>
        <div className="grid grid-cols-5 gap-4 my-5">
          <div className="w-[232px] h-[140px] bg-[#1E1F25] rounded-2xl">
            <div>
              <div className="ml-4  pt-3">
                <img
                  className="w-[24px] h-[25px] inline mr-5"
                  src={twoPeople}
                  alt=""
                />
                <p className="font-inter text-white inline">Followers</p>
              </div>
              <p className="font-inter font-medium text-[30px] leading-9 text-white  pt-[18px] pl-4">
                2,875,908{" "}
              </p>
              <p className="text-white font-ubuntu text-[12px] pl-4 pt-[17px]">
                <IoMdArrowDropup className="text-[#86D998] inline text-sm" />{" "}
                <span className="text-[#86D998]">0,61%</span> More than last
                week
              </p>
            </div>
          </div>
          <div className="w-[232px] h-[140px] bg-[#1E1F25] rounded-2xl">
            <div>
              <div className="ml-4  pt-3">
                <img
                  className="w-[24px] h-[25px] inline mr-5"
                  src={peoplePlus}
                  alt=""
                />
                <p className="font-inter text-white inline">Following</p>
              </div>
              <p className="font-inter font-medium text-[30px] leading-9 text-white  pt-[18px] pl-4">
                145{" "}
              </p>
              <p className="text-[#B8BCBF] font-ubuntu text-[12px] pl-4 pt-[17px]">
                <IoMdArrowDropup className="text-[#86D998] inline text-sm" />{" "}
                <span className="text-[#86D998] pr-1">2,11%</span> More than
                last week
              </p>
            </div>
          </div>
          <div className="w-[232px] h-[140px] bg-[#1E1F25] rounded-2xl">
            <div>
              <div className="ml-4  pt-3">
                <img
                  className="w-[24px] h-[25px] inline mr-5"
                  src={love}
                  alt=""
                />
                <p className="font-inter text-white inline">Likes</p>
              </div>
              <p className="font-inter font-medium text-[30px] leading-9 text-white  pt-[18px] pl-4">
                103,572 <span className="text-[12px]"> /Post</span>
              </p>
              <p className="text-[#B8BCBF] font-ubuntu text-[12px] pl-4 pt-[13px]">
                <IoMdArrowDropup className="text-[#86D998] inline text-sm" />{" "}
                <span className="text-[#86D998] pr-1">0,11%</span> More than
                last week
              </p>
            </div>
          </div>
          <div className="w-[232px] h-[140px] bg-[#1E1F25] rounded-2xl">
            <div>
              <div className="ml-4  pt-3">
                <img
                  className="w-[24px] h-[25px] inline mr-5"
                  src={messageIcon}
                  alt=""
                />
                <p className="font-inter text-white inline">Comment</p>
              </div>
              <p className="font-inter font-medium text-[30px] leading-9 text-white  pt-[18px] pl-4">
                1,404<span className="text-[12px]"> /Post</span>
              </p>
              <p className="text-white font-ubuntu text-[12px] pl-4 pt-[13px]">
                <IoMdArrowDropup className="inline text-sm" />{" "}
                <span className="text-[#86D998]">0,61%</span> More than last
                week
              </p>
            </div>
          </div>
          <div className="w-[154px] h-[140px] bg-[#1E1F25] rounded-2xl">
            <div>
              <p className="font-inter text-base text-white pl-4 pt-2">
                Gender
              </p>
              <div className="ml-4  pt-2 flex items-center">
                <img
                  className="w-[24px] h-[25px] mr-5"
                  src={Rectangle785}
                  alt=""
                />
                <p className="font-inter text-xs text-white">
                  Man
                  <span className="font-inter text-[16px] text-[#A5A5A5] block pt-1">
                    53,4 %
                  </span>
                </p>
              </div>
              <div className="ml-4  pt-3 flex items-center">
                <img
                  className="w-[24px] h-[25px] mr-5"
                  src={Rectangle784}
                  alt=""
                />
                <p className="font-inter text-xs text-white">
                  WoMan
                  <span className="font-inter text-[16px] text-[#A5A5A5] block pt-1">
                    46,6 %
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <div className="w-[780.03px] h-[320.12px] bg-[#1E1F25] rounded-[28px]"></div>
            <div className="flex justify-between mt-4">
              <div className="w-[305.18px] h-[209.15px] bg-[#1E1F25] rounded-[20px]"></div>
              <div className="w-[216.62px] h-[209.15px] bg-[#1E1F25] rounded-[28px]"></div>
              <div className="w-[224.09px] h-[209.15px] bg-[#1E1F25] rounded-[28px]"></div>
            </div>
          </div>
          <div className="w-[433.23px] h-[545.27px] bg-[#1E1F25]  rounded-[15px] mr-16"></div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
