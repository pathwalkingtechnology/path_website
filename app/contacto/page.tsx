/* eslint-disable @next/next/no-img-element */
"use client";  // Esto marca el componente como un Client Component
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './page.module.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Gracias por contactarnos, te responderemos pronto.');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error enviando el formulario:', error);
      alert('Hubo un error al enviar tu mensaje.');
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Contáctanos</h1>
        <p className="text-lg font-sans text-text mb-6">
          ¿Tienes alguna pregunta o proyecto en mente? Nos encantaría ayudarte a llevar tu visión al siguiente nivel. Completa el formulario o 
          comunícate con nosotros directamente por WhatsApp.
        </p>

        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/5493764617711"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary text-white py-3 px-6 rounded-md font-semibold mb-8 hover:bg-primary transition duration-300"
        >
          <FaWhatsapp className="inline-block mr-2" />
          Escríbenos por WhatsApp
        </a>
      </section>

      {/* Formulario de Contacto */}
      <section className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-text font-semibold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none focus:border-secondary"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-text font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none focus:border-secondary"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-text font-semibold mb-2" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none focus:border-secondary"
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-secondary transition duration-300"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
