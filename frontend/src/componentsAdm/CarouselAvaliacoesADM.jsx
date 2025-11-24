import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselAvaliacoesADM() {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost/backlumiere/avaliacoes/rapida/listar.php") 
      .then((res) => res.json())
      .then((data) => setAvaliacoes(data))
      .catch((err) => console.error(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="carousel-section container my-5">
      <Slider {...settings}>
        {avaliacoes.map((a, i) => (
          <div key={i} className="p-3">
            <div className="aval-card p-4" style={{ minHeight: "300px" }}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold">{a.usuario}</h5>
                <button className="btn btn-secondary botao_lixo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                </button>
              </div>

              <p><strong>Obra:</strong> {a.nome}</p>
              <div className="mb-2">
                {[...Array(5)].map((_, j) => (
                  <i
                    key={j}
                    className="fas fa-star"
                    style={{ color: j < a.nota / 1 ? "#E6C74B" : "#ddd" }}
                  ></i>
                ))}
              </div>
              <p>{a.comentario}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselAvaliacoesADM;
