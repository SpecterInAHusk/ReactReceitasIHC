import { Link } from 'react-router-dom';
import './home.css';

function Home(){
  const receitas = require('../../receitas.json');

  return(
    <div className="card">
      <h2 className="titulo">Home</h2>
      <ul>
        {receitas.map((receita) =>{
          return(
          <li className='link'>
            <Link to={`/detalhes/${receita.id}`}>{receita.titulo}</Link>
            
            <br/>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Home;