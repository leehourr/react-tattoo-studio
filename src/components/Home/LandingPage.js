import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import tattoo2 from "../../asset/landingPage/tattoo2.jpg";
import tattoo3 from "../../asset/landingPage/tattoo3.jpg";

const LandingPage = () => {
  const { pathname } = useLocation();
  const landingRef = useRef(null);
  const mobileScreen = useMediaQuery({
    query: "(max-width: 640px)",
  });
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
      {mobileScreen ? (
        <img
          className="absolute top-0 left-0 w-full h-full brightness-50"
          src={tattoo2}
          alt=""
        />
      ) : (
        <img
          className="absolute top-0 left-0 w-full h-full brightness-50 object-center object-cover xl:object-fill "
          src={tattoo3}
          alt=""
        />
      )}
      <main className="z-30 flex flex-1 flex-col items-center justify-center gap-4 xl:gap-10">
        <h1 className="block text-[3rem] xl:text-[8rem] font-bold w-full">
          The Void Tattoo
        </h1>
        <h2 className="text-xl xl:text-3xl">SKIN - STORY - STUDIO</h2>
      </main>
      <footer className="z-30 text-3xl animate-pulse mb-7">Scroll down</footer>
    </div>
  );
};

export default LandingPage;
