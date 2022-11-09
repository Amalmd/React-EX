import { useState } from "react";
import "./App.css";
import "./Components/style.css";
import Checkbox from "./Components/Checkbox";

function App() {
  return (
    <div>
      <form>
        <Checkbox text="I read the term of the app" checked={false} />
        <Checkbox text="I accept the term of the app" checked={false} />
        <Checkbox text="I want to get the weekly news letter" checked={true} />
        <Checkbox text="I want to get sales and offers" checked={true} />
      </form>
    </div>
  );
}

export default App;
