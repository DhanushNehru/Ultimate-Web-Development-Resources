import React from "react";

export default function IndexContent({ title, icons, dis }) {

  return (
    <div className=" w-[500px] relative m-1">
      <div className="flex sm:flex-row flex-col justify-start items-start gap-3 mt-2  m-1">
        <div className="items-center flex justify-center sm:m-2 text-black ">
          {" "}
          {icons}
        </div>
        <h4 className="text-[16px] font-extrabold sm:text-[20px]  text-gray-800 font-manrope  ">
          {title}{" "}
        </h4>
      </div>

      <p className="sm:text-sm font-lora  sm:ml-11 md:ml-11 ml-1  text-xs from-stone-600 flex-wrap">
        {" "}
        {dis}
      </p>
    </div>
  );
}
