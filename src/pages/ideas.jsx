import React from "react";

function Ideas() {
  return (
    <>
      <div className="text-white  bg-[#000000]  md:px-[5%]   lg:px-[5%] ">
        <div className=" mx-[5%]  m-5">
          <h2 className=" text-[#EEEEEE text-5xl py-5 font-[600]">
            {" "}
            Spark ideas.
          </h2>
          <p className="text-lg  :text-2xl text-[#BCBCBC]  text-left  ">
            From personal notes to journaling, knowledge bases, and project
            management, Obsidian gives you the tools to come up with ideas and
            organize them.
          </p>
        </div>
        {/* grid cols */}
        <div className="grid grid-cols-1  md:grid-cols-2 md:h  lg:grid-cols-2 ">
          <div className="bg-[#242424]  m-2  p-6 rounded-xl  ">
            <h4 className="text-lg font-[700]">Links</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10 ">
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>

            <div className="bg-[#171717] text-sm md:h-[60%] m-1 p-4 md:w-[100%]  rounded-l-xl z-0 rounded-b-sm relative">
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
            <h4 className="text-lg font-[700]">Links</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10">
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div className="bg-[#171717] text-sm md:h-[60%] m-1 p-4 md:w-[100%]  rounded-l-xl z-0 rounded-b-sm relative">
              <p className="mb-[10rem]">
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
            <h4 className="text-lg font-[700]">Links</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10">
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div className="bg-[#171717] text-sm md:h-[60%] m-1 p-4 md:w-[100%]  rounded-l-xl z-0 rounded-b-sm relative">
              <p className="mb-[10rem]">
                {" "}
                In Meditations on First Philosophy the philosopher René
                Descartes describes a series of doubts about the nature of
                reality, arriving at the famous phrase:{" "}
              </p>
            </div>
            {/* frist grid */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ideas;
