/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['custom-position'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'], // Default font
        playfair: ['"Playfair Display"', 'serif'], // Font for h1
      },
    },
  },
  plugins: [],
}