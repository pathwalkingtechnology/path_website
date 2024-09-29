/* app/layout.tsx */
import React from 'react';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import localFont from 'next/font/local';

// Cargando las fuentes locales
const geist = localFont({
  src: './fonts/GeistVF.woff',
  display: 'swap',
  variable: '--font-geist',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  display: 'swap',
  variable: '--font-geistMono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`min-h-screen flex flex-col ${geist.variable} ${geistMono.variable}`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* Chatbot flotante */}
        <ChatBot />
      </body>
    </html>
  );
}
