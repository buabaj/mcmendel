const { screens, letterSpacing } = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    minHeight: (theme) => ({
      ...theme('spacing'),
    }),

    minWidth: (theme) => ({
      ...theme('spacing'),
    }),

    screens: {
      'xsm': '480px',
      ...screens
    },

    extend: {
      colors: {
        'mcmendel-green-primary': '#AED652',
        'mcmendel-green': '#83c99e',
        'mcmendel-orange-primary': '#F78708',
        'mcmendel-transparent': 'rgba(0,0,0,0.5)',
        'mcmendel-green-transparent': 'rgba(0,0,0,0.5)'
      },

      height: {
        'mcmendel-px-200': '200px',
      },

      flex:{
        'mcmendel-flex-exclude':'100% 0 0'
      },

      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        heading: ['Ubuntu', 'sans-serif']
      },

      width: {
        'mcmendel-px-240': '240px'
      },

      fontSize: {
        'mcmendel-md': '1.05rem'
      },

      letterSpacing: {
        "mcmendel-2em": "0.8em"
      }

    },
  },
  plugins: [],
}