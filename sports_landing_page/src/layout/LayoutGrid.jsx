import React, { useState } from "react";
import { RiGlobalLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const LayoutGrid = () => {
  const [player, setPlayer] = useState([
    { id: 1, name: " India ", score: 8, team: "A" },
    { id: 1, name: " France ", score: 6, team: "A" },
    { id: 1, name: " USA ", score: 5, team: "B" },
    { id: 1, name: "  Japan", score: 3, team: "B" },
  ]);

  const incrementScore = (id) => {
    setPlayer((prevPlayer) => {
      return prevPlayer.map((player) => {
        if (player.id === id) {
          return { ...player, score: player.score + 1 };
        }

        return player;
      });
    });
  };
  return (
    <div className="container mx-auto p-4 bg-[#091e3bba] ">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <div className="bg-[#d5dff6] p-4 rounded-md ">
            <span className="flex p-1  mb-5 flex-row justify-between">
              <h5 className="text-xs   sm:text-[14px]  text-center   font-lora   text-neutral-700 flex justify-center items-center uppercase ">
                {" "}
                World cup
              </h5>
              <motion.div
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                className="flex-row "
              >
                <BsFillArrowRightCircleFill className="flex flex-row justify-end icon  hover:text-gray-400 bg-clip-text hover:cursor-pointer font-manrope  hover:scale-[1.04]  " />
                <RiGlobalLine className="flex flex-col justify-end hover:cursor-pointer font-manrope  hover:scale-[1.04]  hover:text-gray-400 icon " />
              </motion.div>
            </span>
            <div className="flex-row flex justify-between items-center m-1">
              <span className="flex-col">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Indian_Football_2020.svg/800px-Indian_Football_2020.svg.png"
                  className="w-12 h-12 rounded-full bg-white "
                />
                <h3 className="text-2xl p-1 font-semibold mb-3 pt-3 justify-start font-raleway ">
                  {" "}
                  India{" "}
                </h3>
              </span>
              <p className="text-lg text-gray-600  font-bruno-ace-sc"> VS</p>
              <span className="flex-row text-center items-center justify-center">
                {" "}
                <img
                  src="https://w7.pngwing.com/pngs/269/212/png-transparent-france-national-football-team-france-national-under-21-football-team-fifa-world-cup-france-flag-logo-france.png"
                  className="rounded-full w-12 h-12 ml-4"
                />
                <h3 className=" text-center text-2xl p-1 font-semibold mb-3 pt-3 justify-center font-raleway ">
                  {" "}
                  France{" "}
                </h3>
              </span>
            </div>

            <div className="flex-row justify-between flex">
              <p className="p-2 text-white capitalize  shadow-md  items-start rounded-full text-center font-raleway bg-[#313d64a2]">
                {" "}
                293/290
              </p>
              <button className="p-2 text-white capitalize  shadow-md  items-start rounded-full font-raleway bg-[#313d64a2] mr-4">
                {" "}
                290/290
              </button>
            </div>
          </div>
        </div>
 
        {/* right col */}

        <div className="md:w-1/2 p-4">
          <div className="bg-[#d5dff6] p-4 rounded-md ">
            <span className="flex p-1  mb-5 flex-row justify-between">
              <h5 className="text-xs   sm:text-[14px]  text-center   font-lora   text-neutral-700 flex justify-center items-center uppercase ">
                {" "}
                World cup
              </h5>
              <motion.div
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                className="flex-row "
              >
                <BsFillArrowRightCircleFill className="flex flex-row justify-end icon  hover:text-gray-400 bg-clip-text hover:cursor-pointer font-manrope  hover:scale-[1.04]  " />
                <RiGlobalLine className="flex flex-col justify-end hover:cursor-pointer font-manrope  hover:scale-[1.04]  hover:text-gray-400 icon " />
              </motion.div>
            </span>
            <div className="flex-row flex justify-between items-center m-1">
              <span className="flex-col">
                <img
                  src="https://cdn.gmtm.com/avatars/organizations/249002/c1015c5a-a29f-4360-b6c2-6ddc1bbd4e99"
                  className="w-12 h-12 rounded-full bg-white "
                />
                <h3 className="text-2xl p-1 font-semibold mb-3 pt-3 justify-start font-raleway ">
                  {" "}
                  USA
                </h3>
              </span>
              <p className="text-lg text-gray-600  font-bruno-ace-sc"> VS</p>
              <span className="flex-row text-center items-center justify-center">
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Japan_national_football_team_crest.svg/800px-Japan_national_football_team_crest.svg.png"
                  className="rounded-full w-12 bg-white h-12 ml-4"
                />
                <h3 className=" text-center text-2xl p-1 font-semibold mb-3 pt-3 justify-center font-raleway ">
                  {" "}
                  japan
                </h3>
              </span>
            </div>

            <div className="flex-row justify-between flex">
              <p className="p-2 text-white capitalize  shadow-md  items-start rounded-full text-center font-raleway bg-[#313d64a2]">
                {" "}
                32
              </p>
              <button className="p-2 text-white capitalize  shadow-md  items-start rounded-full font-raleway bg-[#313d64a2] mr-4">
                {" "}
                35
              </button>
            </div>
          </div>
        </div>
      </div>
{/* table */}
      <div className="p-4  dark:bg-gray-800">
        <div className=" mb-4">
          <h1 className="text-xl font-semibold  sm:text-xl   text-left ml-7 mt-6  mb-4 font-raleway  text-gray-700 uppercase  dark:text-gray-400">
            {" "}
            Player Records{" "}
          </h1>
          <table className="w-full h-full table-auto">
            <thead className="  dark:bg-gray-700 dark:text-gray-400">
              <tr className=" m-2 ">
                <th className=" border-stone-400 px-4 py-2 text-lg md:text-lg mb-2 md:mb-3 font-Fredoka text-white opacity-75">
                  {" "}
                  Player
                </th>
                <th className=" border-stone-400 px-4 py-2 text-lg md:text-xl mb-2 md:mb-3 text-white opacity-75">
                  {" "}
                  Current Score
                </th>
                <th className=" px-4 border-stone-400 py-2 text-lg md:text-xl mb-2 md:mb-3 font-Fredoka text-white opacity-75 ">
                  {" "}
                  Team
                </th>
              </tr>
            </thead>
            <tbody>
              {" "}
              {player.map((player) => (
                <tr key={player.id} className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <td className=" px-4 py-2 "> {player.name}</td>
                  <td className=" px-4 py-2 text-slate-400">{player.score} </td>
                  <td className=" px-4 py-2">{player.team} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LayoutGrid;
