import React from "react"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import BotoesSeries from "./components/avaliacao_detalhada/BotoesSeries.jsx";
import Capa from "./components/avaliacao_detalhada/Capa.jsx";
import ComentarioSerie from "./components/avaliacao_detalhada/ComentarioSerie.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";
import "./Detalhada.css";

function DetalhadaSerie() {
  return (
    <main>
      <Header />
      <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
      <section id="sec-destaques">
        <h2 className="subtitulo">Modo Detalhado</h2>
        <BotoesSeries />
      </section>
      
      <section>
        <Capa />
      </section>

      <section className="section_comentario">
        <ComentarioSerie />
      </section> 

      <Footer />
    </main>
  );
}

export default DetalhadaSerie;
