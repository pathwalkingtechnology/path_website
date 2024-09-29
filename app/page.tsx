/* app/page.tsx */
"use client";  // Esto marca el componente como un Client Component
import Image from 'next/image';
import styles from './page.module.css'; // CSS específico para la página principal
import { motion } from 'framer-motion';


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
      
    {/* Sección de Servicios */}
<section className={styles.services}>
  <div className="grid grid-cols-3 gap-6">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={styles.serviceItem}
    >
      <h2>Desarrollo Web</h2>
      <p>Ofrecemos soluciones de desarrollo web de última generación para ayudar a que su negocio prospere.</p>
      <Image 
        src="/spheres-light.avif" 
        alt="Desarrollo Web" 
        width={300} 
        height={200} 
        className="mb-4 imagen-servicio"
      />
    </motion.div>
    
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={styles.serviceItem}
    >
      <h2>Diseño Gráfico</h2>
      <p>Nuestro equipo creativo le da vida a su marca con imágenes impresionantes.</p>
      <Image 
        src="/spheres-light.avif" 
        alt="Diseño Gráfico" 
        width={300} 
        height={200} 
        className="mb-4 imagen-servicio"
      />
    </motion.div>
    
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={styles.serviceItem}
    >
      <h2>Marketing Digital</h2>
      <p>Impulsamos tu presencia en línea con estrategias de marketing efectivas.</p>
      <Image 
        src="/spheres-light.avif" 
        alt="Marketing Digital" 
        width={300} 
        height={200} 
        className="mb-4 imagen-servicio"
      />
    </motion.div>
    
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className={styles.serviceItem}
    >
      <h2>Desarrollo Móvil</h2>
      <p>Creación de aplicaciones móviles innovadoras para tu negocio.</p>
      <Image 
        src="/spheres-light.avif" 
        alt="Desarrollo Móvil" 
        width={300} 
        height={200} 
        className="mb-4 imagen-servicio"
      />
    </motion.div>
    
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={styles.serviceItem}
    >
      <h2>Consultoría IT</h2>
      <p>Asesoramiento experto para optimizar tus sistemas y procesos.</p>
      <Image 
        src="/spheres-light.avif" 
        alt="Consultoría IT" 
        width={300} 
        height={200} 
        className="mb-4 imagen-servicio"
      />
    </motion.div>
    
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className={styles.serviceItem}
    >
      <h2>Ciberseguridad</h2>
      <p>Protección y seguridad para tus datos y sistemas.</p>
      <Image 
        src="/spheres-light.avif" 
        alt="Ciberseguridad" 
        width={300} 
        height={200} 
        className="mb-4 imagen-servicio"
      />
    </motion.div>
  </div>
</section>


{/* Sección de Tecnologías */}
<section className="py-20 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-primary mb-6"> Estamos comprometidos con la innovación y la calidad. </h2>
    <div className="flex justify-center mb-10">
      <div className="w-1/4">
        <Image src="/js.png" alt="Tecnología 1" width={100} height={100} className="mb-4" />
        <h3>JavaScript</h3>
      </div>
      <div className="w-1/4">
        <Image src="/react.png" alt="Tecnología 2" width={100} height={100} className="mb-4" />
        <h3>React</h3>
      </div>
      <div className="w-1/4">
        <Image src="/node.png" alt="Tecnología 3" width={100} height={100} className="mb-4" />
        <h3>Node.js</h3>
      </div>
      <div className="w-1/4">
        <Image src="/mysql.png" alt="Tecnología 4" width={100} height={100} className="mb-4" />
        <h3>MySQL</h3>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="w-1/4">
        <Image src="/html5.png" alt="Tecnología 5" width={100} height={100} className="mb-4" />
        <h3>HTML5</h3>
      </div>
      <div className="w-1/4">
        <Image src="/mongo.png" alt="Tecnología 6" width={100} height={100} className="mb-4" />
        <h3>Mongo DB</h3>
      </div>
      <div className="w-1/4">
        <Image src="/nextjs.png" alt="Tecnología 7" width={100} height={100} className="mb-4" />
        <h3>Nextjs</h3>
      </div>
      <div className="w-1/4">
        <Image src="/python.png" alt="Tecnología 8" width={100} height={100} className="mb-4" />
        <h3>Python</h3>
      </div>
    </div>
  </div>
</section>

{/* Carrusel de Imágenes */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-primary mb-6">Nuestros Proyectos</h2>
    <div className="flex justify-center">
      <div className="w-1/4">
        <Image src="/proyecto1.jpg" alt="Proyecto 1" width={300} height={200} className="mb-4" />
      </div>
      <div className="w-1/4">
        <Image src="/proyecto1.jpg" alt="Proyecto 2" width={300} height={200} className="mb-4" />
      </div>
      <div className="w-1/4">
        <Image src="/proyecto1.jpg" alt="Proyecto 3" width={300} height={200} className="mb-4" />
      </div>
      <div className="w-1/4">
        <Image src="/proyecto1.jpg" alt="Proyecto 4" width={300} height={200} className="mb-4" />
      </div>
    </div>
  </div>
</section>      
    </div>
  );
}
