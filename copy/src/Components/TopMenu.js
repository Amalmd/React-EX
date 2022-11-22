import React, { useContext, useState } from "react";
import ReactSwitch from "react";
import ThemeContext from "./context";
import "./style.css";
import App from "../App";

function TopMenu() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="nav">
      <ul className="nav_ul">
        <li className="nav_li"> Home </li>
        <li className="nav_li">About</li>
      </ul>
      <button className="btn">{theme}</button>
    </div>
  );
}

export default TopMenu;
