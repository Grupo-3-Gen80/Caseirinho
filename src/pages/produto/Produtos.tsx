import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produto from "../../models/Produto";
import UsuarioLogin from "../../models/UsuarioLogin";
import { usuarioEstaLogado } from "../../utils/usuarioLogado";
import api from "../../services/api";

import Navbar from "../../components/navbar/Navbar";

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
      const resposta = await api.get("/produtos", {
        headers: {
          Authorization: `Bearer ${usuarioLogado.token}`,
        },
      });
      setProdutos(resposta.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-yellow-50 p-8">
        <h2 className="text-2xl font-bold text-red-700 mb-8">
          Olá, {usuarioLogado.nome || "visitante"}! 🍽️
        </h2>

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
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}