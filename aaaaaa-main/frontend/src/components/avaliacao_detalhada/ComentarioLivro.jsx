import React from "react"; 
import { Link } from "react-router-dom";

function ComentarioLivro(){
    return(
        <div class="mb-3 comentario">
            <label for="exampleFormControlTextarea1" class="form-label titulo_av">Escreva um comentário:</label>
            <textarea class="form-control caixa_comentario" id="exampleFormControlTextarea1" rows="3"></textarea>

            <Link to="/criterioemocao/livro" type="submit" className="btn btn-primary botao_valeu_a_pena">
                Próximo 
            </Link>
        </div>
        
    );
}

export default ComentarioLivro;