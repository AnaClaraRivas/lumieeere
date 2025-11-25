import React, { useEffect, useState } from "react";
import HeaderAuto from "./components/HeaderAuto";
import CardContainer from "./components/CardContainer";
import LivroCard from "./components/LivroCard";
import Footer from "./components/Footer";
import "./ObrasLivros.css";

function ObrasLivros() {
  const [obras, setObras] = useState([]);
      const [pesquisa, setPesquisa] = useState("");
  
    useEffect(() => {
      const carregarObras = async () => {
        try {
          const resposta = await fetch("http://localhost/backlumiere/obras/listarlivros.php");
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
      <HeaderAuto />
      <main>
        <h1 className="titulo-pagina">LIVROS</h1>

        <section id="sec-destaques">
          <h2>Destaques</h2>
          <CardContainer />

          <div className="pesquisa-container">
            <p className="texto-pesquisa">
              Pesquise um livro para avaliar <br /> ou ver as avaliações feitas!
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
                Sentiu falta de algum livro? <br /> Cadastre ele no nosso sistema!
              </p>
              <button
                className="banner-botao"
                onClick={() => (window.location.href = "/cadastrarObras")}
              >
                Cadastrar um novo livro!
              </button>
            </div>
          </div>

          {/* <div className="filtros-container">
            <select className="filtro-select"><option>Filtro 1</option></select>
            <select className="filtro-select"><option>Filtro 2</option></select>
            <select className="filtro-select"><option>Filtro 3</option></select>
          </div> */}

          {obrasFiltradas.map((obra) => (
            <LivroCard
              key={obra.id_obras}
              id_obras={obra.id_obras}
              capa={`http://localhost/backlumiere/uploads/${obra.capa}`}
              titulo={obra.titulo}
              estrelas={obra.estrelas ?? 4}
              autor={obra.autor}
              editora={obra.editora || "-"}
              ano={obra.ano_lancamento ? obra.ano_lancamento.substring(0, 4) : "-"}
              descricao={obra.descricao}
              tipo="livro"

            />
          ))}


        </section>
      </main>
      <Footer />
    </>
  );
}

export default ObrasLivros;
