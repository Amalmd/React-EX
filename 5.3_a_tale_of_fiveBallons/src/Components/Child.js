import React from "react";
import Balloon from "./Balloon";
import "./style.css";

const Child = (props) => {
  return (
    <div className="child">
      <h3> {props.name} </h3>
      <Balloon className="balloon" color={props.color} />
    </div>
  );
};

export default Child;
