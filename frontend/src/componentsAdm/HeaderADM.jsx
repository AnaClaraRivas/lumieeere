// importa coiso especifico do react
import React, { useState, useEffect } from "react";

// componente mobilenav
import MobileNav from "../components/MobileNav";

// css
import "../components/Header.css";

import { Link } from "react-router-dom";

function HeaderADM() {

  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <nav className="nav-container">
        
        {/* AGORA o logo leva para a página inicial ADM */}
        <Link className="logo" to="/inicialADM">Lumière</Link>

        {/* LINKS DO ADMINISTRADOR SOMENTE */}
        <ul className="nav-links">
          <li><Link to="/inicialADM#obras">Obras</Link></li>
          <li><Link to="/estantesADM">Estantes</Link></li>
          <li><Link to="/cadastrarObrasADM">Cadastrar obras</Link></li>
          <li><Link to="/perfilADM">Perfil</Link></li>
        </ul>

        {/* Botão mobile */}
        <div className={`menu-mobile ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>

      {/* Menu mobile REALMENTE só com opções ADM */}
      <MobileNav active={menuActive} toggleMenu={toggleMenu} />
    </header>
  );
}

export default HeaderADM;
