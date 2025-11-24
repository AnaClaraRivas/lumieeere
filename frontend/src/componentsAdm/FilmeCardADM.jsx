import "../components/LivroCard.css";
import { Link } from "react-router-dom";

export default function FilmeCardADM({
  id,         
  capa,
  titulo,
  estrelas,
  diretor,
  genero,
  lancamento,
  onExcluir,  
  disabled    
}) {
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
        <p><strong>Data de lançamento:</strong> {lancamento}</p>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle drop_container"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Quero gerenciar esse filme!
          </button>

          <ul className="dropdown-menu drop_lista">
            <li>
              <Link
                className="dropdown-item drop_texto"
                to={`/editarObra/${id}`} 
              >
                Alterar Informações
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item"
                onClick={onExcluir}
                disabled={disabled}
              >
                {disabled ? "Excluindo..." : "Excluir esta obra"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
