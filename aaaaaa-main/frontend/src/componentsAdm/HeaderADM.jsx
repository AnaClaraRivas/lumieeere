
// importa coiso especifico do react
import React, { useState, useEffect } from "react";

// componente mobilenav
import MobileNav from "../components/MobileNav";

// css
import "../components/Header.css";

import { Link } from "react-router-dom";

// o componente em si e seu nome 
function HeaderADM() {

    // controla se o menu mobile está aberto ou fechado
  const [menuActive, setMenuActive] = useState(false);

    // detecta se a página foi rolada mais de 50px para aplicar uma classe visual
  const [scrolled, setScrolled] = useState(false);

    // alterna o estado do menu mobile entre aberto e fechado  
  const toggleMenu = () => setMenuActive(!menuActive);

    // verifica se teve um scroll de mais de 50px   
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    // 
  return (
    <header className={scrolled ? "scrolled" : ""}>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <nav className="nav-container">
        <Link className="logo" to="/inicial">Lumière</Link>
        <ul className="nav-links">
          <li><Link to="/inicialADM#obras">Obras</Link></li>
          <li><Link to="/estantes">Estantes</Link></li>
          <li><Link to="/cadastrarObras">Cadastrar obras</Link></li>
          <li><Link to="/perfilADM">Perfil</Link></li>
        </ul>


        {/* A classe active é adicionada se menuActive for true. */}
        <div className={`menu-mobile ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>
      <MobileNav active={menuActive} toggleMenu={toggleMenu} />
    </header>
  );
}

export default HeaderADM;
