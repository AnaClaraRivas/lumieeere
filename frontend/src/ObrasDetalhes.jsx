import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import HeaderAuto from "./components/HeaderAuto";
import Footer from "./components/Footer.jsx";

import LivroCardHeader from "./components/CardDetalhes.jsx";
import CardDetalhesFilme from "./components/CardDetalhesFilme.jsx";
import CardDetalhesSerie from "./components/CardDetalhesSerie.jsx";
import CardAV from "./components/escolhe_av/CardAV.jsx";
import Sinopse from "./components/Sinopse.jsx";
import AvaliacoesObra from "./components/AvaliacoesObra.jsx";

import AvaliacaoRapidaCard from "./components/AvaliacaoRapida.jsx";
import AvaliacaoDetalhadaCard from "./components/AvaliacaoDetalhada.jsx";

function ObrasDetalhes() {
  const { tipo, idObras } = useParams(); 
  const location = useLocation();
  const navigate = useNavigate();

  const [dados, setDados] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!dados && idObras) {
      setLoading(true);
      fetch(`http://localhost/backlumiere/obras/buscarobra.php?id_obras=${idObras}`)
        .then(res => res.json())
        .then(res => {
          if (res.erro) {
            setErro("Erro ao buscar obra: " + res.mensagem);
          } else {
            setDados(res);
          }
        })
        .catch(err => setErro("Erro ao conectar com o servidor."))
        .finally(() => setLoading(false));
    }
  }, [dados, idObras]);

  if (loading) {
    return (
      <main>
        <Header />
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>Carregando dados da obra...</h2>
        <Footer />
      </main>
    );
  }

  if (erro || !dados) {
    return (
      <main>
        <HeaderAuto />
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          {erro || "Nenhum item selecionado."}
        </h2>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <HeaderAuto />

      <section className="livroobrassection">
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
          <CardDetalhesFilme
            capa={dados.capa}
            titulo={dados.titulo}
            diretor={dados.autor}
            ano={dados.ano}
            dados={dados}
          />
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

        <Sinopse texto={dados.descricao || "Sinopse indisponível."} />

        <CardAV tipo={tipo} dados={dados} />


        <div className="container mt-5">
          <div className="row g-5 mb-5">
            <AvaliacoesObra idObras={idObras} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ObrasDetalhes;
