import React from "react";
import { useState } from "react";

const Pricing = () => {
  const [pricingBtn, setPricingBtn] = useState(1);
  return (
    <div>
      <div className="text-center">
        <h6 className="text-[#7A5BF8] uppercase">easy payment</h6>
        <h2 className="text-[#152C5B] text-[40px] font-bold">
          Our Pricing Plan
        </h2>
        <p className="text-[#969696] ">
          Pay securely online and manage the booking via
          <span className="block">desktop or via the mobile app.</span>{" "}
        </p>
      </div>
      <div className="flex justify-center items-center gap-12 pt-10">
        <button
          onClick={() => setPricingBtn(1)}
          className={`font-normal  ${
            pricingBtn === 1 ? "text-[#7C5CFC]" : "text-[#323232]"
          }`}
        >
          Montly
        </button>
        <p className="text-xs font-black border-[#3346D3] bg-[#7A5BF8] px-[5px] py-[2.5px] w-[24px] h-[24px] text-white text-center block rounded-full">
          {" "}
          |
        </p>
        <button
          onClick={() => setPricingBtn(2)}
          className={`font-normal  ${
            pricingBtn === 2 ? "text-[#7C5CFC]" : "text-[#323232]"
          }`}
        >
          Annualy
        </button>
      </div>
      {/* Pricing card month */}
      {pricingBtn === 1 && (
        <div className="flex justify-around items-center lg:mx-28">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-48 gap-16 my-16">
            <div className="w-[360px] h-[606px] border-[1px] border-[#d4cfcf] rounded-[14px] p-8 hover:shadow-3xl hover:bg-white hover:border-white">
              <p className="text-5xl text-[#7B5BF9]">
                6$
                <sub className="text-xs text-[#969696]">/ month</sub>
              </p>
              <p className="text-[#323232] font-semibold text-[36px] py-5">
                Standard
              </p>
              <p className="text-[#969696] py-5">
                The national average cost of buying coin easy.
              </p>
              <p className="border-b-2 border-[#d4cfcf]"></p>
              <ul>
                <li className="py-[12px]">Unlimited Storage</li>
                <li className="py-[12px]">Worldwide Accessibility</li>
                <li className="py-[12px]">Low Latency </li>
                <li className="py-[12px]">High Durability</li>
                <li className="pt-[12px] pb-5">Geo-Redundancy</li>
              </ul>
              <div className="text-center ">
                <button
                  className="w-[169px] h-[69px] border-2 border-[#3346D3] bg-transparent text-[#3346D3]
          rounded-[14px] hover:bg-[#3346D3] hover:text-white"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            <div className="w-[360px] h-[606px] border-[1px] border-[#d4cfcf] rounded-[14px] p-8 hover:shadow-2xl hover:bg-white hover:border-white">
              <p className="text-5xl text-[#7B5BF9]">
                12$
                <sub className="text-xs text-[#969696]">/ month</sub>
              </p>
              <p className="text-[#323232] font-semibold text-[36px] py-5">
                Extended
              </p>
              <p className="text-[#969696] py-5">
                The national average cost of buying coin easy.
              </p>
              <p className="border-b-2 border-[#d4cfcf]"></p>
              <ul>
                <li className="py-[12px]">Unlimited Storage</li>
                <li className="py-[12px]">Worldwide Accessibility</li>
                <li className="py-[12px]">Low Latency </li>
                <li className="py-[12px]">High Durability</li>
                <li className="pt-[12px] pb-5">Geo-Redundancy</li>
              </ul>
              <div className="text-center">
                <button
                  className="w-[169px] h-[69px] border-2 border-[#3346D3] bg-transparent text-[#3346D3]
          rounded-[14px] hover:bg-[#3346D3] hover:text-white"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            <div className="w-[360px] h-[606px] border-[1px] border-[#d4cfcf] rounded-[14px] p-8 hover:shadow-2xl hover:bg-white hover:border-white">
              <p className="text-5xl text-[#7B5BF9]">
                24$
                <sub className="text-xs text-[#969696]">/ month</sub>
              </p>
              <p className="text-[#323232] font-semibold text-[36px] py-5">
                Premium+
              </p>
              <p className="text-[#969696] py-5">
                The national average cost of buying coin easy.
              </p>
              <p className="border-b-2 border-[#d4cfcf]"></p>
              <ul>
                <li className="py-[12px]">Unlimited Storage</li>
                <li className="py-[12px]">Worldwide Accessibility</li>
                <li className="py-[12px]">Low Latency </li>
                <li className="py-[12px]">High Durability</li>
                <li className="pt-[12px] pb-5">Geo-Redundancy</li>
              </ul>
              <div className="text-center">
                <button
                  className="w-[169px] h-[69px] border-2 border-[#3346D3] bg-transparent text-[#3346D3]
          rounded-[14px] hover:bg-[#3346D3] hover:text-white"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Pricing card month */}
      {/* Pricing card  year*/}
      {pricingBtn === 2 && (
        <div className="flex justify-around items-center lg:mx-28">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-48 gap-16 my-16">
            <div className="w-[360px] h-[606px] border-[1px] border-[#d4cfcf] rounded-[14px] p-8 hover:shadow-3xl hover:bg-white hover:border-white">
              <p className="text-5xl text-[#7B5BF9]">
                60$
                <sub className="text-xs text-[#969696]">/ year</sub>
              </p>
              <p className="text-[#323232] font-semibold text-[36px] py-5">
                Standard
              </p>
              <p className="text-[#969696] py-5">
                The national average cost of buying coin easy.
              </p>
              <p className="border-b-2 border-[#d4cfcf]"></p>
              <ul>
                <li className="py-[12px]">Unlimited Storage</li>
                <li className="py-[12px]">Worldwide Accessibility</li>
                <li className="py-[12px]">Low Latency </li>
                <li className="py-[12px]">High Durability</li>
                <li className="pt-[12px] pb-5">Geo-Redundancy</li>
              </ul>
              <div className="text-center ">
                <button
                  className="w-[169px] h-[69px] border-2 border-[#3346D3] bg-transparent text-[#3346D3]
          rounded-[14px] hover:bg-[#3346D3] hover:text-white"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            <div className="w-[360px] h-[606px] border-[1px] border-[#d4cfcf] rounded-[14px] p-8 hover:shadow-2xl hover:bg-white hover:border-white">
              <p className="text-5xl text-[#7B5BF9]">
                120$
                <sub className="text-xs text-[#969696]">/ year</sub>
              </p>
              <p className="text-[#323232] font-semibold text-[36px] py-5">
                Extended
              </p>
              <p className="text-[#969696] py-5">
                The national average cost of buying coin easy.
              </p>
              <p className="border-b-2 border-[#d4cfcf]"></p>
              <ul>
                <li className="py-[12px]">Unlimited Storage</li>
                <li className="py-[12px]">Worldwide Accessibility</li>
                <li className="py-[12px]">Low Latency </li>
                <li className="py-[12px]">High Durability</li>
                <li className="pt-[12px] pb-5">Geo-Redundancy</li>
              </ul>
              <div className="text-center">
                <button
                  className="w-[169px] h-[69px] border-2 border-[#3346D3] bg-transparent text-[#3346D3]
          rounded-[14px] hover:bg-[#3346D3] hover:text-white"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            <div className="w-[360px] h-[606px] border-[1px] border-[#d4cfcf] rounded-[14px] p-8 hover:shadow-2xl hover:bg-white hover:border-white">
              <p className="text-5xl text-[#7B5BF9]">
                240$
                <sub className="text-xs text-[#969696]">/ year</sub>
              </p>
              <p className="text-[#323232] font-semibold text-[36px] py-5">
                Premium+
              </p>
              <p className="text-[#969696] py-5">
                The national average cost of buying coin easy.
              </p>
              <p className="border-b-2 border-[#d4cfcf]"></p>
              <ul>
                <li className="py-[12px]">Unlimited Storage</li>
                <li className="py-[12px]">Worldwide Accessibility</li>
                <li className="py-[12px]">Low Latency </li>
                <li className="py-[12px]">High Durability</li>
                <li className="pt-[12px] pb-5">Geo-Redundancy</li>
              </ul>
              <div className="text-center">
                <button
                  className="w-[169px] h-[69px] border-2 border-[#3346D3] bg-transparent text-[#3346D3]
          rounded-[14px] hover:bg-[#3346D3] hover:text-white"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Pricing card year */}
    </div>
  );
};

export default Pricing;
