/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#FFECC9",
        "primary-white": "#FFFFFF",
        "primary-orange": "#F66F4D",
        "primary-blue": "#2E476B",
        "primary-gray": "#5B5F62",
        "primary-black": "#2D3134",
      },
    },
  },
  plugins: [],
};
