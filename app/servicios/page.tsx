import Image from 'next/image';
import Link from 'next/link';

const Servicios = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Presencia Digital */}
        <Link href="/servicios/presencia-digital">
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src="/presencia-digital.jpg"
              alt="Servicios de Presencia Digital"
              width={800}
              height={600}
              className="rounded-lg"
              priority={true}
            />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Presencia Digital</h2>
            <p className="text-gray-600">
              Sitios Webs personalizados, responsivos y optimizados para motores de búsqueda.
            </p>
          </div>
        </Link>
        
        {/* Tienda en Línea */}
        <Link href="/servicios/tienda-en-linea">
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src="/tienda-en-linea.jpg"
              alt="Servicios de Tienda en Línea"
              width={800}
              height={600}
              className="rounded-lg"
              priority={true}
            />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Tienda en Línea</h2>
            <p className="text-gray-600">
              Convierte tu negocio en una tienda en línea eficiente y fácil de usar.
            </p>
          </div>
        </Link>

        {/* Aprende en Línea */}
        <Link href="/servicios/aprende-en-linea">
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src="/aprende-en-linea.jpg"
              alt="Servicios de Aprende en Línea"
              width={800}
              height={600}
              className="rounded-lg"
              priority={true}
            />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Aprende en Línea</h2>
            <p className="text-gray-600">
              Crea plataformas de aprendizaje en línea interactivas y seguras.
            </p>
          </div>
        </Link>

        {/* Aplicaciones Móviles */}
        <Link href="/servicios/aplicaciones-moviles">
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src="/takeover.avif"
              alt="Servicios de Aplicaciones Móviles"
              width={800}
              height={600}
              className="rounded-lg"
              priority={true}
            />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Aplicaciones Móviles</h2>
            <p className="text-gray-600">
              Desarrollamos aplicaciones escalables e innovadoras para cualquier plataforma.
            </p>
          </div>
        </Link>

        {/* Identidad Visual */}
        <Link href="/servicios/identidad-visual">
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src="/takeover.avif"
              alt="Servicios de Identidad Visual"
              width={800}
              height={600}
              className="rounded-lg"
              priority={true}
            />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Identidad Visual</h2>
            <p className="text-gray-600">
              Refuerza tu marca con un diseño gráfico atractivo y profesional.
            </p>
          </div>
        </Link>

        {/* Innovación y Tecnología */}
        <Link href="/servicios/innovacion-y-tecnologia">
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src="/takeover.avif"
              alt="Servicios de Innovación y Tecnología"
              width={800}
              height={600}
              className="rounded-lg"
              priority={true}
            />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Innovación y Tecnología</h2>
            <p className="text-gray-600">
              Transformamos tu negocio con soluciones digitales innovadoras.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Servicios;
