import React, { useEffect, useRef } from "react";
import { testimonialData } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";
import { useLocation } from "react-router-dom";

export const Testimonial = () => {
  const quoteRef = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/quotes")
      quoteRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="pb-[40px] pt-[40px] lg:pb-[160px] lg:pt-0"
    >
      <div ref={quoteRef} className="container mx-auto">
        <Swiper>
          {testimonialData.map((slide, index) => {
            const { quoteImg, message, name, occupation, scroll } = slide;
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[1200px] cursor-pointer text-black mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                  {scroll === "<<<" && (
                    <span className="text-2xl lg:text-3xl font-bold  animate-pulse duration-50 hidden lg:block">
                      {"<<<"}
                    </span>
                  )}
                  <div className="w-[154px] h-[109px] mb-5">
                    <img src={quoteImg} alt="" />
                  </div>
                  <div className="flex-1 lg:mt-[54px]">
                    <div className="text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12">
                      {message}
                    </div>
                    <div className="flex items-center text-xl lg:text-2xl font-primary">
                      <div className="font-semibold">{name}</div>
                      <span className="mx-4">|</span>
                      <div className="font-light">{occupation}</div>
                    </div>
                  </div>
                  {scroll === ">>>" && (
                    <span className="text-2xl lg:text-3xl font-bold animate-pulse duration-50 hidden lg:block">
                      {">>>"}
                    </span>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonial;
