import "./App.css";
import Grandfather from "./Components/Grandfather";
import AuthContext from "./Components/context";
import { useState } from "react";

function App() {
  const [gift, setGift] = useState();
  return (
    <div>
      <AuthContext.Provider value={{ gift: gift, setGift: setGift }}>
        <Grandfather />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
