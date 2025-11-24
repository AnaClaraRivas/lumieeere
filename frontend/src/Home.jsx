import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Home.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="home">

        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');`}
        </style>

      <main>
        {/* logo, nome e slogan */}
        <div className="row divlogo align-items-center">
          <div className="logohome col-6">
            <img className="imglogohome" src="/img/logo.png" alt="" />
          </div>
          <div className="col-6">
            <h1 className="fontecinzel textobranco titulohome">LUMIÈRE</h1>
            <h1 className="fontecinzel textobranco titulohome sloganhome">ENTRE CAPAS</h1>
            <h1 className="fontecinzel textobranco titulohome sloganhome"> E TELAS</h1>
          </div>
        </div>

        {/* texto, botao e imagem */}
        <div className="row align-items-center">
          <div className="col-6 entrardiv">
            <h5 className="diventrar textentrar textobranco">
              Aqui você pode dar sua opinião sobre os filmes, séries e livros
              que marcaram você ou encontrar novas histórias para se apaixonar.
            </h5>
            <Link className="diventrar textobranco botaoentrar" to="/login">
              Entrar
            </Link>
          </div>
          <div className="col-6">
            <img
              className="imgcameralivros"
              src="/img/camera e livro.png"
              alt=""
            />
          </div>
        </div>

        {/* cards */}
        <div className="grid text-center">
          {/* CARD FILME */}
          <div className="g-col-4 cardfilmehome h-100">
            <img
              className="postershome"
              src="/img/os-caca-fantasmas.jpg"
              alt="Os Caça-Fantasmas"
            />
            <h2 className="fontecinzel textobranco">OS CAÇA-FANTASMAS</h2>
            <p className="textobranco">Valeu a pena assistir?</p>
            <div className="grid2 text-center">
              <p
                className="g-col-4 textobranco"
                style={{
                  backgroundColor: "#678FC4",
                  borderRadius: "30px",
                  padding: "6px",
                }}
              >
                Sim
              </p>
              <p
                className="g-col-4 textobranco"
                style={{
                  backgroundColor: "#678FC4",
                  borderRadius: "30px",
                  padding: "5px",
                  display: "inline-block",
                  width: "150px",
                }}
              >
                Mais ou menos
              </p>
              <p
                className="g-col-4 textobranco"
                style={{
                  backgroundColor: "#678FC4",
                  borderRadius: "30px",
                  padding: "6px",
                }}
              >
                Não
              </p>
            </div>
          </div>

          {/* CARD LIVRO */}
          <div className="g-col-4 cardlivrohome h-100">
            <img
              className="postershome"
              src="/img/o-pequeno-principe.jpg"
              alt="O Pequeno Príncipe"
            />
            <h2
              className="fontecinzel"
              style={{ color: "#26364E" }}
            >
              O PEQUENO PRÍNCIPE
            </h2>
            <p className="textoazul">"Me adotou emocionalmente"</p>
            <div style={{ display: "inline", marginBottom: "10px" }}>
              <i className="fas fa-star" style={{ color: "#26364E" }}></i>
              <i className="fas fa-star" style={{ color: "#26364E" }}></i>
              <i className="fas fa-star" style={{ color: "#26364E" }}></i>
              <i className="fas fa-star" style={{ color: "#26364E" }}></i>
              <i className="fas fa-star" style={{ color: "#26364E" }}></i>
            </div>
          </div>

          {/* CARD SÉRIE */}
          <div className="g-col-4 cardseriehome h-100">
            <div style={{ display: "inline", marginBottom: "10px" }}>
              <i className="fas fa-star" style={{ color: "#FFFFAE" }}></i>
              <i className="fas fa-star" style={{ color: "#FFFFAE" }}></i>
              <i className="fas fa-star" style={{ color: "#FFFFAE" }}></i>
              <i className="fas fa-star" style={{ color: "#FFFFAE" }}></i>
              <i className="fas fa-star" style={{ color: "#FFFFAE" }}></i>
            </div>
            <div className="grid3 text-center">
              <div
                className="g-col-4"
                style={{ textAlign: "justify" }}
              >
                <p className="textobranco">Roteiro</p>
                <p className="textobranco">Atuação</p>
                <p className="textobranco">Trilha Sonora</p>
                <p className="textobranco">Fotografia</p>
                <p className="textobranco">Originalidade</p>
              </div>
              <div className="g-col-4">
                <p className="textobranco">9</p>
                <p className="textobranco">8</p>
                <p className="textobranco">10</p>
                <p className="textobranco">9</p>
                <p className="textobranco">7</p>
              </div>
              <div className="g-col-4 divimgseriehome" >
                <img
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginLeft: "5px",
                  }}
                  src="/img/breaking-bad.jpg"
                  alt="Breaking Bad"
                />
              </div>
            </div>
            <h2
              className="fontecinzel textobranco"
              style={{ paddingTop: "25px" }}
            >
              BREAKING BAD
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
