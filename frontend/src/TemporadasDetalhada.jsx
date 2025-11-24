import React from "react"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeaderAuto from "./components/HeaderAuto";
import BotoesSeries from "./components/avaliacao_detalhada/BotoesSeries.jsx";
import CapaTemporadas from "./components/avaliacao_detalhada/CapaTemporadas.jsx"

import "./App.css";
import "./Detalhada.css";

function Temporadas(){

    return(
        <main>
            <HeaderAuto />
            <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
            <section id="sec-destaques">
                <h2 className="subtitulo">Modo Detalhado</h2>
                <BotoesSeries />
            </section>
            <section>
                <CapaTemporadas />
            </section>
        </main>  
    );


}

export default Temporadas;