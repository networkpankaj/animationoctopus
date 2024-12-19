/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {keyframes: {
      slideUp: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' }
      }
    },
    animation: {
      'slideUp': 'slideUp 0.5s ease forwards'
    },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}