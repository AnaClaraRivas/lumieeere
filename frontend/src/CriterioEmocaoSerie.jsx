import React from "react"; 


import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import BotoesSeries from "./components/avaliacao_detalhada/BotoesSeries.jsx";
import CapaFormsSerie from "./components/avaliacao_detalhada/CapaFormsSerie.jsx";


import "./App.css";
import "./Detalhada.css";

function CriterioEmocaoSerie(){

    return(
        <main>
            <Header />
            <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
            <section id="sec-destaques">
                <h2 className="subtitulo">Modo Detalhado</h2>
                <BotoesSeries />
            </section>
            <section>
                <CapaFormsSerie />
            </section>

        </main>    
    );
}

export default CriterioEmocaoSerie;