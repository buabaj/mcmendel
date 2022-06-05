const {
  screens,
  letterSpacing,
  lineHeight
} = require('tailwindcss/defaultTheme')
module.exports = {
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
        'green-primary': '#020f01',
        // #AED652
        // #83c99e
        // #F78708
        'green-bright': '#83c99e',
        'green-deep': '#AED652',
        'green-gray': '#60846E',
        'light-gray': '#E6EEE7',
        'green-light': '#EBF4EC',
        'custom-transparent': 'rgba(0,0,0,0.5)',
        'custom-transparent-deeper': 'rgba(0,0,0,0.15)'
      },

      fontSize: {
        'custom-xxlg': '60px',
        'custom-xlg': '45px',
        'custom-lg': '35px',
        'custom-md': '30px',
        'custom-sm': '24px',
        'custom-xsm': '20px'

      },

      fontFamily: {
        'roboto': 'roboto',
        'mulish': 'mulish',
        'montserrat': 'Montserrat'
      },

      boxShadow: {
        'card': '0px 3px 5px rgba(0, 0, 0, 0.2)'
      },

      lineHeight: {
        'hero-spaced': '110%'
      },

      height: {
        'custom-200': '200px',
        'custom-800': '800px'
      },

      width: {
        'custom-240': '240px'
      }
    },
  },
  plugins: [],
}