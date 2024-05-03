/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#FFDA5B',
        'light-main': '#FFEBA7',
        'btn-color': '#FFAA00',
        'black': '#000000',
        'white': '#FFFFFF',
        'gray': '#9F9F9F', 
        'yell': '#FFF9E5',
        'light-gray': '#F0F0F0'

      },
      fontFamily: {
        'inter': ["Inter"],
        'poppins': ["Poppins"],
        'enriqueta': ["Enriqueta"],
        'rubik': ["Rubik"],
      }
    },
  },
  plugins: [],
}

