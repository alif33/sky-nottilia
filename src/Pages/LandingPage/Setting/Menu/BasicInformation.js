import React from "react";
import verify from "../../../../assets/img/verify.png";
import gallery from "../../../../assets/img/gallery.png";
import Avatar from "../../../../assets/img/Avatar.png";
import More from "../../../../assets/img/More.png";

const BasicInformation = () => {
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
    <div className="w-[957px] h-[619px] bg-[#1E1F25] border-[#6B6B6B] border-[1px] rounded-lg">
      <p className="text-[24px] font-medium text-white m-[24px] leading-[30.24px]">
        Basic Informations
      </p>
      <div>
        <div className="flex justify-around">
          <div>
            <h6 className="text-[#7C5CFC] text-[20px] font-semibold leading-[50px]">
              Personal
            </h6>
            <div className="w-[409px] h-[482px] bg-[#151519] rounded-[5px]">
              <div className="flex justify-center">
                <div className="">
                  <div className="flex justify-between items-center px-4 pb-3 pt-5 border-b-[1px] border-[#33393F]">
                    <img src={Avatar} alt="" />

                    <h6 className="font-semibold text-white">
                      Update Avatar
                      <p>
                        <span className="text-[10px] pr-[1px]">
                          Or import from
                        </span>
                        <span className="text-[10px] pr-[1px]">Instagram </span>
                        <span className="text-[10px] pr-[1px]">or </span>
                        <span className="text-[10px] pr-[1px]">Facebook </span>
                      </p>
                    </h6>

                    <img src={More} alt="" />
                  </div>
                  <div className="my-5">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Full Name
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px]"
                      type="text"
                    />
                  </div>
                  <div className="my-5">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Date of Birth
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white px-3"
                      type="date"
                    />
                  </div>
                  <div className="my-5">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Profession
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px]"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-[#7C5CFC] text-[20px] font-semibold leading-[50px]">
              Address
            </h6>
            <div className="w-[409px] h-[482px] bg-[#151519] rounded-[5px]">
              <div className="flex justify-center">
                <div className="">
                  <div className="my-5">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Country
                    </p>
                    <select className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px]">
                      <option value="">Change</option>
                      <option value="">Change</option>
                      <option value="">Change</option>
                      <option value="">Change</option>
                    </select>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="">
                      <p className="text-[#748AA1] font-normal pb-[6px]">
                        City
                      </p>
                      <input
                        className="w-[160px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px]"
                        type="text"
                      />
                    </div>
                    <div className="">
                      <p className="text-[#748AA1] font-normal pb-[6px]">
                        Zip Code
                      </p>
                      <input
                        className="w-[160px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px]"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="my-3">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Home Address
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px]"
                      type="text"
                    />
                  </div>
                  <div className="my-3">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Office Address
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px]"
                      type="text"
                    />
                  </div>
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

export default BasicInformation;
