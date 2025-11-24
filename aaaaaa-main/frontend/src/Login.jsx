// src/Login.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { salvarSessao } from "./auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost/backlumiere/usuarios/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await resposta.json();

      if (dados.status === "erro") {
        alert(dados.mensagem);
        return;
      }

      if (dados.status === "ok") {
        // salva sessão e redireciona
        salvarSessao(dados.usuario);
        navigate("/inicial");
      }
    } catch (erro) {
      alert("Erro ao conectar com o servidor.");
      console.log(erro);
    }
  };

  return (
    <div className="container-fluid p-0">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');`}
      </style>

      <div className="row">
        <div className="col-md-6 col-sm-12 entrar divbranca" style={{alignItems: "normal"}}>
          <h1 className="textoazul" style={{ fontWeight: "700", textAlign: "left" }}>
            Faça seu login
          </h1>

          <form onSubmit={login}>
            <div className="divemail">
              <img className="imgpessoa" src="/img/email.png" alt="Email" />
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
              <img className="imgsenha" src="/img/senha.png" alt="Senha" />
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

            <div className="lembrarsenha">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label textoazul" htmlFor="remember">
                Lembrar senha
              </label>
            </div>

            <div className="esqueceusenha">
              <Link to="/esqueceusenha" className="textoazul" style={{ display: "block", marginTop: "10px" }}>
                Esqueceu a senha?
              </Link>
            </div>

            <button className="btnentrar textobranco btn" type="submit">
              Entrar
            </button>
          </form>
        </div>

        <div className="col-md-6 col-sm-12 criarconta divazul" style={{alignItems: "normal"}}>
          <h1 className="textobranco textoleft" style={{ fontWeight: "700" }}>
            Ainda não tem uma conta?
          </h1>

          <p className="textobranco textoleft">Crie uma conta e faça suas avaliações!</p>

          <Link className="btnbranco textobranco btn" to="/criarconta">
            Criar conta
          </Link>

          <img className="imglogologin" src="/img/logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Login;
