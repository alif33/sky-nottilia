import React, { useState } from "react";

const AddNewUser = ({ addNewUser, setAddNewUser }) => {
  return (
    <>
      <div
        onClick={() => setAddNewUser(!addNewUser)}
        className=" fixed top-0 left-0 w-full h-screen bg-[#11111185] "
      ></div>
      <div className="fixed top-[300px] left-[115px]  py-8 px-7  overflow-y-auto  w-[945px] h-[409px] rounded-[17px] bg-[#191919]"></div>
    </>
  );
};

export default AddNewUser;
