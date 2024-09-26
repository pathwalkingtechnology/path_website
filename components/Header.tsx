/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';


export default function Header() {
  return (
    <header className="bg-transparent py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          {/* Logo */}
          <img src="/logo-web.png" alt="Path Logo" className="w-32" /> {/* eslint-disable-next-line @next/next/no-img-element */}
        </div>
        <nav className="flex space-x-6">
          <Link href="/" className="text-black hover:text-gray-700 transition-colors duration-300">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-black hover:text-gray-700 transition-colors duration-300">
            Nosotros
          </Link>
          <Link href="/servicios" className="text-black hover:text-gray-700 transition-colors duration-300">
            Servicios
          </Link>
          <Link href="/contacto" className="text-black hover:text-gray-700 transition-colors duration-300">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

