import Image from 'next/image';
import Link from 'next/link';

const AplicacionesMoviles = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-900">Aplicaciones Móviles</h1>
      <Image 
        src="/aplicaciones-moviles.jpg" 
        alt="Aplicaciones Móviles" 
        width={800} 
        height={600} 
        className="rounded-lg mb-4"
      />
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">¿Qué es una aplicación móvil?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Una aplicación móvil es una herramienta esencial para cualquier negocio que busca expandir su alcance y mejorar la experiencia del cliente.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Beneficios de las aplicaciones móviles</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong className="text-blue-800">Acceso instantáneo</strong>: A tus servicios en cualquier momento.
          </li>
          <li>
            <strong className="text-blue-800">Incrementa la fidelidad</strong>: Del cliente con notificaciones y promociones.
          </li>
          <li>
            <strong className="text-blue-800">Mejora la experiencia</strong>: Del usuario con diseño intuitivo.
          </li>
          <li>
            <strong className="text-blue-800">Ventaja competitiva</strong>: En el mercado con tecnología de vanguardia.
          </li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Nuestros servicios de aplicaciones móviles</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong className="text-blue-800">Desarrollo personalizado</strong>: De aplicaciones para iOS y Android.
          </li>
          <li>
            <strong className="text-blue-800">Diseño de interfaz</strong>: Intuitivo y atractivo para el usuario.
          </li>
          <li>
            <strong className="text-blue-800">Integración con tecnologías</strong>: De vanguardia para potenciar tus servicios.
          </li>
          <li>
            <strong className="text-blue-800">Pruebas y depuración</strong>: Para asegurar la calidad y estabilidad.
          </li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">¿Listo para transformar tu negocio?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Desarrolla una aplicación móvil a medida para tu empresa y lleva la experiencia del cliente al siguiente nivel.
        </p>
        <Link href="/contacto">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-110">
            Contáctanos
          </button>
        </Link> 
      </section>
    </div>
  );
};

export default AplicacionesMoviles;
