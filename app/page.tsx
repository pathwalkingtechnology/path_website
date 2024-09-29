"use client";  // Esto marca el componente como un Client Component
import Image from 'next/image';
import styles from './page.module.css'; //  CSS de la pagina principal

export default function Home() {
  return (
    <div className={styles.container}>
    
    
      
      {/* Hero section similar to Next.js */}
    <section className={styles.hero}>
  <h1 className={styles.title}>Path - Walking Technology</h1>
  <p className={styles.description}>
    Empoderar a las empresas con soluciones tecnológicas innovadoras.
  </p>
  <div className={styles.buttons}>
    <button className={styles.primaryBtn}>Empezar ya!</button>
    <button className={styles.secondaryBtn}>Aprende más</button>
  </div>
</section>

 <section className={styles.foundation}>
  <Image
    src="/takeover.avif"  // Imagen placeholder
    alt="Built on a foundation of fast, production-grade tooling"
    width={700}
    height={400}
    className={styles.foundationImage}
  />
  <h2>Construido sobre una base de herramientas rápidas y de calidad de producción</h2>
</section>


      {/* Sección de Servicios */}
      <section className={styles.services}>
        <div className={styles.serviceItem}>
          <h2>Desarrollo</h2>
          <p>Ofrecemos soluciones de desarrollo de última generación para ayudar a que su negocio prospere.</p>
        </div>
        <div className={styles.serviceItem}>
          <h2>Diseño Gráfico</h2>
          <p>Nuestro equipo creativo le da vida a su marca con imágenes impresionantes.</p>
        </div>
      </section>

   </div>
  );
}

