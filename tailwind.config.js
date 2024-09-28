module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',    // Azul oscuro
        secondary: '#1F9E4A',  // Verde sobrio
        pathOrange: '#FF4B2C',
        pathBlue: '#081E33',
        background: '#1a1a1a', // Fondo oscuro inmersivo
        text: '#f7f7f7',       // Texto claro
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        geist: ['GeistVF', 'sans-serif'], // Fuente Geist
        geistMono: ['GeistMonoVF', 'monospace'], // Fuente Geist Mono
      },
    },
  },
  plugins: [],
};
