import { useContext } from "react";
import AuthContext from "./context";

function Grandson() {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <h1>Gifts:</h1>
      <ol>
        {ctx.gift.map((gift, index) => {
          return <li likey={index}>{gift}</li>;
        })}
      </ol>
    </div>
  );
}

export default Grandson;
