import React from "react";

export default function SportsIndex({ icons, title, dis }) {
  return (
    <div className=" w-[500px] relative m-2">
      <div className="flex sm:flex-row flex-col justify-start items-start gap-3 mt-7  m-1">
        <div className="items-center flex justify-center text-black  dark:text-slate-200 dark:peer-active:bg-slate-300   hover:bg-black active:bg-black  w-8 h-8 bg-slate-300 bg-opacity-40 hover:text-white   dark:bg-slate-600 rounded-full   glassmorphism   px-1 dark:bg-opacity-50 dark:active:text-slate-400  ">
          {" "}
          {icons}
        </div>
        <h4 className="text-[14px] font-extrabold sm:text-[20px]  text-gray-800 font-manrope   dark:text-slate-200 dark:peer-active:bg-slate-300 ml-3 flex-wrap  ">
          {title}{" "}
        </h4>
      </div>

      <p className="sm:text-sm font-lora  sm:ml-16 md:ml-16 ml-4  text-xs from-stone-600  dark:text-slate-400 dark:peer-active:bg-slate-400   flex flex-nowrap">
        {" "}
        {dis}
      </p>
    </div>
  );
}
