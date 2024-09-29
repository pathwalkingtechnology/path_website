import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Servicios() {
  return (
    <div className={styles.container}>
      {/* Sección de encabezado */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Nuestros Servicios</h1>
        <p className={styles.description}>
          En Path, ofrecemos soluciones tecnológicas adaptadas a tus necesidades. Descubre nuestros principales servicios:
        </p>
      </section>

      {/* Servicios de Desarrollo */}
      <section className={styles.foundation}>
        <h2 className={styles.subtitle}>Desarrollo</h2>
        <div className={styles.serviceGrid}>
          {/* Servicio 1 */}
          <div className={styles.serviceItem}>
            <Image src="/takeover.avif" alt="Web Mastery" width={300} height={200} className={styles.serviceImage} />
            <h3 className={styles.serviceName}>Web Mastery</h3>
            <p className={styles.serviceDescription}>
              Creamos sitios web de alta calidad y rendimiento utilizando tecnologías avanzadas como HTML5, CSS3 y JavaScript.
            </p>
            <Link href="/contacto">
              <button className={styles.serviceButton}>Contáctanos</button>
            </Link>
          </div>

          {/* Servicio 2 */}
          <div className={styles.serviceItem}>
            <Image src="/spheres-light.avif" alt="E-Shop Pro" width={300} height={200} className={styles.serviceImage} />
            <h3 className={styles.serviceName}>E-Shop Pro</h3>
            <p className={styles.serviceDescription}>
              Desarrollamos plataformas e-commerce optimizadas para que vendas más, integradas con sistemas de pago y gestión.
            </p>
            <Link href="/contacto">
              <button className={styles.serviceButton}>Obtén una Cotización</button>
            </Link>
          </div>

          {/* Servicio 3 */}
          <div className={styles.serviceItem}>
            <Image src="/takeover.avif" alt="Virtual Learning Hub" width={300} height={200} className={styles.serviceImage} />
            <h3 className={styles.serviceName}>Virtual Learning Hub</h3>
            <p className={styles.serviceDescription}>
              Diseñamos aulas virtuales robustas para la enseñanza a distancia con opciones personalizables y fáciles de usar.
            </p>
            <Link href="/contacto">
              <button className={styles.serviceButton}>Más Información</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios de Diseño Gráfico */}
      <section className={styles.foundation}>
        <h2 className={styles.subtitle}>Diseño Gráfico</h2>
        <div className={styles.serviceGrid}>
          {/* Servicio 1 */}
          <div className={styles.serviceItem}>
            <Image src="/spheres-light.avif" alt="Brand Identity" width={300} height={200} className={styles.serviceImage} />
            <h3 className={styles.serviceName}>Brand Identity</h3>
            <p className={styles.serviceDescription}>
              Creamos logotipos e imagen corporativa que representan fielmente los valores y la esencia de tu empresa.
            </p>
            <Link href="/contacto">
              <button className={styles.serviceButton}>Ver más</button>
            </Link>
          </div>

          {/* Servicio 2 */}
          <div className={styles.serviceItem}>
            <Image src="/takeover.avif" alt="Commercial Print Suite" width={300} height={200} className={styles.serviceImage} />
            <h3 className={styles.serviceName}>Commercial Print Suite</h3>
            <p className={styles.serviceDescription}>
              Diseñamos papelería comercial desde tarjetas de presentación hasta sobres, alineados con la imagen de tu marca.
            </p>
            <Link href="/contacto">
              <button className={styles.serviceButton}>Ver más</button>
            </Link>
          </div>
          {/* Servicio 3 */}
          <div className={styles.serviceItem}>
            <Image src="/spheres-light.avif" alt="Digital Buzz" width={300} height={200} className={styles.serviceImage} />
            <h3 className={styles.serviceName}>Digital Buzz</h3>
            <p className={styles.serviceDescription}>
              Administramos y diseñamos contenido para redes sociales, con estrategias para potenciar tu marca en el mundo digital.
            </p>
            <Link href="/contacto">
              <button className={styles.serviceButton}>Ver más</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
