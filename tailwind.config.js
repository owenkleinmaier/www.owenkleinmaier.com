/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
      },
      colors: {
        "my-blue": "#2AB5F6",
      },
      fontSize: {
        "9xl": "96px",
        "8xl": "56px",
        "7xl": "36px",
        "6xl": "23px",
      },
    },
  },
  plugins: [],
};
