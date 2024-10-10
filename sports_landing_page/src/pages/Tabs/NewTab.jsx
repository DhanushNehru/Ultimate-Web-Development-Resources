import React, { useState, useEffect } from "react";
import tabs from "../../lib/tabs";
import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import gsap from "gsap";

export default function NewTab() {


  const [activeTab, setActiveTab] = useState(0);

  const animateElement = (element) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 1.1 }
    );
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      gsap.fromTo(
        ".flip-card-inner",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
    }
  }, []);

  return (
    <div className="container-bg flex flex-col lg:flex-row md:flex-col bg-white dark:bg-slate-800 dark:bg-opacity-70  sm:m-48 m-0  p-4">
      <div className="lg:w-1/3   ">
        <div className="  capitalize   ">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-6 font-raleway w-full px-5 bg-opacity-10 dark:bg-slate-800 dark:bg-opacity-70    capitalize font-bold  ${
                activeTab === index
                  ? "text-orange-500 dark:bg-slate-900 sm:text-xl  text-base text-start "
                  : "text-gray-900 dark:text-white bg-slate-50 sm:text-xl text-base text-start "
              }`}
              whileHover={{ duration: 1, x: 10, ease: "expoScale(1, 2)" }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>
      <div className="lg:w-2/3 p-5 bg-white dark:bg-slate-900 dark:bg-opacity-20 text-gray-600">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={activeTab === index ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`text-manrope ${
              activeTab === index ? "block" : "hidden"
            }`}
            ref={animateElement}
          >
            {activeTab === index && (
              <div className="flex w-full flex-row justify-between items-center p-5 text-lg">
                {tab.type4 && <></>}
                <span className="text-white flex-col text-center justify-center flex gap-5  w-full ">
                  <p className="flex justify-between items-center text-gray-700 dark:text-white  space-x-8   font-fredoka  active:text-slate-900 active:dark:text-gray-100 cursor-pointer">
                    {tab.type1}{" "}
                    {tab.type1 && (
                      <BsFillArrowUpRightCircleFill className="icon ml-9  " />
                    )}
                  </p>
                  <p className="flex justify-between items-center text-gray-600 dark:text-slate-300  cursor-pointer">
                    {tab.type2}{" "}
                    {tab.type2 && (
                      <BsFillArrowUpRightCircleFill className=" icon   flex justify-center items-center cursor-pointerr " />
                    )}
                  </p>
                  <p className="flex justify-between items-center text-gray-700 dark:text-white cursor-pointer">
                    {tab.type3}{" "}
                    {tab.type3 && (
                      <BsFillArrowUpRightCircleFill className="icon   flex justify-center items-center" />
                    )}
                  </p>
                  <p className="flex justify-between items-center text-gray-700 dark:text-white">
                    {tab.type}{" "}
                    {tab.type && (
                      <BsFillArrowUpRightCircleFill className="icon    flex justify-center items-center" />
                    )}
                  </p>
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
