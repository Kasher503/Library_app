const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        softYellow: "#F6E58D",
        lightGray: "#D3D3D3",
        mediumGray: "#999999",
        borderGray: "#CCCCCC",
        transparentWhite: "rgba(255, 255, 255, 0.85)",
        DarkColor: '#1D232A',
        'theme-blue': '#152C5B',
        designColor: "#ff014f",
        'theme-dark-Blue': '#1967A9',
        'theme-light-Blue':'#000000',
      },
      borderColor: {
        default: "#CCCCCC",
        softYellow: "#F6E58D",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        Lora: ['"Poppins", serif'],
        Osward: ['"Oswald", sans-serif'],
      },
      fontSize: {
        'xxs': '0.5rem',
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require('daisyui'),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
