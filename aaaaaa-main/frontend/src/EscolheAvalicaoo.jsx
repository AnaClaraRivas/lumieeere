import React from "react"; 
import { useParams } from "react-router-dom";
import capa from "./assets/img/minhavida1.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CardEscolheLivro from "./components/escolhe_av/CardEscolheLivro.jsx";
import CardEscolheFilmeSerie from "./components/escolhe_av/CardEscolheFilmeSerie.jsx";
import CardAV from "./components/escolhe_av/CardAV.jsx";

import "./App.css";
import "./Detalhada.css";
import "./ObrasDetalhes.css";
import "./Escolhe_Avaliacao.css";

function Escolhe_Avaliacao() {

  const { tipo } = useParams(); // recebe livro, filme ou serie

  return (
    <main>

      <Header />
      <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
      
      <section>
        {tipo === "livro" && <CardEscolheLivro />}
        {tipo === "filme" && <CardEscolheFilmeSerie />}
        {tipo === "serie" && <CardEscolheFilmeSerie />}
        {/* <CardEscolhe 
          capa={capa}
          titulo="Minha vida fora de série – 1ª temporada"
          estrelas={4}
          autor="Paula Pimenta"
          editora="Gutenberg"
          ano="2011"
          anoBrasil="2012"
        /> */}
      </section>

     <section>
        <CardAV tipo={tipo} />
     </section> 

      <section>
        <Footer />
      </section>

    </main>
  );
}

export default Escolhe_Avaliacao;
