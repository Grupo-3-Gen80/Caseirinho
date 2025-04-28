import EquipeCarrossel from "../equipe/EquipeCarrossel";
import FeedbackClientes from "../feedback/FeedbackClientes";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function SobreRestaurante() {

    return (
      <div className="bg-yellow-50 min-h-screen flex flex-col">
        <Navbar />
  
        <main className="flex-1 p-8 pt-24 flex flex-col items-center">
          <section className="bg-white border-2 border-yellow-300 rounded-3xl shadow-lg p-10 max-w-5xl w-full text-center hover:shadow-2xl transition-all duration-300">
            <h2 className="text-4xl font-extrabold text-red-600 mb-8">Sobre o Caseirinho+</h2>
  
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              O <span className="text-red-700 font-semibold">Caseirinho+</span> nasceu da vontade de aproximar pessoas da verdadeira comida caseira, feita com carinho e tradição. 🍽️✨
            </p>
  
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              No dia a dia corrido, é difícil encontrar refeições com aquele verdadeiro <span className="font-semibold">sabor de casa</span>. Nosso objetivo é resolver isso!
            </p>
  
            <div className="bg-yellow-100 rounded-2xl p-6 my-8">
              <ul className="list-disc list-inside text-left text-gray-700 text-lg leading-relaxed">
                <li><strong>Pratos caseiros e variados</strong>, pensados para todos os gostos;</li>
                <li><strong>Entrega rápida</strong>, para receber sua refeição ainda quentinha;</li>
                <li><strong>Promoções diárias</strong>, para economizar sem abrir mão da qualidade.</li>
              </ul>
            </div>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              Queremos apoiar pequenos e médios restaurantes, fortalecendo a gastronomia local e proporcionando uma experiência acolhedora para quem sente saudade do tempero especial.
            </p>
          </section>
        </main>

      <EquipeCarrossel />
      <FeedbackClientes />
      <Footer />
    </div>
  );
}
