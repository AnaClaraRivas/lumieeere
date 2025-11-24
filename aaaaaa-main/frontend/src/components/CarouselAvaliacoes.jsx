import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";

const avaliacoes = [
  {
    nome: "Vitória Souza",
    livro: "O Pequeno Príncipe",
    texto: "É uma obra simples e encantadora, mas cheia de significado profundo. A narrativa leve combina o lúdico e a reflexão sobre a vida.",
  },
  {
    nome: "Pedro Lima",
    livro: "Harry Potter e a Pedra Filosofal",
    texto: "Uma história envolvente, cheia de fantasia e coragem. Ideal para todas as idades.",
  },
  {
    nome: "Ana Costa",
    livro: "Dom Casmurro",
    texto: "Um clássico com uma narrativa intrigante e cheia de emoções.",
  },
  {
    nome: "Lucas Martins",
    livro: "1984",
    texto: "Uma obra intensa e crítica, que faz refletir sobre o poder e a liberdade.",
  },
  {
    nome: "Camila Rocha",
    livro: "A Menina que Roubava Livros",
    texto: "Uma história tocante e cheia de emoção sobre o poder das palavras.",
  },
];

function CarouselAvaliacoes() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Mostra 3 por vez no PC
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 991, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767, // celulares
        settings: {
          slidesToShow: 1, // apenas 1 card
        },
      },
    ],
  };

  return (
    <div className="carousel-section container my-5">
      <Slider {...settings}>
        {avaliacoes.map((a, i) => (
          <div key={i} className="p-3">
            <div className="aval-card p-4" style={{ minHeight: "300px" }}>
              <h5 className="fw-bold">{a.nome}</h5>
              <p>
                <strong>Livro:</strong> {a.livro}
              </p>
              <div className="mb-2">
                {[...Array(5)].map((_, j) => (
                  <i
                    key={j}
                    className="fas fa-star"
                    style={{ color: "#E6C74B" }}
                  ></i>
                ))}
              </div>
              <p>{a.texto}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselAvaliacoes;
