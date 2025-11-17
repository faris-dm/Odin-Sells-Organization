import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./pages/NavBar";
import Sharpe from "./pages/Sharpe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <NavBar /> */}
        <Sharpe />
      </div>
    </>
  );
}

export default App;
