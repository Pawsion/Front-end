module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColorBlue: "#575FCC",
        mainColorWhite: "#FEF9F3",
        pageColorWhite: "#E1E1E1",
        pageColorTan: '#E8E3DD',
        fontColorPurple: "#575FC8",
        mainColorPurple: "#575FC8",
        fontColorGray: "#4D4D4D",
        linkColorRed: "#FF5B52",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(-20%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(20%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        pulseFast: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        slideInRight: "slideInRight 2s ease-in-out forwards",
        slideInLeft: "slideInLeft 3s ease-in-out forwards",
        pulseFast: "pulseFast 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundColor: {
        "custom-gray": "#F2F2F2",
      },
      fontFamily: {
        Bogart: ["Bogart", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      fontSize: {
        '6xl': '64px', 
        'custom-sm': '20px',
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.4)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  variants: {},
  plugins: [ 
    function ({ addUtilities }) {
    addUtilities(
      {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
      },
      ['responsive', 'hover']
    )
  }
],
};
