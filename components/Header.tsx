/* components/Header.tsx */
"use client";  // Marca el componente como Client Component
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; // Iconos para el menú móvil
import './globals.css'; // Importa estilos compartidos

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${isScrolled ? 'bg-white' : 'bg-white shadow-md'} fixed top-0 left-0 w-full z-50 transition-colors duration-300 py-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          {/* Logo */}
          <Image 
            src="/logo-web.png" 
            alt="Path Logo" 
            width={180} 
            height={80} 
            className="w-32"
          />
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className={`text-primary hover:text-secondary transition-colors duration-300`}>
            Inicio
          </Link>
          <Link href="/nosotros" className={`text-primary hover:text-secondary transition-colors duration-300`}>
            Nosotros
          </Link>
          <Link href="/servicios" className={`text-primary hover:text-secondary transition-colors duration-300`}>
            Servicios
          </Link>
          <Link href="/contacto" className={`text-primary hover:text-secondary transition-colors duration-300`}>
            Contacto
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-primary text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="text-primary hover:text-secondary transition-colors duration-300" onClick={toggleMobileMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-primary hover:text-secondary transition-colors duration-300" onClick={toggleMobileMenu}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="text-primary hover:text-secondary transition-colors duration-300" onClick={toggleMobileMenu}>
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-primary hover:text-secondary transition-colors duration-300" onClick={toggleMobileMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
