import React from "react"; 


import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import BotoesFilme from "./components/avaliacao_detalhada/BotoesFilme.jsx";
import CapaFormsFilme from "./components/avaliacao_detalhada/CapaFormsFilme.jsx";


import "./App.css";
import "./Detalhada.css";

function CriterioEmocaoFilme(){
    return(
        <main>
            <Header />
            <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
            <section id="sec-destaques">
                <h2 className="subtitulo">Modo Detalhado</h2>
                <BotoesFilme />
            </section>
            <section>
                <CapaFormsFilme />
            </section>

        </main>    
    );
}

export default CriterioEmocaoFilme;