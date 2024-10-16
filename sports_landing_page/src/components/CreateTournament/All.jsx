import React from "react";

export default function All() {
  return (
    <section>
      <div>
        <div className="flex flex-row   items-center justify-center ">
          <PiMagnifyingGlassBold className="w-14 icon " />
          <input
            className="bg-black/5 px-2 py-3 rounded-lg "
            value={query}
            type="search"
            onChange={(e) => setQuery(e.target.value)}
          />{" "}
        </div>
      </div>
    </section>
  );
}
