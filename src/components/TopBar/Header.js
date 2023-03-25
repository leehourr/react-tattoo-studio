import React, { useState, useEffect } from "react";
// import header data
// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Social";
// import icons

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  const toggleMobileNav = () => {
    setNavMobile((prev) => !prev);
    setToggleMenu((prev) => !prev);
  };
  return (
    <header
      className={`${
        isActive
          ? "h-[100px] lg:h-[110px] shadow-lg bg-white"
          : "h-[110px] bg-transparent text-white"
      } z-50 fixed left-0 right-0 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[20px] xl:pr-[60px]">
        <a href="/">
          <h1 className="text-4xl font-bold">The Void Tattoo</h1>
        </a>
        <div className="hidden xl:flex">
          <Nav />
        </div>
        <div
          onClick={toggleMobileNav}
          className={`xl:hidden ${
            isActive ? "child:bg-black" : "child:bg-white"
          }  relative w-7 h-5 rounded-md cursor-pointer`}
        >
          <span
            className={`absolute top-0 left-1 w-[22px] h-[2px] ${
              toggleMenu ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
            } transition-all duration-200`}
          ></span>
          <span
            className={`absolute top-2 left-1 w-[22px] h-[2px] ${
              toggleMenu ? "hidden" : "static"
            } transition-all duration-200`}
          ></span>
          <span
            className={`absolute top-4 left-1 w-[22px] h-[2px] ${
              toggleMenu
                ? "-rotate-45 -translate-y-2"
                : "rotate-0 translate-y-0"
            } `}
          ></span>
          {/* <TiThMenuOutline className="text-3xl text-white" /> */}
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0 overflow-hidden"} ${
            isActive
              ? "top-[100px] lg:top-[110px]"
              : "top-[120px] lg:top-[150px]"
          } fixed left-0 -z-10 w-full h-full text-black bg-white transition-all duration-300`}
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
