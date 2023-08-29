import { Link } from 'react-router-dom';
import './home.css';

function Home(){
  const receitas = require('../../receitas.json');

  return(
    <div>
      <h2>Home</h2>
      <ul>
        {receitas.map((receita) =>{
          return(
          <li>
            <Link to={`/detalhes/${receita.id}`}>{receita.titulo}</Link>
            
            <br/>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Home;