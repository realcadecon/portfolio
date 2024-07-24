/** @type {import('tailwindcss').Config} */

export default {
  content: ["./{pages,layouts,components,src,assets}/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      tightest: '-.05em'
    },
    extend: {
      fontFamily: {
        "display": ["Chakra Petch"],
        "roboto": ["Roboto"],
      }
    },
  },
  plugins: [],
};

