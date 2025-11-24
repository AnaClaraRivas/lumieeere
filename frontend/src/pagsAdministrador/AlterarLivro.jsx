// importa a biblioteca do react, faz funcionar os componentes e blablabla
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// pega os componentes header e cardcontainer da pasta components
import Header from "../components/Header";
import Footer from "../components/Footer";

// importa o css
import "../Cadastrar_Filmes.css";

function AlterarLivro() {
  const [ImgObra, setImgObra] = useState(null); // armazena imagem nova

  // função pra trocar imagem
  const imagemtrocada = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImgObra(URL.createObjectURL(file)); // mostra imagem escolhida
    }
  };

  return (
    <main>
      <div className="pag_Livros">
        <Header />

        <section>
          <h2 className="Main_Title_CO">ALTERAR OBRA</h2>
        </section>

        <section>
          <div className="Box_Tit">
            <label className="Tit_Nome_Livro">Nome do livro:</label>
            <input type="text" className="Box_Tit_Livro" placeholder="Nome do livro" />
          </div>
        </section>

        <section>
          <input
            type="file"
            id="upload-file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={imagemtrocada}
          />

          <div className="grid-container_tdr">
            {/* Imagem */}
            <div className="grid-item-left-third">
              <div
                className="Gray_Rectangle"
                onClick={() => document.getElementById("upload-file").click()}
              >
                {ImgObra ? (
                  <img src={ImgObra} alt="obra" className="gray-img" />
                ) : (
                  <img src="/src/assets/img/Lumiere2.png" alt="placeholder" className="gray-img" />
                )}
              </div>
            </div>

            {/* Inputs do lado direito */}
            <div className="grid-item-right-third">
              <div className="Box_middle">
                <div className="Tit_Nome">
                  <label className="Tit_Nome_Livro">Data de publicação:</label>
                </div>
                <div>
                  <input type="text" className="Box_Tit_Livro" placeholder="Data de publicação" />
                </div>
              </div>

              <div className="Box_middle">
                <div className="Tit_Nome">
                  <label className="Tit_Nome_Livro">Autor:</label>
                </div>
                <div>
                  <input type="text" className="Box_Tit_Livro" placeholder="Autor" />
                </div>
              </div>

              <div className="Box_middle">
                <div className="Tit_Nome">
                  <label className="Tit_Nome_Livro">Editora:</label>
                </div>
                <div>
                  <input type="text" className="Box_Tit_Livro" placeholder="Editora" />
                </div>
              </div>

              <div className="Box_middle">
                <div className="Tit_Nome">
                  <label className="Tit_Nome_Livro">Gênero:</label>
                </div>
                <div>
                  <input type="text" className="Box_Tit_Livro" placeholder="Gênero" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sinopse */}
        <section>
          <div className="Sinopse_name">
            <h5>Sinopse</h5>
          </div>
          <div className="Big_Box">
            <textarea type="text" className="Big_Box_Livro" placeholder="Sinopse" />
          </div>

          {/* Botão */}
          <div className="botao_cad">
            <button className="btn-cad">Salvar alterações</button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default AlterarLivro;
