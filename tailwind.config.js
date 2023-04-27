/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#ff7d1a",
        paleOrange: "#ffede0",
        veryDarkBlue: "#1d2025",
        darkGrayishBlue: "#68707d",
        grayishBlue: "#b6bcc8",
        lightGrayishBlue: "#f7f8fd",
      },
    },
  },
  plugins: [],
};
