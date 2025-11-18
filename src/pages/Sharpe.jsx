import React from "react";
import images from "./images/screen.png";
import Logo from "./desk-lamp-svgrepo-com.svg";

function Sharpe() {
  const h2Text = "text-[#eee] text-[24px] font-[500] py-2";
  const H5_text = "text-[#bcbcbc] text-[24px]";
  return (
    <>
      <div>
        {/* start  [&>*]:mx-10 md:[&>*]:mx-20 lg:[&>*]:mx-50  flex flex-col items-left justify-center gap-4 text-white  [&>*]:mx-40 */}
        <div className="  grid grid-cols-1 items-center justify-center  lg:mx-[15%] md:mx-[5%] ">
          <div className="text-6xl font-[500] text-[#EEEEEE] mb-4 mt-12 md:text-yellow-500 lg:text-green-600">
            {/* title */} Sharpen your thinking.
          </div>

          <div className="flex  items-center justify-between  gap-40 text-[#B6B6B6] text-4xl font-[400] py-2 ">
            <div className="  w-[70%]">
              {" "}
              {/* subtitle */} The free and flexible app for your private
              thoughts.
            </div>
            <div> </div>
          </div>
          <div className="flex items-center  w-50% gap-4 my-3  mb-8">
            {/* buttons */}

            <div className="bg-[#8B5CF3] text-xl font-[500] px-8 py-4 rounded-lg  opacity-80 hover:opacity-100">
              {" "}
              Get Odin for Window
            </div>
            <div className="text-xl text-[#8B5CF6] hover:text-[#b0b0b0] font-500">
              More Platform
            </div>
          </div>
          <div className="mb-5">
            <img src={images} alt="" />
          </div>
        </div>
        <section className=" block lg:flex md:block justify-around  items-center gap-8 lg:mx-[10%] md:mx-[7%]">
          <div className="mx-20 flex-1">
            <div className="border-b py-4 border-[#bcbcbc]">
              {" "}
              <h2 className={h2Text}>Your thoughts are yours.</h2>
              <h5 className={H5_text}>
                Odin stores notes privately on your device, so you can access
                them quickly, even offline. No one else can read them, not even
                us. Your mind is unique.
              </h5>
            </div>
            {/*  frist ends here */}
            <div className="border-b py-4 border-[#bcbcbc]">
              <h2 className={h2Text}>Your mind is unique.</h2>
              <h5 className={H5_text}>
                {" "}
                With thousands of plugins and themes, you can shape Odin to fit
                your way of thinking{" "}
              </h5>
            </div>
            {/*  second ends here */}
            <div className="">
              {" "}
              <h2 className={h2Text}>Your knowledge should last.</h2>
              <h5 className={H5_text}>
                Odin uses open file formats, so you're never locked in. You own
                your data for the long term.
              </h5>
            </div>
            {/*  third ends here */}

            {/* three text ends here  */}
          </div>

          <div className=" flex-1  items-center justify-center gap-5 py-5">
            {" "}
            <img
              src={Logo}
              className="w-100 h-100 md:w-60 md:h-60 text-center m-4 p-4 bg-[#292929] rounded-[60%] hover:scale-107  hover:bg-[#333] duration-4000 ease-in-out"
              alt=""
            />
            {/*   the images */}
          </div>
        </section>

        {/* end */}
      </div>
    </>
  );
}

export default Sharpe;
