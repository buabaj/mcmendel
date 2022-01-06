const { screens } = require('tailwindcss/defaultTheme')
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
      color:{
        'mcmendel-green':'#ADF455'
      }
    },
  },
  plugins: [],
}