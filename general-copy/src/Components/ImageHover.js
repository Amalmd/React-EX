import React, { useRef } from "react";

const ImageHover = () => {
  const imageBoardRef = useRef("");
  const imageSurfRef = useRef("");

  /* const handleHoverOn = () => {
    imageBoardRef.current.src = require("./Photos/surfboard.jpg");
  };
  const handleHoverOff = () => {
    imageSurfRef.current.src = require("./Photos/surfboardBlack.jpg");
  }; */

  return (
    <div className="App-header">
      <img
        ref={imageBoardRef}
        onMouseLeave={() => {
          imageBoardRef.current.src = require("./Photos/surfboardBlack.jpg");
        }}
        onMouseOver={() => {
          imageBoardRef.current.src = require("./Photos/surfboard");
        }}
        width="500"
        height="500"
        src={require("./Photos/surfboardBlack")}
        alt="Colorful Surfboards"
      ></img>
      <img
        ref={imageSurfRef}
        onMouseLeave={() => {
          imageSurfRef.current.src = require("./Photos/surfingBlack.jpg");
        }}
        onMouseOver={() => {
          imageSurfRef.current.src = require("./Photos/surfing.jpg");
        }}
        width="500"
        height="500"
        src={"./Photos/surfingBlack.jpg"}
        alt="Surfing"
      ></img>
    </div>
  );
};

export default ImageHover;
