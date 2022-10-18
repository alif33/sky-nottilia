import React from "react";
import logo from "../../assets/img/logo.png";
import Facebook from "../../assets/img/Facebook.png";
import Instagram from "../../assets/img/Instagram.png";
import Twitter from "../../assets/img/Twitter.png";
import Youtube from "../../assets/img/Youtube.png";
const Footer = () => {
  return (
    <div className="lg:mx-4">
      <footer className="footer mx-4 lg:p-10  text-base-content">
        <div>
          <div className=" flex items-center gap-2">
            <img className="w-[32px] h-[34px]" src={logo} alt="" />
            <h4 className="text-[#152C5B] text-2xl font-bold">SKy Nottilia </h4>
          </div>
          <p className="w-[360px] text-[#969696] mt-[35px]">
            Manage your files efficiently and easily and it is a simple, fast
            and small file manager with a single file.
          </p>
          <div className="flex justify-start items-center gap-4 mt-[56px]">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Youtube} alt="" />
          </div>
        </div>
        <div>
          <span className="text-[#493B9E] font-bold">Product</span>
          <a className="py-3 font-semibold text-[#808080]">Branding</a>
          <a className="py-3 font-semibold text-[#808080]">Design</a>
          <a className="py-3 font-semibold text-[#808080]">Marketing</a>
          <a className="py-3 font-semibold text-[#808080]">Advertisement</a>
        </div>
        <div>
          <span className="text-[#493B9E] font-bold">Services</span>
          <a className="py-3 font-semibold text-[#808080]">Documentation</a>
          <a className="py-3 font-semibold text-[#808080]">Design</a>
          <a className="py-3 font-semibold text-[#808080]">Themes</a>
          <a className="py-3 font-semibold text-[#808080]">Illustrations</a>
        </div>
        <div>
          <span className="text-[#493B9E] font-bold">Company</span>
          <a className="py-3 font-semibold text-[#808080]">About</a>
          <a className="py-3 font-semibold text-[#808080]">Terms</a>
          <a className="py-3 font-semibold text-[#808080]">Privacy Policy</a>
          <a className="py-3 font-semibold text-[#808080]">Careers</a>
        </div>
        <div>
          <span className="text-[#493B9E] font-bold">More</span>
          <a className="py-3 font-semibold text-[#808080]">Documentation</a>
          <a className="py-3 font-semibold text-[#808080]">License</a>
          <a className="py-3 font-semibold text-[#808080]">Changelog</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#7C5CFC] text-base-content border-base-300 flex justify-center">
        <p className="text-white">© 2021 SKy Nottilia All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
