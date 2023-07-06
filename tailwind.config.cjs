/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        white: '0 0 10px #fff',
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
