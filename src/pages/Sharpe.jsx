import React from "react";
import images from "./images/screen.png";
import Logo from "./desk-lamp-svgrepo-com.svg";

function Sharpe() {
  const h2Text = "text-[#eee] text-[24px] font-[500] py-2";
  const H5_text = "text-[#bcbcbc] text-[24px]";
  return (
    <>
      <div className="mb-[10rem]  bg-[#0f0f0f]">
        <div className="grid grid-cols-1 items-center justify-center  my-3 lg:mx-[15%] md:mx-[5%] mt-[10%]  mx-10">
          <div
            className=" text-[70px] 
          lg:text-6xl md:text-4xl font-[500] text-[#EEEEEE] mb-4 mt-12  text-center "
          >
            {/* title */} Sharpen your thinking.
          </div>

          <div className=" block md:flex  items-center justify-between  gap-40 text-[#B6B6B6] text-4xl  font-[400] py-2 ">
            <div className=" text-2xl  w-[70%] text-center hidden md:block ">
              {" "}
              {/* subtitle */} The free and flexible app for your private
              thoughts.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 my-3 mb-40 md:mb-10 sm:flex-row sm:items-start sm:justify-start w-full sm:w-1/2 ">
            {/* Button 1: Always Visible */}
            <div className="bg-[#8B5CF3] text-xl font-[500] px-8 py-4 rounded-lg opacity-80 hover:opacity-100 cursor-pointer text-center">
              Get Odin for Window
            </div>

            {/* Button 2: Hidden on mobile, visible above sm */}
            <div className="hidden sm:block text-xl text-[#8B5CF6] hover:text-[#b0b0b0] font-500 cursor-pointer">
              More Platform
            </div>
          </div>
          <div className="mb-5">
            <img src={images} alt="" />
          </div>
        </div>
        <section className="block lg:flex justify-center items-center gap-8  my-3 lg:mx-[15%] md:mx-[5%]">
          <div className="mx-20 md:mx-10 flex-1">
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
                With <a href="#">thousands of plugins</a> and themes, you can
                shape Odin to fit your way of thinking{" "}
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
            {/*  third enshareds here */}

            {/* three text ends here  */}
          </div>

          <div className=" flex items-center justify-center gap-1 py-2 lg:py-0">
            {" "}
            <div className="">
              <img
                src={Logo}
                className=" w-50 h-50  md:w-50 md:h-50   my-[2rem] p-8 bg-[#292929] rounded-[20%] hover:scale-107  hover:bg-[#333] duration-4000 ease-in-out"
                alt=""
              />
              <div className="block text-center">
                <h4 className="text-white text-4xl font-[700] py-3">Odin</h4>
                <h6 className=" text-2xl text-white">Free without limit.</h6>
                <p className="text-[#8B5CF3] text-xl hover:text-white duration-400 ease-in-out  font-bold  ">
                  Download Now
                </p>
              </div>
            </div>
            {/*   the images */}
          </div>
        </section>
        {/*   className=" w-90 h-90  md:w-70 md:h-70  my-8 p-4 bg-[#292929] rounded-[20%] hover:scale-107  hover:bg-[#333] duration-4000 ease-in-out" */}

        {/* end */}
      </div>
    </>
  );
}

export default Sharpe;
