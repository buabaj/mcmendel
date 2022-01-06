const { screens, letterSpacing } = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '480px',
      ...screens
    },

    extend: {
      colors: {
        'mcmendel-green': '#83c99e'
      },

      letterSpacing: {
        "mcmendel-2em":"0.8em"
      }

    },
  },
  plugins: [],
}