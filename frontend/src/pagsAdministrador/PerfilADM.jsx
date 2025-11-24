// src/Perfil.jsx
import React, { useEffect, useState } from "react";
import InfoPerfil from "../components/InfoPerfil";
import HeaderADM from "../componentsAdm/HeaderADM.jsx";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { pegarSessao, limparSessao } from "../auth";
import "../perfil.css";

export default function PerfilADM() {
  const [usuarioBanco, setUsuarioBanco] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sessao = pegarSessao();
    if (!sessao) {
      navigate("/login");
      return;
    }

    // busca dados atualizados do backend
    fetch("http://localhost/backlumiere/usuarios/buscar_usuario.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: sessao.email }),
    })
      .then((res) => res.json())
      .then((dados) => {
        if (dados.status === "ok") setUsuarioBanco(dados.usuario);
        else setUsuarioBanco(sessao);
      })
      .catch((err) => {
        console.log(err);
        setUsuarioBanco(sessao);
      });
  }, [navigate]);

  const handleLogout = () => {
    limparSessao();
    navigate("/login");
  };

  if (!usuarioBanco) return null; // ou um loader

  return (
    <>
      <HeaderADM />

      <h1 className="titulo-pagina">PERFIL DO ADMINISTRADOR</h1>

      <div className="perfil-container">
        <div className="perfil-content">
          <div className="perfil-left">
            <div className="perfil-avatar"></div>

            <InfoPerfil
              nome={usuarioBanco.nome}
              avaliacoes={13}
              dataEntrada={usuarioBanco.data_cadastro}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Link className="perfil-btn" to="/editarperfil">Editar perfil</Link>
            <button className="perfil-btn" onClick={handleLogout}>Sair</button>
          </div>
        </div>
      </div>

      {/* botãoes */}

      <div className="container text-center card_botao">
        <div className="row row-cols-2">
            <div className="col  card_botao_perfil">
                <div className="card text-center mb-3 card_perfil" style={{ width: "20rem" }}>
                    <div className="card-body">
                        <img className="imglogohome" src="/img/logo.png" alt="" />
                        <h5 className="card-title titulo_cardzinho">Cadastrar Obras</h5> 
                        <Link className="banner-botao" to="/cadastrarObras">Cadastrar Obras</Link>

                    </div>
                </div>
            </div>

            <div className="col card_botao_perfil">
                <div className="card text-center mb-3 card_perfil" style={{ width: "20rem" }}>
                   
                    <div className="card-body">
                        <img className="imglogohome" src="/img/logo.png" alt="" /> 
                        <h5 className="card-title titulo_cardzinho">Gerenciar Obras</h5>   
                        <div className="dropdown ">
                        <a className="btn btn-secondary dropdown-toggle banner-botao " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Gerenciar Obras
                        </a>

                        <ul className="dropdown-menu drop_lista drop_menu">
                            
                            <li>
                            <Link className="dropdown-item drop_texto" to="/ObrasFilmesADM">
                            Gerenciar Filmes
                            </Link>
                            </li>

                            <li>
                            <Link className="dropdown-item drop_texto" to="/ObrasSeriesADM">
                            Gerenciar Séries
                            </Link>
                            </li>

                            <li>
                            <Link className="dropdown-item drop_texto" to="/obrasLivroADM">
                            Gerenciar Livros
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
