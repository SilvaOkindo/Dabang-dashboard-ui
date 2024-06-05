/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'min': '1536px'},
        'xl': {'min': '1280px'},
        'lg': {'min': '1024px'},
        'md': {'min': '768px'},
        'sm': {'min': '640px'},
        'xs': {'min': '475px'},
      },
      container: {
        screens: {
          '2xl': '1280px',
          'xl': '1024px',
          'lg': '768px',
          'md': '640px',
          'sm': '475px',
          'xs': '100%',
        },
      },

      boxShadow: {
        'card-shadow': '#091e4240 0px 1px 0px 0px'
      },

      colors: {
        '-gray': '#737791',
        'primary': '#5D5FEF'
      }
    },
  },
  plugins: [],
}