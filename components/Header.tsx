"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Para navegación en Next.js
import Image from "next/image"; // Para las imágenes en Next.js
import styles from "./header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Efecto para el Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Inserción de logo con Next.js Image */}
          <Image src="/logo.png" alt="Path Logo" width={180} height={70} />
        </Link>
      </div>

      {/* Menú de navegación */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <ul>
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  );
};

export default Header;
