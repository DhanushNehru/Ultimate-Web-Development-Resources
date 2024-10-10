import React from "react";
import NewspaperCard from "../FlipCard/NewpaperCard"; // Import the NewspaperCard component
import { GoArrowRight } from "react-icons/go";
const newspaperData = [

  {
    title: "2023 World cup 2023",
    iconBg: "#383E56",
    date: "22/12/2023",
    by: "Sports Desk",

    points: ` "Cricket World Cup: Australia’s Ian Healy thinks Team India are ‘overdoing its energy and intensity"`,

    img: "https://i.pinimg.com/564x/4f/bc/dd/4fbcddec21a8c5a07763468995d6f0a9.jpg",
    btn: "Read more " 

   , icon: <GoArrowRight />
  },

  {
    title: "The Artistry of Slam Dunks",
    iconBg: "#383E56",
    date: "23/12/2023 ",
    by: " Apratim ",
    img: "https://i.pinimg.com/564x/08/db/5b/08db5be250d2e8a5224313e60f324ca1.jpg",

    points: `"How to qualify for basketball at Paris 2024. The Olympics qualification system explained ",`,
    btn: "Read more "

    , icon: <GoArrowRight />
  },
  {
    title: "Athletic boxer punching ",
    iconBg: "#383E56",
    date: "22/11/2023",
    img: "https://i.pinimg.com/474x/3a/21/99/3a2199a59390c69a071337c5db93a654.jpg",

    points: `"Sports encourage physical fitness and mental well-being, while also serving as a universal language that unites diverse cultures, fostering a sense of belonging and camaraderie"`,
    by: "Jonathan",
    btn: "Read more "

    , icon: <GoArrowRight />
  },
  {
    title: "National Basketball Game ",
    iconBg: "#383E56",
    img: "https://i.pinimg.com/564x/cb/cb/0c/cbcb0c07343fe842714bacd5efe331c2.jpg",
    date: "22/11/2023",
    by: "alate academy ",

    points: [
      `"ICC World Cup 2023: Brydon Carse Replaces Injured Reece Topley in England Squad’",`,
    ],
    btn: "Read more "

    , icon: <GoArrowRight />
  },
];

function NewspaperGrid() {
  return (
    <div className="relative w-full h-full mt-9 px-8 flip-card-inner z-10 ">
      <p className="text-sm font-lora uppercase mt-10 text-neutral-500  dark:text-slate-300  flex justify-center items-center  ">
        Discover More Interesting News
      </p>
      <h2 className="text-[28px] font-extrabold sm:text-[3rem] mt-4 text-black  dark:text-white uppercase font-Manrope leading-13 text-center">
        Latest <span className="text-orange-500  ">News</span>
      </h2>

    <div className="flex flex-wrap  items-center justify-center  -mr-5   flip-card-inner">
      {newspaperData.map((newspaper, index) => (
        <NewspaperCard key={index} {...newspaper} />
      ))}
    </div>
    </div> 
  );
}

export default NewspaperGrid;
