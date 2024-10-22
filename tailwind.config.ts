import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ecoGreen: "#416864", // Verde amigable con el medio ambiente
        techOrange: "#FF8C42", // Naranja tecnológico
        lightGray: "#f9f9f9", // Fondo claro para contenedores
        darkGray: "#666", // Texto gris oscuro
      },
      fontFamily: {
        mono: ['GeistMonoVF', 'monospace'], // Fuente personalizada Geist Mono
        geist: ['GeistVF', 'sans-serif'], // Fuente personalizada Geist
      },
      boxShadow: {
        card: "0 0 10px rgba(0, 0, 0, 0.1)", // Sombra suave para tarjetas
      },
      borderRadius: {
        card: "10px", // Borde redondeado estándar
      },
    },
  },
  plugins: [],
};

export default config;
