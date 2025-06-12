import React from "react";

const ExploreAndLearn = () => {
  return (
    <section
      id="explore&learn"
      className="flex flex-col bg-[#F7F6F4] py-8 md:py-16 space-y-3 items-center mt-16"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
    >
      <p className="text-xs text-[#00373E]">EXPLORE & LEARN</p>
      <p className="text-[#00373E] text-2xl md:text-3xl text-center font-bold">
        Resources for Your Well-being
      </p>
      <p className="text-[#00373E] text-center text-xs md:text-[14px] md:max-w-[300px] max-w-[300px]">
        Explore expert insights, self-care guides, and tools to support your
        mental health.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 justify-center items-center mx-[20px]">
        <div
          className="shadow-2xl flex flex-col justify-center items-center bg-white py-16 space-y-5 px-8 w-[90%] md:w-full rounded-3xl"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
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
              className={`bg-yellow-400 text-sm md:text-[15px] font-semibold text-white px-7 py-3 rounded-3xl hover:bg-yellow-500 hover:shadow-xl hover:text-white duration-200`}
            >
              Explore
            </a>
          </div>
        </div>
        <div
          className="shadow-2xl flex flex-col justify-center items-center bg-white py-16 space-y-5 px-8 w-[90%] md:w-full rounded-3xl"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
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
              className={`bg-green-400 text-sm md:text-[15px] font-semibold text-white px-7 py-3 rounded-3xl hover:bg-green-500 hover:shadow-xl hover:text-white duration-200`}
            >
              Explore
            </a>
          </div>
        </div>
        <div
          className="shadow-2xl flex flex-col justify-center items-center bg-white py-16 space-y-5 px-8 w-[90%] md:w-full rounded-3xl"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <p className="text-[#00373E] text-center text-[24px] font-bold max-w-xs">
            Webinars & Workshops
          </p>
          <p className="text-sm md:text-[15px] text-center text-[#00373E] max-w-xs">
            Live and recorded sessions with mental health professionals.
          </p>
          <div>
            <a
              href="#"
              className={`bg-pink-400 text-sm md:text-[15px] font-semibold text-white px-7 py-3 rounded-3xl hover:bg-pink-500 hover:text-white hover:shadow-xl duration-200`}
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
