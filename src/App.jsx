import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Cadastro from './pages/Cadastro'
import Dados from './components/Dados'
import Cardapio from './pages/Cardapio'
import Pizzas from './pages/Pizzas'
import FederacaoPromocao from './pages/FederacaoPromocao'
import Entradinhas from './pages/Entradinhas'
import Bebidas from './pages/Bebidas'
import UsuariosAula from './pages/Usuarios'
import Posts from './pages/Posts'
import NovoPost from './pages/NovoPost'
import MenuFuncionario from './pages/MenuFuncionario'
import './App.css'
import './index.css'

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = { <Inicio/> }/>
          <Route path="/cadastro" element = { <Cadastro/> }/>
          <Route path="/cardapio" element = { <Cardapio/> }/>
          <Route path="/pizzas" element = { <Pizzas/> }/>
          <Route path="/federacaoPromocao" element = { <FederacaoPromocao/> }/>
          <Route path="/entradinhas" element = { <Entradinhas/> }/>
          <Route path="/bebidas" element = { <Bebidas/> }/>
          <Route path="/dados" element = { <Dados/> }/>
          <Route path="/usuariosAula" element = { <UsuariosAula/> }/>
          <Route path="/postsAxios" element = { <Posts/>}/>
          <Route path="/novoPost" element = { <NovoPost/> }/>
          <Route path="/menuFuncionario" element = { <MenuFuncionario/> }/>;
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App