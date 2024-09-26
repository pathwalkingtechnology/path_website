import React from 'react';
import './globals.css';
import Link from 'next/link';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Bienvenidos a Path</h1>
          <p className="text-xl mb-8">
            Transformamos negocios con soluciones tecnológicas personalizadas
          </p>
          <Link href="/contacto">
            <button className="bg-secondary text-white py-3 px-6 rounded hover:bg-green-600">
              ¡Contáctanos ahora!
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
          <div className="flex flex-wrap justify-center space-x-8">
            <div className="w-1/3 mb-8">
              <img src="/integracion-whatsapp.png" alt="Desarrollo Web" className="mb-4" />
              <h3 className="text-2xl font-bold">Desarrollo Web</h3>
              <p className="text-lg">Creamos sitios web a medida para potenciar tu negocio.</p>
            </div>
            <div className="w-1/3 mb-8">
              <img src="/diseno-grafico.png" alt="E-commerce" className="mb-4" />
              <h3 className="text-2xl font-bold">E-commerce</h3>
              <p className="text-lg">Lleva tu tienda al siguiente nivel con nuestras soluciones.</p>
            </div>
            <div className="w-1/3 mb-8">
              <img src="/desarrollo-web.png" alt="Marketing Digital" className="mb-4" />
              <h3 className="text-2xl font-bold">Marketing Digital</h3>
              <p className="text-lg">Aumenta tu presencia online y alcanza nuevos clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-secondary text-white py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-lg mb-8">Contáctanos para una consulta gratuita.</p>
          <Link href="/contacto">
            <button className="bg-white text-primary py-3 px-6 rounded hover:bg-gray-200">
              ¡Solicita una consulta!
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
