/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "settings": "spin 700ms linear",
      },
      dropShadow: {
        "tooltip": "0 0 5px rgba(0, 0, 0, 0.3)",
        "dark": "0 0 5px rgba(255, 255, 255, 0.1)",
        "logo": "0 0 5px rgba(0, 0, 0, 0.25)",
        "react": "0 0 5px rgba(99, 198, 255, 1)",
        "tailwind": "0 0 5px rgba(40, 198, 255, 1)",
        "vite": "0 0 5px rgba(203, 60, 255, 1)",
      },
    },
  },
  plugins: [],
};
