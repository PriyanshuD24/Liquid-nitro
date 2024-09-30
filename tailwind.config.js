/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#080a1a',
        primary: '#00bfff'
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'fade': 'fade-in 0.3s ',

      },
      backgroundImage: {
        'backgroundCard': "url('/src/assets/background/bg.png')",
        'backgroundGradientCard': "url('/src/assets/background/bg-gradient.png')",
        'chakra' : "url('/src/assets/background/chakra.png')"
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
        titillium: ['Titillium Web', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}

