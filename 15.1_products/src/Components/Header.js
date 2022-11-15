import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to={"/"}
          >
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to={"/Products"}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Header;
