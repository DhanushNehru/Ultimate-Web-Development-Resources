import React from "react";
import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../config/motion";

export default function Home() {
  return (
    <section className="  scroll-mt-[20rem] mb-28 w-full h-screen text-center sm:mb-0 relative">
      <div className="flex items-center justify-center  relative object-cover w-full h-screen ">
        {" "}
        <motion.div
          className=" flex justify-center items-center "
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div
            className=" bg-image bg-center  h-screen   
 "
          >
            {" "}
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="head-text mt-24 "
              {...slideAnimation}
            >
             Boundary Bytes Cricket Acadamy 
                        </motion.h1>{" "}
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl flex-warp mt-3 text-neutral-100 font-medium font-raleway sm:mx-44 mx-11"
            >
              Elevate your tournaments with Challonge. Our powerful platform has been trusted by millions to create, manage,
              <br /> and track their competitions effortlessly. With over 36 million brackets created and counting, Challonge is your one-stop solution for all your tournament needs {" "}
            </motion.p>
            <div className="items-center flex justify-center gap-5"> 
            <a href="./events" className=""> 
            <motion.button
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
              className="bg-[#ff6d1f] text-white font-bold py-3 px-6 rounded-sm font mt-4  lg:mt-8 hover:cursor-pointer font-manrope  hover:scale-[1.04] cursor-pointer "
              {...fadeAnimation}
            >
           
              Create Tournament

            </motion.button>
            </a>

            <motion.button
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
              className="bg-[#fff] text-orange-500 font-bold py-3 px-6 rounded-sm font mt-4   -xs-full-width lg:mt-8 hover:cursor-pointer font-manrope  hover:scale-[1.04] "
              {...fadeAnimation}
            >
             Get Started 
            </motion.button>
            </div> 
            <div className="absolute inset-0 bg-overlay"></div>
            <div className=" inset-0 flex items-center justify-center"></div>
          </div>

        
        </motion.div>
        
      </div>
    </section>
  );
}
