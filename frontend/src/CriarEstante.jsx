import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './CriarEstante.css';
import './App.css';
import { pegarSessao } from "./auth"; // <-- ADICIONADO

function CriarEstante() {
  const navigate = useNavigate();

  const usuario = pegarSessao(); // <-- PEGA O USUÁRIO LOGADO
  const id_usuario = usuario?.id; // <-- PEGA O ID

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [obras, setObras] = useState([]);
  const [selecoes, setSelecoes] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("info");
  const [filtro, setFiltro] = useState("");
  const URL = "http://localhost/backlumiere";

  useEffect(() => {
    fetch(`${URL}/obras/listar.php`)
      .then((res) => res.json())
      .then((data) => setObras(data))
      .catch((err) => {
        console.error(err);
        setMensagem("Erro ao carregar obras.");
        setTipoMensagem("danger");
      });
  }, [URL]);

  const toggleSelecao = (id) => {
    if (selecoes.includes(id)) {
      setSelecoes(selecoes.filter((v) => v !== id));
    } else if (selecoes.length < 10) {
      setSelecoes([...selecoes, id]);
    } else {
      setMensagem("Você pode selecionar no máximo 10 obras.");
      setTipoMensagem("warning");
    }
  };

  const criarEstante = async (e) => {
    e.preventDefault();
    setMensagem("");

    if (!id_usuario) {
      setMensagem("Erro: usuário não identificado.");
      setTipoMensagem("danger");
      return;
    }

    try {
      const res = await fetch(`${URL}/estantes/criar.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          descricao,
          id_usuario // <-- ENVIANDO O ID DO USUÁRIO
        }),
      });

      const data = await res.json();

      if (!data.sucesso) {
        setMensagem(`Erro ao criar estante: ${data.erro ?? "desconhecido"}`);
        setTipoMensagem("danger");
        return;
      }

      const id_estante = data.id_estantes;

      const res2 = await fetch(`${URL}/estante_obras/adicionar.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_estantes: id_estante, obras: selecoes.map(Number) }),
      });

      const data2 = await res2.json();

      if (!data2.sucesso) {
        setMensagem(`Estante criada, mas erro ao adicionar obras: ${data2.erro ?? ""}`);
        setTipoMensagem("warning");
        return;
      }

      setMensagem("Estante criada com sucesso!");
      setTipoMensagem("success");
      setNome("");
      setDescricao("");
      setSelecoes([]);
      setFiltro("");
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao criar estante.");
      setTipoMensagem("danger");
    }
  };

  const obrasFiltradas = obras.filter((o) =>
    o.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="criar-estante-container container">
      <h2 className="titulo-pagina mb-4">Criar Estante</h2>

      {mensagem && <Alert variant={tipoMensagem}>{mensagem}</Alert>}

      <Form onSubmit={criarEstante}>
        <Form.Group className="mb-3 ">
          <Form.Control
            className="estante-input"
            type="text"
            placeholder="Nome da Estante"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            className="estante-textarea"
            as="textarea"
            rows={3}
            placeholder="Descrição (opcional)"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            className="estante-search"
            type="text"
            placeholder="Pesquisar obras"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </Form.Group>

        <div className="lista-obras">
          {obrasFiltradas.map((o) => (
            <Form.Check
              key={o.id_obras ?? o.id}
              type="checkbox"
              id={`obra-${o.id_obras ?? o.id}`}
              label={o.titulo}
              checked={selecoes.includes(o.id_obras ?? o.id)}
              onChange={() => toggleSelecao(o.id_obras ?? o.id)}
            />
          ))}
          {obrasFiltradas.length === 0 && <p>Nenhuma obra encontrada.</p>}
        </div>

        <div className="text-center mt-4">
          <Button type="submit" className="botao-criar">
            Criar Estante
          </Button>
        </div>

        <div className="text-center mt-4">
          <Button className="botao-criar mb-5" onClick={() => navigate("/estantes")}>
            Voltar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CriarEstante;
