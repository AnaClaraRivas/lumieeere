import React from "react";
import "./InfoPerfil.css";

export default function InfoPerfil({ nome, avaliacoes, dataEntrada }) {
  return (
    <div className="user-info">
      <h2 className="user-nome">{nome}</h2>
      <p className="user-avaliacoes">{avaliacoes} avaliações</p>
      <p className="user-data">Entrou em {dataEntrada}</p>
    </div>
  );
}
