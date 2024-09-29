import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Nosotros() {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-lg">
            En Path, nuestro equipo se dedica a ofrecer soluciones tecnológicas innovadoras que impulsan el crecimiento de empresas
            en todo el mundo. Nos enfocamos en crear un impacto positivo a través de la tecnología y la transformación digital.
          </p>
        </div>
      </section>

      {/* Sección de equipo */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Miembro 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <Image
                src="/mil.png"
                alt="Milton De Campos"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-secondary">Milton De Campos</h3>
              <p className="text-text mb-4">CEO & Fundador</p>
              <div className="flex justify-center space-x-4">
                <Link href="https://linkedin.com/milton" target="_blank">
                  <FaLinkedin className="text-primary text-2xl hover:text-secondary" />
                </Link>
                <Link href="https://facebook.com/milton" target="_blank">
                  <FaFacebook className="text-primary text-2xl hover:text-secondary" />
                </Link>
                <Link href="https://instagram.com/milton" target="_blank">
                  <FaInstagram className="text-primary text-2xl hover:text-secondary" />
                </Link>
              </div>
            </div>

            {/* Miembro 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <Image
                src="/mil.png"
                alt="Nicolas Galván"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-secondary">Nicolas Galván</h3>
              <p className="text-text mb-4">Director de Ventas</p>
              <div className="flex justify-center space-x-4">
                <Link href="https://linkedin.com/lucia" target="_blank">
                  <FaLinkedin className="text-primary text-2xl hover:text-secondary" />
                </Link>
                <Link href="https://facebook.com/lucia" target="_blank">
                  <FaFacebook className="text-primary text-2xl hover:text-secondary" />
                </Link>
                <Link href="https://instagram.com/lucia" target="_blank">
                  <FaInstagram className="text-primary text-2xl hover:text-secondary" />
                </Link>
              </div>
            </div>

            {/* Miembro 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <Image
                src="/mil.png"
                alt="Claudio Cáceres"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-secondary">Claudio Cáceres</h3>
              <p className="text-text mb-4">Director de Marketing</p>
              <div className="flex justify-center space-x-4">
                <Link href="https://linkedin.com/carlos" target="_blank">
                  <FaLinkedin className="text-primary text-2xl hover:text-secondary" />
                </Link>
                <Link href="https://facebook.com/carlos" target="_blank">
                  <FaFacebook className="text-primary text-2xl hover:text-secondary" />
                </Link>
                <Link href="https://instagram.com/carlos" target="_blank">
                  <FaInstagram className="text-primary text-2xl hover:text-secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
