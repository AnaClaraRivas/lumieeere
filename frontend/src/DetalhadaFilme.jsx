import React from "react"; 


import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import BotoesFilme from "./components/avaliacao_detalhada/BotoesFilme.jsx";
import Capa from "./components/avaliacao_detalhada/Capa.jsx";
import ComentarioFilme from "./components/avaliacao_detalhada/ComentarioFilme.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";
import "./Detalhada.css";

function DetalhadaFilme() {

  return (
    <main>
      <Header />
      <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
      <section id="sec-destaques">
        <h2 className="subtitulo">Modo Detalhado</h2>
        <BotoesFilme />
      </section>
      
      <section>
        <Capa />
      </section>

      <section className="section_comentario">
        <ComentarioFilme />
      </section> 

      <Footer />
    </main>
  );
}

export default DetalhadaFilme;
