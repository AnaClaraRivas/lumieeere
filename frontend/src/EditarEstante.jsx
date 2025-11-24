import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./CriarEstante.css";
import "./App.css";

function EditarEstante() {
  const { idEstante } = useParams();

  const navigate = useNavigate();

  const URL = "http://localhost/backlumiere";

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [obras, setObras] = useState([]);
  const [selecoes, setSelecoes] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("info");
  const [filtro, setFiltro] = useState("");

  const toggleSelecao = (idObra) => {
    setSelecoes((prev) =>
      prev.includes(idObra)
        ? prev.filter((x) => x !== idObra)
        : [...prev, idObra]
    );
  };

  const salvarAlteracoes = () => {
    fetch(`http://localhost/backlumiere/estantes/editar_estante.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Number(idEstante),
        nome: nome,
        descricao: descricao,
        obras: selecoes
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.sucesso) {
          setMensagem("Alterações salvas com sucesso!");
          setTipoMensagem("success");
        } else {
          setMensagem(data.erro || "Erro ao salvar.");
          setTipoMensagem("danger");
        }
      });
  };

  const excluirEstante = () => {
    if (!window.confirm("Tem certeza que deseja apagar esta estante?")) return;

    fetch(`http://localhost/backlumiere/estantes/excluir_estante.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Number(idEstante) })
    })
      .then(res => res.json())
      .then(data => {
        if (data.sucesso) {
          alert("Estante apagada com sucesso!");
          navigate("/estantes");
        } else {
          setMensagem(data.erro || "Erro ao excluir estante.");
          setTipoMensagem("danger");
        }
      });
  };

  useEffect(() => {
    fetch(`${URL}/obras/listar.php`)
      .then((res) => res.json())
      .then((data) => setObras(data))
      .catch(() => {
        setMensagem("Erro ao carregar obras.");
        setTipoMensagem("danger");
      });
  }, []);


  useEffect(() => {
    fetch(`http://localhost/backlumiere/estantes/listar_unica.php?id=${idEstante}`)

      .then((res) => res.json())
      .then((data) => {
        setNome(data.nome_estante); setDescricao(data.descricao);

        const marcadas = data.obras.map((o) => Number(o.id_obras));
        setSelecoes(marcadas);
      })
      .catch((err) => console.error(err));
  }, [idEstante]);

  const obrasFiltradas = obras.filter((o) =>
    o.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="criar-estante-container container">
      <h2 className="titulo-pagina mb-4">Editar Estante</h2>

      {mensagem && <Alert variant={tipoMensagem}>{mensagem}</Alert>}

      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            className="estante-input"
            value={nome}
            placeholder="Nome da Estante"
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            className="estante-textarea"
            value={descricao}
            placeholder="Descrição"
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Control
            className="estante-search"
            type="text"
            placeholder="Pesquisar obras"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </Form.Group>

        <div className="lista-obras mt-3">
          {obrasFiltradas.map((o) => (
            <Form.Check
              key={o.id_obras}
              type="checkbox"
              id={`obra-${o.id_obras}`}
              label={o.titulo}
              checked={selecoes.includes(Number(o.id_obras))}
              onChange={() => toggleSelecao(Number(o.id_obras))}
            />
          ))}
        </div>

        <div className="text-center mt-4">
          <Button className="botao-criar" onClick={salvarAlteracoes}>
            Salvar Alterações
          </Button>
        </div>

        <div className="text-center mt-4">
          <Button className="botao-excluir" onClick={excluirEstante}>
            Excluir Estante
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

export default EditarEstante;
