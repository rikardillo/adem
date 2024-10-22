/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "adem-primary": {
          50: "#f0f8fe",
          100: "#ddeefc",
          200: "#c3e1fa",
          300: "#9ad0f6",
          400: "#69b6f1",
          500: "#4698eb",
          600: "#317cdf",
          700: "#2866cd",
          800: "#2754a6",
          900: "#254883",
          950: "#203660",
        },
        "adem-secondary": {
          50: "#fff9eb",
          100: "#feecc7",
          200: "#fed989",
          300: "#febf4b",
          400: "#fdab2f",
          500: "#f78309",
          600: "#db5d04",
          700: "#b53e08",
          800: "#93300d",
          900: "#79280e",
          950: "#461202",
        },
      },
      fontFamily: {
        sans: ["Inter", "Prompt", "Arial", "Sans Serif"],
        inter: ["Inter"],
        prompt: ["Prompt"],
      },
    },
  },
  plugins: [],
};
