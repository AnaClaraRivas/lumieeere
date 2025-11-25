import React from "react";
import { useParams, useLocation } from "react-router-dom";

import HeaderAuto from "./components/HeaderAuto";
import Footer from "./components/Footer.jsx";

import LivroCardHeader from "./components/CardDetalhes.jsx";
import CardDetalhesFilme from "./components/CardDetalhesFilme.jsx";
import CardDetalhesSerie from "./components/CardDetalhesSerie.jsx";
import CardAV from "./components/escolhe_av/CardAV.jsx";
import Sinopse from "./components/Sinopse.jsx";
import AvaliacaoRapidaCard from "./components/AvaliacaoRapida.jsx";
import AvaliacaoDetalhadaCard from "./components/AvaliacaoDetalhada.jsx";
import CardEscolheFilmeSerie from "./components/escolhe_av/CardEscolheFilmeSerie.jsx";

function ObrasDetalhes() {
  const { tipo } = useParams();
  const location = useLocation();
  const dados = location.state; 

  if (!dados) {
    return (
      <main>
        <HeaderAuto />
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          Nenhum item selecionado.
        </h2>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <HeaderAuto />

      <section className="livroobrassection">

        {/* MOSTRA O COMPONENTE CERTO */}
        {tipo === "livro" && (
          <LivroCardHeader
            capa={dados.capa}
            titulo={dados.titulo}
            autor={dados.autor}
            ano={dados.ano}
            editora={dados.editora}
          />
        )}

        {tipo === "filme" && (
          <>
            <CardDetalhesFilme
              capa={dados.capa}
              titulo={dados.titulo}
              diretor={dados.autor}
              ano={dados.ano}
              dados={dados}
            />

            {/* Card de escolha para filme */}
            {/* <CardEscolheFilmeSerie
              capa={dados.capa}
              titulo={dados.titulo}
              estrelas={dados.estrelas ?? 0}
              diretor={dados.autor ?? "Desconhecido"}
              genero={dados.genero ?? "Não informado"}
              lancamento={dados.ano ?? "N/A"}
            /> */}
          </>
        )}

        {tipo === "serie" && (
          <CardDetalhesSerie
            capa={dados.capa}
            titulo={dados.titulo}
            diretor={dados.autor}
            ano={dados.ano}
            dados={dados}
          />
        )}

        {/* SINOPSE */}
        <Sinopse texto={dados.descricao || "Sinopse indisponível."} />

        <CardAV tipo={tipo} dados={dados} />

        <div className="container mt-5">
          <div className="row g-5">

            <div className="col-md-6 mb-5">
              <AvaliacaoRapidaCard
                nome="Ana Clara Rivas"
                data="21/09/25"
                foto={dados.capa}
                texto="Lorem ipsum is simply dummy text of the printing and typesetting industry..."
              />
            </div>

            <div className="col-md-6 mb-5">
              <AvaliacaoRapidaCard
                nome="Ana Clara Rivas"
                data="21/09/25"
                foto={dados.capa}
                texto="Lorem ipsum is simply dummy text of the printing and typesetting industry..."
              />
            </div>

          </div>
          <AvaliacaoDetalhadaCard
            nome="Gabriely Santos"
            data="03/09/25"
            foto={dados.capa}
            texto="Lorem ipsum is simply dummy text of the printing and typesetting industry..."
            emocao="Me adotou emocionalmente"
            criterios={{
              enredo: 9,
              personagens: 8,
              fluidez: 10,
              ambientacao: 9,
              originalidade: 7
            }}
            veredito="Culpada de ser incrível"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ObrasDetalhes;
