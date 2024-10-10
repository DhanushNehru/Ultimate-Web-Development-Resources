import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiGameFill } from "react-icons/ri";
import { ImTwitch } from "react-icons/im";
export default function Footer() {
  return (
    <div className=" w-full h-full  bg-[#071325] py-6  cursor-pointer  ">
      <div className="mx-auto w-full max-w-screen-xl   pt-20  ">
        <div className="grid grid-cols-1  sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-4  gap-4  px-4  py-6  lg:py-8   ">
          <div className=" my-2 items-center  ">
            <h1 className="text-white  text-2xl  font-BrunoAceSc  flex justify-around   md:justify-start lg:justify-start items-center ">
              {" "}
              Boundary Bytes Cricket Acadamy{" "}
            </h1>
            <div className="flex flex-row text-white pt-5   justify-center md:justify-start lg:justify-start items-center cursor-pointer backdrop-filter gap-3 ">
              {" "}
              <BiLogoInstagramAlt />
              <AiOutlineLinkedin />
              <AiOutlineYoutube />
              <RiGameFill />
              <ImTwitch />
            </div>
          </div>

          <div>
            <h2 className="font-Raleway text-white mb-4 flex justify-around items-center sm:justify-start  font-bold uppercase   ">
              {" "}
              Explore
            </h2>
            <ul className="text-gray-300 text-sm   ">
              <li className="mb-1 flex justify-around items-center sm:justify-start  ">
                <a href="#" className="hover:text-white ">
                  {" "}
                  Tournament
                </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="#" className="hover:text-white">
                  {" "}
                  Events
                </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="#" className="hover:text-white">
                  {" "}
                  Community
                </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="#" className="hover:text-white">
                  {" "}
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-Raleway text-white mb-4 flex justify-around items-center sm:justify-start  font-bold uppercase  ">
              {" "}
              Resource
            </h2>
            <ul className="text-gray-400  text-sm  ">
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="./home" className="hover:text-white ">
                  {" "}
                  API
                </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="./style" className="hover:text-white">
                  {" "}
                  Terms
                </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start  ">
                <a href="#contact" className="hover:text-white ">
                  {" "}
                  Privacy
                </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="./service" className="hover:text-white ">
                  {" "}
                  Basis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-Raleway text-white mb-4 flex justify-around items-center sm:justify-start font-bold uppercase  ">
              {" "}
              Get in Touch
            </h2>
            <ul className="text-gray-400 text-sm ">
              <li className="mb-1 flex justify-around items-center sm:justify-start  ">
                <a href="#" className="hover:text-white ">
                  {" "}
                </a>
              </li>
              <li className="mb-1  flex justify-around items-center sm:justify-start ">
                <a href="#" className="hover:text-white ">
                  {" "}
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="#" className="hover:text-white">
                  {" "}
                  Boundary Bytes Cricket Acadamy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
