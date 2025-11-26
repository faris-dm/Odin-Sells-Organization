import React, { useState } from "react";
import Logo from "./Logo.svg";
import { Menu, X } from "lucide-react";
import Lamp from "./desk-lamp-svgrepo-com.svg";

function NavBar() {
  const [NotClicked, nowClicked] = useState(false);
  const MenuClicked = () => {
    nowClicked(!NotClicked);
  };

  const style =
    "fixed top-0 left-0 w-full bg-[#0F0F0F] text-white  md:border-b  lg:border-b  z-1 px-10 lg:px-0 md:px-0 ";
  const GridStyles =
    "sm:grid md:grid lg:grid  grid-cols-2 mx-10 mb-6 border-b pb-3 border-[#b0b0b0]";
  const TextStyle =
    "text-xl text-white font-[600] hover:text-[#7C3AED] p-1 cursor-pointer";
  const AllSection =
    "flex items-center justify-between py-2 flex justify-between mx-10";
  const OdinHeading =
    "text-[25px] font-[500] text-white text-base/10 hover:text-[#7C3AED]";
  const DownSec = "text-normal font-[500] hover:text-[#7C3AED] p-[3px] ";
  return (
    <>
      {
        /* <img className="w-10 h-10 text-blue-500" src={Logo} alt="" /> */
        <nav className={style}>
          <div className={AllSection}>
            <div className="flex items-center gap-3 ">
              <img className="w-10 h-10" src={Lamp} alt="" />
              <h2 className={OdinHeading}>Odin</h2>
            </div>
            <div className="flex gap-4 hidden md:flex lg:flex  ">
              <h3 className="">Download</h3>

              <h3 className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
                Pricing
              </h3>
              <h3 className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
                Sync
              </h3>
              <h3 className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
                Enterprise
              </h3>
              <h3 className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
                Publish
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer  hidden md:flex lg:flex">
                Community
              </h3>{" "}
              <h3 className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer hidden md:flex lg:flex">
                Accounts
              </h3>
              <div onClick={MenuClicked}>
                {/* <Menu className="text-[#b0b0b0] text-lg font-[600] hover:text-white cursor-pointer md:hidden lg:hidden text-[20px]" /> */}

                {NotClicked ? (
                  <X className="text-[#b0b0b0] text-lg font-[600] hover:text-white cursor-pointer md:hidden lg:hidden text-[20px] " />
                ) : (
                  <Menu className="text-[#b0b0b0] text-lg font-[600] hover:text-white cursor-pointer md:hidden lg:hidden text-[20px] " />
                )}
              </div>
            </div>
          </div>
        </nav>
      }
      {NotClicked && (
        <div className=" translate-x-0 opacity-100 text-white mt-20 z-10 md:hidden lg:hidden transition duration-700 ease-in-out ">
          <div className={GridStyles}>
            <div>
              <h3 className={TextStyle}>Download</h3>
              <h3 className={TextStyle}>Sync</h3>
              <h3 className={TextStyle}>Pricing</h3>
              <h3 className={TextStyle}>Enterprise</h3>
            </div>
            {/* accounts */}

            <div className="">
              <h3 className={TextStyle}>Accounts</h3>
              <h3 className={TextStyle}>Publish</h3>
              <h3 className={TextStyle}>Plugins</h3>
              <h3 className={TextStyle}>Web Clipper</h3>
            </div>

            {/* Up pages */}
          </div>

          <div>
            {/*  down */}

            <p className="text-[#b0b0b0] mx-10 mb-3 text-normal">Learn more</p>
            <div className=" grid   grid-cols-2 mx-10 mb-10 ">
              <div>
                <h3 className={DownSec}> Help</h3>
                <h3 className={DownSec}> more</h3>
                <h3 className={DownSec}>Changelog </h3>
                <h3 className={DownSec}>Roadmap </h3>
                <h3 className={DownSec}>Merch store </h3>
              </div>
              {/* about */}
              <div>
                <h3 className={DownSec}>About</h3>
                <h3 className={DownSec}> Discod</h3>
                <h3 className={DownSec}> Community</h3>
                <h3 className={DownSec}>security</h3>
                <h3 className={DownSec}>Privacy</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
