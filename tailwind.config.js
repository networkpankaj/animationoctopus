/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blink: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0 },
      },
    
    // keyframes: {
    //   slideUp: {
    //     '0%': { transform: 'translateY(100%)' },
    //     '100%': { transform: 'translateY(0)' }
    //   }
    // },
    animation: {
      'blink': 'blink 1s step-end infinite'
    },
      fontFamily: {
        'montserrat': ['Manrope', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}