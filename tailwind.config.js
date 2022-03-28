const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: '#e4e4e7',
      ketic: '#030315',
      sky: '#22D3EE',
    },
    extend: {
      backgroundImage: {
        'creator': "url('/assets/watch3.png')",
      }
    },
    fontFamily: {
      staat: ["Staatliches", "cursive"],
      roboto: ["Roboto", "sans-serif"],
    }
  },
  plugins: [],
}