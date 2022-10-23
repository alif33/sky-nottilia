import React from "react";
import MagnifyingGlass from "../../../assets/img/MagnifyingGlass.png";
import notification from "../../../assets/img/Group 34470.png";
import profileImg from "../../../assets/img/Group 34488.png";
import calendar from "../../../assets/img/016-calendar-silhouette.png";
import star from "../../../assets/img/007-star.png";
import mail from "../../../assets/img/mail.png";
import schedule from "../../../assets/img/Group 34488.png";
import Profile from "../../../assets/img/Group 34488.png";
import notificationBell from "../../../assets/img/Group 34488.png";
import list from "../../../assets/img/019-list.png";

const Message = () => {
  return (
    <div className="bg-[#131517] min-h-screen pb-[150px]">
      <div className="flex justify-between items-center mx-3 mb-3  mt-[30px] pl-[52px]">
        <div className="flex items-center justify-center gap-5">
          <img className="w-[19px] h-[19px]" src={list} alt="" />
          <p className="text-white mt-2 font-poppins text-3xl font-bold">
            Message
          </p>
        </div>

        <div className="flex justify-between items-center gap-[100px]">
          <div className="w-[250px] h-[47px] bg-[#1E1F25] text-white flex items-center justify-start rounded-2xl px-2">
            <input
              className="bg-transparent focus:outline-none  w-[200px] font-inter"
              placeholder="Search here..."
              type="text"
            />
            <img src={MagnifyingGlass} alt="" srcset="" />
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
    </div>
  );
};

export default Message;
