import './header.css';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <header className='header'>
    <Link to={'/'} className='button'>Início</Link>
    <Link to={'/adicionar'} className='button add'>Adicionar</Link>
      <h1>RECEITAS</h1>
    </header>
  )
}

export default Header;