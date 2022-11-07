import React from "react";
import "./App.css";
import Mother from "./Components/Mother";

function App() {
  const data = { title: "A Tale of 5 Balloons" };
  return (
    <div className="mother">
      <Mother title={data.title} />
    </div>
  );
}

export default App;
