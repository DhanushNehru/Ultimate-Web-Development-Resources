/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        fredoka: ["Fredoka One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        BodoniModa: ["Bodoni Moda", "sans-serif"],
        acme: ["Acme", "sans-serif"],
        "bruno-ace-sc": ["Bruno Ace SC", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        raleway: ["Raleway", "sans-serif"],
        Diphylleias: ["Diphylleia", "sans-serif"],
        Moirai: ["Moirai+One"],
        Montserrat: ["Montserrat", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        CinzelDecorative: ["Cinzel Decorative", "sans-serif"],
      },
      
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
