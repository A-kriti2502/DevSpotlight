/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      keyframes: {
        wave: {
          '0%': { transform: 'translateY(-10px) translateX(-10px)' },
          '50%': { transform: 'translateY(10px) translateX(10px)' },
          '100%': { transform: 'translateY(-10px) translateX(-10px)' },
        },
        slide:{
          'from': {transform : 'translateX(0)'},
          'to': {transform : 'translateX(calc(-250px*7))'},
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'tech-slide': 'slide 15s linear infinite '
      },

    },
    fontFamily:{
      signature : ["Great Vibes"]
    }
  },
  plugins: [],
};
