/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'btn-primary': "url('/svg/btn-primary.svg')",
        'btn-secondary': "url('/svg/btn-secondary.svg')",
        'btn-m-secondary': "url('/svg/btn-m-secondary.svg'"
      }
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '712px',
      // => @media (min-width: 712px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    }
  },
  plugins: [],
}