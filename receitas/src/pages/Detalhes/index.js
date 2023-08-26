import { useParams } from 'react-router-dom';

function Detalhes(){
    const { id } = useParams();
    const receitas = require('../../receitas.json');

    return(
        <div>
            <h2>{receitas[id-1].titulo}</h2>

            <div>
            <div>Ingredientes:</div>
            <ul>
            {receitas[id-1].ingredientes.map((ingrediente) =>{
                return(
                <li>{ingrediente}</li>
                )
            })}
            </ul>
            </div>

            <br/>

            <div>
            <div>Modo de Preparo:</div>
            <p>{receitas[id-1].modoPreparo}</p>  
            </div>

            <br/>
        </div>
    );
}

export default Detalhes