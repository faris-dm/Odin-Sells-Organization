import { React, Component } from "react";

function Counter() {
  state = {
    count: 1,
  };

  return (
    <>
      <span className="text-white">solo</span>
      <button> {this.count} </button>
    </>
  );
}

export default Counter;
