import React from "react";
import Logo from "./Logo.svg";
import Lamp from "./desk-lamp-svgrepo-com.svg";

function NavBar() {
  return (
    <>
      {
        /* <img className="w-10 h-10 text-blue-500" src={Logo} alt="" /> */
        <nav className="fixed top-0 left-0 w-full bg-[#0F0F0F] text-white">
          <div className="flex items-center justify-between py-5 mx-5">
            <div className="flex items-center gap-3">
              <img className="w-20 h-20" src={Lamp} alt="" />
              <h2 className="text-xl font-[700] text-white text-base/10 hover:text-[#7C3AED]">
                {" "}
                Odin
              </h2>
            </div>

            <div className="flex gap-4 hidden md:flex lg:flex  ">
              <h3 className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
                Download
              </h3>
              <h3 className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
                Dowmload
              </h3>
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
              <h3 className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer md:hidden lg:hidden text-[20px]">
                &#9776;
              </h3>
            </div>
          </div>
        </nav>
      }
    </>
  );
}

export default NavBar;

//    <nav className=" fixed top-0 left-0 w-full bg-[#0F0F0F] text-white">
//     <div className="flex items-center gap-3 bg-[#0F0F0F] mx-[10%] py-2">
//       <img className="w-20 h-20" src={Lamp} alt="" />
//       <h2 className="text-xl font-[700] text-white text-base/10 hover:text-[#7C3AED]">
//         Odin
//       </h2>

//       <div className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
//         Download
//       </div>
//       <div className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
//         Pricing
//       </div>
//       <div
//         className="text-[#b0b0b0] font-[600] hover:text-white
//         cursor-pointer"
//         Sync
//       >
//         Sync
//       </div>
//       <div className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
//         Publish
//       </div>
//       <div className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
//         Enterprise
//       </div>
//       <div className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
//         Community
//       </div>
//       <div className="text-[#b0b0b0] font-[600] hover:text-white cursor-pointer">
//         Accoounts
//       </div>
//     </div>
//   </nav>
