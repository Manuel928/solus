import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import OurPartners from "./components/OurPartners";
import ExploreAndLearn from "./components/ExploreAndLearn";
import Faq from "./components/Faq";
import JoinCommunity from "./components/JoinCommunity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <OurPartners />
      <ExploreAndLearn />
      <JoinCommunity />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
