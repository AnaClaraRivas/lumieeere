import React, { useState } from "react";

export default function AvaliacaoDetalhadaCard({
    nome,
    data,
    foto,
    texto,
    emocao,
    criterios,
    veredito
}) {
    const [resposta, setResposta] = useState(null);

    return (
        <div className="card-avaliacao-detalhada p-4">
            <div className="row g-4 align-items-start">

                <div className="col-12 col-md-6 col-lg-5">
                    <div className="d-flex align-items-center gap-3">
                        <img src={foto} alt={nome} className="foto-usuario" />
                        <div>
                            <h5 className="nome-usuario mb-0">{nome}</h5>
                            <span className="data-avaliacao">{data}</span>
                        </div>
                    </div>

                    <div className="avaliacao-estrelas mt-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill estrela-pequena"></i>
                        ))}
                    </div>

                    <p className="avaliacao-texto">{texto}</p>

                    <p className="mt-2"><strong>Emoção:</strong> {emocao}</p>

                    <div className="mt-3 d-flex align-items-center gap-3">
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

                <div className="col-12 col-md-3 col-lg-4 criterios-coluna">
                    <p className="criterio-titulo"><strong>Critérios:</strong></p>
                    <ul className="lista-criterios">
                        <li>Enredo <span>{criterios.enredo}</span></li>
                        <li>Personagens <span>{criterios.personagens}</span></li>
                        <li>Fluidez da leitura <span>{criterios.fluidez}</span></li>
                        <li>Ambientação <span>{criterios.ambientacao}</span></li>
                        <li>Originalidade <span>{criterios.originalidade}</span></li>
                    </ul>
                </div>

                <div className="col-12 col-md-3 col-lg-3">
                    <div className="veredito-card text-center">
                        <p className="veredito-titulo">Veredito final</p>
                        <div className="veredito-icone">
                            <span class="material-symbols-outlined">
                                gavel
                            </span>
                        </div>
                        <p className="veredito-texto">{veredito}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
