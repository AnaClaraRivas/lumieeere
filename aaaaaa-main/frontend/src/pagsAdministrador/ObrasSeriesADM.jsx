import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import FilmeCardADM from "../componentsAdm/FilmeCardADM";
import Footer from "../components/Footer";
import "../ObrasLivros.css";

function ObrasSeriesADM() {
  const [filmes, setFilmes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [mensagem, setMensagem] = useState(""); 
  const [loadingId, setLoadingId] = useState(null); 

  useEffect(() => {
    const carregarFilmes = async () => {
      try {
        const resposta = await fetch("http://localhost/backlumiere/obras/listarseries.php");
        const dados = await resposta.json();
        setFilmes(dados);
      } catch (erro) {
        console.error("Erro ao carregar filmes:", erro);
        setMensagem("Erro ao carregar filmes.");
      }
    };
    carregarFilmes();
  }, []);

  const excluirFilme = async (id) => {
    if (!window.confirm("Deseja realmente excluir este filme?")) return;

    setLoadingId(id);
    setMensagem("");

    try {
      const resposta = await fetch("http://localhost/backlumiere/obras/excluirobra.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_obras: id }),
      });

      const resultado = await resposta.json();

      if (resultado.sucesso) {
        setFilmes(filmes.filter(f => f.id_obras !== id));
        setMensagem("Filme excluído com sucesso!");
      } else {
        setMensagem("Erro ao excluir: " + resultado.mensagem);
      }
    } catch (erro) {
      console.error("Erro ao excluir filme:", erro);
      setMensagem("Erro ao excluir filme. Veja console.");
    } finally {
      setLoadingId(null);
    }
  };

  const filmesFiltrados = filmes.filter((filme) =>
    filme.titulo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>
        <h1 className="titulo-pagina">FILMES</h1>
        <section id="sec-destaques">
          <h2>Destaques</h2>
          <CardContainer />

          <div className="pesquisa-container">
            <p className="texto-pesquisa">
              Pesquise um filme para avaliar <br /> ou ver as avaliações feitas!
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

          {mensagem && <div className="mensagem-feedback">{mensagem}</div>}

          <div className="banner-cadastro">
            <div className="banner-textos">
              <p className="banner-frase">
                Sentiu falta de alguma obra? <br /> Cadastre ela no nosso sistema!
              </p>
              <Link to="/cadastrarObras" className="banner-botao">
                Cadastrar uma nova obra!
              </Link>
            </div>
          </div>

          <div className="filtros-container">
            <select className="filtro-select"><option>Filtro 1</option></select>
            <select className="filtro-select"><option>Filtro 2</option></select>
            <select className="filtro-select"><option>Filtro 3</option></select>
          </div>

          {filmesFiltrados.map((filme) => (
            <FilmeCardADM
              key={filme.id_obras}
              id={filme.id_obras} // passa o ID
              capa={`http://localhost/backlumiere/uploads/${filme.capa}`}
              titulo={filme.titulo}
              estrelas={4}
              diretor={filme.autor}
              genero={filme.tipo}
              lancamento={filme.ano_lancamento.substring(0, 10)}
              onExcluir={() => excluirFilme(filme.id_obras)}
              disabled={loadingId === filme.id_obras} 
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ObrasSeriesADM;
