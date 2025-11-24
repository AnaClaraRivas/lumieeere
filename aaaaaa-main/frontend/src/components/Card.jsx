
import React from "react";

function Card({ img, titulo, categoria, estrelas, descricao }) {
  const handleClick = () => {
    alert(`Você clicou em "${titulo}"`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={img} alt={titulo} className="capa" />
      <div className="info">
        <h2>{titulo}</h2>
        <p className="categoria">{categoria}</p>
        <div className="estrelas">{estrelas}</div>
        <p className="descricao">{descricao}</p>
      </div>
    </div>
  );
}

export default Card;
