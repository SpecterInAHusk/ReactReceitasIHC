import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import AdicionarReceita from './pages/AdicionarReceita';

import Header from './components/Header';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/detalhes/:id" element={ <Detalhes/> }/>
        <Route path='/adicionar' element={ <AdicionarReceita/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;