import React from "react";
import { Link } from "react-router-dom";

function CardAV({ tipo, dados }) {
    return (
        <div className="container text-center">

            <div className="row row-cols-2">
                <div className="container_av_rapida">
                    <div className="col card_escolhe">
                        <h5 className="titulo_card_escolha">Quero fazer uma avaliação rápida! </h5>

                        <Link
                            className="livro-btn"
                            to={`/rapida/${dados.id_obras}`}
                        >
                            Fazer uma avaliação rápida
                        </Link>
                    </div>

                    <div className="col textinho_avra">
                        <ul> 📽️Indique a quantidade de estrelas</ul>
                        <ul> 📽️Escreva um comentário sobre;</ul>
                        <ul> 📽️Diga se valeu a pena ler/assistir.</ul>
                    </div>
                </div>

                <div className="container_av_rapida">
                    <div className="col card_escolhe">
                        <h5 className="titulo_card_escolha">Quero fazer uma avaliação detalhada!</h5>

                        <Link
                            className="livro-btn"
                            to={`/detalhada/${tipo}`}
                            state={{ dados }}   // ➜ envia também para detalhada
                        >
                            Fazer uma avaliação detalhada
                        </Link>
                    </div>

                    <div className="col textinho_avra">
                        <ul>📽️Indique a quantidade de estrelas;</ul>
                        <ul>📽️Escreva um comentário sobre;</ul>
                        <ul>📽️Diga se valeu a pena assistir;</ul>
                        <ul>📽️Diga que emoção você sentiu;</ul>
                        <ul>📽️Avalie diferentes critérios;</ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CardAV;
