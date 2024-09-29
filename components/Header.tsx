/* eslint-disable */
"use client";  // Esto marca el componente como un Client Component
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // Efecto para cambiar el color del menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? 'bg-grey' : 'bg-white shadow-md'} fixed top-0 left-0 w-full z-50 transition-colors duration-300 py-4`}>
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
        <nav className="flex space-x-6">
          <Link href="/" className={`text-black hover:text-gray-700 transition-colors duration-300`}>
            Inicio
          </Link>
          <Link href="/nosotros" className={`text-black hover:text-gray-700 transition-colors duration-300`}>
            Nosotros
          </Link>
          <Link href="/servicios" className={`text-black hover:text-gray-700 transition-colors duration-300`}>
            Servicios
          </Link>
          <Link href="/contacto" className={`text-black hover:text-gray-700 transition-colors duration-300`}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
