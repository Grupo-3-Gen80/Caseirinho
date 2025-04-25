import { useNavigate } from "react-router-dom";
import Produto from "../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
  onDelete: (id: number) => void;
}

export default function CardProduto({ produto, onDelete }: CardProdutoProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
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

      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => navigate(`/editar-produto/${produto.id}`)}
          className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(produto.id!)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Deletar
        </button>
      </div>
    </div>
  );
}
