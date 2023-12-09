/** @type {import('tailwindcss').Config} */
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
        primary: "#FFC53F",
        secondary: "#121212",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        tinos: ["tinos", "serif"],
      },
    },
  },
  plugins: [],
};
