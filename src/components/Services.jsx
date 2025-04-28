import React from "react";
import OutlineButton from "./OutlineButton";

const Services = () => {
  return (
    <section className="flex flex-col bg-[#F7F6F4] py-8 md:py-16 space-y-3 items-center mt-16">
      <p className="text-xs text-[#00373E]">SERVICES</p>
      <p className="text-[#00373E] text-2xl md:text-3xl text-center font-bold">
        Your Path to Well-being
      </p>
      <p className="text-[#00373E] text-center text-xs md:text-[14px] md:max-w-[300px] max-w-[250px]">
        Discover expert guidance for a healthier mind and balanced life
      </p>

      {/* Services Row */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8 mx-[20px] md:mx-0">
        <div className="flex bg-[#F9E6D0] items-center p-4 md:p-6 rounded-4xl">
          <div className="flex flex-col space-y-5">
            <p className="text-[#00373E] text-[24px] font-bold max-w-xs">
              Mindfulness & Meditation
            </p>
            <p className="text-[#00373E] text-xs max-w-xs">
              Guided meditation sessions and stress management techniques
            </p>
            <OutlineButton text="Learn More" />
          </div>
          <div>
            <img
              src="./images/Illustration-10.svg"
              className="w-40"
              alt=""
              srcset=""
            />
          </div>
        </div>

        {/* 2 */}
        <div className="flex bg-white items-center px-4 py-8 md:p-6 rounded-4xl">
          <div className="flex flex-col space-y-5">
            <p className="text-[#00373E] text-[24px] font-bold max-w-xs">
              Mindfulness & Meditation
            </p>
            <p className="text-[#00373E] text-xs max-w-xs">
              Guided meditation sessions and stress management techniques
            </p>
            <OutlineButton text="Learn More" />
          </div>
          <div className="w-40">
            {/* <img src="./public/images/illustration_10.svg" className="w-40" alt="" srcset="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
