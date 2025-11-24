import "./LivroCard.css";
import { Link } from "react-router-dom";

export default function LivroCard({
  capa,
  titulo,
  estrelas,
  autor,
  editora,
  ano,
  descricao,
  tipo,
  id_obras
}) {
  return (
    <div className="livro-card">
      <img src={capa} alt={titulo} className="livro-capa" />

      <div className="livro-info">
        <h2 className="livro-titulo">{titulo}</h2>

        <div className="livro-estrelas">
          {"★".repeat(estrelas)}
        </div>

        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Editora:</strong> {editora}</p>
        <p><strong>Ano de lançamento:</strong> {ano}</p>

        <Link
          className="livro-btn"
          to={`/detalhes/${tipo}/${id_obras}`} 
          state={{
            capa,
            titulo,
            estrelas,
            autor,
            editora,
            ano,
            descricao,
            tipo,
            id_obras
          }}
        >
          Quero avaliar esse {tipo}!
        </Link>
      </div>
    </div>
  );
}
