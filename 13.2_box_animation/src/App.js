import React, { useState, useEffect } from "react";

import "./App.css";
import Boxes from "./Components/Boxes";

function App() {
  const [isBoxShows, setisBoxShows] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisBoxShows(true);
    }, 1000);
    return () => {
      console.log("display box");
    };
  }, []);

  const box1 = { width: "300px", height: "300px", color: "green" };
  return <>{isBoxShows && <Boxes {...box1} setisBoxShows={setisBoxShows} />}</>;
}

export default App;
