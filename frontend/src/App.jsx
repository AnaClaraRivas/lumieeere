// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollToTop from "./ScrollToTop";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import EsqueceuSenha from "./EsqueceuSenha.jsx";
import Criarconta from "./Criarconta.jsx";
import Inicial from "./Inicial.jsx";
import ObrasLivros from "./ObrasLivros.jsx";
import Estantes from "./Estantes.jsx";
import Perfil from "./Perfil.jsx";
import EditarPerfil from "./EditarPerfil.jsx";
import ObrasDetalhes from "./ObrasDetalhes.jsx";
import Cadastrar_Obras from "./Cadastrar_Obras.jsx";
import Cadastrar_Series from "./Cadastrar_Series.jsx";
import Escolhe_Avaliacao from "./Escolhe_Avaliacao.jsx";
import Rapida from "./Rapida.jsx";
import DetalhadaFilme from "./DetalhadaFilme.jsx";
import DetalhadaSerie from "./DetalhadaSerie.jsx";
import DetalhadaLivro from "./DetalhadaLivro.jsx";
import CriterioEmocaoFilme from "./CriterioEmocaoFilme.jsx";
import CriterioEmocaoSerie from "./CriterioEmocaoSerie.jsx";
import CriterioEmocaoLivro from "./CriterioEmocaoLivro.jsx";
import Temporadas from "./TemporadasDetalhada.jsx";
import ObrasFilmes from "./ObrasFilmes.jsx";
import ObrasSeries from "./ObrasSeries.jsx";
import EditarObra from "./pagsAdministrador/EditarObra.jsx";
import AlterarFilme from "./pagsAdministrador/AlterarFilme.jsx";
import AlterarLivro from "./pagsAdministrador/AlterarLivro.jsx";
import AlterarSerie from "./pagsAdministrador/AlterarSerie.jsx";
import ObrasFilmesADM from "./pagsAdministrador/ObrasFilmesADM.jsx";
import ObrasLivrosADM from "./pagsAdministrador/ObrasLivrosADM.jsx";
import ObrasSeriesADM from "./pagsAdministrador/ObrasSeriesADM.jsx";
import InicialADM from "./pagsAdministrador/InicialADM.jsx";
import CriarEstante from "./CriarEstante.jsx";
import Avaliacoes_Livros from "./Avaliacoes_Livros.jsx";
import Avaliacoes_Series from "./Avaliacoes_Series.jsx";
import Avaliacoes_Filmes from "./Avaliacoes_Filmes.jsx";
import TrocarSenha from "./TrocarSenha.jsx";
import PerfilADM from "./pagsAdministrador/PerfilADM.jsx";
import EditarEstante from "./EditarEstante";
import EstantesAdm from "./pagsAdministrador/EstantesAdm.jsx";
import EditarEstanteAdm from "./pagsAdministrador/EditarEstanteAdm.jsx";
import CadastrarObrasADM from "./pagsAdministrador/CadastrarObrasADM.jsx"


import ProtectedRoute from "./ProtectedRoute";

function App() {
        return (
                <BrowserRouter>
                        <ScrollToTop />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/criarconta" element={<Criarconta />} />
                                <Route path="/esqueceusenha" element={<EsqueceuSenha />} />

                                {/* rotas protegidas */}
                                <Route
                                        path="/inicial"
                                        element={
                                                <ProtectedRoute>
                                                        <Inicial />
                                                </ProtectedRoute>
                                        }
                                />
                                <Route
                                        path="/perfil"
                                        element={
                                                <ProtectedRoute>
                                                        <Perfil />
                                                </ProtectedRoute>
                                        }
                                />
                                <Route
                                        path="/editarperfil"
                                        element={
                                                <ProtectedRoute>
                                                        <EditarPerfil />
                                                </ProtectedRoute>
                                        }
                                />

                                {/* rotas públicas */}
                                <Route path="/obraslivros" element={<ObrasLivros />} />
                                <Route path="/estantes" element={<Estantes usuarioLogadoId={JSON.parse(localStorage.getItem("usuario"))?.id} />} />
                                <Route path="/obrasdetalhes/:tipo" element={<ObrasDetalhes />} />
                                <Route path="/cadastrarSeries" element={<Cadastrar_Series />} />
                                <Route path="/cadastrarObras" element={<Cadastrar_Obras />} />
                                <Route path="/escolheAvaliacao/:tipo" element={<Escolhe_Avaliacao />} />
                                <Route path="/rapida/:idObra" element={<Rapida />} />                                <Route path="/detalhada/filme" element={<DetalhadaFilme />} />
                                <Route path="/detalhada/filme" element={<DetalhadaFilme />} />
                                <Route path="/criterioemocao/filme" element={<CriterioEmocaoFilme />} />
                                <Route path="/detalhada/serie" element={<DetalhadaSerie />} />
                                <Route path="/criterioemocao/serie" element={<CriterioEmocaoSerie />} />
                                <Route path="/detalhada/livro" element={<DetalhadaLivro />} />
                                <Route path="/criterioemocao/livro" element={<CriterioEmocaoLivro />} />
                                <Route path="/temporadas" element={<Temporadas />} />
                                <Route path="/obrasFilmes" element={<ObrasFilmes />} />
                                <Route path="/obrasSeries" element={<ObrasSeries />} />
                                <Route path="/alterarFilme" element={<AlterarFilme />} />
                                <Route path="/alterarLivro" element={<AlterarLivro />} />
                                <Route path="/alterarSerie" element={<AlterarSerie />} />
                                <Route path="/obrasFilmesADM" element={<ObrasFilmesADM />} />
                                <Route path="/obrasLivroADM" element={<ObrasLivrosADM />} />
                                <Route path="/obrasSeriesADM" element={<ObrasSeriesADM />} />
                                <Route path="/inicialADM" element={<InicialADM />} />
                                <Route path="/criarEstante" element={<CriarEstante />} />
                                <Route path="/avaliacoesLivros" element={<Avaliacoes_Livros />} />
                                <Route path="/avaliacoesSeries" element={<Avaliacoes_Series />} />
                                <Route path="/AvaliacoesFilmes" element={<Avaliacoes_Filmes />} />
                                <Route path="/trocarsenha" element={<TrocarSenha />} />
                                <Route path="/perfilADM" element={<PerfilADM />} />
                                <Route path="/editarEstante/:idEstante" element={<EditarEstante />} />
                                <Route path="/editarobra/:id" element={<EditarObra />} />
                                <Route path="/estantesadm" element={<EstantesAdm />} />
                                <Route path="/editarestanteadm/:idEstante" element={<EditarEstanteAdm />} />
                                <Route path="cadastrarobrasADM" element={<CadastrarObrasADM />} />

                        </Routes>
                </BrowserRouter>
        );
}

export default App;