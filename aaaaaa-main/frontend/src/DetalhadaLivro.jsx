import React from "react"; 


import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import BotoesLivro from "./components/avaliacao_detalhada/BotoesLivro.jsx";
import Capa from "./components/avaliacao_detalhada/Capa.jsx";
import ComentarioLivro from "./components/avaliacao_detalhada/ComentarioLivro.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";
import "./Detalhada.css";

function DetalhadaLivro() {

  return (
    <main>
      <Header />
      <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
      <section id="sec-destaques">
        <h2 className="subtitulo">Modo Detalhado</h2>
        <BotoesLivro />
      </section>
      
      <section>
        <Capa />
      </section>

      <section className="section_comentario">
        <ComentarioLivro />
      </section> 

      <Footer />
    </main>
  );
}

export default DetalhadaLivro;
