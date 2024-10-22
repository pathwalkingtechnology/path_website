import Image from 'next/image';
import Link from 'next/link';

const TiendaEnLinea = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-900">Tienda en Línea</h1>
      <Image 
        src="/tienda-en-linea.jpg" 
        alt="Tienda en Línea" 
        width={800} 
        height={600} 
        className="rounded-lg mb-4"
      />
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">¿Qué es una tienda en línea?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Una tienda en línea es una plataforma digital que permite a los clientes explorar y comprar productos o servicios de manera segura y conveniente.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Beneficios de una tienda en línea</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong className="text-blue-800">Acceso global</strong>: Llega a clientes en todo el mundo.
          </li>
          <li>
            <strong className="text-blue-800">Conveniencia</strong>: Compra y pago en línea, 24/7.
          </li>
          <li>
            <strong className="text-blue-800">Análisis de datos</strong>: Monitorea ventas y comportamiento de clientes.
          </li>
          <li>
            <strong className="text-blue-800">Costos reducidos</strong>: Menos gastos de mantenimiento y personal.
          </li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Nuestros servicios de tienda en línea</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed space-y-2">
          <li>
            <strong className="text-blue-800">Diseño web personalizado</strong>: Tienda en línea atractiva y funcional.
          </li>
          <li>
            <strong className="text-blue-800">Desarrollo de e-commerce</strong>: Integración con plataformas de pago y envío.
          </li>
          <li>
            <strong className="text-blue-800">Marketing digital</strong>: Promoción y publicidad en redes sociales.
          </li>
          <li>
            <strong className="text-blue-800">Mantenimiento y actualización</strong>: Seguridad y rendimiento óptimos.
          </li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Transforma tu tienda en línea hoy</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Crea una experiencia de compra excepcional para tus clientes con una tienda en línea diseñada a medida.
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

export default TiendaEnLinea;
