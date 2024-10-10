import React from "react";
import { motion, useAnimation } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import scroll from "../../lib/scroll";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function SportIndex({ title, button, image }) {
  const overlayControls = useAnimation();

  const handleMouseEnter = () => {
    overlayControls.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    overlayControls.start({ opacity: 0 });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.176 }}
      className="w-[300px] inline-block p-3 hover:scale-105 ease-in-out transition"
    >
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="flex h-52 w-[90%] max-sm:w-[350px] max-sm:justify-center bg-cover object-cover shadow-md"
          src={image}
          alt="aimg"
        />

        <div className="sm:text-lg text-sm mx-auto my-4 text-gray-800 font-raleway capitalize dark:text-slate-50 dark:active:text-slate-300">
          {title}
        </div>
      </div>

      <a
        href="./"
        id="text"
        className="text-sm text-gray-600 first-letter:capitalize hover:text-black lowercase dark:text-slate-400 cursor-pointer"
      >
        {button}
      </a>
    </motion.div>
  );
}

export default function Scroll() {
  const sliderRef = useRef(null);

  const SlideLeft = () => {
    const slider = sliderRef.current;
    gsap.to(slider, {
      duration: 0.5,
      scrollLeft: slider.scrollLeft - 500,
      ease: "power2.out",
    });
  };

  const SlideRight = () => {
    const slider = sliderRef.current;
    gsap.to(slider, {
      duration: 0.5,
      scrollLeft: slider.scrollLeft + 500,
      ease: "power2.out",
    });
  };

  return (
    <>
      <div className="relative mb-4 items-center flex w-full mt-14">
        <MdKeyboardArrowLeft
          className="text-black cursor-pointer dark:text-white"
          size={40}
          onClick={SlideLeft}
        />
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide my-5"
        >
          {scroll.map((scroll) => (
            <SportIndex
              key={scroll.title}
              title={scroll.title}
              button={scroll.button}
              image={scroll.image}
            ></SportIndex>
          ))}
        </div>
        <MdKeyboardArrowRight
          className="dark:text-white text-black cursor-pointer"
          size={40}
          onClick={SlideRight}
        />
      </div>
    </>
  );
}
