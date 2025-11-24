import React from "react";

function ComentarioRapida({ comentario, setComentario }) {
  return (
    <div className="mb-3 comentario">
      <label className="form-label titulo_av">Escreva um comentário:</label>

      <textarea
        className="form-control caixa_comentario"
        rows="3"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
    </div>
  );
}

export default ComentarioRapida;
