import React from "react";

function Price() {
  return (
    <div>
      <div className="min-h-screen w-full bg-black py-10">
        {/* - transition-all: Animates the margin change
    - duration-700: Makes it move "slowly"
    - ease-in-out: Makes it move "smoothly"
  */}
        <div
          className="
    bg-[#1a1a1a] text-white p-8 rounded-xl border border-zinc-800
    transition-all duration-700 ease-in-out
    mx-[8%] 
    md:mx-[15%] 
    lg:mx-[20%]
  "
        >
          <h2 className="text-3xl font-bold mb-4">Responsive Margin</h2>
          <p className="text-zinc-400">
            Resize your browser window to see the margin change smoothly. The
            content width adjusts based on the percentage margins: 8% on mobile,
            15% on medium, and 20% on large screens.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Price;
