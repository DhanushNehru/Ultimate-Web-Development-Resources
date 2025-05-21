import React, { useRef, useState, useMemo } from "react";
import {PiMagnifyingGlassBold}  from "react-icons/pi"
export default function Search() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const filterItems = useMemo(() => {
    return items.filter(
      (item) => {
        return item.toLowerCase().includes(query.toLowerCase());
      },
      items,
      query
    );
  });
  const inputRef = useRef();
  function onSubmit(e) {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  }

  return (
    <div className=" mt-60 justify-between  flex items-center">
     
     <div className="flex flex-row   items-center justify-center ">
     <PiMagnifyingGlassBold className="w-14 icon "/> 
            <input className="bg-black/5 px-2 py-3 rounded-lg "
        value={query}
      
        type="search"
        onChange={(e) => setQuery(e.target.value)}
      
    /> 
       </div> 
       <div> 
       <form onSubmit={onSubmit} className="f ">
         <input ref={inputRef} type="text"  className="flex-col flex   "/>{" "}
        <button type="submit"> Add</button>
      </form>
       </div>
     
    
      {filterItems.map((item) => (
        <div> {item}</div>
      ))}
    </div>
  );
}
