import { useParams } from 'react-router-dom';

function Detalhes(){
    var { id } = useParams();
    var receitas = require('../../receitas.json');

    function findById(receitas, id) {
        for (var i = 0; i < receitas.length; i++) {
            if (receitas[i].id === id) {
                return receitas[i];
            }
        }
    }

    const receita = findById(receitas, id);


    return(
        <div>
            <h2>{receita.titulo}</h2>

            <div>
            <div>Ingredientes:</div>
            <ul>
            {receita.ingredientes.map((ingrediente) =>{
                return(
                <li>{ingrediente}</li>
                )
            })}
            </ul>
            </div>

            <br/>

            <div>
            <div>Modo de Preparo:</div>
            <p>{receita.modoPreparo}</p>  
            </div>

            <br/>
        </div>
    );
}

export default Detalhes