import React from "react";
import { motion } from "framer-motion";
import NewTab from "./NewTab";

export default function TabTitle() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.176 }}
        className="w-full p-4 mt-24"
      >
        <h2 className="text-5xl max-sm:text-3xl md:text-3xl lg:text-[3rem] flex justify-center items-center font-raleway flex-wrap text-black dark:text-white font-semibold">
          Enjoy your game, we'll handle the rest
        </h2>
        <p className="flex active:text-slate-600     dark:text-slate-400 flex-wrap font-manrope items-center justify-center  max-sm:text-xs max-sm:text-center max-sm:justify-center mt-8 ">
          Boundary Bytes Cricket Acadamy has a variety of settings that can fit
          your Friday night game with friends.
        </p>
      </motion.div>

      <motion
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className=" text-center  ml-9"
      >
        <h3 className="text-2xl font-bold  flex active:text-slate-700     dark:text-slate-200 flex-wrap font-manrope items-center justify-center uppercase mb-11">
          Featured Sport
        </h3>
      </motion>
      <NewTab />
    </>
  );
}
