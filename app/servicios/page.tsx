import Link from 'next/link';
import React from 'react';
import '../globals.css'; 

export default function Servicios() {
  return (
    <main className="bg-background min-h-screen p-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold font-geist text-primary mb-4">Nuestros Servicios</h1>
        <p className="text-lg font-sans text-text">
          En Path, ofrecemos soluciones tecnológicas adaptadas a tus necesidades. Descubre nuestros principales servicios:
        </p>
      </section>

      {/* Servicios de Desarrollo */}
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold font-geist text-primary mb-4">Desarrollo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold font-geist text-secondary mb-4">Web Mastery</h2>
            <p className="text-text mb-6">
              Creamos sitios web de alta calidad y rendimiento utilizando tecnologías avanzadas como HTML5, CSS3, y JavaScript.
            </p>
            <Link href="/contacto">
              <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition duration-300">
                Contáctanos
              </button>
            </Link>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold font-geist text-secondary mb-4">E-Shop Pro</h2>
            <p className="text-text mb-6">
              Desarrollamos plataformas e-commerce optimizadas para que vendas más, integradas con sistemas de pago y gestión.
            </p>
            <Link href="/contacto">
              <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition duration-300">
                Obtén una Cotización
              </button>
            </Link>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold font-geist text-secondary mb-4">Virtual Learning Hub</h2>
            <p className="text-text mb-6">
              Diseñamos aulas virtuales robustas para la enseñanza a distancia con opciones personalizables y fáciles de usar.
            </p>
            <Link href="/contacto">
              <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition duration-300">
                Más Información
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios de Diseño Gráfico */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold font-geist text-primary mb-4">Diseño Gráfico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold font-geist text-secondary mb-4">Brand Identity</h2>
            <p className="text-text mb-6">
              Creamos logotipos e imagen corporativa que representan fielmente los valores y la esencia de tu empresa.
            </p>
            <Link href="/contacto">
              <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition duration-300">
                Ver más
              </button>
            </Link>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold font-geist text-secondary mb-4">Commercial Print Suite</h2>
            <p className="text-text mb-6">
              Diseñamos papelería comercial desde tarjetas de presentación hasta sobres, alineados con la imagen de tu marca.
            </p>
            <Link href="/contacto">
              <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition duration-300">
                Ver más
              </button>
            </Link>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold font-geist text-secondary mb-4">Digital Buzz</h2>
            <p className="text-text mb-6">
              Administramos y diseñamos contenido para redes sociales, con estrategias para potenciar tu marca en el mundo digital.
            </p>
            <Link href="/contacto">
              <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition duration-300">
                Ver más
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
