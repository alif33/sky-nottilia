import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
const Navbar = () => {
  const menuItem = (
    <>
      <li className="mr-6">
        <a>Home</a>
      </li>
      <li className="mr-6">
        <a>Features</a>
      </li>
      <li className="mr-6">
        <a>How It Works</a>
      </li>
      <li className="mr-6">
        <a>Tutorial</a>
      </li>
      <li className="mr-6">
        <a>Pricing</a>
      </li>
      <li className="mr-6">
        <Link to="/sign-in" className="lg:text-white sm:text-black mr-5">
          Sign In
        </Link>
      </li>
      {/* <li className="mr-6">
        <button className="bg-[#FA9D4C] w-[154px] h-[59px] border-none px-3 py-2 rounded-[14px] text-white text-center">
          Get started
        </button>
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-transparent lg:pl-[151px] lg:pr-[130px]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
          <span className="text-white ml-2">SKy Nottilia</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white">{menuItem}</ul>
      </div>
      <div className="navbar-end ml-12">
        {/* <Link to="/sign-in" className="text-white mr-5">
          Sign In
        </Link> */}
        <button className="bg-[#FA9D4C] lg:w-[154px] lg:h-[59px] border-none px-3 py-2 rounded-[14px] text-white">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
