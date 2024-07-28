/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      colors: {
        'primary-font': '#53B175',
        'primary-btn': '#181725',
        'hover-btn': 'rgb(129 209 160 / 37%)',
      },
    },
  },
  plugins: [],
}
