import React, { useState } from "react";

const Faq = () => {
  const faqList = [
    {
      number: 1,
      questionTitle: "What services do you offer?",
      accordionBodyText:
        "I offer a range of services including frontend development, responsive web design, UI/UX prototyping, and WordPress development.",
    },
    {
      number: 2,
      questionTitle: "What technologies do you work with?",
      accordionBodyText:
        "I primarily work with HTML, CSS, JavaScript, React, Tailwind CSS, and WordPress. I'm also familiar with backend basics like Node.js and database integration.",
    },
    {
      number: 3,
      questionTitle: "Can you design and develop a website from scratch?",
      accordionBodyText:
        "Yes! I can handle both the design and development process, from initial wireframes to final deployment, ensuring a fully responsive and user-friendly site.",
    },
    {
      number: 4,
      questionTitle: "How long does it take to complete a project?",
      accordionBodyText:
        "Project timelines vary depending on complexity, but small websites typically take 1-2 weeks, while larger or custom projects can take 3-6 weeks.",
    },
    {
      number: 5,
      questionTitle: "Do you offer website maintenance after launch?",
      accordionBodyText:
        "Absolutely. I offer ongoing maintenance, updates, performance optimization, and support packages to ensure your website stays secure and up-to-date.",
    },
    {
      number: 6,
      questionTitle: "How do I get started working with you?",
      accordionBodyText:
        "Simply reach out via the contact form on my site or send me an email. We’ll schedule a quick call to discuss your project, goals, and timeline!",
    },
  ];

  return (
    <section
      className="flex flex-col mt-[100px] md:mt-16 lg:flex-row justify-between items-center gap-[100px] px-[20px] md:px-[100px] py-8 md:py-16 bg-white rounded-4xl shadow-2xl"
      data-aos="fade-in-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      {/* Left Side */}
      <div className="flex flex-col max-w-[400px] space-y-4 px-4 md:space-y-6 self-start">
        <p className="text-xs text-[#00373E]">NEED HELP?</p>
        <p className="text-[#00373E] text-[28px] font-bold">
          Frequently Asked Questions
        </p>
        <p className="text-[#00373E] text-xs md:text-[15px]">
          Find answers to common questions about our services, therapy, and
          mental well-being.
        </p>
        <img
          src="./images/Illustration-faq.svg"
          className=""
          alt="FAQ Illustration"
        />
      </div>
      {/* Right Side */}
      <div className="space-y-4 w-full max-w-xl">
        {faqList.map((faq) => (
          <FaqItem
            key={faq.questionTitle}
            number={faq.number}
            questionTitle={faq.questionTitle}
            accordionBodyText={faq.accordionBodyText}
          />
        ))}
      </div>
    </section>
  );
};

function FaqItem({ number, questionTitle, accordionBodyText }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Faq */}
      <div
        className="border border-gray-200 rounded-2xl shadow-sm transition-all self-end"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <button
          className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
          onClick={handleToggle}
        >
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-gray-500">
              {number < 10 ? `0${number}` : number}
            </span>
            <span className="font-medium text-md md:text-lg text-gray-800">
              {questionTitle}
            </span>
          </div>
          <span className="text-xl text-gray-500">{isOpen ? "-" : "+"}</span>
        </button>
        {isOpen && (
          <div className="px-6 pb-6 text-gray-600 transition-all duration-300">
            {accordionBodyText}
          </div>
        )}
      </div>
    </>
  );
}

export default Faq;
