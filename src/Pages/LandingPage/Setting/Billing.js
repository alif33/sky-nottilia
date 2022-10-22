import React from "react";
import bgBlue from "../../../assets/img/Bg-blue.png";
import bgGreen from "../../../assets/img/Bg-green.png";
import "./Billing.css";
const Billing = () => {
  return (
    <div className="w-[957px] h-[619px] bg-[#1E1F25] border-[#6B6B6B] border-[1px] rounded-lg">
      <p className="text-[24px] font-medium text-white m-[24px] leading-[30.24px]">
        Basic Informations
      </p>
      <div>
        <div className="flex justify-around">
          <div>
            <div className="w-[409px] h-[482px] bg-[#151519] rounded-[5px]">
              <div className="flex justify-center">
                <div>
                  <div
                    className="card-backgroundImage"
                    // style={{
                    //   background: `url(${bgBlue})`,
                    //   backgroundImage: "cover",
                    // }}
                  >
                    <p>sssssdddddddddddddddddddddddds</p>
                    <p>sssssdddddddddddddddddddddddds</p>
                    <p>sssssdddddddddddddddddddddddds</p>
                    <p>sssssdddddddddddddddddddddddds</p>
                    <p>sssssdddddddddddddddddddddddds</p>
                    <p>sssssdddddddddddddddddddddddds</p>
                    <p>sssssdddddddddddddddddddddddds</p>
                    <p>sssssdddddddddddddddddddddddds</p>
                    <p>sssssdddddddddddddddddddddddds</p>
                    <p>sssssdddddddddddddddddddddddds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[409px]  bg-[#151519] rounded-[5px]">
              <div className="flex justify-center">
                <div className="">
                  <div className="my-2">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Twitter
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px]"
                      type="text"
                    />
                  </div>
                  <div className="my-2">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Dribbble
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px]"
                      type="text"
                    />
                  </div>

                  <button className="w-[349px] h-[60px] rounded-[5px] border-[#33393F] border-[1px] bg-[#2D3238] text-white mb-8 mt-2">
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
