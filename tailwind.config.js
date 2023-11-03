/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': 'rgba(255, 255, 255, 0.1)',
        'link-hover': 'rgba(255, 255, 255, 0.6)',
      }
    },
  },
  plugins: [],
}

