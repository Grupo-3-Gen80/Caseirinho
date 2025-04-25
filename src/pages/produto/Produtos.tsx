import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Produto from "../../models/Produto";
import UsuarioLogin from "../../models/UsuarioLogin";
import { usuarioEstaLogado } from "../../utils/usuarioLogado";

import Navbar from "../../components/navbar/Navbar";
import CardProduto from "../../components/cardproduto/CardProduto";

import { consultar, deletar } from "../../services/UsuarioService";

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

  async function buscarProdutos() {
    try {
      await consultar("/produtos", setProdutos, {
        headers: {
          Authorization: usuarioLogado.token,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  async function handleDelete(id: number) {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          Authorization: usuarioLogado.token,
        },
      });
      buscarProdutos(); 
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  }

  function navegarParaNovoProduto() {
    navigate("/cadastrarproduto"); 
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-yellow-50 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-red-700">
            Olá, {usuarioLogado.nome || "visitante"}! 🍽️
          </h2>

          <button
            onClick={navegarParaNovoProduto}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center"
          >
            <span className="mr-2">+</span> Novo Produto
          </button>
        </div>

        {produtos.length === 0 ? (
          <p className="text-gray-700 text-center">
            Carregando pratos deliciosos...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {produtos.map((produto) => (
              <CardProduto
                key={produto.id}
                produto={produto}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
