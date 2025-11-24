import "./LivroCard.css";
import { Link } from "react-router-dom";

export default function SerieCard({ capa, titulo, estrelas, diretor, genero, lancamento, tipo }) {
  return (
    <div className="livro-card">
      <img src={capa} alt={titulo} className="livro-capa" />

      <div className="livro-info">
        <h2 className="livro-titulo">{titulo}</h2>

        <div className="livro-estrelas">
          {"★".repeat(estrelas)}
        </div>

        <p><strong>Diretor:</strong> {diretor}</p>
        <p><strong>Gênero:</strong> {genero}</p>
        <p><strong>Lançamento:</strong> {lancamento}</p>

        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/detalhes/${dados.tipo}/${dados.id_obras}`, { state: dados })}
        >
          Quero avaliar este filme!
        </button>
      </div>
    </div>
  );
}