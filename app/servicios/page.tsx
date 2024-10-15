import Image from 'next/image';

const Servicios = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Servicios</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Presencia Digital */}
        <div className="bg-white p-4 rounded shadow-md">
          <Image src="/presencia-digital.jpg" alt="Presencia Digital" width={800} height={600} />
          <h2 className="text-2xl font-bold mb-2">Presencia Digital</h2>
          <p>Desarrollamos sitios web personalizados y responsivos.</p>
        </div>
        {/* Tienda en Línea */}
        <div className="bg-white p-4 rounded shadow-md">
          <Image src="/tienda-en-linea.jpg" alt="Tienda en Línea" width={800} height={600} />
          <h2 className="text-2xl font-bold mb-2">Tienda en Línea</h2>
          <p>Convierte tu negocio en una tienda en línea exitosa.</p>
        </div>
        {/* Aprende en Línea */}
        <div className="bg-white p-4 rounded shadow-md">
          <Image src="/aprende-en-linea.jpg" alt="Aprende en Línea" width={800} height={600} />
          <h2 className="text-2xl font-bold mb-2">Aprende en Línea</h2>
          <p>Crea un entorno de aprendizaje en línea seguro y interactivo.</p>
        </div>
        {/* Aplicaciones Móviles */}
        <div className="bg-white p-4 rounded shadow-md">
          <Image src="/aplicaciones-moviles.jpg" alt="Aplicaciones Móviles" width={800} height={600} />
          <h2 className="text-2xl font-bold mb-2">Aplicaciones Móviles</h2>
          <p>Desarrollamos aplicaciones móviles innovadoras y escalables.</p>
        </div>
        {/* Identidad Visual */}
        <div className="bg-white p-4 rounded shadow-md">
          <Image src="/takeover.avif" alt="Identidad Visual" width={800} height={600} />
          <h2 className="text-2xl font-bold mb-2">Identidad Visual</h2>
          <p>Refuerza tu marca con un diseño gráfico profesional.</p>
        </div>
        {/* Innovación y Tecnología */}
        <div className="bg-white p-4 rounded shadow-md">
          <Image src="/takeover.avif" alt="Innovación y Tecnología" width={800} height={600} />
          <h2 className="text-2xl font-bold mb-2">Innovación y Tecnología</h2>
          <p>Nuestras soluciones digitales te ayudarán a transformar tu negocio.</p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
