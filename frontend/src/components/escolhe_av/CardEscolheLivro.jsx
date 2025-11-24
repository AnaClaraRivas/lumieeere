import React, { useState } from "react"; 

function CardEscolheLivro({ capa, titulo, estrelas, autor, editora, ano, anoBrasil }){
    return(
    <div className="livro_card_escolher">
      <img src={capa} alt={titulo} className="livro_capa_escolhe" />

      <div className="livro_informa">
        <h2 className="livro_titulo_escolhe">{titulo}</h2>

        <div className="livro-estrelas">
          {"★".repeat(estrelas)}
        </div>

        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Editora:</strong> {editora}</p>
        <p><strong>Ano de publicação:</strong> {ano} (original) / {anoBrasil} (Brasil)</p>
      </div>
    </div>
    );
}

export default CardEscolheLivro;