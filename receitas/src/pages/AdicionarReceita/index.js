import './adicionar-receita.css'

function AdicionarReceita(){
    var receitas = require('./receitas.json');
    const ingredientes = [];

    function addIngrediente(){
        ingredientes.push(document.getElementById('ingrediente').value);
        
        const dynamicList = document.getElementById('ingredientes');
        const listItem = document.createElement('li');
        listItem.textContent = `${document.getElementById('ingrediente').value}`;
        dynamicList.appendChild(listItem);
    }

    function addReceita(){
        const id = receitas.length;
        const titulo = document.getElementById('titulo').value;
        const modoPreparo = document.getElementById('modoPreparo').value;

        receitas.push({id: id, titulo: titulo, ingredientes: ingredientes, modoPreparo: modoPreparo});
    }
    
    return(
        <div className='card'>
            <h2 className='titulo'>Adicionar Receita</h2>

            <div>
                <span className='field-name'>Titulo: </span>
                <input type="text" id="titulo"></input>
            </div>

            <br/>
                {ingredientes.map((ingrediente) =>{
                    return <li>{ingrediente}</li>
                })}
            <div>
                <span className='field-name'>Ingredientes: </span>
                <ul id="ingredientes"></ul>
                <input type="text" id="ingrediente"></input>
                <button onClick={addIngrediente} className='button-add'>Adicionar</button>
            </div>
            
            <br/>

            <div>
                <span className='field-name'>Modo de Preparo: </span>
                <input type="text" id="modoPreparo"></input>
            </div>

            <br/>

            <button onClick={addReceita} className='button-create'>Criar Receita</button>
        </div>
    )
}

export default AdicionarReceita;