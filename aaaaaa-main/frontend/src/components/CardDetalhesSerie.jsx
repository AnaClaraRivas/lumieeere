import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const StarIcon = ({ color = "#ffc107", size = 16 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        style={{ marginRight: 3 }}
    >
        <path
            fill={color}
            d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"
        />
    </svg>
);

const Estrelas = ({ rating = 5 }) => (
    <div className="d-flex align-items-center mb-2">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} size={18} />
        ))}
    </div>
);

export default function CardDetalhesSeries({
    capa,
    titulo,
    diretor,
    genero,
    ano,
    rating = 5,
}) {
    return (
        <div className="card-header-livro mb-5">
            <Row className="d-flex align-items-center h-100">
                <Col md={4}>
                    <img
                        src={capa}
                        alt={`Capa do filme ${titulo}`}
                        className="capa-livro d-block mx-auto"
                    />
                </Col>

                <Col
                    md={8}
                    className="detalhes-livro d-flex flex-column justify-content-center"
                >
                    <h2 className="text-center text-md-start">{titulo}</h2>

                    <Estrelas className="mb-1" rating={rating} />

                    <p><strong>Diretor:</strong> {diretor}</p>
                    {/* <p><strong>Gênero:</strong> {genero}</p> */}
                    <p><strong>Ano de lançamento:</strong> {ano}</p>

                    {/* BOTÕES DE AVALIAÇÃO IGUAIS AO LIVRO */}
                    {/* <div className="d-flex gap-3 mt-3 flex-wrap align-self-md-start align-self-center">
                        
                        <Link
                            to="/avaliacaoSimples/filme"
                            className="btn btn-outline-light btn-quero"
                        >
                            Avaliação Simples
                            <i className="bi bi-star-half ms-2"></i>
                        </Link>

                        <Link
                            to="/avaliacaoDetalhada/filme"
                            className="btn btn-light text-dark btn-quero"
                        >
                            Avaliação Detalhada
                            <i className="bi bi-card-checklist ms-2"></i>
                        </Link>

                    </div> */}

                </Col>
            </Row>
        </div>
    );
}
