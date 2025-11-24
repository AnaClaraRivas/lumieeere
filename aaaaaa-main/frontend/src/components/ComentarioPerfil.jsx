import React from "react";
import "./ComentarioPerfil.css";

export default function ComentarioPerfil({ nome, livro, estrelas, texto }) {
  return (
    <div className="comentario-card">
      <div className="comentario-top">
        <div className="comentario-avatar"></div>

        <div>
          <h3 className="comentario-nome">{nome}</h3>
          <p className="comentario-livro">{livro}</p>
        </div>
      </div>

      <div className="comentario-estrelas">
        {"⭐".repeat(estrelas)}
      </div>

      <p className="comentario-texto">{texto}</p>
    </div>
  );
}
