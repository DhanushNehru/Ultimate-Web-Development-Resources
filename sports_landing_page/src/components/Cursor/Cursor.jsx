import React, { useEffect, useState } from "react";
import CursorPointer from "./CursorPointer";

export default function Cursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [size, setSize] = useState(32);

  useEffect(() => {
    const handleMouseMovement = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMovement);
    return () => {
      document.removeEventListener("mousemove", handleMouseMovement); // Corrected removeEventListener
    };
  }, []); // Removed x and y from the dependency array

  return (
    <div>
      {/* JSX content here */}

      <div style={{ position: "absolute", left: x, top: y }}>
        <h1> </h1>
     
      </div>
      <CursorPointer x={x} y={y}/>
      <h1> </h1>
    </div>
  );
}