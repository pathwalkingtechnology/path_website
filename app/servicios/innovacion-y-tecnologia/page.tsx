import Image from 'next/image';
import Link from 'next/link';

const InnovacionTecnologia = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Innovación y Tecnología</h1>
      <Image 
        src="/innovacion-tecnologia.jpg" 
        alt="Innovación y Tecnología" 
        width={800} 
        height={600} 
      />
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2">¿Qué es Innovación y Tecnología en Path?</h2>
        <p className="text-lg">
          En Path, entendemos que la innovación y la tecnología son fundamentales para el crecimiento y éxito de tu negocio. 
          Nuestro equipo de expertos, liderado por nuestro ingeniero en sistemas, se especializa en ingeniería de procesos, análisis y procesamientos de información para ofrecerte soluciones personalizadas.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Servicios de Innovación y Tecnología</h2>
        <ul className="list-disc pl-4">
          <li className="mb-2">
            <strong>Análisis de Procesos</strong>: Identificamos áreas de mejora en tus procesos actuales y te ofrecemos soluciones eficientes.
          </li>
          <li className="mb-2">
            <strong>Diseño de Sistemas</strong>: Creamos sistemas personalizados para automatizar y optimizar tus procesos.
          </li>
          <li className="mb-2">
            <strong>Análisis de Datos</strong>: Procesamos y analizamos tus datos para ofrecerte insights valiosos.
          </li>
          <li className="mb-2">
            <strong>Consultoría en Tecnología</strong>: Te asesoramos en la selección y implementación de tecnologías adecuadas para tu negocio.
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Nuestro Enfoque</h2>
        <ul className="list-disc pl-4">
          <li className="mb-2">
            <strong>Entendimiento de tus necesidades</strong>: Nos enfocamos en comprender tus objetivos y desafíos.
          </li>
          <li className="mb-2">
            <strong>Análisis y diagnóstico</strong>: Identificamos áreas de mejora y oportunidades.
          </li>
          <li className="mb-2">
            <strong>Desarrollo de soluciones</strong>: Creamos soluciones personalizadas y efectivas.
          </li>
          <li className="mb-2">
            <strong>Implementación y seguimiento</strong>: Aseguramos la correcta implementación y seguimiento de tus proyectos.
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Nuestro Equipo en Sistemas</h2>
        <p className="text-lg">
          Nuestro equipo con más de 18 años de experiencia en ingeniería de procesos, análisis y procesamientos de información. 
          Su enfoque en la innovación y la tecnología te brinda soluciones efectivas y personalizadas.
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-2">Consultas?</h2>
        <p className="text-lg">
          ¿Necesitas mejorar tus procesos y aumentar tu eficiencia? 
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

export default InnovacionTecnologia;
