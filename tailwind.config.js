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
        mainColorBlue: "#575FC8",
        mainColorWhite: "#FEF9F3",
        pageColorWhite: "#E1E1E1",
        pageColorTan: "#E8E3DD",
        fontColorPurple: "#575FC8",
        mainColorPurple: "#575FC8",
        fontColorGray: "#4D4D4D",
        linkColorRed: "#FF5B52",
        activeLinkGold: "#E4A949",
        mainColorTan: "#E8E3DD",
        fontColorBlack: "#000000",
        fontYellow: "#E4A949",
        namesPink: "rgba(234, 135, 177, 0.12)",
        namesGreen: "rgba(0, 169, 157, 0.12)",
        namesFontPink: "#AE0E51",
        namesFontGreen: "#08514C",
        quotesPageOpacity: "rgba(246, 187, 73, 0.13)",
        inactiveLink: "#FFFFFF",
        activeLink: "#E4A949",
        secondSection: "#FFFAF1",
        cards: "#F4F4FF",
        hYellow: "#F6BB49",
        inactive: "#A9A9A9"
      },
      letterSpacing: {
        tightest: '0.25em',
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
        OpenSans: ["Open Sans", "sans-serif"],
        Roboto: ['Roboto', 'sans-serif'],
        RobotoSlab: ['"Roboto Slab"', 'serif'],
      },      
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 650,
      },
      fontSize: {
        "6xl": "64px",
        "custom-sm": "20px",
        "2xl": "26px",
        "9xl": "106px"
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.4)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          },
          ".text-shadow-md": {
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)",
          },
          ".text-shadow-lg": {
            textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
          },
        },
        ["responsive", "hover"],
      );
    },
  ],
};
