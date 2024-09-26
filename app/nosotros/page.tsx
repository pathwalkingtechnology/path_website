/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../globals.css'; 
export default function Nosotros() {
  return (
    <div>
      {/* Sección de encabezado */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-lg">
            En <span className="font-bold">Path</span>, estamos comprometidos con transformar la tecnología en soluciones que impactan el futuro.
          </p>
        </div>
      </section>

      {/* Sección de Misión, Visión y Valores con estilo mejorado */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-8 shadow-lg rounded-lg transition duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8">Misión, Visión y Valores</h2>

            {/* Misión */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-secondary">Nuestra Misión</h3>
              <p className="text-gray-700">
                En Path, nuestra misión es ofrecer soluciones tecnológicas innovadoras y accesibles que acompañen a nuestros clientes en su crecimiento digital.
              </p>
            </div>

            {/* Visión */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-secondary">Nuestra Visión</h3>
              <p className="text-gray-700">
                Ser líderes en el desarrollo de tecnologías que no solo resuelvan los problemas actuales, sino que también anticipen las necesidades del futuro.
              </p>
            </div>

            {/* Valores */}
            <div>
              <h3 className="text-2xl font-bold mb-2 text-secondary">Nuestros Valores</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li className="mb-2">Innovación continua para mantenernos a la vanguardia.</li>
                <li className="mb-2">Compromiso con nuestros clientes y sus objetivos.</li>
                <li className="mb-2">Transparencia y ética en todos nuestros procesos.</li>
                <li className="mb-2">Responsabilidad social y respeto por el entorno.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de equipo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestro Equipo</h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            En Path, contamos con un equipo de profesionales apasionados por la tecnología y comprometidos con la excelencia.
          </p>
          
          {/* Placeholder para las imágenes del equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 text-center rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <img src="/mil.png" alt="Equipo" className="mx-auto w-32 mb-4 rounded-full" /> {/* eslint-disable-next-line @next/next/no-img-element */}
              <h3 className="text-xl font-bold">Milton M. De Campos</h3>
              <p className="text-gray-500">CEO & Fundador</p>
              <button className="mt-4 bg-secondary text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300">
                Conocer Más
              </button>
            </div>
            {/* Añadir más perfiles según sea necesario */}
          </div>
        </div>
      </section>
    </div>
  );
}
