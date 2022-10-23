import React from "react";

const ContactInfo = () => {
  return (
    <div className="w-[957px] h-[619px] bg-[#1E1F25] border-[#6B6B6B] border-[1px] rounded-lg">
      <p className="text-[24px] font-medium text-white m-[24px] leading-[30.24px]">
        Contact info
      </p>
      <div>
        <div className="flex justify-around  text-white focus:outline-none">
          <div>
            <div className="w-[409px] h-[482px] bg-[#151519] rounded-[5px]">
              <div className="flex justify-center">
                <div className="">
                  <div className="my-2">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Email Address
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
                      type="email"
                    />
                  </div>
                  <div className="my-2">
                    <p className="text-[#748AA1] font-normal pb-[6px]">Phone</p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] px-3 text-white focus:outline-none"
                      type="tel"
                    />
                  </div>
                  <div className="my-2">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Facebook
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
                      type="text"
                    />
                  </div>
                  <div className="my-2">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Instagram
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
                      type="text"
                    />
                  </div>
                  <div className="my-2">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Linkedin
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
                      type="text"
                    />
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
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
                      type="text"
                    />
                  </div>
                  <div className="my-2">
                    <p className="text-[#748AA1] font-normal pb-[6px]">
                      Dribbble
                    </p>
                    <input
                      className="w-[349px] h-[51px] border-[#33393F] border-[1px] bg-[#292E33] rounded-[5px] text-white focus:outline-none"
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

export default ContactInfo;
