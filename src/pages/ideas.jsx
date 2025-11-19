import React from "react";

function Ideas() {
  return (
    <>
      <div className="text-white">
        <div>
          <h2 className="text-5xl p-8 font-[600]"> Spark ideas.</h2>
          <p className="text-xl">
            From personal notes to journaling, knowledge bases, and project
            management, Obsidian gives you the tools to come up with ideas and
            organize them.
          </p>
        </div>
        {/* grid cols */}
        <div className="grid md:grid-cols-2 grid-cols-4 bg-[#000]">
          <div className="bg-[#222] m-4 ">
            <h4>Links</h4>
            <p>
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>

            <div>
              <p className="bg-[#000] text-sm m-2 p-4">
                {" "}
                In Meditations on First Philosophy the philosopher René
                Descartes describes a series of doubts about the nature of
                reality, arriving at the famous phrase:{" "}
              </p>
            </div>

            {/* frist grid */}
          </div>

          <div className="bg-[#222] m-4 ">
            {" "}
            <h4>Links</h4>
            <p>
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div>
              <p>
                {" "}
                In Meditations on First Philosophy the philosopher René
                Descartes describes a series of doubts about the nature of
                reality, arriving at the famous phrase:{" "}
              </p>
            </div>
            {/* frist grid */}
          </div>

          <div className="bg-[#222] m-4 ">
            {" "}
            <h4>Links</h4>
            <p>
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div>
              <p>
                {" "}
                In Meditations on First Philosophy the philosopher René
                Descartes describes a series of doubts about the nature of
                reality, arriving at the famous phrase:{" "}
              </p>
            </div>
            {/* frist grid */}
          </div>

          <div className="bg-[#222] m-4 ">
            {" "}
            <h4>Links</h4>
            <p>
              Create connections between your notes. Link anything and
              everything — ideas, people, places, books, and beyond. Invent your
              own personal Wikipedia.
            </p>
            <div>
              <p>
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
