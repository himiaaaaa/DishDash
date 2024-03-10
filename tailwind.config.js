/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}",  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textColor: {
      white: "#FFF",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
}

