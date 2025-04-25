// src/pages/restaurantes/Restaurantes.tsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CardRestaurantes from "../../components/cardrestaurantes/CardRestaurantes";

import Restaurante from "../../models/Restaurante";
import UsuarioLogin from "../../models/UsuarioLogin";
import { usuarioEstaLogado } from "../../utils/usuarioLogado";
import { consultar, deletar } from "../../services/UsuarioService";

export default function Restaurantes() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const cidadeFiltro = params.get("local");

  const usuarioLogado: UsuarioLogin = JSON.parse(
    localStorage.getItem("usuarioLogado") || "{}"
  );

  // ao montar, verifica se está logado e busca restaurantes
  useEffect(() => {
    if (!usuarioEstaLogado()) {
      navigate("/login");
    } else {
      buscarRestaurantes();
    }
  }, []);

  // busca toda a lista (poderíamos filtrar por cidadeFiltro se a API suportar)
  async function buscarRestaurantes() {
    try {
      await consultar(
        "/restaurantes",
        setRestaurantes,
        { headers: { Authorization: usuarioLogado.token } }
      );
    } catch (error) {
      console.error("Erro ao buscar restaurantes:", error);
    }
  }

  // deleta e recarrega
  async function handleDelete(id: number) {
    try {
      await deletar(
        `/restaurantes/${id}`,
        { headers: { Authorization: usuarioLogado.token } }
      );
      buscarRestaurantes();
    } catch (error) {
      console.error("Erro ao deletar restaurante:", error);
    }
  }

  // navega para o formulário de cadastro
  function handleNovo() {
    navigate("/cadastrarrestaurante");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-yellow-50 p-8 pt-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-red-700">Restaurantes</h2>
          <button
            onClick={handleNovo}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            + Novo Restaurante
          </button>
        </div>

        {cidadeFiltro ? (
          <p className="mb-4 text-gray-700">
            Exibindo restaurantes de:{" "}
            <strong className="text-red-700">{cidadeFiltro}</strong>
          </p>
        ) : (
          <p className="mb-4 text-gray-700">Exibindo todos os restaurantes</p>
        )}

        {restaurantes.length === 0 ? (
          <p className="text-gray-700 text-center">Carregando restaurantes...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantes.map((rest) => (
              <CardRestaurantes
                key={rest.id}
                restaurante={rest}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
