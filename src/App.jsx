import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./pages/NavBar.jsx";
import Sharpe from "./pages/Sharpe.jsx";
import Ideas from "./pages/ideas.jsx";
import Publish from "./pages/publish.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
        <Sharpe />
        <Ideas />
        <Publish />
      </div>
    </>
  );
}

export default App;
