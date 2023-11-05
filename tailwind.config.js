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
        'new-purple': '#D0D6F9',
      },
      fontFamily: {
        'sans': 'Barlow Condensed, sans-serif',
        'serif': 'Bellefair, serif',
        'mono': 'Barlow, sans-serif'
      }
    },
  },
  plugins: [],
}

