import React from 'react';;
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src="/logo-web.png" alt="Path Logo" className="w-32" />
        </div>
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-secondary">
            Inicio
          </Link>
          <Link href="/nosotros" className="hover:text-secondary">
            Nosotros
          </Link>
          <Link href="/servicios" className="hover:text-secondary">
            Servicios
          </Link>
          <Link href="/contacto" className="hover:text-secondary">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
