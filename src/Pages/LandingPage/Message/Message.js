import React from "react";
import MagnifyingGlass from "../../../assets/img/MagnifyingGlass.png";
import notification from "../../../assets/img/Group 34470.png";
import profileImg from "../../../assets/img/Group 34488.png";
import calendar from "../../../assets/img/016-calendar-silhouette.png";
import star from "../../../assets/img/007-star.png";
import mail from "../../../assets/img/mail.png";
import schedule from "../../../assets/img/schedule.png";
import Profile from "../../../assets/img/Profile.png";
import notificationBell from "../../../assets/img/005-notification-bell.png";
import placeholder from "../../../assets/img/placeholder.png";
import list from "../../../assets/img/019-list.png";
import activeIcon from "../../../assets/img/activeIcon.png";
import "./Message.css";
import { IoIosAdd, IoMdMore } from "react-icons/io";
import { IoCheckmarkDoneOutline, IoSearchOutline } from "react-icons/io5";
import Subtract from "../../../assets/img/Subtract.png";
import starSvg from "../../../assets/img/XMLID 328.svg";
import videoCamera from "../../../assets/img/014-video-camera.png";
import undo from "../../../assets/img/undo.png";
import redo from "../../../assets/img/redo.png";
import T from "../../../assets/img/T.png";
import B from "../../../assets/img/B.png";
import L from "../../../assets/img/L.png";
import U from "../../../assets/img/U.png";
import separator from "../../../assets/img/separator.png";
import smile from "../../../assets/img/smile 1.png";
import icAttachment from "../../../assets/img/icAttachment.png";
import plan from "../../../assets/img/plan.png";

const Message = () => {
  return (
    <div className="bg-[#131517] max-h-fit pb-[150px]">
      <div className="flex justify-between items-center mx-3 mb-3  pt-6 pl-[52px]">
        <div className="flex items-center justify-center gap-5">
          <img className="w-[19px] h-[19px]" src={list} alt="" />
          <p className="text-white mt-2 font-poppins text-3xl font-bold">
            Message
          </p>
        </div>
        <div className="flex justify-between items-center gap-[100px]">
          <div className="w-[250px] h-[47px]  text-white flex items-center border-[1px] border-[#2B2B2B] justify-start rounded-[50px] px-2">
            <input
              className="bg-transparent focus:outline-none  w-[200px] font-inter"
              placeholder="Search here..."
              type="text"
            />
            <img src={MagnifyingGlass} alt="" srcset="" />
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="relative">
              <p className="w-[28.48px] h-[19.78px] bg-[#FFA7D7] rounded-[30px] shadow-xl absolute left-4 bottom-5 box-shadow-custom-1 text-center text-sm font-poppins font-bold leading-5">
                21
              </p>
              <img className="" src={star} alt="" />
            </div>
            <div className="relative">
              <p
                className={`w-[28.48px] h-[19.78px] bg-[#FFCF6D] rounded-[30px]  absolute left-4 bottom-5 box-shadow-custom-2 text-center text-sm font-poppins font-bold leading-5`}
              >
                12
              </p>{" "}
              <img className="" src={notificationBell} alt="" />
            </div>
            <div className="relative">
              <p className="w-[28.48px] h-[19.78px] bg-[#FC2E53] rounded-[30px] shadow-[0px 6px 20px] absolute left-4 bottom-5 box-shadow-custom-3 text-center text-sm font-poppins font-bold leading-5">
                !
              </p>
              <img className="" src={mail} alt="" />
            </div>
            <div className="relative">
              <p className="w-[28.48px] h-[19.78px] bg-[#09BD3C] rounded-[30px] shadow-[0px 6px 20px] absolute left-4 bottom-5 box-shadow-custom-4 text-center text-sm font-poppins font-bold leading-5">
                67
              </p>
              <img className="" src={calendar} alt="" />
            </div>
            <div className="relative ml-5">
              <img className="" src={schedule} alt="" />
            </div>
            <div>
              <img className="" src={Profile} alt="" />
            </div>

            <select className="w-[87px] h-[47px] bg-[#7C5CFC] rounded-[50px] text-white font-poppins font-medium text-[18px] px-4">
              <option value="">EN</option>
              <option value="">BN</option>
              <option value="">IN</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 border-t-[.50px] border-[#2B2B2B]">
        <div className="col-span-3 border-r-[.50px] border-[#2B2B2B] pt-3">
          <div className="flex justify-between ml-[24px]">
            <p className="font-poppins font-bold text-2xl leading-9 text-white">
              Inbox{" "}
              <span className="font-poppins font-semibold text-lg leading-[27px] text-[#717579]">
                (2,456)
              </span>
            </p>

            <IoIosAdd className="w-[40px] h-[40px] bg-[#7C5CFC] rounded-full font-bold mr-16" />
          </div>
          <div className="w-[258.12px] h-[41.23px] bg-[#886CC0] bg-opacity-20 rounded-[50px] flex justify-around items-center mt-[22px] ml-[24px]">
            <p className="font-poppins text-sm text-white">All</p>
            <p className="font-poppins text-sm text-white">Social</p>
            <p className="font-poppins text-sm text-white">Updates</p>
          </div>
          <div>
            <p className="uppercase font-poppins font-normal text-base leading-6 text-[#717579] ml-[24px] mt-[38px]">
              TEAM
            </p>
            <div>
              <div className="grid grid-cols-4 mx-5">
                <div className="col-span-1 grid grid-cols-1">
                  <div className="flex justify-start items-center">
                    <div>
                      <img className="p-[2px]" src={placeholder} alt="" />
                      <img className="p-[2px]" src={placeholder} alt="" />
                    </div>
                    <div>
                      {" "}
                      <img className="p-[2px]" src={placeholder} alt="" />
                      <img className="p-[2px]" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <p className="font-poppins font-normal text-base leading-6 text-white">
                    World Designer{" "}
                    <span className="text-[#717579] font-poppins text-xs pl-[50px]">
                      12m ago
                    </span>
                  </p>
                  <p className="text-[#717579] font-poppins font-normal text-sm">
                    I think you should put that component more lower th..{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 ">
              <div className="grid grid-cols-4 border-b-[.50px] border-[#2B2B2B] mx-5 pb-4">
                <div className="col-span-1 grid grid-cols-1">
                  <div className="flex justify-start items-center">
                    <div>
                      <img className="p-[2px]" src={placeholder} alt="" />
                      <img className="p-[2px]" src={placeholder} alt="" />
                    </div>
                    <div>
                      {" "}
                      <img className="p-[2px]" src={placeholder} alt="" />
                      <img className="p-[2px]" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <p className="font-poppins font-normal text-base leading-6 text-white">
                    Best Developers{" "}
                    <span className="text-[#717579] font-poppins text-xs pl-[50px]">
                      2m ago
                    </span>
                  </p>
                  <p className="text-[#717579] font-poppins font-normal text-sm">
                    Hey anny, don’t forget to prepare prototype{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-around items-center">
              <p className="uppercase text-[#717579] ">RECENT MESSAGE</p>
              <button className="text-white text-4xl">
                <IoMdMore />
              </button>
            </div>
            <div className="my-3 ">
              <div className="grid grid-cols-4 border-b-[.50px] border-[#2B2B2B] mx-5 pb-4">
                <div className="col-span-1 grid grid-cols-1">
                  <div className="flex justify-start items-center">
                    <img src={profileImg} alt="" srcset="" />
                  </div>
                </div>
                <div className="col-span-3">
                  <p className="font-poppins font-normal text-base leading-6 text-white relative ">
                    Tyler{" "}
                    <span className="text-[#717579] font-poppins text-xs absolute top-1 right-5">
                      2m ago
                    </span>
                  </p>
                  <p className="text-[#717579] font-poppins font-normal text-sm">
                    I remember that project due is tomorrow.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 ">
              <div className="grid grid-cols-4 border-b-[.50px] border-[#2B2B2B] mx-5 pb-4">
                <div className="col-span-1 grid grid-cols-1">
                  <div className="flex justify-start items-center relative">
                    <img src={profileImg} alt="" srcset="" />
                    <img
                      className="absolute bottom-2 left-6"
                      src={activeIcon}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <p className="font-poppins font-normal text-base leading-6 text-white relative ">
                    Skylar Dorwart{" "}
                    <span className="text-[#717579] font-poppins text-xs absolute top-1 right-5">
                      2m ago
                    </span>
                  </p>
                  <p className="text-[#717579] font-poppins font-normal text-sm">
                    Hei, dont forget to clear server cache!
                    <IoCheckmarkDoneOutline className="inline text-[#7C5CFC] text-2xl" />
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 ">
              <div className="grid grid-cols-4 border-b-[.50px] border-[#2B2B2B] mx-5 pb-4">
                <div className="col-span-1 grid grid-cols-1">
                  <div className="flex justify-start items-center relative">
                    <img src={profileImg} alt="" srcset="" />
                    <img
                      className="absolute bottom-2 left-6"
                      src={activeIcon}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <p className="font-poppins font-normal text-base leading-6 text-white relative ">
                    Kierra Curtis
                    <span className="text-[#717579] font-poppins text-xs absolute top-1 right-5">
                      2m ago
                    </span>
                  </p>
                  <p className="text-[#717579] font-poppins font-normal text-sm">
                    I dont’t know where that files saved dude.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 ">
              <div className="grid grid-cols-4 border-b-[.50px] border-[#2B2B2B] mx-5 pb-4">
                <div className="col-span-1 grid grid-cols-1">
                  <div className="flex justify-start items-center relative">
                    <img src={profileImg} alt="" srcset="" />
                    <img
                      className="absolute bottom-2 left-6"
                      src={activeIcon}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <p className="font-poppins font-normal text-base leading-6 text-white relative ">
                    Ryan Aminoff
                    <span className="text-[#717579] font-poppins text-xs absolute top-1 right-5">
                      2m ago
                    </span>
                  </p>
                  <p className="text-[#717579] font-poppins font-normal text-sm">
                    Ok sir. I will fix it as soon as possible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3 col-span-9 px-[38px] relative">
          <div className="flex justify-between items-center pb-2 mx-8 border-b-[.50px] border-[#2B2B2B]">
            <div className="flex items-center justify-start gap-6">
              <img src={Subtract} alt="" />
              <div>
                <h4 className="font-poppins text-white text-[28px] font-bold">
                  Best Developers
                </h4>
                <p className="text-[#717579] font-poppins text-sm">
                  We share about daily life as developers in the world
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img src={videoCamera} alt="" />

              <IoSearchOutline className="w-[19px] h-[19px] text-[#717579] " />
              <img src={starSvg} alt="" />
              <IoMdMore className="w-[19px] h-[19px] text-[#717579] " />
            </div>
          </div>
          <div className="relative">
            <div className="flex items-center gap-4 absolute top-[470px]">
              <div className="">
                <div className="flex justify-start items-center relative">
                  <img src={profileImg} alt="" srcset="" />
                  <img
                    className="absolute bottom-0 left-6"
                    src={activeIcon}
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="">
                <p className="font-poppins font-bold text-base leading-6 text-white relative ">
                  Skylar Dorwart{" "}
                </p>
                <p className="text-white font-poppins font-normal text-sm">
                  Typing ...
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <div>
              <textarea
                className="w-[988px] h-[83px] rounded-[14px] textarea bg-[#886CC0] bg-opacity-25 text-white font-poppins text-base appearance-none"
                type=""
              />
            </div>
            <div className="flex justify-between items-center border-t-[2px] border-[#886CC0] pt-3">
              <div className="flex items-center gap-7">
                <button>
                  <img src={undo} alt="" srcset="" />
                </button>
                <button>
                  <img src={redo} alt="" srcset="" />
                </button>
                <button>
                  <img src={T} alt="" srcset="" />
                </button>
                <button>
                  <img src={separator} alt="" srcset="" />
                </button>
                <button>
                  <img src={B} alt="" srcset="" />
                </button>
                <button>
                  <img src={L} alt="" srcset="" />
                </button>
                <button>
                  <img src={U} alt="" srcset="" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button>
                  <img src={smile} alt="" srcset="" />
                </button>
                <button>
                  <img src={icAttachment} alt="" srcset="" />
                </button>
                <div className="w-[113px] h-[38px] bg-[#7C5CFC] rounded-[50px] flex items-center justify-around px-3">
                  <img src={plan} alt="" srcset="" />
                  <p className="uppercase font-poppins text-lg font-semibold text-white">
                    SEND
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
