import Link from 'next/link';
import React from 'react';
import '../globals.css'; // Asegúrate de tener estilos globales bien definidos

export default function Servicios() {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      {/* Sección de encabezado */}
       <section className="text-center mb-16">
        <h1 className="text-5xl font-bold font-geist text-gray-800 mb-4">Nuestros Servicios</h1>
        <p className="text-lg text-gray-600">
          En Path, ofrecemos soluciones tecnológicas adaptadas a tus necesidades. Descubre nuestros principales servicios:
        </p>
      </section>

      {/* Servicios de Desarrollo */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold font-geist text-gray-800 mb-8">Desarrollo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Web Mastery</h3>
            <p className="text-gray-600 mb-6">
              Creamos sitios web de alta calidad y rendimiento utilizando tecnologías avanzadas como HTML5, CSS3 y JavaScript.
            </p>
            <Link href="/contacto">
              <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Contáctanos
              </button>
            </Link>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">E-Shop Pro</h3>
            <p className="text-gray-600 mb-6">
              Desarrollamos plataformas e-commerce optimizadas para que vendas más, integradas con sistemas de pago y gestión.
            </p>
            <Link href="/contacto">
              <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Obtén una Cotización
              </button>
            </Link>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Virtual Learning Hub</h3>
            <p className="text-gray-600 mb-6">
              Diseñamos aulas virtuales robustas para la enseñanza a distancia con opciones personalizables y fáciles de usar.
            </p>
            <Link href="/contacto">
              <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Más Información
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios de Diseño Gráfico */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Diseño Gráfico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Brand Identity</h3>
            <p className="text-gray-600 mb-6">
              Creamos logotipos e imagen corporativa que representan fielmente los valores y la esencia de tu empresa.
            </p>
            <Link href="/contacto">
              <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Ver más
              </button>
            </Link>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Commercial Print Suite</h3>
            <p className="text-gray-600 mb-6">
              Diseñamos papelería comercial desde tarjetas de presentación hasta sobres, alineados con la imagen de tu marca.
            </p>
            <Link href="/contacto">
              <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Ver más
              </button>
            </Link>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Digital Buzz</h3>
            <p className="text-gray-600 mb-6">
              Administramos y diseñamos contenido para redes sociales, con estrategias para potenciar tu marca en el mundo digital.
            </p>
            <Link href="/contacto">
              <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Ver más
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
