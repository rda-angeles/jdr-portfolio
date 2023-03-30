/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-primary": "#cf0a0a",
        "c-secondary": "#dc5f00",
        "c-tertiary": "#eeeeee",
      },
      fontFamily: {
        "f-primary": "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
