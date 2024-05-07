/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}",  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      gray: '#eee',
      primary: "#fb923c", 
      secondary: "#fee8d6",
      third: 'FF8A08',
      fourth: 'FFC100'
    },
    extend: {},
  },
  plugins: [],
}

