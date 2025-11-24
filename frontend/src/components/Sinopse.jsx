// src/components/Sinopse.jsx

import React from "react";

export default function Sinopse({ texto }) {
  return (
    <section className="sinopse-container">
      <div className="sinopse-titulo-wrapper">
        <span className="sinopse-linha"></span>
        <h3 className="sinopse-titulo">Sinopse</h3>
        <span className="sinopse-linha"></span>
      </div>

      <p className="sinopse-texto mt-4">{texto}</p>
    </section>
  );
}
