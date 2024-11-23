/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#0044B4',
          200: '#1C237D'
        },
        cyan: '#4ECFE2',
        background: '#F4F3EF'
      }
    },
  },
  plugins: [],
}

