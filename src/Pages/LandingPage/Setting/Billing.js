import React from "react";
import bgBlue from "../../../assets/img/Bg-blue.png";
import bgGreen from "../../../assets/img/Bg-green.png";
import VisaIcon from "../../../assets/img/Visa Icon.png";
import "./Billing.css";
const Billing = () => {
  return (
    <div className="w-[957px] h-[753px] bg-[#1E1F25] border-[#6B6B6B] border-[1px] rounded-lg">
      <p className="text-[24px] font-medium text-white m-[24px] leading-[30.24px]">
        Basic Informations
      </p>
      <div>
        <div className="flex justify-around">
          <div>
            <div className="w-[409px] h-[589px] bg-[#292E33] rounded-[5px]">
              <div className="flex justify-center relative">
                <div>
                  <div
                    className="card-backgroundImage1 relative mt-6"
                    // style={{
                    //   background: `url(${bgBlue})`,
                    //   backgroundImage: "cover",
                    // }}
                  >
                    <img
                      className="absolute left-[45px] top-[45px]"
                      src={VisaIcon}
                      alt=""
                      srcset=""
                    />
                    <p className="text-white text-[20px] relative top-[90px] left-[45px]">
                      <span className="pr-3">3422</span>
                      <span className="pr-3">3229</span>
                      <span className="pr-3">9833</span>
                      <span className="pr-3">8992</span>
                    </p>
                    <div className="text-gray-300 flex items-center gap-4 relative top-[130px] left-[45px]">
                      <p>
                        Card Holder
                        <span className="block text-white">Tyler A</span>
                      </p>
                      <p>
                        Exp
                        <span className="block text-white">04/22</span>
                      </p>
                      <p>
                        CVC
                        <span className="block text-white">823</span>
                      </p>
                    </div>
                    <div className="mt-[170px] ml-4">
                      <p className="text-[#748AA1] font-normal pb-[6px]">
                        Twitter
                      </p>
                      <input
                        className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
                        type="text"
                      />
                    </div>
                    <div className="my-2 ml-4">
                      <p className="text-[#748AA1] font-normal pb-[6px]">
                        Dribbble
                      </p>
                      <input
                        className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
                        type="text"
                      />
                    </div>
                    <div className="flex justify-around items-center">
                      <div className="">
                        <p className="text-[#748AA1] font-normal pb-[6px]">
                          City
                        </p>
                        <input
                          className="w-[160px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
                          type="text"
                        />
                      </div>
                      <div className="">
                        <p className="text-[#748AA1] font-normal pb-[6px]">
                          Zip Code
                        </p>
                        <input
                          className="w-[160px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[409px]  bg-[#292E33] rounded-[5px]">
              <div className="flex justify-center">
                <div className="">
                  <div className="card-backgroundImage2 relative mt-6">
                    <img
                      className="absolute left-[45px] top-[45px]"
                      src={VisaIcon}
                      alt=""
                      srcset=""
                    />
                    <p className="text-white text-[20px] relative top-[90px] left-[45px]">
                      <span className="pr-3">7782</span>
                      <span className="pr-3">7644</span>
                      <span className="pr-3">2999</span>
                      <span className="pr-3">1009</span>
                    </p>
                    <div className="text-gray-300 flex items-center gap-4 relative top-[130px] left-[45px]">
                      <p>
                        Card Holder
                        <span className="block text-white">Tyler A</span>
                      </p>
                      <p>
                        Exp
                        <span className="block text-white">03/19</span>
                      </p>
                      <p>
                        CVC
                        <span className="block text-white">231</span>
                      </p>
                    </div>
                  </div>

                  <button className="w-[349px] h-[60px] rounded-[5px] border-[#33393F] border-[1px] bg-[#2D3238] text-white mb-8 mt-2 ml-5">
                    Add New Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Billing;
