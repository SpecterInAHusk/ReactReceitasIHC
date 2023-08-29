import './header.css';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <header className='header'>
    <Link to={'/'} className='home-link'>Início</Link>
      <h1>RECEITAS</h1>
    </header>
  )
}

export default Header;