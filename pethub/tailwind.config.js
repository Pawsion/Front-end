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
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(-20%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(20%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        slideInRight: 'slideInRight 2s ease-in-out forwards',
        slideInLeft: 'slideInLeft 2s ease-in-out forwards',
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
