/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '720px': '720px'
      },
      colors: {
        'color-1': '#232536'
      },

      backgroundColor: {
        'rgba': 'rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        'header': "url('/img/header.png')"
      }
    },
  },
  plugins: [],
}

