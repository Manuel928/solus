import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center p-5 md:px-[100px]">
      {/* Left Menu */}
      <ul className="hidden md:flex flex-row gap-8 text-[#00373E]">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Services</li></a>
      </ul>

      {/* Logo */}
      <div className="text-[#00373E] font-bold text-3xl">Solus</div>

      {/* Right Menu */}
      <ul className="hidden md:flex flex-row gap-8 text-[#00373E]">
        <a href="#"><li>Therapists</li></a>
        <a href="#"><li>Resources</li></a>
        <a href="#"><li>Contact</li></a>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden text-[#00373E] text-3xl cursor-pointer" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col list-none items-center gap-6 py-6 text-[#00373E] font-medium">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Services</li></a>
          <a href="#"><li>Therapists</li></a>
          <a href="#"><li>Resources</li></a>
          <a href="#"><li>Contact</li></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
