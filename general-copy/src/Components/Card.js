import React, { useState } from "react";
import data from "../data.js";

console.log(data);

function Card(props) {
  <div>
    <h2>Name: {props.name} </h2>
    <h4>Birthday: {props.birthday} </h4>
    <h4>
      Favourite Meats:{" "}
      {props.fMeats.map((food) => {
        return food + " ";
      })}{" "}
    </h4>
    <h4>
      Favourite Fish Food:{" "}
      {props.fFish.map((food) => {
        return food + " ";
      })}{" "}
    </h4>
  </div>;

  return;
}

export default Card;
