import React, { useState } from "react";
function NewItem({ title, date, by, img, points }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (

      <div
        className={`w-full  flex  flip-card  items-center justify-center  ${
          isFlipped ? "flipped" : ""
        }`}
        onClick={handleClick}
      >
        <div className="flip-card-inner items-center justify-center  "> 
   
          <img
            src={img}
            alt="image"
            className=" w-full object-cover h-[60%] flex-1 rounded-md "
          />
          <div className="mt-5  gap-8">
            <h6 className=" sm:text-[20px] text-[20px] text-sm font-Manrope  dark:text-gray-50   font-bold mt-1 text-gray-700  font-manrope leading-13 mx-1  ">
              {title}
            </h6>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 flex-row items-center ml-3  justify-between ">
            <p className="sm:text-sm font-lora items-center justify-center flex capitalize    ">
              {by}
            </p>
            <p className="text-xs flex text-gray-500 "> {date}</p>
          </div>
          <div className=" top-0  right-0 relative flip-card-back ">
            {" "}
            <p className="font-manrope text-slate-900  hover:text-gray-700 ">
              {" "}
              {points}
            </p>{" "}
          </div>
        </div>
    
        </div>
  );
}

export default NewItem;
