import React from "react";
import featureImg1 from "../../assets/img/Icon Pie Cart.png";
import featureImg2 from "../../assets/img/Icon Line Chart.png";
import featureImg3 from "../../assets/img/Icon_Workflow.png";
import featureImg4 from "../../assets/img/Icon_Protection.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Features = () => {
  const featureItems = [
    {
      _id: "01",
      name: "Analyze your data",
      description:
        "Create reports with an easy to use drag-and-drop designer. ",
      img: featureImg1,
    },
    {
      _id: "02",
      name: "Collaborate securely",
      description: "Share/publish your reports with your colleagues.",
      img: featureImg2,
    },
    {
      _id: "03",
      name: "Embedded analytics",
      description: "Get a powerful analytics tool in your own brand name.",
      img: featureImg3,
    },
    {
      _id: "04",
      name: "Easy and Intuitive",
      description: "Easily converse with your data using everyday language. ",
      img: featureImg4,
    },
  ];
  return (
    <div className="mb-10 lg:mt-[-200px]">
      <h6 className="uppercase text-center text-[#7C5CFC]">features</h6>
      <p className="text-5xl text-center my-5 font-bold">
        Managing Social media{" "}
        <span className="block mt-5">never been so easy!</span>
      </p>
      <p className="text-[#5A7184] text-[18px] text-center mt-10">
        We are self-service data analytics software that lets you create
        visually appealing
        <span className="block">
          data visualizations and insightful dashboards in minutes.
        </span>
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-20">
        {featureItems.map((featureItem) => (
          <div key={featureItem._id} className="text-center">
            <div className="flex justify-center">
              <div className="bg-[#cfd9e8] bg-opacity-20 m-5 p-2 rounded-lg w-16 h-16">
                <img
                  className="rounded-lg border-dashed p-2 border-[0.5px] border-black"
                  src={featureItem.img}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <p className="my-3">{featureItem.name} </p>

            <div className="flex justify-center my-3 text-[#5A7184]">
              <p className="w-[263px] text-center">
                {featureItem.description}{" "}
              </p>
            </div>

            <button className="text-[#7C5CFC] ">
              Learn more <IoIosArrowRoundForward className="inline text-lg" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
