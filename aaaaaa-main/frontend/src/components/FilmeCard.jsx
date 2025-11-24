import "./LivroCard.css";
import { Link } from "react-router-dom";

export default function FilmeCard({ capa, titulo, estrelas, diretor, genero, lancamento, tipo }) {
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

        <Link className="livro-btn" to={`/obrasdetalhes/${tipo}`}>
          Quero avaliar esse filme!
          <span className="material-icons">search</span>
        </Link >
      </div>
    </div>
  );
}