import React from "react";
import Card from "./Card";

// imgs
import capaPrincipe from "../assets/img/capa-pequeno-principe.jpg";
import capaAcaba from "../assets/img/eassim.png";
import capaBreaking from "../assets/img/capa-breaking-bad.jpg";

function CardContainer() {
  const livros = [
    {
      img: capaPrincipe,
      titulo: "O Pequeno Príncipe",
      categoria: "Livro",
      estrelas: "★★★★★",
      descricao: "É uma obra-prima e encantadora, mas cheia de significados profundos. A narrativa é leve."
    },
    {
      img: capaAcaba,
      titulo: "É Assim Que Acaba",
      categoria: "Filme",
      estrelas: "★★★★★",
      descricao: "É uma obra-prima e encantadora, mas cheia de significados profundos. A narrativa é leve."
    },
    {
      img: capaBreaking,
      titulo: "Breaking Bad",
      categoria: "Série",
      estrelas: "★★★★★",
      descricao: "É uma obra-prima e encantadora, mas cheia de significados profundos. A narrativa é leve."
    }
  ];

  return (
    <div className="card-container">
      {livros.map((livro, index) => <Card key={index} {...livro} />)}
    </div>
  );
}

export default CardContainer;
