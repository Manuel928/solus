import React from "react";

const ExploreBtn = ({ text, color }) => {
  return (
    <div>
      <a
        href="#"
        className={`bg-${color} text-xs md:text-[15px] font-semibold text-white px-4 py-2 rounded-3xl hover:bg-white hover:border border-[#00373E] hover:text-[#00373E] duration-200`}
      >
        {text}
      </a>
    </div>
  );
};

export default ExploreBtn;
