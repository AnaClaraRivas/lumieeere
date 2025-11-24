import React from "react";
import { NavLink } from "react-router-dom";


function BotoesLivro() {
  return (
      <div className="navegacao my-4">
        <NavLink
          to="/detalhada/livro"
          className={({ isActive }) => `naveg ${isActive ? "active" : ""}`}
        >
          1
        </NavLink>
  
        <NavLink
          to="/criterioemocao/livro"
          className={({ isActive }) => `naveg ${isActive ? "active" : ""}`}
        >
          2
        </NavLink>

      </div>
    );
  }

export default BotoesLivro;