import React from "react";
import "./style.css";

const Balloon = (props) => {
  return (
    <div
      className="balloon"
      style={{ backgroundColor: `${props.color}` }}
    ></div>
  );
};

export default Balloon;
