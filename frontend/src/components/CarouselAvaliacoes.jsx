import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselAvaliacoes() {
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
              <h5 className="fw-bold">{a.usuario}</h5>
              <p><strong>Obra:</strong> {a.nome}</p>
              <div className="mb-2">
                {[...Array(5)].map((_, j) => (
                  <i
                    key={j}
                    className="fas fa-star"
                    style={{ color: j < a.nota / 2 ? "#E6C74B" : "#ddd" }}
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

export default CarouselAvaliacoes;
