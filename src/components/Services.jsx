import React from "react";
import Button from "./Button";
import OutlineButton from "./OutlineButton";

const Services = () => {
  return (
    <section id="services"
      className="flex flex-col bg-[#F7F6F4] py-8 md:py-16 space-y-3 items-center mt-16"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <p className="text-xs text-[#00373E]">SERVICES</p>
      <p className="text-[#00373E] text-2xl md:text-3xl text-center font-bold">
        Your Path to Well-being
      </p>
      <p className="text-[#00373E] text-center text-xs md:text-[14px] md:max-w-[300px] max-w-[250px]">
        Discover expert guidance for a healthier mind and balanced life
      </p>

      {/* Services Row */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8 mx-[20px] md:mx-0">
        {/* 1 */}
        <div
          className="flex bg-[#F9E6D0] items-center py-8 px-4 md:p-6 rounded-3xl"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="flex flex-col space-y-5">
            <p className="text-[#00373E] text-[24px] font-bold max-w-xs">
              Mindfulness & Meditation
            </p>
            <p className="text-[#00373E] md:text-[15px] text-xs max-w-xs">
              Guided meditation sessions and stress management techniques
            </p>
            <OutlineButton text="Learn More" />
          </div>
          <div>
            <img
              src="/images/Illustration-10.svg"
              className="w-40"
              alt="Mindfulness and Meditation"
            />
          </div>
        </div>

        {/* 2 */}
        <div
          className="flex bg-white items-center py-10 px-4 md:p-6 rounded-3xl"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="flex flex-col space-y-5">
            <p className="text-[#00373E] text-[24px] font-bold max-w-xs">
              One-on-One Therapy
            </p>
            <p className="text-[#00373E] md:text-[15px] text-xs max-w-xs">
              Virtual and In-person therapy sessions with licensed professionals
            </p>
            <OutlineButton text="Learn More" />
          </div>
        </div>

        {/* 3 */}
        <div
          className="bg-white rounded-2xl md:col-span-2"
          style={{
            // backgroundImage: "url('/images/illustration-6.svg')",
            // backgroundSize: "contain",
            // backgroundPosition: "bottom right",
            // backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
          data-aos-duration="1500">
          <div className="flex flex-col space-y-6 py-10 px-6">
            <p className="text-[#00373E] text-[24px] font-bold">
              Wellness Coaching
            </p>
            <p className="text-[#00373E] text-xs md:text-[15px]">
              Personalized guidance to help you build healthier habits, manage
              stress, and achieve balance in all areas of your life.
              <br /> <br />
              Our wellness coaches support you in creating sustainable routines
              for mental, emotional, and physical well-being.
            </p>
            <Button text="Learn More" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
