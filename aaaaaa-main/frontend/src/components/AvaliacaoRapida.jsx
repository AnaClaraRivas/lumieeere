
import React, { useState } from "react";

export default function AvaliacaoRapidaCard({
    nome,
    data,
    texto,
    foto
}) {
    const [resposta, setResposta] = useState(null); // sim ou nao

    return (
        <div className="card-avaliacao-rapida">
            <div className="d-flex align-items-center gap-3">
                <img src={foto} alt={nome} className="foto-usuario" />

                <div>
                    <h5 className="nome-usuario">{nome}</h5>
                    <span className="data-avaliacao">{data}</span>
                </div>
            </div>

            <div className="avaliacao-estrelas mt-2 mb-3">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill estrela-pequena"></i>
                ))}
            </div>

            <p className="avaliacao-texto">{texto}</p>

            <div className="mt-3 pergunta-vale d-flex align-items-center gap-3">
                <span className="fw-semibold">Valeu a pena ler?</span>

                <button
                    className={`btn botao-resposta ${resposta === "sim" ? "selecionado" : ""}`}
                    onClick={() => setResposta("sim")}
                >
                    <i className={`bi ${resposta === "sim" ? "bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up"}`}></i>
                </button>

                <button
                    className={`btn botao-resposta ${resposta === "nao" ? "selecionado-negativo" : ""}`}
                    onClick={() => setResposta("nao")}
                >
                    <i className={`bi ${resposta === "nao" ? "bi-hand-thumbs-down-fill" : "bi-hand-thumbs-down"}`}></i>
                </button>
            </div>
        </div>
    );
}
