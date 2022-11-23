import React, { useState } from "react";
import "./App.css";
import colorsContext from "./Components/context";
import TopMenu from "./Components/TopMenu";
import Home from "./Components/Home";
import About from "./Components/About";
import "./Components/style.css";

function App() {
  const [isDay, setisDay] = useState(true);
  return (
    <colorsContext.Provider value={{ isDay, setisDay }}>
      <TopMenu />
      {isDay ? <Home /> : <About />}
    </colorsContext.Provider>
  );
}

export default App;
