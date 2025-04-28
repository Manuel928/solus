import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-[#F9E6D0] flex justify-between items-center pt-4 mx-[10px] md:mx-[100px] rounded-2xl rounded-bl-2xl md:rounded-4xl">
      <img
        src="./public/images/illustration_2.svg"
        className="w-30 md:w-48 object-bottom-left"
        alt=""
        srcset=""
      />
      <div className="flex flex-col justify-center items-center space-y-[15px]">
        <div className="flex flex-col space-y-[8px] md:space-y-[15px]">
          <h2 className="text-2xl text-center md:text-5xl font-bold text-[#00373E] max-w-md">
            Support for Your Mental Well-being
          </h2>
          <p className="text-[#00373E] text-xs md:text-[18px] max-w-md text-center">
            Connect with licensed therapists, counselors, and wellness coaches
            to support your journey.
          </p>
        </div>

        {/* Button */}
        <Button text="Get Started" />
      </div>
      <img
        src="./public/images/illustration_1.svg"
        className="w-30 md:w-48 object-bottom-right"
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Hero;
