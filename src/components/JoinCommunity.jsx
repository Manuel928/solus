import React from "react";
import Button from "./Button";

const JoinCommunity = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-center items-center md:gap-[100px] py-8 mt-16 md:py-16 rounded-4xl mx-[20px] md:mx-[100px] bg-white shadow-2xl"
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="flex flex-col space-y-4 p-8 md:space-y-6">
        <p className="text-xs text-[#00373E]">COMMUNITY</p>
        <p className="text-[#00373E] max-w-[250px] text-[28px] font-bold">
          You're Not Alone on This Journey
        </p>
        <p className="text-[#00373E] text-xs max-w-[300px] md:text-[15px]">
          Connect with others, share experiences, and find encouragement in a
          safe, supportive space.
        </p>
        <Button text="Join The Community" size="md" bg="darkGreen" color="white"/>
      </div>
      <img
        src="./images/Illustration-11.svg"
        className="w-72 hidden md:block md:w-[450px] object-contain"
        alt="Community Illustration"
      />
    </section>
  );
};

export default JoinCommunity;
