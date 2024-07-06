/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#B3A369',
        'secondary': '#003057',
        'dark-gray': '#54585A',
        'light-gray': '#D6DBD4',
        'creme': '#F9F6E5',
        'buzz-gold': '#EAAA00',
        'red-error': '#E04F39',
        'dark-gold': '#857437'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
};
