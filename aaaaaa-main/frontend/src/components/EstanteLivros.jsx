import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Button, Collapse, Modal, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const StarIcon = ({ color, size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width={size} height={size}>
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.416 3.967 1.48-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);

const Estrelas = ({ rating = 5 }) => (
  <div className="d-flex align-items-center mb-1">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} size={14} />
    ))}
  </div>
);

const ItemObra = ({ obra }) => (
  <Row className="obra-item py-3 align-items-center border-bottom border-light">
    <Col xs={4} sm={2} className="d-flex justify-content-center">
      <img src={obra.imagem} alt={obra.titulo} className="img-fluid rounded" style={{ maxWidth: '80px' }} />
    </Col>
    <Col xs={8} sm={10}>
      <h5 className="mb-1 fw-bold">{obra.titulo}</h5>
      <Estrelas rating={obra.rating} />
      <p className="mb-1 small">
        Autora: <b>{obra.autor}</b> | Editora: <b>{obra.editora}</b> | Publicação: <b>{obra.publicacao}</b>
      </p>
      <div className="mt-2">
        <Button className="btn-editar-estante me-2" size="sm">Avaliar</Button>
      </div>
    </Col>
  </Row>
);

const EstanteLivros = ({
  idEstante,
  tituloSaga,
  livrosCarrossel,
  obrasDetalhe,
  setObrasDetalhe,
  usuarioLogadoId
}) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scrollSlider = (direction) => {
    const value = direction === "left" ? -230 : 230;
    sliderRef.current?.scrollBy({ left: value, behavior: "smooth" });
  };

  const handleEditarClick = () => {
    setSenha('');
    setErro('');
    setShowModal(true);
  };

  const handleConfirmarSenha = async () => {
    if (!senha || !usuarioLogadoId || !idEstante) {
      setErro("Dados incompletos. Verifique os valores.");
      console.log({ senha, usuarioLogadoId, idEstante });
      return;
    }

    try {
      console.log("Enviando dados para verificar senha:", { id_estante: idEstante, senha, id_usuario: usuarioLogadoId });

      const response = await axios.post(
        "http://localhost/backlumiere/usuarios/verificarsenha.php",
        { id_estante: idEstante, senha, id_usuario: usuarioLogadoId },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Resposta do PHP:", response.data);

      if (response.data.success) {
        setShowModal(false);
        navigate(`/editarEstante/${idEstante}`);
      } else {
        setErro(response.data.message || "Senha incorreta");
      }
    } catch (err) {
      console.error("Erro axios:", err);
      setErro('Erro ao verificar senha');
    }
  };

  return (
    <Container fluid className="estante-container p-0">
      {/* Carrossel */}
      <div className="carousel-wrapper">
        <button className="carousel-nav-btn left" onClick={() => scrollSlider("left")}>&#9664;</button>
        <div className="slider-container d-flex flex-nowrap overflow-auto p-3 hide-scrollbar" ref={sliderRef}>
          {livrosCarrossel.map(livro => (
            <div key={livro.id} className="livro-item p-2">
              <Card className="livro-card-estante border-0 bg-transparent">
                <Card.Img src={livro.imagem} alt={livro.titulo} className="img-fluid" />
              </Card>
            </div>
          ))}
        </div>
        <button className="carousel-nav-btn right" onClick={() => scrollSlider("right")}>&#9654;</button>
      </div>

      {/* Cabeçalho */}
      <div
        className="d-flex justify-content-between align-items-center saga-header p-3 mt-3"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", backgroundColor: "#f5f0e3" }}
      >
        <h3 className="m-0 fw-bold ms-5 mb-2">{tituloSaga}</h3>
        <Button className="btn-editar-estante me-5" variant="outline-dark">
          {open ? "OCULTAR" : "EDITAR ESTANTE"}
        </Button>
      </div>

      {/* Lista de obras */}
      <Collapse in={open}>
        <div className="card-obras">
          <h4 className="mb-4 mt-2 ms-5 fw-bold">Obras:</h4>
          {obrasDetalhe.map(obra => <ItemObra key={obra.id} obra={obra} />)}
          <div className="text-center mt-4">
            <Button className="btn-editar-estante mb-5" onClick={handleEditarClick}>
              Editar Estante
            </Button>
          </div>
        </div>
      </Collapse>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-confirmar-senha"     // 🟦 estiliza o tamanho/estrutura do modal
        contentClassName="modal-confirmar-senha-conteudo"  // 🟩 estiliza todo o conteúdo interno
      >
        <Modal.Header
          closeButton
          className="modal-confirmar-senha-header"   // 🟥 estiliza o cabeçalho
        >
          <Modal.Title className="modal-confirmar-senha-titulo">
            Confirme sua senha
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-confirmar-senha-body">   {/* 🟨 estiliza o corpo */}
          <Form.Group className="form-group-senha">           {/* 🟪 estiliza o grupo da senha */}
            <Form.Label className="label-senha">Senha:</Form.Label>   {/* 🟫 estiliza o texto 'Senha:' */}

            <Form.Control
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className="input-senha"         // ⬜ estiliza o campo de input da senha
            />

            {erro && (
              <small className="erro-senha"> {/* ⬛ estiliza a mensagem de erro */}
                {erro}
              </small>
            )}
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="modal-confirmar-senha-footer">  {/* 🔵 estiliza o rodapé */}
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            className="botao-cancelar-senha"     // 🧡 estiliza o botão CANCELAR
          >
            Cancelar
          </Button>

          <Button
            variant="primary"
            onClick={handleConfirmarSenha}
            className="botao-confirmar-senha"    // 💜 estiliza o botão CONFIRMAR
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default EstanteLivros;
