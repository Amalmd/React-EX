import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error";
import Navbar from "./Components/NavBar";
import EditPage from "./Pages/EditPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Routes>
      <Navbar />

      <Route path="/" exact component={MainPage} />
      <Route path="/edit/:id" exact component={EditPage} />
      <Route path="/*" exact component={Error} />
    </Routes>
  );
}

export default App;
