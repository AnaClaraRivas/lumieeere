import React from "react";

function CardLivro({ image, alt }) {
  return (
    <div className="card-livro">
      <img src={image} alt={alt} className="book-cover" />
    </div>
  );
}

export default CardLivro;
