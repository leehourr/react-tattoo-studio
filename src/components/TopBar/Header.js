import React, { useState, useEffect } from "react";
// import header data
// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Social";
// import icons
import { TiThMenuOutline } from "react-icons/ti";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive
          ? "h-[100px] lg:h-[110px] shadow-lg bg-white"
          : "h-[110px] bg-transparent text-white"
      } z-50 fixed left-0 right-0 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        <a href="/">
          <h1 className="text-4xl font-bold up">The Void Tattoo</h1>
        </a>
        <div className="hidden xl:flex">
          <Nav />
        </div>
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-dark p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl text-white" />
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0 overflow-hidden"} ${
            isActive
              ? "top-[100px] lg:top-[110px]"
              : "top-[120px] lg:top-[150px]"
          } fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/* social icons - initially hidden - is showing on desktop mode */}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};
