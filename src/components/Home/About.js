import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { aboutData } from "../../data/data";
import { fadeIn } from "../../utils/varients";
// import useOnScreen from "../../hook/useOnScreen";

const About = () => {
  const aboutRef = useRef(null);
  const { pathname } = useLocation();
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  console.log(pathname);

  useEffect(() => {
    // console.log(isMounted);
    // if (isMounted) nav("/about");

    if (pathname === "/about")
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);
  return (
    <div ref={aboutRef} className="h-screen w-full">
      <section className="lg:py-16 xl:pb-[160px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
            {/* numbers */}
            <motion.div
              variants={fadeIn("right")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col lg:flex-row flex-1"
            >
              <div className="text-[360px] xl:text-[620px] leading-none font-tertiary font-bold lg:-tracking-[0.09em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent">
                01
              </div>
            </motion.div>
            {/* text */}
            <motion.div
              variants={fadeIn("left")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex-1 h-full xl:mt-48"
            >
              <h2 className="h2">{title}</h2>
              <div className="flex flex-col items-end">
                <div className="max-w-[530px] text-grey">
                  <p className="mb-6">{subtitle1}</p>
                  <p className="mb-9">{subtitle2}</p>
                  <button className="btn btn-lg btn-link hover:bg-black/80 hover:text-white p-1 px-3 border-[1px] border-black/80">
                    {btnText}
                    <div className="text-xl">{btnIcon}</div>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
