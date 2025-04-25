// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

import Produtos from './pages/produto/Produtos';
import EditarProduto from './pages/produto/EditarProduto';
import CadastrarProduto from './pages/produto/CadastrarProduto';
import ListarRestaurante from './components/listaRestaurante/ListarRestaurante';
import DeletarRestaurante from './components/cardrestaurante/deletarRestaurante/DeletarRestaurante';
import FormRestaurante from './components/formrestaurante/FormRestaurante';






function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/cadastrarproduto" element={<CadastrarProduto />} />
          <Route path="/editarproduto/:id" element={<EditarProduto />} />
          <Route path="/restaurantes" element={<ListarRestaurante />} /> 
           <Route path="/cadastrarrestaurante" element={<FormRestaurante />} />
           <Route path="/deletarrestaurante/:id" element={<DeletarRestaurante />} />
           <Route path="/editarrestaurante/:id" element={<FormRestaurante />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
