import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import Restaurante from '../../../models/Restaurante';
import { AuthContext } from '../../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function FormRestaurante() {

    const navigate = useNavigate();

    const [restaurante, setRestaurante] = useState<Restaurante>({} as Restaurante)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/restaurantes/${id}`, setRestaurante, {
                headers: { Authorization: token }
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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setRestaurante({
            ...restaurante,
            [name]: value,
        });
    }


    function retornar() {
        navigate("/restaurantes")
    }

    async function gerarNovoRestaurante(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/restaurantes`, restaurante, setRestaurante, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O Restaurante foi atualizado com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao atualizar o restaurante!", "erro")
                }

            }
        } else {
            try {
                await cadastrar(`/restaurantes`, restaurante, setRestaurante, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O Restaurante foi cadastrado com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao cadastrar o restaurante!", "erro")
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="pb-12 pt-2 bg-yellow-50 flex flex-col items-center justify-center mx-auto">


            <h1 className="text-4xl text-center my-8 font-bold text-red-700 mb-4 align-middle">
                {id === undefined ? 'Cadastrar Restaurante' : 'Editar Restaurante'}
            </h1>

            <form className="bg-white p-8 rounded shadow-md w-full max-w-xl" onSubmit={gerarNovoRestaurante}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="razaoSocial">Nome do Restaurante</label>
                    <input
                        type="text"
                        placeholder="Nome do restaurante"
                        name='razaoSocial'
                        className="border-2 border-slate-700 rounded p-2"
                        value={restaurante.razaoSocial}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="cpf">Documento</label>
                    <input
                        type="text"
                        placeholder="CPF"
                        name='cpf'
                        className="border-2 border-slate-700 rounded p-2"
                        value={restaurante.cpf}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="endereco">Endereço do Restaurante</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu restaurante"
                        name='endereco'
                        className="border-2 border-slate-700 rounded p-2"
                        value={restaurante.endereco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="horarioAbertura">Horário de Abertura do Restaurante</label>
                    <input
                        type="time"
                        step="2"
                        name="horarioAbertura"
                        placeholder="hh:mm:ss"
                        className="border-2 border-slate-700 rounded p-2"
                        value={restaurante.horarioAbertura ?? ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="horarioFechamento">Horário de Fechamento do Restaurante</label>
                    <input
                        type="time"
                        step="2"
                        name="horarioFechamento"
                        className="border-2 border-slate-700 rounded p-2"
                        value={restaurante.horarioFechamento}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className='flex gap-10'>

                    <span className="rounded text-slate-100 bg-red-800 
                               hover:bg-red-400 w-1/2 py-2 mx-auto flex justify-center mt-5 " 
                               onClick={retornar}>
                        Voltar
                    </span>


                    <button
                        className="rounded text-slate-100 bg-red-800 
                               hover:bg-red-400 w-1/2 py-2 mx-auto flex justify-center mt-5 "
                        type="submit">
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                        }
                    </button>

                </div>


            </form>
        </div>
    )
}

export default FormRestaurante