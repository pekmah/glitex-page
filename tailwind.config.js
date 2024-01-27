/** @type {import('tailwindcss').Config} */
const { COLORS } = require("./constants");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        "bg-gray": COLORS["bg-gray"],
        "bg-yellow": COLORS["bg-yellow"],
        "bg-blue": COLORS["bg-blue"],
        "c-yellow": COLORS["c-yellow"],
        "primary-pale": COLORS["primary-pale"],
        "pale-gray": COLORS["pale-gray"],
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        tinos: ["tinos", "serif"],
      },
      fontSize: {
        15: "15px",
        13: "13px",
      },
      lineHeight: {
        11: "50px",
        12: "60px",
      },
    },
  },
  plugins: [],
};
