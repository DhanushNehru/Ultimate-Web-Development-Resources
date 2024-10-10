import React from "react";

const CursorPointer = (props) => {
  return (
    <div
      className={` z-[1000] bg-white fixed border rounded-full  mix-blend-difference translate-x-[-50%] translate-y-[50%] w-[42px]  h-[42px] `}
      style={{ left: props.x, top: props.y }}
    ></div>
  );
};

export default CursorPointer;