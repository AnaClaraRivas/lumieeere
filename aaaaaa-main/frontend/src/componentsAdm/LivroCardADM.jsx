import "../components/LivroCard.css";
import { Link } from "react-router-dom";

export default function LivroCardADM({ capa, titulo, estrelas, autor, editora, ano, anoBrasil }) {
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
        <p><strong>Ano de publicação:</strong> {ano} (original) / {anoBrasil} (Brasil)</p>

        
        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle drop_container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Quero gerenciar esse livro!
          </a>

          <ul className="dropdown-menu drop_lista">
             <li>
                <Link className="dropdown-item drop_texto" to="/alterarLivro">
                Alterar Informações
                </Link>
              </li>
            {/* nesta parte de excluir é um select */}
            <li><a className="dropdown-item" href="#">Excluir esta obra</a></li> 
          </ul>
        </div>
        
        
        {/* <Link className="livro-btn" to="/obrasDetalhes">
          Quero gerenciar esse livro!
        </Link > */}
      </div>
    </div>
  );
}


