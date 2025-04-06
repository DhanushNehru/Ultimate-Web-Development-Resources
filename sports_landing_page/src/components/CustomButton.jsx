import React from 'react';
import state from '../store';
// import { snapshot } from 'valtio';
import  {useSnapshot} from "valtio"

export default function CustomButton({ title, customStyles, handleClick, type }) {
  const generateStyles = (type) => {
    const snap  = useSnapshot(state)
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button className={`px-2 py-2 flex-1 rounded-md ${customStyles}`} style={generateStyles(type)} onClick={handleClick}>
      {title}
    </button>
  );
}
