/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: '#ffb4ac',
        green: '#679186',
        blue: '#264e70',
        light: '#ffebd3',
      },
      fontFamily: {
        DM: ['Mountains of Christmas', 'serif'],
      },
    },
  },
  plugins: [],
}
