import React from "react";
import { NavLink } from "react-router-dom";

function BotoesSeries() {
  return (
    <div className="navegacao my-4">
      <NavLink
        to="/detalhada/serie"
        className={({ isActive }) => `naveg ${isActive ? "active" : ""}`}
      >
        1
      </NavLink>

      <NavLink
        to="/criterioemocao/serie"
        className={({ isActive }) => `naveg ${isActive ? "active" : ""}`}
      >
        2
      </NavLink>

      <NavLink
        to="/temporadas"
        className={({ isActive }) => `naveg ${isActive ? "active" : ""}`}
      >
        3
      </NavLink>
    </div>
  );
}

export default BotoesSeries;
