import Image from 'next/image';
import Link from 'next/link';

const PresenciaDigital = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#2A4760' }}>Presencia Digital</h1>
      
      <Image 
        src="/presencia-digital.jpg" 
        alt="Presencia Digital" 
        width={800} 
        height={600} 
        className="rounded-lg mb-4"
      />
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#00AFEF' }}>¿Por qué es importante una presencia digital?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          En la era digital, tener una presencia online sólida es esencial para conectar con tus clientes. Desarrollamos sitios web que reflejan la identidad de tu marca, optimizados para atraer tráfico y convertir visitantes en clientes.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#00AFEF' }}>Beneficios de una presencia digital profesional</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong style={{ color: '#2A4760' }}>Visibilidad global</strong>: Llega a clientes de cualquier parte del mundo.
          </li>
          <li>
            <strong style={{ color: '#2A4760' }}>Mejor posicionamiento</strong>: Optimización SEO para aparecer en los primeros resultados de búsqueda.
          </li>
          <li>
            <strong style={{ color: '#2A4760' }}>Diseño responsivo</strong>: Tu sitio web se adapta a cualquier dispositivo, mejorando la experiencia del usuario.
          </li>
          <li>
            <strong style={{ color: '#2A4760' }}>Interacción directa</strong>: A través de formularios de contacto, chats en vivo y redes sociales.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#00AFEF' }}>Nuestros servicios de presencia digital incluyen:</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong style={{ color: '#2A4760' }}>Desarrollo de sitios web personalizados</strong>: A medida de tus necesidades y objetivos.
          </li>
          <li>
            <strong style={{ color: '#2A4760' }}>Optimización SEO</strong>: Para maximizar la visibilidad y atraer tráfico orgánico.
          </li>
          <li>
            <strong style={{ color: '#2A4760' }}>Mantenimiento y actualización</strong>: Mantén tu sitio seguro, rápido y moderno.
          </li>
          <li>
            <strong style={{ color: '#2A4760' }}>Integración con redes sociales</strong>: Conecta todas tus plataformas digitales.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#00AFEF' }}>¿Estás listo para mejorar tu presencia digital?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Trabajemos juntos para construir una presencia digital sólida que te destaque en tu industria y te acerque a tus clientes.
        </p>
        <Link href="/contacto">
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-110"
            style={{ backgroundColor: '#FF434D' }}
          >
            Contáctanos
          </button>
        </Link>
      </section>
    </div>
  );
};

export default PresenciaDigital;
