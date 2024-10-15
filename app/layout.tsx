import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Path",
  description: "Desarrollamos soluciones tecnológicas innovadoras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="es">
      <Head>
        <title>Path - Desarrollamos soluciones tecnológicas innovadoras</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Desarrollamos soluciones tecnológicas innovadoras para transformar tus ideas en realidad" />
        <meta name="keywords" content="desarrollo web, soluciones tecnológicas, innovación" />
        <meta name="author" content="Path" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
