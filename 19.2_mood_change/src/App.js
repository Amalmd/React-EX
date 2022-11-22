import "./App.css";
import ThemeContext from "./Components/context";
import { useState } from "react";
import TopMenu from "./Components/TopMenu";

function App() {
  const [theme, setTheme] = useState("light");

  const buttonHandler = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={(theme, buttonHandler)}>
      <div className="App" id={theme}>
        <TopMenu />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
