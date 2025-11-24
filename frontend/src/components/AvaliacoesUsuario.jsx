import React, { useEffect, useState } from "react";
import { pegarSessao } from "../auth";

function AvaliacoesUsuario() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const usuarioLogado = pegarSessao(); 

  useEffect(() => {
    if (!usuarioLogado) return;

    fetch(`http://localhost/backlumiere/avaliacoes/rapida/listar_usuario.php?id_usuario=${usuarioLogado.id}`)
      .then(res => res.json())
      .then(data => setAvaliacoes(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [usuarioLogado]);

  if (loading) return <p>Carregando suas avaliações...</p>;
  if (!avaliacoes.length) return <p>Você ainda não fez nenhuma avaliação.</p>;

  return (
    <div className="container mt-5">
      <h4 className="mb-4">Minhas Avaliações</h4>
      <div className="d-flex flex-column gap-4">
        {avaliacoes.map(a => (
          <div key={a.id_avaliacao_rap} className="card-avaliacao-rapida w-100">

            <div className="d-flex align-items-center gap-3 mb-2">
              <img
                src={a.foto || "/placeholder-usuario.png"}
                alt={a.usuario}
                className="foto-usuario"
              />
              <div>
                <h5 className="nome-usuario">{a.usuario}</h5>
                <span className="data-avaliacao">
                  {new Date(a.data_avaliacao_rap).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="nome-obra mb-1" style={{ fontSize: "0.9rem", fontWeight: "500", color: "#0B2239" }}>
              {a.nome_obra}
            </div>

            <div className="avaliacao-estrelas mb-3">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="estrela-pequena"
                  style={{
                    color: i < a.nota / 1 ? "#E6C74B" : "#ddd",
                    fontSize: "1.2rem"
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="avaliacao-texto">{a.comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvaliacoesUsuario;
