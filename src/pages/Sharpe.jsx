import React from "react";
import images from "./images/screen.png";

function Sharpe() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 text-white">
        <div>{/* title */} Sharpen your thinking.</div>

        <div>
          {/* subtitle */} The free and flexible app for your private thoughts.
        </div>
        <div>
          {/* buttons */}

          <div> Get Odin for Window</div>
          <div>More Platform</div>
        </div>
        <div>
          <img src={images} alt="" />
        </div>
      </div>
    </>
  );
}

export default Sharpe;
