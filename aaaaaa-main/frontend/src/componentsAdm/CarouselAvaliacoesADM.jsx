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

function CarouselAvaliacoesADM() {
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
              
              <div class="row">
                  <div class="col-8">
                    <h5 className="fw-bold">{a.nome}</h5>
                  </div>
                  <div class="col-4">
                    
                    {/* fazer um delete no banco depois */}
                    <button className="btn btn-secondary botao_lixo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="currentColor" className="bi bi-trash lixinho" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                      </svg>
                    </button>
                  </div>
              </div>


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

export default CarouselAvaliacoesADM;