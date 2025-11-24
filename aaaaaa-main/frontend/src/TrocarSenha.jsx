import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function TrocarSenha() {

    // guarda os dados e atualiza eles 
  const navigate = useNavigate();
  const [emailcadastrado, setEmailcadastrado] = useState("");
  const [senhanova, setSenhanova] = useState("");

  const atualizarSenha = async (e) => {
    // não deixa recarregar
    e.preventDefault();

    // requisição
    try {
      const resposta = await fetch("http://localhost/backlumiere/usuarios/esqueceusenha.php", {
        method: "POST",
        // avisa o formato
        headers: {
          "Content-Type": "application/json",
        },
        // json
        body: JSON.stringify({
          emailcadastrado,
          senhanova,
        }),
      });

    // js
      const dados = await resposta.json();

    // mensagem do back
      alert(dados.mensagem);

    //   certo
      if (dados.status === "ok") {
        // redireciona para login após atualizar
        navigate("/EditarPerfil");
      }
      
    // erro na requisição
    } catch (erro) {
      alert("Erro ao conectar ao servidor.");
      console.log(erro);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-6 col-sm-12 fazerlogin divazul">
          <h1 className="textobranco textoleft" style={{ fontWeight: "700" }}>
            Desejo alterar minha senha
          </h1>

          <p className="textobranco textoleft">Digite seu email e sua nova senha.</p>

          <Link className="btnbranco textobranco btn" to="/EditarPerfil">
            Desejo voltar ao meu perfil
          </Link>

          <img className="imglogologin" src="/img/logo.png" alt="" />
        </div>

        <div className="col-md-6 col-sm-12 entrar divbranca">
          <h1 className="textoazul" style={{ fontWeight: "700", textAlign: "left" }}>
            Trocar senha
          </h1>

          <form onSubmit={atualizarSenha}>
            <div className="divemail">
              <label className="form-label">Email cadastrado</label>
            </div>
            <input
              type="email"
              className="form-control input"
              placeholder="Seu email"
              value={emailcadastrado}
              onChange={(e) => setEmailcadastrado(e.target.value)}
              required
            />

            <div className="divsenha">
              <label className="form-label textoazul">Nova senha</label>
            </div>
            <input
              type="password"
              className="form-control input"
              placeholder="Digite a nova senha"
              value={senhanova}
              onChange={(e) => setSenhanova(e.target.value)}
              required
            />

            <input className="btnentrar textobranco btn" type="submit" value="Atualizar senha" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default TrocarSenha;
