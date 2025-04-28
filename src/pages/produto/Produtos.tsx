import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Produto from "../../models/Produto";
import UsuarioLogin from "../../models/UsuarioLogin";
import { usuarioEstaLogado } from "../../utils/usuarioLogado";

import Navbar from "../../components/navbar/Navbar"; 
import { consultar } from "../../services/UsuarioService";
import { deletar } from "../../services/Service";
import Footer from "../../components/footer/Footer";

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const navigate = useNavigate();

  const usuarioLogado: UsuarioLogin = JSON.parse(
    localStorage.getItem("usuarioLogado") || "{}"
  );

  useEffect(() => {
    if (!usuarioEstaLogado()) {
      navigate("/login");
    } else {
      buscarProdutos();
   
    }
  }, []);

  function handleCadastrarProduto() {
    navigate("/produtos/cadastrar");
  }

  async function buscarProdutos() {
    try {
      await consultar('/produtos', setProdutos, {
        headers: {
          Authorization: usuarioLogado.token
        }
      });
     
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }
 

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-yellow-50 p-8 pt-20">
        <div className="flex align-middle justify-between text-center mb-4 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-red-700">
           Produtos
          </h2>
          
          <button
            title="Cadastrar novo produto"
            className="text-6xl font-bold font-serif text-red-700 hover:text-red-900 text-center"
            onClick={handleCadastrarProduto}
          >
            +
          </button>
        </div>

        {produtos.length === 0 ? (
          <p className="text-gray-700 text-center">Carregando pratos deliciosos...</p>
        ) : (
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {produtos.map((produto) => (
              
              <div key={produto.id} className="bg-white shadow-md rounded-lg p-4 text-center">
                <img
                  src={produto.foto}
                  alt={produto.nomeProduto}
                  onError={(e) => (e.currentTarget.src = "/default-food.jpg")}
                  className="h-40 w-full object-cover rounded mb-4"
                />
                <h3 className="text-xl font-bold text-red-700">{produto.nomeProduto}</h3>
                <p className="text-gray-600 text-sm mt-1">Porção: {produto.porcao}</p>
                <p className="text-lg font-semibold text-yellow-500 mt-2">
                  R$ {produto.preco.toFixed(2)}
                </p>
                <div className="flex justify-around mt-3">

               <Link className="w-[50%]" to={`/editar-produto/${produto.id}`}>

                <button  className="px-3 rounded w-[80%]  h-[2rem] bg-amber-500 text-white hover:bg-amber-400  ">
                  Editar
                </button>

               </Link> 
               <Link  className="w-[50%]" to={`/deletar-produto/${produto.id}`}>
                <button className="px-3 rounded w-[80%] h-[2rem] bg-red-700 text-white hover:bg-red-500   ">
                  Deletar
                </button>
                </Link> 
                </div>
              </div>
            ))}
          </div>
        )}
        
      </section>
      <Footer />
    </>
  );
}

