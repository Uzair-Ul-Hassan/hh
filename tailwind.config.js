/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flex: {
        50: "0 1 50%",
      },
      gridTemplateColumns: {
        af: "repeat(auto-fit, minmax(30rem, 1fr))",
      },
    },
    screens: {
      lar: "1100px",
      med: "850px",
    },
  },
  plugins: [],
};
