import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import plus from "../../assets/img/plus.png";
import historyImg from "../../assets/img/ClockCounterClockwise.png";
import ChartLineUp from "../../assets/img/ChartLineUp.png";
import Gear from "../../assets/img/Gear.png";
import people from "../../assets/img/Rectangle 1339.png";
import message from "../../assets/img/Group 427320614.png";
import telegram from "../../assets/img/icon/StartupScreen3/telegram.png";
import fb from "../../assets/img/icon/StartupScreen3/fb.png";
import slack from "../../assets/img/icon/StartupScreen3/slack.png";
import whatsapp from "../../assets/img/icon/StartupScreen3/whatsapp.png";
import dropbox from "../../assets/img/icon/StartupScreen3/dropbox.png";
import twitter from "../../assets/img/icon/StartupScreen3/twitter.png";
import MagnifyingGlass from "../../assets/img/MagnifyingGlass.png";
import Star from "../../assets/img/Star.png";
import ArrowLeft from "../../assets/img/ArrowLeft.png";
import ArrowRight from "../../assets/img/ArrowRight.png";
import ArrowClockwise from "../../assets/img/ArrowClockwise.png";
import Camera from "../../assets/img/Camera.png";
import PuzzlePiece from "../../assets/img/PuzzlePiece.png";
import gmail1 from "../../assets/img/gmail1.png";
import googleDrive from "../../assets/img/google-drive.png";
import googlePhotos from "../../assets/img/google-photos.png";
import Group427320608 from "../../assets/img/Group 427320608.png";
import DotsThreeVertical from "../../assets/img/DotsThreeVertical.png";
import NotePencil from "../../assets/img/NotePencil.png";
import User from "../../assets/img/User.png";
import SquaresFour from "../../assets/img/SquaresFour.png";
import History from "./History";
import AddNewUser from "./AddNewUser";
import AddApplication from "./AddApplication";

const LandingPage = () => {
  const [btnPlus, setBtnPlus] = useState(false);
  const [history, setHistory] = useState(false);
  const [addNewUser, setAddNewUser] = useState(false);
  const [addApplication, setAddApplication] = useState(false);
  const handleHistory = () => {
    console.log("handleHistory");
  };
  const handlePlus = () => {
    console.log("handlePlus");
  };
  const location = useLocation();

  console.log("hash", location.hash);
  console.log("pathname", location.pathname);
  console.log("search", location.search);
  return (
    <div>
      <div class="flex h-screen overflow-y-auto">
        {/* <!-- Sidebar --> */}
        <aside class="inset-y-0 flex flex-col flex-shrink-0 w-[111px] max-h-screen overflow-y-auto  bg-[#191919]   z-auto static shadow-none">
          {/* <!-- sidebar header --> */}

          {/* <!-- Sidebar links --> */}
          <nav class="flex-1 overflow-y-auto flex flex-col justify-between items-center ">
            <ul className="flex flex-col justify-center items-center mt-4">
              <Link to="/landing-page">
                <li>
                  <img src={logo} alt="" srcset="" />
                </li>
              </Link>
            </ul>
            <ul className="flex flex-col justify-center items-center gap-3">
              <li>
                {" "}
                <img className="w-[70%]" src={telegram} alt="" srcset="" />
              </li>
              <li>
                {" "}
                <img className="w-[70%]" src={fb} alt="" srcset="" />
              </li>
              <li>
                {" "}
                <img className="w-[70%]" src={twitter} alt="" srcset="" />
              </li>
              <li>
                {" "}
                <img className="w-[70%]" src={slack} alt="" srcset="" />
              </li>
              <li>
                {" "}
                <img className="w-[70%]" src={whatsapp} alt="" srcset="" />
              </li>
              <li>
                {" "}
                <img className="w-[70%]" src={dropbox} alt="" srcset="" />
              </li>
              <li>
                {" "}
                <button className="" onClick={() => setBtnPlus(!btnPlus)}>
                  <img className="mt-2 w-[70%]" src={plus} alt="" srcset="" />
                </button>
              </li>
            </ul>
            <ul className="flex flex-col justify-start items-center">
              <li
                className={`w-[111px] h-[60px] flex justify-center items-center ${
                  location.pathname === "/landing-page/note-page"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-none"
                } `}
              >
                {" "}
                <div>
                  <Link to="/landing-page/note-page">
                    <img
                      className="w-[70%]"
                      src={NotePencil}
                      alt=""
                      srcset=""
                    />
                  </Link>
                </div>
              </li>
              <li className="py-2">
                {" "}
                <img
                  onClick={() => setHistory(!history)}
                  className="w-[70%] "
                  src={historyImg}
                  alt=""
                  srcset=""
                />
              </li>
              <li
                className={`w-[111px] h-[60px] flex justify-center items-center ${
                  location.pathname === "/landing-page/message"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-none"
                } `}
              >
                <Link to="/landing-page/message">
                  <img className="w-[70%] " src={message} alt="" srcset="" />
                </Link>
              </li>

              <li
                className={`w-[111px] h-[60px] flex justify-center items-center ${
                  location.pathname === "/landing-page/chart-page"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-none"
                } `}
              >
                {" "}
                <Link to="/landing-page/chart-page">
                  <img
                    className="w-[70%] "
                    src={ChartLineUp}
                    alt=""
                    srcset=""
                  />
                </Link>
              </li>
              <li
                className={`w-[111px] h-[60px] flex justify-center items-center ${
                  location.pathname === "/landing-page/setting"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                } ${
                  location.pathname === "/landing-page/setting/menu"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname ===
                  "/landing-page/setting/menu/sign-in-method"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname ===
                  "/landing-page/setting/menu/basic-information"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname ===
                  "/landing-page/setting/menu/connected-account"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname ===
                  "/landing-page/setting/menu/deactivate-account"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname ===
                  "/landing-page/setting/menu/notifications"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname === "/landing-page/setting/contact-info"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname === "/landing-page/setting/billing"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname === "/landing-page/setting/billing"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname === "/landing-page/setting/refferals"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                ${
                  location.pathname === "/landing-page/setting/invite-a-friend"
                    ? "border-l-[#7C5CFC] border-l-[10px] bg-[#0C0C0C]"
                    : "bg-none border-transparent"
                }
                `}
              >
                <Link to="/landing-page/setting">
                  <img className="w-[70%] " src={Gear} alt="" srcset="" />
                </Link>
              </li>
              <li>
                <img className="w-[70%] " src={people} alt="" srcset="" />
              </li>
            </ul>
          </nav>
          {/* <!-- Sidebar footer --> */}
        </aside>

        <div class="flex flex-col flex-1 h-full overflow-auto ">
          {/* <!-- Navbar --> */}
          <header class="flex-shrink-0  bg-[#191919] sticky top-0 z-50">
            <div className="flex justify-between items-center bg-[#191919] py-4 px-2  ">
              <div className="flex justify-center items-center gap-3 mx-3 pr-[38px]">
                <img
                  className="cursor-pointer"
                  src={ArrowLeft}
                  alt=""
                  srcset=""
                />
                <img
                  className="cursor-pointer"
                  src={ArrowRight}
                  alt=""
                  srcset=""
                />
                <img
                  className="cursor-pointer"
                  src={ArrowClockwise}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[854px] h-[49px] flex items-center bg-[#020303] rounded-3xl">
                <img
                  className="w-[20px] h-[20px] ml-4 mr-3"
                  src={MagnifyingGlass}
                  alt=""
                />
                <input
                  className="bg-[#020303] w-[770px] py-1 focus:outline-none text-white"
                  placeholder="Search or type a URL"
                  type="text"
                />
                <img className="w-[20px] h-[20px] ml-1" src={Star} alt="" />
              </div>
              <div className="flex justify-center items-center gap-5 mr-4">
                <img src={Camera} alt="" />
                <img src={PuzzlePiece} alt="" />
                <img src={gmail1} alt="" />
                <img src={googleDrive} alt="" />
                <img src={googlePhotos} alt="" />
                <img src={Group427320608} alt="" />
                <img src={DotsThreeVertical} alt="" />
              </div>
            </div>
          </header>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      {btnPlus && (
        <>
          <div
            onClick={() => setBtnPlus(!btnPlus)}
            className=" fixed top-0 left-0 w-full h-screen bg-[#11111185] "
          ></div>
          <div className="fixed top-[300px] left-[115px]  py-8 px-7  overflow-y-auto  w-[233px] h-[129px] bg-[#191919]">
            <button
              className="flex items-center gap-3 "
              onClick={() => setAddNewUser(!addNewUser)}
            >
              <img src={User} alt="" />
              <p className="text-white font-PlusJakartaSans">Add Account</p>
            </button>
            <button
              className="flex items-center gap-3 mt-[14px]"
              onClick={() => setAddApplication(!addApplication)}
            >
              <img src={SquaresFour} alt="" />
              <p className="text-white font-PlusJakartaSans">Add Application</p>
            </button>
          </div>
        </>
      )}
      {history && <History history={history} setHistory={setHistory} />}
      {addNewUser && (
        <AddNewUser setAddNewUser={setAddNewUser} addNewUser={addNewUser} />
      )}
      {addApplication && (
        <AddApplication
          setAddApplication={setAddApplication}
          addApplication={addApplication}
        />
      )}
    </div>
  );
};

export default LandingPage;
