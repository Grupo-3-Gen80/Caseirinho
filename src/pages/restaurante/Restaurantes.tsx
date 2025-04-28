import { useLocation, useNavigate } from "react-router-dom";
import ListaRestaurantes from "../../components/restaurantes/listaRestaurante/ListarRestaurante";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Restaurantes() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const cidade = params.get("local");

  const navigate = useNavigate();

  function handleCadastrarRestaurante(){
    navigate("/cadastrarrestaurante");  
  }

  return (
    <div className="bg-yellow-50">
      <Navbar />
      <div className="p-6 pt-20">
        <div className="flex align-middle justify-between text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-4 align-middle">Restaurantes</h2>
        <button title="Cadastrar novo restaurante" className="text-6xl font-bold font-serif text-red-700 hover:text-red-900" onClick={handleCadastrarRestaurante}>
          +
        </button>
        </div>

        {cidade ? (
          <p className="text-gray-700">Exibindo restaurantes de: <strong>{cidade}</strong></p>
        ) : (
          <p className="text-gray-700">Exibindo todos os restaurantes</p>
        )}

        <ListaRestaurantes />

        {/* Aqui entraria a listagem real filtrada ou mockada */}
      </div>
      <Footer />
    </div>
  );
}
