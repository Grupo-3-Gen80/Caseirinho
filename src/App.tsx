// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Restaurantes from './pages/restaurante/Restaurantes';
import Produtos from './pages/produto/Produtos';
import EditarProduto from './pages/produto/EditarProduto';
import CadastrarProduto from './pages/produto/CadastrarProduto';
import CadastroUsuario from './pages/cadastro/CadastroUsuario';
import ListaRestaurantes from './components/restaurantes/listaRestaurante/ListarRestaurante';
import FormRestaurante from './components/restaurantes/formrestaurante/FormRestaurante';
import DeletarRestaurante from './components/restaurantes/deletarrestaurante/DeletarRestaurante';





function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
          <Route path="/editar-produto/:id" element={<EditarProduto />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
          <Route path="/cadastrar" element={<CadastroUsuario />}/>

          {/* link restaurantes */}
          <Route path="/restaurantes" element={<ListaRestaurantes />} /> 
          <Route path="/cadastrarrestaurante" element={<FormRestaurante />} />
          <Route path="/deletarrestaurante/:id" element={<DeletarRestaurante />} />
          <Route path="/editarrestaurante/:id" element={<FormRestaurante />} />
          {/* link restaurantes */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
