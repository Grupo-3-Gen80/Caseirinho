import { useState } from "react";
import Navbar from "../navbar/Navbar";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [alerta, setAlerta] = useState<{
    tipo: "sucesso" | "erro" | "carregando" | "";
    mensagem: string;
  }>({ tipo: "", mensagem: "" });

  async function enviarFormulario(e: React.FormEvent) {
    e.preventDefault();
    setAlerta({ tipo: "carregando", mensagem: "Enviando mensagem..." });

    const formData = new FormData();
    formData.append("entry.1845113663", nome);      // <-- ID do Google Forms
    formData.append("entry.692514985", email);     
    formData.append("entry.1516569169", mensagem);  

    try {
      const resposta = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfGw6Tlzxu4CJ6fB7WIaMRvmOQ5JwUWTmumYwqYW4KAHz5hpQ/formResponse", {
        method: "POST",
        mode: "no-cors", // importante para não bloquear
        body: formData,
      });

      setAlerta({ tipo: "sucesso", mensagem: "Mensagem enviada com sucesso!" });
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setAlerta({ tipo: "erro", mensagem: "Erro ao enviar mensagem. Tente novamente." });
    }
  }

  return (
    <div className="min-h-screen py-10 bg-yellow-50">
      <Navbar />
      <section id="contato" className="max-w-7xl mx-auto py-32 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-6">Fale Conosco</h2>

        {alerta.tipo && (
          <div className={`p-4 mb-6 rounded ${alerta.tipo === "sucesso" ? "bg-green-100 text-green-800" : alerta.tipo === "erro" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
            {alerta.mensagem}
          </div>
        )}

        <form onSubmit={enviarFormulario} className="bg-white p-8 rounded shadow-md w-full max-w-xl mx-auto grid gap-4 text-left">
          <input
            className="w-full p-3 rounded-lg border border-gray-400"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-400"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="w-full p-3 rounded-lg border border-gray-400"
            rows={4}
            placeholder="Mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition text-[18px]" type="submit">
            <strong>Enviar</strong>
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contato;
