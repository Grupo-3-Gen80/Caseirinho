import { Link, useNavigate } from "react-router-dom";
import CardRestaurantes from "../cardrestaurantes/CardRestaurantes"
import { useContext, useEffect, useState } from "react";
import Restaurante from "../../../models/Restaurante";
import { AuthContext } from "../../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { buscar } from "../../../services/Service";

function ListaRestaurantes() {

    const navigate = useNavigate();

    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarRestaurantes() {
        try {
            await buscar('/restaurantes', setRestaurantes, {
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
        buscarRestaurantes()    
    }, [restaurantes.length])

    return (
        <>

        {/* <button>
            <Link to='/cadastrarrestaurante' className='hover:underline'>Cadastrar Restaurante</Link>       
        </button> */}

            {restaurantes.length === 0 && (
            <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
            />
        
        )}
            <div className="flex justify-center w-full my-4 m-5">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {restaurantes.map((restaurante) => (
                            <CardRestaurantes key={restaurante.id} restaurante={restaurante} />
                            
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaRestaurantes;