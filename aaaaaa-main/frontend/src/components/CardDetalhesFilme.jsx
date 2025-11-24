import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const StarIcon = ({ color = "#ffc107", size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
       width={size} height={size} style={{ marginRight: 3 }}>
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

export default function CardDetalhesFilme({
  id_obras,   // 👈 recebemos o id da obra
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

        <Col md={8} className="detalhes-livro d-flex flex-column justify-content-center">
          <h2 className="text-center text-md-start">{titulo}</h2>

          <Estrelas className="mb-1" rating={rating} />

          <p><strong>Diretor:</strong> {diretor}</p>
          <p><strong>Ano de lançamento:</strong> {ano}</p>

          {/* 👇 Link para a página Rapida, enviando o id_obras junto */}
          <Link
            to="/rapida"
            state={{
              dados: {
                id_obras,   // 👈 ESSENCIAL
                titulo,
                capa
              }
            }}
            className="btn btn-primary mt-3"
          >
            Avaliar este filme
          </Link>
        </Col>
      </Row>
    </div>
  );
}
