/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icamp: '#F39C11'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
