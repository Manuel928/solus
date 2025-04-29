import React from "react";
import Button from "./Button";

const JoinCommunity = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-center items-center gap-[100px] py-8 mt-16 md:py-16 rounded-4xl mx-[20px] md:mx-[100px] bg-white shadow-2xl"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="flex flex-col max-w-[330px] space-y-4 md:space-y-6">
        <p className="text-xs text-[#00373E]">COMMUNITY</p>
        <p className="text-[#00373E] text-[28px] font-bold">
          You're Not Alone on This Journey
        </p>
        <p className="text-[#00373E] text-xs md:text-[15px]">
          Connect with others, share experiences, and find encouragement in a
          safe, supportive space.
        </p>
        <Button text="Join The Community" size="md"/>
      </div>
      <img
        src="./images/Illustration-11.svg"
        className="w-72 md:w-[450px] object-contain"
        alt="Community Illustration"
      />
    </section>
  );
};

export default JoinCommunity;
