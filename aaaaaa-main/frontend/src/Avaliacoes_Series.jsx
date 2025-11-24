import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Avaliacoes_Series.css';
import './App.css';
import { Link } from "react-router-dom";
import Estrelas_Av from "./assets/img/Estrelas_Av.png";
import Harry_Potter from "./assets/img/ST.png";

function Avaliacoes_Series(){
    return(
        <main>
            <div className="pag_av_series">
            <Header />
                <section>
                    <h2 className="Main_Title_CO">AVALIAÇÕES</h2>
                </section>
                <section>
                    <div class="Retangulo_Azul">
                        <div className="Grid_Ret_Azul">
                            <div className="Left_Box_Ret_Azul">
                                <img src="/src/assets/img/ST.png" alt="logo" className="Harry_Potter_IMG"/>
                            </div>
                            <div className="Right_Box_Ret_Azul">
                                <div class="row_Ret_Azul">
                                    <div className="Text_Ret_Azul">
                                        <h3 className="h3_noblue">Stranger Things</h3>
                                    </div>
                                </div>
                                <div class="row_Ret_Azul">
                                    <img src="/src/assets/img/Estrelas_Av.png" alt="logo" className="Estrelas_IMG"/>
                                    <h5 className="h5_noblue_noline">5.0</h5>
                                </div>
                                <div class="row_Ret_Azul">
                                    <h5 className="h5_noblue">Criadores: Matt Duffer e Ross Duffer</h5>
                                </div>
                                <div class="row_Ret_Azul">
                                    <h5 className="h5_noblue">Genêro: Ficção ciêntifica, terror, suspense, drama e aventura</h5>
                                </div>
                                <div class="row_Ret_Azul">
                                    <h5 className="h5_noblue">Primeiro episódio lançado: 15 de julho de 2016</h5>
                                </div>
                                <div class="row_Ret_Azul">
                                    <h5 className="h5_noblue">Ultimo episódio lançado: 1 de julho de 2022</h5>
                                </div>
                                <div class="row_Ret_Azul">
                                    <h5 className="h5_noblue">4 Temporadas</h5>
                                </div>
                            </div>
                       </div>
                    </div>
                </section>
                <section>
                    <div class="Retangulo_Cinza1">
                        <div class="Grid_Av_L">
                            <div class="Scd_Grid_Av_L">
                                <div className="Left_Text_L">
                                    <h3>Quero fazer uma avaliação rápida!</h3>
                                </div>
                                <div class="Button_L">
                                    <Link className="btn-L" to="/rapida">Faça uma avaliação rápida</Link>
                                </div>
                            </div>
                            <div class="box_L">
                                <ul class="bullet-list">
                                    <li>Indique quantas estrelas de 0 a 5;</li>
                                    <li>Escreva um comentario sobre;</li>
                                    <li>Diga se valeu a pena assistir.</li>  
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="Retangulo_Cinza">
                        <div class="Grid_Av_L">
                            <div class="Scd_Grid_Av_L">
                                <div class="Left_Text_L">
                                    <h3>Quero fazer uma avaliação detalhada!</h3>
                                </div>
                                <div class="Button_L">
                                    <Link className="btn-L" to="/detalhada/serie">Faça uma avaliação detalhada</Link>
                                </div>
                            </div>
                            <div class="box_L">
                                <ul class="bullet-list">
                                    <li>Indique quantas estrelas de 0 a 5;</li>
                                    <li>Escreva um comentario sobre;</li>
                                    <li>Diga se valeu a pena assistir;</li>
                                    <li>Diga que emoção você sentiu ao ler a obra;</li>
                                    <li>Avalie diferentes critérios;</li>
                                    <li>Dê seu veredito final.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer/>
        </main>
    )
}
export default Avaliacoes_Series;