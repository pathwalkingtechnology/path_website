import Image from 'next/image';
import Link from 'next/link';

const IdentidadVisual = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Columna Principal */}
      <div className="md:col-span-2">
        <h1 className="text-5xl font-extrabold mb-6 text-ecoGreen">
          Identidad Visual
        </h1>
        
        <Image 
          src="/pic04.jpg" 
          alt="Identidad Visual" 
          width={800} 
          height={300} 
          className="rounded-lg"
        />

        {/* Secciones de contenido */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-ecoGreen">
            ¿Qué es identidad visual?
          </h2>
          <p className="text-lg text-darkGray leading-relaxed">
            La identidad visual es la representación gráfica de tu marca que refleja tus valores y objetivos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-ecoGreen">
            Beneficios de la identidad visual
          </h2>
          <ul className="list-disc pl-4 text-lg text-darkGray space-y-2">
            <li>
              <strong className="text-dark">Reconocimiento instantáneo</strong>: De tu marca en el mercado.
            </li>
            <li>
              <strong className="text-dark">Diferenciación</strong>: De la competencia con un diseño único.
            </li>
            <li>
              <strong className="text-dark">Confianza y credibilidad</strong>: En tus clientes y partners.
            </li>
            <li>
              <strong className="text-dark">Coherencia</strong>: En todas las plataformas y materiales.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-ecoGreen">
            Nuestros servicios de identidad visual
          </h2>
          <ul className="list-disc pl-4 text-lg text-darkGray space-y-2">
            <li>
              <strong className="text-dark">Diseño de logotipos</strong>: Personalizados y únicos.
            </li>
            <li>
              <strong className="text-dark">Creación de paletas de colores</strong>: Y tipografías coherentes.
            </li>
            <li>
              <strong className="text-dark">Desarrollo de guías de marca</strong>: Para mantener la consistencia.
            </li>
            <li>
              <strong className="text-dark">Aplicación en materiales de marketing</strong>: Tarjetas, folletos, sitios web.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-2 text-dark">
            ¿Consultas?
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
        <div className="bg-lightGray rounded-lg shadow-card p-4">
          <h3 className="text-2xl font-bold mb-2 text-techOrange font-geist">
            Desarrollo Web
          </h3>
          <p className="text-darkGray font-mono">
            Creamos sitios web modernos y responsivos que impulsan tu presencia digital.
          </p>
          <Link href="/servicios/presencia-digital">
            <button className="text-white bg-techOrange hover:bg-ecoGreen font-bold py-2 px-4 rounded-lg mt-4">
              Ver más
            </button>
          </Link>
        </div>

        {/* Tarjeta de Servicio: E-commerce */}
        <div className="bg-lightGray rounded-lg shadow-card p-4">
          <h3 className="text-2xl font-bold mb-2 text-techOrange font-geist">
            E-commerce
          </h3>
          <p className="text-darkGray font-mono">
            Diseñamos tiendas online que maximizan tus ventas y mejoran la experiencia del usuario.
          </p>
          <Link href="/servicios/tienda-en-linea">
            <button className="text-white bg-techOrange hover:bg-ecoGreen font-bold py-2 px-4 rounded-lg mt-4">
              Ver más
            </button>
          </Link>
        </div>

        {/* Tarjeta de Servicio: Aplicaciones Móviles */}
        <div className="bg-lightGray rounded-lg shadow-card p-4">
          <h3 className="text-2xl font-bold mb-2 text-techOrange font-geist">
            Aplicaciones Móviles
          </h3>
          <p className="text-darkGray font-mono">
            Desarrollamos aplicaciones escalables e innovadoras para cualquier plataforma.
          </p>
          <Link href="/servicios/aplicaciones-moviles">
            <button className="text-white bg-techOrange hover:bg-ecoGreen font-bold py-2 px-4 rounded-lg mt-4">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdentidadVisual;
