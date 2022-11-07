import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App-header">
      <Button innerText={"Important"} style={{ fontWeight: "800" }} />
      <Button innerText={"Not Important"} />
    </div>
  );
}

export default App;
