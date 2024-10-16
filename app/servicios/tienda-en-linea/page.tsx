import Image from 'next/image';
import Link from 'next/link';

const TiendaEnLinea = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-5xl font-bold mb-4 text-blue-800">Tienda en Línea</h1>
      <Image 
        src="/tienda-en-linea.jpg" 
        alt="Tienda en Línea" 
        width={800} 
        height={600} 
        className="rounded-lg"
      />
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">¿Qué es una Tienda en Línea?</h2>
        <p className="text-lg text-gray-600">
          Una tienda en línea es una plataforma digital que permite a los clientes explorar y comprar productos o servicios de manera segura y conveniente.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Beneficios de una Tienda en Línea</h2>
        <ul className="list-disc pl-4 text-lg text-gray-600">
          <li className="mb-2">
            <strong className="text-blue-800">Acceso global</strong>: Llega a clientes en todo el mundo.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Conveniencia</strong>: Compra y pago en línea, 24/7.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Análisis de datos</strong>: Monitorea ventas y comportamiento de clientes.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Costos reducidos</strong>: Menos gastos de mantenimiento y personal.
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Nuestros Servicios de Tienda en Línea</h2>
        <ul className="list-disc pl-4 text-lg text-gray-600">
          <li className="mb-2">
            <strong className="text-blue-800">Diseño web personalizado</strong>: Tienda en línea atractiva y funcional.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Desarrollo de e-commerce</strong>: Integración con plataformas de pago y envío.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Marketing digital</strong>: Promoción y publicidad en redes sociales.
          </li>
          <li className="mb-2">
            <strong className="text-blue-800">Mantenimiento y actualización</strong>: Seguridad y rendimiento óptimos.
          </li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Llamado a la Acción</h2>
        <p className="text-lg text-gray-600">
          ¿Necesitas crear o mejorar tu tienda en línea? 
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

export default TiendaEnLinea;
