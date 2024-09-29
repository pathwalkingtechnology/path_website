import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './page.module.css';

export default function Nosotros() {
  return (
    <div className={styles.container}>
      {/* Sección de sobre nosotros */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Sobre Nosotros</h1>
        <p className={styles.description}>
          En Path, nuestro equipo se dedica a ofrecer soluciones tecnológicas innovadoras que impulsan el crecimiento de empresas en todo el mundo. Nos enfocamos en crear un impacto positivo a través de la tecnología y la transformación digital.
        </p>
      </section>

      {/* Sección de equipo */}
      <section className={styles.foundation}>
        <h2 className={styles.subtitle}>Nuestro Equipo</h2>
        <div className={styles.teamGrid}>
          {/* Miembro 1 */}
          <div className={styles.teamMember}>
            <Image src="/mil.png" alt="Milton De Campos" width={200} height={200} className={styles.teamImage} />
            <h3 className={styles.teamName}>Milton De Campos</h3>
            <p className={styles.teamRole}>CEO & Fundador</p>
            <div className={styles.socialLinks}>
              <Link href="(link unavailable)" target="_blank">
                <FaLinkedin className={styles.socialIcon} />
              </Link>
              <Link href="https://facebook.com/milton" target="_blank">
                <FaFacebook className={styles.socialIcon} />
              </Link>
              <Link href="https://instagram.com/milton" target="_blank">
                <FaInstagram className={styles.socialIcon} />
              </Link>
            </div>
          </div>

          {/* Miembro 2 */}
          <div className={styles.teamMember}>
            <Image src="/mil.png" alt="Nicolas Galván" width={200} height={200} className={styles.teamImage} />
            <h3 className={styles.teamName}>Nicolas Galván</h3>
            <p className={styles.teamRole}>Director de Ventas</p>
            <div className={styles.socialLinks}>
              <Link href="(link unavailable)" target="_blank">
                <FaLinkedin className={styles.socialIcon} />
              </Link>
              <Link href="https://facebook.com/lucia" target="_blank">
                <FaFacebook className={styles.socialIcon} />
              </Link>
              <Link href="https://instagram.com/lucia" target="_blank">
                <FaInstagram className={styles.socialIcon} />
              </Link>
            </div>
          </div>

          {/* Miembro 3 */}
          <div className={styles.teamMember}>
            <Image src="/mil.png" alt="Claudio Cáceres" width={200} height={200} className={styles.teamImage} />
            <h3 className={styles.teamName}>Claudio Cáceres</h3>
            <p className={styles.teamRole}>Director de Marketing</p>
            <div className={styles.socialLinks}>
              <Link href="(link unavailable)" target="_blank">
                <FaLinkedin className={styles.socialIcon} />
              </Link>
              <Link href="https://facebook.com/carlos" target="_blank">
                <FaFacebook className={styles.socialIcon} />
              </Link>
              <Link href="https://instagram.com/carlos" target="_blank">
                <FaInstagram className={styles.socialIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
