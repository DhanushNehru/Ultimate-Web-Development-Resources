import React, { useState, useRef } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import gsap from "gsap";

import {motion}  from "framer-motion"

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);


    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    tl.to(itemRef.current, { scale: isOpen ? 0.9 : 1 });

    if (isOpen) {
      tl.to(itemRef.current.querySelector(".answer"), { height: 0 }, "-=0.3");
    } else {
      tl.to(itemRef.current.querySelector(".answer"), { height: "auto" }, "-=0.3");
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center mx-auto relative mb-3 max-w-lg"
      ref={itemRef}
      nitial={{ scale: 0.9 }}
      animate={{ scale: isOpen ? 1 : 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <h6 className="mb-0 ">
        <button
          className="group relative flex w-full cursor-pointer items-center border-b border-solid  border-slate-500 border-opacity-30  p-4 text-left font-semibold text-dark-500  font-raleway  sm:text-lg   dark:text-slate-100 transition-all ease-in"
          onClick={toggleOpen}
        >
          <span className="sm:text-[20px]  text-base ">{question}</span>
          <RiArrowUpSLine
            className={`fa fa-chevron-down absolute right-0 pt-1  sm:text-2xl   text-base transition-transform ${
              isOpen ? "rotate-180 " : ""
            }`}
          ></RiArrowUpSLine>
        </button>
      </h6>
      <motion.div
        className={`overflow-hidden transition-all duration-300 ease-in-out   sm:text-2xl  text-base  ${
          isOpen ? "block" : "hidden"
        }`}
        initial={false}
        animate={isOpen ? { height: "auto" } : { height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 text-sm leading-normal text-blue-gray-500/80 font-manrope  dark:text-slate-400">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Accordions = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 dark:bg-opacity-40 p-4 sm:p-8 md:p-12 lg:p-16">
      <FaqItem
        question="What Makes Team Tournaments Special?"
        answer="Team tournaments promote teamwork and collaboration, as individuals unite to pursue a common objective."
      />
      <FaqItem
        question="Why Do Sports Fans Love Tournaments?"
        answer="Team tournaments promote teamwork and collaboration, as individuals unite to pursue a common objective."
      />
      <FaqItem
        question="How Do Tournaments Inspire the Next Generation?"
        answer="Tournaments inspire young athletes, fueling their dreams and motivating them to become future champions."
      />
    </div>
  );
};

export default Accordions;
