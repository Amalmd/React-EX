import React, { useState } from "react";

import "./style.css";

function BoxButton(props) {
  const [showBox, setShowBox] = useState(true);

  const clickHandler = () => {
    console.log(showBox);
    setShowBox((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={clickHandler} type="button">
        Show/Hide
      </button>

      {showBox ? <div className="box" /> : null}
    </div>
  );
}

export default BoxButton;
