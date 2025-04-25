import { Link } from 'react-router-dom'
import Restaurante from '../../../models/Restaurante'

interface CardRestaurantesProps{
    restaurante: Restaurante
}

function CardRestaurantes({restaurante}: CardRestaurantesProps) {
    return (
        <>
            <div className=' bg-slate-200 border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-red-800 text-white font-bold text-2xl'>
                    Restaurante
                </header>
                <p className='p-8 pb-5 text-3xl bg-slate-200 h-full text-center'>{restaurante.razaoSocial}</p>
                <div className='flex bg-slate-200 justify-center align-middle gap-10 justify-between mb-2'>
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
                <div className="flex">
                    <Link to={`/editarrestaurante/${restaurante.id}`} 
                        className='w-full text-slate-100 bg-yellow-400 hover:bg-orange-700 
                            flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarrestaurante/${restaurante.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default CardRestaurantes