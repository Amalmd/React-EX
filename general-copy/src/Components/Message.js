import React, { useState } from "react";
import data from "../data.js";
import Name from "./Name";
import Card from "./Card";

console.log(data);

const msgNames = () => {
  return data.map((obj) => {
    return obj.name;
  });
};

const msgYear = (date) => {
  let year = date.split("-");
  return year[2];
};

const msgBornBefore = () => {
  return data.filter((obj) => {
    let year = msgYear(obj.birthday);
    console.log(year);
    return year < 1990;
  });
};

function Message() {
  return (
    <div>
      <h2>objects names:</h2>
      {msgNames().map((name) => {
        return <Name name={name} />;
      })}
      {msgBornBefore().map((obj) => {
        return (
          <Card
            name={obj.name}
            birthday={obj.birthday}
            fMeats={obj.favoriteFoods.meats}
            fFish={obj.favoriteFoods.fish}
          />
        );
      })}
    </div>
  );
}
export default Message;
