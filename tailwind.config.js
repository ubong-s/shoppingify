/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        selago: "#FAFAFE",
        california: "#F9A109",
        "burnt-sienna": "#EB5757",
        "peach-cream": "#fff0de",
        "cannon-pink": "#80485b",
        tundora: "#454545",
        gray: "#828282",
      },
      fontFamily: {
        quicksand: `'Quicksand', sans-serif`,
      },
    },
  },
  plugins: [],
};
