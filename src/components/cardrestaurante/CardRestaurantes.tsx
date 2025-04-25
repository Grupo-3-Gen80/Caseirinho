import { Link } from 'react-router-dom'
import Restaurante from '../../models/Restaurante'

interface CardRestaurantesProps {
  restaurante: Restaurante
}

export default function CardRestaurantes({ restaurante }: CardRestaurantesProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center flex flex-col justify-between h-full">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-red-700">{restaurante.razaoSocial}</h3>
        <p className="text-gray-600 text-sm mt-1">{restaurante.endereco}</p>
        <p className={`text-sm mt-2 font-semibold ${restaurante.status === 'Aberto' ? 'text-green-600' : 'text-red-600'}`}>
          {restaurante.status}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {restaurante.horarioAbertura} - {restaurante.horarioFechamento}
        </p>
      </div>

      <div className="flex justify-center gap-2 mt-auto">
        <Link
          to={`/editarrestaurante/${restaurante.id}`}
          className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition-colors text-sm"
        >
          Editar
        </Link>
        <Link
          to={`/deletarrestaurante/${restaurante.id}`}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
        >
          Deletar
        </Link>
      </div>
    </div>
  )
}
