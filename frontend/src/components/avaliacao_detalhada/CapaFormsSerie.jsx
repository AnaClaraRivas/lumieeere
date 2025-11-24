import React from "react";
import capaPrincipe from "../../assets/img/capa-pequeno-principe.jpg";
import { Link } from "react-router-dom";

function CapaFormsSerie() {
  const capaa = capaPrincipe;

  return (
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">
        {/* Capa */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={capaa}
            alt="Capa do Pequeno Príncipe"
            className="img-fluid rounded shadow capa_detalhada"
          />
        </div>

        {/* Formulário */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3 titulo_av">O Pequeno Príncipe</h3>

          <div>
            <p className="fw-semibold mb-3">O que sente sobre esse título?</p>

            <div className="form-check">
                <input className="form-check-input trequinho_emocao" type="radio" name="radioDefault" id="radioDefault1" />
                <label className="form-check-label texto_emocao" htmlFor="radioDefault1">
                Virou minha nova obsessão! 
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input trequinho_emocao" type="radio" name="radioDefault" id="radioDefault2" />
                <label className="form-check-label texto_emocao" htmlFor="radioDefault2">
                Me destruiu e eu agradeço! 
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input trequinho_emocao" type="radio" name="radioDefault" id="radioDefault3" />
                <label className="form-check-label texto_emocao" htmlFor="radioDefault3">
                Gostei, mas quase dormi. 
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input trequinho_emocao" type="radio" name="radioDefault" id="radioDefault4" />
                <label className="form-check-label texto_emocao" htmlFor="radioDefault4">
                Perdi horas e ainda ri depois. 
                </label>
            </div>      

            <div className="form-check">
                <input className="form-check-input trequinho_emocao" type="radio" name="radioDefault" id="radioDefault5" />
                <label className="form-check-label texto_emocao" htmlFor="radioDefault5">
                Um espetáculo de decepção!
                </label>
           </div>    
          
          </div>  


            
        </div>


        {/* Critérios - FIlmes e Séries*/}
        <div>
            <p className="fw-semibold mb-3 titulo_av_criterios">Avalie essa obra por critérios:</p>

            <table className="table tabela_criterio">
                <thead>
                    <tr>
                    <th scope="col">Critério</th>
                    <th scope="col">Sua nota:</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th scope="row">Roteiro:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" className="form-label titulo_criterio"></label>
                                 <input type="number"  className="form-control caixa_criterio" id="nota"   placeholder="Digite sua nota..." min="0" max="10" step="0.1" />                            </td>
                    </tr>

                    <tr>
                        <th scope="row">Personagens:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" className="form-label titulo_criterio"></label>
                                 <input type="number"  className="form-control caixa_criterio" id="nota"   placeholder="Digite sua nota..." min="0" max="10" step="0.1" />                            </td>
                    </tr>

                    <tr>
                        <th scope="row">Atuação:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" className="form-label titulo_criterio"></label>
                                 <input type="number"  className="form-control caixa_criterio" id="nota"   placeholder="Digite sua nota..." min="0" max="10" step="0.1" />                            </td>
                    </tr>

                    <tr>
                        <th scope="row">Trilha Sonora:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" className="form-label titulo_criterio"></label>
                                 <input type="number"  className="form-control caixa_criterio" id="nota"   placeholder="Digite sua nota..." min="0" max="10" step="0.1" />                            </td>
                    </tr>

                    <tr>
                        <th scope="row">Fotografia:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" className="form-label titulo_criterio"></label>
                                 <input type="number"  className="form-control caixa_criterio" id="nota"   placeholder="Digite sua nota..." min="0" max="10" step="0.1" />                            </td>
                    </tr>

                    <tr>
                        <th scope="row">Originalidade:</th>
                            <td>
                                <label for="exampleFormControlTextarea1" className="form-label titulo_criterio"></label>
                                 <input type="number"  className="form-control caixa_criterio" id="nota"   placeholder="Digite sua nota..." min="0" max="10" step="0.1" />                            </td>
                    </tr>

                </tbody>
            </table>

        </div>

        <div className="col-12 text-center mt-4">
            <Link to="/temporadas" type="submit" className="btn btn-primary botao_valeu_a_pena">
                Próximo
            </Link>
        </div>
      </div>
    </div>
    
  );
}

export default CapaFormsSerie;
