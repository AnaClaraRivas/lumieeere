import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import LivroCard from "./components/LivroCard";
import Footer from "./components/Footer";
import "./ObrasLivros.css";

function ObrasSeries() {
 const [obras, setObras] = useState([]);
     const [pesquisa, setPesquisa] = useState("");
 
    useEffect(() => {
      const carregarObras = async () => {
        try {
          const resposta = await fetch("http://localhost/backlumiere/obras/listarseries.php");
          const dados = await resposta.json();
          setObras(dados);
        } catch (erro) {
          console.log("Erro ao carregar obras:", erro);
        }
      };
      carregarObras();
    }, []);

 
   const obrasFiltradas = obras.filter((obra) =>
     obra.titulo.toLowerCase().includes(pesquisa.toLowerCase())
   );
 

  return (
    <>
      <Header />
      <main>
        <h1 className="titulo-pagina">SÉRIES</h1>
        <section id="sec-destaques">
          <h2>Destaques</h2>
          <CardContainer />
          <div className="pesquisa-container">
            <p className="texto-pesquisa">
              Pesquise uma série para avaliar <br /> ou ver as avaliações feitas!
            </p>
            <div className="linha"></div>
            <div className="campo-pesquisa">
              <input
                type="text"
                placeholder="Pesquisar"
                className="input-pesquisa"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
              />
              <button className="botao-pesquisa">
                <span className="material-icons">search</span>
              </button>
            </div>
          </div>
          <div className="banner-cadastro">
            <div className="banner-textos">
              <p className="banner-frase">
                Sentiu falta de alguma série? <br /> Cadastre ela no nosso sistema!
              </p>
              <button className="banner-botao" onClick={() => (window.location.href = "/cadastrarObras")}>
                Cadastrar uma nova série!
              </button>
            </div>
          </div>

          {obrasFiltradas.map((obra) => {
            console.log(obra); // <- veja os dados que estão vindo
            return (
              <LivroCard
                key={obra.id_obras}
                id={obra.id_obras}
                capa={`http://localhost/backlumiere/uploads/${obra.capa}`}
                titulo={obra.titulo}
                estrelas={obra.estrelas ?? 4}
                autor={obra.autor}
                editora={obra.editora || "-"}
                ano={obra.ano_lancamento ? obra.ano_lancamento.substring(0, 4) : "-"}
                descricao={obra.descricao}
                tipo="serie"
              />
            );
          })}


        </section>
      </main>
      <Footer />
    </>
  );
}

export default ObrasSeries;
