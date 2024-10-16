import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function Communities() {
  return (
    <div className="relative grid lg:grid-cols-2  md:grid-cols-2  sm:grid-cols-1  bg-[#071325] dark:bg-slate-800  dark:bg-opacity-30 dark:shadow-sm">
      <div className="Bg-white  lg:p-16 p-6 mx-auto ">
        <h1 className=" lg:py-10 md:py-7 sm:py-5  font-raleway text-4xl sm:text-3xl  text-[#e8e4e4] uppercase">
          {" "}
          Boundary Bytes Cricket Acadamy Community
        </h1>
        <p className="font-manrope text-sm py-2  mx-auto mb-8 text-gray-200">
          {" "}
          "Create an expansive and engaging platform where you can host a
          multitude of diverse tournaments, leagues, and events to cater to the
          enthusiastic and dedicated members of your community, offering them a
          wide array of exciting and competitive opportunities."
        </p>
        <div className="flex flex-row  items-center justify-start gap-5 ">
          <a
            href="./contact"
            className=" mt-5  bg-orange-500 text-white font-bold py-3 px-6 rounded-sm font items-start justify-start  -xs-full-width hover:cursor-pointer font-manrope  hover:scale-[1.04]"
          >
            <button> Contact Now</button>
          </a>
          <a
            href="#contact"
            className="bg-[#fff] text-orange-500 font-bold py-3 px-6 rounded-sm font mt-4   -xs-full-width hover:cursor-pointer font-manrope  hover:scale-[1.04] "
          >
            <button className="   ">Find the Community</button>
          </a>
        </div>
        <div
          className="  flex-row  space-x-2 md:space-x-3 
 "
        >
          <div className="  inline-flex my-2  mt-6 py-3 flex-row gap-1">
            <h3 className="font-xl font-cinzel   font-bold text-center text-white sm:text-lg text-base ">
              {" "}
              Share:
            </h3>
            <a
              href=" "
              className="text-center justify-center flex items-center ml-3 "
            >
              {" "}
              <AiOutlineLinkedin className="text-white text-2xl"></AiOutlineLinkedin>
            </a>
            <a href="" className="text-center justify-center flex items-center">
              {" "}
              <MdOutlineWhatsapp className="text-white text-2xl"></MdOutlineWhatsapp>
            </a>
            <a
              href=" "
              className="text-center justify-center flex items-center"
            >
              {" "}
              <BsInstagram className="text-white text-xl"></BsInstagram>
            </a>
          </div>
        </div>
      </div>
      {/* left  */}

      <div className="max-w-[1000px] h-[500px]  w-full mx-auto relative  object-cover ">
        <img
          src="https://www.ecommunity.com/sites/default/files/styles/location_hero_full/public/services/2022-01/sports-basketball-hero.jpg?itok=EMN1O0ZU"
          className="w-full h-[100%] bg-cover object-cover  transition duration-500"
        />{" "}
      </div>

      {/* right */}
    </div>
  );
}
