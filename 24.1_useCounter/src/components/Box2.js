import { useTitleContext } from "../providers/TitleProvider";

export default function Box2() {
  const [myState, setMyState] = useTitleContext();

  const handleButton = () => {
    setMyState("Hello");
  };

  return (
    <div>
      Box2
      <h1>{myState}</h1>
      <button onClick={handleChange}>Change text</button>
    </div>
  );
}
