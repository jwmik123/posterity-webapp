module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'creator': "url('/assets/watch3.png')",
      }
    },
    fontFamily: {
      bebas: ["Bebas Neue", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}