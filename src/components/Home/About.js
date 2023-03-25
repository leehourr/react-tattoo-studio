import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const aboutRef = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/about")
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);
  return <div ref={aboutRef}>About</div>;
};

export default About;
