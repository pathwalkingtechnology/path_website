import Link from 'next/link';

const Nosotros = () => {
  return (
    <div className="container mx-auto p-6 rounded-card shadow-card">
   
      <h1 className="text-5xl font-extrabold text-center mb-6 text-ecoGreen">
        En Path, potenciamos tu negocio a través de la tecnología
      </h1>

      <section className="mb-10">
        <p className="text-lg text-darkGray leading-relaxed">
          En Path, somos más que un proveedor de soluciones tecnológicas: somos tu aliado estratégico para el crecimiento. Ayudamos a empresas de todo el mundo a acelerar su transformación digital, optimizando cada aspecto de su operación para que puedan alcanzar nuevos niveles de éxito. Nuestra pasión por la innovación y la excelencia nos impulsa a desarrollar soluciones a medida, diseñadas para superar los desafíos únicos de cada cliente.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-techOrange">
          Conoce nuestra historia
        </h2>
        <p className="text-lg text-darkGray leading-relaxed">
          Desde nuestros inicios, en Path hemos trabajado con un solo objetivo en mente: convertirnos en socios tecnológicos de confianza para empresas de todos los tamaños. A lo largo de los años, hemos evolucionado junto a la tecnología y las necesidades del mercado, pero nuestra esencia sigue siendo la misma: impulsar a nuestros clientes a lograr sus metas.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-techOrange">
          Nuestra misión
        </h2>
        <p className="text-lg text-darkGray leading-relaxed">
          Nuestra misión es clara: proporcionar soluciones tecnológicas inteligentes que ayuden a las empresas a innovar, crecer y prosperar en un entorno digital cada vez más competitivo. Con un enfoque centrado en el cliente, garantizamos que cada solución esté alineada con sus objetivos y desafíos específicos.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-techOrange">
          Nuestros valores
        </h2>
        <ul className="list-disc pl-6 text-lg text-darkGray leading-relaxed space-y-2">
          <li>
            <strong className="text-ecoGreen">Innovación</strong>: Adoptamos la tecnología de vanguardia para mantener a nuestros clientes un paso adelante.
          </li>
          <li>
            <strong className="text-ecoGreen">Excelencia</strong>: Nos comprometemos a superar expectativas en cada proyecto, entregando resultados medibles y sostenibles.
          </li>
          <li>
            <strong className="text-ecoGreen">Integridad</strong>: Operamos con transparencia y ética, construyendo relaciones a largo plazo basadas en la confianza y el respeto mutuo.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-techOrange">
          ¿Listo para trabajar con Path?
        </h2>
        <p className="text-lg text-darkGray leading-relaxed mb-6">
          Estamos aquí para ayudarte a llevar tu negocio al siguiente nivel. ¡Conversemos sobre cómo podemos ayudarte a crecer con soluciones tecnológicas a medida!
        </p>
        <Link href="/contacto">
          <button 
            className="bg-ecoGreen hover:bg-techOrange text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-110"
          >
            Contáctanos
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Nosotros;
