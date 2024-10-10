import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

import { fadeAnimation, zoomIn } from "../../config/motion";

function NewspaperCard({ title, date, by, img, btn, link, points }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 p-4    flip-card ${
        isFlipped ? "flipped" : ""
      }`}
      onClick={handleClick}
    >
      <div
        className=" border  border-gray-50 dark:border-gray-700 border-opacity-20  flip-card-inner  dark:bg-slate-800  dark:bg-opacity-30 dark:border-opacity-20  rounded-lg p-2 shadow-sm  hover:shadow-md duration-500  "
        {...zoomIn}
      >
        <div className="relative flex justify-end  " > 
        <a href="./" className="mb-2  p-1   absolute justify-end flex items-end rounded-full">
          <BsArrowUpRight className=" hover:bg-black active:bg-black  justify-end flex items-end  w-6 h-6 bg-slate-300 bg-opacity-40 hover:text-white   dark:bg-slate-600 rounded-full  dark:text-white text-gray-200   glassmorphism   px-1 dark:bg-opacity-50 dark:active:text-slate-400 " />{" "}
        </a>
        <img src={img} alt="Newspaper" className="w-full h-40 object-cover" />
       
      
       </div>

        <div className="mt-3  gap-8" {...fadeAnimation}>
          <h6 className=" sm:text-[20px] text-[20px] text-sm font-Manrope  dark:text-gray-50   font-bold mt-1 text-gray-700  font-manrope leading-13 mx-1  ">
            {title}
          </h6>
        </div>
        <div className="mt-4 flex  gap-2 flex-row items-center ml-3  justify-between ">
          <p className="sm:text-sm font-lora items-center justify-center flex capitalize  text-xs  dark:text-slate-500 dark:bg-slate-950 first-letter: mb-2  ">
            {by}
          </p>
          <p className="top-0 text-xs flex text-gray-500 dark: "> {date}</p>
        </div>

        <div className=" top-0 flex flex-col  right-0  bg-gray-100 relative flip-card-back  dark:bg-slate-800 ">
          {" "}
          <h3 className="font-semibold text-gray-800  sm:text-lg text-md mb-6 dark:text-white ">{title} </h3>
          <p className="font-manrope sm:text-sm text-xs   text-slate-900  hover:text-gray-700   dark:text-slate-200 dark:active:text-slate-300     ">
            {" "} 
            {points}
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default NewspaperCard;
