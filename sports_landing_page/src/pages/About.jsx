import React from "react";
import { Tilt } from "react-tilt";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { fadeIn } from "../config/motion";
import about from "../lib/about";
import { motion } from "framer-motion";
import sectionWrapper from "../Hoc/sectionWrapper";

const variants = {
  initial: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
};

const AboutCard = ({ index, title, description, icons }) => {
  return (
    <Tilt className="box-content   xs:w-[280px]  w-full  rounded-3xl hover:bg-slate-500  ">
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ delay: 1 }}
        className="w-full border[20px] bg-gradient-to-t from-[#ffffff] to-[rgb(231,231,249)] dark:bg-slate-950  dark:hover:bg-slate-950 dark:hover:bg-opacity-90  opacity-80 rounded-3xl  shadow-card dark:bg-opacity-50  dark:bg-glassmorphism-bg"
      >
        <div
          options={{ max: 45, scale: 1, speed: 550 }}
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="   hover:bg-slate-300  hover:bg-opacity-30 hover:text-white    py-5 px-12 rounded-[20px] min-h-[290px]  flex flex-col  dark:bg-slate-900   [#2c2c2c]"
        >
          <div className=" icons-color dark:text-white">{icons}</div>
          <h3 className=" font-Manrope font-bold text-[20px] text-[#2c2c2c] dark:text-white text-left mb-3 flex justify-start items-start  ">
            {title}
          </h3>
          <p className="text-[11px] text-gray-500 text-start   dark:text-slate-400 ">
            {" "}
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};
function About() {
  return (
    <>
      <motion.div
        className="mt-6  text-center          
        "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.176 }}
      >
        <p className="text-sm font-lora uppercase mt-10 text-neutral-500 dark:text-slate-200 font-semibold">
          {" "}
          Discover Exciting Tournaments{" "}
        </p>
        <h2 className="text-[28px] font-extrabold sm:text-[3rem] mt-4 text-black dark:text-white uppercase font-Raleway leading-13    ">
          About <span className="text-orange-500 ">Us </span>
        </h2>

        <motion.p
          className="mt-3 text-slate-500 items-center text-center flex justify-center p-9  text-[17px] max-w-8xl w-full font-Manrope dark:text-slate-400 "
          {...fadeAnimation}
        >
          At Boundary Bytes Cricket Acadamy we're dedicated to fostering
          competition and sportsmanship.
          <br />
          Join us for thrilling matches and unforgettable moments!
        </motion.p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-evenly items-center  p-3  mb-16">
        {about.map((about, index) => (
          <AboutCard
            key={about.title}
            index={index}
            {...about}
            className="z-50  hover:text-orange-400 dark:hover:text-white"
            {...slideAnimation}
          />
        ))}
      </div>
      ;
    </>
  );
}

export default sectionWrapper(About, "about");
