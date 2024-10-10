import React from "react";
import tournament from "../../lib/tournament";
import Footer from "../../pages/Footer/Footer";

const TournamentCard = ({
  title,
  icons,
  icons1,
  icons2,
  date,
  location,
  button,
  community,
  ppf,
  imgUrl,
}) => {
  return (
    <>
      <main id="tournament" className=" items-center">
        <div className="tournament  h-[41vh] mt-9   min-w-[340px]  bg-gray-50  dark:bg-slate-800 dark:bg-opacity-70 w-full flex-col  flex shadow-xl   ">
          <div className=" object-cover w-full flex-col   flex  ">
            <img src={imgUrl} className="h-[7rem] w-full object-cover" />
          </div>

          <div className="flex flex-row w-full h-full">
            <div className="cursor-pointer  flex flex-row items-center justify-items-center">
              <img
                src={ppf}
                className="   rounded-full h-12 w-14 flex items-center justify-between p-2 m-1 object-cover flex-col "
              />
              <h2 className=" sm:text-[14px]  md:text-[17px] lg:text-[20x] font-fredoka text-gray-900  dark:text-white w-full">
                {" "}
                {title}
              </h2>{" "}
            </div>
          </div>

          {/* 1 st */}
          <div className="flex flex-row w-full ">
            <div className="cursor-pointer flex flex-row w-full h-full items-center justify-items-center">
              <p className="gap-2 dark:text-gray-300  icons-mid text-gray-600 icon-size p-2 text-2xl ">
                {" "}
                {icons}
              </p>
              <h2 className=" sm:text-sm  text-left ml-7 text-xs font-fredoka text-gray-600  dark:text-slate-300  w-full">
                {" "}
                {date}
              </h2>{" "}
            </div>
          </div>
          {/* 2nd */}
          <div className="flex flex-row w-full ">
            <div className="cursor-pointer flex flex-row w-full h-full items-center justify-items-center">
              <p className="gap-2  icons-mid text-gray-600  dark:text-gray-300 icon-size p-2 text-2xl ">
                {" "}
                {icons1}
              </p>
              <h2 className=" sm:text-sm  text-left ml-7 text-xs font-fredoka text-gray-600 dark:text-slate-300 w-full">
                {" "}
                {community}
              </h2>{" "}
            </div>
          </div>
          {/* 3rd */}
          <div className="flex flex-row w-full ">
            <div className="cursor-pointer flex flex-row w-full h-full items-center justify-items-center">
              <p className="gap-2  icons-mid text-gray-600 dark:text-gray-300 icon-size p-2 text-2xl ">
                {" "}
                {icons2}
              </p>
              <h2 className=" sm:text-sm  text-left ml-7 text-xs font-fredoka text-gray-600 dark:text-slate-300 w-full">
                {" "}
                {location}
              </h2>{" "}
            </div>
          </div>

          <a className="  mb-3 mt-3 px-3 py-2 bg-opacity-90 flex items-center justify-center  ">
            <button className=" p-3 mx-2 w-full  text-white capitalize  shadow-md bg-orange-500">
              {button}{" "}
            </button>
          </a>
        </div>
      </main>
    </>
  );
};

export default function Tournament() {
  return (
    <> 
    <div className=" flex-row grid overflow-hidden flex-wrap grid-cols-1 sm:grid-cols-1 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-9 mb-4 text-center  items-center p-6 ">
      {" "}
      {tournament.map((tour, index) => (
        <TournamentCard
          key={index}
          title={tour.title}
          imgUrl={tour.imgUrl}
          ppf={tour.ppf}
          icons={tour.icons}
          date={tour.date}
          icons1={tour.icons1}
          community={tour.community}
          icons2={tour.icons2}
          location={tour.location}
          button={tour.button}
          className=" gap-7 mb-3 text-center  flex justify-center items-center absolute text-white "
        >
          {" "}
          {}
        </TournamentCard>
      ))}
    </div>
<Footer />
    </>
  );
}
