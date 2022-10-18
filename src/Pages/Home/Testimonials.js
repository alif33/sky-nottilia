import React from "react";
import img from "../../assets/img/Ellipse 70.png";
import star from "../../assets/img/Star 1.png";
const Testimonials = () => {
  const testimonialsData = [
    {
      _id: "01",
      name: "",
      title: "",
      testimonialText: "",
      img: "",
      review: "",
    },
  ];
  return (
    <div>
      <div className="lg:ml-72 ml-4 mt-14 mb-14">
        <h6 className="uppercase text-[#795AF6] pb-[18px]">testimonials</h6>
        <h2 className="lg:text-[40px] text-3xl text-[#152C5B] pb-[24px]">
          Client’s Say About Us
        </h2>
        <p className="text-[#969696] ">
          These are things that clients who have used{" "}
          <span className="block">our features and works says.</span>
        </p>
      </div>
      <div className="flex justify-center pb-[192px] mx-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div>
            <img
              className="ml-[20px] mb-[-30px] relative"
              src={img}
              alt=""
              srcset=""
            />
            <div className="lg:w-[390px] w-[340px] h-[267px] rounded-[24px] bg-[#FFFFFF]">
              <p className="w-[342px] pt-[50px] text-[#969696] px-[24px]">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
              <div className="flex justify-between items-end px-[24px] pt-12">
                <div>
                  <p className="font-bold">Sauqi Arief</p>
                  <p className="font-normal text-[#969696]">Student Of STM</p>
                </div>
                <div className="flex justify-center items-center gap-[2px]">
                  <p>5.0</p>
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="ml-[20px] mb-[-30px] relative"
              src={img}
              alt=""
              srcset=""
            />
            <div className="lg:w-[390px] w-[340px] h-[267px] rounded-[24px] bg-[#FFFFFF]">
              <p className="w-[342px] pt-[50px] text-[#969696] px-[24px]">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
              <div className="flex justify-between items-end px-[24px] pt-12">
                <div>
                  <p className="font-bold">Emilia Tadashi</p>
                  <p className="font-normal text-[#969696]">Highschool Girl</p>
                </div>
                <div className="flex justify-center items-center gap-[2px]">
                  <p>5.0</p>
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="ml-[20px] mb-[-30px] relative"
              src={img}
              alt=""
              srcset=""
            />
            <div className="lg:w-[390px] w-[340px] h-[267px] rounded-[24px] bg-[#FFFFFF]">
              <p className="w-[342px] pt-[50px] text-[#969696] px-[24px]">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
              <div className="flex justify-between items-end px-[24px] pt-12">
                <div>
                  <p className="font-bold">Faiza Mubarak</p>
                  <p className="font-normal text-[#969696]">
                    Multimedia Enthusiast
                  </p>
                </div>
                <div className="flex justify-center items-center gap-[2px]">
                  <p>5.0</p>
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                  <img src={star} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
