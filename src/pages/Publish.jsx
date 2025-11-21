import React from "react";
import DarkImages from "./images/odinImages.png";
import Logo from "./desk-lamp-svgrepo-com.svg";

function Publish() {
  const ContinerStyle = "text-white mx-6 lg:mx-[15%] md:mx-[5%]";
  const HeadingTitle = "text-4xl  text-white font-[600] py-5 lg:text-6xl";
  const HeadingText =
    "w-[86%] text-[#BCBCBC]  text-xl  md:text-2xl md:text-[23px] lg:w-[50%]";
  const gridSections = "my-4 flex md:block   gap-2 items-start py-4 px-3";
  const ImagesStyle = "w-10 h-10 gap-2  md:my-2";
  const LabelStyle = "text-white font-bold  md:block";
  const ScreenImages = "rounded-xl cursor-pointer ";
  const ScreenText = "text-center text-[#bcbcbc]  font-normal py-8";
  return (
    <>
      <div className={ContinerStyle}>
        <div className=" mb-[1rem] mt-[4rem] my-10">
          <h2 className={HeadingTitle}>Publish instantly.</h2>
          <p className={HeadingText}>
            Turn your notes into an online wiki, knowledge base, documentation,
            or digital garden.
            <label className="text-[#7c3aed]  block md:inline cursor-pointer">
              <a href="#"> Learn more.</a>
            </label>
          </p>
          {/*   heading and  text ends here */}
        </div>

        <div className="mb-30 lg:mb-10 mt-5 md:flex">
          <div className={gridSections}>
            <img className={ImagesStyle} src={Logo} alt="" />
            <h5 className="text-lg text-[#bcbcbc]">
              {" "}
              <label className={LabelStyle}>Seamless editing. </label>{" "}
              <label htmlFor="">
                {" "}
                Publish your notes instantly from the Obsidian app, and make it
                easy for readers to explore your web of ideas.
              </label>
            </h5>
          </div>
          {/*  2nd dev */}
          <div className={gridSections}>
            <img className={ImagesStyle} src={Logo} alt="" />
            <h5 className="text-lg text-[#bcbcbc]">
              {" "}
              <label className={LabelStyle}> Customization.</label> Control the
              look and feel of your site with themes, custom domains, password
              protection, and more.
            </h5>
          </div>
          <div className={gridSections}>
            <img className={ImagesStyle} src={Logo} alt="" />
            <h5 className="text-lg text-[#bcbcbc]">
              {" "}
              <label className={LabelStyle}> Optimized for performance</label>.
              Obsidian Publish sites are fast, mobile-friendly, and optimized
              for SEO, no configuration required.
            </h5>
          </div>
          {/*  this contain  all the componets  with  grid */}
        </div>

        <div className=" mb-10">
          {" "}
          <img className={ScreenImages} src={DarkImages} alt="" />
          <p className={ScreenText}>
            {" "}
            Explore the{" "}
            <a className="underline hover:text-[#7c3aed]" href="#">
              Odin Help
            </a>{" "}
            site, powered by
            <a className=" underline pl- hover:text-[#7c3aed]" href="#">
              Odin Publish.
            </a>
          </p>
        </div>
        <div>
          <div className="text-center">
            <p
              className="text-4xl md:text-5xl font-[500] text-white pb-7"
              md:pb-10
            >
              It's your time to shine.
            </p>
            <button className=" text-white   w-[45%] md:w-[25%] md:text-2xl bg-[#7c3aed]   hover:bg-[7c3aea] rounded-xl text-xl  mb-13 py-5">
              Get Odin
            </button>
            {/*  title section */}
          </div>
          <div className="block md:flex items-center gap-4 ">
            <div className=" bg-[#333] m-2 rounded-lg p-3 my-5">
              <h2 className="text-xl font-normal text-[#fff] py-5">
                Join Us On Discord
              </h2>
              <p className="text-[#bcbcbc]  text-lg ">
                Get Help Ask question,meet other Odin user and Learn about their
                startup{" "}
              </p>
            </div>
            {/* frist grid */}

            <div className="bg-[#333] m-2 rounded-lg p-3  my-5">
              <h2 className="text-xl font-normal text-[#fff] py-5 ">
                Discussion Forum
              </h2>
              <p className="text-[#bcbcbc]  text-lg">
                Post feature request Report bags and explore with all
              </p>
            </div>
            {/* 2nd dev  */}

            <div className="bg-[#333] m-2 rounded-lg p-3 my-5">
              <h2 className="text-xl font-normal text-[#fff] py-5">
                Developer docs
              </h2>
              <p className="text-[#bcbcbc]  text-lg ">
                Learn how to bulid your own Odin using open API and
                Documantation{" "}
              </p>
            </div>
            {/* thrid dev */}

            {/* Last Grid section  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Publish;
