import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Cadastrar_Filmes.css";

function EditarObra() {

    const { id } = useParams();

    const [titulo, setTitulo] = useState("");
    const [dataLancamento, setDataLancamento] = useState("");
    const [autor, setAutor] = useState("");
    const [editora, setEditora] = useState("");
    const [numTemporadas, setNumTemporadas] = useState("");
    const [numEpisodios, setNumEpisodios] = useState("");
    const [genero, setGenero] = useState("");
    const [tipoObra, setTipoObra] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [classificacaoSelecionada, setClassificacaoSelecionada] = useState(null);

    const [ImgObra, setImgObra] = useState(null);
    const [ImgFile, setImgFile] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost/backlumiere/obras/buscarobra.php?id_obras=${id}`)
                .then(res => res.json())
                .then(data => {

                    setTitulo(data.titulo);
                    setTipoObra(data.tipo);
                    setSinopse(data.descricao);
                    setAutor(data.autor);

                    setDataLancamento(data.ano_lancamento?.substring(0, 10));
                    setEditora(data.editora || "");
                    setGenero(data.genero || "");
                    setClassificacaoSelecionada(data.classificacao || null);

                    if (data.capa) {
                        setImgObra(
                            data.capa.includes("http")
                                ? data.capa
                                : `http://localhost/backlumiere/uploads/${data.capa}`
                        );
                    }

                    setNumTemporadas(data.num_temporadas || "");
                    setNumEpisodios(data.num_episodios || "");
                });
        }
    }, [id]);

    const imagemtrocada = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImgFile(file);
            setImgObra(URL.createObjectURL(file));
        }
    };

    const opcoes = [
        { valor: "L", cor: "#3CA63C" },
        { valor: "10", cor: "#1D74BB" },
        { valor: "12", cor: "#F3C425" },
        { valor: "14", cor: "#D87A2E" },
        { valor: "16", cor: "#C92124" },
        { valor: "18", cor: "#000000" },
    ];

    const handleSelect = (valor) => setClassificacaoSelecionada(valor);

    const enviarAlteracao = async () => {

        const url = id
            ? "http://localhost/backlumiere/obras/alterarobra.php"
            : "http://localhost/backlumiere/obras/cadastraserie.php";

        const formData = new FormData();

        if (id) formData.append("id_obras", id);

        formData.append("titulo", titulo);
        formData.append("tipo", tipoObra);
        formData.append("descricao", sinopse);
        formData.append("ano", dataLancamento);
        formData.append("autor", autor);
        formData.append("editora", editora);
        formData.append("genero", genero);
        formData.append("classificacao", classificacaoSelecionada);
        formData.append("id_usuario", 1);

        if (tipoObra === "Série") {
            formData.append("num_temporadas", numTemporadas);
            formData.append("num_episodios", numEpisodios);
        }

        if (ImgFile) formData.append("capa", ImgFile);

        const resposta = await fetch(url, { method: "POST", body: formData });
        const dados = await resposta.json();

        alert(dados.mensagem);
    };

    return (
        <div className="pag_Filmes">
            <Header />

            <div className="container my-5">

                <h2 className="text-center fw-bold mb-4">
                    {id ? "Editar Obra" : "Cadastrar Obra"}
                </h2>

                {/* Campo Nome */}
                <div className="mb-3">
                    <label className="form-label">Nome da Obra</label>
                    <input
                        type="text"
                        className="form-control formscss"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                {/* GRID */}
                <div className="row g-4">

                    {/* IMAGEM */}
                    <div className="col-md-4 text-center">
                        <input
                            type="file"
                            id="upload-file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={imagemtrocada}
                        />
                        <div
                            className="Gray_Rectangle mx-auto"
                            onClick={() => document.getElementById("upload-file").click()}
                        >
                            <img
                                src={ImgObra || "/src/assets/img/Lumiere2.png"}
                                className="gray-img"
                            />
                        </div>
                    </div>

                    {/* COLUNA DIREITA */}
                    <div className="col-md-8">

                        <div className="mb-3">
                            <label className="form-label">Data de Lançamento</label>
                            <input
                                type="date"
                                className="form-control formscss"
                                value={dataLancamento}
                                onChange={(e) => setDataLancamento(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                {(tipoObra === "Filme" || tipoObra === "Série") ? "Diretor" : "Autor"}
                            </label>
                            <input
                                type="text"
                                className="form-control formscss"
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                            />
                        </div>

                        {/* EDITORA SE FOR LIVRO */}
                        {tipoObra === "Livro" && (
                            <div className="mb-3">
                                <label className="form-label">Editora</label>
                                <input
                                    type="text"
                                    className="form-control formscss"
                                    value={editora}
                                    onChange={(e) => setEditora(e.target.value)}
                                />
                            </div>
                        )}

                        {/* CAMPOS DE SÉRIE */}
                        {tipoObra === "Série" && (
                            <>
                                <div className="mb-3">
                                    <label className="form-label">Número de Temporadas</label>
                                    <input
                                        type="number"
                                        className="form-control formscss"
                                        value={numTemporadas}
                                        onChange={(e) => setNumTemporadas(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Número de Episódios</label>
                                    <input
                                        type="number"
                                        className="form-control formscss"
                                        value={numEpisodios}
                                        onChange={(e) => setNumEpisodios(e.target.value)}
                                    />
                                </div>
                            </>
                        )}

                        {/* TIPO */}
                        <div className="mb-3">
                            <label className="form-label">Tipo da Obra</label>
                            <select
                                className="form-select formscss"
                                value={tipoObra}
                                onChange={(e) => setTipoObra(e.target.value)}
                            >
                                <option value="" disabled hidden>Selecione</option>
                                <option value="Filme">Filme</option>
                                <option value="Série">Série</option>
                                <option value="Livro">Livro</option>
                            </select>
                        </div>

                        {/* GENERO */}
                        <div className="mb-3">
                            <label className="form-label">Gênero</label>
                            <select
                                className="form-select formscss"
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                            >
                                <option value="">Selecione</option>
                                <option value="romance">Romance</option>
                                <option value="terror">Terror</option>
                                <option value="ficcao">Ficção</option>
                                <option value="aventura">Aventura</option>
                                <option value="comedia">Comédia</option>
                            </select>
                        </div>

                        {/* CLASSIFICAÇÃO */}
                        {tipoObra !== "Livro" && (
                            <div className="mb-3">
                                <label className="form-label">Classificação Indicativa</label>
                                <div className="d-flex gap-2 flex-wrap">
                                    {opcoes.map((item) => (
                                        <button
                                            type="button"
                                            key={item.valor}
                                            className="botoes_inidicativo"
                                            style={{
                                                backgroundColor: item.cor,
                                                border: classificacaoSelecionada === item.valor
                                                    ? "3px solid white"
                                                    : "none"
                                            }}
                                            onClick={() => handleSelect(item.valor)}
                                        >
                                            {item.valor}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                {/* SINOPSE */}
                <div className="mt-4">
                    <textarea
                        className="form-control formscss"
                        rows="5"
                        value={sinopse}
                        onChange={(e) => setSinopse(e.target.value)}
                        placeholder="Sinopse"
                    ></textarea>
                </div>

                {/* BOTÃO */}
                <div className="text-center mt-3">
                    <button className="btn-cad" onClick={enviarAlteracao}>
                        {id ? "Salvar Alterações" : "Confirmar Cadastro"}
                    </button>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default EditarObra;
