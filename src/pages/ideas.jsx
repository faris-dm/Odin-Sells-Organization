import React from "react";
import Switch from "./switch";
import { Settings, Clock, Users } from "lucide-react";
import SYncImg from "./images/syOne.png";

function Ideas() {
  const gridSections = "my-4 flex md:block   gap-2 items-start py-4 px-3";
  const syncSections = "my-4 flex    gap-2 items-start py-4 px-3";

  const ImagesStyle = "w-10 h-10 gap-2  md:my-2 text-[#7c3aea]";
  return (
    <>
      <div className="text-white  md:px-[5%]  bg-[#0f0f0f]  lg:px-[5%] ">
        <div className=" mx-[15%]   m-5    lg:w-[55%] ">
          <h2 className=" text-[#EEEEEE] text-5xl py-5 font-semibold">
            {" "}
            Spark ideas.
          </h2>
          <p className="text-lg  md:text-xl text-[#BCBCBC]  text-left ">
            From personal notes to journaling, knowledge bases, and project
            management, Obsidian gives you the tools to come up with ideas and
            organize them.
          </p>
        </div>
        {/* grid cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-[5%] lg:px-[10%] w-full">
          {/* CARD 1: LINKS WITH FLOATING MENU */}
          <div className="bg-[#242424] p-6 rounded-xl flex flex-col h-full overflow-hidden">
            <h4 className="text-lg font-bold">Links</h4>
            <p className="text-[18px] text-[#BCBCBC] font-semibold mb-10">
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>

            <div className="bg-[#171717] text-sm p-4 rounded-xl relative min-h-[400px] flex-grow">
              <div className="text-normal font-normal px-2 md:px-6">
                <div className="py-2">
                  In{" "}
                  <a
                    className="text-[#7c3aed] px-1 underline hover:text-[#7c3aea]"
                    href="#"
                  >
                    Meditations on First Philosophy
                  </a>
                  the philosopher René Descartes describes a series of doubts...
                </div>
                <ul className="list-disc mx-5">
                  <li className="text-[#7c3aea] underline">[thin]</li>
                </ul>
                <p className="mt-2">
                  he discusses the value of Knowledge in the life related to
                  mind
                </p>
              </div>

              {/* FLOATING MENU - Fixed to be responsive inside the card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#262626] py-2 rounded-lg border border-[#404040] shadow-xl">
                <div className="px-4 py-1 text-sm hover:bg-[#404040] rounded-lg mx-1">
                  I <strong>think</strong> therefore i am
                </div>
                <div className="px-4 py-1 text-[16px] hover:bg-[#404040] rounded-lg mx-1">
                  just <strong>think</strong> about it
                </div>
                <div className="px-4 py-1 hover:bg-[#404040] rounded-lg mx-1">
                  <p className="text-[16px]">
                    <strong>Thinking</strong> fast & slow
                  </p>
                  <p className="text-xs text-gray-400">Books/</p>
                </div>
                <div className="px-4 py-1 hover:bg-[#404040] rounded-lg mx-1">
                  the <strong>Thing</strong>
                  <p className="text-xs text-gray-400">Movies/</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: LINKS SIMPLE */}
          <div className="bg-[#242424] p-6 rounded-xl flex flex-col h-full">
            <h4 className="text-lg font-[700]">Links</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10">
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div className="bg-[#171717] text-sm p-4 rounded-xl flex-grow min-h-[200px]">
              <p className="px-4 md:px-6 opacity-80">
                In Meditations on First Philosophy the philosopher René
                Descartes describes a series of doubts about the nature of
                reality...
              </p>
            </div>
          </div>

          {/* CARD 3: PLUGINS */}
          <div className="bg-[#242424] p-6 rounded-xl flex flex-col h-full">
            <h4 className="text-lg font-[700]">Plugins</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10">
              Space with thousands of plugins and our open API, it is to tailor
              Odin to fit your personal workflow.
              <a className="text-[#7c3aea] cursor-pointer ml-1" href="#">
                Learn More
              </a>
            </p>
            <div className="bg-[#171717] text-sm p-4 rounded-xl flex-grow min-h-[150px]">
              {/* Content for Plugins goes here */}
            </div>
          </div>

          {/* CARD 4: COMMUNITY PLUGINS WITH SWITCHES */}
          <div className="bg-[#242424] p-6 rounded-xl flex flex-col h-full">
            <h4 className="text-lg font-[700]">Links</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10">
              Visualize the relationships between your notes. Find hidden
              patterns in your thinking.
            </p>
            <div className="bg-[#171717] text-sm p-6 rounded-xl flex-grow">
              <h2 className="font-bold text-base mb-4">Community Plugins</h2>
              <div className="space-y-4">
                {/* Switch Items */}
                {[
                  {
                    name: "Calendar",
                    author: "Lima cain",
                    desc: "Calendar view for your daily notes",
                  },
                  {
                    name: "Kanban",
                    author: "Matthew Meyers",
                    desc: "Markdown-backed kanban boards",
                  },
                  {
                    name: "Outliner",
                    author: "Viacheslav cain",
                    desc: "Advanced outliner for your data",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-[#333] last:border-0"
                  >
                    <div>
                      <p className="text-white">
                        {item.name}{" "}
                        <span className="text-[#b0b0b0] text-[10px]">
                          by {item.author}
                        </span>
                      </p>
                      <p className="text-[#b0b0b0] text-[11px]">{item.desc}</p>
                    </div>
                    <div className="w-8 h-4 bg-[#7c3aea] rounded-full relative">
                      <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" my-10 mx-10 ">
          <div className="lg:flex items-center justify-center gap-5">
            <section className=" flex-1 lg:order-1 lg:w-1/2">
              <div className=" ">
                <div className="lg:ml-[5rem]">
                  <h2 className=" text-[#EEEEEE text-5xl py-5 font-[600]">
                    Sync securely.
                  </h2>
                  <h4 className=" text-2xl text-[#BCBCBC]  text-left ">
                    Access your notes on any device, secured with end-to-end
                    encryption.{" "}
                    <a className="text-[#7c3aea] cursor-pointer" href="#">
                      {" "}
                      Learn more.
                    </a>
                  </h4>
                </div>
                <div className=" my-4  w-[70%]  items-center  flex gap-2  py-4 px-3 hover:bg-[#242424] rounded-xl lg:ml-[5rem]">
                  <Users size={90} className=" text-[#7c3aea]" />
                  <h3>
                    {" "}
                    Collaboration. Work with your team on shared files without
                    compromising your private data.{" "}
                  </h3>
                  {/* frist dev */}
                </div>
                <div className=" my-4  w-[80%] items-center  flex gap-2  py-4 px-3 hover:bg-[#242424] lg:ml-[5rem] rounded-xl">
                  <Settings size={90} className="  text-[#7c3aea]" />
                  <h3>
                    Fine-grained control. Decide which files and preferences you
                    want to sync to which devices.{" "}
                  </h3>

                  {/* 2nd dev */}
                </div>

                <div className=" my-4  w-[80%] items-center  flex gap-2  py-4 px-3 hover:bg-[#242424] lg:ml-[5rem]  rounded-xl">
                  <Clock size={90} className="   text-[#7c3aea]" />
                  <h3>
                    {" "}
                    Version history. Easily track changes between revisions,
                    with one year of version history for every note.{" "}
                  </h3>
                  {/* third dev */}
                </div>
              </div>
            </section>

            {/*  sections  for  the images and ariticle */}
            <article className="flex-1 lg:order-1 lg:w-1/2">
              <img src={SYncImg} className="w-full h-auto" alt="" />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ideas;
