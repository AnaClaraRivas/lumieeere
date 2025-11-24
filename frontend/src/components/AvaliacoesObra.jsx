import React, { useEffect, useState } from "react";

function AvaliacoesObra({ idObras }) {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!idObras) return;

    fetch(`http://localhost/backlumiere/avaliacoes/rapida/listar_obra.php?id_obras=${idObras}`)
      .then((res) => res.json())
      .then((data) => setAvaliacoes(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [idObras]);

  if (loading) return <p>Carregando avaliações...</p>;
  if (!avaliacoes.length) return <p>Nenhuma avaliação encontrada para esta obra.</p>;

  return (
    <div className="container mt-5">
      <h4 className="mb-4">Avaliações desta obra</h4>
      <div className="d-flex flex-column gap-4">
        {avaliacoes.map((a) => (
          <div key={a.id_avaliacao_rap} className="card-avaliacao-rapida w-100">
            <div className="d-flex align-items-center gap-3">
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

            <div className="avaliacao-estrelas mt-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className="bi bi-star-fill estrela-pequena"
                  style={{ color: i < a.nota / 1 ? "#E6C74B" : "#ddd" }}
                ></i>
              ))}
            </div>

            <p className="avaliacao-texto">{a.comentario}</p>

            <div className="mt-3 pergunta-vale d-flex align-items-center gap-3">
              <span className="fw-semibold">Valeu a pena ler?</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvaliacoesObra;
