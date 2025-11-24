import React from "react"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import BotoesLivro from "./components/avaliacao_detalhada/BotoesLivro.jsx";
import CapaForms from "./components/avaliacao_detalhada/CapaFormsLivro.jsx";



import "./App.css";
import "./Detalhada.css";

function CriterioEmocaoLivro(){
    return(
        <main>
            <Header />
            <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
            <section id="sec-destaques">
                <h2 className="subtitulo">Modo Detalhado</h2>
                <BotoesLivro />
            </section>
            <section>
                <CapaForms />
            </section>

        </main>    
    );
}

export default CriterioEmocaoLivro;