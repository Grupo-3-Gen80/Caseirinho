interface Props {
  foto: string;
  nome: string;
  resumo: string;
}

export function CardProfissional({ foto, nome, resumo }: Props) {
  return (
    <div className="bg-red-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center max-w-sm mx-auto text-center">
      
      <img
        src={foto}
        alt={nome}
        className="w-28 h-28 rounded-full object-cover mb-4 border-4 text-yellow-50"
      />

      <h3 className="text-xl md:text-2xl font-semibold text-yellow-50 font-serif mb-2">
        {nome}
      </h3>

      <p className="text-sm md:text-base text-white leading-relaxed">
        {resumo}
      </p>
    </div>
  );
}
