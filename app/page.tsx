import Link from "next/link";

const HomePage = () => {
  return (
    <section
      className="hero bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("/banner4.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Imagen de fondo de la página de inicio"
    >
      <div className="container mx-auto p-4 text-center text-white">
        {/* Texto de bienvenida */}
        <h1 className="text-5xl font-bold font-geist text-black mb-4">
          Desarrollamos soluciones tecnológicas innovadoras
        </h1>
        <p className="text-2xl font-mono text-ecoGreen mb-6">
          Transformamos tus ideas en realidad
        </p>
        {/* Botón de llamado a la acción */}
        <Link href="/contacto" legacyBehavior>
          <button className="bg-techOrange hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-lg">
            ¡Hablemos de tu proyecto!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
