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
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 bg-[#000]">
          <div className="bg-[#242424]  m-4  p-6 rounded-xl  ">
            <h4 className="text-lg font-[700]">Links</h4>
            <p className="text-[18px] text-[#BCBCBC] font-[600] mb-10 ">
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>

            <div className="bg-[#171717] text-sm m-2 p-4  md:w-[100%] w-[103%]   rounded-l-xl ">
              <p className=" text-normal font-[400] mb-[10rem] px-6">
                {" "}
                In
                <a
                  className="text-[#7c3aed] px-1 underline hover:text[#7c3aea] "
                  href="#"
                >
                  Meditations on First Philosophy
                </a>{" "}
                the philosopher René Descartes describes a series of doubts
                about the nature of reality, arriving at the famous phrase:{" "}
                <ul className="list-disc mx-5">
                  <li className="  text-[#7c3aea] underline">[thin]</li>
                </ul>
                he discuess the value of Knowladge in the life related to mind
              </p>
              <div>
                <div>
                  {" "}
                  i <label htmlFor="">think</label> therefore i am{" "}
                </div>
                <div>
                  {" "}
                  just <label htmlFor="">think</label> about it{" "}
                </div>
                <div>
                  {" "}
                  <label htmlFor="">thinking</label> fast & slow{" "}
                </div>
                <div>
                  {" "}
                  the <label htmlFor="">thing</label> t{" "}
                </div>
              </div>
            </div>

            {/* frist grid */}
          </div>

          <div className="bg-[#222]  m-4  p-2 rounded-xl ">
            {" "}
            <h4>Links</h4>
            <p className="">
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div className="bg-[#000] text-sm m-2 p-4  rounded-xl">
              <p className="mb-[10rem]">
                {" "}
                In Meditations on First Philosophy the philosopher René
                Descartes describes a series of doubts about the nature of
                reality, arriving at the famous phrase:{" "}
              </p>
            </div>
            {/* frist grid */}
          </div>

          <div className="bg-[#222]  m-4  p-2 rounded-xl ">
            {" "}
            <h4>Links</h4>
            <p>
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div className="bg-[#000] text-sm m-2 p-4  rounded-xl">
              <p className="mb-[10rem]">
                {" "}
                In Meditations on First Philosophy the philosopher René
                Descartes describes a series of doubts about the nature of
                reality, arriving at the famous phrase:{" "}
              </p>
            </div>
            {/* frist grid */}
          </div>

          <div className="bg-[#222]  m-4  p-2 rounded-xl">
            {" "}
            <h4>Links</h4>
            <p>
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div className="bg-[#000] text-sm m-2 p-4   rounded-xl">
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
