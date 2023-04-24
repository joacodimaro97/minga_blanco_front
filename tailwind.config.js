/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme: {
  extend: {
    backgroundImage: {
      'hero': "url('./assets/images/1mangashero.png')",
      'fondo': "('./assets/images/narutofon.png')"

    },
    colors:{
      primary:'#60a5fa',
      secondary:'#ddd6fe',
      acento:'#333',
      dark:'#000',
      green:'#0F5C2E',
      blueviolet:'#4338CA'
    }
  }
  },
  variants: {},
  plugins: []
 }

