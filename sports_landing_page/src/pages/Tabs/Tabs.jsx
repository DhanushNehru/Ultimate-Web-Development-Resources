import React, { useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import tabs from "../../lib/tabs";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const animateElement = (element) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  };

  return (
    <>
      <section className="relative mt-28 items-center justify-center flex">
        <div  className="sm:mx-24 w-full relative grid items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 bg-gray-100">
          <div className="flex flex-col sm:flex-col space-y-2 sm:space-y-0 sm:space-x-2 w-full">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-6 font-raleway px-9 items-center flex sm:text-xl ${
                  activeTab === index
                    ? "text-orange-500 bg-gray-50"
                    : "text-gray-900 bg-gray-100"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <div className="mt-4">
            {tabs.map((tab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={activeTab === index ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className={`text-manrope ${
                  activeTab === index ? "block" : "hidden"
                } block`}
                ref={animateElement}
              >
                {/* Render images */}
                {activeTab === index && (
                  <div className="flex">
                    <div className="w-1/2">
                      <img
                        src={tab.content}
                        alt={tab.label}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <div className="w-1/2 p-4">
                      <h2 className="text-2xl font-bold">{tab.label}</h2>
                      <p>
                      n nb n
                      </p>
                    </div>
                  </div>
              )  }
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Tabs;
