import React, { useContext, useEffect } from "react";
import AuthContext from "./context";
import Son from "./Son";

function Father() {
  const ctx = useContext(AuthContext);
  const giftsArr = ["Minecraft", "Tesla", "Tic-Tac-Toe"];

  useEffect(() => {
    ctx.setGift(giftsArr);
  }, []);
  useContext(AuthContext);
  return (
    <div>
      <Son />
    </div>
  );
}

export default Father;
