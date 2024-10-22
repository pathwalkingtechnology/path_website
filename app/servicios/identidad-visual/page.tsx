import Image from 'next/image';
import Link from 'next/link';

const IdentidadVisual = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Columna Principal */}
      <div className="md:col-span-2">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-800">
          Identidad Visual
        </h1>
        
        <Image 
          src="/pic07.jpg" 
          alt="Identidad Visual" 
          width={800} 
          height={600} 
          className="rounded-lg"
        />

        {/* Secciones de contenido */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-blue-600">
            ¿Qué es identidad visual?
          </h2>
          <p className="text-lg text-darkGray leading-relaxed">
            La identidad visual es la representación gráfica de tu marca que refleja tus valores y objetivos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-blue-600">
            Beneficios de la identidad visual
          </h2>
          <ul className="list-disc pl-4 text-lg text-darkGray space-y-2">
            <li>
              <strong className="text-blue-800">Reconocimiento instantáneo</strong>: De tu marca en el mercado.
            </li>
            <li>
              <strong className="text-blue-800">Diferenciación</strong>: De la competencia con un diseño único.
            </li>
            <li>
              <strong className="text-blue-800">Confianza y credibilidad</strong>: En tus clientes y partners.
            </li>
            <li>
              <strong className="text-blue-800">Coherencia</strong>: En todas las plataformas y materiales.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-blue-600">
            Nuestros servicios de identidad visual
          </h2>
          <ul className="list-disc pl-4 text-lg text-darkGray space-y-2">
            <li>
              <strong className="text-blue-800">Diseño de logotipos</strong>: Personalizados y únicos.
            </li>
            <li>
              <strong className="text-blue-800">Creación de paletas de colores</strong>: Y tipografías coherentes.
            </li>
            <li>
              <strong className="text-blue-800">Desarrollo de guías de marca</strong>: Para mantener la consistencia.
            </li>
            <li>
              <strong className="text-blue-800">Aplicación en materiales de marketing</strong>: Tarjetas, folletos, sitios web.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-2 text-blue-600">
            Consultas
          </h2>
          <p className="text-lg text-darkGray leading-relaxed mb-6">
            ¿Necesitas crear o renovar tu identidad visual?
            <Link href="/contacto">
              <button className="bg-ecoGreen hover:bg-techOrange text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-110 ml-3">
                Contáctanos
              </button>
            </Link>
          </p>
        </section>
      </div>

      {/* Columna lateral con otros servicios */}
      <div className="space-y-6">
        {/* Tarjeta de Servicio: Desarrollo Web */}
        <div className="bg-lightGray rounded-lg shadow-card p-4 hover:bg-ecoGreen transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-2 text-techOrange font-geist">
            Desarrollo Web
          </h3>
          <p className="text-darkGray font-mono">
            Creamos sitios web modernos y responsivos que impulsan tu presencia digital.
          </p>
          <Link href="/servicios/desarrollo-web">
            <button className="text-white bg-techOrange hover:bg-blue-600 font-bold py-2 px-4 rounded-lg mt-4">
              Ver más
            </button>
          </Link>
        </div>

        {/* Tarjeta de Servicio: E-commerce */}
        <div className="bg-lightGray rounded-lg shadow-card p-4 hover:bg-ecoGreen transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-2 text-techOrange font-geist">
            E-commerce
          </h3>
          <p className="text-darkGray font-mono">
            Diseñamos tiendas online que maximizan tus ventas y mejoran la experiencia del usuario.
          </p>
          <Link href="/servicios/ecommerce">
            <button className="text-white bg-techOrange hover:bg-blue-600 font-bold py-2 px-4 rounded-lg mt-4">
              Ver más
            </button>
          </Link>
        </div>

        {/* Tarjeta de Servicio: Marketing Digital */}
        <div className="bg-lightGray rounded-lg shadow-card p-4 hover:bg-ecoGreen transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-2 text-techOrange font-geist">
            Marketing Digital
          </h3>
          <p className="text-darkGray font-mono">
            Estrategias de marketing digital para atraer más clientes y aumentar tu visibilidad.
          </p>
          <Link href="/servicios/marketing-digital">
            <button className="text-white bg-techOrange hover:bg-blue-600 font-bold py-2 px-4 rounded-lg mt-4">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdentidadVisual;
