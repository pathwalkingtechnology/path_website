import Image from 'next/image';
import Link from 'next/link';

const AplicacionesMoviles = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-5xl font-bold mb-4 text-blue-800">Aplicaciones Móviles</h1>
      <Image 
        src="/aplicaciones-moviles.jpg" 
        alt="Aplicaciones Móviles" 
        width={800} 
        height={600} 
        className="rounded-lg"
      />
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">¿Qué es una aplicación móvil?</h2>
        <p className="text-lg text-gray-600">
          Una aplicación móvil es una herramienta esencial para cualquier negocio que busca expandir su alcance y mejorar la experiencia del cliente.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Beneficios de las aplicaciones móviles</h2>
        <ul className="list-disc pl-4 text-lg text-gray-600">
          <li className="mb-2">
            <strong className="text-blue-800">Acceso instantáneo</strong>: A tus servicios en cualquier momento.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Incrementa la fidelidad</strong>: Del cliente con notificaciones y promociones.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Mejora la experiencia</strong>: Del usuario con diseño intuitivo.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Ventaja competitiva</strong>: En el mercado con tecnología de vanguardia.
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Nuestros servicios de aplicaciones móviles</h2>
        <ul className="list-disc pl-4 text-lg text-gray-600">
          <li className="mb-2">
            <strong className="text-blue-800">Desarrollo personalizado</strong>: De aplicaciones para iOS y Android.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Diseño de interfaz</strong>: Intuitivo y atractivo para el usuario.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Integración con tecnologías</strong>: De vanguardia para potenciar tus servicios.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Pruebas y depuración</strong>: Para asegurar la calidad y estabilidad.
          </li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Llamado a la Acción</h2>
        <p className="text-lg text-gray-600">
          ¿Necesitas desarrollar una aplicación móvil para tu negocio? 
          <Link href="/contacto">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">
              Contáctanos
            </button>
          </Link> 
          para discutir tus necesidades y descubrir cómo podemos ayudarte.
        </p>
      </section>
    </div>
  );
};

export default AplicacionesMoviles;
