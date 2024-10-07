/* app/page.tsx */
"use client";  // Esto marca el componente como un Client Component
import Image from 'next/image';
import styles from './page.module.css'; // CSS específico para la página principal


export default function Home() {
  return (
    <div className={styles.container}>
      
      {/* Hero section similar a Next.js */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Path - Walking Technology</h1>
        <p className={styles.description}>
          Empoderamos a las empresas con soluciones tecnológicas innovadoras, impulsando tu negocio hacia el futuro.
        </p>
        <div className={styles.buttons}>
          <button className="primaryBtn">Empezar ya!</button>
          <button className="secondaryBtn">Aprende más</button>
        </div>
      </section>
      
      {/* Sección de Fundación */}
      <section className={styles.foundation}>
        <div className="image-container">
          <Image
            src="/takeover.avif"  // Imagen placeholder
            alt="Construido sobre una base de herramientas rápidas y de calidad de producción"
            width={700}
            height={400}
            className={styles.foundationImage}
          />
        </div>
        <h2>Construimos sobre una base de herramientas rápidas y de calidad de producción</h2>
        <p>
          Utilizamos tecnologías de vanguardia para asegurar que nuestras soluciones sean escalables, seguras y eficientes.
        </p>
      </section>
   
{/* Sección de Tecnologías */}
<section className="py-20 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-primary mb-6"> Estamos comprometidos con la innovación y la calidad. </h2>
    <div className="flex justify-center mb-10">
      <div className="w-1/4">
        <Image src="/js.png" alt="Tecnología 1" width={100} height={100} className="mb-4" />
        
      </div>
      <div className="w-1/4">
        <Image src="/react.png" alt="Tecnología 2" width={100} height={100} className="mb-4" />
       
      </div>
      <div className="w-1/4">
        <Image src="/node.png" alt="Tecnología 3" width={100} height={100} className="mb-4" />
       
      </div>
      <div className="w-1/4">
        <Image src="/mysql.png" alt="Tecnología 4" width={100} height={100} className="mb-4" />
       
      </div>
    </div>
    <div className="flex justify-center">
      <div className="w-1/4">
        <Image src="/html5.png" alt="Tecnología 5" width={100} height={100} className="mb-4" />
        
      </div>
      <div className="w-1/4">
        <Image src="/mongo.png" alt="Tecnología 6" width={180} height={100} className="mb-4" />
        
      </div>
      <div className="w-1/4">
        <Image src="/nextjs.png" alt="Tecnología 7" width={100} height={100} className="mb-4" />
       
      </div>
      <div className="w-1/4">
        <Image src="/python.png" alt="Tecnología 8" width={180} height={100} className="mb-4" />
        
      </div>
    </div>
  </div>
</section>


    </div>
  );
}
