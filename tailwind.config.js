/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "mythos-navy": "#0D1B2A",
        "mythos-deep": "#111C2E",
        "mythos-purple": "#432371",
        "mythos-gold": "#F4C542",
      },
    },
  },
  plugins: [],
};
