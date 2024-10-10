import React from "react";
import events from "../lib/events";
import EventContent from "./EventContent";
import Footer from "../pages/Footer/Footer";
export default function Events() {
  return (

    <> 
    <div id="events" className=" events flex-row grid overflow-hidden flex-wrap grid-cols-1 sm:grid-cols-1 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-9 mb-4 text-center  items-center p-6 ">
    {" "}
    {events.map((tour, index) => (
      <EventContent
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
      </EventContent>
    ))}
  </div>
<Footer />
  </>
  );
}
