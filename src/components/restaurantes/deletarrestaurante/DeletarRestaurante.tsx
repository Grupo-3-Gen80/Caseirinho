import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Restaurante from '../../../models/Restaurante'
import { AuthContext } from '../../../contexts/AuthContext'
import { RotatingLines } from 'react-loader-spinner'
import { ToastAlerta } from '../../../utils/ToastAlerta'
import { buscar, deletar } from '../../../services/Service'

function DeletarRestaurante() {
    const navigate = useNavigate()

    const [restaurante, setRestaurante] = useState<Restaurante>({} as Restaurante)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/restaurantes/${id}`, setRestaurante, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!", "aviso")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarRestaurante() {
        setIsLoading(true)

        try {
            await deletar(`/restaurantes/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta("Restaurante apagado com sucesso !", "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar o restaurante!", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/restaurantes")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            {/* <h1 className='text-4xl text-center my-4'>Deletar restaurante</h1> */}
            <h2 className="text-4xl font-bold text-center text-red-700 my-4 align-middle">Deletar Restaurantes</h2>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o restaurante a seguir?</p>
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
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-blue-500 
                                   hover:bg-blue-700 flex items-center justify-center'
                                   onClick={deletarRestaurante}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarRestaurante