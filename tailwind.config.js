/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
      },
      colors: {
        'pink-100': '#ffe4ec',
        'pink-400': '#f472b6',
        'purple-100': '#f3e8ff',
        'purple-400': '#a78bfa',
        'blue-100': '#e0f2fe',
      },
    },
  },
  plugins: [],
}