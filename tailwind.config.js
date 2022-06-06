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
      'custom-min': '100vh'
    }),

    minWidth: (theme) => ({
      ...theme('spacing'),
      'custom-min': '100vw',
      'custom-small': '150px'
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
        'custom-xsm': '20px',
        'custom-xxsm': '16px',
        'custom-xxxsm': '10px'
      },

      backgroundPosition: {
        'custom-y-lg': '0px -400px',
        'custom-y-md': '0px -500px',
        'custom-x': '205px -0px',
        // 'custom-image': '-25px -8px',
        // 'custom-image': '-25px -8px',
        'custom-image-mob': '-35px 0px'
      },

      objectPosition: {
        'custom-fit': '51px 50px'
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
        'custom-500': '500px',
        'custom-250': '250px'
      },

      width: {
        'custom-240': '240px',
        'custom-200': '200px'
      }
    },
  },
  plugins: [],
}