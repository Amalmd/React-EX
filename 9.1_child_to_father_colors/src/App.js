import { useState } from "react";
import CustomButton from "./Components/Button";
import "./App.css";
import "./Components/style.css";

function App() {
  const [colorTo, setColorTo] = useState("Red");
  const colors = ["blue", "red", "yellow"];

  const insertColors = () => {
    return colors.map((color) => (
      <CustomButton colorProp={color} setColor={setColorTo} />
    ));
  };
  return (
    <div className="app">
      {insertColors()}
      <h4>{colorTo}</h4>
    </div>
  );
}

export default App;
