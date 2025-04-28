import React from "react";
import ExploreBtn from "./ExploreBtn";

const ExploreAndLearn = () => {
  const resources = [
    {
      title: "Articles & Guides",
      description:
        "Practical tips on stress management, mindfulness, and emotional resilience.",
      buttonText: "Explore",
    },
    {
      title: "Meditation & Relaxation",
      description:
        "Audio sessions for guided meditation and deep breathing exercises.",
      buttonText: "Explore",
    },
    {
      title: "Webinars & Workshops",
      description:
        "Live and recorded sessions with mental health professionals.",
      buttonText: "Explore",
    },
  ];
  return (
    <section className="flex flex-col py-8 md:py-16 space-y-3 items-center mt-16">
      <p className="text-xs text-[#00373E]">EXPLORE & LEARN</p>
      <p className="text-[#00373E] text-2xl md:text-3xl text-center font-bold">
        Resources for Your Well-being
      </p>
      <p className="text-[#00373E] text-center text-xs md:text-[14px] md:max-w-[300px] max-w-[250px]">
        Explore expert insights, self-care guides, and tools to support your
        mental health.
      </p>
      <div className="flex flex-col mt-8 space-y-3 md:space-y-0 md:space-x-5 md:flex-row">
        <div className="shadow-2xl flex flex-col justify-center items-center bg-white py-16 space-y-5 px-8 rounded-3xl">
          <p className="text-[#00373E] text-[24px] font-bold max-w-xs">
            Articles & Guides
          </p>
          <p className="text-sm text-center md:text-[15px] text-[#00373E] max-w-xs">
            Practical tips on stress management, mindfulness, and emotional
            resilience.
          </p>
          <div>
            <a
              href="#"
              className={`bg-yellow-400 text-xs md:text-[15px] font-semibold text-white px-6 py-2 rounded-3xl hover:bg-yellow-500 hover:shadow-xl hover:text-white duration-200`}
            >
              Explore
            </a>
          </div>
        </div>
        <div className="shadow-2xl flex flex-col justify-center items-center bg-white py-16 space-y-5 px-8 rounded-3xl">
          <p className="text-[#00373E] text-[24px] font-bold max-w-xs">
            Meditation & Relaxation
          </p>
          <p className="text-sm text-center md:text-[15px] text-[#00373E] max-w-xs">
            Audio sessions for guided meditation and deep breathing exercises.
          </p>
          <div>
            <a
              href="#"
              className={`bg-green-400 text-xs md:text-[15px] font-semibold text-white px-6 py-2 rounded-3xl hover:bg-green-500 hover:white hover:shadow-xl duration-200`}
            >
              Explore
            </a>
          </div>
        </div>
        <div className="shadow-2xl flex flex-col justify-center items-center bg-white py-16 space-y-5 px-8 rounded-3xl">
          <p className="text-[#00373E] text-[24px] font-bold max-w-xs">
            Webinars & Workshops
          </p>
          <p className="text-sm md:text-[15px] text-center text-[#00373E] max-w-xs">
            Live and recorded sessions with mental health professionals.
          </p>
          <div>
            <a
              href="#"
              className={`bg-pink-400 text-xs md:text-[15px] font-semibold text-white px-6 py-2 rounded-3xl hover:bg-pink-500 hover:text-white hover:shadow-xl duration-200`}
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreAndLearn;
