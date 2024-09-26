import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <Link href="https://facebook.com">
            <FaFacebook className="hover:text-primary" />
          </Link>
          <Link href="https://twitter.com">
            <FaTwitter className="hover:text-primary" />
          </Link>
          <Link href="https://linkedin.com">
            <FaLinkedin className="hover:text-primary" />
          </Link>
          <Link href="https://instagram.com">
            <FaInstagram className="hover:text-primary" />
          </Link>
        </div>
        <p className="text-sm">&copy; 2024 Path. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
