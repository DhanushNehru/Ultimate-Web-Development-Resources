import React from "react";
import Navbar from "../../components/CreateTournament/Navbar/Navbar";
import Events from "../../Routes/Events";

export default function NavigateEvents() {
  return (
    <div id="events" className="events">
      <Navbar />
      <Events />
    </div>
  );
}
