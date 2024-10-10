import React from "react";

export default function TournamentPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Tournament Page</h1>

      {/* Image Section */}
      <section className="mb-4 md:mb-0">
        <img
          src="tournament-image.jpg"
          alt="Tournament Image"
          className="w-full md:max-h-[30rem] object-cover rounded-lg shadow-md"
        />
      </section>

      {/* Registration Details Section */}
      <section className="bg-gray-200 p-4 md:p-8 rounded-lg shadow-md md:flex md:space-x-4 md:overflow-hidden">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold">Registration Details</h2>
          <p className="mt-2 text-gray-600">
            Here, you can provide information about the tournament, such as dates, rules, and more.
          </p>
        </div>

        <div className="md:w-1/2 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Tournament By</h3>
          <p className="text-gray-600">Organizer Name</p>
        </div>
      </section>

      {/* Registration Button Section */}
      <section className="mt-4">
        <button className="block w-full p-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Register Now
        </button>
      </section>
    </div>
  );
}
