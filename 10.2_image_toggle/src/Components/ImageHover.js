import React, { useRef } from "react";

function ImageHover() {
  const showColored = useRef("");
  const showSonic = useRef("");

  return (
    <div className="container">
      <div>
        <img
          ref={showColored}
          onMouseLeave={() => {
            showColored.current.src = require("./Images/surfBoardBlack.jpg");
          }}
          onMouseOver={() => {
            showColored.current.src = require("./Images/surfBoard.jpg");
          }}
          width="500"
          height="730"
          src={require("./Images/surfingBlack.jpg")}
          alt="Surf"
        />
      </div>
      <div>
        <img
          ref={showSonic}
          onMouseLeave={() => {
            showSonic.current.src = require("./Images/surfBoardBlack.jpg");
          }}
          onMouseOver={() => {
            showSonic.current.src = require("./Images/surfing.jpg");
          }}
          width="500"
          height="730"
          src={require("./Images/surfingBlack.jpg")}
          alt="Surf"
        />
      </div>
    </div>
  );
}

export default ImageHover;
