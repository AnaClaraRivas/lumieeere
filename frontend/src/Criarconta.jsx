// src/Criarconta.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Criarconta() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("Administrador");

  const cadastrar = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost/backlumiere/usuarios/cadastrar.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
          tipo_usuario: perfil,
        }),
      });

      const dados = await resposta.json();
      alert(dados.mensagem);

      if (dados.status === "ok") {
        // redireciona para login
        navigate("/login");
      }
    } catch (erro) {
      console.log("Erro ao cadastrar:", erro);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-6 col-sm-12 fazerlogin divazul" style={{alignItems: "normal"}}>
          <h1 className="textobranco textoleft" style={{ fontWeight: "700" }}>
            Já possui uma conta?
          </h1>

          <p className="textobranco textoleft">Clique no botão e realize seu login!</p>

          <Link className="btnbranco textobranco btn" to="/login">
            Fazer login
          </Link>

          <img className="imglogologin" src="/img/logo.png" alt="" />
        </div>

        <div className="col-md-6 col-sm-12 entrar divbranca" style={{alignItems: "normal"}}>
          <h1 className="textoazul" style={{ fontWeight: "700", textAlign: "left" }}>
            Crie sua conta
          </h1>

          <form onSubmit={cadastrar}>
            <div className="divnome">
              <label className="form-label">Nome completo</label>
            </div>
            <input
              type="text"
              className="form-control input"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <div className="divemail">
              <label className="form-label">Email</label>
            </div>
            <input
              type="email"
              className="form-control input"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="divsenha">
              <label className="form-label textoazul">Senha</label>
            </div>
            <input
              type="password"
              className="form-control input"
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <div className="perfil-toggle" role="group">
              <input
                type="radio"
                className="btn-check"
                name="perfil"
                id="admin"
                autoComplete="off"
                value="Administrador"
                checked={perfil === "Administrador"}
                onChange={(e) => setPerfil(e.target.value)}
              />
              <label className="btn btn-outline-custom" htmlFor="admin">
                Administrador
              </label>

              <input
                type="radio"
                className="btn-check"
                name="perfil"
                id="avaliador"
                autoComplete="off"
                value="Avaliador"
                checked={perfil === "Avaliador"}
                onChange={(e) => setPerfil(e.target.value)}
              />
              <label className="btn btn-outline-custom" htmlFor="avaliador">
                Avaliador
              </label>
            </div>

            <input className="btnentrar textobranco btn" type="submit" value="Criar conta" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Criarconta;
