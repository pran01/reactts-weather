/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        allura: "'Allura', cursive",
        "titillium-web": "'Titillium Web', sans-serif",
      },
    },
  },
  plugins: [],
};
