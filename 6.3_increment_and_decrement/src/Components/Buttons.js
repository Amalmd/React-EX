import React, { useState } from "react";
import "./style.css";

function Buttons() {
  const [value, setValue] = useState(0);

  const incrementHandler = () => {
    if (value < 10) {
      setValue((prevValue) => prevValue + 1);
    }
  };

  const decrementHandler = () => {
    if (value > -10) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <div>
      <button onClick={incrementHandler} type="button">
        Increment
      </button>
      <button onClick={decrementHandler} type="button">
        Decrement
      </button>
      <div
        style={{ color: value > 0 ? "green" : value === 0 ? "black" : "red" }}
      >
        {value}
      </div>
    </div>
  );
}

export default Buttons;
