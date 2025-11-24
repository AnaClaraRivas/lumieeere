import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import EstanteLivros from "../componentsAdm/EstanteLivrosAdm.jsx";
import Header from "../components/Header.jsx";
import Footer from '../components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Estantes.css';
import '../App.css';

function EstantesAdm() {
  const [estantes, setEstantes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost/backlumiere/estantes/listar.php")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) return;

        const estantesFormatadas = data.map((estante) => ({
          id: estante.id_estantes,
          tituloSaga: estante.nome_estante,
          livrosCarrossel: estante.obras?.map((obra) => {
            const capa = obra.capa
              ? `http://localhost/backlumiere/uploads/${obra.capa}`
              : "https://via.placeholder.com/120x160?text=Capa";
            return {
              id: obra.id_obras,
              imagem: capa,
              titulo: obra.titulo,
              capa
            };
          }) || [],
          obrasDetalhe: estante.obras?.map((obra) => {
            const capa = obra.capa
              ? `http://localhost/backlumiere/uploads/${obra.capa}`
              : "https://via.placeholder.com/120x160?text=Capa";
            return {
              id: obra.id_obras,
              titulo: obra.titulo,
              autor: obra.autor || "Desconhecido",
              editora: obra.editora || "—",
              publicacao: obra.ano_lancamento?.substring(0, 4) || "—",
              imagem: capa,
              capa,
              rating: obra.rating || 0
            };
          }) || []
        }));

        setEstantes(estantesFormatadas);
      })
      .catch(err => console.error("Erro ao buscar estantes:", err));
  }, []);

  const handleExcluirObra = async (idEstante, idObra) => {
    try {
      const response = await fetch("http://localhost/backlumiere/estante_obras/apagar.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: idObra })
      });
      const data = await response.json();

      if (data.success) {
        setEstantes(prev => prev.map(est => {
          if (est.id !== idEstante) return est;
          return {
            ...est,
            obrasDetalhe: est.obrasDetalhe.filter(o => o.id !== idObra),
            livrosCarrossel: est.livrosCarrossel.filter(o => o.id !== idObra)
          };
        }));
        alert("Obra excluída com sucesso!");
      } else {
        alert("Erro ao excluir obra: " + data.mensagem);
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao se comunicar com o servidor.");
    }
  };
  console.log(estantes);

  return (
    <div className="EstanteTeste">
      <Header />
      <h2 className="text-center my-4 estante-titulo">ESTANTES</h2>

      {estantes.map((dados) => {
        console.log("ID recebido:", dados.id);
        return (
          <EstanteLivros
            key={dados.id}
            idEstante={dados.id}
            tituloSaga={dados.tituloSaga}
            livrosCarrossel={dados.livrosCarrossel}
            obrasDetalhe={dados.obrasDetalhe}
            setObrasDetalhe={(novasObras) => {
              setEstantes(prev => prev.map(est =>
                est.id === dados.id ? { ...est, obrasDetalhe: novasObras } : est
              ));
            }}
          />
        );
      })}


      <div className="text-center mt-4 ">
        <Button className="btn-editar-estante mb-5" onClick={() => navigate("/criarEstante")} >
          Criar Estante
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default EstantesAdm;