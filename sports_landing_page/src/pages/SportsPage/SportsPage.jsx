import React, { useRef } from "react";
import SportIndex from "./SportsIndex"; // Import your card component
import index from "../../lib/multiple";
import { slideIn } from "../../config/motion";

import Dribbble from "../../assets/Dribbble.png";
import { motion, useScroll, useTransform } from "framer-motion";
function SportsPage() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" "
    >
      <motion.h1
        className="text-3xl mx-auto space my-9 mt-28 space-y-4 space-x-5 text-[28px] font-extrabold sm:text-[3rem]  text-black uppercase font-Manrope leading-13 text-center   dark:text-white dark:active:text-gray-100 
    
    "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {" "}
        Event Page
        <span className="text-orange-500 "> Creation</span>
      </motion.h1>
      <p className="text-xs   sm:text-[14px]  text-center   font-lora  mt-10 text-neutral-500 flex justify-center items-center  dark:text-slate-300  mb-10 ">
        Got an event with multiple tournaments? We got you. Use Boundary Bytes
        Cricket Acadamy's Event feature
      </p>

      <div className="  xl:mt-12 xl:flex-row lg:flex-row md:flex-row flex-col-reverse flex overflow-hidden  mx-auto p-4 container-bg ">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex    w-full  lg:w-1/2"
        >
          <img
            src={Dribbble}
            className=" w-full h-full object-contain bg-cover  "
          />
        </motion.div>
        <div className=" mt-9">
          <div className="flex flex-col   sm:justify-start items-start">
            <div className="sm:h-1  ml-10 w-[15rem] shadow-sm bg-gradient-to-r from-orange-400 to-orange-600  dark:bg-gradient-to-r dark:from-orange-300 dark:to-orange-500  " />{" "}
          </div>

          <motion.div
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1gap-4 mb-10"
          >
            {index.map((index, ind) => (
              <SportIndex
                key={ind}
                title={index.title}
                icons={index.icons}
                dis={index.dis}
                className={`gap-5`}
              >
                {index.title}
              </SportIndex>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default SportsPage;
