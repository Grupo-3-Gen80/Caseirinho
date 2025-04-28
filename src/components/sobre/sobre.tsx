import EquipeCarrossel from "../equipe/EquipeCarrossel";
import Navbar from "../navbar/Navbar";

export default function SobreRestaurante() {
  return (
  
      <div className="py-1 bg-yellow-50">
      <Navbar />
      <section className="min-h-screen bg-yellow-50 p-8 pt-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-red-700 mb-6">Saiba Mais</h2>
    <p className="text-gray-700 mb-4 text-lg">
      O <strong>Caseirinho+</strong> nasceu da vontade de aproximar pessoas da verdadeira comida caseira, feita com carinho e tradição. 🍽️✨
    </p>
    <p className="text-gray-700 mb-4 text-lg">
      Percebemos que, na correria do dia a dia, muitas vezes é difícil encontrar refeições que realmente tenham <strong>sabor de casa</strong> — e que sejam acessíveis, de qualidade e entregues com rapidez.
    </p>
    <p className="text-gray-700 mb-4 text-lg">
      Por isso, criamos o <strong>Caseirinho+</strong>: um <strong>site exclusivo para restaurantes parceiros</strong>, que compartilham o compromisso de oferecer pratos frescos, variados e preparados com amor.
    </p>
    <ul className="list-disc list-inside text-left text-gray-700 mb-6">
      <li><strong>Pratos caseiros e variados</strong>, pensados para todos os gostos;</li>
      <li><strong>Entrega rápida</strong>, para receber sua refeição ainda quentinha;</li>
      <li><strong>Promoções diárias</strong>, para economizar sem abrir mão da qualidade.</li>
    </ul>
    <p className="text-gray-700 text-lg">
      Nosso objetivo é apoiar pequenos e médios restaurantes, fortalecendo a gastronomia local e proporcionando uma experiência acolhedora a quem sente falta daquele tempero especial.
    </p>
    
  </div>
</section>

        <EquipeCarrossel/>

        
      </div>
  
  );
}
