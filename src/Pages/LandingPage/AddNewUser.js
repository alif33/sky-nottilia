import React, { useState } from "react";

const AddNewUser = ({ addNewUser, setAddNewUser }) => {
  return (
    <>
      <div
        onClick={() => setAddNewUser(!addNewUser)}
        className=" fixed top-0 left-0 w-full h-screen bg-[#11111185] "
      ></div>
      <div className="fixed top-[190px] left-[350px]  py-8 px-7  overflow-y-auto  w-[945px] h-[409px] rounded-[17px] bg-[#191919]">
        <p className="text-3xl font-PlusJakartaSans font-semibold text-white">
          Add new user
        </p>
        <p className="text-white font-PlusJakartaSans pt-2">
          Add multiple accounts to manage all your mail app & informations at a
          time!
        </p>
        <div className="flex justify-around items-start pt-6">
          <input
            className="w-[661px] h-[52px] bg-[#0A0A0A] rounded-[6px]"
            type="text"
          />
          <button className="w-[132px] h-[52px] text-white font-PlusJakartaSans font-semibold bg-[#0ACF83] rounded-[6px]">
            Add
          </button>
        </div>
        <div className="flex justify-around items-start pt-6">
          <input
            className="w-[661px] h-[52px] bg-[#0A0A0A] rounded-[6px]"
            type="text"
          />
          <button className="w-[132px] h-[52px] text-[#717171] font-PlusJakartaSans font-semibold bg-[#2D2D2D] rounded-[6px]">
            Add
          </button>
        </div>
        <div className="flex justify-around items-start pt-6">
          <input
            className="w-[661px] h-[52px] bg-[#0A0A0A] rounded-[6px]"
            type="text"
          />
          <button className="w-[132px] h-[52px] text-[#717171] font-PlusJakartaSans font-semibold bg-[#2D2D2D] rounded-[6px]">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewUser;
