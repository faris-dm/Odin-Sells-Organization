import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./pages/NavBar";
import Sharpe from "./pages/Sharpe";
import Ideas from "./pages/ideas";
import Counter from "./pages/Counter";
import Publish from "./pages/publish";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
        {/* <Sharpe /> */}
        <Ideas />
        {/* <Publish /> */}
      </div>
    </>
  );
}

export default App;
