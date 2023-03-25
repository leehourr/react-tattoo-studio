import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
// import tattoo from "../../asset/landingPage/tattoo.jpg";
// import tattoo2 from "../../asset/landingPage/tattoo2.jpg";
import tattoo3 from "../../asset/landingPage/tattoo3.jpg";

const LandingPage = () => {
  const { pathname } = useLocation();
  const landingRef = useRef(null);
  useEffect(() => {
    if (pathname === "/")
      landingRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);
  //   console.log(pathname);
  return (
    <div
      ref={landingRef}
      className="h-screen w-full relative flex flex-col items-center justify-between text-white"
    >
      <img
        className="absolute top-0 left-0 w-full h-full brightness-50"
        src={tattoo3}
        alt=""
      />
      <main className="z-30 flex flex-1 flex-col items-center justify-center gap-10">
        <h1 className="block text-[8rem] font-bold w-full">The Void Tattoo</h1>
        <h2 className="text-3xl ">SKIN - STORY - STUDIO</h2>
      </main>
      <footer className="z-30 text-3xl animate-pulse mb-7">Scroll down</footer>
    </div>
  );
};

export default LandingPage;
