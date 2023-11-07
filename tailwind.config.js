/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1000px',
      'lg': '800px',
      'md': '525px',
    },
    extend: {
      colors: {
        'header-bg': 'rgba(255, 255, 255, 0.1)',
        'link-hover': 'rgba(255, 255, 255, 0.6)',
        'new-purple': '#D0D6F9',
        'line-color': '#383B4B',
        'crew-title': 'rgba(255, 255, 255, 0.5042)'
      },
      fontFamily: {
        'sans': 'Barlow Condensed, sans-serif',
        'serif': 'Bellefair, serif',
        'mono': 'Barlow, sans-serif'
      }, 
      spacing: {
        '128': '56rem'
      },
    },
  },
  plugins: [],
}

