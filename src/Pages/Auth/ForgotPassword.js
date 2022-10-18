import React from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/img/Google Icon.png";
import Rectangle1 from "../../assets/img/Rectangle 849 (1) (1).png";
import Rectangle2 from "../../assets/img/Rectangle 849 (1) (2).png";
import logo from "../../assets/img/logo.png";
import calender from "../../assets/img/calender.png";
import scheduler from "../../assets/img/scheduler.png";
import image2 from "../../assets/img/image 2.png";
const ForgotPassword = () => {
  return (
    <div className="bg-[#E5E3E3] flex justify-between items-center lg:px-12 px-3 py-5">
      <div className="w-[350px] h-[585px] lg:ml-[100px]">
        <h2 className="text-[#233B58] text-5xl font-semibold">
          Create new
          <span className="block mt-1">password</span>
        </h2>
        <div className="mt-[50px]">
          <form>
            <div>
              <label className="text-[#A4A4A4] text-[14px] block mb-[6px]">
                New Password
              </label>
              <input
                className="bg-[#b8bcc9] w-[350px] h-[60px] rounded-[5px] focus:bg-white focus:shadow-2xl focus:outline-none"
                type="password"
              />
            </div>
            <div className="mt-[30px]">
              <label className="text-[#A4A4A4] text-[14px] block mb-[6px]">
                Repeat Password
              </label>
              <input
                className="bg-[#b8bcc9] w-[350px] h-[60px] rounded-[5px] focus:bg-white focus:shadow-2xl focus:outline-none"
                type="password"
              />
            </div>

            <button className="w-[350px] h-[60px] bg-[#7C5CFC] text-white font-semibold rounded-[5px] mt-[50px]">
              Set Password
            </button>
          </form>
          <p className="font-normal mt-[30px]">
            Already have an account?
            <Link to="/sign-in" className="text-[#474DDC]">
              Login here
            </Link>
          </p>
          <p className="font-normal mt-[30px]">
            Don’t have an account?
            <Link to="/sign-up" className="text-[#474DDC]">
              Signup here.
            </Link>
          </p>
        </div>
      </div>
      <div>
        <div className="w-[780px] h-[680px] bg-gradient-to-r from-[#F9D6FF] to-[#7892ED] rounded-lg hidden lg:visible lg:block">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="w-[760px] h-[660px] ">
                <div>
                  <div className="flex justify-center items-center gap-3 pt-[60px]">
                    <img src={logo} alt="" />
                    <p className="font-bold text-2xl text-white">
                      SKy Nottilia{" "}
                    </p>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        className="absolute top-16 right-[200px]"
                        src={Rectangle1}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="absolute top-[150px] right-[20px]"
                        src={Rectangle2}
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <div className="absolute top-[550px] right-[250px]">
                    <p className="text-center text-[#233B58] text-2xl font-semibold">
                      Track your data
                    </p>
                    <p className="text-center mt-2 text-[#233B58]">
                      Follow your plan by keeping track of your data{" "}
                      <span className="block ">throughout the month.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="w-[760px] h-[660px] ">
                <div className="flex justify-center items-center gap-3 pt-[60px]">
                  <img src={logo} alt="" />
                  <p className="font-bold text-2xl text-white">SKy Nottilia </p>
                </div>
                <div>
                  <div className="relative">
                    <img
                      className="absolute top-20 right-[200px] w-[
                332px] h-[339px]"
                      src={calender}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="relative">
                    <img
                      className="absolute top-[6px] right-28 w-[
                187px] h-[
                  233px]"
                      src={scheduler}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="relative top-[420px] right-[-20px]">
                  <p className="text-center text-[#233B58] text-2xl font-semibold">
                    Schedule post anytime
                  </p>
                  <p className="text-center text-[#233B58]">
                    We’ll show you our dates upfront, and tell{" "}
                    <span className="block">
                      you when your post should arrive.
                    </span>
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="w-[760px] h-[660px] ">
                <div className="flex justify-center items-center gap-3 pt-[40px]">
                  <img src={logo} alt="" />
                  <p className="font-bold text-2xl text-white">SKy Nottilia </p>
                </div>
                <div>
                  <div className="flex justify-center items-center ml-6 mt-10">
                    <img className="w-[484px] h-[347px]" src={image2} alt="" />
                  </div>
                </div>
                <div className=" mt-[55px]">
                  <p className="text-center text-[#233B58] text-2xl font-semibold">
                    Customized chatbot
                  </p>
                  <p className="text-center text-[#233B58] mt-[13px]">
                    Connect your email for faster expense
                    <span className="block">
                      tracking and easier budgeting with.
                    </span>
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
