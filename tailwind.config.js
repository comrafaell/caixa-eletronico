/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}

