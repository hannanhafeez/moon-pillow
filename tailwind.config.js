const defaultTheme = require('tailwindcss/defaultTheme')
const {numbers} = require('./src/constants/styles');
const colors = require('./src/constants/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}', 
    './public/index.html',
    './public/index.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['D-DIN-PRO', 'sans-serif', 'system-ui']
    },
    extend: {
      "height": {
        ...numbers
      },
      "minHeight":{
        ...numbers
      },
      "minWidth":{
        ...numbers
      },
      "maxWidth":{
        ...numbers
      },

      height: {
        '0.25': '1px'
      },
      width: {
        '0.25': '1px'
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '14': '14px',
        '18': '18px',
        '19': '19px',
        '20': '20px',
        '24': '24px'
      },
      colors: colors,
      letterSpacing: {
        tight: '0.1px',
        normal: '0.2px',
        loose: '0.3px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
