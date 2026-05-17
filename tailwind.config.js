/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080706",
        gold: "#D9A441",
        goldLight: "#F4D58D",
        sand: "#E7C994",
        nile: "#0E5A7A",
        sudan: "#B3261E",
        ivory: "#FFF8E8",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
