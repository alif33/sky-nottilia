import React from "react";
import MagnifyingGlass from "../../../assets/img/MagnifyingGlass.png";
import notification from "../../../assets/img/Group 34470.png";
import profileImg from "../../../assets/img/Group 34488.png";
import menu from "../../../assets/img/element-4.svg";
import frame from "../../../assets/img/frame.svg";
import crown from "../../../assets/img/crown.svg";
import profileAdd from "../../../assets/img/profile-add.svg";
import emptyWallet from "../../../assets/img/empty-wallet.svg";
import verify from "../../../assets/img/verify.png";
import gallery from "../../../assets/img/gallery.png";
import { Link, Outlet } from "react-router-dom";
const SettingPage1 = () => {
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
    <div className="bg-[#131517] h-max pb-[150px] pl-[52px]">
      <div className="flex justify-between items-center mx-3 my-3 ">
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
      <div className="flex">
        <div className="w-[290px]">
          <ul>
            <li className=" ml-3 my-3">
              <Link to="/landing-page/setting">
                {" "}
                <div className="flex gap-4">
                  <img src={menu} alt="" srcset="" />
                  <p className="text-white">Menu</p>
                </div>
              </Link>

              <ul>
                <li className=" ml-3 my-3">
                  <Link to="/landing-page/setting/menu">
                    <p className="text-white font-extralight opacity-40">
                      Overview
                    </p>
                  </Link>
                </li>
                <li className=" ml-3 my-3">
                  <Link
                    className=""
                    to="/landing-page/setting/menu/sign-in-method"
                  >
                    <p className="text-white font-extralight opacity-40">
                      Sign in method
                    </p>
                  </Link>
                </li>
                <li className="ml-3 my-3">
                  <Link to="/landing-page/setting/menu/basic-information">
                    <p className="text-white font-extralight opacity-40">
                      Basic Information
                    </p>
                  </Link>
                </li>
                <li className="ml-3 my-3">
                  <Link to="/landing-page/setting/menu/connected-account">
                    <p className="text-white font-extralight opacity-40">
                      Connected account
                    </p>
                  </Link>
                </li>
                <li className="ml-3 my-3">
                  <Link to="/landing-page/setting/menu/notifications">
                    <p className="text-white font-extralight opacity-40">
                      Notifications
                    </p>
                  </Link>
                </li>
                <li className="ml-3 my-3">
                  <Link to="/landing-page/setting/menu/deactivate-account">
                    <p className="text-white font-extralight opacity-40">
                      Deactivate account
                    </p>
                  </Link>
                </li>
              </ul>
            </li>
            <Link to="/landing-page/setting/contact-info">
              <li className="flex gap-4 ml-3 my-3">
                <img src={frame} alt="" srcset="" />
                <p className="text-white">Contact info</p>
              </li>
            </Link>
            <Link to="/landing-page/setting/billing">
              {" "}
              <li className="flex gap-4 ml-3 my-3">
                <img src={emptyWallet} alt="" srcset="" />
                <p className="text-white">Billing</p>
              </li>
            </Link>
            <Link to="/landing-page/setting/refferals">
              {" "}
              <li className="flex gap-4 ml-3 my-3">
                <img src={crown} alt="" srcset="" />
                <p className="text-white">Refferals</p>
              </li>
            </Link>
            <Link to="/landing-page/setting/invite-a-friend">
              {" "}
              <li className="flex gap-4 ml-3 my-3">
                <img src={profileAdd} alt="" srcset="" />
                <p className="text-white">Invite a friend</p>
              </li>
            </Link>
          </ul>
        </div>
        <Outlet />
        {/* <div className="w-[957px] h-[619px] bg-[#1E1F25] border-[#6B6B6B] border-[1px] rounded-lg ">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctt ut aliquam, purus sit amet luus
                venenatis, lectus.{" "}
                <span className="text-[#7C5CFC]">Learn more</span>
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
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked
                />
              </div>
            </div>
          ))}

          <></>
        </div> */}
      </div>
    </div>
  );
};

export default SettingPage1;
