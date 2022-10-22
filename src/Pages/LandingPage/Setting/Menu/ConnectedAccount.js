import React from "react";
import verify from "../../../../assets/img/verify.png";
import gallery from "../../../../assets/img/gallery.png";
import { Outlet } from "react-router-dom";

const ConnectedAccount = () => {
  const accountApps = [
    {
      _id: "01",
      name: "Google",
      img: gallery,
    },
    {
      _id: "02",
      name: "Facebook",
      img: gallery,
    },
    {
      _id: "03",
      name: "Instagram",
      img: gallery,
    },
    {
      _id: "04",
      name: "Slack",
      img: gallery,
    },
    {
      _id: "05",
      name: "Gmail",
      img: gallery,
    },
  ];
  return (
    <div className="w-[957px] h-[619px] bg-[#1E1F25] border-[#6B6B6B] border-[1px] rounded-lg ">
      <p className="text-[24px] font-medium text-white m-[24px] leading-[30.24px]">
        Connected Accounts
      </p>
      <div className="flex justify-center">
        <div className="w-[905px] h-[126px] rounded-[7px] bg-[#151519]">
          <div className="flex items-center gap-5 m-4">
            <img src={verify} alt="" srcset="" />
            <p className="text-[#019F37]">Secure Your Account</p>
          </div>
          <p className="text-[#FFFFFF] mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctt ut aliquam, purus sit amet luus venenatis,
            lectus. <span className="text-[#7C5CFC]">Learn more</span>
          </p>
        </div>
      </div>
      {accountApps.map((accountApp) => (
        <div className="flex justify-between items-center border-b-[1px] border-[#616161] pb-3 mx-4 mt-6">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-gray-400 rounded-xl flex justify-center items-center">
              <img className="w-[24px] h-[24px]" src={gallery} alt="" />
            </div>
            <div>
              <p className="font-normal text-white">Google</p>
              <p className="text-white text-[14px]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="form-control">
            <input type="checkbox" className="toggle toggle-primary" checked />
          </div>
        </div>
      ))}

      <></>
    </div>
  );
};

export default ConnectedAccount;
