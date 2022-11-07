import React from "react";
import Child from "./Child";

const Mother = (props) => {
  const kids = [
    { name: "Ori", color: "red" },
    { name: "Ron", color: "blue" },
    { name: "Sigalit", color: "green" },
    { name: "Ruti", color: "yellow" },
    { name: "Alon", color: "purple" },
  ];
  return (
    <div className="mother">
      <h2> {props.title} </h2>
      <Child {...kids[0]} />
      <Child {...kids[1]} />
      <Child {...kids[2]} />
      <Child {...kids[3]} />
      <Child {...kids[4]} />
    </div>
  );
};

export default Mother;
