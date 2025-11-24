import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cadastrar_Filmes.css";

function CadastrarObra() {
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

    const imagemtrocada = (event) => {
        const file = event.target.files[0];
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
        if (!titulo || !tipoObra || !sinopse || !ImgFile) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }

        if (tipoObra === "Filme" && !autor) {
            alert("Preencha quem é o Diretor!");
            return;
        }
        if (tipoObra === "Série" && (!autor || !numTemporadas || !numEpisodios)) {
            alert("Preencha todos os campos da Série");
            return;
        }
        if (tipoObra === "Livro" && (!autor || !editora)) {
            alert("Preencha Autor e Editora");
            return;
        }

        const formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("tipo", tipoObra);
        formData.append("descricao", sinopse);
        formData.append("ano", dataLancamento);
        formData.append("autor", autor);
        formData.append("editora", editora);
        if (tipoObra === "Série") {
            formData.append("num_temporadas", numTemporadas);
            formData.append("num_episodios", numEpisodios);
        }
        formData.append("genero", genero);
        formData.append("classificacao", classificacaoSelecionada);
        formData.append("id_usuario", 1);
        formData.append("capa", ImgFile);

        try {
            const resposta = await fetch("http://localhost/backlumiere/obras/cadastraserie.php", {
                method: "POST",
                body: formData,
            });
            const dados = await resposta.json();
            if (dados.erro) {
                alert("Erro: " + dados.mensagem);
            } else {
                alert(dados.mensagem);
                if (dados.caminho_imagem) {
                    setImgObra(`http://localhost/backlumiere/obras/uploads/${dados.caminho_imagem}`);
                }
                setTitulo(""); setDataLancamento(""); setAutor(""); setEditora("");
                setNumTemporadas(""); setNumEpisodios(""); setGenero(""); setTipoObra("");
                setSinopse(""); setClassificacaoSelecionada(null); setImgFile(null);
            }
        } catch (error) {
            console.error("Erro para enviar obra:", error);
            alert("Erro para enviar a obra");
        }
    };

    return (
        <div className="pag_Filmes">
            <Header />

            <div className="container my-5">
                <h2 className="text-center fw-bold mb-4">{titulo || "Cadastrar Obra"}</h2>
                <div className="mb-3">
                    <label className="form-label">Nome da Obra</label>
                    <input
                        type="text"
                        className="form-control formscss"
                        placeholder="Nome da Obra"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div className="row g-4">
                    <div className="col-md-4 text-center">
                        <input type="file" id="upload-file" accept="image/*" style={{ display: "none" }}
                            onChange={imagemtrocada} />
                        <div
                            className="Gray_Rectangle mx-auto"
                            onClick={() => document.getElementById("upload-file").click()}
                        >
                            {ImgObra ? (
                                <img src={ImgObra} alt="obra" className="gray-img" />
                            ) : (
                                <img src="/src/assets/img/Lumiere2.png" alt="placeholder" className="gray-img" />
                            )}
                        </div>
                    </div>


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
                            <label className="form-label">{tipoObra === "Filme" || tipoObra === "Série" ? "Diretor" : "Autor"}</label>
                            <input
                                type="text"
                                className="form-control formscss"
                                placeholder={tipoObra === "Filme" || tipoObra === "Série" ? "Diretor" : "Autor"}
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                            />
                        </div>

                        {tipoObra === "Livro" && (
                            <div className="mb-3">
                                <label className="form-label">Editora</label>
                                <input
                                    type="text"
                                    className="form-control formscss"
                                    placeholder="Editora"
                                    value={editora}
                                    onChange={(e) => setEditora(e.target.value)}
                                />
                            </div>
                        )}

                        {tipoObra === "Série" && (
                            <>
                                <div className="mb-3">
                                    <label className="form-label">Número de Temporadas</label>
                                    <input
                                        type="number"
                                        className="form-control formscss"
                                        placeholder="Temporadas"
                                        value={numTemporadas}
                                        onChange={(e) => setNumTemporadas(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Número de Episódios</label>
                                    <input
                                        type="number"
                                        className="form-control formscss"
                                        placeholder="Episódios"
                                        value={numEpisodios}
                                        onChange={(e) => setNumEpisodios(e.target.value)}
                                    />
                                </div>
                            </>
                        )}

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

                        <div className="mb-3">
                            <label className="form-label">Gênero</label>
                            <select
                                className=" form-select formscss "
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                            >
                                <option value="" disabled hidden>Selecione</option>
                                <option value="romance">Romance</option>
                                <option value="terror">Terror</option>
                                <option value="ficcao">Ficção</option>
                                <option value="aventura">Aventura</option>
                                <option value="comedia">Comédia</option>
                            </select>
                        </div>

                        {tipoObra !== "Livro" && (
                            <div className="mb-3">
                                <label className="form-label">Classificação Indicativa</label>
                                <div className="d-flex gap-2 flex-wrap">
                                    {opcoes.map((item) => (
                                        <button
                                            type="button"
                                            key={item.valor}
                                            className=" botoes_inidicativo"
                                            style={{
                                                backgroundColor: item.cor,
                                                border: classificacaoSelecionada === item.valor ? "3px solid white" : "none",
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

                <div className="mt-4">
                    <label className="form-label "></label>
                    <textarea
                        className="form-control formscss"
                        rows="5"
                        placeholder="Sinopse"
                        value={sinopse}
                        onChange={(e) => setSinopse(e.target.value)}
                    ></textarea>
                </div>

                <div className="text-center mt-3">
                    <button type="button" className="btn-cad" onClick={enviarAlteracao}>
                        Confirmar Cadastro
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default CadastrarObra;
