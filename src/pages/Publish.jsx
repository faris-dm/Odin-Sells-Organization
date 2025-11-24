import React from "react";
import DarkImages from "./images/odinImages.png";
import Logo from "./desk-lamp-svgrepo-com.svg";

import SYncImg from "./images/syOne.png";
import {
  FaFacebook,
  FaDiscord,
  FaMastodon,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import { ChartLine, Palette, FilePenLine } from "lucide-react";

const discord = "./images/discord.png";

function Publish() {
  const ContinerStyle = "text-white mx-6 lg:mx-[15%] md:mx-[5%]";
  const HeadingTitle = "text-4xl  text-white font-[600] py-5 lg:text-6xl";
  const HeadingText =
    "w-[86%] text-[#BCBCBC]  text-xl  md:text-2xl md:text-[23px] lg:w-[50%]";
  const gridSections = "my-4 flex md:block   gap-2 items-start py-4 px-3";
  const ImagesStyle = "w-10 h-10 gap-2  md:my-2 text-[#7c3aea]";
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
            <ChartLine className={ImagesStyle} />
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
            <Palette className={ImagesStyle} src={Logo} />
            <h5 className="text-lg text-[#bcbcbc]">
              {" "}
              <label className={LabelStyle}> Customization.</label> Control the
              look and feel of your site with themes, custom domains, password
              protection, and more.
            </h5>
          </div>
          <div className={gridSections}>
            <FilePenLine className={ImagesStyle} />
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
            <button className="text-white   w-[45%] md:w-[25%] md:text-2xl bg-[#7c3aed]   hover:bg-[7c3aea] rounded-xl text-xl  mb-13 py-5">
              Get Odin
            </button>
            {/*  title section */}
          </div>
          <div className="block md:flex items-center gap-4 ">
            <div className=" bg-[#333] m-2 rounded-lg p-3">
              <h2 className="text-xl font-normal text-[#fff] py-5">
                Join Us On Discord
              </h2>
              <p className="text-[#bcbcbc]  text-lg ">
                Get Help Ask question,meet other Odin user and Learn about their
                startup{" "}
              </p>
            </div>
            {/* frist grid */}

            <div className="bg-[#333]  rounded-lg p-3 mb-8 mt-6 ">
              <h2 className="text-xl font-normal text-[#fff] py-5 ">
                Discussion Forum
              </h2>
              <p className="text-[#bcbcbc] text-lg">
                Post feature request Report bags and explore with all
              </p>
            </div>
            {/* 2nd dev  */}

            <div className="bg-[#333] m-2 rounded-lg p-3">
              <h2 className="text-xl font-normal text-[#fff] py-5">
                Developer docs
              </h2>
              <p className="text-[#bcbcbc]  text-lg ">
                Learn how to bulid your own Odin using open API and
                Documantation
              </p>
            </div>
            {/* thrid dev */}

            {/* Last Grid section  */}
          </div>
          <div className=" md:grid grid-cols-2">
            <div className="grid grid-cols-2 my-10">
              {/*  uses flex */}
              <div>
                <h2 className="text-[#bcbcbc] mb-3  font-[500] text-[15px] ">
                  {" "}
                  Get started
                </h2>
                <h2 className="py-1 font-[500] text-[15px]">Download</h2>
                <h2 className="py-1 font-[500] text-[15px]">Pricing</h2>
                <h2 className="py-1 font-[500] text-[15px]"> Enterprise</h2>
                <h2 className="py-1 font-[500] text-[15px]">Account</h2>
              </div>
              {/*  Get Started end here */}
              <div>
                <h2 className=" text-[#bcbcbc] mb-3 ">Learn</h2>
                <h2 className="py-1 font-[500] text-[15px]"> Help</h2>
                <h2 className="py-1 font-[500] text-[15px]"> Developers</h2>
                <h2 className="py-1 font-[500] text-[15px]">Changelog </h2>
                <h2 className="py-1 font-[500] text-[15px]"> About</h2>
                <h2 className="py-1 font-[500] text-[15px]">Roadmap </h2>
                <h2 className="py-1 font-[500] text-[15px]"> Blog</h2>
              </div>
            </div>
            {/* Learn ends here */}
            <div className="grid grid-cols-2 my-4 ">
              <div>
                <h2 className=" text-[#bcbcbc] "> ODIN</h2>
                <h2 className="py-1 font-[500] text-[15px]">Sync</h2>
                <h2 className="py-1 font-[500] text-[15px]">Publish</h2>
                <h2 className="py-1 font-[500] text-[15px]">Canvas</h2>
                <h2 className="py-1 font-[500] text-[15px]">Mobile</h2>
                <h2 className="py-1 font-[500] text-[15px]">Web Clipper</h2>
                <h2 className="py-1 font-[500] text-[15px]">Overview</h2>
                <h2 className="py-1 font-[500] text-[15px]">Plugins</h2>

                {/* overview */}
              </div>

              <div>
                <h2 className="text-[#bcbcbc]"> Resources</h2>
                <h2 className="py-1 font-[500] text-[15px]">System Status </h2>
                <h2 className="py-1 font-[500] text-[15px]"> </h2>
                <h2 className="py-1 font-[500] text-[15px]">
                  {" "}
                  Licence overview
                </h2>
                <h2 className="py-1 font-[500] text-[15px]">
                  Terms of services
                </h2>
                <h2 className="py-1 font-[500] text-[15px]"> privacy Policy</h2>
                <h2 className="py-1 font-[500] text-[15px]"> Security</h2>

                {/*  solo */}
              </div>
              {/* <div>
                <h2>Community</h2>
                <h2> Join the community</h2>
                <h2>Discord </h2>
                <h2>Forum / 中文论坛 </h2>
                <h2> Merch store</h2>
                <h2>Brand guidelines</h2>
              </div> */}
            </div>

            {/* Odin ends Here */}
          </div>
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2 items-center">
              <img className="w-10 h-10" src={Logo} alt="" />
              <h2 className="font-[500] ">Odin</h2>
            </div>
            {/*  frist  Logo */}
            <div className="flex gap-4">
              <FaDiscord className="text-[#333] hover:text-[#7c3aed] cursor-pointer " />
              <FaFacebook className="text-[#333] hover:text-[#7c3aed] cursor-pointer " />
              <FaMastodon className="text-[#333] hover:text-[#7c3aed] cursor-pointer " />
              <FaGithub className="text-[#333] hover:text-[#7c3aed] cursor-pointer " />
              <FaTwitter className="text-[#333] hover:text-[#7c3aed] cursor-pointer " />
              <FaTelegram className="text-[#333] hover:text-[#7c3aed] cursor-pointer " />
              <FaYoutube className="text-[#333] hover:text-[#7c3aed] cursor-pointer " />
              <FaInstagram className="text-[#333] hover:text-[#7c3aed] cursor-pointer " />
            </div>{" "}
            <div>
              <p className="text-xs text-[#b0b0b0] cursor-pointer">
                {" "}
                &copy; 2025
              </p>
            </div>
            {/* second  */}
            {/* <div className="flex gap-2 items-center">
                <img className="w-10 h-10" src={Logo} alt="" />
                <h2>Odin</h2>
              </div> */}
            {/* <div className="flex">
                <div className="flex">
                  <FaDiscord />

                  <FaFacebook />
                  <FaMastodon />
                  <FaGithub />
                </div>
                <div className="flex">
                  <FaTwitter />
                  <FaTelegram />
                  <FaYoutube />
                  <FaInstagram className="text-[#333] hover:text-[#7c3aed] " />
                </div>
              </div> */}
            {/* <div>
                <p> &copy; 2025 Odin</p>
              </div> */}
          </div>
          {/*  final Links */}
        </div>
      </div>
    </>
  );
}

export default Publish;
