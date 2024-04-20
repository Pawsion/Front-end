/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColorBlue: '#575FCC',
        mainColorWhite: '#FEF9F3',
        pageColorWhite: '#F2F2F2'
      },
      backgroundColor: {
        'custom-gray': '#F2F2F2',
      },
      fontFamily: {
        Bogart: ['Bogart', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  
  variants: {},
  plugins: [],
};
