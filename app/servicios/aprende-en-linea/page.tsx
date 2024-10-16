import Image from 'next/image';
import Link from 'next/link';

const AprendeEnLinea = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-5xl font-bold mb-4 text-blue-800">Aprende en Línea</h1>
      <Image 
        src="/aprende-en-linea.jpg" 
        alt="Aprende en Línea" 
        width={800} 
        height={600} 
        className="rounded-lg"
      />
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">¿Qué es Aprende en Línea?</h2>
        <p className="text-lg text-gray-600">
          Aprende en línea es una plataforma educativa que ofrece cursos, talleres y recursos interactivos para aprender nuevas habilidades y conocimientos de manera segura y conveniente.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Beneficios de Aprende en Línea</h2>
        <ul className="list-disc pl-4 text-lg text-gray-600">
          <li className="mb-2">
            <strong className="text-blue-800">Acceso global</strong>: Aprende desde cualquier lugar del mundo.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Flexibilidad</strong>: Aprende a tu propio ritmo y horario.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Interactividad</strong>: Participa en foros, chats y sesiones en vivo.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Seguridad</strong>: Protección de datos y transacciones seguras.
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Nuestros Servicios de Aprende en Línea</h2>
        <ul className="list-disc pl-4 text-lg text-gray-600">
          <li className="mb-2">
            <strong className="text-blue-800">Creación de cursos</strong>: Desarrollo de contenidos educativos personalizados.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Plataforma de aprendizaje</strong>: Implementación de LMS (Learning Management System).
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Talleres y sesiones en vivo</strong>: Organización de eventos virtuales interactivos.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Asesoramiento y soporte</strong>: Ayuda continua para estudiantes y instructores.
          </li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Llamado a la Acción</h2>
        <p className="text-lg text-gray-600">
          ¿Necesitas crear o mejorar tu plataforma de aprendizaje en línea? 
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

export default AprendeEnLinea;
