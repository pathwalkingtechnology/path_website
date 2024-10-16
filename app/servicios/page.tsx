import Image from 'next/image';
import Link from 'next/link';

const Servicios = () => {
  return (
   <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Servicios</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Presencia Digital */}
        <Link href="/servicios/presencia-digital">
          <div className="bg-white p-4 rounded shadow-md cursor-pointer hover:scale-105 transition">
            <Image 
              src="/presencia-digital.jpg" 
              alt="Presencia Digital" 
              width={800} 
              height={600} 
              priority={true}
            />
            <h2 className="text-2xl font-bold mb-2">Presencia Digital</h2>
            <p>Desarrollamos sitios web personalizados y responsivos.</p>
          </div>
        </Link>
        
        {/* Tienda en Línea */}
        <Link href="/servicios/tienda-en-linea">
          <div className="bg-white p-4 rounded shadow-md cursor-pointer hover:scale-105 transition">
            <Image 
              src="/tienda-en-linea.jpg" 
              alt="Tienda en Línea" 
              width={800} 
              height={600} 
              priority={true}
            />
            <h2 className="text-2xl font-bold mb-2">Tienda en Línea</h2>
            <p>Convierte tu negocio en una tienda en línea exitosa.</p>
          </div>
        </Link>
        
        {/* Aprende en Línea */}
        <Link href="/servicios/aprende-en-linea">
          <div className="bg-white p-4 rounded shadow-md cursor-pointer hover:scale-105 transition">
            <Image 
              src="/aprende-en-linea.jpg" 
              alt="Aprende en Línea" 
              width={800} 
              height={600} 
              priority={true}
            />
            <h2 className="text-2xl font-bold mb-2">Aprende en Línea</h2>
            <p>Crea un entorno de aprendizaje en línea seguro y interactivo.</p>
          </div>
        </Link>
        
        {/* Aplicaciones Móviles */}
        <Link href="/servicios/aplicaciones-moviles">
          <div className="bg-white p-4 rounded shadow-md cursor-pointer hover:scale-105 transition">
            <Image 
              src="/aplicaciones-moviles.jpg" 
              alt="Aplicaciones Móviles" 
              width={800} 
              height={600} 
              priority={true}
            />
            <h2 className="text-2xl font-bold mb-2">Aplicaciones Móviles</h2>
            <p>Desarrollamos aplicaciones móviles innovadoras y escalables.</p>
          </div>
        </Link>
        
        {/* Identidad Visual */}
        <Link href="/servicios/identidad-visual">
          <div className="bg-white p-4 rounded shadow-md cursor-pointer hover:scale-105 transition">
            <Image 
              src="/takeover.avif" 
              alt="Identidad Visual" 
              width={800} 
              height={600} 
              priority={true}
            />
            <h2 className="text-2xl font-bold mb-2">Identidad Visual</h2>
            <p>Refuerza tu marca con un diseño gráfico profesional.</p>
          </div>
        </Link>
        
        {/* Innovación y Tecnología */}
        <Link href="/servicios/innovacion-y-tecnologia">
          <div className="bg-white p-4 rounded shadow-md cursor-pointer hover:scale-105 transition">
            <Image 
              src="/takeover.avif" 
              alt="Innovación y Tecnología" 
              width={800} 
              height={600} 
              priority={true}
            />
            <h2 className="text-2xl font-bold mb-2">Innovación y Tecnología</h2>
            <p>Nuestras soluciones digitales te ayudarán a transformar tu negocio.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};


export default Servicios;
