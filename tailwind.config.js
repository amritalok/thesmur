/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode via a CSS class
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B76E79', // a chic rose-gold accent
        gold: '#D4AF37', // a luxurious gold accent
        lightBg: '#F8F8F8', // light background for light mode
        darkBg: '#1F1F1F', // dark background for dark mode
      },
      fontFamily: {
        // Montserrat for headings and Inter for body text
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
