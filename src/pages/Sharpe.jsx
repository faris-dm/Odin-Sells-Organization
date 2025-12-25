import React from "react";
import images from "./images/screen.png";
import Logo from "./desk-lamp-svgrepo-com.svg";

function Sharpe() {
  const h2Text = "text-[#eee] text-[24px] font-[500] py-2";
  const H5_text = "text-[#bcbcbc] text-[24px]";
  return (
    <>
      <div className="mb-[10rem]  bg-[#0f0f0f]">
        {/* Parent Container: Centers everything by default, switches to Left at md */}
        {/* Parent Container */}
        <div className="flex flex-col items-center md:items-start justify-center my-3 lg:mx-[15%] md:mx-[10%] mt-[10%] mx-6">
          {/* Main Heading: Added leading-tight and py-6 */}
          <h1
            className="text-[50px] lg:text-7xl md:text-5xl font-medium text-[#EEEEEE] 
                 text-center md:text-left 
                 leading-[1.1] py-8 md:py-10"
          >
            Sharpen your <br className="md:hidden" /> thinking.
          </h1>

          {/* Subtitle: Added mb-10 for spacing */}
          <p
            className="hidden md:block text-[#B6B6B6] text-xl lg:text-2xl font-normal 
                md:text-left max-w-[600px] mb-10 leading-relaxed"
          >
            The free and flexible app for your private thoughts.
          </p>

          {/* Buttons Container: Added gap-8 to prevent clashing */}
          <div className="flex flex-col items-center sm:flex-row md:justify-start gap-8 w-full mb-20">
            <button
              className="bg-[#8B5CF3] text-xl font-medium px-10 py-5 rounded-lg 
                       opacity-90 hover:opacity-100 transition-all transform hover:scale-105 cursor-pointer"
            >
              Get Odin for Windows
            </button>

            <button className="hidden sm:block text-xl text-[#8B5CF6] hover:text-[#b0b0b0] font-medium cursor-pointer">
              More Platforms
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full mt-10">
            <img
              src={images}
              alt="App Preview"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
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
                <p className="text-[#8B5CF3] text-xl hover:text-white duration-400 ease-in-out  font-bold">
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
