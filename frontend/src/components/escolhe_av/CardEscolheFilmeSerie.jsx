import React from "react"; 

function CardEscolheFilmeSerie({ capa, titulo, estrelas, autor, genero, ano_lancamento }) {
  return (
    <div className="livro_card_escolher">
      <img src={capa} alt={titulo} className="livro_capa_escolhe" />

      <div className="livro_informa">
        <h2 className="livro_titulo_escolhe">{titulo}</h2>

        <div className="livro-estrelas">
          {"★".repeat(estrelas ?? 0)}
        </div>

        <p><strong>Diretor/Criador:</strong> {autor ?? "Desconhecido"}</p>
        <p><strong>Gênero:</strong> {genero ?? "Não informado"}</p>
        <p><strong>Lançamento:</strong> {ano_lancamento ?? "N/A"}</p>
      </div>
    </div>
  );
}

export default CardEscolheFilmeSerie;
