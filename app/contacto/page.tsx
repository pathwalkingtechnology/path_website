"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setEnviado(false);

    try {
      const response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setEnviado(true);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contacto</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-lg font-semibold mb-2 text-foreground"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-semibold mb-2 text-foreground"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mensaje"
            className="block text-lg font-semibold mb-2 text-foreground"
          >
            Mensaje:
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Enviar
        </button>

        {enviado && (
          <p className="text-green-600 mt-4 text-center">Formulario enviado con éxito!</p>
        )}
      </form>

      <a
        className="fixed bottom-4 right-4 bg-orange-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        href="https://wa.me/5493764617711"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="mr-2 inline-block" />
        WhatsApp
      </a>
    </div>
  );
}
