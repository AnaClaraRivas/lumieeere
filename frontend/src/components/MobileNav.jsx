import React from "react";
import { Link } from "react-router-dom";

function MobileNav({ active, toggleMenu }) {
  return (
    <div className={`mobile-nav ${active ? "active" : ""}`}>
      <Link to="/inicial#obras" onClick={toggleMenu}>Obras</Link>
      <Link to="/estantes" onClick={toggleMenu}>Estantes</Link>
      <Link to="/cadastrarObras" onClick={toggleMenu}>Cadastrar obras</Link>
      <Link to="/perfil" onClick={toggleMenu}>Perfil</Link>
    </div>
  );
}

export default MobileNav;