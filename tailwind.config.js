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

    screens: {
      'xsm': '480px',
      ...screens
    },

    extend: {
      colors: {
        'mcmendel-green-primary': '#AED652',
        'mcmendel-green': '#83c99e',
        'mcmendel-orange-primary': '#F78708'
      },

      height: {
        'mcmendel-px-200': '200px',
        
      },

      width: {
        'mcmendel-px-240': '240px'
      },

      fontSize: {
        'mcmendel-rem-1.2': '1.2rem'
      },

      letterSpacing: {
        "mcmendel-2em": "0.8em"
      }

    },
  },
  plugins: [],
}