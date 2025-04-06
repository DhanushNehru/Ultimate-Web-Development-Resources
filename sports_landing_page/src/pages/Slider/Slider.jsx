import React, { useRef } from "react";
import multiple from "../../lib/multiple";
import Dribbble from "../../assets/Dribbble.png";
import { useScroll, useTransform, motion } from "framer-motion";
import IndexContent from "../IndexContent";
import sectionWrapper from "../../Hoc/sectionWrapper";
function Slider({ title, icons, dis }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="flex mb-3 sm:mb-8 last:mb-0 xl:mt-11 items-center justify-center group">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="w-1/2 mr-2"
      >
        <section className="bg-gray-500 max-w-[64rem] border border-blue/10 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-blue-900 hover:bg-opacity-20 transition sm:group-even:pl-8 hover:text-gray-500 dark:text-gray-500 dark:bg-white/30 40">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-row h-full sm:group-even:ml-[18rem]">
            <h3 className="text-xl font-semibold text-[#1d1d1c] font-raleway text-left">
              {title}
              <div className="items-center flex justify-center sm:m-2 ">{icons}</div>
            </h3>
            <p className="mt-2 leading-relaxed text-gray-200 font-manrope text-left text-sm">
              {dis}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {multiple.map((item, index) => (
                <IndexContent key={index} title={item.title} icons={item.icons} dis={item.dis} />
              ))}
            </ul>
          </div>

          <div> </div>

          <img
            src={Dribbble}
            alt="Project I worked on"
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="w-1/2 ml-2"
      >
        <section className="bg-gray-500 max-w-[64rem] border border-blue/10 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-blue-900 hover:bg-opacity-20 transition sm:group-even:pl-8 hover:text-gray-500 dark:text-gray-500 dark:bg-white/30 40">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-xl font-semibold text-[#1d1d1c] font-raleway text-left">
              {title}
              <div className="items-center flex justify-center sm:m-2 ">{icons}</div>
            </h3>
            <p className="mt-2 leading-relaxed text-gray-200 font-manrope text-left text-sm">
              {dis}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {multiple.map((item, index) => (
                <IndexContent key={index} title={item.title} icons={item.icons} dis={item.dis} />
             ) )}
            </ul>
          </div>
          <div> </div>
          <img
            src={Dribbble}
            alt="Project I worked on"
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </motion.div>
    </div>
    
  );
}

export default sectionWrapper(Slider, "")