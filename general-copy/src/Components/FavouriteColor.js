import React, { useState, useEffect } from "react";
import "./style.css";

const FavouriteColor = () => {
  const [favColor, setFavColor] = useState("");
  useEffect(() => {
    setFavColor("Green");
  }, [favColor]);
  return (
    <div>
      <h1>My favorite color is: {favColor}</h1>
    </div>
  );
};

export default FavouriteColor;
