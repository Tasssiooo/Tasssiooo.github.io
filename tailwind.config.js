/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'settings': 'spin 700ms linear',
      },
      dropShadow: {
        'tooltip': '0 0 5px rgba(0, 0, 0, 0.3)',
        'dark': '0 0 5px rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}

