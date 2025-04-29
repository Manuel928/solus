import React from "react";

const Button = ({ text, size = "", bg = "", color="" }) => {
  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-7 py-3",
    lg: "px-8 py-4",
  };
  const colors = {
    darkGreen: "bg-[#00373E]",
    white: "bg-[white]",
  };
  const textColor = {
    white: "text-white",
    darkGreen: "text-[#00373E]"
  }
  return (
    <div>
      <a
        href="#"
        className={`${colors[bg]} text-xs md:text-[15px] font-semibold ${textColor[color]}  ${sizeClasses[size]} rounded-3xl hover:bg-white hover:border border-[#00373E] hover:text-[#00373E] duration-200`}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
