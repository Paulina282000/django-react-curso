/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button_hireUs": '#003366', // Azul oscuro para botones y elementos destacados
        "button_hireUs_bg": '#D0B48C', // Color arena para el fondo del botón
        "button_hireUs_text": '#ffffff', // Blanco para el texto de los botones
        "text_dark": '#333333', // Gris oscuro para textos generales
        "background_main": '#F7F7F7', // Gris claro para fondos generales
        "text_secondary": '#777777', // Gris medio para textos secundarios
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".underline-button_hireUs": {
          "textDecoration": "underline",
          "textDecorationColor": "#003366",
          "textDecorationThickness": "0.1em",
        },
      };
      addUtilities(newUtilities, ["hover", "focus"]);
    },
  ],
};



