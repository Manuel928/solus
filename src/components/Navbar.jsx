import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center md:justify-between items-center p-[20px] md:px-[100px]">
      <ul className="flex-row hidden md:flex gap-2 md:gap-8 text-[#00373E]">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>

      <div className="text-[#00373E] font-bold text-3xl">Solus</div>

      <ul className="flex-row hidden md:flex gap-2 md:gap-8 text-[#00373E]">
        <li>Therapists</li>
        <li>Resources</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
