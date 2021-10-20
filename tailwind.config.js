const {numbers} = require('./src/constants/styles');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
