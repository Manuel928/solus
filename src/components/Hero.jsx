import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="bg-[#F9E6D0] h-62 md:h-74 flex flex-col justify-center items-center pt-4 mx-[10px] md:mx-[100px] rounded-2xl rounded-bl-2xl md:rounded-4xl"
      style={{
        backgroundImage:
          "url('/images/Illustration-2.svg'), url('/images/Illustration-1.svg')",
        backgroundSize: "contain",
        backgroundPosition: "bottom left, bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center space-y-[15px]">
        <div className="flex flex-col space-y-[8px] max-w-[250px] items-center md:max-w-md md:space-y-[15px]">
          <h2 className="text-2xl text-center md:text-5xl font-bold text-[#00373E] max-w-md">
            Support for Your Mental Well-being
          </h2>
          <p className="text-[#00373E] text-xs text-center md:text-[18px] max-w-[200px] md:max-w-sm">
            Connect with licensed therapists, counselors, and wellness coaches
            to support your journey.
          </p>
        </div>

        {/* Button */}
        <Button text="Get Started" />
      </div>
    </div>
  );
};

export default Hero;
