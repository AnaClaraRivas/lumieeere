import React from "react";
import { useParams, useLocation } from "react-router-dom";

import capa from "./assets/img/minhavida1.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import HeaderAuto from "./components/HeaderAuto";
import Footer from "./components/Footer.jsx";

import CardEscolheLivro from "./components/escolhe_av/CardEscolheLivro.jsx";
import CardEscolheFilmeSerie from "./components/escolhe_av/CardEscolheFilmeSerie.jsx";
import CardAV from "./components/escolhe_av/CardAV.jsx";
import LivroCardHeader from "./components/CardDetalhes.jsx";

import "./App.css";
import "./Detalhada.css";
import "./ObrasDetalhes.css";
import "./Escolhe_Avaliacao.css";


function Escolhe_Avaliacao() {
  const { tipo } = useParams();
  

  return (
    <main>
      <HeaderAuto />

      <h1 className="titulo-pagina">AVALIAÇÕES</h1>

      {/* FORMULÁRIO DE AVALIAÇÃO */}
      <section>
        <CardAV tipo={tipo} />
      </section>

      <Footer />
    </main>
  );
}

export default Escolhe_Avaliacao;
