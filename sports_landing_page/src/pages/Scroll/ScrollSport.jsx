import React from "react";
import { motion } from "framer-motion";

export default function ScrollSport() {
  return (
    <div>
      <motion.h1
        className="text-3xl mx-auto space my-9 mt-28 space-y-4 space-x-5 text-[28px] font-extrabold sm:text-[3rem]  text-black uppercase font-Manrope leading-13 text-center 
      dark:text-white 
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {" "}
        Sports
        <span className="text-orange-500 "> Equipment</span>
      </motion.h1>
      <p className="text-xs   sm:text-[14px]  text-center   font-lora  mt-10  dark:text-gray-400    text-neutral-500 flex justify-center items-center ">
        "Discover top-quality sports equipment and gear up for success."{" "}
      </p>
    </div>
  );
}
