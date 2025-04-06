import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default function AnotherPage() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <h1>Another Page</h1>
      <SearchBar items={items} setItems={setItems} />
      {/* The search bar will work here with the items from this page's state. */}
    </div>
  );
}
