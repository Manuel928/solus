import React from "react";

const Button = ({ text, size = "" }) => {
  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-7 py-3",
    lg: "px-8 py-4",
  };
  return (
    <div>
      <a
        href="#"
        className={`bg-[#00373E] text-xs md:text-[15px] font-semibold text-white ${sizeClasses[size]} rounded-3xl hover:bg-white hover:border border-[#00373E] hover:text-[#00373E] duration-200`}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
