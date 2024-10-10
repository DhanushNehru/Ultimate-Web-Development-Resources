import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { VscMenu } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Links = [
  { name: "Events", link: "/events" },
  { name: "Community", link: "/community" },
  { name: "Tournament", link: "/tournament" },
  { name: "Contact", link: "/contact" },
];

export default function Intro() {
  const [activeSection, setActiveSection] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="dark"> {/* Apply the dark mode class to the top level */}
      <header className={`z-[999] relative`}>
        <motion.div
          className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-[90%] max-w-6xl opacity-50 glassmorphism bg-opacity-40 shadow-lg shadow-black/5 backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.5rem] sm:rounded-lg flex items-center sm:justify-between"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
          <motion.header className="" {...slideAnimation("down")}>
            <motion.h3 className="max-w-7xl ml-5 mx-auto text-white gap-3 mr-3">
              Boundary Bytes Cricket Acadamy            </motion.h3>
          </motion.header>

          <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul
              className={`justify-center items-center w-[22rem] flex-wrap m-[-1rem] gap-y-1 text-[0.9rem] font-medium text-gray-200 sm:w-[initial] sm:flex-nowrap sm:gap-5 hidden sm:flex flex-row ml-4 ${
                toggle ? "hidden" : ""
              }`}
            >
              {Links.map((link, index) => (
                <motion.li
                  className="items-center justify-center relative space-x-2"
                  key={index}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                >
                  <Link
                    to={link.link}
                    className={`flex w-full justify-center items-center px-[0.81rem] py-1 hover:text-[#3a32ac] transition ${
                      activeSection === link.name ? "text-white" : ""
                    }`}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-100 py-5 mb-2 flex justify-center text-center items-center mt-1 -z-10 w-[5rem] absolute"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <button
                type="button"
                id="menu-btn"
                onClick={handleToggle}
                className="icons w-14 h-11 cursor-pointer flex-center flex ml-[24rem]"
              >
                {toggle ? (
                  <RxCross2 className="icon items-center justify-center flex text-white" />
                ) : (
                  <VscMenu className="icon items-center justify-center flex text-white" />
                )}
              </button>
              <div
                className={`${
                  !toggle ? "hidden" : ""
                } p-20 glassmorphism absolute top-20 right-0 ml-33 min-w-[60%] z-10 rounded-xl w-[12rem] left-34`}
              >
                <ul className="list-none flex justify-center items-start flex-col gap-12 z-50">
                  {Links.map((link, index) => (
                    <motion.li
                      className="items-center justify-center uppercase relative text-white font-bold text-[1rem] hover:text-gray-800"
                      key={index}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        stiffness: 130,
                        damping: 9,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        key={index}
                        name={link.name}
                        className={`${
                          activeSection === link.name
                            ? "text-white"
                            : "hover:text-stone-100"
                        } text-[16px] cursor-pointer font-manrope`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <span className="flex-row flex justify-center items-center">
            <motion.a
              href="./login"
              className="text-[#ffffff] px-7 py-3 gap-6 rounded-full outline-none focus:scale-[1.15] transition hover:scale-[1.1rem] hover:text-black hover:bg-white opacity-90 active:scale-105 cursor-pointer bg-black mr-5 hidden sm:flex"
            >
              <button
                className="hover:opacity-70 group-hover:translate-y-1 transition"
                {...fadeAnimation}
              >
                Sign up
              </button>
            </motion.a>
          </span>
        </motion.div>
      </header>
    </div>
  );
}
