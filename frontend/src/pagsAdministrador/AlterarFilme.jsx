import React, {useState} from "react"; 
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import FilmeCardADM from "../componentsAdm/FilmeCardADM";
import Footer from "../components/Footer";

import "../Cadastrar_Filmes.css";

function AlterarFilme(){ 

    const [ImgObra, setImgObra] =useState(null);
    const imagemtrocada = (event)=> {
        const file = event.target.files[0]
            if(file){
                const imgURL = URL.createObjectURL(file); 
                setImgObra(imgURL); 
            }
    };

    const [classificacaoSelecionada, setClassificacaoSelecionada] = useState(null);

    const opcoes = [
        { valor: "L", cor: "#3CA63C" },
        { valor: "10", cor: "#1D74BB" },
        { valor: "12", cor: "#F3C425" },
        { valor: "14", cor: "#D87A2E" },
        { valor: "16", cor: "#C92124" },
        { valor: "18", cor: "#000000" },
      ];

      
      //caso fosse com o onClick: 
    //   <button onClick={() => {
    //     setClassificacaoSelecionada(valor);
    //     console.log("Classificação escolhida:", valor);}}>
    //   </button>

    // trequinho do handSelect, pra deixar o cod "mais simples"
      function handleSelect(valor){
        setClassificacaoSelecionada(valor); //salva localmente
        console.log("Classificação:", valor)
      }

    return(
        <div className="pag_Filmes">
                <Header />
                <section>
                    <h2 className="Main_Title_CO">ALTERAR OBRA</h2>
                </section>

                <section>
                    <div className="Box_Tit">
                        <label className="Tit_Nome_Livro">Nome do filme:</label>
                        <input type="text" className="Box_Tit_Livro" placeholder="Nome do filme" />
                    </div>                    
                </section>

                <section>
                    <input type="file"  id="upload-file" accept="image/*" style={{display: "none"}} onChange={imagemtrocada}/>

                    <div className="grid-container_tdr">
                        <div className="grid-item-left-third">
                            <div className="Gray_Rectangle" onClick={() => document.getElementById("upload-file").click()}>
                            {ImgObra ? (
                                <img src={ImgObra} alt="obra" className="gray-img" />
                            ) : (
                                <img src="/src/assets/img/Lumiere2.png" alt="placeholder" className="gray-img"
                                />)}
                         </div>
                    </div>
                        <div className="grid-item-right-third">
                            <div className="Box_middle">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Data de lançamento:</label>
                                </div>
                                <div>
                                    <input type="text" className="Box_Tit_Livro" placeholder="Data de lançamento" />
                                </div>
                            </div> 
                            <div className="Box_middle">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Diretor:</label>
                                </div>
                                <div>
                                    <input type="text" className="Box_Tit_Livro" placeholder="Diretor" />
                                </div>
                            </div> 
                            <div className="Box_middle">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Genêro:</label>
                                </div>
                                <div className="Dropdown_div">
                                    <select className="dropdown_CF" defaultValue="">
                                        <option className="Name_Genre_Movie" value="" disabled hidden>
                                            Gênero
                                        </option>
                                        <option value="romance">Romance</option>
                                        <option value="terror">Terror</option>
                                        <option value="ficcao">Ficção</option>
                                        <option value="aventura">Aventura</option>
                                        <option value="comedia">Comédia</option>
                                    </select>
                                </div>
                            </div>

                            <div className="Class_Indic">
                                <div className="Tit_Nome">
                                    <label className="Tit_Nome_Livro">Classificação Indicativa:</label>
                                </div>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    {opcoes.map((item) => (
                                        <button  className="botoes_inidicativo" key={item.valor}  onClick={() => handleSelect(item.valor)}  style={{backgroundColor: item.cor}}>
                                            {item.valor}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="Sinopse_name">
                        <h5>Sinopse</h5>
                    </div>
                    <div className="Big_Box">
                        <textarea type="text" className="Big_Box_Livro" placeholder="Sinopse" />
                    </div>
                    <div className="botao_cad">
                        <button className="btn-cad">Confirmar alteração da obra</button>
                    </div>
                </section>

            </div>
    )
}

export default AlterarFilme;
