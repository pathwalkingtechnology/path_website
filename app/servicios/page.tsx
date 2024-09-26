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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Servicio 1 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold font-geist text-secondary mb-4">Desarrollo Web</h2>
          <p className="text-text mb-6">
            Creamos sitios web profesionales utilizando las últimas tecnologías como HTML5, CSS3, JavaScript y más.
          </p>
          <Link href="/contacto">
            <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition duration-300">
              Contáctanos
            </button>
          </Link>
        </div>

        {/* Servicio 2 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold font-geist text-secondary mb-4">E-commerce</h2>
          <p className="text-text mb-6">
            Desarrollamos tiendas en línea personalizadas que te permiten vender tus productos de manera eficiente.
          </p>
          <Link href="/contacto">
            <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition duration-300">
              Obtén una Cotización
            </button>
          </Link>
        </div>

        {/* Servicio 3 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold font-geist text-secondary mb-4">Aulas Virtuales</h2>
          <p className="text-text mb-6">
            Implementamos plataformas de educación virtual para que puedas ofrecer tus cursos en línea de manera efectiva.
          </p>
          <Link href="/contacto">
            <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary transition duration-300">
              Más Información
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
