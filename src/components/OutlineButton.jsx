import React from "react";

const OutlineButton = ({ text }) => {
  return (
    <div>
      <a
        href="#"
        className="border border-[#00373E] text-xs md:text-[15px] font-semibold text-[#00373E] px-6 py-2 rounded-3xl hover:bg-[#00373E] hover:text-white transition-colors duration-200"
      >
        {text}
      </a>
    </div>
  );
};

export default OutlineButton;
