import React from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "../config/motion"
const sectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-0 "
      >
        <span className="hash-span" id={idName}>
&nbsp;          {" "}
        </span>{" "}
        <Component />
      </motion.section>
    );
  }
  return HOC;
};
export default sectionWrapper;
