/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/components/**/*.{html,js}',
    './src/pages/**/*.{html,js}',
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'bubble-blue': "url('/src/assets/bg.jpg')",
      },
      screens: {
        'phone': '300px',
        'tablet': '640px',
        'laptop': '1024px',
      }
    },
    colors:{
      transparent: 'transparent',
      'white' : '#ffffff',
      'black' : '#000000',
      'gray':'#ced7d8',
      'gray-t':'#ced7d8a4',
      'dunkBlue':'#316879',
      'coral':'#f47a60',
      'turquoise':'#7fe7dc',
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
