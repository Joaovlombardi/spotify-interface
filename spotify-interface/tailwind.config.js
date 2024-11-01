/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cinza-claro': '#2D2D2D',
        'cinza-escuro': '#121212',
        'verde': '#26BF4C',
        'bg': '#000000',
      },
    },
  },
  plugins: [],
}

