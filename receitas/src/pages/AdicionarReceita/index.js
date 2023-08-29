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
        <div>
            <h2>Adicionar Receita</h2>

            <div>
                <span>Titulo: </span>
                <input type="text" id="titulo"></input>
            </div>

            <br/>
                {ingredientes.map((ingrediente) =>{
                    return <li>{ingrediente}</li>
                })}
            <div>
                <span>Ingredientes: </span>
                <ul id="ingredientes"></ul>
                <input type="text" id="ingrediente"></input>
                <button onClick={addIngrediente}>Adicionar</button>
            </div>
            
            <br/>

            <div>
                <span>Modo de Preparo: </span>
                <input type="text" id="modoPreparo"></input>
            </div>

            <br/>

            <button onClick={addReceita}>Criar Receita</button>
        </div>
    )
}

export default AdicionarReceita;