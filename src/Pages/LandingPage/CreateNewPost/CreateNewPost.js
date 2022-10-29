import React, { useState } from "react";
import MagnifyingGlass from "../../../assets/img/MagnifyingGlass.png";
import notification from "../../../assets/img/Group 34470.png";
import profileImg from "../../../assets/img/Group 34488.png";
import Link from "../../../assets/img/Link.png";
import Smiley from "../../../assets/img/Smiley.png";
import YoutubeLogo from "../../../assets/img/YoutubeLogo.png";
import image73 from "../../../assets/img/image 73.png";
import fb from "../../../assets/img/icon/StartupScreen3/fb.png";
import instagram from "../../../assets/img/icon/StartupScreen3/instagram.png";
import twitter from "../../../assets/img/icon/StartupScreen3/twitter.png";
import Ellipse198 from "../../../assets/img/Ellipse 198.png";
import { IoImageOutline, IoLocationOutline } from "react-icons/io5";
const CreateNewPost = () => {
  const [tapList, setTapList] = useState(1);
  const [tapListSocial, setTapListSocial] = useState(1);
  return (
    <div className="bg-[#131517] h-max">
      <div className="flex justify-between items-center mx-3 mb-3 pt-6 ">
        <div>
          <h1 className="text-white font-bold text-2xl leading-8">
            Create New Post
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
        <div className="col-span-5 ml-4">
          {/* <div className=" text-white flex items-center gap-3 my-2">
            <p>Create Post</p>
            <p>Draft</p>
            <p>Scheduled</p>
          </div> */}
          <ul className="w-full  flex items-center text-white ">
            <li>
              <button
                onClick={() => setTapList(1)}
                className={`border-b-2 bg-transparent border-solid mr-4 text-sm mb-3 ${
                  tapList === 1
                    ? "border-b-[#7C5CFC] border-b-4"
                    : "border-b-transparent"
                } `}
              >
                Create Post
              </button>
            </li>
            <li>
              <button
                onClick={() => setTapList(2)}
                className={`border-b-2 bg-transparent border-solid mr-4 text-sm mb-3 ${
                  tapList === 2
                    ? "border-b-[#7C5CFC] border-b-4"
                    : "border-b-transparent"
                } `}
              >
                Draft
              </button>
            </li>
            <li>
              <button
                onClick={() => setTapList(3)}
                className={`border-b-2 bg-transparent border-solid mr-4 text-sm mb-3 ${
                  tapList === 3
                    ? "border-b-[#7C5CFC] border-b-4"
                    : "border-b-transparent"
                } `}
              >
                Scheduled
              </button>
            </li>
          </ul>
          {tapList === 1 && (
            <div className="w-[492px] h-[367px] bg-[#1E1F25] rounded-[16px] relative">
              <div>
                <textarea
                  className="w-[480px] h-[325px] bg-transparent text-white font-PlusJakartaSans text-xl focus:outline-none mx-2 mt-2"
                  type="text"
                />
                <div className="flex items-center gap-5 ml-2">
                  <IoImageOutline className="text-xl text-white " />
                  <img src={YoutubeLogo} alt="" srcset="" />
                  <img src={Link} alt="" srcset="" />
                  <IoLocationOutline className="text-white text-xl" />
                  <img src={Smiley} alt="" srcset="" />
                </div>
              </div>
              <div className="flex items-center gap-2 absolute bottom-[-30px] right-0">
                <p className="text-white">Save Draft</p>
                <input type="checkbox" className="toggle" checked />
              </div>
            </div>
          )}
          {/* {tapList === 2 && (
            <div className="w-[492px] h-[367px] bg-[#1E1F25] rounded-[16px] relative">
              <div>
                <textarea
                  className="w-[480px] h-[325px] bg-transparent text-white font-PlusJakartaSans text-xl focus:outline-none mx-2 mt-2"
                  type="text"
                />
                <div className="flex items-center gap-5 ml-2">
                  <IoImageOutline className="text-xl text-white " />
                  <img src={YoutubeLogo} alt="" srcset="" />
                  <img src={Link} alt="" srcset="" />
                  <IoLocationOutline className="text-white text-xl" />
                  <img src={Smiley} alt="" srcset="" />
                </div>
              </div>
              <div className="flex items-center gap-2 absolute bottom-[-30px] right-0">
                <p className="text-white">Save Draft</p>
                <input type="checkbox" className="toggle" checked />
              </div>
            </div>
          )}
          {tapList === 3 && (
            <div className="w-[492px] h-[367px] bg-[#1E1F25] rounded-[16px] relative">
              <div>
                <textarea
                  className="w-[480px] h-[325px] bg-transparent text-white font-PlusJakartaSans text-xl focus:outline-none mx-2 mt-2"
                  type="text"
                />
                <div className="flex items-center gap-5 ml-2">
                  <IoImageOutline className="text-xl text-white " />
                  <img src={YoutubeLogo} alt="" srcset="" />
                  <img src={Link} alt="" srcset="" />
                  <IoLocationOutline className="text-white text-xl" />
                  <img src={Smiley} alt="" srcset="" />
                </div>
              </div>
              <div className="flex items-center gap-2 absolute bottom-[-30px] right-0">
                <p className="text-white">Save Draft</p>
                <input type="checkbox" className="toggle" checked />
              </div>
            </div>
          )} */}
          <div className="pt-20">
            <p className="text-white font-PlusJakartaSans font-semibold">
              Link Preview
            </p>
            <div className="flex gap-5 pt-4 pb-10">
              <img src={image73} alt="" srcset="" />
              <div>
                <p className="text-white font-PlusJakartaSans font-normal pb-1">
                  Social Media Management Secrets
                </p>
                <a className="text-[#307BF4] font-PlusJakartaSans " href="">
                  http://xyx.com/smm
                </a>
                <p className="text-white text-xs pt-3">
                  Social media management software that helps you create content
                  and get more followers. Manage Multiple Social Accounts With
                  Hootsuite's All-In-One Social Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <p className="text-white font-PlusJakartaSans font-semibold border-b-[3px] border-[#7C5CFC] inline pb-2">
            Go To Live
          </p>
          <div className="w-[279px] h-[279px] bg-[#1E1F25] rounded-[14px] mt-7">
            <div className="flex justify-start items-center gap-4 border-b-[1px] border-[#4A4A4A] mx-2 px-2 pt-2">
              <button
                onClick={() => setTapListSocial(1)}
                className={`border-b-2 bg-transparent border-solid mr-4 text-sm pb-1 ${
                  tapListSocial === 1
                    ? "border-b-[#7C5CFC] border-b-4"
                    : "border-b-transparent"
                } `}
              >
                <img className="w-[32px] h-[32px]" src={fb} alt="" srcset="" />
              </button>
              <button
                onClick={() => setTapListSocial(2)}
                className={`border-b-2 bg-transparent border-solid mr-4 text-sm pb-1 ${
                  tapListSocial === 2
                    ? "border-b-[#7C5CFC] border-b-4"
                    : "border-b-transparent"
                } `}
              >
                {" "}
                <img
                  className="w-[23px] h-[23px]"
                  src={instagram}
                  alt=""
                  srcset=""
                />
              </button>
              <button
                onClick={() => setTapListSocial(3)}
                className={`border-b-2 bg-transparent border-solid mr-4 text-sm pb-1 ${
                  tapListSocial === 3
                    ? "border-b-[#7C5CFC] border-b-4"
                    : "border-b-transparent"
                } `}
              >
                {" "}
                <img
                  className="w-[35px] h-[35px]"
                  src={twitter}
                  alt=""
                  srcset=""
                />
              </button>
            </div>
            <div className="flex justify-center items-center pt-5">
              <iframe
                className="rounded-xl"
                width="240"
                height="149"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
            <div className="flex justify-between items-center mx-4 pt-4">
              <div className="flex gap-2">
                <img src={Ellipse198} alt="" />
                <div>
                  <p className="font-PlusJakartaSans font-semibold text-[10px] text-white">
                    Marketing Live
                  </p>
                  <p className="font-PlusJakartaSans font-light text-[8px] text-[#666666]">
                    Tyler
                  </p>
                </div>
              </div>
              <button className="w-[71px] h-[25px] bg-[#7C5CFC] text-white font-PlusJakartaSans text-[10px]">
                Go To Live
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          {" "}
          <div className="w-[377px] h-[576px] bg-[#1E1F25] rounded-[14px]"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
