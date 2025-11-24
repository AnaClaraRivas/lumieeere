// src/Perfil.jsx
import React, { useEffect, useState } from "react";
import InfoPerfil from "./components/InfoPerfil";
import HeaderAuto from "./components/HeaderAuto";
import Footer from "./components/Footer";
import AvaliacoesUsuario from "./components/AvaliacoesUsuario.jsx";
import { Link, useNavigate } from "react-router-dom";
import { pegarSessao, limparSessao } from "./auth";
import "./perfil.css";


export default function Perfil() {
  const [usuarioBanco, setUsuarioBanco] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sessao = pegarSessao();
    if (!sessao) {
      navigate("/login");
      return;
    }

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
      <HeaderAuto />

      <h1 className="titulo-pagina">PERFIL</h1>

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

      <div className="container mb-5">
        <AvaliacoesUsuario />
      </div>

      <Footer />
    </>
  );
}
