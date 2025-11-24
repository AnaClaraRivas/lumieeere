// src/Perfil.jsx
import React, { useEffect, useState } from "react";
import InfoPerfil from "./components/InfoPerfil";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComentarioPerfil from "./components/ComentarioPerfil";
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

  const comentarios = [
    {
      nome: "Gabriely Santos",
      livro: "O Pequeno Príncipe",
      estrelas: 5,
      texto: "É uma obra simples e encantadora, mas cheia de significados profundos. A narrativa leve e poética..."
    },
    {
      nome: "Gabriely Santos",
      livro: "O Pequeno Príncipe",
      estrelas: 4,
      texto: "Uma história tocante que ensina sobre amor, amizade e essência das pessoas..."
    },
    // ... (mantenha seus comentários)
  ];

  if (!usuarioBanco) return null; // ou um loader

  return (
    <>
      <Header />

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

      <div className="comentarios-grid">
        {comentarios.map((item, index) => (
          <ComentarioPerfil
            key={index}
            nome={item.nome}
            livro={item.livro}
            estrelas={item.estrelas}
            texto={item.texto}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
