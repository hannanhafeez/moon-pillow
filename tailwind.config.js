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
    transformOrigin: {
      "0": "0%",
    },
    
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['DINPro', 'sans-serif', 'system-ui']
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      scale:{
        "60": "0.6",
        "65": "0.65",
        "70": "0.7",
        "120": "1.2",
        "130": "1.3",
        "135": "1.35",
        "140": "1.4",
        "145": "1.45",
      },
      "height": {
        ...numbers
      },
      "minHeight":{
        ...numbers
      },
      "maxHeight":{
        ...numbers
      },
      "minWidth":{
        ...numbers
      },
      "maxWidth":{
        ...numbers
      },
      "inset":{...numbers},
      "padding":{
        '30px': '30px',
        '-30px': '-30px',
      },
      "margin":{
        '30px': '30px',
        '-30px': '-30px',
      },
      "gap":{
        '30px': '30px',
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
        '24': '24px',
        '28': '28px',
        '30': '30px',
      },
      colors: colors,
      letterSpacing: {
        tight: '0.1px',
        normal: '0.2px',
        loose: '0.3px'
      },
      outline: {
        primary_yellow:  `1px solid ${colors.primary_yellow}`,
      },
      keyframes:{
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.6) translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.7s ease-out',
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
