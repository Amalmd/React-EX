import React, { useState } from "react";
import Label from "./Components/Label";
import "./App.css";

function App() {
  const [value, setValue] = useState(3);

  const clickHandler = () => {
    console.log(value);
    setValue((prevValue) => prevValue + 1);
    //setValue((prevValue) => prevValue + 1);
  };
  return (
    <div className="App">
      <button onClick={clickHandler}>increment</button>
      <Label text={value} />
    </div>
  );
}

export default App;
