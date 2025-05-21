import React from "react";
import Dribbble from "../assets/Dribbble.png";

import index from "../lib/index";
import IndexContent from "../pages/IndexContent";
export default function Index() {
  return (
    <section className=" relative z-0  w-full h-screen grid lg:grid-cols-2  grid-cols-1 ">
      <div className="h-full">
        <img src={Dribbble} className=" w-full h-full object-contain bg-cover " />
      </div>

      
      <div className=" w-full h-full  flex flex-col  justify-center   ">
        <h3 className="md:text-[2.5rem] flex sm:justify-start items-center font-bold   text-[1.5rem]  font-raleway  mt-3 flex-wrap ml-5 capitalize ">
          Create event pages for your conventions
        </h3>

        <p className= "  text-gray-500 dark:text-secondary mt-4 sm:text-[17px] max-w-8xl text-[11px] w-full font-manrope ml-5">
          {" "}
          Got an event with multiple tournaments? We got you. Use Boundary Bytes Cricket Acadamy's
          Event feature
        </p>
        <div className="flex flex-col justify-start text-start mt-2  left-0 "> 
      <div  className="sm:w-40 sm:h-1   bg-gradient-to-r from-orange-500 to-[#fe6e3e] opacity-90 ml-5 mt-3  w-full   "/>
         
        </div> 
        {index.map((index, ind) => (
          <IndexContent
            key={ind}
            title={index.title}
            icons={index.icons}
            dis={index.dis} className={`gap-5`}
          >
            {index.title}
          </IndexContent>
        ))}
      </div>
    </section>
  );
}
