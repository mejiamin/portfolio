/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#274046",
        first: "#222831",
        second: "#393e46",
        third: "#0092ca",
        fourth: "#eeeeee",
        'meji-rgb': "rgb(39, 64, 70)",
        'orange-rgba': "rgba(30, 30, 30, 0.7)",
      },
    },
  },
  plugins: [],
}

