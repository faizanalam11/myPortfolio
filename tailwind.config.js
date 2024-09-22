/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        titleFont: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow:{
        shadowOne: "10px 10px 19px #1c1e22 , -10px -10px 19px #262a2e"
      }
    },
  },
  plugins: [],
}