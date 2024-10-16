import Image from 'next/image';
import Link from 'next/link';

const IdentidadVisual = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-5xl font-bold mb-4 text-blue-800">Identidad Visual</h1>
      <Image 
        src="/identidad-visual.jpg" 
        alt="Identidad Visual" 
        width={800} 
        height={600} 
        className="rounded-lg"
      />
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">¿Qué es identidad visual?</h2>
        <p className="text-lg text-gray-600">
          La identidad visual es la representación gráfica de tu marca que refleja tus valores y objetivos.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Beneficios de la identidad visual</h2>
        <ul className="list-disc pl-4 text-lg text-gray-600">
          <li className="mb-2">
            <strong className="text-blue-800">Reconocimiento instantáneo</strong>: De tu marca en el mercado.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Diferenciación</strong>: De la competencia con un diseño único.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Confianza y credibilidad</strong>: En tus clientes y partners.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Coherencia</strong>: En todas las plataformas y materiales.
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Nuestros servicios de identidad visual</h2>
        <ul className="list-disc pl-4 text-lg text-gray-600">
          <li className="mb-2">
            <strong className="text-blue-800">Diseño de logotipos</strong>: Personalizados y únicos.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Creación de paletas de colores</strong>: Y tipografías coherentes.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Desarrollo de guías de marca</strong>: Para mantener la consistencia.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Aplicación en materiales de marketing</strong>: Tarjetas, folletos, sitios web.
          </li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Llamado a la Acción</h2>
        <p className="text-lg text-gray-600">
          ¿Necesitas crear o renovar tu identidad visual? 
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

export default IdentidadVisual;
