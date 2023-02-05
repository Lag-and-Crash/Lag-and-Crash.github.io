/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': '#00E0C7'
      }
    },
  },
  plugins: [],
}
