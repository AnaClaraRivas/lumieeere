import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <p className="pfooter">Desenvolvedores:</p>
                        <p className="pfooter">Ana Clara Rivas</p>
                        <p className="pfooter">Beatriz Krisan</p>
                        <p className="pfooter">Byanca Lourenço</p>
                        <p className="pfooter">Gabriely Santos</p>
                        <p className="pfooter">Gabriel Palozzi</p>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <Link className="linkfooter" to="/inicial#obras">Obras</Link>
                        <Link className="linkfooter" to="/estantes">Estantes</Link>
                        <Link className="linkfooter" to="/cadastrarObras">Cadastrar obras</Link>
                        <Link className="linkfooter" to="/perfil">Perfil</Link>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img className="imgfooter img-fluid" src="./img/camera e livro.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;