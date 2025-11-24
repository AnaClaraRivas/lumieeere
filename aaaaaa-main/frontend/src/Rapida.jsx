// src/Rapida.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Capa from "./components/avaliacao_detalhada/Capa";
import ComentarioRapida from "./components/ComentarioRapida";
import { pegarSessao } from "./auth";

function Rapida() {
  const navigate = useNavigate();
  const { idObra } = useParams();

  const usuario = pegarSessao();
  const idUsuario = usuario?.id_usuarios || usuario?.id;

  const [dados, setDados] = useState(null);
  const [avaliacao, setAvaliacao] = useState({ nota: null, opiniao: "" });
  const [comentario, setComentario] = useState("");
  const [msg, setMsg] = useState("");

  // Buscar dados obra
  useEffect(() => {
    if (!idObra) {
      setMsg("Erro: ID da obra não encontrado na URL.");
      return;
    }

    fetch(`http://localhost/backlumiere/obras/buscarobra.php?id_obras=${idObra}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.erro) {
          setMsg("Erro: " + res.mensagem);
        } else {
          setDados(res);
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar obra:", err);
        setMsg("Erro ao conectar com o servidor.");
      });
  }, [idObra]);

  // Enviar Avaliação
  const enviarAvaliacao = async () => {
    if (!idUsuario) return setMsg("Erro: Usuário não encontrado.");
    if (!idObra) return setMsg("Erro: Obra não encontrada.");
    if (!avaliacao.nota || !avaliacao.opiniao)
      return setMsg("Preencha a nota e a opinião.");

    const envio = {
      nota: avaliacao.nota,
      opiniao: avaliacao.opiniao,
      comentario,
      id_obras: idObra,
      id_usuarios: idUsuario,
    };

    try {
      const resposta = await fetch(
        "http://localhost/backlumiere/avaliacoes/rapida/publicar_avaliacao.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(envio),
        }
      );

      const texto = await resposta.text();
      console.log("Resposta bruta backend:", texto);

      let resJson;
      try {
        resJson = JSON.parse(texto);
      } catch (e) {
        console.error("Erro ao parsear JSON:", e);
        return setMsg("Erro inesperado do servidor.");
      }

      if (resJson.status === "ok") {
        setMsg("Avaliação publicada com sucesso!");
        setComentario("");
        setAvaliacao({ nota: null, opiniao: "" });
      } else {
        setMsg("Erro: " + resJson.mensagem);
      }
    } catch (erro) {
      console.error("❌ Erro no fetch:", erro);
      setMsg("Erro ao conectar com o servidor.");
    }
  };

  return (
    <main>
      <Header />

      <h1 className="titulo-pagina">AVALIAÇÕES</h1>

      <section id="sec-destaques">
        <h2 className="subtitulo">Modo Rápido</h2>
      </section>

      {dados ? (
        <Capa dados={dados} onChangeAvaliacao={setAvaliacao} />
      ) : (
        <p>Carregando dados da obra...</p>
      )}

      <section className="section_comentario">
        <ComentarioRapida comentario={comentario} setComentario={setComentario} />
      </section>

      <div className="text-center mb-5">
        {msg && (
          <p
            className={
              msg.toLowerCase().includes("erro")
                ? "text-danger"
                : "text-success"
            }
          >
            {msg}
          </p>
        )}

        <button
          className="btn btn-primary botao_valeu_a_pena"
          style={{ maxWidth: "250px" }}
          onClick={enviarAvaliacao}
          disabled={!idObra || !idUsuario || !dados}
        >
          Publicar Avaliação
        </button>
      </div>

      <Footer />
    </main>
  );
}

export default Rapida;
