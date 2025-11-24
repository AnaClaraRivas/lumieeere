import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderADM from "../componentsAdm/HeaderADM.jsx";
import Footer from "../components/Footer.jsx";
import CarouselAvaliacoesADM from "../componentsAdm/CarouselAvaliacoesADM";
import '../App.css';
import "../Inicial.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



function InicialADM(){
     const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const elemento = document.querySelector(hash);
            if (elemento) {
                elemento.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);
    return(
        <div className="paginicial">
            <HeaderADM />
            <style> 
            {`@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');`}
            </style>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 col-sm-12 titulo">
                        <h1>Descubra, avalie e compartilhe suas paixões!</h1>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img className="imginicial" src="/img/imginicial.png" alt="" />
                    </div>
                </div>
            </div>

            <div>
                <CarouselAvaliacoesADM />
            </div>

            <div id="obras">
                <h1 style={{textAlign: "center"}}>O que vai avaliar hoje?</h1>

                    <div className="grid text-center cardinicial">
                        <div className="g-col-md-4 g-col-sm-12 cardopicao h-100">
                            <div className="row">
                                <div className="col-6 titulocard">
                                    <h3>Filme</h3>
                                </div>
                                <div className="col-6">
                                    <img className="imgcard" src="/img/fita-de-filme.png" alt="" />
                                </div>
                            </div>
                            <p>Avalie os filmes que marcaram você!</p>
                            <Link className="btnavaliar" to="/obrasFilmes">Avaliar</Link>
                        </div>

                        <div className="g-col-md-4 g-col-sm-12 cardopicao h-100">
                            <div className="row">
                                <div className="col-6 titulocard">
                                    <h3>Série</h3>
                                </div>
                                <div className="col-6">
                                    <img className="imgcard" src="/img/camera.png" alt="" />
                                </div>
                            </div>
                            <p>Compartilhe o que achou da sua série favorita!</p>
                            <Link className="btnavaliar" to="/obrasSeries">Avaliar</Link>
                        </div>

                        <div className="g-col-md-4 g-col-sm-12 cardopicao h-100">
                            <div className="row">
                                <div className="col-6 titulocard">
                                    <h3>Livro</h3>
                                </div>
                                <div className="col-6">
                                    <img className="imgcard" src="/img/livro.png" alt="" />
                                </div>
                            </div>
                            <p>Dê sua opinião sobre grandes histórias!</p>
                            <Link className="btnavaliar" to="/obraslivros">Avaliar</Link>
                            
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>

    )
}
export default InicialADM;