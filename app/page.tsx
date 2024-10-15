
import Link from "next/link";

const HomePage = () => {
  return (
    <section
      className="hero bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("/intro.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Imagen de fondo de la página de inicio"
    >
      <div className="container mx-auto p-4 text-center text-white">
        <h1 className="text-5xl font-bold">Desarrollamos soluciones tecnológicas innovadoras</h1>
        <p className="text-2xl">Transformamos tus ideas en realidad</p>
        <Link href="/contacto" legacyBehavior>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
            ¡Hablemos de tu proyecto!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
