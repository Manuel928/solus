import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact"
      className="bg-[#F7F6F4] px-6 py-20"
      data-aos="fade-in-up"
      data-aos-duration="1500"
    >
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <p className="text-xs uppercase tracking-wide text-[#00373E]">
          Get in Touch
        </p>
        <h2 className="text-3xl font-semibold text-[#00373E]">
          We're Here to Support You
        </h2>
        <p className="text-sm text-[#3C3C3C] max-w-xl mx-auto">
          Whether you have questions, need help getting started, or want to
          learn more — reach out anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-md md:text-lg font-semibold text-[#00373E]">
            Contact Details:
          </h3>
          <p>
            <strong className="text-sm md:text-lg">Email:</strong>{" "}
            <a
              href="mailto:support@solus.com"
              className="text-[#00373E] underline text-sm md:text-lg"
            >
              support@solus.com
            </a>
          </p>
          <p>
            <strong className="text-sm md:text-lg">Phone:</strong>{" "}
            <span className="text-sm md:text-lg">+1 (123) 456-7890</span>
          </p>
          <p>
            <strong className="text-sm md:text-lg">Address:</strong>{" "}
            <span className="text-sm md:text-lg">
              {" "}
              123 Wellness Way, Calm City, CA 90210
            </span>
          </p>

          <div className="flex gap-4 pt-2 text-[#00373E]">
            <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5" />
            <FaFacebookF className="w-4 h-4 md:w-5 md:h-5" />
            <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
            <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
          </div>

          <p className="text-sm text-[#A0A0A0] mt-6">
            We typically respond within 12 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-[#FDF5EF] rounded-xl p-6 space-y-4">
          <h3 className="text-sm md:text-lg font-semibold text-[#00373E]">
            Send Us a Message
          </h3>
          <form className="space-y-4 mt-8 md:mt-0">
            <div>
              <label className="block text-sm text-[#00373E] mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-[#00373E] bg-transparent outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-[#00373E] mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border-b border-[#00373E] bg-transparent outline-none py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#00373E] text-white py-2 rounded-full mt-4 hover:bg-[#002B30]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
