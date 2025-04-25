// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Restaurantes from './pages/restaurante/Restaurantes';
import Produtos from './pages/produto/Produtos';
import EditarProduto from './pages/produto/EditarProduto';
import CadastrarProduto from './pages/produto/CadastrarProduto';





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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
