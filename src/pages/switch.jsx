import React from "react";

function Switch() {
  return (
    <>
      <label className="relative inline-block w-[3.5em] h-[20px] max-[490px]:w-[38px] max-[490px]:h-[19px]">
        <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
        <span className="absolute inset-0 bg-[#f7f9fb] rounded-full transition-all duration-100 before:content-[''] before:absolute before:h-[.9em] before:w-[1em] before:rounded-full before:left-[0.3em] before:bottom-[0.3em] before:bg-[#333] before:transition-all peer-checked:bg-[#22d3ee] peer-checked:before:translate-x-[1.8em] max-[490px]:before:h-[0.7em] max-[490px]:before:w-[0.7em] max-[490px]:before:left-[0.2em] max-[490px]:before:bottom-[0.2em] max-[490px]:peer-checked:before:translate-x-[1.2em]" />
      </label>
    </>
  );
}

export default Switch;
