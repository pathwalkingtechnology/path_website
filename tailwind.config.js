module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',    // Azul claro
        secondary: '#2ecc71',  // Verde claro
        pathOrange: '#FF4B2C',
        pathBlue: '#081E33',
        background: '#f7f7f7', // Gris claro
        text: '#333333',       // Gris oscuro
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        geist: ['GeistVF', 'sans-serif'], // Aquí agregamos la fuente Geist
        geistMono: ['GeistMonoVF', 'monospace'], // Agregamos la fuente Geist Mono
      },
    },
  },
  plugins: [],
};
