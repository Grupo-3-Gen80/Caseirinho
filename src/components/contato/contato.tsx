import Navbar from "../navbar/Navbar";

function Contato() {
  return (
    <div className='min-h-screen py-10 bg-yellow-50'>
      <Navbar />
      <section id="contato" className="max-w-7xl mx-auto py-32 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-6">Fale Conosco</h2>

        <form className="bg-white p-8 rounded shadow-md w-full max-w-xl mx-auto grid gap-4 text-left">
          <input
            className="w-full p-3 rounded-lg border border-gray-400"
            type="text"
            placeholder="Nome"
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-400"
            type="email"
            placeholder="E-mail"
          />
          <textarea
            className="w-full p-3 rounded-lg border border-gray-400"
            rows={4}
            placeholder="Mensagem"
          />
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition text-[18px]">
            <strong>Enviar</strong>
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contato;
