import React, { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

function Capa({ dados, onChangeAvaliacao }) {
  const [nota, setNota] = useState(null);
  const [opiniao, setOpiniao] = useState("");
  const [hover, setHover] = useState(-1);

  const estrela = {
    0.5: 'Desastre total!',
    1: 'Péssimo!',
    1.5: 'Dava pra piorar…',
    2: 'Tentei gostar… tentei.',
    2.5: 'Definitivamente foi alguma coisa.',
    3: 'Na média.',
    3.5: 'É bom, mas nem tanto.',
    4: 'Valeu a pipoca!',
    4.5: 'Quase perfeito...',
    5: 'Obra-prima!',
  };

  // 🔥 Sempre envia os dados para o componente pai
  useEffect(() => {
    onChangeAvaliacao({ nota, opiniao });
  }, [nota, opiniao, onChangeAvaliacao]);

  // 🔥 Envia para o BACKEND sempre que a nota OU opinião mudar
  useEffect(() => {
    if (!nota || !opiniao) return;

    const user = JSON.parse(localStorage.getItem("usuario"));
    if (!user || !user.id_usuarios) return;

    // ✅ Garante que o ID da obra seja reconhecido mesmo com nomes diferentes
    const idObra = dados?.id_obras || dados?.id || dados?.obraId;
    if (!idObra) return;

    fetch("http://localhost/seu_backend/salvar_avaliacao.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_usuario: user.id_usuarios,
        id_obra: idObra,
        nota: nota,
        opiniao: opiniao
      })
    })
      .then(res => res.json())
      .then(console.log)
      .catch(console.error);
  }, [nota, opiniao]);

  return (
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">

        <div className="col-md-4 text-center mb-4">
          <img
            src={`http://localhost/backlumiere/uploads/${dados?.capa}`}
            alt={dados?.titulo}
            className="img-fluid rounded shadow capa_detalhada"
          />
        </div>

        <div className="col-md-6">
          <h3 className="fw-bold mb-3 titulo_av">{dados?.titulo}</h3>

          <Rating
            value={nota}
            precision={0.5}
            onChange={(e, v) => setNota(v)}
            onChangeActive={(e, h) => setHover(h)}
          />

          <Box className="texto_estrela">
            {estrela[hover !== -1 ? hover : nota] || ""}
          </Box>

          <p className="fw-semibold mb-3">Esta obra valeu a pena?</p>

          {["Sim", "Não", "Mais ou menos"].map((op) => (
            <div className="form-check mb-2" key={op}>
              <input
                type="radio"
                className="form-check-input"
                name="opiniao"
                value={op}
                checked={opiniao === op}
                onChange={() => setOpiniao(op)}
              />
              <label>
                {op === "Sim"
                  ? "👍 Sim"
                  : op === "Não"
                    ? "👎 Não"
                    : "💬 Mais ou menos"}
              </label>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Capa;
