import { useLocation } from "react-router-dom";

export default function Restaurantes() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const cidade = params.get("local");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Restaurantes</h2>
      {cidade ? (
        <p className="text-gray-700">Exibindo restaurantes de: <strong>{cidade}</strong></p>
      ) : (
        <p className="text-gray-700">Exibindo todos os restaurantes</p>
      )}

      {/* Aqui entraria a listagem real filtrada ou mockada */}
    </div>
  );
}
