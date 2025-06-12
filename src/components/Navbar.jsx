import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#F7F6F4] relative z-50 flex justify-between items-center p-5 md:mx-[100px] lg:w-[1140px] h-[91px] overflow-visible">
      {/* Left Menu */}
      <ul className="hidden lg:flex flex-row gap-8 text-[#00373E]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
      </ul>

      {/* Logo */}
      <a href="#">
        <div className="text-[#00373E] font-bold text-3xl">Solus</div>
      </a>

      {/* Right Menu */}
      <ul className="hidden lg:flex flex-row gap-8 text-[#00373E]">
        <li>
          <a href="#">Therapists</a>
        </li>
        <li>
          <a href="#explore&learn">Resources</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div
        className="lg:hidden text-[#00373E] text-3xl cursor-pointer overflow-visible"
        onClick={toggleMenu}
      >
        &#9776;
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-[#00373E] font-medium overflow-visible z-50">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#">Therapists</a>
          </li>
          <li>
            <a href="#explore&learn">Resources</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
