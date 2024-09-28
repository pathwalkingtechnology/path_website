"use client";  // Esto marca el componente como un Client Component
import Image from 'next/image';
import styles from './page.module.css'; //  CSS de la pagina principal

export default function Home() {
  return (
    <div className={styles.container}>
    
    
      {/* Built on a foundation */}
      <section className={styles.foundation}>
  <Image
    src="/takeover.avif"  // Imagen placeholder
    alt="Built on a foundation of fast, production-grade tooling"
    width={700}
    height={400}
    className={styles.foundationImage}
  />
  <h2>Built on a foundation of fast, production-grade tooling</h2>
</section>
    
      {/* Hero section similar to Next.js */}
    <section className={styles.hero}>
  <h1 className={styles.title}>Path - Walking Technology</h1>
  <p className={styles.description}>
    Empowering businesses with innovative technology solutions.
  </p>
  <div className={styles.buttons}>
    <button className={styles.primaryBtn}>Get Started</button>
    <button className={styles.secondaryBtn}>Learn More</button>
  </div>
</section>

      {/* Sección de Servicios */}
      <section className={styles.services}>
        <div className={styles.serviceItem}>
          <h2>Development</h2>
          <p>We offer state-of-the-art development solutions to help your business thrive.</p>
        </div>
        <div className={styles.serviceItem}>
          <h2>Graphic Design</h2>
          <p>Our creative team brings your brand to life with stunning visuals.</p>
        </div>
      </section>

      {/* Built on a foundation */}
      <section className={styles.foundation}>
  <Image
    src="/takeover.avif"  // Imagen placeholder
    alt="Built on a foundation of fast, production-grade tooling"
    width={700}
    height={400}
    className={styles.foundationImage}
  />
  <h2>Built on a foundation of fast, production-grade tooling</h2>
</section>
    </div>
  );
}

