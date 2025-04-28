import React from "react";

const OurPartners = () => {
  const ourPartners = [
    { imageUrl: "/images/wealth.svg" },
    { imageUrl: "/images/Notion.svg" },
    { imageUrl: "/images/medium.svg" },
    { imageUrl: "/images/braze.svg" },
  ];

  return (
    <section className="bg-white mt-4 flex flex-row items-center gap-4 py-4 px-6 md:px-12 rounded-2xl w-[95%] mx-auto">
      <p className="text-sm md:text-base text-[#00373E] font-medium">
        Our Partners
      </p>
      <div className="flex flex-row space-x-4 md:space-x-8">
        {ourPartners.map((el) => (
          <img
            key={el.imageUrl}
            src={el.imageUrl}
            className="w-16 md:w-24"
            alt="Partner logo"
          />
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
