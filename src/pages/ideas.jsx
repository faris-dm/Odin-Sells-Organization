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
      <div className="text-white  bg-[#000000]  md:px-[5%]   lg:px-[5%] ">
        <div className=" mx-[5%]   m-5  md:w-[70%] lg:w-[55%]  md:ml-50">
          <h2 className=" text-[#EEEEEE text-5xl py-5 font-[600]">
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
        <div className="grid grid-cols-1  md:grid-cols-2   md:h  lg:grid-cols-2 ">
          <div className="bg-[#242424]  m-2  p-6 rounded-xl  ">
            <h4 className="text-lg font-[700]">Links</h4>
            <p className="text-[18px]  text-[#BCBCBC] font-[600] mb-10 ">
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>

            <div className="bg-[#171717] text-sm md:h-[50%] m-1 p-4 md:w-[100%]  rounded-l-xl z-0 rounded-b-sm relative">
              <p className=" text-normal font-[400]   md:mb-[14rem] mb-[10rem] px-6">
                {" "}
                <p className="py-2 z--1">
                  In
                  <a
                    className="text-[#7c3aed] px-1 underline hover:text[#7c3aea] "
                    href="#"
                  >
                    Meditations on First Philosophy
                  </a>{" "}
                  the philosopher René Descartes describes a series of doubts
                  about the nature of reality, arriving at the famous phrase:
                </p>{" "}
                <ul className="list-disc mx-5">
                  <li className="  text-[#7c3aea] underline">[thin]</li>
                </ul>
                he discuess the value of Knowladge in the life related to mind
              </p>
              <div className="absolute bg-[#262626] w-70 py-2  rounded-lg h-47 bottom-[18%] md:left-8 md:w-65 left-8 ">
                <div className="px-4 py-1 text-sm   mb-[3px] hover:bg-[#404040]  mx-1 rounded-lg ">
                  {" "}
                  I{" "}
                  <label className="font-[600]" htmlFor="">
                    think
                  </label>{" "}
                  therefore i am{" "}
                </div>
                <div className="px-4 py-1 text-[16px]  mb-[3px]  hover:bg-[#404040]  mx-1 rounded-lg ">
                  {" "}
                  just{" "}
                  <label className="font-[600]" htmlFor="">
                    think
                  </label>{" "}
                  about it{" "}
                </div>
                <div className="px-4  mb-[3px] py-1 text-[] hover:bg-[#404040]  mx-1 rounded-lg">
                  {" "}
                  <p className="text-[16px]">
                    {" "}
                    <label htmlFor="" className="font-[600] text-white">
                      Thinking
                    </label>{" "}
                    fast & slow
                  </p>
                  <p className="text-sm">Books/</p>
                </div>

                <div className="px-4  mb-[3px] py-1 text-[16px]   hover:bg-[#404040]  mx-1 rounded-lg">
                  {" "}
                  the{" "}
                  <label className="font-[600] text-[#fff]" htmlFor="">
                    Thing
                  </label>{" "}
                  <p className="text-sm  ">Movies/</p>
                </div>
              </div>
            </div>

            {/* frist grid */}
          </div>

          <div className="bg-[#242424]  m-4  p-6 rounded-xl  ">
            {" "}
            <h4 className="text-lg font-[700]">Links</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10 ">
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div className="bg-[#171717] text-sm md:h-[60%] m-1 p-4 md:w-[100%]  rounded-l-xl z-0 rounded-b-sm relative">
              <p className="  text-normal font-[400]   md:mb-[14rem] mb-[10rem] px-6">
                {" "}
                In Meditations on First Philosophy the philosopher René
                Descartes describes a series of doubts about the nature of
                reality, arriving at the famous phrase:{" "}
              </p>
            </div>
            {/* frist grid */}
          </div>

          <div className="bg-[#242424]  m-4  p-6 rounded-xl ">
            {" "}
            <h4 className="text-lg font-[700]">Plugins</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10">
              space .with thousands of plugins and our open API ,it is to tailer
              Odin to fit your personal workflow{" "}
              <a className="text-[#7c3aea] cursor-pointer" href="#">
                Learn More
              </a>
            </p>
            <div className="bg-[#171717] text-sm md:h-[60%] m-1 p-4 md:w-[100%]  rounded-l-xl z-0 rounded-b-sm relative">
              <p className="mb-[5rem]">
                <div>
                  <div>{/* lecture */}</div>
                  <div>{/* images */}</div>
                </div>
              </p>
            </div>
            {/* frist grid */}
          </div>

          <div className="bg-[#242424]  m-4  p-6 rounded-xl ">
            {" "}
            <h4 className="text-lg font-[700]">Links</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10">
              Visualize the relationships between your notes. Find hidden
              patterns in your thinking through a visually engaging and
              interactive graph.
            </p>
            <div className="bg-[#171717] text-sm h-[50%] md:h-[60%] m-1 p-4 md:w-[100%]  rounded-l-xl z-0 rounded-b-sm relative">
              <p className="mb-[10rem] ">
                {" "}
                <div>
                  <h2>Community Plugins</h2>
                  <div className="flex justify-between py-3 border-b">
                    <div className="text-xs">
                      <p className="">
                        Calender{" "}
                        <label className="text-[#b0b0b0]  ">by Lima cain</label>
                      </p>
                      <p className="text-[#b0b0b0]">
                        Calender vieew fo your daily notes
                      </p>
                    </div>
                    <Switch />
                  </div>
                  {/* frist setion */}
                  <div className="flex justify-between py-3 border-b">
                    <div className="">
                      <p className="">
                        Kanban by{" "}
                        <label className="text-[#b0b0b0]  ">
                          Matthew Meyers
                        </label>
                      </p>
                      <p className="text-[#b0b0b0]  ">
                        {" "}
                        Markdown-backed kanba boards
                      </p>
                    </div>
                    <Switch />
                  </div>
                  {/* 3rd section */}
                  <div className="flex justify-between py-3 border-b">
                    <div>
                      <p>
                        Outliner by{" "}
                        <label className="text-[#b0b0b0]  ">
                          by Viacheslave cain
                        </label>
                      </p>
                      <p className="text-[#b0b0b0]  ">
                        Advanced queries for the data{" "}
                      </p>
                    </div>
                    <Switch />
                  </div>
                  {/*  fourth section */}
                  <div className="flex justify-between py-3">
                    <div>
                      <p>
                        DaraView by{" "}
                        <label className="text-[#b0b0b0]  ">
                          by Michail Berham cain
                        </label>
                      </p>
                      <p className="text-[#b0b0b0]  ">
                        Advanved queries for data-obessed view
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </p>
            </div>
            {/* frist grid */}
          </div>
          {/*  final touch  */}

          {/*  three  ends here */}
        </div>
        <div className=" my-10 mx-10 ">
          <div className="lg:flex items-center justify-center gap-5">
            <section className=" flex-1">
              <div className=" ">
                <div className="w-[90%]">
                  <h2 className=" text-[#EEEEEE text-5xl py-5 font-[600]">
                    Sync securely.
                  </h2>
                  <h4 className=" text-2xl text-[#BCBCBC]  text-left">
                    Access your notes on any device, secured with end-to-end
                    encryption.{" "}
                    <a className="text-[#7c3aea] cursor-pointer" href="#">
                      {" "}
                      Learn more.
                    </a>
                  </h4>
                </div>
                <div className=" my-4 items-center  flex gap-2  py-4 px-3 hover:bg-[#242424] rounded-xl">
                  <Users size={50} className=" text-[#7c3aea]" />
                  <h3>
                    {" "}
                    Collaboration. Work with your team on shared files without
                    compromising your private data.{" "}
                  </h3>
                  {/* frist dev */}
                </div>
                <div className=" my-4 items-center  flex gap-2  py-4 px-3 hover:bg-[#242424] rounded-xl">
                  <Settings size={50} className="  text-[#7c3aea]" />
                  <h3>
                    Fine-grained control. Decide which files and preferences you
                    want to sync to which devices.{" "}
                  </h3>

                  {/* 2nd dev */}
                </div>

                <div className=" my-4 items-center  flex gap-2  py-4 px-3 hover:bg-[#242424] rounded-xl">
                  <Clock size={50} className="   text-[#7c3aea]" />
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
            <article className="flex-1">
              <img src={SYncImg} alt="" />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ideas;
