import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Restaurante from "../../models/Restaurante";
import { AuthContext } from "../contexts/AuthContext";
import { buscar } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";
import CardRestaurantes from "../cardrestaurante/CardRestaurantes";



function ListarRestaurante() {
  const navigate = useNavigate();
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarRestaurantes() {
    try {
      await buscar("/restaurantes", setRestaurantes, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "aviso");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarRestaurantes();
  }, []);

  return (
    <>
      {restaurantes.length === 0 ? (
        <div className="flex justify-center mt-10">
          <RotatingLines
            strokeColor="red"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        </div>
      ) : (
        <div className="flex justify-center w-full my-4 m-5">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurantes.map((restaurante) => (
                <CardRestaurantes key={restaurante.id} restaurante={restaurante} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListarRestaurante;

