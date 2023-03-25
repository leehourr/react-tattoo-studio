import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import GallerySection from "./GallerySection";
import Interview from "./Interview";
import LandingPage from "./LandingPage";
import Skills from "./Skills";
import { Testimonial } from "./Testimonial";

const index = () => {
  return (
    <>
      <LandingPage />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
    </>
  );
};

export default index;
