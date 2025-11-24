// importa o React e o hook useState, que permite armazenar e alterar dados no componente.
import React, { useState } from "react";

import capaPrincipe from "../../assets/img/capa-pequeno-principe.jpg";

function CapaTemporadas() {
  //caminho da imagem na variável "capaa"
  const capaa = capaPrincipe;

  //armazena as respostas das temporadas.
  // chave (1, 2, 3, 4...) é o número da temporada
  // e o valor é a resposta ("Sim", "Não" ou "Mais ou menos").
  const [respostas, setRespostas] = useState({
    1: "",
    2: "",
    3: "",
  });

  // função é chamada toda vez que o usuário marca uma opção.
  //recebe o número da temporada e o valor da resposta.
  const handleChange = (temporada, valor) => {
    // atualiza o estado 'respostas' mantendo as respostas antigas (...prev)
    // e alterando apenas a temporada clicada.
    setRespostas((prev) => ({
      ...prev,
      [temporada]: valor,
    }));
  };

  //esta função será chamada quando o usuário clicar em "Publicar".
  const formsSubmit = (e) => {
    e.preventDefault(); // impede o reload automático da página (useState)


   //alert
    alert("Avaliação enviada!");

    // conexao php -- gpt analisar
    /*
      fetch("https://teu-servidor.com/api/avaliacoes.php", { //chama o php na url API (estudar sobre)
        method: "POST", //metodo que não aparec na url (aula anderson)
        headers: { //ta especificando o que ta sendo chamado pelo post
          "Content-Type": "application/json", //convertendo pra json e tal - pro front 
        },
        body: JSON.stringify(respostas), // envia as respostas em json
      })
        .then((response) => response.json()) //quando a resposta do servidor chegar vai executar esse treco ai
        .then((data) => { //no caso executar esse proximo treco
          console.log("Resposta do servidor:", data);
          // Aqui pode mostrar uma mensagem de sucesso, limpar formulário etc.
        })
        .catch((error) => { //avisa erro
          console.error("Erro ao enviar:", error);
        });
    */
  };

  return (
    // container principal do conteúdo
    <div className="row align-items-center justify-content-center">

      <h3 className="fw-bold mb-3 titulo_av text-center">
        O Pequeno Príncipe
      </h3>

      <div className="col-md-4 text-center mb-4 mb-md-0">
        <img
          src={capaa}
          alt="Capa do Pequeno Príncipe"
          className="img-fluid rounded shadow capa_detalhada_temp"
        />
      </div>

      {/* --- FORMULÁRIO DE AVALIAÇÃO --- */}
      <p className="fw-semibold mb-3 texto_ava">AVALIE POR TEMPORADAS:</p>

      <div className="container text-center av_temp">
        {/*formulário executa formsSubmit */}
        <form onSubmit={formsSubmit}>
          <div className="row">
            {/* gera automaticamente as temporadas usando map. (o map cai pegar o item de cada array executar e crair outro com um reultado diferente)*/}
            {[1, 2, 3].map((num) => (
              <div className="col" key={num}>
                <p className="fw-semibold mb-3 text_temp">
                  Temporada {num}:
                </p>

                <div className="container_cor">

                  <div className="form-check mb-2">
                    <input className="form-check-input trequinho_emocao" type="radio" name={`avaliacao-${num}`} id={`sim-${num}`} value="Sim"
                      checked={respostas[num] === "Sim"} onChange={(e) => handleChange(num, e.target.value)}/>
                    <label className="form-check-label texto_emocao"  htmlFor={`sim-${num}`}>
                      👍 Sim
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input className="form-check-input trequinho_emocao" type="radio" name={`avaliacao-${num}`} id={`nao-${num}`} value="Não" checked={respostas[num] === "Não"}  onChange={(e) => handleChange(num, e.target.value)}/>
                    <label className="form-check-label texto_emocao" htmlFor={`nao-${num}`}>
                      👎 Não
                    </label>
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input trequinho_emocao" type="radio" name={`avaliacao-${num}`} id={`maisomenos-${num}`} value="Mais ou menos"
                      checked={respostas[num] === "Mais ou menos"} onChange={(e) => handleChange(num, e.target.value)}/>
                    <label className="form-check-label texto_emocao" htmlFor={`maisomenos-${num}`}>
                      💬 Mais ou menos
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-primary botao_valeu_a_pena" >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CapaTemporadas;
