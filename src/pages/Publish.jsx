import React from "react";
import DarkImages from "./images/odinImages.png";
import Logo from "./desk-lamp-svgrepo-com.svg";

function Publish() {
  return (
    <>
      <div className="text-white mx-6 lg:mx-[15%] md:mx-[5%] ">
        <div className=" mb-[1rem] mt-[4rem] my-10">
          <h2 className="text-4xl  text-white font-[600] py-5 lg:text-6xl">
            Publish instantly.
          </h2>
          <p className="w-[86%] text-[#BCBCBC]  text-xl lg:text-2xl lg:w-[50%]">
            Turn your notes into an online wiki, knowledge base, documentation,
            or digital garden.
            <p className="text-[#7c3aed] cursor-pointer">
              <a href="#"> Learn more.</a>
            </p>
          </p>
          {/*   heading and  text ends here */}
        </div>

        <div className="mb-30 lg:mb-10 mt-5 md:flex">
          <div className="my-4 flex md:block   gap-2 items-start py-4 px-2">
            <img className="w-10 h-10 gap-2  md:my-2" src={Logo} alt="" />
            <h5 className="text-lg text-[#bcbcbc]">
              {" "}
              <label className="text-white font-bold  md:block">
                Seamless editing.{" "}
              </label>{" "}
              <label htmlFor="">
                {" "}
                Publish your notes instantly from the Obsidian app, and make it
                easy for readers to explore your web of ideas.
              </label>
            </h5>
          </div>
          {/*  2nd dev */}
          <div className="my-4 flex  md:block gap-2 items-start px-3 py-4">
            <img className="w-10 h-10 gap-2  md:my-2 " src={Logo} alt="" />
            <h5 className="text-lg text-[#bcbcbc]">
              {" "}
              <label className="text-white font-bold md:block ">
                {" "}
                Customization.
              </label>{" "}
              Control the look and feel of your site with themes, custom
              domains, password protection, and more.
            </h5>
          </div>
          <div className="my-4 flex md:block gap-2 items-start px-3 ">
            <img className="w-10 h-10 gap-2 md:my-2" src={Logo} alt="" />
            <h5 className="text-lg text-[#bcbcbc]">
              {" "}
              <label className="text-white font-bold md:block">
                {" "}
                Optimized for performance
              </label>
              . Obsidian Publish sites are fast, mobile-friendly, and optimized
              for SEO, no configuration required.
            </h5>
          </div>
          {/*  this contain  all the componets  with  grid */}
        </div>

        <div className=" mb-10">
          {" "}
          <img className="rounded-xl cursor-pointer " src={DarkImages} alt="" />
        </div>
      </div>
    </>
  );
}

export default Publish;
