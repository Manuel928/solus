import React from "react";
import Button from "./Button";

const Footer = () => {
  const footerLinks = [
    { title: "About" },
    { title: "Instagram" },
    { title: "Term Of Use" },
    { title: "Services" },
    { title: "Facebook" },
    { title: "Privacy Policy" },
    { title: "Therapists" },
    { title: "Youtube" },
    { title: "Resources" },
    { title: "LinkedIn" },
    { title: "Contact" },
  ];

  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-6 py-16 mt-16">
        <div className="bg-white rounded-2xl flex flex-col justify-between p-10 md:w-1/2">
          <div className="flex flex-col gap-6">
            <a className="text-2xl font-semibold text-[#00373E]" href="#">
              Solus
            </a>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
              {footerLinks.map((link, index) => (
                <FooterLink key={index} label={link.title} />
              ))}
            </div>
          </div>
          <div className="text-xs text-[#A0A0A0] mt-10">
            © {new Date().getFullYear()} Solus. All Rights Reserved.
          </div>
        </div>

        <div
          className="bg-[#00373E] rounded-2xl flex flex-col items-start justify-between md:justify-center md:space-y-8 p-10 md:w-1/2"
          style={{
            backgroundImage: "url('/images/illustration-7.svg')",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "150px auto",
          }}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="text-2xl max-w-[240px] font-semibold text-white">
            Find Support, Guidance, and Balance.
          </p>
          <div className="w-full flex justify-start mt-6">
            <Button
              text="Find Support Now"
              size="lg"
              bg="white"
              color="darkGreen"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

function FooterLink({ label }) {
  return (
    <a
      className="text-sm md:text-[16px] text-[#00373E] hover:underline"
      href={`#${label.toLowerCase()}`}
    >
      {label}
    </a>
  );
}

export default Footer;
