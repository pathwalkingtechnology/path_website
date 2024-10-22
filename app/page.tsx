import Link from "next/link";

const HomePage = () => {
  return (
    <section
      className="hero bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("/one.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Imagen de fondo de la página de inicio"
    >
      <div className="container mx-auto p-4 text-center text-white">
        {/* Texto de bienvenida */}
        <h1 className="text-5xl font-bold font-geist text-black mb-4">
  Desarrollamos Web Apps personalizadas para tu negocio
</h1>
<p className="text-2xl font-mono text-ecoGreen mb-6">
  Potencia tu presencia digital con soluciones a medida.
</p>
        {/* Botón de llamado a la acción */}
        <Link href="/contacto" legacyBehavior>
          <button className="bg-techOrange hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-lg">
  Solicita tu Web App ahora
</button>
        </Link>
      </div>
      <section className="bg-gray-100 py-12 text-center">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-6">¿Por qué una Web App es clave para tu negocio?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-semibold">Accesible en cualquier dispositivo</h3>
        <p>Tu aplicación estará disponible para usuarios de móvil, tablet y desktop.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Escalable y flexible</h3>
        <p>Las Web Apps crecen contigo, adaptándose a las necesidades de tu negocio.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Soporte y mantenimiento continuo</h3>
        <p>Nos encargamos de mantener tu Web App al día y funcionando perfectamente.</p>
      </div>
    </div>
  </div>
</section>
    </section>
    
  );
};

export default HomePage;
