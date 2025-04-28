import { Link } from 'react-router-dom'
import Restaurante from '../../../models/Restaurante'

interface CardRestaurantesProps{
    restaurante: Restaurante
}

function CardRestaurantes({restaurante}: CardRestaurantesProps) {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
                <header className=' py-2 px-6 bg-red-800 text-white font-bold text-2xl  rounded'>
                    Restaurante
                </header>
                <p className='p-8 pb-5 text-3xl  text-center'>{restaurante.razaoSocial}</p>
                <div className='flex justify-center align-middle gap-10 justify-between mb-2'>
                    <div>
                        <p >{restaurante.endereco}</p>
                        <p className= {restaurante.status === "Aberto" ? "text-green-700 font-bold" : "text-red-700 font-bold"}>
                        {restaurante.status}
                        </p>
                    </div>
                    <div>
                        <p>{restaurante.horarioAbertura} <br></br> {restaurante.horarioFechamento}</p>
                    </div>
                    
                </div>
                <div className="flex p-5">
                    <Link to={`/editarrestaurante/${restaurante.id}`} 
                       className="flex justify-center w-[50%]">
                        <button  className="px-3 rounded w-[80%]  h-[2rem] bg-amber-500 text-white hover:bg-amber-400 cursor-pointer ">Editar</button>
                    </Link>

                    <Link to={`/deletarrestaurante/${restaurante.id}`}
                    className="flex justify-center w-[50%]"
                   >
                        <button className="px-3 rounded w-[80%] h-[2rem] bg-red-700 text-white hover:bg-red-500 cursor-pointer  ">Deletar</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default CardRestaurantes