/** @type {import('tailwindcss').Config} */



module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        custom: {
          'pr':'#94a3b8',
          'green': '#00ff00',
          'blue': '#0000ff',
          'red': '#ff0000',
        },
      },
    },
  },
  plugins: [],
};
