/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".perspective": {
      perpective: "1000px"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    },
  })
})

export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('src/assets/imgs/home-caixa-img.png')",
      },
      transformOrigin: {
        
      }
    },
  },
  plugins: [Myclass],
}

