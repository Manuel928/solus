import React from "react";
import Button from "./Button";

const HowItWorks = () => {
  return (
    <section id="about"
      className="flex flex-col gap-10 items-center lg:px-36 lg:w-[1140px] lg:gap-[200px] lg:flex-row mt-16 mx-[20px]"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      {/* How It Works */}
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <p className="text-xs text-[#00373E]">HOW IT WORKS</p>
          <p className="text-[#00373E] text-3xl font-bold">
            We Help You Priotize Your Mental Health
          </p>
        </div>
        <p className="text-[#00373E] text-xs lg:text-[15px] lg:max-w-xs">
          Browse therapists, book a session, and start your healing journey with
          trusted professionals
        </p>

        <Button text="Find A Therapist" size="sm" bg="darkGreen" color="white"/>
      </div>

      {/* Iluustration */}
      <div
        className="bg-[#00373E] rounded-4xl pt-4 px-4"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <img
          src="./images/Illustration-3.svg"
          className="object-fit w-72 lg:w-full"
          alt=""
          srcset=""
        />
      </div>
    </section>
  );
};

export default HowItWorks;
